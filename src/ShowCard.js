import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const ShowCard = (props) => {
  const { show } = props;
  return (
    <Wrapper>
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
    </Wrapper>
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
