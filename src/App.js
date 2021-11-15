import React from 'react';

import { RepeatButton } from './components';
import { WinningSound } from './components';
import { Spinner } from './components';

import "./App.css";

class App extends React.Component {
  constructor(props) {
    //console.log(qw)
    super(props);
    this.state = {
      winner: null,
    };
    this.finishHandler = this.finishHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ winner: null });
    this.emptyArray();
    this._child1.forceUpdateHandler();
    this._child2.forceUpdateHandler();
    this._child3.forceUpdateHandler();
  }

  static loser = [
    "Not quite",
    "Stop gambling",
    "Hey, you lost!",
    "Ouch! I felt that",
    "Don't beat yourself up",
    "There goes the college fund",
    "I have a cat. You have a loss",
    "You're awesome at losing",
    "Coding is hard",
    "Don't hate the coder",
  ];

  static matches = [];

  finishHandler(value) {
    App.matches.push(value);

    if (App.matches.length === 3) {
      const { winner } = this.state;
      const first = App.matches[0];
      let results = App.matches.every((match) => match === first);
      this.setState({ winner: results });
    }
  }

  emptyArray() {
    App.matches = [];
  }

  render() {
    const { winner } = this.state;
    const getLoser = () => {
      return App.loser[Math.floor(Math.random() * App.loser.length)];
    };
    let repeatButton = null;
    let winningSound = null;

    if (winner !== null) {
      repeatButton = <RepeatButton onClick={this.handleClick} />;
    }

    if (winner) {
      winningSound = <WinningSound />;
    }

    return (
      <div>
        {winningSound}
        <h1 style={{ color: "white" }}>
          <span>
            {winner === null
              ? "Waiting…"
              : winner
              ? "🤑 Pure skill! 🤑"
              : getLoser()}
          </span>
        </h1>

        <div className={`spinner-container`}>
          <Spinner
            onFinish={this.finishHandler}
            ref={(child) => {
              this._child1 = child;
            }}
            timer="1000"
          />
          <Spinner
            onFinish={this.finishHandler}
            ref={(child) => {
              this._child2 = child;
            }}
            timer="1400"
          />
          <Spinner
            onFinish={this.finishHandler}
            ref={(child) => {
              this._child3 = child;
            }}
            timer="2200"
          />
          <div className="gradient-fade"></div>
        </div>
        {repeatButton}
      </div>
    );
  }
}

export default App;