import { NavigationRouteConfigMap, CreateNavigatorConfig, NavigationStackRouterConfig } from 'react-navigation'
import { StackNavigationOptions, StackNavigationProp, StackNavigationConfig} from 'react-navigation-stack/src/vendor/types'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '@/pages/login'

const routeConfigMap: NavigationRouteConfigMap<StackNavigationOptions, StackNavigationProp> = {
  // 登录页
  Login: {
    screen: Login,
  },
}

const stackConfig: CreateNavigatorConfig<StackNavigationConfig, NavigationStackRouterConfig, StackNavigationOptions, StackNavigationProp> = {
  // 快速定制导航条，所以这里会将全部的导航置空
  defaultNavigationOptions: () => ({
    header: undefined,
    gesturesEnabled: true,
  }),
  headerMode: 'none',
}

export default createStackNavigator(routeConfigMap, stackConfig)
