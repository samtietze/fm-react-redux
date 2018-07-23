// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';
// import preload from './data';

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
// Typing for Flow; Search class needed this or it threw an error regarding searchTerm.
// Not sure why it's typed differently from ShowCard's typing. Because of Class?

type Props = {
  shows: Array<Show>
}
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
        <Header
          searchTerm={this.state.searchTerm}
          showSearch
          handleSearchTermChange={this.handleSearchTermChange}
        />
        {this.props.shows
          .filter(
            show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0,
          )
          .map(show => <ShowCard key={show.imdbID} show={show} />)}
      </div>
    );
  }
}

export default Search;
