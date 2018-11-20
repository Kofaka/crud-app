import { put, call, takeEvery } from 'redux-saga/effects';
import { db } from '../../firebase';

import {
  setContractsRequest,
  fetchContractsRequest,
} from './actions';

function* requestContractsWatcher() {
  try {
    const data = yield call(() => db.onceGetContract().then(snapshot => snapshot.val()));
    yield put(fetchContractsRequest(data));
  } catch (error) {
    console.error(error);
  }
}

export function* contractsWatcher() {
  yield takeEvery(setContractsRequest, requestContractsWatcher);
}
