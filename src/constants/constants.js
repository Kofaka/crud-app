export const JSON_SERVER_URI = 'http://localhost:4000';
export const CONTRACTS_DB_URI = '/db.json'; // In a production version tha call will be directly to db.
                                            // The call to mocked DB is made to have ability
                                            // to test this app on remote server without setting it
export const API_KEY = '8E38EABE-532A-4269-AA76-120EB4BDBCD6';
export const API_KEY2 = '55537FA1-D313-48DA-9E60-9135050457E5';
export const COINAPI_URI = `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_ETH_USD/history?apikey=${API_KEY}&period_id=1MIN&time_start=2018-01-01T00:00:00`;