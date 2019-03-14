import React, { useState } from 'react';

export default function Card(props) {
  console.log(props.cardDetails);
  const [expanded, setExpanded] = useState(false);
  const {
    id,
    artist,
    city,
    state,
    country,
    site,
    image,
    description,
    time,
    date
  } = props.cardDetails;
  return (
    <div className='card' id={id}>
      <h3>{artist ? `Name: ${artist}` : `Site: ${site}`}</h3>
      <span className='expand-btn'>+</span>
      {expanded && (
        <div>
          <img src={image} />
          <p>{site}</p>
          <p>
            {city}, {state}
          </p>
          <p>{country}</p>
          <p>{description}</p>
          <p>{time}</p>
          <p>{date}</p>
        </div>
      )}
      <style jsx>
        {`
          .card {
            width: 15rem;
            margin: 1rem;
            padding: 1rem;
            border: 1px solid #9b9b9b;
            border-radius: 2px;
            position: relative;
            cursor: default;
          }
          .card:hover {
            border-color: #067df7;
            color: #067df7;
          }
          .expand-btn {
            position: absolute;
            bottom: 0.7rem;
            right: 0.7rem;
            font-size: 1.8rem;
            height: 1.8rem;
            cursor: default;
          }
          .expand-btn:hover {
            color: red;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
