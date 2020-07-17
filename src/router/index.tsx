import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import StartLoading from './startLoading'
import AppRouter from './appRouter'
import AuthRouter from './authRouter'

const switchNavigator = createSwitchNavigator({
  StartLoading,
  AppRouter,
  AuthRouter,
}, { initialRouteName: 'StartLoading' })

export default createAppContainer(switchNavigator)
