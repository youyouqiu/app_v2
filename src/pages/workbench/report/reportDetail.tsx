import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { scaleSize } from '../../../utils/screenUtil';
import { Button } from 'teaset';
import moment from 'moment';

interface propsTypes {};

class ReportDetail extends Component<propsTypes> {
    constructor(props: any) {
        super(props);
    }

    state = {}

    componentWillMount() {
        
    }

    render() {
        let {} = this.state;
        return (
            <View style={styles['wrap']}>
                <Text>报备详情</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    'wrap': {
        backgroundColor: 'white',
    },
});

export default ReportDetail;
