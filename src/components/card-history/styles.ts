import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export const styles = StyleSheet.create({
  wrapperTxtBank: {
    display: 'flex',
    flexDirection: 'row',
  },

  txtPicName: {
    fontWeight: '400',
    fontSize: 14,
    color: '#000',
  },

  txtBankName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
});

export const containerCard = (flag: boolean): ViewStyle => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderLeftWidth: 5,
  borderLeftColor: flag ? '#FC622B' : '#54B681',
  paddingVertical: 15,
  paddingHorizontal: 15,
  borderRadius: 5,
  backgroundColor: '#FFFFFF',
  marginBottom: 5,
});

export const txtTrxStatus = (flag: boolean): TextStyle => ({
  fontWeight: 'bold',
  fontSize: 14,
  color: flag ? '#000' : '#FFFFFF',
});

export const btnActionDetail = (flag: boolean): ViewStyle => ({
  borderWidth: 1.5,
  borderColor: flag ? '#EC8565' : '#54B681',
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 5,
  backgroundColor: flag ? '#FFFFFF' : '#54B681',
});

