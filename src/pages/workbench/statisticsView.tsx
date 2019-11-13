import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, View, Text } from 'react-native';
import { scaleSize } from '../../utils/screenUtil';

const tabsTitles: any = [
    {name: '近30天', id: '001'},
    {name: '本月', id: '002'},
    {name: '昨日', id: '003'},
];

const tabsContents: any = {
    '0': [
        {name: '报备次数', unit: '次', amount: 0, id: '0001-1'},
        {name: '带看次数', unit: '次', amount: 0, id: '0001-2'},
        {name: '认购商铺', unit: '套', amount: 0, id: '0001-3'},
        {name: '签约商铺', unit: '套', amount: 0, id: '0001-4'},
    ],
    '1': [
        {name: '报备次数', unit: '次', amount: 1, id: '0002-1'},
        {name: '带看次数', unit: '次', amount: 1, id: '0002-2'},
        {name: '认购商铺', unit: '套', amount: 1, id: '0002-3'},
        {name: '签约商铺', unit: '套', amount: 1, id: '0002-4'},
    ],
    '2': [
        {name: '报备次数', unit: '次', amount: 2, id: '0003-1'},
        {name: '带看次数', unit: '次', amount: 2, id: '0003-2'},
        {name: '认购商铺', unit: '套', amount: 2, id: '0003-3'},
        {name: '签约商铺', unit: '套', amount: 2, id: '0003-4'},
    ],
};

interface propsTypes {};

class StatisticsView extends Component<propsTypes> {
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
                        tabsTitles.map((item: any, index: number) => {
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
                <ImageBackground source={require('../../images/pictures/tabs_bg2x.png')} style={styles['content-wrapImg']}>
                    {
                        ((tabsContents || {})[`${page}`] || []).map((item: any, index: number) => {
                            return (
                                <View key={item.id} style={styles['content-wrap']}>
                                    {
                                        index !== 0
                                        ? <View style={styles['content-line']} />
                                        : null
                                    }
                                    <View style={{display: 'flex', flexDirection: 'column'}}>
                                        <Text style={styles['content-text']}>{item.name}</Text>
                                        <Text style={styles['content-textTwo']}>
                                            {item.amount}
                                            <Text style={{fontSize: scaleSize(24), fontWeight: 'normal'}}>{item.unit}</Text>
                                        </Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ImageBackground>
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
        marginTop: scaleSize(24),
        marginBottom: scaleSize(24),
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    'content-line': {
        width: scaleSize(1),
        height: scaleSize(86),
        backgroundColor: '#EAEAEA',
        marginRight: scaleSize(16),
    },
    'content-text': {
        color: '#868686',
        fontSize: scaleSize(24),
        marginBottom: scaleSize(40),
    },
    'content-textTwo': {
        color: '#4D4D4D',
        fontSize: scaleSize(32),
        fontWeight: 'bold',
    },
});

export default StatisticsView;
