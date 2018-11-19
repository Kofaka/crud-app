import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {CONTRACTS_DB_URI} from '../../constants/constants'

import {
  setContractsRequest,
  fetchContractsRequest,
} from './actions';

function* requestContractsWatcher() {
  try {
    const data = yield call(() => {
      return axios.get(CONTRACTS_DB_URI);
    });
    yield put(fetchContractsRequest(data));
  } catch (error) {
    console.error(error);
  }
}

export function* contractsWatcher() {
  yield takeEvery(setContractsRequest, requestContractsWatcher);
}
