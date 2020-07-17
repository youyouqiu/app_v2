import { StyleSheet } from 'react-native';
import { scaleSize } from '@/utils/screenUtil';

const styles = StyleSheet.create({
  projectIn: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: scaleSize(24),
    paddingRight: scaleSize(24),
    paddingTop: scaleSize(24),
    backgroundColor: 'red',
  },
  projectInBtn: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: scaleSize(24),
  },
  projectInBtnMG: {
    marginLeft: scaleSize(69),
  },
  projectInIcon: {
    width: scaleSize(100),
    height: scaleSize(100),
  },
  projectInText: {
    fontSize: scaleSize(28),
    fontWeight: '500',
    color: '#000000',
  },
})

export default styles;
