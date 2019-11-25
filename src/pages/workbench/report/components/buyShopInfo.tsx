import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { scaleSize } from '../../../../utils/screenUtil';

interface propsTypes {
    buyShopInfoData: any
};

class BuyShopInfo extends Component<propsTypes> {
    constructor(props: any) {
        super(props);
    }

    state = {}

    componentDidMount() {}

    render() {
        const {buyShopInfoData} = this.props;
        console.log(buyShopInfoData, 'buyShopInfoData');
        return (
            <View>
                <Text style={styles['text']}>认购商铺信息</Text>
                {
                    (buyShopInfoData || []).map((item: any, index: number) => {
                        return (
                            <View key={index} style={[styles['wrap'], index === buyShopInfoData.length - 1 ? null : styles['isBorder']]}>
                                <View style={styles['leftRightWrap']}> 
                                    <Image
                                        source={item.shopUrl}
                                        style={{width: scaleSize(210), height: scaleSize(160)}}
                                    />
                                    <View style={styles['rightWrap']}>
                                        <View style={styles['textWrap']}>
                                            <Text style={styles['textTwo']}>{item.shopName}</Text>
                                            <Text style={{fontSize: scaleSize(28), color: '#4480F7'}}>{item.typeText}</Text>
                                        </View>
                                        <View style={{display: 'flex', flexDirection: 'column'}}>
                                            <Text style={styles['textThree']}>
                                                认购总价：
                                                <Text>{item.buyPriceText}</Text>
                                            </Text>
                                            <Text style={{fontSize: scaleSize(22), color: '#4D4D4D'}}>
                                                建筑面积：
                                                <Text>{item.areaText}</Text>
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
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
    'wrap': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: scaleSize(40),
    },
    'isBorder': {
        borderBottomWidth: scaleSize(1),
        borderBottomColor: '#E2E4EA',
    },
    'leftRightWrap': {
        paddingTop: scaleSize(40),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    'rightWrap': {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: scaleSize(26),
    },
    'textWrap': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: scaleSize(16),
    },
    'textTwo': {
        width: scaleSize(300),
        fontSize: scaleSize(32),
        fontWeight: 'bold',
        color: '#4D4D4D',
    },
    'textThree': {
        fontSize: scaleSize(22),
        color: '#4D4D4D',
        paddingBottom: scaleSize(16),
    },
});

export default BuyShopInfo;
