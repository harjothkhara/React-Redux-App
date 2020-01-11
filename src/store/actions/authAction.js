export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    // action creator
    const firebase = getFirebase(); // gives us a firebase instance so we can use it to sign the user in

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        // takes some time to complete, returns a promise, once resolved ...
        dispatch({ type: 'LOGIN_SUCCESS' }); // if success this action is dispatched to reducer
      })
      .catch(err => {
        dispatch({ type: 'LOGIN_ERROR', err }); // if error this action is dispacthed to reducer
      });
  };
};
