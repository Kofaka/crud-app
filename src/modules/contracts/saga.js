import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {JSON_SERVER_URI} from '../'

import {
  setContractsRequest,
  fetchContractsRequest,
  setCoinApiRequest,
  fetchCoinApiRequest,
} from './actions';

const SERVER_URI = 'http://localhost:4000';
const API_KEY = '8E38EABE-532A-4269-AA76-120EB4BDBCD6';
const API_KEY2 = '55537FA1-D313-48DA-9E60-9135050457E5';
const CURRENCY = 'ETH/USD';
// const COINAPI_URI = `https://rest.coinapi.io/v1/exchangerate/${CURRENCY}?apikey=${API_KEY}`;
const COINAPI_URI = `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_ETH_USD/history?apikey=${API_KEY}&period_id=1MIN&time_start=2018-01-01T00:00:00`;


function* requestContractsWatcher() {
  try {
    const data = yield call(() => {
      return axios.get(`${SERVER_URI}/contracts`);
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
