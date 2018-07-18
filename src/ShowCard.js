import React from 'react';
import { shape, string } from 'prop-types';

const ShowCard = (props) => {
  const { show } = props;
  return (
    <div className="show-card">
      <img src={`/posters/${show.poster}`} alt={`${show.title} Show Poster`} />
      <h3>
        {show.title}
      </h3>
      <h4>
        {`(${show.year})`}
      </h4>
      <p>
        {show.description}
      </p>
    </div>
  );
};

ShowCard.propTypes = {
  show: shape({
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired,
  }).isRequired,
};

export default ShowCard;
