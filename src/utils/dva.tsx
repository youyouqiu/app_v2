import React from 'react';
import { create } from 'dva-core';
import createLoading from 'dva-loading'
import { Provider, connect } from 'react-redux';
import {Model} from 'dva'

export { connect };

export interface Options {
  models: Model[]
  initialState: any
  onError: (e: Error) => void
}

export default ((options: Options): any => {
  const { models } = options
  const app = create(options)
  if (!global.dvaRegistered) {models.forEach(model => app.model(model))}
  global.dvaRegistered = true
  app.start()
  app.use(createLoading())

  const store: any = app._store
  app._start = (container: any) => (): Element => <Provider store={store}>{container}</Provider>
  app.getStore = (): any => store
  global.store = store

  return app
})
