import { db } from '../firebase';

export const getContractsFromFirebase = () => db.onceGetContract().then(snapshot => snapshot.val());
