export interface DeviceInfoType {
  Source: 1 | 2 | 3 // 1 ios 2 android 3 web
  DeviceId?: string
  VersionCode?: string | number
  Timestamp: number
}

export type MethodType = 'POST' | 'PUT' | 'DELETE'
