import React, { PureComponent } from 'react'
import {
    ScrollView, StatusBar, ImageBackground,
    View, Text, Image, TouchableOpacity, RefreshControl, DeviceEventEmitter
} from 'react-native'
import { connect, MapStateToProps, DispatchProp } from 'react-redux'
import { NavigationScreenProps, NavigationEventSubscription } from 'react-navigation'
import { ConfigState } from '../../models/types'
import { scaleSize } from '../../utils/screenUtil'
import { checkPermission, verifyUser } from '../../utils/utils'
import { getWeatherIcon } from '../../utils/weather'
import { Toast } from 'teaset'
import messageApi, {
    WaitMessageResponseListItem,
    ReadConditions,
    GetCustomerDynamicExtension,
} from '../../services/message'
import adApi, {
    GetAdvertisingsResponseExtensionListItem,
} from '../../services/advertising'
// @ts-ignore
import QuickEntry from '../../businessComponents/quickEntry'
import EntryIcon from '../../businessComponents/EntryIcon'
// @ts-ignore
import Shadow from '../../components/Shadow'
import styles from './styles'
import tracking, { PageTimer } from '../../utils/BuryPoint'
import InitGuide from './InitGuide'
import StatisticsView  from './statisticsView';
import RankingView from './rankingView';

interface TStateProps {
    config: ConfigState
    user: any
    guest: boolean
    location: any
    weather: any
}

interface State {
    dtInfo: GetCustomerDynamicExtension
    backlog: {
        total: number
        list: WaitMessageResponseListItem[]
    }
    headline: GetAdvertisingsResponseExtensionListItem[]
    refreshing: boolean
}

class Workbench extends PureComponent<NavigationScreenProps & TStateProps & DispatchProp, State> {
    // @ts-ignore
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state
        if (params) {
            return {
                tabBarVisible: params.tabBarVisible
            }
        }
    }

    state = {
        dtInfo: {} as GetCustomerDynamicExtension,
        backlog: {
            total: 0,
            list: [] as WaitMessageResponseListItem[],
        },
        headline: [] as GetAdvertisingsResponseExtensionListItem[],
        refreshing: false,
    }
    didFocusListener?: NavigationEventSubscription
    didBlurListener?: NavigationEventSubscription
    pageTimer: PageTimer = new PageTimer()

    componentDidMount() {
        const { navigation } = this.props
        this.didFocusListener = navigation.addListener('didFocus', this.navigationDidFocus)
        this.didBlurListener = navigation.addListener('didBlur', this.navigationDidBlur)
        if (this.props.config.isFirstUseApp) {
            navigation.setParams({ tabBarVisible: false })
        }
    }

    componentWillUnmount() {
        this.didFocusListener!.remove()
        this.didBlurListener!.remove()
    }

    // 进入页面
    navigationDidFocus = () => {
        DeviceEventEmitter.emit('initMessage') // 进入页面的时候调用获取消息  因为静默消息的原因临时处理
        this.pageTimer.start()
        this.getDtInfo()
    }

    // 离开页面
    navigationDidBlur = () => {
        this.pageTimer.stop()
        tracking.add({
            action: 'view',
            page: '工作台',
            target: '页面',
            action_param: {
                duration: this.pageTimer.duration
            },
        })
    }

    // 请求客户动态接口
    fetchDtInfo = () => {
        return messageApi.dtInfo(this.props.config.requestUrl.api)
    }

    // 请求阅读消息接口
    putRead = (conditions: ReadConditions) => {
        return messageApi.readDt(this.props.config.requestUrl.api, conditions)
    }

    // 获取客户动态data
    getDtInfo = async () => {
        if (this.props.guest) return
        try {
            const { extension } = await this.fetchDtInfo()
            this.setState({ dtInfo: extension })
        } catch (e) {
            console.log('getDtInfo error:', e)
            // TODO
        }
    }

    // 点击客户动态
    handlePressCustomerDynamic = async () => {
        await verifyUser('stronge')
        const { guest, navigation } = this.props
        const { dtInfo } = this.state
        tracking.add({ page: '工作台', target: '客户动态_button' })
        if (guest) {
            navigation.navigate('AuthRouter');
            return
        }
        const conditions = {
            type: dtInfo.type
        }
        this.putRead(conditions).catch(e => console.log('read error:', e))
        navigation.navigate('messageDetail', { type: 3, init: this.getDtInfo })
    }

    // 刷新页面
    handleRefresh = () => {
        this.props.dispatch({ type: 'location/getLocationInfo' })
        this.setState({ refreshing: true }, async () => {
            await this.getDtInfo()
            this.setState({ refreshing: false })
        })
    }

    // 重新定位
    handleRelocation = async () => {
        if (await checkPermission('location')) {
            this.props.dispatch({ type: 'location/getLocationInfo' })
        }
    }

    // 跳转页面
    gotoBacklogPage = (item: WaitMessageResponseListItem) => {
        tracking.add({ page: '工作台', target: '待办提示跳转详情_button' })
        let url = ''
        switch (item.messageType) {
            case 'ReportRepetition': // 报备重客,,
            case 'RemindComfirmBeltLook': //还有到访未确认
                url = 'reportList' // 报备列表
                break;
            case 'RemindProtectBeltLook': //保护期即将到期 ->到访详情
                url = 'visitDetail'
                break;
            default:
                url = 'singDetail' //签约详情
                break
        }
        let params = JSON.parse(item.dataContent) || {}
        this.props.navigation.navigate(url, params)
    }

    // 让引导页消失时间同步tabbar的出现时间
    isVisible = () => {
        const { config } = this.props
        const { params = {} } = this.props.navigation.state
        if (typeof params.tabBarVisible !== undefined) {
            if (config.isFirstUseApp) {
                return !params.tabBarVisible
            } else {
                return config.isFirstUseApp
            }
        } else {
            return config.isFirstUseApp
        }
    }

    render() {
        const { guest, user, location, weather } = this.props
        const { dtInfo, refreshing } = this.state
        return <>
            {/* 状态栏背景透明 */}
            <StatusBar
                translucent={true}
                barStyle='dark-content'
                backgroundColor='rgba(255,255,255,0)'
            />

            {/* Header */}
            <ImageBackground
                style={styles['header-background']}
                source={require('../../images/pictures/workbench2.png')}
            >
                {/* Header 定位和天气 */}
                <View style={styles['location-weather']}>
                    {
                        location.status === 'success'
                            ? (
                                <>
                                    <View style={styles['location']}>
                                        <Text style={styles['location-weather-text']}>
                                            {(location.addressComponent || {}).district || (location.addressComponent || {}).province || '???'}
                                        </Text>
                                        <View style={styles['location-line']} />
                                        <Text style={styles['location-weather-text']}>{weather && weather.now && weather.now.fl || '???'}℃</Text>
                                    </View>
                                    <View style={styles['weather']}>
                                        <Image style={styles['weather-img']} source={getWeatherIcon(weather)} />
                                        <Text style={styles['location-weather-text']}>{weather && weather.now && weather.now.cond_txt || '???'}</Text>
                                    </View>
                                </>
                            )
                            : (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles['relocation']}
                                    onPress={this.handleRelocation}
                                >
                                    <Image style={styles['relocation-img']} source={require('../../images/icons/location.png')} />
                                    <Text style={styles['location-weather-text']}>点击重新定位</Text>
                                </TouchableOpacity>
                            )
                    }
                </View>

                {/* Header 个人信息&客户动态 */}
                <View style={[styles['header-content-wrap'], {}]}>
                    <Shadow style={styles['header-content']}>
                        {/* 个人信息 */}
                        <View>
                            <Text style={styles['header-left-line-1']}>欢迎你{ guest ? '游客' : user.trueName ? `，${user.trueName}` : ''}！</Text>
                            <Text style={styles['header-left-line-2']} numberOfLines={1}>
                                {user.filialeShortName || '暂无公司'} | {user.deptName || '暂无组别'}
                            </Text>
                        </View>
                        {/* 客户动态 */}
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles['header-right']}
                            onPress={this.handlePressCustomerDynamic}
                        >
                            <View style={styles['header-right-line-1']}>
                                <Image source={require('../../images/icons/newMessage2.png')} style={styles['header-img']} />
                                <Text style={styles['header-right-line-1-text']}>客户动态</Text>
                            </View>
                            <Text style={styles['header-right-line-2']}>{dtInfo.number || '0'}</Text>
                        </TouchableOpacity>
                    </Shadow>
                </View>
            </ImageBackground>

            {/* Body content */}
            <View style={{paddingTop: scaleSize(88)}}>
            </View>
            <ScrollView
                style={styles['content']}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.handleRefresh} />}
            >
                {/* 常用功能 */}
                <View style={[styles['entry'], user.Resident ? styles['line'] : null]}>
                    <Text style={styles['entry-title']}>常用功能</Text>
                    <View style={styles['entry-list']}>
                        <EntryIcon title='报备管理' path='reportList' auth={true} icon={require('./../../images/icons/entryIcon/bbgl2x.png')} />
                        <EntryIcon title='签约管理' path='singList' auth={!guest} icon={require('./../../images/icons/entryIcon/qygl2x.png')} />
                        <EntryIcon title='审核管理' path='reviewList' auth={!guest} icon={require('./../../images/icons/entryIcon/shgl2x.png')} />
                        <EntryIcon title='楼盘管理' path='buildingList' auth={!guest} icon={require('./../../images/icons/entryIcon/lpgl2x.png')} />
                        <EntryIcon title='数据统计' path='statisticsList' auth={!guest} icon={require('./../../images/icons/entryIcon/sjtj2x.png')} />
                    </View>
                    <View style={[styles['entry-list'], {paddingTop: scaleSize(44)}]}>
                        <EntryIcon title='楼盘销控' path='marketList' auth={!guest} icon={require('./../../images/icons/entryIcon/lpxk2x.png')} />
                        <EntryIcon title='通讯录' path='communicationList' auth={!guest} icon={require('./../../images/icons/entryIcon/txl2x.png')} />
                        <EntryIcon title='经纪公司管理' path='companyList' auth={!guest} icon={require('./../../images/icons/entryIcon/jjgsgl2x.png')} />
                    </View>
                </View>

                {/* 业务统计 */}
                <View>
                    <View style={styles['sts-wrap']}>
                        <Text style={{fontSize: scaleSize(28), color: '#868686'}}>业务数据统计时间：{'2018/10/1-2018/10/31'}</Text>
                    </View>
                    <StatisticsView />
                </View>

                {/* 排行榜 */}
                <View>
                    <Image source={require('../../images/pictures/paihangbang2x.png')} style={{width: scaleSize(750), height: scaleSize(125)}} />
                    <RankingView />
                </View>
            </ScrollView>

            {/* 快速入口 */}
            <QuickEntry visible={this.props.config.showQuickPage.routeName === 'Workbench'} />

            {/* 新手引导图 */}
            <InitGuide
                visible={this.isVisible()}
                onPress={() => {
                    this.props.dispatch({ type: 'config/noLongerFirst' })
                    this.props.navigation.setParams({ tabBarVisible: true })
                }}
            />
        </>
    }
}

const mapStateToProps: MapStateToProps<TStateProps, any, any> = ({
    user, config, location, weather
}) => ({
    config,
    user: user.userInfo,
    guest: user.status === 404,
    location,
    weather,
})

export default connect(mapStateToProps)(Workbench);
