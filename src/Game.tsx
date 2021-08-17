import React, { FC } from 'react';
import './Game.css';
import { Board } from './components/Board';

const Game: FC = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

export default Game;
