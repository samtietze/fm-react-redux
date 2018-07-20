// @flow

import React, { Component } from 'react';
import preload from './data';
import ShowCard from './ShowCard';

// Easy way to dump a bunch of data to the dom to test
// const Search = () => (
//   <div className="search">
//     <pre>
//       <code>
//         {JSON.stringify(preload, null, 4)}
//       </code>
//     </pre>
//   </div>
// );
type Props = {}
type State = {
  searchTerm: string
}

// Transform payload (array) to array of React components
class Search extends Component<Props, State> {
  state = {
    searchTerm: '',
  };

  handleSearchTermChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.currentTarget.value });
  }

  render() {
    // const { searchText } = this.state;
    return (
      <div className="search">
        <header>
          <h1>
            svideo
          </h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        {preload.shows
          .filter(
            show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0,
          )
          .map(show => <ShowCard key={show.imdbID} show={show} />)}
      </div>
    );
  }
}

export default Search;
