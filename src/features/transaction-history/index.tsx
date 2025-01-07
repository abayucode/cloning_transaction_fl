import * as React from 'react';
import { FlatList, ScrollView } from 'react-native';
import CardHistory from '../../components/card-history';
import { styles } from './styles';
import SearchComponent from '../../components/search-component';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getListTransactionProcess } from './transaction-slice';

interface Transaction {
  id: string;
  amount: number;
  unique_code: number;
  status: string;
  sender_bank: string;
  account_number: string;
  beneficiary_name: string;
  beneficiary_bank: string;
  remark: string;
  created_at: string;
  completed_at: string;
  fee: number;
}

export default function TransactionHistory() {

  const [transactionList, setTransactionList] = React.useState<Transaction[]>([]);

  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state: RootState) => state.transactionList);

  React.useEffect(() => {
    dispatch(getListTransactionProcess());
  }, [dispatch]);

  React.useEffect(() => {
    setTransactionList(Object.values(data ?? {}));
  }, [data]);

  return (
    <ScrollView style={styles.container}>
      <SearchComponent />
      <FlatList
        data={transactionList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardHistory transactionData={item} />
        )}
      />
    </ScrollView>
  );
}
