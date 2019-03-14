import React, { useState } from 'react';

export default function Card(props) {
  console.log(props.cardDetails);
  const [expanded, setExpanded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
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

  const handleHovering = () => {
    setIsHovering(!isHovering);
  };

  const handleClickExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className='card'
      id={id}
      onMouseEnter={handleHovering}
      onMouseLeave={handleHovering}
    >
      <h3>{artist ? `Name: ${artist}` : `Site: ${site}`}</h3>
      {isHovering & !expanded ? (
        <span className='expand-btn' onClick={handleClickExpanded}>
          +
        </span>
      ) : isHovering & expanded ? (
        <span className='unexpand-btn' onClick={handleClickExpanded}>
          -
        </span>
      ) : (
        <div />
      )}
      {/* {expanded && (
        <span className='unexpand-btn' onClick={handleClickExpanded}>
          -
        </span>
      )} */}
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
          .unexpand-btn {
            position: absolute;
            bottom: 0.7rem;
            right: 0.7rem;
            font-size: 1.8rem;
            height: 1.8rem;
            cursor: default;
          }
          .unexpand-btn:hover {
            color: lime;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
