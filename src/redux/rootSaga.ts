import { all, fork } from 'redux-saga/effects';
import watchGetListTransaction from '../features/transaction-history/transaction-saga';

export default function* rootSaga() {
  yield all([
    fork(watchGetListTransaction),
  ]);
}
