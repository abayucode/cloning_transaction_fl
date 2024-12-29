import { StyleSheet, ViewStyle } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 15,
  },

  txtRadio: {
    color: '#000000',
    paddingLeft: 10,
  },
});

export const fillCircle = (flag: boolean, color: string) => ({
  width: 11,
  height: 11,
  backgroundColor: flag ? color ? color : 'gray' : '#FFFFFF',
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
