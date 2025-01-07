import { StyleSheet } from 'react-native';
import { COLOR_PRIMARY_BLACK, COLOR_PRIMARY_CORAL_RED, COLOR_PRIMARY_GRAY, COLOR_PRIMARY_WHITE } from '../../utils/constats';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_PRIMARY_WHITE,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  icSearch: {
    width: 35,
    height: 35,
    tintColor: COLOR_PRIMARY_GRAY,
  },

  icArrowSort: {
    width: 20,
    height: 20,
    tintColor: COLOR_PRIMARY_CORAL_RED,
    paddingLeft: 20,
  },

  wrapperSort: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  txtSort: {
    color: COLOR_PRIMARY_CORAL_RED,
    fontWeight: 'bold',
    fontSize: 12,
  },

  searchInput: {
    alignSelf: 'flex-start',
    color: COLOR_PRIMARY_BLACK,
  },

  wrapperSearch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
