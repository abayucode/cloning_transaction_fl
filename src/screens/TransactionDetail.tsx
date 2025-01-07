import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLOR_PRIMARY_ORANGE, COLOR_PRIMARY_WHITE_BACKGROUND } from '../utils/constats';

export default function TransactionDetail(props: any) {
  console.log('props ', props.route.params);
  return (
    <View style={styles.container}>
      <Text style={styles.txtBoldCommon}>ID TRANSAKSI:#FT0987621230</Text>
      <View style={styles.wrapperBtnDetail}>
        <Text style={styles.txtBoldCommon}>DETAIL TRANSAKSI</Text>
        <TouchableOpacity>
          <Text style={styles.txtClosed}>Tutup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: COLOR_PRIMARY_WHITE_BACKGROUND,
  },
  wrapperBtnDetail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtClosed: {
    color: COLOR_PRIMARY_ORANGE,
    fontSize: 14,
  },
  txtBoldCommon: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
