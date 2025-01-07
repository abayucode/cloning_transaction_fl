import { put, takeLatest } from 'redux-saga/effects';
import apiFetch from '../../utils/apiFetch';
import { getListTransactionError, getListTransactionProcess, getListTransactionSuccess } from './transaction-slice';

function* getListTransaction() {
  try {
    const result = yield apiFetch('https://recruitment-test.flip.id/frontend-test', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put(getListTransactionSuccess(result));
  } catch (error: any) {
    yield put(getListTransactionError(error));
  }
}

export default function* watchGetListTransaction() {
  yield takeLatest(getListTransactionProcess.type, getListTransaction);
}
