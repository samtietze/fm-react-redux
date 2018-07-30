// @flow

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM } from './actions';

const DEFAULT_STATE = {
  searchTerm: '',
};

// Use Object.assign() for a couple of reasons: do. not. modify. the original state object.
// Object.assign() will create a new object with the state and action. All previous state
// gets merged into the new object, and the action will overwrite whatever state is in there.
const setSearchTerm = (state, action) => Object.assign({}, state, { searchTerm: action.payload });

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
// to create the switch case for all of your actions
// without Flow:
const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    default:
      return state;
  }
};

export default rootReducer;
