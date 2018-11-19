import { combineReducers } from 'redux';

// Reducers
import contractsReducer, * as fromContractsReducer from './contracts/reducers';

// Public Selectors
export const getContractsData = state => fromContractsReducer.getContractsData(state);
export const getCoinApiData = state => fromContractsReducer.getCoinApiData(state);

export default combineReducers({
  contractsReducer,
});