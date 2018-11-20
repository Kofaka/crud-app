import { db } from './firebase';

export const doCreateContract = ({ id, userName, userSurname, amountInUsd, currency, date }) =>
  db.ref(`contracts/${id}`).set({
    user: {
      name: userName,
      surname: userSurname
    },
    amountInUsd,
    currency,
    date
  });

export const onceGetContract = () =>
  db.ref('contracts').once('value');