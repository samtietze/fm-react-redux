// @flow

import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Spinner from './Spinner';

// This is an easy way to check out the props at this component's branch:
//  <h1>
//    <pre><code>{JSON.stringify(props, null, 4)}</code></pre>
//  </h1>
type Props = {
  show: Show
}
type State = {
  apiData: {
    rating: string,
  }
}

class Details extends Component<Props, State> {
  state = {
    apiData: { rating: '' },
  };

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

  // props: {
  //   show: Show
  // }

  render() {
    const {
      title, description, year, poster, trailer,
    } = this.props.show;
    let ratingComponent;
    if (this.state.apiData.rating) {
      ratingComponent = (
        <h3>
          {this.state.apiData.rating}
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

export default Details;
