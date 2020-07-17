export interface UserInfo {
  userId?: string
  phoneNumber?: string
  email?: string
  userName?: string
  nickName?: string
  position?: string
  sex?: number
  filialeId?: string
  filiale?: string
  wechat?: string
  wxOpenId?: string
  pinYin?: string
  city?: string
  cityName?: string
  trueName?: string
  avatar?: string
  qq?: string
  organizationName?: string
  fullName?: string
  organization?: string
  address?: string
  expansionUser?: boolean
  isDisplay?: boolean
  ipAddress?: string
}

export interface LoginRespons {
  access_token: string
  refresh_token: string
  expires_in: number
  token_type: string
}

export interface LoginRequest {
  username: string
  password: string
  client_id: string
  client_secret: string
  grant_type: string
}