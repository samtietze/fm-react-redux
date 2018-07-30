// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

type Props = {
  searchTerm: string,
  handleSearchTermChange: Function,
  history: RouterHistory,
};

class Landing extends Component<Props> {
  // This component has access to the history object by
  // default (no need to opt-in), because it exists as a Route.
  goToSearch = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.props.history.push('/search');
  }

  render() {
    return (
      <div className="landing">
        <h1>
          svideo
        </h1>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
            type="text"
            placeholder="Search"
          />
        </form>
        <Link to="/search">
          browse
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.currentTarget.value));
  },
});

// The connect function pulls out just what it needs from the
// state object (see mapStateToProps object above), and then it injects
// that state as props to the following exported component (e.g. Landing);
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
