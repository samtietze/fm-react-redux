// @flow

export type Show = {
  title: string,
  description: string,
  year: string,
  imdbID: string,
  trailer: string,
  poster: string,
  rating?: string
}

// an enumerated type:
declare type ActionType = 'SET_SEARCH_TERM' | 'ADD_API_DATA';

// Pipes are used for engineered types
declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|}

export type Action = ActionT<'SET_SEARCH_TERM', string> | ActionT<'ADD_API_DATA', Show>;
