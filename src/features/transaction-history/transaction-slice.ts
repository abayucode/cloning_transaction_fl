import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TransactionState {
  data?: object | null | [],
  isLoading: boolean,
  error: object | null,
}

const initialState: TransactionState = {
  data: [],
  isLoading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: 'transactionHistory',
  initialState,
  reducers: {
    getListTransactionProcess: (state) => {
      state.data = null;
      state.error = null;
      state.isLoading = true;
    },
    getListTransactionSuccess: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    getListTransactionError: (state, action: PayloadAction<any>) => {
      state.data = null;
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  getListTransactionProcess,
  getListTransactionSuccess,
  getListTransactionError,
} = transactionSlice.actions;
export default transactionSlice.reducer;
