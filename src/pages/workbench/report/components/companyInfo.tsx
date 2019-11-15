import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { scaleSize } from '../../../../utils/screenUtil';
import XKJButton from '../../../../components/Button';

interface propsTypes {
    companyInfoData: any
    onConfirm: any
};

class CompanyInfo extends Component<propsTypes> {
    constructor(props: any) {
        super(props);
    }

    state = {}

    componentWillMount() {}

    render() {
        const {companyInfoData, onConfirm} = this.props;
        return (
            <View>
                <Text style={styles['text']}>经纪公司信息</Text>
                <View style={styles['topWrap']}>
                    <Image
                        source={require('../../../../images/icons/copy2x.png')}
                        style={{width: scaleSize(32), height: scaleSize(32)}}
                    />
                    <Text style={styles['textTwo']}>{companyInfoData.company}</Text>
                </View>
                <View style={[styles['bottomWrap'], {justifyContent: 'space-between'}]}>
                    <View style={styles['bottomWrapText']}>
                        <Text style={{fontSize: scaleSize(28)}}>{companyInfoData.broker}</Text>
                        <View style={styles['verticalLine']}></View>
                        <Text style={{fontSize: scaleSize(28)}}>{companyInfoData.brokerPhone}</Text>
                    </View>
                    <XKJButton
                        onPress={() => {onConfirm(companyInfoData.brokerPhone)}}
                        style={styles['btn']}
                        title={
                            <View style={styles['btnWrap']}>
                                <Image
                                    style={{width: scaleSize(30), height: scaleSize(30)}}
                                    source={require('../../../../images/icons/phone2x.png')}
                                />
                                <Text style={styles['btnText']}>拨打电话</Text>
                            </View>
                        }
                    />
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
        color: '#4D4D4D',
        paddingLeft: scaleSize(24),
    },
    'bottomWrap': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: scaleSize(18),
        paddingBottom: scaleSize(18),
        borderBottomWidth: scaleSize(1),
        borderBottomColor: '#E2E4EA',
    },
    'bottomWrapText': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    'verticalLine': {
        width: scaleSize(1),
        height: scaleSize(40),
        backgroundColor: '#979797',
        marginLeft: scaleSize(16),
        marginRight: scaleSize(16),
    },
    'btn': {
        width: scaleSize(206),
        height: scaleSize(74),
        borderRadius: scaleSize(6),
        backgroundColor: '#4480F7',
    },
    'btnWrap': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    'btnText': {
        fontSize: scaleSize(32),
        color: 'white',
        paddingLeft: scaleSize(6),
    },
});

export default CompanyInfo;
