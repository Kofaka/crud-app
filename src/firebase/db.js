import { db } from './firebase';

export const doCreateContract = ({ id, userName, userSurname, amountInUsd, currency, date }) =>
  db.ref(`contracts/${id}`).set({
    id,
    user: {
      name: userName,
      surname: userSurname
    },
    amountInUsd,
    currency,
    date
  });

export const onceGetContract = () => db.ref('contracts').once('value');

export const doDeleteContract = (id) => db.ref(`contracts/${id}`).remove();
