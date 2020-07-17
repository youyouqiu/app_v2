import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Dispatch, AnyAction } from 'redux';
import { UserModelState } from '@/models/user';
import { NavigationInjectedProps } from 'react-navigation';
// import { statusBarHeight } from '@/utils/screenUtil';
import { Button } from '@new-space/teaset'
import Page from '@/components/Page';
import style from './style';

interface MessageProps {
  dispatch: Dispatch<AnyAction>
  user: UserModelState
}
interface MessageState {
  switchLoading: boolean
  pageLoading: boolean
}

class Message extends Component<MessageProps & NavigationInjectedProps, MessageState> {
  state: MessageState = {
    switchLoading: false,
    pageLoading: true,
  }

  componentDidMount(): void {
    setTimeout((): void => {
      this.setState({
        pageLoading: false,
      })
    }, 2000);
  }

  gotoPath = (routerName: string): void => {
    this.props.navigation.navigate(routerName);
  }

  // 开关提示
  onSwitch = (): void => {
    this.setState({
      switchLoading: true,
    })
  }

  render(): Element {
    const { switchLoading, pageLoading } = this.state;
    return (
      <Page title="消息" loading={pageLoading} leftView={null}>
        <View style={style['page']}>
          {/**手机状态栏（电池，wifi信息） */}
          <StatusBar translucent={true} barStyle="dark-content"/>
          {/**消息通知开关组件 */}
          <View style={style['messageSwitch']}>
            <View style={style['messageSwitchLeft']}>
              <Image style={style['messageSwitchIcon']} source={require('../../images/icons/public/guanbi2x.png')} />
              <Text style={style['messageSwitchBtnText']}>想及时了解最新房产动态</Text>
            </View>
            <Button title="打开消息通知" style={style['messageSwitchBtn']} titleStyle={style['messageSwitchBtnText']}
              onPress={this.onSwitch} disabled={switchLoading}
            />
          </View>
          {/**系统消息 */}
          <TouchableOpacity style={style['messageSystem']} onPress={(): any => {this.gotoPath('xitong')}}>
            <View style={style['messageSystemIconWrap']}>
              <Image style={style['messageSystemIcon']} source={require('../../images/icons/public/xitong2x.png')} />
              <Text style={style['messageSystemIconNum']}>{'9'}</Text>
            </View>
            <View style={style['messageSystemItem']}>
              <View style={style['messageSystemItemText']}>
                <Text style={style['messageSystemItemTextFont']}>系统消息</Text>
                <Text style={style['messageSystemItemTextFont2']}>{'11-05'}</Text>
              </View>
              <Text style={style['messageSystemItemTextFont3']}>{'您已被王珍珍指派为驻场'}</Text>
            </View>
          </TouchableOpacity>
          {/**通知消息 */}
          <TouchableOpacity style={style['messageSystem']} onPress={(): any => {this.gotoPath('tongzhi')}}>
            <View style={style['messageSystemIconWrap']}>
              <Image style={style['messageSystemIcon']} source={require('../../images/icons/public/tongzhi2x.png')} />
              <Text style={style['messageSystemIconNum']}>{'9'}</Text>
            </View>
            <View style={style['messageSystemItem']}>
              <View style={style['messageSystemItemText']}>
                <Text style={style['messageSystemItemTextFont']}>通知消息</Text>
                <Text style={style['messageSystemItemTextFont2']}>{'11-05'}</Text>
              </View>
              <Text style={style['messageSystemItemTextFont3']}>{'探探周报（2019年10月第一周）'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Page>
    )
  }
}

export default Message
