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
        return (
            <View>
                <Text style={styles['text']}>认购商铺信息</Text>
                <View style={styles['topWrap']}>
                    <View style={{paddingTop: scaleSize(40), paddingBottom: scaleSize(40), display: 'flex', flexDirection: 'row', alignItems: 'center'}}> 
                        <Image
                            source={buyShopInfoData.shopUrl}
                            style={{width: scaleSize(210), height: scaleSize(160)}}
                        />
                        <View style={{flex: 1, flexDirection: 'column', paddingLeft: scaleSize(26)}}>
                            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text>{'12号楼-2层-S7-46002'}</Text>
                                <Text>{'12号楼-2层-S7-46002'}</Text>
                            </View>
                            <View style={{display: 'flex', flexDirection: 'column'}}>
                                <Text>{'12号楼-2层-S7-46002'}</Text>
                                <Text>{'12号楼-2层-S7-46002'}</Text>
                            </View>
                        </View>
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
});

export default BuyShopInfo;
