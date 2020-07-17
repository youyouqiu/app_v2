import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {
  NavigationRouteConfigMap,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';

import Home from '@/pages/home';
import DataReport from '@/pages/dataReport';
import Personal from '@/pages/personal';
import Message from '@/pages/message';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import {NavigationBottomTabOptions, NavigationTabProp} from 'react-navigation-tabs/src/types';

const ICON = {
  HOME: require('@/images/icons/bottomTab/home.png'),
  HOME_ACTIVE: require('@/images/icons/bottomTab/home_active.png'),
  DATA: require('@/images/icons/bottomTab/data.png'),
  DATA_ACTIVE: require('@/images/icons/bottomTab/data_active.png'),
  MESSAGE: require('@/images/icons/bottomTab/message.png'),
  MESSAGE_ACTIVE: require('@/images/icons/bottomTab/message_active.png'),
  PERSONAL: require('@/images/icons/bottomTab/user.png'),
  PERSONAL_ACTIVE: require('@/images/icons/bottomTab/user_active.png'),
}

const routeConfigMap: NavigationRouteConfigMap<NavigationBottomTabOptions, NavigationTabProp<NavigationRoute<NavigationParams>>> = {
  Home: {
    screen: Home,
    navigationOptions: ({
      title: '工作',
      tabBarIcon: ({ focused }): Element => {
        return <Image style={style.icon} source={focused ? ICON.HOME_ACTIVE : ICON.HOME} />
      },
    }),
  },
  Message: {
    screen: Message,
    navigationOptions: ({
      title: '消息',
      tabBarIcon: ({focused}): Element => {
        return <Image style={style.icon} source={focused ? ICON.MESSAGE_ACTIVE : ICON.MESSAGE} />
      },
    }),
  },
  DataReport: {
    screen: DataReport,
    navigationOptions: ({
      title: '数据',
      tabBarIcon: ({ focused }): Element => {
        return <Image style={style.icon} source={focused ? ICON.DATA_ACTIVE : ICON.DATA} />
      },
    }),
  },
  Personal: {
    screen: Personal,
    // screen:TestComponent,
    navigationOptions: ({
      title: '我的',
      tabBarIcon: ({ focused }): Element => {
        return <Image style={style.icon} source={focused ? ICON.PERSONAL_ACTIVE : ICON.PERSONAL} />
      },
    }),
  },
}

const drawConfig = {
  lazy: false,
  tabBarOptions: {
    activeTintColor: '#000000',
    inactiveTintColor: '#CBCBCB',
    style: {
      height: 55,
      marginBottom: 7,
    },
  },
}

const style = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
})

export default createBottomTabNavigator(routeConfigMap, drawConfig);
