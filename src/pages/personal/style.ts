import {StyleSheet} from 'react-native';
import {scaleSize} from '@/utils/screenUtil';

const styles = StyleSheet.create({
  testNav: {
    marginTop: scaleSize(50),
    padding: scaleSize(40),
    backgroundColor: 'green',
  },
  page: {
    backgroundColor: '#fff',
    flex: 1,
  },
})

export default styles;
