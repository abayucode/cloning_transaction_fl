import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function CardHistory(props: any) {
  const { transactionType } = props;
  return (
    <View style={styles.containerCard}>
      <View>
        <View style={styles.wrapperTxtBank}>
          <Text style={styles.txtBankName}>Permata</Text>
          <Text>{'-->'}</Text>
          <Text style={styles.txtBankName}>BNI</Text>
        </View>
        <Text style={styles.txtPicName}>- SYIFA SALSABYLA</Text>
        <Text>Rp10.028 . 8 April 2020</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.btnActionDetail(transactionType)}>
          <Text style={styles.txtBankName}>{transactionType ? 'Pengecekkan' : 'Berhasil'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
