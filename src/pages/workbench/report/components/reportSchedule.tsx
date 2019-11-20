import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, NativeModules } from 'react-native';
import { scaleSize } from '../../../../utils/screenUtil';

const scheduleList: any = [
    {
        id: '0001',
        title: '待确认',
        icon: require('../../../../images/icons/iconOne2x.png'),
        iconNo: require('../../../../images/icons/iconOne2x.png'),
    },
    {
        id: '0002',
        title: '待看房',
        icon: require('../../../../images/icons/iconTwo2x.png'),
        iconNo: require('../../../../images/icons/iconTwoNo2x.png'),
    },
    {
        id: '0003',
        title: '待认购',
        icon: require('../../../../images/icons/iconThree2x.png'),
        iconNo: require('../../../../images/icons/iconThreeNo2x.png'),
    },
    {
        id: '0004',
        title: '已认购',
        icon: require('../../../../images/icons/iconFour2x.png'),
        iconNo: require('../../../../images/icons/iconFourNo2x.png'),
    },
];

interface propsTypes {
    reportScheduleData: any
};

class ReportSchedule extends Component<propsTypes> {
    constructor(props: any) {
        super(props);
    }

    state = {
        scheduleViewHeight: 0,
    }

    componentDidMount() {}

    // ? 获取组件高度
    layout = (e: any) => {
        NativeModules.UIManager.measure(e.target, (x: any, y: any, width: any, height: any, pageX: any, pageY: any) => {
            this.setState({
                scheduleViewHeight: height,
            })
        })
    }

    render() {
        const {reportScheduleData} = this.props;
        const {scheduleViewHeight} = this.state;
        return (
            <View>
                <Text style={styles['text']}>报备进程</Text>
                <View style={styles['topWrap']}>
                    <View style={styles['horizontalLine']} />
                    {
                        (scheduleList || []).map((item: any, index: number) => {
                            if (index <= ((reportScheduleData || {}).type || 0)) {
                                return (
                                    <View key={index} style={styles['wrapImg']}>
                                        <Image
                                            source={item.icon}
                                            style={{width: scaleSize(50), height: scaleSize(50)}}
                                        />
                                        <Text style={{fontSize: scaleSize(28), color: '#4480F7'}}>{item.title}</Text>
                                    </View>
                                )
                            } else {
                                return (
                                    <View key={index} style={styles['wrapImg']}>
                                        <Image
                                            source={item.iconNo}
                                            style={{width: scaleSize(50), height: scaleSize(50)}}
                                        />
                                        <Text style={{fontSize: scaleSize(28), color: '#868686'}}>{item.title}</Text>
                                    </View>
                                )
                            }
                        })
                    }
                </View>
                <View style={{paddingBottom: scaleSize(24), position: 'relative'}} onLayout={(e) => this.layout(e)}>
                    <View style={[styles['verticalLine'], {height: (scheduleViewHeight - scaleSize(84) - scaleSize(24))}]} />
                    {
                        ((reportScheduleData || {}).schedule || []).map((item: any, index: number) => {
                            return (
                                <View key={index} style={styles['bottomWrap']}>
                                    <Image
                                        source={require('../../../../images/icons/line2x.png')}
                                        style={styles['img']}
                                    />
                                    <Image
                                        source={require('../../../../images/pictures/head.png')}
                                        style={{width: scaleSize(96), height: scaleSize(96)}}
                                    />
                                    <View style={styles['wrapText']}>
                                        <View style={styles['wrapTextTwo']}>
                                            <Text style={{fontSize: scaleSize(28), color: '#4D4D4D'}}>{item.name}</Text>
                                            <Text style={{fontSize: scaleSize(28), color: '#868686'}}>{item.time}</Text>
                                        </View>
                                        <Text style={{fontSize: scaleSize(28), color: '#868686'}}>{item.typeText}</Text>
                                    </View>
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
    'text': {
        paddingTop: scaleSize(40),
        paddingBottom: scaleSize(40),
        fontSize: scaleSize(32),
        borderBottomWidth: scaleSize(1),
        borderBottomColor: '#E2E4EA',
    },
    'horizontalLine': {
        width: '86%',
        height: scaleSize(1),
        backgroundColor: '#D0DDE7',
        position: 'absolute',
        top: scaleSize(65),
        left: scaleSize(65),
    },
    'verticalLine': {
        width: scaleSize(1),
        backgroundColor: '#EAEAEA',
        position: 'absolute',
        top: 0,
        left: scaleSize(38),
    },
    'topWrap': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: scaleSize(40),
        paddingBottom: scaleSize(40),
        borderBottomWidth: scaleSize(1),
        borderBottomColor: '#E2E4EA',
        position: 'relative',
    },
    'wrapImg': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    'bottomWrap': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: scaleSize(24),
    },
    'img': {
        width: scaleSize(30),
        height: scaleSize(30),
        marginRight: scaleSize(24),
    },
    'wrapText': {
        flex: 1,
        flexDirection: 'column',
        marginLeft: scaleSize(23),
        borderBottomWidth: scaleSize(1),
        borderBottomColor: '#EAEAEA',
        paddingTop: scaleSize(40),
        paddingBottom: scaleSize(40),
    },
    'wrapTextTwo': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: scaleSize(16),
    },
});

export default ReportSchedule;
