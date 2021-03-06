import React, { useState } from 'react';
import Head from '../components/Head';
import CardContainer from '../components/CardContainer';
import Search from '../components/Search';
import Sort from '../components/Sort';
import fetch from 'isomorphic-unfetch';

const Home = ({ events }) => {
  const [allEvents, setEvents] = useState([...events]);

  const handleSearch = input => {
    const filteredEvents = events.filter(event => {
      let stringifiedEvent = JSON.stringify(event).toLowerCase();
      return stringifiedEvent.includes(input.toLowerCase());
    });
    setEvents(filteredEvents);
  };

  const handleSort = input => {
    setEvents(input);
  };

  return (
    <div className='app'>
      <Head title='Home' />

      <div className='hero'>
        <h1 className='title'>Welcome to the Art House!</h1>
        <p className='description'>
          Click the arrow on the artist to learn more{' '}
        </p>
      </div>
      <div className='search-form'>
        <Search onChange={input => handleSearch(input)} />
      </div>
      <Sort onChange={input => handleSort(input)} artists={allEvents} />

      <CardContainer artists={allEvents} />
      <style jsx global>{`
        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }
        html {
          font-size: 61.5%;
        }
        body {
          letter-spacing: 2px;
          font-family: 'Martel', serif;
          box-sizing: border-box;
          background: rgb(30, 30, 30);
          color: rgba(191, 191, 191);
        }
      `}</style>

      <style jsx>{`
        .search-form {
          text-align: center;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 4.8rem;
        }
        .description {
          font-size: 1.7rem;
        }
        .title,
        .description {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const res = await fetch('http://localhost:3000/static/mock_events.json');
  const json = await res.json();
  return { events: json };
};

export default Home;
