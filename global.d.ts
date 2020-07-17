import { Store } from 'redux'
import {NavigationParams, NavigationRoute, NavigationScreenProp} from 'react-navigation'

declare global {
  namespace NodeJS {
    interface Global {
      store: Store<any>
      dvaRegistered?: boolean
      navigation: NavigationScreenProp<NavigationRoute<NavigationParams>,NavigationParams>
    }
  }
}
