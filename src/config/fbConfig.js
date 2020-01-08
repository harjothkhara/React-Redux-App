import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCOmM0iV4F-eCgtkUpf_sIo6pj_T2-I3z4',
  authDomain: 'harjoth-marioplan.firebaseapp.com',
  databaseURL: 'https://harjoth-marioplan.firebaseio.com',
  projectId: 'harjoth-marioplan',
  storageBucket: 'harjoth-marioplan.appspot.com',
  messagingSenderId: '257629511023',
  appId: '1:257629511023:web:1d5e7b6538da6430b29c9a',
  measurementId: 'G-GPLMG70S0V'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// initialise database
firebase.firestore();

export default firebase;
