 /**
  * PUBLIC_INTERFACE
  * calculateWinner
  * Determine the winner for a given board configuration.
  * @param {Array<('X'|'O'|null)>} squares - The 9-element board array.
  * @returns {'X'|'O'|null} The winner symbol or null if none.
  */
export function calculateWinner(squares) {
  const lines = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Cols
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diags
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/**
 * PUBLIC_INTERFACE
 * isDraw
 * Determine if the game is a draw (no empty squares and no winner).
 * @param {Array<('X'|'O'|null)>} squares
 * @param {'X'|'O'|null} winner
 * @returns {boolean}
 */
export function isDraw(squares, winner) {
  if (winner) return false;
  return squares.every((sq) => sq !== null);
}
