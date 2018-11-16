import { all } from 'redux-saga/effects';

import { contractsWatcher, coinApiWatcher } from './contracts/saga';

export default function* rootSaga() {
  yield all([
    contractsWatcher(),
    coinApiWatcher(),
  ]);
}
