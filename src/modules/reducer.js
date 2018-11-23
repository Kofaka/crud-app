import { combineReducers } from 'redux';

import contractsReducer from './contracts/reducers';
import coinApiReducer from './coinApi/reducers';

export default combineReducers({
  contractsReducer,
  coinApiReducer,
});