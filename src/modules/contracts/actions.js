import { createAction } from 'redux-actions';

export const setContractsRequest = createAction('SET_CONTRACTS_REQUEST');
export const fetchContractsRequest = createAction('FETCH_CONTRACTS_REQUEST');

export const setContractsNewEntry = createAction('SET_CONTRACTS_NEW_ENTRY');
export const fetchContractsNewEntry = createAction('FETCH_CONTRACTS_NEW_ENTRY');
