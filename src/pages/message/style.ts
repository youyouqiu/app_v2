import { StyleSheet } from 'react-native';
import { scaleSize } from '@/utils/screenUtil';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    flex: 1,
  },
  messageSwitch: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scaleSize(20),
    backgroundColor: '#F1F4FF',
  },
  messageSwitchLeft: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  messageSwitchIcon: {
    width: scaleSize(28),
    height: scaleSize(28),
    marginRight: scaleSize(30),
  },
  messageSwitchBtn: {
    backgroundColor: '#FFFFFF',
    padding: scaleSize(14),
    borderColor: '#4267FF',
    borderWidth: scaleSize(2),
    borderRadius: scaleSize(4),
  },
  messageSwitchBtnText: {
    color: '#4267FF',
    fontSize: scaleSize(24),
  },
  messageSystem: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: scaleSize(24),
    borderBottomWidth: scaleSize(2),
    borderColor: '#CCCCCC',
  },
  messageSystemItem: {
    flex: 1,
  },
  messageSystemItemText: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageSystemItemTextFont: {
    fontSize: scaleSize(32),
    color: '#000000',
    fontWeight: '600',
  },
  messageSystemItemTextFont2: {
    fontSize: scaleSize(22),
    color: '#B9B9B9',
    fontWeight: '400',
  },
  messageSystemItemTextFont3: {
    fontSize: scaleSize(24),
    color: '#8A8A91',
    fontWeight: '400',
  },
  messageSystemIconWrap: {
    position: 'relative',
    marginRight: scaleSize(24),
  },
  messageSystemIcon: {
    width: scaleSize(100),
    height: scaleSize(100),
  },
  messageSystemIconNum: {
    width: scaleSize(26),
    height: scaleSize(26),
    position: 'absolute',
    top: 0,
    left: scaleSize(74),
    backgroundColor: '#FA5920',
    color: '#FFFFFF',
    fontSize: scaleSize(20),
    textAlign: 'center',
    borderRadius: scaleSize(13),
  },
  messageNotice: {

  },
})

export default styles;
