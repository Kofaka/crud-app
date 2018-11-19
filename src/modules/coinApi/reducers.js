import { handleActions } from 'redux-actions';
import { fetchCoinApiRequest } from './actions';

const defaultState = {
  coinApiData: {},
};

const coinApiReducer = handleActions(
  {
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
export const getCoinApiData = state => state.coinApiReducer.coinApiData;

export default coinApiReducer;