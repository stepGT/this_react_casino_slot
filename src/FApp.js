import React, { useState } from 'react';

import { RepeatButton } from './components';
import { WinningSound } from './components';
import { Spinner } from './components';

import './App.css';

let repeatButton = null;
let winningSound = null;
let matches = [];
let _child1, _child2, _child3;
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

const FApp = () => {
  const [winner, setWinner] = useState(null);
  const finishHandler = (value) => {
    matches.push(value);
    //
    if (matches.length === 3) {
      const first = matches[0];
      let results = matches.every((match) => match === first);
      setWinner(results);
    }
  };

  const handleClick = () => {
    setWinner(null);
    emptyMatches();
    _child1.forceUpdateHandler();
    _child2.forceUpdateHandler();
    _child3.forceUpdateHandler();
  };

  const emptyMatches = () => (matches = []);

  const getLoser = () => {
    return loser[Math.floor(Math.random() * loser.length)];
  };

  repeatButton = (winner !== null) ? <RepeatButton onClick={handleClick} /> : null;
  winningSound = winner ? <WinningSound /> : null;
  
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
        <Spinner
          onFinish={finishHandler}
          ref={(child) => {
            _child1 = child;
          }}
          timer="1000"
        />
        <Spinner
          onFinish={finishHandler}
          ref={(child) => {
            _child2 = child;
          }}
          timer="1400"
        />
        <Spinner
          onFinish={finishHandler}
          ref={(child) => {
            _child3 = child;
          }}
          timer="2200"
        />
        <div className="gradient-fade"></div>
      </div>
      {repeatButton}
    </div>
  );
};

export default FApp;
