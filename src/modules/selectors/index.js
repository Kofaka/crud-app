// Reducers
import * as fromContractsReducer from '../contracts/reducers';
import * as fromCoinApiReducer from '../coinApi/reducers';

// Public Selectors
export const getContractsData = state => fromContractsReducer.getContractsData(state);
export const getCoinApiData = state => fromCoinApiReducer.getCoinApiData(state);
