import React, { useMemo, useRef, useState, useEffect } from 'react';
import Board from './Board';
import { calculateWinner, isDraw } from '../utils/gameLogic';
import '../styles.css';

/**
 * PUBLIC_INTERFACE
 * Game
 * Owns game state, computes status (turn, winner, draw), and provides reset.
 * Renders an accessible status region and the Board component.
 */
function Game() {
  // Board is a 9-element array of 'X' | 'O' | null
  const [squares, setSquares] = useState(Array(9).fill(null));
  // X starts
  const [xIsNext, setXIsNext] = useState(true);

  const winner = useMemo(() => calculateWinner(squares), [squares]);
  const draw = useMemo(() => isDraw(squares, winner), [squares, winner]);

  const nextPlayer = xIsNext ? 'X' : 'O';

  const statusMessage = useMemo(() => {
    if (winner) return `Winner: ${winner}`;
    if (draw) return 'Draw: Nobody wins';
    return `Next player: ${nextPlayer}`;
  }, [winner, draw, nextPlayer]);

  // For accessibility, announce updates politely
  const statusRef = useRef(null);
  useEffect(() => {
    // Optionally could focus status on terminal states
    if (winner || draw) {
      statusRef.current?.focus?.();
    }
  }, [winner, draw]);

  const handlePlay = (index) => {
    if (winner || draw) return; // Game over
    if (squares[index] !== null) return; // Occupied

    const nextSquares = squares.slice();
    nextSquares[index] = nextPlayer;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  // PUBLIC_INTERFACE
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <section className="game-container">
      <div
        className="status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        tabIndex={-1}
        ref={statusRef}
      >
        {statusMessage}
      </div>

      <Board
        squares={squares}
        onPlay={handlePlay}
        gameOver={Boolean(winner || draw)}
      />

      <div className="controls">
        <button
          type="button"
          onClick={resetGame}
          className="btn-reset"
          aria-label="Reset Game"
        >
          Reset Game
        </button>
      </div>
    </section>
  );
}

export default Game;
