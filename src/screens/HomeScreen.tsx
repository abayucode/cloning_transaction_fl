import * as React from 'react';
import { View } from 'react-native';
import TransactionHistory from '../features/transaction-history';

export default function HomeScreen() {
  return (
    <View>
      <TransactionHistory />
    </View>
  );
}
