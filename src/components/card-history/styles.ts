import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: 5,
    borderLeftColor: '#FC622B',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },

  wrapperTxtBank: {
    display: 'flex',
    flexDirection: 'row',
  },

  txtBankName: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  txtPicName: {
    fontWeight: '400',
    fontSize: 14,
  },

  btnActionDetail: (flag: boolean) => ({
    borderWidth: 1.5,
    borderColor: flag ? '#EC8565' : '#00f3',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  }),
});
