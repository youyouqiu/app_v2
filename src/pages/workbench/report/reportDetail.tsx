import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { connect, MapStateToProps } from 'react-redux';
import { NavigationScreenProps } from 'react-navigation';
import { Toast } from 'teaset';
import { scaleSize } from '../../../utils/screenUtil';
import moment from 'moment';
import BaseContainer from '../../../components/Page';
import ReportInfo from './components/reportInfo';
import CompanyInfo from './components/companyInfo';
import LookInfo from './components/lookInfo';
import ReportSchedule from './components/reportSchedule';
import BuyShopInfo from './components/buyShopInfo';

interface propsTypes {
    config: any
    user: any
    sendPoint: any
};

interface reportDetailDataTypes {
    reportInfo: any
    companyInfo: any
    lookInfo: any
    buyShopInfo: any
    reportSchedule: any
};

interface reportItem {
    userName: string
    phone: string
    type: number
    bulidingName: string,
    reportTime: string,
    company: string,
    broker: string,
    id: string
};

class ReportDetail extends Component<propsTypes & NavigationScreenProps> {
    constructor(props: any) {
        super(props);
    }

    state = {
        reportItem: {} as reportItem, // ! 报备列表数据
        reportDetailData: {} as reportDetailDataTypes, // ! 报备详情数据
    }

    componentDidMount() {
        const {navigation} = this.props;
        this.setState({
            reportItem: (((navigation || {}).state || {}).params || {}).item || {},
        }, () => {
            this.getReportDetailData();
        })
    }

    // ? 报备详情数据请求
    getReportDetailData = () => {
        console.log('getReportDetailData');
        const {reportItem} = this.state;
        let reportDetailData: any = {
            reportInfo: {
                userName: reportItem.userName,
                userPhone: reportItem.phone,
                buildingName: reportItem.bulidingName,
                buildingFloor: '1栋-1层-101',
                expectedLookTime: '2019-10-10T10:00:00',
                buildingUrl: {uri: 'http://i2.w.yun.hjfile.cn/slide/201511/2015111912333692489.jpg'}
            },
            companyInfo: {
                company: reportItem.company,
                broker: reportItem.broker,
                brokerPhone: '13678091194',
            },
            lookInfo: {
                userName: '王富贵',
                userPhone: '13812348875',
                sex: 0,
                realLookTime: '2019-10-10T10:00:00',
                urls: [
                    {uri: 'http://hbimg.huabanimg.com/682cc0379edb85f3e484adaf9a8db10a0b5b05f11b22a-MgusCD_fw658'},
                    {uri: 'http://p.store.itangyuan.com/p/chapter/attachment/Et-Set-uE-/EgfvEgbteB6ueBfVEtEVEGuwhb6uEvmS8mmmHvmCg15I5h5NgVMUG7M.jpg'},
                ]
            },
            buyShopInfo: {
                shopName: '12号楼-2层-S7-46002',
                buyPrice: 328000,
                area: 158,
                type: 0,
                shopUrl: {uri: 'http://i2.w.yun.hjfile.cn/slide/201511/2015111912333692489.jpg'}
            },
            reportSchedule: {
                type: reportItem.type,
                schedule: [
                    {
                        name: '老王',
                        type: 0,
                        time: '2019-10-10T10:00:00'
                    },
                    {
                        name: '南宫铁牛',
                        type: 1,
                        time: '2019-10-10T10:00:00'
                    },
                    {
                        name: '欧阳翠花',
                        type: 2,
                        time: '2019-10-10T10:00:00'
                    },
                ]
            },
        };
        if (!reportDetailData.reportInfo) {
            Toast.message('网络连接失败！');
            return;
        }
        this.setState({
            reportDetailData,
        }, () => {
            this.dataProcessing();
        })
    }

    // ? 数据处理
    dataProcessing = () => {
        console.log('dataProcessing');
        const {reportDetailData} = this.state;
        let newReportDetailData = {...reportDetailData};
        ((newReportDetailData || {}).reportInfo || {}).expectedLookTime = moment(((newReportDetailData || {}).reportInfo || {}).expectedLookTime).format('YYYY-MM-DD HH:mm:ss');
        ((newReportDetailData || {}).lookInfo || {}).realLookTime = moment(((newReportDetailData || {}).lookInfo || {}).realLookTime).format('YYYY-MM-DD HH:mm:ss');
        ((newReportDetailData ||{}).lookInfo || {}).sexText = ((newReportDetailData ||{}).lookInfo || {}).sex === 0 ? '女' : '男';
        if (((newReportDetailData || {}).reportSchedule || {}).type === 0) {
            ((newReportDetailData || {}).reportSchedule || {}).typeText = '无效';
        }
        if (((newReportDetailData || {}).reportSchedule || {}).type === 1) {
            ((newReportDetailData || {}).reportSchedule || {}).typeText = '待确认';
        }
        if (((newReportDetailData || {}).reportSchedule || {}).type === 2) {
            ((newReportDetailData || {}).reportSchedule || {}).typeText = '待认购';
        }
        if (((newReportDetailData || {}).reportSchedule || {}).type === 3) {
            ((newReportDetailData || {}).reportSchedule || {}).typeText = '已认购';
        }
        (((newReportDetailData || {}).reportSchedule || {}).schedule || []).map((item: any, index: number) => {
            if (item.type === 0) {
                item.typeText = '发起报备';
            }
            if (item.type === 1) {
                item.typeText = '确认报备';
            }
            if (item.type === 2) {
                item.typeText = '确认看房';
            }
        });
        if (((newReportDetailData || {}).buyShopInfo || {}).buyPrice) {
            ((newReportDetailData || {}).buyShopInfo || {}).buyPriceText = '';
        }
        if (((newReportDetailData || {}).buyShopInfo || {}).type === 0) {
            ((newReportDetailData || {}).buyShopInfo || {}).typeText = '已换客';
        }
        if (((newReportDetailData || {}).buyShopInfo || {}).type === 1) {
            ((newReportDetailData || {}).buyShopInfo || {}).typeText = '已换房';
        }
        if (((newReportDetailData || {}).buyShopInfo || {}).type === 2) {
            ((newReportDetailData || {}).buyShopInfo || {}).typeText = '';
        }
        this.setState({
            reportDetailData: newReportDetailData,
        })
    }

    // ? 拨打电话
    onCallPhone = (phone: string) => {
        console.log('onCallPhone', phone);

    }

    render() {
        const {reportDetailData} = this.state;
        return (
            <BaseContainer
                title='报备详情'
                bodyStyle={{padding: 0, backgroundColor: '#F8F8F8'}}
                scroll={false}
            >
                <View style={styles['wrap']}>
                    <ScrollView style={{height: '100%'}}>
                        <View style={styles['top-wrap']}>
                            <Text style={{fontSize: scaleSize(40), color: '#4A90E2'}}>
                                {((reportDetailData || {}).reportSchedule || {}).typeText}
                            </Text>
                        </View>
                        <View style={styles['content-boldLine']}></View>
                        <View style={{paddingLeft: scaleSize(40), paddingRight: scaleSize(40)}}>
                            <ReportInfo reportInfoData={(reportDetailData || {}).reportInfo || {}} />
                        </View>
                        <View style={styles['content-boldLine']}></View>
                        <View style={{paddingLeft: scaleSize(40), paddingRight: scaleSize(40)}}>
                            <CompanyInfo
                                companyInfoData={(reportDetailData || {}).companyInfo || {}}
                                onConfirm={(phone: string) => {this.onCallPhone(phone)}}
                            />
                        </View>
                        <View style={styles['content-boldLine']}></View>
                        <View>
                            <LookInfo lookInfoData={(reportDetailData || {}).lookInfo || {}} />
                        </View>
                        <View style={styles['content-boldLine']}></View>
                        <View style={{paddingLeft: scaleSize(40), paddingRight: scaleSize(40)}}>
                            <BuyShopInfo buyShopInfoData={(reportDetailData || {}).buyShopInfo || {}} />
                        </View>
                        <View style={styles['content-boldLine']}></View>
                        <View style={{paddingLeft: scaleSize(40), paddingRight: scaleSize(40)}}>
                            <ReportSchedule reportScheduleData={(reportDetailData || {}).reportSchedule || {}} />
                        </View>
                    </ScrollView>
                </View>
            </BaseContainer>
        )
    }
}

const styles = StyleSheet.create({
    'wrap': {
        width: '100%',
        backgroundColor: 'white',
    },
    'top-wrap': {
        borderTopWidth: scaleSize(1),
        borderTopColor: '#EAEAEA',
        padding: scaleSize(40),
    },
    'content-boldLine': {
        width: '100%',
        height: scaleSize(24),
        backgroundColor: '#F8F8F8',
    },
});

const mapStateToProps: MapStateToProps<propsTypes, any, any> = ({config, user, point}) => {
    return {
        config,
        user,
        sendPoint: point.buryingPoint,
    }
}

export default connect(mapStateToProps)(ReportDetail);
