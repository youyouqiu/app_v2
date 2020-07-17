import request from '@/utils/request'
import {UserInfo, LoginRespons, LoginRequest} from '../typings/user'
import {ResponseData} from '../typings/type'

export function getUserInfo(url: string, access_token?: string): Promise<ResponseData<UserInfo>> {
  return request.get(`${request.getUrl().api}${url}`, access_token)
}

export function login(url: string, body: LoginRequest): Promise<LoginRespons> {
  return request.postFormUrlEncode(`${request.getUrl().auth}${url}`, {body})
}
