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
import { getContractsFromFirebase } from '../../helpers'

function* requestContractsWatcher() {
  try {
    const data = yield call(() => getContractsFromFirebase());
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
    const dataToAdd = yield call(() => db.doCreateContract(newEntryData.payload));
    const dataUpdated = yield call(() => getContractsFromFirebase());

    yield put(fetchContractsNewEntry(dataToAdd));
    yield put(fetchContractsRequest(dataUpdated));

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
    const dataUpdated = yield call(() => getContractsFromFirebase());

    yield put(fetchContractsDeleteEntry(data));
    yield put(fetchContractsRequest(dataUpdated));

  } catch (error) {
    console.error(error);
  }
}

export function* contractsDeleteEntryWatcher() {
  yield takeEvery(setContractsDeleteEntry, deleteContractEntryWatcher);
}
