import { createAction } from 'redux-actions';

export const setContractsRequest = createAction('SET_CONTRACTS_REQUEST');
export const fetchContractsRequest = createAction('FETCH_CONTRACTS_REQUEST');

export const setContractsNewEntry = createAction('SET_CONTRACTS_NEW_ENTRY');
export const fetchContractsNewEntry = createAction('FETCH_CONTRACTS_NEW_ENTRY');

export const setContractsDeleteEntry = createAction('SET_CONTRACTS_DELETE_ENTRY');
export const fetchContractsDeleteEntry = createAction('FETCH_CONTRACTS_DELETE_ENTRY');

export const setContractsUpdateEntry = createAction('SET_CONTRACTS_UPDATE_ENTRY');
export const fetchContractsUpdateEntry = createAction('FETCH_CONTRACTS_UPDATE_ENTRY');
