import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';
import { scaleSize } from '../../utils/screenUtil';

const tabsTitles: any = [
    {name: '项目排行榜', id: '001'},
    {name: '经纪公司排行榜', id: '002'},
];

const tabsContents: any = {
    '0': [
        {name: '鲁能新城', report: 1, carry: 1, buy: 1, id: '0001-1'},
        {name: '爱都会', report: 1, carry: 1, buy: 1, id: '0001-2'},
        {name: '保利香槟', report: 1, carry: 1, buy: 1, id: '0001-3'},
        {name: '龙湖新壹街', report: 1, carry: 1, buy: 1, id: '0001-4'},
    ],
    '1': [
        {name: '重庆新耀行', report: 2, carry: 2, buy: 2, id: '0002-1'},
        {name: '成都新耀行', report: 2, carry: 2, buy: 2, id: '0002-2'},
        {name: '杭州新耀行', report: 2, carry: 2, buy: 2, id: '0002-3'},
        {name: '郑州新耀行', report: 2, carry: 2, buy: 2, id: '0002-4'},
    ],
};

const icons: any = [
    {url: require('../../images/icons/one2x.png'), id: '0003-1'},
    {url: require('../../images/icons/two2x.png'), id: '0003-2'},
    {url: require('../../images/icons/three2x.png'), id: '0003-3'},
];

interface propsTypes {}

class RankingView extends Component<propsTypes> {
    constructor(props: any) {
        super(props);
    }

    state = {
        page: 0, // 初始tab页
    }

    componentWillMount() {}

    // tabs页面改变时
    onChangeTabs = (page: number) => {
        console.log('onChangeTabs', page);
        this.setState({
            page,
        })
    }

    render() {
        let {page} = this.state;
        return (
            <View style={styles['wrap']}>
                <View style={styles['title-wrap']}>
                    {
                        (tabsTitles || []).map((item: any, index: number) => {
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    activeOpacity={0.8}
                                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
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
                    {
                        ((tabsContents || {})[`${page}`] || []).map((item: any, index: number) => {
                            return (
                                <View key={item.id} style={styles['content-wrap']}>
                                   <View style={styles['content-title']}>
                                        {
                                            index < 3
                                            ? <Image source={(icons[`${index}`] || {}).url} style={styles['content-img']} />
                                            : <Text style={{marginRight: scaleSize(20)}}>{index + 1}</Text>
                                        }
                                        <Text>{item.name}</Text>
                                   </View>
                                   <View style={styles['content-list']}>
                                        <Text>报备：<Text>{item.report}次</Text></Text>
                                        <Text>带看：<Text>{item.carry}次</Text></Text>
                                        <Text>认购：<Text>{item.buy}套</Text></Text>
                                   </View>
                                   <View style={styles['content-line']}></View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    'wrap': {

    },
    'title-wrap': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: scaleSize(40),
        marginBottom: scaleSize(40),
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
    'content-wrap': {
        display: 'flex',
        flexDirection: 'column',
    },
    'content-title': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scaleSize(40),
        paddingLeft: scaleSize(40),
        paddingRight: scaleSize(40),
    },
    'content-img': {
        width: scaleSize(40),
        height: scaleSize(40),
        marginRight: scaleSize(8),
    },
    'content-line': {
        width: '100%',
        height: scaleSize(1),
        backgroundColor: '#DFDFDF',
        marginBottom: scaleSize(33),
    },
    'content-list': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: scaleSize(36),
        paddingLeft: scaleSize(40),
        paddingRight: scaleSize(40),
    },
    'content-text': {
        
    },
    'content-textTwo': {
        
    },
});

export default RankingView;
