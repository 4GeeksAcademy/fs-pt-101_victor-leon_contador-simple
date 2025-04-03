import React from 'react';
import Digit from './Digit';

const CounterDigits = ({ counter, numDigits = 6 }) => {
  const digits = counter.toString().padStart(numDigits, '0').split('');
  
  return (
    <>
      {digits.map((digit, index) => (
        <div className="col-auto" key={index}>
          <Digit value={digit} />
        </div>
      ))}
    </>
  );
};

export default CounterDigits;
