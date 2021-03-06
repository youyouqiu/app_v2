import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from '@/utils/dva';
import { ConnectState } from '@/models/connect';
import { Dispatch, AnyAction } from 'redux';
import { UserModelState } from '@/models/user';
import style from './style';
import Page from '@/components/Page/index';

interface ProjectProps {
  dispatch: Dispatch<AnyAction>
  user: UserModelState
}
interface ProjectState {

}
class Project extends Component<ProjectProps, ProjectState> {

  render(): Element {
    return (
      <Page title="楼盘">
        <Text>Home</Text>
        <TouchableOpacity style={style['testNav']}>
          <Text>哈哈哈哈</Text>
        </TouchableOpacity>
      </Page>
    )
  }
}

export default connect(({ global, user }: ConnectState) => ({
  user: user,
  global: global,
}))(Project);
