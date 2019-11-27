import React, { Component, PureComponent } from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text, FlatList } from 'react-native';
import { scaleSize } from '../../../../utils/screenUtil';
import XKJButton from '../../../../components/Button';

let newRefreshing: boolean = true;

interface propsTypes {
    tabsItem: any
    gotoDetail: any
    onConfirm: any
};

interface isEndReachedTypes {
    [index: number]: any
};

class ReportItem extends PureComponent<propsTypes> {
    constructor(props: any) {
        super(props);
    }

    state = {
        isEndReached: {} as isEndReachedTypes,
    }

    componentDidMount() { }

    // ? renderItem
    handTabsContent = (item: any) => {
        console.log(item, 'item');
        const { gotoDetail, onConfirm } = this.props;
        return (
            <TouchableOpacity
                key={item.id}
                activeOpacity={0.8}
                style={styles['content-wrap']}
                onPress={() => gotoDetail(item)}
            >
                <View style={styles['content-boldLine']} />
                <View style={styles['content-wrapTop']}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={[styles['content-text'], { marginRight: scaleSize(32) }]}>{item.userName}</Text>
                        <Text style={styles['content-text']}>{item.phone}</Text>
                    </View>
                    <Text style={{ fontSize: scaleSize(28), color: '#4480F7' }}>{item.typeText}</Text>
                </View>
                <View style={styles['content-line']} />
                <View style={styles['content-wrapCenter']}>
                    <Text style={[styles['content-text'], { paddingBottom: scaleSize(24) }]}>{item.bulidingName}</Text>
                    <Text style={{ color: '#868686' }}>
                        报备申请时间：
                        <Text style={{ color: '#4D4D4D' }}>{item.reportTime}</Text>
                    </Text>
                </View>
                <View style={styles['content-line']} />
                <View style={styles['content-wrapTop']}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={[styles['content-wrapBottom'], { marginRight: scaleSize(35) }]}>
                            <Image
                                style={styles['content-img']}
                                source={require('../../../../images/icons/copy2x.png')}
                            />
                            <Text style={{ color: '#4D4D4D' }}>{item.company}</Text>
                        </View>
                        <View style={styles['content-wrapBottom']}>
                            <Image
                                style={styles['content-img']}
                                source={require('../../../../images/icons/usercopy2x.png')}
                            />
                            <Text style={{ color: '#4D4D4D' }}>{item.broker}</Text>
                        </View>
                    </View>
                    <XKJButton
                        title={'确认报备'}
                        onPress={onConfirm}
                        style={styles['content-btn']}
                        titleStyle={{ color: '#4D4D4D', fontSize: scaleSize(28) }}
                        activeOpacity={0.8}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    // ? 下拉刷新
    refreshData = (page: number) => {
        console.log(page, 'page')
        // const {initReportData, initReportCount} = this.props;
        // initReportData(page); // 下拉刷新时即时请求数据
        // initReportCount(); // 下拉刷新时即时请求数量
    }

    // 上拉加载
    endReachedData = (page: number) => {
        console.log(page, 'endReachedData');
        // const {initReportData, initReportCount} = this.props;
        // initReportData(page); // 上拉加载时即时请求数据
        // initReportCount(); // 上拉加载时时即时请求数量
    }

    render() {
        const { tabsItem } = this.props;
        const { isEndReached } = this.state;
        if (tabsItem) {
            newRefreshing = false;
        }
        return (
            <View style={{height: '100%'}}>
                <FlatList
                    style={{height: '100%'}}
                    data={tabsItem}
                    extraData={this.state}
                    renderItem={({item}) => this.handTabsContent(item)}
                    refreshing={newRefreshing}
                    onRefresh={() => {this.refreshData(0)}}
                    onEndReached={() => {isEndReached[0] ? this.endReachedData(0) : null}}
                    onEndReachedThreshold={0.2}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
        backgroundColor: 'white',
        borderColor: '#EAEAEA',
        borderWidth: scaleSize(1),
        borderRadius: scaleSize(4),
    },
});

export default ReportItem;
