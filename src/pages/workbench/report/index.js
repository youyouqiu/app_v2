import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Image, Clipboard} from 'react-native';
import {connect} from 'react-redux';
import { Toast } from 'teaset';
import moment from 'moment';
// 工具
import { scaleSize } from './../../../utils/screenUtil';
import {verifyUser} from '../../../utils/utils'
// 组件
import BaseContainer from '../../../components/Page';
import Modal from './../../../components/Modal';
import ReportList from './reportList';
// 样式
import { STYLE } from './style';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false, // 弹窗状态
        }
    }

    componentDidMount() {
        this.props.sendPoint.add({target: '页面', page: '工作台-报备管理', action: 'view'});
    }

    // 跳转搜索页面
    gotoSearchPage = () => {
        this.props.navigation.navigate('reportSearch');
    }

    // 跳转详情选择
    gotoSelectInfo = async (type, typeId, reportInfo, visitType) => {
        console.log('跳转 - 报备-1，到访-2，失效-3，新增报备-4')
        switch (type) {
            case 1:
                this.initqCoderData(typeId);
                this.setState({
                    reportId: typeId,
                    reportInfo,
                    visible: true,
                })
                break;
            case 2:
                if (visitType === 0) {
                    Toast.message('到访单请联系项目经理确认！');
                } else if (visitType === 1) {
                    this.props.navigation.navigate('visitDetail', typeId);
                    this.props.sendPoint.add({ target: '到访列表跳转详情_button', page: '工作台-报备管理' })
                }
                break;
            case 3:
                this.props.navigation.navigate('', typeId);
                break;
            case 4:
                try {
                    await verifyUser('stronge')
                    this.props.navigation.navigate('addReport', typeId);
                    this.props.sendPoint.add({ target: '添加报备_button', page: '工作台-报备管理' });
                } catch (e) {}
                break;
            default:
                console.log('没有default');
        }
    }

    // 跳转录入带看页面/确认弹窗
    onOk = () => {
        console.log('跳转录入带看页面/确认弹窗')
        let { reportInfo } = this.state;

        this.setState({
            visible: false,
        }, async () => {
            try {
                await verifyUser('stronge')
                this.props.navigation.navigate('visitInfo', reportInfo);
            } catch (e) {
                console.log(e, 'error');
            }
        });
        this.props.sendPoint.add({ target: '填写带看单_input', page: '工作台-报备管理' });
    }

    // onRequestClose Android 后退键激活 modal 关闭事件
    onRequestClose = () => {
        this.setState({
            visible: false,
        })
    }

    // 复制报备信息/关闭弹窗
    onClose = () => {
        console.log('复制报备信息/关闭弹窗');
        let { reportInfo } = this.state;
        let copyText = '';
        let newPhone = [];
        ((reportInfo || {}).customerPhoneList || []).map((item, index) => {
            newPhone.push(item.customerPhone || '');
        });
        if (reportInfo) {
            copyText = '报备楼盘：' + reportInfo.buildingFullName + '\n' + '经纪公司：' + (reportInfo.userCompanyShortName || '暂无数据') + ' | ' + reportInfo.userCompanyName + '\n' + '客户姓名：' + reportInfo.customerName + '\n' + '客户电话：' + newPhone.join(',') + '\n' + '经纪人：' + reportInfo.userTrueName + '\n' + '经纪人电话：' + reportInfo.userPhoneNumber + '\n' + '业务组别：' + (reportInfo.userDeptName || '暂无数据');
        };
        Clipboard.setString(copyText);
        this.setState({
            visible: false,
        }, () => {
            Toast.message('已复制到粘贴板');
        });
        this.props.sendPoint.add({ target: '报备详情复制_button', page: '工作台-报备管理' });
    }

    // X
    setVisible = () => {
        this.setState({
            visible: false,
        })
    }

    render() {
        let {visible} = this.state;
        const rightView = (
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity activeOpacity={0.8} onPress={this.gotoSearchPage} style={STYLE.bigBtns}>
                    <Image style={STYLE.titleRightImg} source={require('../../../images/icons/Search2.png')}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => this.gotoSelectInfo(4)} style={STYLE.bigBtns}>
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
                    <ReportList />
                </View>

                <Modal
                    visible={visible}
                    transparent={true}
                    type='basic'
                    width={541}
                    height={633}
                    title={''}
                    footerType={'two'}
                    confirmText={'填写带看确认单'}
                    cancelText={'复制报备信息'}
                    onOk={this.onOk}
                    onClose={this.onClose}
                    onRequestClose={this.onRequestClose}
                    closable
                    onClosable={this.setVisible}
                >
                    <View style={STYLE.modalQRCodeWarp}>
                        
                    </View>
                </Modal>
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
