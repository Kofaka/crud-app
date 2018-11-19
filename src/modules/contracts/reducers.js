import { handleActions } from 'redux-actions';
import { fetchContractsRequest, fetchCoinApiRequest } from './actions';

const defaultState = {
  contractsData: {},
  coinApiData: {},
};

const contracts = handleActions(
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

export default contracts;