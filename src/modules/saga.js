import { all } from 'redux-saga/effects';

import { contractsWatcher, contractsNewEntryWatcher, contractsDeleteEntryWatcher } from './contracts/saga';
import { coinApiWatcher } from './coinApi/saga';

export default function* rootSaga() {
  yield all([
    contractsWatcher(),
    contractsNewEntryWatcher(),
    contractsDeleteEntryWatcher(),
    coinApiWatcher(),
  ]);
}
