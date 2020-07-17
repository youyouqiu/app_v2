import { Dimensions, Platform, PixelRatio } from 'react-native'
import Theme from '@new-space/teaset/themes/Theme'
export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height
export const fontScale = PixelRatio.getFontScale();    //返回字体大小缩放比例
export const pixelRatio = PixelRatio.get();      //当前设备的像素密度

// rate
const widthRate = deviceWidth / 750
const heightRate = deviceHeight / 1334

/**
 * 判断是否为全面屏
 * @returns {boolean}
 */
export function isFullScreen(): boolean {
  // TODO
  return Platform.OS === 'ios' && false
}

export function setSpText(size: number): number {
  size = Math.round((size * (Math.min(widthRate, heightRate)) + 0.5) * pixelRatio / fontScale);
  return size / 2;
}

export function scaleSize(size: number): number {
  return Math.round(widthRate * size)
}

export function scaleHeightSize(size: number): number {
  return Math.round(heightRate * size)
}

export const statusBarHeight = Theme.statusBarHeight
