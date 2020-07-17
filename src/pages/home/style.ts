import { StyleSheet } from 'react-native';
import { scaleSize } from '@/utils/screenUtil';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    flex: 1,
    paddingLeft: scaleSize(24),
    paddingRight: scaleSize(24),
  },
  scrollViewHeight: {
    flex: 1,
  },
  card: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    backgroundColor: 'blue',
    borderRadius: scaleSize(8),
    padding: scaleSize(20),
  },
  cardTop: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: scaleSize(40),
  },
  cardTopText: {
    fontSize: scaleSize(34),
    fontWeight: '500',
    color: '#000000',
  },
  cardTopID: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cardTopIDIcon: {
    width: scaleSize(30),
    height: scaleSize(30),
    marginRight: scaleSize(8),
  },
  cardTopIDText: {
    fontSize: scaleSize(26),
    fontWeight: '500',
    color: '#8A8A91',
  },
  cardBom: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardBomPro: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardBomProText: {
    fontSize: scaleSize(22),
    fontWeight: '500',
    color: '#8A8A91',
  },
  cardBomProLine: {
    width: scaleSize(2),
    height: scaleSize(40),
    backgroundColor: '#CCCCCC',
  },
  advertisement: {
    marginBottom: scaleSize(20),
  },
  advertisementImg: {
    width: '100%',
    height: scaleSize(198),
  },
  quotation: {
    marginBottom: scaleSize(20),
  },
  quotationImg: {
    width: '100%',
    height: scaleSize(240),
  },
  quotationText: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    padding: scaleSize(20),
  },
  quotationTextTop: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  quotationTextTopItem: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  quotationTextTopItemBom: {
    marginBottom: scaleSize(30),
  },
  quotationTextBom: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignItems: 'center',
  },
  quotationTextItemFont: {
    fontSize: scaleSize(36),
    color: '#000000',
    fontWeight: '600',
  },
  quotationTextItemFont2: {
    fontSize: scaleSize(24),
    color: '#000000',
    fontWeight: '400',
  },
  quotationTextItemFont3: {
    fontSize: scaleSize(22),
    color: '#8A8A91',
    fontWeight: '400',
  },
  quotationTextItemFont4: {
    fontSize: scaleSize(36),
    color: '#FE5139',
    fontWeight: '600',
  },
  quotationTextItemMG: {
    marginBottom: scaleSize(12),
  },
  dictionaries: {
    backgroundColor: 'green',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scaleSize(100),
  },
  dictionariesItem: {
    backgroundColor: '#F9FAF9',
    padding: scaleSize(20),
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dictionariesText: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    marginRight: scaleSize(10),
  },
  dictionariesText2: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    marginRight: scaleSize(38),
  },
  dictionariesTextFont: {
    fontSize: scaleSize(34),
    fontWeight: '900',
    marginBottom: scaleSize(12),
  },
  dictionariesTextFont2: {
    fontSize: scaleSize(24),
    color: '#4267FF',
    fontWeight: '400',
  },
  dictionariesTextFont3: {
    fontSize: scaleSize(24),
    color: '#8A8A91',
    fontWeight: '400',
  },
  dictionariesImg: {
    width: scaleSize(120),
    height: scaleSize(120),
  },
})

export default styles;
