import { combineReducers } from 'redux';

// Reducers
import contractsReducer, * as fromContractsReducer from './contracts/reducers';
import coinApiReducer, * as fromCoinApiReducer from './coinApi/reducers';

// Public Selectors
export const getContractsData = state => fromContractsReducer.getContractsData(state);
export const getCoinApiData = state => fromCoinApiReducer.getCoinApiData(state);

export default combineReducers({
  contractsReducer,
  coinApiReducer,
});