const DEFAULT_STATE = {
  searchTerm: '',
};

// This is a 'flux standard action':
// {
//   type: string,
//   payload: ,
//   error: Error,
//   metadata: {
//     object of other metadata to include with action
//   }
// }

// without Flow:
const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
