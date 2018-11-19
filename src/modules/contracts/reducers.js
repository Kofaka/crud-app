import { handleActions } from 'redux-actions';
import { fetchContractsRequest } from './actions';

const defaultState = {
  contractsData: {},
};

const contractsReducer = handleActions(
  {
    [fetchContractsRequest]: (state, { payload }) => {
      return {
        ...state,
        contractsData: payload.data.contracts,
      };
    },
  },
  defaultState,
);

// Private Selectors
export const getContractsData = state => state.contractsReducer.contractsData;

export default contractsReducer;