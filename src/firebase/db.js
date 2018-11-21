import { db } from './firebase';

export const doCreateContract = ({ id, name, surname, amountInUsd, currency, date }) =>
  db.ref(`contracts/${id}`).set({
    id,
    user: {
      name,
      surname
    },
    amountInUsd,
    currency,
    date
  });

export const onceGetContract = () => db.ref('contracts').once('value');

export const doDeleteContract = (id) => db.ref(`contracts/${id}`).remove();

export const doUpdateContract = ({ id, name, surname, amountInUsd, currency, date }) =>
  db.ref(`contracts/${id}`).update({
    id,
    user: {
      name,
      surname
    },
    amountInUsd,
    currency,
    date
  });
