// CounterValue.jsx
import React from 'react';
import { useSelector } from 'react-redux';


const CounterValue = () => {
  const counter = useSelector((state) => state.counter.counter);
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={`counter-value ${theme === 'light' ? 'light_theme' : 'dark_theme'}`}>
      <h1>{counter}</h1>
    </div>
  );
};

export default CounterValue;

