import { put, call, takeEvery } from 'redux-saga/effects';
import { db } from '../../firebase';

import {
  setContractsRequest,
  fetchContractsRequest,
  setContractsNewEntry,
  fetchContractsNewEntry,
  setContractsDeleteEntry,
  fetchContractsDeleteEntry,
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

function* addContractsNewEntryWatcher(newEntryData = {}) {
  try {
    const data = yield call(() => db.doCreateContract(newEntryData.payload));
    yield put(fetchContractsNewEntry(data));
  } catch (error) {
    console.error(error);
  }
}

export function* contractsNewEntryWatcher() {
  yield takeEvery(setContractsNewEntry, addContractsNewEntryWatcher);
}

function* deleteContractEntryWatcher(dataToDelete = '') {
  try {
    const data = yield call(() => db.doDeleteContract(dataToDelete.payload));
    yield put(fetchContractsDeleteEntry(data));
  } catch (error) {
    console.error(error);
  }
}

export function* contractsDeleteEntryWatcher() {
  yield takeEvery(setContractsDeleteEntry, deleteContractEntryWatcher);
}
