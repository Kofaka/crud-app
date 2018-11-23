import { put, call, takeEvery } from 'redux-saga/effects';
import { db } from '../../firebase';

import {
  setContractsRequest,
  fetchContractsRequest,
  setContractsNewEntry,
  fetchContractsNewEntry,
  setContractsDeleteEntry,
  fetchContractsDeleteEntry,
  setContractsUpdateEntry,
  fetchContractsUpdateEntry,
} from './actions';
import { fetchShowLoader, fetchHideLoader } from '../loader/actions';
import { getContractsFromFirebase } from '../../helpers'


function* requestContractsWatcher() {
  try {
    yield put(fetchShowLoader());

    const data = yield call(() => getContractsFromFirebase());
    yield put(fetchHideLoader());
    yield put(fetchContractsRequest(data));

  } catch (error) {
    yield put(fetchHideLoader());
    console.error(error);
  }
}

export function* contractsWatcher() {
  yield takeEvery(setContractsRequest, requestContractsWatcher);
}


function* addContractsNewEntryWatcher(newEntryData = {}) {
  try {
    yield put(fetchShowLoader());

    const dataToAdd = yield call(() => db.doCreateContract(newEntryData.payload));
    const dataUpdated = yield call(() => getContractsFromFirebase());

    yield put(fetchContractsNewEntry(dataToAdd));
    yield put(fetchHideLoader());
    yield put(fetchContractsRequest(dataUpdated));

  } catch (error) {
    yield put(fetchHideLoader());
    console.error(error);
  }
}

export function* contractsNewEntryWatcher() {
  yield takeEvery(setContractsNewEntry, addContractsNewEntryWatcher);
}


function* deleteContractEntryWatcher(dataToDelete = '') {
  try {
    yield put(fetchShowLoader());

    const data = yield call(() => db.doDeleteContract(dataToDelete.payload));
    const dataUpdated = yield call(() => getContractsFromFirebase());

    yield put(fetchContractsDeleteEntry(data));
    yield put(fetchHideLoader());
    yield put(fetchContractsRequest(dataUpdated));

  } catch (error) {
    yield put(fetchHideLoader());
    console.error(error);
  }
}

export function* contractsDeleteEntryWatcher() {
  yield takeEvery(setContractsDeleteEntry, deleteContractEntryWatcher);
}


function* updateContractEntryWatcher(dataToUpdateEntry = {}) {
  try {
    yield put(fetchShowLoader());

    const data = yield call(() => db.doUpdateContract(dataToUpdateEntry.payload));
    const dataUpdated = yield call(() => getContractsFromFirebase());

    yield put(fetchContractsUpdateEntry(data));
    yield put(fetchHideLoader());
    yield put(fetchContractsRequest(dataUpdated));

  } catch (error) {
    yield put(fetchHideLoader());
    console.error(error);
  }
}

export function* contractsUpdateEntryWatcher() {
  yield takeEvery(setContractsUpdateEntry, updateContractEntryWatcher);
}
