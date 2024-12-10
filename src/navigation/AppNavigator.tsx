import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionHistory from '../features/transaction-history';

export default function AppNavigator() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='TransactionHistory'
      >
        <Stack.Screen name='TransactionHistory' component={TransactionHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}