import {GlobalModelState} from './global'
import {UserModelState} from './user'

export { GlobalModelState, UserModelState };

export interface ConnectState {
  global: GlobalModelState
  user: UserModelState
}

