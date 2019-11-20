import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { scaleSize } from '../../../../utils/screenUtil';
import { Toast } from 'teaset';
import moment from 'moment';
import { NavigationScreenProps } from 'react-navigation';
import ReportItem from './reportItem';

const tabsTitles: any = [
    {name: '全部', id: '001'},
    {name: '待看房', id: '002'},
    {name: '待认购', id: '003'},
    {name: '已认购', id: '004'},
];

interface propsTypes {};

interface tabsContentsTypes {
    [index: number]: any
};

class ReportList extends Component<propsTypes & NavigationScreenProps> {
    constructor(props: any) {
        super(props);
    }

    state = {
        page: 0, // ! 初始tab页
        tabsContents: {} as tabsContentsTypes, // ! 初始报备列表
    }

    componentDidMount() {
        this.getReportList();
    }

    // ? 报备列表数据请求
    getReportList = () => {
        console.log('getReportList');
        let tabsContents: any = {
            0: [
                {
                    userName: '陈真-1',
                    phone: '13880009875',
                    type: 0,
                    bulidingName: '鲁能新城',
                    reportTime: '2018-10-10T12:00:00',
                    company: '重庆新耀行',
                    broker: '老王',
                    id: '0001'
                },
            ],
            1: [
                {
                    userName: '陈真-2',
                    phone: '13880009875',
                    type: 1,
                    bulidingName: '鲁能新城',
                    reportTime: '2018-10-10T12:00:00',
                    company: '重庆新耀行',
                    broker: '老王',
                    id: '0002'
                },
            ],
            2: [
                {
                    userName: '陈真-3',
                    phone: '13880009875',
                    type: 2,
                    bulidingName: '鲁能新城',
                    reportTime: '2018-10-10T12:00:00',
                    company: '重庆新耀行',
                    broker: '老王',
                    id: '0003'
                },
            ],
            3: [
                {
                    userName: '陈真-4',
                    phone: '13880009875',
                    type: 3,
                    bulidingName: '鲁能新城',
                    reportTime: '2018-10-10T12:00:00',
                    company: '重庆新耀行',
                    broker: '老王',
                    id: '0004'
                },
            ],
        };
        if (!tabsContents[0]) {
            Toast.message('网络连接失败！');
            return;
        }
        this.setState({
            tabsContents,
        }, () => {
            this.dataProcessing();
        })
    }

    // ? 数据处理
    dataProcessing = () => {
        console.log('dataProcessing');
        const {tabsContents} = this.state;
        let newTabsContents: any = {...tabsContents};
        let newArr: any[] = [];
        for (let i: number = 0; i < 4; i++) {
            ((newTabsContents || {})[i] || []).map((item: any, index: number) => {
                if (item.type === 0) {
                    item.typeText = '无效';
                }
                if (item.type === 1) {
                    item.typeText = '待确认';
                }
                if (item.type === 2) {
                    item.typeText = '待认购';
                }
                if (item.type === 3) {
                    item.typeText = '已认购';
                }
                item.reportTime = moment(item.reportTime).format('YYYY-MM-DD HH:mm:ss');
                newArr.push(item);
            }) 
        }
        newTabsContents[0] = newArr;
        this.setState({
            tabsContents: newTabsContents,
        });
    }

    // ? tabs页面改变时
    onChangeTabs = (page: number) => {
        console.log('onChangeTabs', page);
        this.setState({
            page,
        })
    }

    // ? 列表跳转详情页
    gotoDetail = (item: any) => {
        console.log('gotoDetail', item);
        this.props.navigation.navigate('reportDetail', {item});
    }

    // ? 列表确认按钮
    onConfirm = () => {
        console.log('onConfirm');

    }

    render() {
        const {page, tabsContents} = this.state;
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
                    <ReportItem
                        tabsItem={((tabsContents || {})[page] || [])}
                        gotoDetail={this.gotoDetail}
                        onConfirm={this.onConfirm}
                    />
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
});

export default ReportList;
