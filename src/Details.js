// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAPIDetails } from './actionCreators';
// import axios from 'axios';
import Header from './Header';
import Spinner from './Spinner';

// This is an easy way to check out the props at this component's branch:
//  <h1>
//    <pre><code>{JSON.stringify(props, null, 4)}</code></pre>
//  </h1>
type Props = {
  show: Show,
  rating: string,
  getAPIData: Function
}
// type State = {
//   apiData: {
//     rating: string,
//   }
// }

class Details extends Component<Props> {
  // Redux update: the ajax call made by axios needs to move to Redux
  // actionCreators since its primary function is state and dispatch.
  // axios does a lot more for ajax request than fetch;
  // doesn't need to deal with a response code, just grabs the response object
  // in whatever format is expected
  // componentDidMount() {
  //   axios
  //     .get(`http://localhost:3000/${this.props.show.imdbID}`)
  //     .then((response: { data: { rating: string}}) => {
  //       this.setState({ apiData: response.data });
  //     });
  // }

  componentDidMount() {
    if (!this.props.rating) {
      this.props.getAPIData();
    }
  }

  render() {
    const {
      title, description, year, poster, trailer,
    } = this.props.show;
    let ratingComponent;
    if (this.props.rating) {
      ratingComponent = (
        <h3>
          {this.props.rating}
        </h3>
      );
    } else {
      ratingComponent = <Spinner />;
    }
    return (
      <div className="details">
        <Header />
        <section>
          <h1>
            {title}
          </h1>
          <h2>
            {`(${year})`}
          </h2>
          {ratingComponent}
          <img src={`/posters/${poster}`} alt={`Poster for ${title}`} />
          <p>
            {description}
          </p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {};
  return {
    rating: apiData.rating,
  };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getAPIData() {
    dispatch(getAPIDetails(ownProps.show.imdbID));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
