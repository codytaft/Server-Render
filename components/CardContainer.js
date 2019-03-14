import React from 'react';
import events from '../static/mock_events.json';
import Card from '../components/Card';

export default function cardContainer() {
  const cards = events.map(event => <Card />);
  return (
    <div className='card-container'>
      {cards}
      <style>
        {`
        .card-container {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          flex-wrap: wrap
        }
      `}
      </style>
    </div>
  );
}
