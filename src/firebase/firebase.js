import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyCN1JBRTOM5bw8QMLpF5wZF00IdwQwrKoA",
  authDomain: "polaris327-crud-application.firebaseapp.com",
  databaseURL: "https://polaris327-crud-application.firebaseio.com",
  projectId: "polaris327-crud-application",
  storageBucket: "polaris327-crud-application.appspot.com",
  messagingSenderId: "715090132651"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();

export {
  db,
};
