import React, { useState } from 'react';

export default function Card(props) {
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
      <h3 className='artist-name'>{artist ? artist : site}</h3>
      {isHovering & !expanded ? (
        <span className='expand-btn' onClick={handleClickExpanded}>
          &or;
        </span>
      ) : isHovering & expanded ? (
        <span className='unexpand-btn' onClick={handleClickExpanded}>
          &and;
        </span>
      ) : (
        <div />
      )}

      {expanded && (
        <div>
          <img src={image} alt='artist image' />
          <p>
            WEBSITE: <span>{site}</span>
          </p>
          <p>
            LOCATION:{' '}
            <span>
              {city}, {state}
            </span>
          </p>
          <p>
            COUNTRY: <span>{country}</span>
          </p>
          <div className='artist-description'>
            <h4>DESCRIPTION: </h4>
            <p>{description}</p>
          </div>
          <p className='date-time'>
            TIME: {time}
            DATE: {date}
          </p>
        </div>
      )}
      <style jsx>
        {`
          .card {
            width: 60%;
            margin: 1rem;
            padding: 1rem;
            border: 1px solid #9b9b9b;
            border-radius: 2px;
            position: relative;
            cursor: default;
            font-size: 1.5rem;
          }
          .card:hover {
            border-color: #067df7;
            color: #067df7;
          }
          img {
            display: block;
            margin: 2rem auto;
            width: 7rem;
          }
          p {
            color: rgb(191, 191, 191);
            margin: 1rem 0;
          }
          span {
            float: right;
          }
          .artist-description {
            text-align: center;
            margin: 1rem 0;
            color: rgb(191, 191, 191);
          }
          .artist-description p {
            font-size: 1.3rem;
            padding: 0 1rem;
          }
          .date-time {
            font-size: 1rem;
            text-align: center;
            margin-top: 1rem;
          }
          .expand-btn {
            position: absolute;
            bottom: 1rem;
            right: 0.7rem;
            font-size: 3rem;
            height: 3rem;
            cursor: default;
          }
          .expand-btn:hover {
            color: red;
            cursor: pointer;
          }
          .unexpand-btn {
            position: absolute;
            top: 0.5rem;
            right: 1rem;
            font-size: 3rem;
            height: 3rem;
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
