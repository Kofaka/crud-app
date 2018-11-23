import { put, takeEvery } from 'redux-saga/effects';

import {
  setShowLoader,
  fetchShowLoader,
  setHideLoader,
  fetchHideLoader,
} from './actions';


function* showLoader() {
  try {
    yield put(fetchShowLoader());
  } catch (error) {
    yield put(fetchHideLoader());
    console.error(error);
  }
}

function* hideLoader() {
  try {
    yield put(fetchHideLoader());
  } catch (error) {
    console.error(error);
  }
}

export function* loaderWatcher() {
  yield takeEvery(setShowLoader, showLoader);
  yield takeEvery(setHideLoader, hideLoader);
}
