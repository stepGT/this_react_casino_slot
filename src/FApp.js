import React, { useState, useCallback } from 'react';

import { RepeatButton } from './components';
import { WinningSound } from './components';
import { Spinner } from './components';

import './App.css';

const FApp = () => {
  const [winner, setWinner] = useState(null);
  const [matches, setMatches] = useState([]);
  const ref = useCallback((component) => {
    if (component) component.forceUpdateHandler();
  }, []);
  let repeatButton = null;
  let winningSound = null;
  const loser = [
    'Not quite',
    'Stop gambling',
    'Hey, you lost!',
    'Ouch! I felt that',
    "Don't beat yourself up",
    'There goes the college fund',
    'I have a cat. You have a loss',
    "You're awesome at losing",
    'Coding is hard',
    "Don't hate the coder",
  ];
  const finishHandler = (value) => {
    setMatches(value);
    //
    if (matches.length === 3) {
      const first = matches[0];
      let results = matches.every((match) => match === first);
      setWinner(results);
    }
  };
  const handleClick = () => {
    setWinner(null);
    setMatches([]);
  };

  const getLoser = () => {
    return loser[Math.floor(Math.random() * loser.length)];
  };

  if (winner !== null) {
    repeatButton = <RepeatButton onClick={handleClick} />;
  }

  if (winner) {
    winningSound = <WinningSound />;
  }
  return (
    <div>
      {winningSound}
      <h1 style={{ color: 'white' }}>
        <span>
          {winner === null
            ? 'Waiting…'
            : winner
            ? '🤑 Pure skill! 🤑'
            : getLoser()}
        </span>
      </h1>

      <div className={`spinner-container`}>
        <Spinner onFinish={finishHandler} ref={ref} timer="1000" />
        <Spinner onFinish={finishHandler} ref={ref} timer="1400" />
        <Spinner onFinish={finishHandler} ref={ref} timer="2200" />
        <div className="gradient-fade"></div>
      </div>
      {repeatButton}
    </div>
  );
};

export default FApp;
