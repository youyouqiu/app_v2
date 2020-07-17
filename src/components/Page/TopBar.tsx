import React, { FunctionComponent } from 'react';
import { NavigationBar } from '@new-space/teaset';
import navigation from '@/utils/navigation';
import { scaleSize } from '@/utils/screenUtil';
import { TopBarProps } from '../typings/page';
import { StyleSheet } from 'react-native';

const NavigatorBar: FunctionComponent<TopBarProps> = ({
  title,
  leftView,
  tintColor = '#000',
  rightView,
  topBarStyle,
  titleStyle,
  statusBarStyle = 'dark-content',
  statusBarHidden,
  backButtonPress = navigation.goBack,
}) => {

  if (typeof leftView === 'undefined') {
    leftView = (
      <NavigationBar.BackButton
        icon={require('@/images/icons/public/back_left.png')}
        onPress={backButtonPress}
        style={{ marginLeft: scaleSize(32) }}
      />
    )
  }

  return (
    <NavigationBar
      style={[style['navStyle'], topBarStyle]}
      tintColor={tintColor}
      title={title}
      titleStyle={[style['titleStyle'], titleStyle]}
      leftView={leftView}
      rightView={rightView}
      statusBarStyle={statusBarStyle}
      statusBarHidden={statusBarHidden}
    />
  )
}

const style = StyleSheet.create({
  titleStyle: {
    color: '#000',
    fontSize: scaleSize(32),
    fontWeight:'500',
  },
  navStyle: {
    backgroundColor: '#F4F4F4',
  },
})

export default NavigatorBar
