import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { Dispatch, AnyAction } from 'redux';
import { UserModelState } from '@/models/user';
import { NavigationInjectedProps } from 'react-navigation';
// import { statusBarHeight } from '@/utils/screenUtil';
import Page from '@/components/Page';
import Tabs from '@/components/Tabs';
import style from './style';

interface DataReportProps {
  dispatch: Dispatch<AnyAction>
  user: UserModelState
}
interface DataReportState {
  pageLoading: boolean
  tabsType: any
}

class DataReport extends Component<DataReportProps & NavigationInjectedProps, DataReportState> {
  state: DataReportState = {
    pageLoading: true,
    tabsType: {
      'zonglan': true,
      'xiangmu': false,
      'gongsi': false,
    },
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

  // tabs页面切换
  onTabsPage = (tabsName: string): void => {
    const newTabsType = Object.assign({}, this.state.tabsType);
    // 1-总览，2-项目，3-经纪公司
    switch (tabsName) {
    case '1':
      newTabsType['zonglan'] = true;
      newTabsType['xiangmu'] = false;
      newTabsType['gongsi'] = false;
      break;
    case '2':
      newTabsType['zonglan'] = false;
      newTabsType['xiangmu'] = true;
      newTabsType['gongsi'] = false;
      break;
    case '3':
      newTabsType['zonglan'] = false;
      newTabsType['xiangmu'] = false;
      newTabsType['gongsi'] = true;
      break;
    // eslint-disable-next-line no-console
    default: console.log('没有default');
    }
    this.setState({
      tabsType: newTabsType,
    })
  }

  // 右侧城市选择组件
  rightView = (): any => {
    return (
      <View>
        <Image style={style['rightViewIcon']} source={require('../../images/icons/public/dingwei2x.png')} />
        <Text>{'全国'}</Text>
      </View>
    )
  }

  render(): Element {
    const { pageLoading } = this.state;
    return (
      <Page title="数据" loading={pageLoading} topBarStyle={style['topBarStyle']} titleStyle={style['titleStyle']}
        leftView={null} rightView={this.rightView()} >
        <View style={style['page']}>
          <StatusBar translucent={true} barStyle="dark-content"/>
          <Tabs />
        </View>
      </Page>
    )
  }
}

export default DataReport
