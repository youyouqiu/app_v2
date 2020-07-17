import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from './style';

interface TabsState {
  pageLoading: boolean
  tabsType: any
}
interface TabsType {
  source: any
}

export default class Tabs extends Component<any> {
  static defaultProps = {
    shape: 'circle',
  }

  state: TabsState = {
    pageLoading: true,
    tabsType: {
      'zonglan': true,
      'xiangmu': false,
      'gongsi': false,
    },
  }

  componentDidUpdate (prevProps: TabsType): void {
    if (this.props.source !== prevProps.source) {}
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

  render(): Element {
    const { tabsType } = this.state;
    return (
      <View style={style['tabsItemBG']}>
        <TouchableOpacity style={style['tabsItemText']} onPress={(): any => {this.onTabsPage('1')}}>
          <Text style={[style['tabsItemTextFont'], tabsType['zonglan'] ? style['tabsItemTextFont2'] : null]}>总览</Text>
          <View style={style['tabsItemLine']} />
        </TouchableOpacity>
        <TouchableOpacity style={style['tabsItemText']} onPress={(): any => {this.onTabsPage('2')}}>
          <Text style={[style['tabsItemTextFont'], tabsType['xiangmu'] ? style['tabsItemTextFont2'] : null]}>项目</Text>
          <View style={style['tabsItemLine']} />
        </TouchableOpacity>
        <TouchableOpacity style={style['tabsItemText']} onPress={(): any => {this.onTabsPage('3')}}>
          <Text style={[style['tabsItemTextFont'], tabsType['gongsi'] ? style['tabsItemTextFont2'] : null]}>经纪公司</Text>
          <View style={style['tabsItemLine']} />
        </TouchableOpacity>
      </View>
    )
  }
}
