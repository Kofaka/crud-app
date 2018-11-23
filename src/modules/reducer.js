import { combineReducers } from 'redux';

import contractsReducer from './contracts/reducers';
import coinApiReducer from './coinApi/reducers';
import loaderReducer from './loader/reducers';

export default combineReducers({
  contractsReducer,
  coinApiReducer,
  loaderReducer,
});