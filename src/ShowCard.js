// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = (props: {
  show: {
    poster: string,
    title: string,
    year: string,
    description: string,
  }}) => {
  const { show } = props;
  return (
    <Wrapper>
      <Image src={`/posters/${show.poster}`} alt={`${show.title} Show Poster`} />
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

export default ShowCard;
