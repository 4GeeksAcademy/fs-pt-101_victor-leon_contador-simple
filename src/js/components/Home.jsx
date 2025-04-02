import React from 'react';
import Digit from './Digit';

const Home = (props) => {
  const numDigits = 6;
  const digits = props.counter.toString().padStart(numDigits, '0').split('');

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <div className="cell">
            <i className="fa-solid fa-clock"></i>
          </div>
        </div>
        {digits.map((digit, index) => (
          <div className="col-auto" key={index}>
            <Digit value={digit} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
