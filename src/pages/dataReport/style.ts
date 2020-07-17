import { StyleSheet } from 'react-native';
import { scaleSize } from '@/utils/screenUtil';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    flex: 1,
  },
  topBarStyle: {
    backgroundColor: '#4267FF',
  },
  titleStyle: {
    color: '#FFFFFF',
  },
  rightViewIcon: {
    width: scaleSize(50),
    height: scaleSize(50),
  },
})

export default styles;
