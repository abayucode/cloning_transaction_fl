import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLOR_PRIMARY_BLACK, COLOR_PRIMARY_GREEN, COLOR_PRIMARY_ORANGE, COLOR_PRIMARY_SALMON, COLOR_PRIMARY_WHITE } from '../../utils/constats';

export const styles = StyleSheet.create({
  wrapperTxtBank: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  txtPicName: {
    fontWeight: '400',
    fontSize: 14,
    color: COLOR_PRIMARY_BLACK,
    fontFamily: 'Roboto',
  },

  txtBankName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: COLOR_PRIMARY_BLACK,
  },

  imgArrow: {
    width: 25,
    height: 25,
  },
});

export const containerCard = (flag: boolean): ViewStyle => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderLeftWidth: 5,
  borderLeftColor: flag ? COLOR_PRIMARY_GREEN : COLOR_PRIMARY_ORANGE,
  paddingVertical: 15,
  paddingHorizontal: 15,
  borderRadius: 5,
  backgroundColor: COLOR_PRIMARY_WHITE,
  marginBottom: 5,
});

export const txtTrxStatus = (flag: boolean): TextStyle => ({
  fontWeight: 'bold',
  fontSize: 14,
  color: flag ? COLOR_PRIMARY_WHITE : COLOR_PRIMARY_BLACK,
});

export const btnActionDetail = (flag: boolean): ViewStyle => ({
  borderWidth: 1.5,
  borderColor: flag ? COLOR_PRIMARY_GREEN : COLOR_PRIMARY_SALMON,
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 5,
  backgroundColor: flag ? COLOR_PRIMARY_GREEN : COLOR_PRIMARY_WHITE,
});

