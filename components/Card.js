import React from 'react';

export default function Card() {
  return (
    <div className='card'>
      <h3>Title</h3>
      <style jsx>
        {`
          .card {
            width: 10%;
          }
        `}
      </style>
    </div>
  );
}
