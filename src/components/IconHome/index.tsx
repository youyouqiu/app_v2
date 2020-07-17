import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, ImageSourcePropType } from 'react-native';
import style from './style';

interface IconHomeState {
}
interface IconHomeType {
  source: any
}
interface IconImgType  {
  [key: string]: ImageSourcePropType
}
const iconImg: IconImgType = {
  baobei: require('../../images/icons/public/baobei2x.png'),
  qianyue: require('../../images/icons/public/qianyue2x.png'),
  shenhe: require('../../images/icons/public/shenhe2x.png'),
  yaoqing: require('../../images/icons/public/yaoqing2x.png'),
  gongsi: require('../../images/icons/public/gongsi2x.png'),
  loupan: require('../../images/icons/public/loupan2x.png'),
  xiaokong: require('../../images/icons/public/xiaokong2x.png'),
}

export default class IconHome extends Component<any> {
  static defaultProps = {
    shape: 'circle',
  }

  state: IconHomeState = {}

  componentDidUpdate (prevProps: IconHomeType): void {
    if (this.props.source !== prevProps.source) {}
  }

  render (): Element {
    const { gotoPath, iconsData } = this.props;
    return (
      <View style={style['projectIn']}>
        {
          iconsData.map((item: any, index: number) => {
            return (
              <TouchableOpacity
                style={[style['projectInBtn'], index % 4 !== 0 ? style['projectInBtnMG'] : null]}
                onPress={(): any => {gotoPath(item.routerName)}} key={index}
              >
                <Image style={style['projectInIcon']} source={iconImg[item.iconName]} />
                <Text style={style['projectInText']}>{item.name}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
}
