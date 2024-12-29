import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  icSearch: {
    width: 35,
    height: 35,
    tintColor: '#B0B0B0'
  },

  icArrowSort: {
    width: 20,
    height: 20,
    tintColor: '#F9624A',
    paddingLeft: 20
  },

  wrapperSort: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  txtSort: {
    color: '#F9624A',
    fontWeight: 'bold',
    fontSize: 12
  },

  searchInput: {
    alignSelf: 'flex-start',
    color: '#000000',
  },

  wrapperSearch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
});
