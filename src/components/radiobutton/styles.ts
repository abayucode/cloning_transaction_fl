import { StyleSheet, ViewStyle } from 'react-native';
import { COLOR_PRIMARY_BLACK, COLOR_PRIMARY_WHITE } from '../../utils/constats';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 15,
  },

  txtRadio: {
    color: COLOR_PRIMARY_BLACK,
    paddingLeft: 10,
  },
});

export const fillCircle = (flag: boolean, color: string) => ({
  width: 11,
  height: 11,
  backgroundColor: flag ? color ? color : 'gray' : COLOR_PRIMARY_WHITE,
  borderRadius: 50,
});

export const circle = (color: string): ViewStyle => ({
  width: 20,
  height: 20,
  borderColor: color ? color : 'gray',
  borderWidth: 2.7,
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
});
