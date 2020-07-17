import { StyleSheet } from 'react-native';
import { scaleSize } from '@/utils/screenUtil';

const styles = StyleSheet.create({
  avaImg: {
    width: scaleSize(74),
    height: scaleSize(74),
    borderRadius: scaleSize(37),
    borderColor: 'transparent',
    borderWidth: 1,
  },
})

export default styles;
