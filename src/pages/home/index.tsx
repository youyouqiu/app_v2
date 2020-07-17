import React, { Component } from 'react';
import { Text, TouchableOpacity, StatusBar, View, Image, ImageBackground } from 'react-native';
import { connect } from '@/utils/dva';
import { ConnectState } from '@/models/connect';
import { Dispatch, AnyAction } from 'redux';
import { UserModelState } from '@/models/user';
import { NavigationInjectedProps } from 'react-navigation';
import { statusBarHeight } from '@/utils/screenUtil';
import IconHome from '@/components/IconHome';
import Page from '@/components/Page';
import style from './style';

interface HomeProps {
  dispatch: Dispatch<AnyAction>
  user: UserModelState
}
interface HomeState {
  pageLoading: boolean
  iconsData: Array<any>
}

class Home extends Component<HomeProps & NavigationInjectedProps, HomeState> {
  state: HomeState = {
    pageLoading: true,
    iconsData: [
      {
        name: '报备管理',
        iconName: 'baobei',
        routerName: 'baobei',
      },
      {
        name: '签约管理',
        iconName: 'qianyue',
        routerName: 'qianyue',
      },
      {
        name: '审核管理',
        iconName: 'shenhe',
        routerName: 'shenhe',
      },
      {
        name: '邀请加入',
        iconName: 'yaoqing',
        routerName: 'yaoqing',
      },
      {
        name: '楼盘管理',
        iconName: 'loupan',
        routerName: 'loupan',
      },
      {
        name: '楼盘销控',
        iconName: 'xiaokong',
        routerName: 'xiaokong',
      },
      {
        name: '经纪公司',
        iconName: 'gongsi',
        routerName: 'gongsi',
      },
    ],
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

  // 标题栏
  leftView = (): any => {
    return (
      <View>
        <Text>假装头像</Text>
      </View>
    )
  }
  rightView = (): any => {
    return (
      <View>
        <Text>假装搜索栏</Text>
      </View>
    )
  }

  render(): Element {
    const { iconsData, pageLoading } = this.state;
    return (
      <Page loading={pageLoading} leftView={this.leftView()} rightView={this.rightView()}>
        <View style={[style['page'], {paddingTop: statusBarHeight}]}>
          {/**手机状态栏（电池，wifi信息） */}
          <StatusBar translucent={true} barStyle="dark-content"/>
          {/**身份卡组件 */}
          <View style={style['card']}>
            <View style={style['cardTop']}>
              <Text style={style['cardTopText']}>{'下午好，张强！'}</Text>
              <View style={style['cardTopID']}>
                <Image style={style['cardTopIDIcon']} source={require('../../images/icons/public/id2x.png')} />
                <Text style={style['cardTopIDText']}>{'项目经理'}</Text>
              </View>
            </View>
            <View style={style['cardBom']}>
              <View style={style['cardBomPro']}>
                <Text style={style['cardTopText']}>{'12'}</Text>
                <Text style={style['cardBomProText']}>待看房</Text>
              </View>
              <View style={style['cardBomProLine']} />
              <View style={style['cardBomPro']}>
                <Text style={style['cardTopText']}>{'6'}</Text>
                <Text style={style['cardBomProText']}>待认购</Text>
              </View>
              <View style={style['cardBomProLine']} />
              <View style={style['cardBomPro']}>
                <Text style={style['cardTopText']}>{'1'}</Text>
                <Text style={style['cardBomProText']}>待签约</Text>
              </View>
              <View style={style['cardBomProLine']} />
              <View style={style['cardBomPro']}>
                <Text style={style['cardTopText']}>{'28'}</Text>
                <Text style={style['cardBomProText']}>审核中</Text>
              </View>
            </View>
          </View>
          {/**首页入口组件 */}
          <IconHome iconsData={iconsData} gotoPath= {this.gotoPath} />
          {/**广告位组件 */}
          <TouchableOpacity style={style['advertisement']} onPress={(): any => {this.gotoPath('guanggao')}}>
            <Image style={style['advertisementImg']} source={require('../../images/images/guanggao2x.png')} />
          </TouchableOpacity>
          {/**行情走势图组件 */}
          <View style={style['quotation']}>
            <ImageBackground style={style['quotationImg']} source={require('../../images/images/hangqing2x.png')}>
              <View style={style['quotationText']}>
                <View style={[style['quotationTextTop'], style['quotationTextTopItem'], style['quotationTextTopItemBom']]}>
                  <View style={style['quotationTextBom']}>
                    <View style={style['quotationTextTop']}>
                      <Text style={style['quotationTextItemFont']}>{'重庆'}</Text>
                      <Text style={style['quotationTextItemFont2']}> / </Text>
                      <Text style={style['quotationTextItemFont2']}>{'8月'}</Text>
                    </View>
                    <Text style={style['quotationTextItemFont3']}>商业行情走势</Text>
                  </View>
                  <View style={style['cardBomProLine']} />
                  <View style={style['quotationTextBom']}>
                    <View style={style['quotationTextTop']}>
                      <Text style={style['quotationTextItemFont4']}>{'20401'}</Text>
                      <Text style={style['quotationTextItemFont2']}>元/㎡</Text>
                    </View>
                    <Text style={style['quotationTextItemFont3']}>平均价格</Text>
                  </View>
                  <View style={style['quotationTextBom']}>
                    <View style={style['quotationTextTop']}>
                      <Image style={style['cardTopIDIcon']} source={require('../../images/icons/public/down2x.png')} />
                      <Text style={style['quotationTextItemFont']}>{'0.32'}</Text>
                      <Text style={style['quotationTextItemFont2']}>%</Text>
                    </View>
                    <Text style={style['quotationTextItemFont3']}>增长率</Text>
                  </View>
                </View>
                <View style={[style['quotationTextTop'], style['quotationTextTopItem']]}>
                  <View style={style['quotationTextBom']}>
                    <Text style={[style['quotationTextItemFont3'], style['quotationTextItemMG']]}>铺源数</Text>
                    <Text style={style['quotationTextItemFont']}>{'3425'}</Text>
                  </View>
                  <View style={style['cardBomProLine']} />
                  <View style={style['quotationTextBom']}>
                    <Text style={[style['quotationTextItemFont3'], style['quotationTextItemMG']]}>在售数</Text>
                    <Text style={style['quotationTextItemFont']}>{'2421'}</Text>
                  </View>
                  <View style={style['cardBomProLine']} />
                  <View style={style['quotationTextBom']}>
                    <Text style={[style['quotationTextItemFont3'], style['quotationTextItemMG']]}>现铺</Text>
                    <Text style={style['quotationTextItemFont']}>{'1421'}</Text>
                  </View>
                  <View style={style['cardBomProLine']} />
                  <View style={style['quotationTextBom']}>
                    <Text style={[style['quotationTextItemFont3'], style['quotationTextItemMG']]}>期铺</Text>
                    <Text style={style['quotationTextItemFont']}>{'1000'}</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          {/**字典/资讯组件 */}
          <View style={style['dictionaries']}>
            <TouchableOpacity style={style['dictionariesItem']} onPress={(): any => {this.gotoPath('zidian')}}>
              <View style={style['dictionariesText']}>
                <Text style={style['dictionariesTextFont']}>楼盘字典</Text>
                <Text style={style['dictionariesTextFont2']}>包打听全新上线</Text>
              </View>
              <Image style={style['dictionariesImg']} source={require('../../images/icons/public/zidian2x.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={style['dictionariesItem']} onPress={(): any => {this.gotoPath('zixun')}}>
              <View style={style['dictionariesText2']}>
                <Text style={style['dictionariesTextFont']}>商业资讯</Text>
                <Text style={style['dictionariesTextFont3']}>“房事”早知道</Text>
              </View>
              <Image style={style['dictionariesImg']} source={require('../../images/icons/public/zixun2x.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </Page>
    )
  }
}

export default connect(({ global}: ConnectState) => ({
  // user: user,
  global: global,
}))(Home)
