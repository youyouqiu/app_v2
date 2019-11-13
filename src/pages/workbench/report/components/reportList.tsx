import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { scaleSize } from '../../../../utils/screenUtil';
import { Button } from 'teaset';
import moment from 'moment';

const tabsTitles: any = [
    {name: '全部', id: '001'},
    {name: '待看房', id: '002'},
    {name: '待认购', id: '003'},
    {name: '已认购', id: '004'},
];

const tabsContents: any = {
    '0': [
        {
            userName: '陈真-1',
            phone: '13880009875',
            reportTypeNum: 0,
            bulidingName: '鲁能新城',
            reportTime: '2018-10-10T12:00:00',
            company: '重庆新耀行',
            broker: '老王',
            id: '0001'
        },
    ],
    '1': [
        {
            userName: '陈真-2',
            phone: '13880009875',
            reportTypeNum: 1,
            bulidingName: '鲁能新城',
            reportTime: '2018-10-10T12:00:00',
            company: '重庆新耀行',
            broker: '老王',
            id: '0002'
        },
    ],
    '2': [
        {
            userName: '陈真-3',
            phone: '13880009875',
            reportTypeNum: 2,
            bulidingName: '鲁能新城',
            reportTime: '2018-10-10T12:00:00',
            company: '重庆新耀行',
            broker: '老王',
            id: '0003'
        },
    ],
    '3': [
        {
            userName: '陈真-4',
            phone: '13880009875',
            reportTypeNum: 3,
            bulidingName: '鲁能新城',
            reportTime: '2018-10-10T12:00:00',
            company: '重庆新耀行',
            broker: '老王',
            id: '0004'
        },
    ],
};

interface propsTypes {};

class ReportList extends Component<propsTypes> {
    constructor(props: any) {
        super(props);
    }

    state = {
        page: 0, // 初始tab页
    }

    componentWillMount() {
        this.dataProcessing();
    }

    // 数据处理
    dataProcessing = () => {
        console.log('dataProcessing');
        let newArr: any[] = [];
        for (let i: number = 0; i < 4; i++) {
            tabsContents[i].map((item: any, index: number) => {
                if (item.reportTypeNum === 0) {
                    item.reportType = '无效';
                }
                if (item.reportTypeNum === 1) {
                    item.reportType = '待确认';
                }
                if (item.reportTypeNum === 2) {
                    item.reportType = '待认购';
                }
                if (item.reportTypeNum === 3) {
                    item.reportType = '已认购';
                }
                item.reportTime = moment(item.reportTime).format('YYYY-MM-DD HH:mm:ss');
                newArr.push(item);
            }) 
        }
        tabsContents[0] = newArr;
        console.log(tabsContents, 'tabsContents')
    }

    // tabs页面改变时
    onChangeTabs = (page: number) => {
        console.log('onChangeTabs', page);
        this.setState({
            page,
        })
    }

    // 列表跳转详情页
    gotoDetail = (type: number) => {
        console.log('gotoDetail', type);
        
    }

    // 列表确认按钮
    onConfirm = () => {
        console.log('onConfirm');

    }

    render() {
        let {page} = this.state;
        return (
            <View style={styles['wrap']}>
                <View style={styles['title-wrap']}>
                    {
                        tabsTitles.map((item: any, index: number) => {
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    activeOpacity={0.8}
                                    style={styles['title-wrapList']}
                                    onPress={() => this.onChangeTabs(index)}
                                >
                                    <Text style={page === index ? styles['title-text'] : null}>{item.name}</Text>
                                    <View style={page === index ? styles['title-textBottom'] : null}></View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                <View>
                    <ScrollView style={{height: '90%'}}>
                        {
                            ((tabsContents || {})[`${page}`] || []).map((item: any, index: number) => {
                                return (
                                    <TouchableOpacity
                                        key={item.id}
                                        activeOpacity={0.8}
                                        style={styles['content-wrap']}
                                        onPress={() => this.gotoDetail(item.reportTypeNum)}
                                    >
                                        <View style={styles['content-boldLine']}></View>
                                        <View style={styles['content-wrapTop']}>
                                            <View style={{display: 'flex', flexDirection: 'row'}}>
                                                <Text style={[styles['content-text'], {marginRight: scaleSize(32)}]}>{item.userName}</Text>
                                                <Text style={styles['content-text']}>{item.phone}</Text>
                                            </View>
                                            <Text style={{fontSize: scaleSize(28), color: '#4480F7'}}>{item.reportType}</Text>
                                        </View>
                                        <View style={styles['content-line']} />
                                        <View style={styles['content-wrapCenter']}>
                                            <Text style={[styles['content-text'], {paddingBottom: scaleSize(24)}]}>{item.bulidingName}</Text>
                                            <Text style={{color: '#868686'}}>
                                                报备申请时间：
                                                <Text style={{color: '#4D4D4D'}}>{item.reportTime}</Text>
                                            </Text>
                                        </View>
                                        <View style={styles['content-line']} />
                                        <View style={styles['content-wrapTop']}>
                                            <View style={{display: 'flex', flexDirection: 'row'}}>
                                                <View style={[styles['content-wrapBottom'], {marginRight: scaleSize(35)}]}>
                                                    <Image
                                                        style={styles['content-img']}
                                                        source={require('../../../../images/icons/copy2x.png')}
                                                    />
                                                    <Text style={{color: '#4D4D4D'}}>{item.company}</Text>
                                                </View>
                                                <View style={styles['content-wrapBottom']}>
                                                    <Image
                                                        style={styles['content-img']}
                                                        source={require('../../../../images/icons/usercopy2x.png')}
                                                    />
                                                    <Text style={{color: '#4D4D4D'}}>{item.broker}</Text>
                                                </View>
                                            </View>
                                            <Button
                                                title={'确认报备'}
                                                onPress={this.onConfirm}
                                                style={styles['content-btn']}
                                                titleStyle={{color: '#4D4D4D', fontSize: scaleSize(28)}}
                                                activeOpacity={0.8}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    'wrap': {
        backgroundColor: 'white',
    },
    'title-wrap': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: scaleSize(24),
        marginBottom: scaleSize(24),
        backgroundColor: 'white',
    },
    'title-wrapList': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    'title-text': {
        color: '#4480F7',
        marginBottom: scaleSize(9),
        fontSize: scaleSize(28),
    },
    'title-textBottom': {
        width: scaleSize(22),
        height: scaleSize(4),
        backgroundColor: '#4A90E2',
    },
    'content-wrapImg': {
        width: scaleSize(750),
        height: scaleSize(210),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    'content-wrap': {
        display: 'flex',
        flexDirection: 'column',
    },
    'content-wrapTop': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: scaleSize(40),
        paddingRight: scaleSize(40),
        paddingTop: scaleSize(24),
        paddingBottom: scaleSize(24),
    },
    'content-wrapCenter': {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: scaleSize(24),
        paddingBottom: scaleSize(24),
        paddingLeft: scaleSize(40),
        paddingRight: scaleSize(40),
    },
    'content-wrapBottom': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    'content-line': {
        width: '100%',
        height: scaleSize(1),
        backgroundColor: '#EAEAEA',
    },
    'content-boldLine': {
        width: '100%',
        height: scaleSize(24),
        backgroundColor: '#F8F8F8',
    },
    'content-text': {
        fontSize: scaleSize(32),
        color: '#4D4D4D',
        fontWeight: 'bold',
    },
    'content-img': {
        width: scaleSize(26),
        height: scaleSize(26),
        marginRight: scaleSize(16),
    },
    'content-btn': {
        width: scaleSize(160),
        height: scaleSize(72),
        borderColor: '#EAEAEA',
        borderWidth: scaleSize(1),
        borderRadius: scaleSize(4),
    },
});

export default ReportList;
