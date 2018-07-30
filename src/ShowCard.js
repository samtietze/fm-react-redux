// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  flex: 1 1 400px;
  display: flex;
  flex-flow: row no wrap
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  height: 100%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = (props: {
  show: {
    poster: string,
    title: string,
    year: string,
    description: string,
    imdbID: string,
  }}) => {
  const { show } = props;
  return (
    <Wrapper className="show-card" to={`/details/${show.imdbID}`}>
      <Image src={`/posters/${show.poster}`} alt={`${show.title} Show Poster`} />
      <div>
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
    </Wrapper>
  );
};

export default ShowCard;
