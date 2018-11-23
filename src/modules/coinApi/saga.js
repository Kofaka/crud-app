import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { COINAPI_URI } from '../../constants/constants'

import { setCoinApiRequest, fetchCoinApiRequest } from './actions';
import { fetchShowLoader, fetchHideLoader } from '../loader/actions';


function* requestCoinApiWatcher() {
  try {
    yield put(fetchShowLoader());

    const data = yield call(() => axios.get(COINAPI_URI));
    yield put(fetchHideLoader());
    yield put(fetchCoinApiRequest(data));
  } catch (error) {
    yield put(fetchHideLoader());
    console.error(error);
  }
}

export function* coinApiWatcher() {
  yield takeEvery(setCoinApiRequest, requestCoinApiWatcher);
}
