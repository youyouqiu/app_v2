import React, { Component } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { connect } from 'react-redux';
// import { Toast } from 'teaset';
import { scaleSize } from './../../../utils/screenUtil';
import BaseContainer from '../../../components/Page';
import ReportList from './components/reportList';
import { STYLE } from './style';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {}

    // ? 跳转搜索页面
    gotoSearchPage = () => {
        this.props.navigation.navigate('reportSearch');
    }

    render() {
        const {} = this.state;
        const rightView = (
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity activeOpacity={0.8} onPress={this.gotoSearchPage} style={STYLE.bigBtns}>
                    <Image style={STYLE.titleRightImg} source={require('../../../images/icons/Search2.png')}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={this.gotoSearchPage} style={STYLE.bigBtns}>
                    <Image style={STYLE.titleRightImg} source={require('../../../images/icons/Add2.png')}/>
                </TouchableOpacity>
            </View>
        );
        return (
            <BaseContainer
                title='报备管理'
                bodyStyle={{padding: 0, backgroundColor: '#F8F8F8'}}
                scroll={false}
                rightView={rightView}
            >
                <View style={{borderTopWidth: scaleSize(1), borderTopColor: '#EAEAEA'}}>
                    <ReportList {...this.props} />
                </View>
            </BaseContainer>
        )
    }
}

const mapStateToProps = ({config, user, point}) => {
    return {
        config,
        user,
        sendPoint: point.buryingPoint,
    }
}

export default connect(mapStateToProps)(Report);
