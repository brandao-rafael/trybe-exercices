// App.js
import React from 'react';
import useTimer from '../hooks/useTimer';

export default function Timer() {
  const { timer, randomNumber, isMultiple } = useTimer();
  return (
    <div>
      <p>{`Número gerado: ${randomNumber}`}</p>
      <p>{`Tempo: ${timer}`}</p>
      <p>{isMultiple && 'Bingo!!'}</p>
    </div>
  );
}
