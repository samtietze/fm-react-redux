// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Landing = (props: { searchTerm: string }) => (
  <div className="landing">
    <h1>
      svideo
    </h1>
    <input value={props.searchTerm} type="text" placeholder="Search" />
    <Link to="/search">
      browse
    </Link>
  </div>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

// The connect function pulls out just what it needs from the
// state object (see mapStateToProps object above), and then it injects
// that state as props to the following exported component (e.g. Landing);
export default connect(mapStateToProps)(Landing);
