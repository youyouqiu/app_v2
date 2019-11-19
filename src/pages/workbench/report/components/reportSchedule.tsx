import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
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

    state = {}

    componentDidMount() {}

    render() {
        const {reportScheduleData} = this.props;
        return (
            <View>
                <Text style={styles['text']}>报备进程</Text>
                <View style={styles['topWrap']}>
                    <View style={styles['horizontalLine']} />
                    {
                        (scheduleList || []).map((item: any, index: number) => {
                            if (index <= ((reportScheduleData || {}).type || 0)) {
                                return (
                                    <View style={styles['wrapImg']}>
                                        <Image
                                            source={item.icon}
                                            style={{width: scaleSize(50), height: scaleSize(50)}}
                                        />
                                        <Text style={{fontSize: scaleSize(28), color: '#4480F7'}}>{item.title}</Text>
                                    </View>
                                )
                            } else {
                                return (
                                    <View style={styles['wrapImg']}>
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
                <View style={{paddingTop: scaleSize(40), paddingBottom: scaleSize(40)}}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        
                        <Text></Text>
                    </View>
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
});

export default ReportSchedule;
