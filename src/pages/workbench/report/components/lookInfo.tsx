import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { scaleSize } from '../../../../utils/screenUtil';

interface propsTypes {
    lookInfoData: any
};

class LookInfo extends Component<propsTypes> {
    constructor(props: any) {
        super(props);
    }

    state = {}

    componentDidMount() {}

    render() {
        const {lookInfoData} = this.props;
        return (
            <View>
                <View style={{paddingLeft: scaleSize(40), paddingRight: scaleSize(40)}}>
                    <Text style={styles['text']}>带看信息</Text>
                    <View style={styles['topWrap']}>
                        <Text style={styles['textTwo']}>客户姓名</Text>
                        <Text style={{fontSize: scaleSize(28), color: '#4D4D4D'}}>{lookInfoData.userName}</Text>
                    </View>
                    <View style={styles['topWrap']}>
                        <Text style={styles['textTwo']}>联系电话</Text>
                        <Text style={{fontSize: scaleSize(28), color: '#4D4D4D'}}>{lookInfoData.userPhone}</Text>
                    </View>
                    <View style={styles['topWrap']}>
                        <Text style={styles['textTwo']}>性别</Text>
                        <Text style={{fontSize: scaleSize(28), color: '#4D4D4D'}}>{lookInfoData.sexText}</Text>
                    </View>
                    <View style={styles['topWrap']}>
                        <Text style={styles['textTwo']}>具体到访时间</Text>
                        <Text style={{fontSize: scaleSize(28), color: '#4D4D4D'}}>{lookInfoData.realLookTime}</Text>
                    </View>
                    <View style={styles['topWrap']}>
                        <Text style={styles['textTwo']}>证据图</Text>
                    </View>
                </View>
                <View style={{paddingLeft: scaleSize(20), paddingRight: scaleSize(20)}}>
                    <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', paddingTop: scaleSize(24)}}>
                        {
                            ((lookInfoData || {}).urls || []).map((item: any, index: number) => {
                                return (
                                    <Image key={index} source={item} style={styles['imgItem']} />
                                )
                            })
                        }
                    </View>
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
    'textTwo': {
        fontSize: scaleSize(28),
        width: scaleSize(250),
        color: '#868686',
    },
    'imgWrap': {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
    },
    'imgItem': {
        width: scaleSize(200),
        height: scaleSize(200),
        marginBottom: scaleSize(20),
        marginLeft: scaleSize(20),
    }
});

export default LookInfo;
