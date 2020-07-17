/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import Index from './src/index';
import dva from '@/utils/dva'
import { Toast } from '@new-space/teaset'
const {name} = require('./app.json')
import userModel from 'src/models/user'
import globalModel from 'src/models/global'

// 修改Toast的默认位置
Toast.messageDefaultPosition = 'center';
Toast.defaultPosition = 'center';

// 初始化dva容器
const app = dva({
  initialState: {},
  models: [userModel, globalModel],
  onError: (e) => console.log('onError', e)
})

const App = () => app._start(<Index />)
AppRegistry.registerComponent(name, App);
