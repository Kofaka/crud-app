import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {COINAPI_URI} from '../../constants/constants'

import {
  setCoinApiRequest,
  fetchCoinApiRequest,
} from './actions';

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
