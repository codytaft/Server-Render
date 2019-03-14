import React from 'react';
import events from '../static/mock_events.json';

export default function cardContainer() {
  return events.map(event => {
    return (
      <div className='card-container'>
        <p className='cards'>hi</p>
      </div>
    );
  });
}
