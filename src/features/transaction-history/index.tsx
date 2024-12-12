import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import CardHistory from '../../components/card-history';
import { styles } from './styles';

export default function TransactionHistory() {
  return (
    <ScrollView style={styles.container}>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => {
          if (item % 2 === 0) {
            return (
              <CardHistory key={key} transactionType={false} />
            );
          } else {
            return (
              <CardHistory key={key} transactionType={true} />
            );
          }
        })
      }
    </ScrollView>
  );
}
