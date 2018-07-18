import React from 'react';

const ShowCard = props => (
  <div className="show-card">
    <img src={`/posters/${props.show.poster}`} alt={`${props.show.title} Show Poster`} />
    <h3>
      {props.show.title}
    </h3>
    <h4>
      {`(${props.show.year})`}
    </h4>
    <p>
      {props.show.description}
    </p>
  </div>
);

export default ShowCard;
