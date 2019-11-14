import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';
import { scaleSize } from '../../../../utils/screenUtil';
import { Button } from 'teaset';

interface propsTypes {
    config: any
    user: any
    sendPoint: any
};

class ReportInfo extends Component<propsTypes> {
    constructor(props: any) {
        super(props);
    }

    state = {}

    componentWillMount() {}

    render() {
        let {} = this.props;
        return (
            <View style={{}}>
                <Text style={{}}>报备信息</Text>
            </View>  
        )
    }
}

const styles = StyleSheet.create({
    'wrap': {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
});

export default ReportInfo;
