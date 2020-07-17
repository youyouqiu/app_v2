import { ReactNode, ReactElement } from 'react';
import { ViewStyle, TextStyle, ViewProps } from 'react-native';
import { NavigationBackActionPayload } from 'react-navigation';
import { ErrorViewProps } from './errorView';

export type PageError = ErrorViewProps & { isError?: boolean }

export interface TopBarProps {
  title?: ReactNode
  tintColor?: string
  leftView?: ReactNode
  rightView?: ReactNode
  topBarStyle?: ViewStyle
  titleStyle?: TextStyle
  statusBarStyle?: 'dark-content' | 'light-content'
  statusBarHidden?: boolean
  backButtonPress?: (routeName?: NavigationBackActionPayload) => void
}

export interface PageProps extends TopBarProps {
  scroll?: boolean // 页面是否能滑动
  loading?: boolean // 页面加载loading
  hiddenTopBar?: boolean // 隐藏顶部bar
  fixed?: ReactElement //
  error?: PageError // 页面错误
  bodyStyle?: ViewStyle // body样式
  footer?: ReactElement // 页面底部footer
  footerStyle?: ViewStyle // 底部样式
  navBar?: ReactElement //
  viewProps?: ViewProps //
  contentBgColor?: string // 内容背景颜色
}

export interface ContentStyle {
  backgroundColor?: string // 背景色
  marginTop?: number
  flex?: number
}
