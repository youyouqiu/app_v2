import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect, MapStateToProps } from 'react-redux';
import { NavigationScreenProps } from 'react-navigation';
import { Toast } from 'teaset';
import { scaleSize } from '../../../utils/screenUtil';
import moment from 'moment';
import BaseContainer from '../../../components/Page';

interface propsTypes {
    config: any
    user: any
    sendPoint: any
};

interface reportDetailDataTypes {
    reportInfo: any
    companyInfo: any
    lookInfo: any
    reportSchedule: any
};

class ReportDetail extends Component<propsTypes & NavigationScreenProps> {
    constructor(props: any) {
        super(props);
    }

    state = {
        type: 0, // 报备状态
        reportDetailData: {} as reportDetailDataTypes,
    }

    componentWillMount() {
        // let {navigation} = this.props;
        // this.setState({
        //     type: (((navigation || {}).state || {}).params || {}).type || 0,
        // })
        this.getReportDetailData();
    }

    // 报备详情数据请求
    getReportDetailData = () => {
        console.log('getReportDetailData');
        let reportDetailData: any = {
            reportInfo: {
                userName: '德玛西亚之力-盖伦',
                userPhone: '138****8875',
                buildingName: '鲁能星城',
                buildingFloor: '1栋-1层-101',
                expectedLookTime: '2019-10-10T10:00:00',
            },
            companyInfo: {
                company: '重庆新耀行沙坪坝店',
                broker: '老王',
                brokerPhone: '13678091194',
            },
            lookInfo: {
                userName: '王富贵',
                userPhone: '13812348875',
                sex: 0,
                realLookTime: '2019-10-10T10:00:00',
                urls: [
                    {uri: '../../../images/pictures/timg3.jpg'},
                    {uri: '../../../images/pictures/head.png'},
                ]
            },
            reportSchedule: {
                type: 0
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

    // 数据处理
    dataProcessing = () => {
        console.log('dataProcessing');
        const {reportDetailData} = this.state;
        let newReportDetailData = {...reportDetailData};
        ((newReportDetailData || {}).reportInfo || {}).expectedLookTime = moment(((newReportDetailData || {}).reportInfo || {}).expectedLookTime).format('YYYY-MM-DD HH:mm:ss');
        ((newReportDetailData || {}).lookInfo || {}).realLookTime = moment(((newReportDetailData || {}).lookInfo || {}).realLookTime).format('YYYY-MM-DD HH:mm:ss');
        ((newReportDetailData ||{}).lookInfo || {}).sexText = ((newReportDetailData ||{}).lookInfo || {}).sex === 0 ? '女' : '男';
        if (((newReportDetailData || {}).reportSchedule || {}).type === 0) {
            ((newReportDetailData || {}).reportSchedule || {}).reportTypeText = '无效';
        }
        if (((newReportDetailData || {}).reportSchedule || {}).type === 1) {
            ((newReportDetailData || {}).reportSchedule || {}).reportTypeText = '待确认';
        }
        if (((newReportDetailData || {}).reportSchedule || {}).type === 2) {
            ((newReportDetailData || {}).reportSchedule || {}).reportTypeText = '待认购';
        }
        if (((newReportDetailData || {}).reportSchedule || {}).type === 3) {
            ((newReportDetailData || {}).reportSchedule || {}).reportTypeText = '已认购';
        }
        this.setState({
            reportDetailData: newReportDetailData,
        })
    }

    render() {
        let {reportDetailData} = this.state;
        return (
            <BaseContainer
                title='报备详情'
                bodyStyle={{padding: 0, backgroundColor: '#F8F8F8'}}
                scroll={false}
            >
                <View style={styles['wrap']}>
                    <View style={{borderTopWidth: scaleSize(1), borderTopColor: '#EAEAEA', padding: scaleSize(40)}}>
                        <Text style={{fontSize: scaleSize(40), color: '#4A90E2'}}>{((reportDetailData || {}).reportSchedule || {}).reportTypeText}</Text>
                    </View>
                    <View style={styles['content-boldLine']}></View>
                    <View >
                        <Text>报备信息</Text>
                    </View>
                </View>
            </BaseContainer>
        )
    }
}

const styles = StyleSheet.create({
    'wrap': {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
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
