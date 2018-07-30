// @flow

import React from 'react';
import { connect } from 'react-redux';
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

// Turning Search into a stateless component because of Redux!
// type Props = {
//   shows: Array<Show>
// }
// type State = {
//   searchTerm: string
// }

// Transform payload (array) to array of React components
const Search = (props: {
  searchTerm: string,
  shows: Array<Show>,
}) => (

  // This handler is no longer needed in this component when Redux is implemented:
  // handleSearchTermChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
  //   this.setState({ searchTerm: event.currentTarget.value });
  // }

  // render() {
  // const { searchText } = this.state;
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(
          show => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0,
        )
        .map(show => <ShowCard key={show.imdbID} show={show} />)}
    </div>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});

export default connect(mapStateToProps)(Search);
