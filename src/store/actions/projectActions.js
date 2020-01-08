// action creator - functions that create actions
export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database - pausing dispatch while we do this async stuff
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'Harjoth',
        authorLastName: 'Khara',
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        // action
        dispatch({ type: 'CREATE_PROJECT', project }); // when its complete
        // project: project - ES6
      })
      .catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
};
