import { handleActions } from 'redux-actions';
import { fetchContractsRequest, fetchCoinApiRequest } from './actions';

const defaultState = {
  contractsData: {},
  coinApiData: {},
};

const contractsReducer = handleActions(
  {
    [fetchContractsRequest]: (state, { payload }) => {
      return {
        ...state,
        contractsData: payload.data.contracts,
      };
    },
    [fetchCoinApiRequest]: (state, { payload }) => {
      return {
        ...state,
        coinApiData: payload.data,
      };
    },
  },
  defaultState,
);

// Private Selectors
export const getContractsData = state => state.contractsReducer.contractsData;
export const getCoinApiData = state => state.contractsReducer.coinApiData;

export default contractsReducer;