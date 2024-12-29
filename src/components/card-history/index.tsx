import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles, containerCard, txtTrxStatus, btnActionDetail } from './styles';

export default function CardHistory(props: any) {
  const { transactionType } = props;
  return (
    <TouchableOpacity style={containerCard(transactionType)}>
      <View>
        <View style={styles.wrapperTxtBank}>
          <Text style={styles.txtBankName}>Permata</Text>
          <Image source={require('../../../assets/icons/ic_arrow_2.png')} style={styles.imgArrow} />
          <Text style={styles.txtBankName}>BNI</Text>
        </View>
        <Text style={styles.txtPicName}>- SYIFA SALSABYLA</Text>
        <Text style={styles.txtPicName}>Rp10.028 . 8 April 2020</Text>
      </View>
      <View>
        <View style={btnActionDetail(transactionType)}>
          <Text style={txtTrxStatus(transactionType)}>{transactionType ? 'Pengecekkan' : 'Berhasil'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
