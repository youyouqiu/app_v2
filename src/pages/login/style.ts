import {StyleSheet} from 'react-native'
import {statusBarHeight, scaleSize} from '@/utils/screenUtil'
export default StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
  },
  backImg: {
    width: '100%',
    height: '100%',
  },
  mainContent: {
    width: '100%',
    height: '100%',
    paddingLeft: scaleSize(40),
    paddingRight: scaleSize(40),
  },
  headerText: {
    color: '#fff',
    fontSize: scaleSize(50),
    lineHeight: scaleSize(70),
    fontWeight: '400',
  },
  headerHello: {
    marginTop: scaleSize(82) + statusBarHeight,
  },
  bottom: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linear: {
    width: scaleSize(200),
    height: scaleSize(200),
    borderRadius: scaleSize(200),
  },
  loginBtn: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: scaleSize(40),
    fontWeight: '400',
    color: 'rgba(194,212,245,1)',
    lineHeight: scaleSize(56),
  },
  inputs: {
    marginTop: scaleSize(105),
    marginBottom: scaleSize(130),
  },
  LoginInput: {
    width: scaleSize(670),
    height: scaleSize(88),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: scaleSize(44),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#FFFFFF',
    backgroundColor: '#1C365A',
  },
  inputLeftIcon: {
    width: scaleSize(40),
    height: scaleSize(40),
    marginLeft: scaleSize(33),
    marginRight: scaleSize(23),
  },
  inputRightIcon: {
    width: scaleSize(36),
    height: scaleSize(36),
  },
  input: {
    flex: 1,
    color: '#fff',
    height: '100%',
  },
  password: {
    marginTop: scaleSize(40),
  },
})
