import { StyleSheet } from 'react-native';
import { scaleSize } from '@/utils/screenUtil';

const styles = StyleSheet.create({
  tabsItemBG: {
    backgroundColor: '#4267FF',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: scaleSize(60),
    paddingBottom: scaleSize(96),
  },
  tabsItemText: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabsItemLine: {
    width: scaleSize(86),
    height: scaleSize(9),
    backgroundColor: 'rgba(255,255,255,0.16)',
  },
  tabsItemTextFont: {
    color: '#C1CDFF',
    fontSize: scaleSize(28),
    fontWeight: '400',
    marginBottom: scaleSize(8),
  },
  tabsItemTextFont2: {
    color: '#FFFFFF',
    fontSize: scaleSize(34),
    fontWeight: '600',
  },
})

export default styles;
