import {ImageStyle} from 'react-native'

export interface AvatarProps {
  shape?: 'circle' | 'square' // 样式圆或者方
  source?: string // 图片地址
  size?: 'large' | 'middle' | 'small' | 'default' // 头像size
  style?: ImageStyle
  onError?: Function // 图片错误处理函数
  sex?: 0 | 1 // 根据性别展示默认头像时的处理
}
