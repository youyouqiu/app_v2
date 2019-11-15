import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { scaleSize } from '../../../../utils/screenUtil';

interface propsTypes {
    reportScheduleData: any
};

class ReportSchedule extends Component<propsTypes> {
    constructor(props: any) {
        super(props);
    }

    state = {}

    componentWillMount() {}

    render() {
        const {reportScheduleData} = this.props;
        console.log(this.props, 'this.props');
        return (
            <View>
                <Text style={styles['text']}>报备进程</Text>
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
});

export default ReportSchedule;
