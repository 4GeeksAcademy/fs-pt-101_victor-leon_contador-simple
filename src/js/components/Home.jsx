import React from 'react';
import ClockIcon from './ClockIcon';
import CounterDigits from './CounterDigits';

const Home = ({ counter }) => (
  <div className="container">
    <div className="row justify-content-center">
      <ClockIcon />
      <CounterDigits counter={counter} />
    </div>
  </div>
);

export default Home;
