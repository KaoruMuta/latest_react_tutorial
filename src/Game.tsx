import React, { FC, useState } from 'react';
import { Board } from './components/Board';
import { calculateWinner } from './helpers/CalculateWinnerHelper';
import './Game.css';

type History = {
  squares: (string | null)[];
};

const Game: FC = () => {
  const [history, setHistory] = useState<History[]>([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const status = winner
    ? 'Winner:' + winner
    : 'Next player:' + (xIsNext ? 'X' : 'O');

  const handleClick = (i: number) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(
      newHistory.concat([
        {
          squares: squares,
        },
      ])
    );
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i: number) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
