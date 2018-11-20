import { handleActions } from 'redux-actions';
import { fetchContractsRequest, fetchContractsNewEntry } from './actions';

const defaultState = {
  contractsData: {},
};

const contractsReducer = handleActions(
  {
    [fetchContractsRequest]: (state, { payload }) => {
      return {
        ...state,
        contractsData: payload,
      };
    },
    [fetchContractsNewEntry]: (state, payload) => {
      return {
        ...state,
        payload,
      };
    },
  },
  defaultState,
);

// Private Selectors
export const getContractsData = state => state.contractsReducer.contractsData;

export default contractsReducer;