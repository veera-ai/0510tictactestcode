import React, { useCallback, useEffect, useRef } from 'react';
import Square from './Square';

/**
 * PUBLIC_INTERFACE
 * Board
 * Renders a 3x3 grid of squares with ARIA grid semantics.
 * Supports keyboard navigation between squares using arrow keys.
 */
function Board({ squares, onPlay, gameOver }) {
  const gridRef = useRef(null);
  const buttonsRef = useRef([]);

  // Initialize button refs array length
  useEffect(() => {
    buttonsRef.current = buttonsRef.current.slice(0, 9);
  }, []);

  const moveFocus = useCallback((fromIndex, deltaRow, deltaCol) => {
    const row = Math.floor(fromIndex / 3);
    const col = fromIndex % 3;
    const newRow = Math.max(0, Math.min(2, row + deltaRow));
    const newCol = Math.max(0, Math.min(2, col + deltaCol));
    const newIndex = newRow * 3 + newCol;
    buttonsRef.current[newIndex]?.focus();
  }, []);

  const handleKeyDown = useCallback(
    (e, index) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          moveFocus(index, -1, 0);
          break;
        case 'ArrowDown':
          e.preventDefault();
          moveFocus(index, 1, 0);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          moveFocus(index, 0, -1);
          break;
        case 'ArrowRight':
          e.preventDefault();
          moveFocus(index, 0, 1);
          break;
        default:
          break;
      }
    },
    [moveFocus]
  );

  return (
    <div
      className="board"
      ref={gridRef}
      role="grid"
      aria-label="Tic Tac Toe board"
      aria-disabled={gameOver ? 'true' : 'false'}
    >
      {[0, 1, 2].map((row) => (
        <div className="board-row" role="row" key={`row-${row}`}>
          {[0, 1, 2].map((col) => {
            const index = row * 3 + col;
            const value = squares[index];
            return (
              <Square
                key={`square-${index}`}
                refCallback={(el) => (buttonsRef.current[index] = el)}
                index={index}
                value={value}
                onClick={() => onPlay(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                disabled={gameOver || value !== null}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;
