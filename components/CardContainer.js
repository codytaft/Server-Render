import React from 'react';
import events from '../static/mock_events.json';
import Card from '../components/Card';

export default function cardContainer() {
  const cards = events.map(event => (
    <Card cardDetails={event} key={event.id} />
  ));
  return (
    <div className='card-container'>
      {cards}
      <style>
        {`
        .card-container {
          margin: 2rem 2rem;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          flex-wrap: wrap;
        }
      `}
      </style>
    </div>
  );
}
