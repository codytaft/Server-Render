import React from 'react';
import Card from '../components/Card';
import { array } from 'prop-types';

const CardContainer = props => {
  const cards = props.artists.map(artist => (
    <Card cardDetails={artist} key={artist.id} />
  ));
  return (
    <div className='card-container'>
      {cards}
      <style>
        {`
        .card-container {
          margin: 1rem 2rem;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          flex-wrap: wrap;
        }
      `}
      </style>
    </div>
  );
};

CardContainer.propTypes = {
  artists: array
};

export default CardContainer;
