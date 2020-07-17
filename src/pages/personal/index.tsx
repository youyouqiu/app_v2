import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Dispatch, AnyAction } from 'redux';
import { UserModelState } from '@/models/user';
import { NavigationInjectedProps } from 'react-navigation';
import { statusBarHeight } from '@/utils/screenUtil';
import style from './style';

interface PersonalProps {
  dispatch: Dispatch<AnyAction>
  user: UserModelState
}
interface PersonalState {

}

class Personal extends Component<PersonalProps & NavigationInjectedProps, PersonalState> {

  gotoPath = (): void => {
    this.props.navigation.navigate('ProjectList4');
  }

  render(): Element {
    return (
      <View style={[style['page'], {paddingTop: statusBarHeight}]}>
        <StatusBar translucent={true} barStyle="dark-content"/>
        <Text>Personal</Text>
        <TouchableOpacity style={style['testNav']} onPress={this.gotoPath}>
          <Text>嘿嘿嘿嘿</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Personal;
