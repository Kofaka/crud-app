import { handleActions } from 'redux-actions';

import { fetchShowLoader, fetchHideLoader } from './actions';

const defaultState = {
  showLoader: false,
};

const loaderReducer = handleActions(
  {
    [fetchShowLoader]: (state) => {
      return {
        ...state,
        showLoader: true,
      };
    },
    [fetchHideLoader]: (state) => {
      return {
        ...state,
        showLoader: false,
      };
    },
  },
  defaultState,
);

// Private Selectors
export const getLoaderStatus = state => state.loaderReducer.showLoader;

export default loaderReducer;