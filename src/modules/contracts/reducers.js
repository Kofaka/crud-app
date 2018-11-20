import { handleActions } from 'redux-actions';
import { fetchContractsRequest, fetchContractsNewEntry, fetchContractsDeleteEntry } from './actions';

const defaultState = {
  contractsData: {},
  contractsDataNewEntry: {},
  contractsDataToDeleteId: '',
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
        contractsDataNewEntry: payload,
      };
    },
    [fetchContractsDeleteEntry]: (state, payload) => {
      return {
        ...state,
        contractsDataToDeleteId: payload,
      };
    },
  },
  defaultState,
);

// Private Selectors
export const getContractsData = state => state.contractsReducer.contractsData;

export default contractsReducer;