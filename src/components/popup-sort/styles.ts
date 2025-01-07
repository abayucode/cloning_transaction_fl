import { StyleSheet } from 'react-native';
import { COLOR_PRIMARY_BLACK_TRANSPARENT, COLOR_PRIMARY_WHITE } from '../../utils/constats';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_PRIMARY_BLACK_TRANSPARENT,
    paddingHorizontal: 15,
  },

  modalView: {
    backgroundColor: COLOR_PRIMARY_WHITE,
    width: '100%',
    height: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 5,
  },
});

