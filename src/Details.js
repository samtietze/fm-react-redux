// @flow

import React from 'react';

{/* This is an easy way to check out the props at this component's branch */}
{/* <h1><pre><code>{JSON.stringify(props, null, 4)}</code></pre></h1> */}

const Details = (props: { show: Show }) => {
  const { title, description, year, poster, trailer } = props.show;
  <div className="details">
    <header>
      <h1>svideo</h1>
    </header>
    <section>
      <h1>{title}</h1>
      <h2>({year})</h2>
      <img src={`/public/posters/${poster}`} alt={`Poster for ${title}`} />
      <p>{description}</p>
    </section>
    <div>
      <iframe 
        src={`https://www.youtube-nocookie.com/embed/${trailer}
          ?rel=0&amp;controls=0&amp;showinfo=0`}
          frameborder="0"
          allowFullscreen
          title={`Trailer for ${title}`}
      />
    </div>
  </div>
};

export default Details;
