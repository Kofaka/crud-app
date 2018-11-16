import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {JSON_SERVER_URI, COINAPI_URI} from '../../constants/constants'

import {
  setContractsRequest,
  fetchContractsRequest,
  setCoinApiRequest,
  fetchCoinApiRequest,
} from './actions';

function* requestContractsWatcher() {
  try {
    const data = yield call(() => {
      return axios.get(`${JSON_SERVER_URI}/contracts`);
    });
    yield put(fetchContractsRequest(data));
  } catch (error) {
    console.error(error);
  }
}

export function* contractsWatcher() {
  yield takeEvery(setContractsRequest, requestContractsWatcher);
}


function* requestCoinApiWatcher() {
  try {
    const data = yield call(() => {
      return axios.get(COINAPI_URI);
    });
    yield put(fetchCoinApiRequest(data));
  } catch (error) {
    console.error(error);
  }
}

export function* coinApiWatcher() {
  yield takeEvery(setCoinApiRequest, requestCoinApiWatcher);
}
