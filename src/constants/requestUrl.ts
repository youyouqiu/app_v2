/**
 * 定义所有的api请求的来源
 */
import {RequestUrl as LocalApi} from '@/models/global'

export interface ApiTypes {
  local: LocalApi
  localTest: LocalApi
  test: LocalApi
  production: LocalApi
}

export default {
  'local': {
    label: '本地开发环境',
    auth: 'https://dev-authenticationservice.test.xinkongjian.tech:4033',
    api: 'https://dev-api.test.xinkongjian.tech:4033',
    pointUrl: 'https://bp.puzhentan.com/test',
    upload: 'http://rd.xinkongjian.tech:5100',
    review: 'https://dev-examinecenter.test.xinkongjian.tech:4033',
    bdtUrl: 'http://192.168.100.146:5013',
    jjrApi: 'http://192.168.100.161:7000',
    authority: 'https://dev-authorizationcenter2-0.test.xinkongjian.tech:4033'
  },
  'localTest': {
    label: '本地测试环境',
    auth: 'https://dev-authenticationservice.test.xinkongjian.tech:4033',
    api: 'https://dev-api.test.xinkongjian.tech:4033',
    pointUrl: 'https://bp.puzhentan.com/test',
    upload: 'http://rd.xinkongjian.tech:5100',
    review: 'https://dev-examinecenter.test.xinkongjian.tech:4033',
    bdtUrl: 'http://192.168.100.146:5013',
    jjrApi: 'http://rd.xinkongjian.tech:7000',
    authority: 'https://dev-authorizationcenter2-0.test.xinkongjian.tech:4033'
  },
  'test': {
    label: '测试环境',
    auth: 'https://stagging-authenticationservice.puzhentan.com',
    api: 'https://stagging-api.puzhentan.com',
    pointUrl: 'https://bp.puzhentan.com/test',
    upload: 'https://stagging-file.puzhentan.com',
    review: 'https://stagging-examinecenter.puzhentan.com',
    bdtUrl: 'http://192.168.100.146:5013',
    jjrApi: 'https://stagging-jjrapi.puzhentan.com',
    authority: 'https://stagging-authorizationcenter2-0.puzhentan.com'
  },
  'production': {
    label: '正式环境',
    auth: 'https://authenticationservice.puzhentan.com',
    api: 'https://api.puzhentan.com',
    pointUrl: 'https://bp.puzhentan.com',
    upload: 'https://file-v2.puzhentan.com',
    review: 'https://examinecenter.puzhentan.com',
    bdtUrl: 'https://bdt.puzhentan.com',
    jjrApi: 'https://jjrapi.puzhentan.com',
    authority: 'https://authorizationcenter2-0.puzhentan.com'
  },
} as ApiTypes
