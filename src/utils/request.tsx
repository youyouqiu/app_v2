// import { DeviceEventEmitter } from 'react-native'
// import AsyncStorage from '@react-native-community/async-storage'
import DeviceInfo from 'react-native-device-info'
// import { logout } from './utils'
import {Platform} from 'react-native'
import UUIDGenerator from 'react-native-uuid-generator';
import {RequestUrl} from '@/models/global'
import {PromiseResponseData} from '@/services/typings/type'
import {DeviceInfoType, MethodType} from './typings/utils'
let reLoginStatus = false
let reloginList: Array<any> = []


//获取设备信息
function getDeviceInfo(): DeviceInfoType {
  const deviceinfo = {
    Source: Platform.OS === 'ios' ? 1 : 2, // 1 ios 2 android 3 web
    DeviceId: DeviceInfo.getUniqueId(),
    VersionCode: DeviceInfo.getVersion(),
    Timestamp: Math.ceil(new Date().getTime() / 1000),
  } as DeviceInfoType
  return deviceinfo
}

//刷新token
async function reLogin() {
  const store = global.store
  const url = `${store.getState().config.requestUrl.auth}/connect/token`
  const userInfo = store.getState().user
  let res1: any
  if (userInfo && userInfo.userInfo) { // 因为在405异地登录和406修改密码的状态的状态下用户信息已经被清空。这时走不到这里面来。所以都不能重新进行登录。
    if (reLoginStatus) { // true 代表已经执行过一次此函数，需要重新等待函数继续
      const res = await new Promise(resolve => {
        reloginList.push(resolve)
      })
      return res
    } else {
      reLoginStatus = true
      const loginData = {
        grant_type: 'refresh_token',
        client_id: '8595c44f4c0841b38ad85f8f2b054db0',
        client_secret: 'Secret',
        refresh_token: userInfo.refresh_token,
      }
      try {
        res1 = await request.postFormUrlEncode(url, {body: loginData})
      } catch (error) {
        res1 = null
      }
      if (res1 && res1.access_token) {
        try {
          const now = Math.round(new Date().valueOf() / 1000)
          const user = {
            access_token: res1.access_token,
            refresh_token: userInfo.refresh_token,
            expired: false,
            expires_to: now + res1.expires_in,
            expires_in: res1.expires_in,
          }
          store.dispatch({
            type: 'user/updateUserAsync',
            payload: user,
          })
        } catch (e) {
        } finally {
          reloginList.forEach(funItem => {
            funItem(res1)
          })
          reloginList = []
          reLoginStatus = false
        }
      } else {
        reloginList = []
        reLoginStatus = false
        return null
      }
    }
  }
  return res1
}

//检查登录状态
async function checkLoginStatue(res: Response, pUrl: string, pData: any): Promise<any> {
  const store = global.store
  if (res.status === 401) {
    const res1 = await reLogin()
    if (res1) {
      pData.headers.set('Authorization', `Bearer ${res1.access_token}`)
      const data = await fetch(pUrl, pData)
      return data
    } else { // 重新登录失败
      // logout()
      throw new Error('登录过期，请重新登录！')
    }
  } else if ((res.status === 405 || res.status === 406) && store.getState().user.status === 200) { //异地登录 //密码修改
    // DeviceEventEmitter.emit('setChange', res.status)
    // logout()
    throw new Error('登录过期，请重新登录！')
  } else if (res.status === 403) {
    // logout()
    throw new Error('登录过期，请重新登录！')
  } else if (res.status === 407) {
    // logout()
    throw new Error('您已被设置为驻场，请重新登录获取权限')
  }
  return res
}


// function logout () {

// }


const request = {
  getUrl: (): RequestUrl => {
    const requestRul: RequestUrl = global.store.getState().global.requestUrl;
    return {
      ...requestRul,
    }
  },
  get(url: string, stoken?: string): PromiseResponseData {
    const headers = new Headers()
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json')
    headers.append('ReqHeader', JSON.stringify(getDeviceInfo()))
    const user = global.store.getState().user || {}
    let token = user.access_token
    if (stoken) {
      token = stoken
    }
    if (token) {
      headers.append('Authorization', `Bearer ${token}`)
    }
    const options = {
      method: 'GET',
      headers,
      mode: 'cors',
    } as RequestInit
    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then((res: Response) => {
          return checkLoginStatue(res, url, options)
        })
        .then((res: Response) => {
          if (res.ok) {
            return res.json()
          } else {
            reject({ code: res.status.toString(), message: '' })
          }
        }).then(data => {
          if (data.code === '0') { // 后端返回体的code为0的时候为正常请求
            resolve(data)
          } else if (data.code === '401') {
            data.message = '登录已过期'
            reject(data)
          } else {
            reject(data)
          }
        }).catch(e => {
          const message = e.message === 'Network request failed' ? '暂无网络，请稍后再试' : e.message
          reject({ code: '500', message: message })
        })
    })
  },
  post(url: string, { body, method = 'POST' }: {body: any; method?: MethodType}, stoken?: string): PromiseResponseData {
    const user = global.store.getState().user || {}
    let token = user.access_token
    if (stoken) {
      token = stoken
    }
    const headers = new Headers()
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json')
    headers.append('ReqHeader', JSON.stringify(getDeviceInfo()))
    if (token) {
      headers.append('Authorization', `Bearer ${token}`)
    }
    let postData
    if (body) {
      postData = JSON.stringify(body)
    }
    const options = {
      method: method,
      headers,
      mode: 'cors',
      body: postData,
    } as RequestInit
    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then(res => {
          return checkLoginStatue(res, url, options)
        })
        .then((res) => {
          if (res.ok) {
            return res.json()
          } else {
            reject({ code: res.status.toString(), message: '' })
          }
        }).then(data => {
          if (data.code === '0') { // 后端返回体的code为0的时候为正常请求
            resolve(data)
          } else if (data.code === '401') {
            data.message = '登录已过期'
            reject(data)
          } else {
            reject(data)
          }
        }).catch(e => {
          const message = e.message === 'Network request failed' ? '暂无网络，请稍后再试' : e.message
          reject({ code: '500', message: message })
        })
    })
  },
  postFormUrlEncode(url: string, { method = 'POST', body }: {method?: MethodType; body: any}): Promise<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    headers.append('ReqHeader', JSON.stringify(getDeviceInfo()))

    const options = {
      method: method,
      headers,
      mode: 'cors',
    } as RequestInit;
    if (body) {
      const bodyParams = new URLSearchParams();
      Object.keys(body).forEach(key => bodyParams.append(key, body[key]));
      options.body = bodyParams.toString();
    }
    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then((res) => {
          return res.json()
        }).then(data => {
          if (data.error) {
            const {error_description = ''} = data
            reject({ code: '500', message: error_description.includes('invalid') ? '账号名或者密码错误' : error_description})
          } else {
            resolve(data)
          }
        }).catch(e => {
          const message = e.message === 'Network request failed' ? '暂无网络，请稍后再试' : e.message
          reject({ code: '500', message: message })
        })
    })
  },
  async upload(url: string, file: {path: string; name: string}): Promise<any> {
    const fd = new FormData()
    const fileGuid = await UUIDGenerator.getRandomUUID()
    fd.append('fileGuid', fileGuid)
    fd.append('name', file.name)
    const fileData = {
      uri: file.path,
      type: 'multipart/form-data',
      name: file.name,
    }
    fd.append('file', fileData)
    const options = {
      method: 'POST',
      body: fd,
    }
    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then((res) => {
          if (res.ok) {
            return res.json()
          } else {
            reject({ code: res.status.toString(), message: '' })
          }
        }).then(data => {
          if (data.code === '0') { // 后端返回体的code为0的时候为正常请求
            resolve(data)
          } else {
            reject(data)
          }
        }).catch(e => {
          resolve({ data: { code: '500', message: e.message } })
        })
    })
  },
  getPure: (url: string): Promise<Response> => {
    return fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return {
          requestError: true,
          code: res.status.toString(),
          message: res.statusText,
        }
      })
      .catch(e => ({ code: '500', message: e.message || '网络异常' }))
  },
}

export default request
