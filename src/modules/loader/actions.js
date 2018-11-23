import { createAction } from 'redux-actions';

export const setShowLoader = createAction('SET_SHOW_LOADER');
export const fetchShowLoader = createAction('FETCH_SHOW_LOADER');

export const setHideLoader = createAction('SET_HIDE_LOADER');
export const fetchHideLoader = createAction('FETCH_HIDE_LOADER');