// @flow

import { SET_SEARCH_TERM } from './actions';

// This currently only handles synchronous states; needs to be
// changed to be capable of handling an async action.
export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}
