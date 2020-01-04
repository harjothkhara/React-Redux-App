// action creator - functions that create actions
export const createProject = project => {
  return (dispatch, getState) => {
    // make async call to database
    // action
    dispatch({ type: 'CREATE_PROJECT', project });
    // project: project - ES6
  };
};
