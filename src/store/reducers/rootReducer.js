import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer, // responsible for synching our data from firestoreConnect
  firebase: firebaseReducer // synch our auth status on firebase with our redux app in the state
});
export default rootReducer;

// the key name will be the data property on the state object
