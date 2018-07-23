// @flow

import React, { Component } from 'react';
import Header from './Header';

// This is an easy way to check out the props at this component's branch:
//  <h1>
//    <pre><code>{JSON.stringify(props, null, 4)}</code></pre>
//  </h1>

class Details extends Component {
  props: {
    show: Show
  }

  render() {
    const {
      title, description, year, poster, trailer,
    } = this.props.show;
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
