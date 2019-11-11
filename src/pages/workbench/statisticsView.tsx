import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, View, Text } from 'react-native';
import { scaleSize } from '../../utils/screenUtil';

interface propsTypes {
    tabsTitles: any
    tabsContents: any
}

class statisticsView extends Component<propsTypes> {
    constructor(props: any) {
        super(props);
        
        this.state = {

        }
    }

    componentWillMount() {}

    onChangeTabs = (page: number) => {
        console.log('onChangeTabs', page);
    }

    render() {
        let {tabsTitles, tabsContents} = this.props;
        return (
            <View style={styles['wrap']}>
                <View style={styles['title-wrap']}>
                    {
                        tabsTitles.map((item: any, index: number) => {
                            return (
                                <TouchableOpacity key={item.id} activeOpacity={0.8} style={{}} onPress={() => this.onChangeTabs(index)}>
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                <ImageBackground source={require('../../images/pictures/tabs_bg.png')} style={styles['content-wrap']}>
                    {
                        tabsContents.map((item: any, index: number) => {
                            return (
                                <View key={item.id} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    {
                                        index !== 0
                                        ? <View style={{width: scaleSize(1), height: scaleSize(86), backgroundColor: '#EAEAEA', marginRight: scaleSize(16)}} />
                                        : null
                                    }
                                    <View style={{display: 'flex', flexDirection: 'column'}}>
                                        <Text style={styles['content-text']}>{item.name}</Text>
                                        <Text style={styles['content-textTwo']}>
                                            {item.amount}
                                            <Text style={{fontSize: scaleSize(24)}}>{item.unit}</Text>
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
    'content-wrap': {
        width: '100%',
        height: scaleSize(232),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
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

export default statisticsView;
