// @flow

export type Show = {
  title: string,
  description: string,
  year: string,
  imdbID: string,
  trailer: string,
  poster: string
}

// an enumerated type:
declare type ActionType = 'SET_SEARCH_TERM'

// Pipes are used for engineered types
declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|}

export type Action = ActionT<'SET_SEARCH_TERM', string>;
