import React, { useEffect, FunctionComponent, useState } from 'react'
import {View, Text} from 'react-native'
import SplashScreen from 'react-native-splash-screen';
import {NavigationSwitchScreenProps} from 'react-navigation'
import {getUserInfo} from '@/utils/storage'

const Index: FunctionComponent<NavigationSwitchScreenProps> = props => {
  const [initFirst] = useState(false);
  global.navigation = props.navigation;
  useEffect(() => {
    SplashScreen.hide()
    init()
  })

  const init = async (): Promise<void> => {
    try {
      await getUserInfo()
      props.navigation.navigate('AppRouter')
    } catch (e) {
      props.navigation.navigate('AuthRouter')
    }
  }

  return !initFirst
    ?
    <View>
      <Text>
        content
      </Text>
    </View>
    :
    // <GuidePage init={init}/>
    <View>
      <Text>
        初始启动页位置
      </Text>
    </View>
}



export default Index
