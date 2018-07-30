// @flow

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

// Use Object.assign() for a couple of reasons: do. not. modify. the original state object.
// Object.assign() will create a new object with the state and action. All previous state
// gets merged into the new object, and the action will overwrite whatever state is in there.
const searchTerm = (state = '', action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const apiData = (state = {}, action: Action) => {
  if (action.type === ADD_API_DATA) {
    return Object.assign({}, state, { [action.payload.imdbID]: action.payload });
  }
  return state;
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

// The rootReducer can be created by combineReducers function from Redux
// to create the switch case for all of your actions. This object's
// searchTerm: searchTerm can be written as just 'searchTerm'; it's
// syntactic sugar from ES6. Not sure why it didn't work in JSX tags.
const rootReducer = combineReducers({ searchTerm, apiData });
// without Flow:
// const rootReducer = (state = DEFAULT_STATE, action) => {
//   switch (action.type) {
//     case SET_SEARCH_TERM:
//       return setSearchTerm(state, action);
//     default:
//       return state;
//   }
// };

export default rootReducer;
