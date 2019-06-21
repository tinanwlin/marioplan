export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();
    fireStore.collection('projects').add({
      ...project,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345, 
      createAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project: project });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    })
  }
};