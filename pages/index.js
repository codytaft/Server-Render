import React from 'react';
import Link from 'next/link';
import Head from '../components/Head';
import CardContainer from '../components/CardContainer';

const Home = () => (
  <div className='app'>
    <Head title='Home' />

    <div className='hero'>
      <h1 className='title'>Welcome to the Art House!</h1>
      <p className='description'>Click on the artist to learn more </p>
    </div>
    <CardContainer />
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
        font-family: 'Open Sans Condensed', sans-serif;
        box-sizing: border-box;
        background: rgb(30, 30, 30);
        color: rgba(191, 191, 191);
      }
    `}</style>

    <style jsx>{`
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
);

export default Home;

// .cards {
//   max-width: 880px;
//   margin: 80px auto 40px;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
// }
// .card {
//   padding: 18px 18px 24px;
//   width: 220px;
//   text-align: left;
//   text-decoration: none;
//   color: rgb(191, 191, 191);
//   border: 1px solid #9b9b9b;
// }
// .card:hover {
//   border-color: #067df7;
// }
// .card h3 {
//   margin: 0;
//   color: #067df7;
//   font-size: 18px;
// }
// .card p {
//   margin: 0;
//   padding: 12px 0 0;
//   font-size: 13px;
// }
