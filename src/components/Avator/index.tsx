import React, { Component } from 'react';
import { Image } from 'react-native';
import { AvatarProps } from '../typings/avator';
import styles from './style';
export default class Avator extends Component<AvatarProps, any> {
  static defaultProps = {
    shape: 'circle',
  }

  state = {

  }

  componentDidUpdate (prevProps: AvatarProps): void {
    if (this.props.source !== prevProps.source) {
      // this.fetchData(this.props.userID);
    }
  }

  render (): Element {
    return <Image style={styles['avaImg']} defaultSource={{uri: require('@/images/icons/public/man.png')}} source={{uri: require('@/images/icons/public/man.png')}}/>
  }
}
