// @flow

import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

// This currently only handles synchronous states; needs to be
// changed to be capable of handling an async action.
export function setSearchTerm(searchTerm: string) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addAPIData(apiData: Show) {
  return { type: ADD_API_DATA, payload: apiData };
}

// A thunk is a function that returns a function; it creates a
// deferred action for Redux to work async
export function getAPIDetails(imdbID: string) {
  return (dispatch: Function) => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then((response) => {
        dispatch(addAPIData(response.data));
      })
      .catch((error: Error) => {
        console.error('axios error', error);
      });
  };
}
