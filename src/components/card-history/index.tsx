import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles, containerCard, txtTrxStatus, btnActionDetail } from './styles';
import { setFormatDateID } from '../../utils/utils';

export default function CardHistory(props: any) {
  const { transactionData } = props;

  const isSuccessTransaction = (): boolean => {
    return transactionData.status === 'SUCCESS';
  };

  return (
    <TouchableOpacity style={containerCard(isSuccessTransaction())}>
      <View>
        <View style={styles.wrapperTxtBank}>
          <Text style={styles.txtBankName}>{transactionData.sender_bank.toUpperCase()}</Text>
          <Image source={require('../../../assets/icons/ic_arrow_2.png')} style={styles.imgArrow} />
          <Text style={styles.txtBankName}>{transactionData.beneficiary_bank.toUpperCase()}</Text>
        </View>
        <Text style={styles.txtPicName}>- {transactionData.beneficiary_name}</Text>
        <Text style={styles.txtPicName}>Rp{transactionData.amount} . {setFormatDateID(transactionData.completed_at)}</Text>
      </View>
      <View>
        <View style={btnActionDetail(isSuccessTransaction())}>
          <Text style={txtTrxStatus(isSuccessTransaction())}>{isSuccessTransaction() ? 'Berhasil' : 'Pengecekkan'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
