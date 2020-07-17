import { NavigationRouteConfigMap, CreateNavigatorConfig, NavigationStackRouterConfig } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {StackNavigationOptions, StackNavigationProp, StackNavigationConfig} from 'react-navigation-stack/src/vendor/types';
import BottomTab from './bottomTab';

// 公共页面

// 跳转页面
import ProjectList1 from '@/pages/home/project';
import ProjectList2 from '@/pages/dataReport/project';
import ProjectList3 from '@/pages/message/project';
import ProjectList4 from '@/pages/personal/project';

const routeConfigMap: NavigationRouteConfigMap<StackNavigationOptions, StackNavigationProp> = {
  // 底部导航
  BottomTabNav: {
    screen: BottomTab,
  },
  // 楼盘列表页面
  ProjectList1: {
    screen: ProjectList1,
  },
  // 消息列表页面
  ProjectList2: {
    screen: ProjectList2,
  },
  // 消息列表页面
  ProjectList3: {
    screen: ProjectList3,
  },
  // 消息列表页面
  ProjectList4: {
    screen: ProjectList4,
  },
}

const stackConfig: CreateNavigatorConfig<StackNavigationConfig, NavigationStackRouterConfig, StackNavigationOptions, StackNavigationProp> = {
  // 快速定制导航条，所以这里会将全部的导航置空
  defaultNavigationOptions: () => ({
    header: undefined,
    gesturesEnabled: true,
  }),
  headerMode: 'none',
  // transitionConfig: iOS
  //     ? dynamicModalTransition
  //     : () => ({
  //         screenInterpolator: StackViewStyleInterpolator.forHorizontal
  //     }),
  // transitionConfig: iOS ? dynamicModalTransition : StackViewStyleInterpolator.forHorizontal,
  // cardOverlayEnabled: true
  // transparentCard: true,
  // headerTransitionPreset: 'fade-in-place',
  // headerMode: 'float',
  // mode: 'modal'
  // initialRouteName:'reportSuccess'
}

export default createStackNavigator(routeConfigMap, stackConfig)
