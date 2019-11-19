import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { scaleSize } from '../../../../utils/screenUtil';

interface propsTypes {
    reportInfoData: any
};

class ReportInfo extends Component<propsTypes> {
    constructor(props: any) {
        super(props);
    }

    state = {}

    componentDidMount() {}

    render() {
        const {reportInfoData} = this.props;
        return (
            <View>
                <Text style={styles['text']}>报备信息</Text>
                <View style={styles['topWrap']}>
                    <Text style={{fontSize: scaleSize(32), width: scaleSize(250)}}>客户姓名</Text>
                    <Text style={{fontSize: scaleSize(28), color: '#858B9C'}}>{reportInfoData.userName}</Text>
                </View>
                <View style={[styles['topWrap'], {marginBottom: scaleSize(32)}]}>
                    <Text style={{fontSize: scaleSize(32), width: scaleSize(250)}}>联系电话</Text>
                    <Text style={{fontSize: scaleSize(28), color: '#858B9C'}}>{reportInfoData.userPhone}</Text>
                </View>
                <View style={styles['imgWrap']}>
                    <Image
                        source={reportInfoData.buildingUrl}
                        style={{width: scaleSize(210), height: scaleSize(160)}}
                    />
                    <View style={{paddingLeft: scaleSize(16), paddingTop: scaleSize(16)}}>
                        <Text style={{fontSize: scaleSize(32), fontWeight: 'bold'}}>{reportInfoData.buildingName}</Text>
                        <Text style={{fontSize: scaleSize(22), paddingTop: scaleSize(16)}}>{reportInfoData.buildingFloor}</Text>
                    </View>
                </View>
                <View style={styles['topWrap']}>
                    <Text style={{fontSize: scaleSize(32), width: scaleSize(250)}}>预计带看时间</Text>
                    <Text style={{fontSize: scaleSize(28), color: '#858B9C'}}>{reportInfoData.expectedLookTime}</Text>
                </View>
            </View>  
        )
    }
}

const styles = StyleSheet.create({
    'topWrap': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: scaleSize(40),
        paddingBottom: scaleSize(40),
        borderBottomWidth: scaleSize(1),
        borderBottomColor: '#E2E4EA',
    },
    'text': {
        paddingTop: scaleSize(40),
        paddingBottom: scaleSize(40),
        fontSize: scaleSize(32),
        borderBottomWidth: scaleSize(1),
        borderBottomColor: '#E2E4EA',
    },
    'imgWrap': {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
    }
});

export default ReportInfo;
