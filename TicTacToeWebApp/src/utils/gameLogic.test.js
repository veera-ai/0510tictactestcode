import { calculateWinner, isDraw } from './gameLogic';

describe('gameLogic', () => {
  test('no winner on empty board', () => {
    const board = Array(9).fill(null);
    expect(calculateWinner(board)).toBeNull();
    expect(isDraw(board, null)).toBe(false);
  });

  test('detects row winner', () => {
    const board = ['X', 'X', 'X', null, null, null, null, null, null];
    expect(calculateWinner(board)).toBe('X');
    expect(isDraw(board, 'X')).toBe(false);
  });

  test('detects column winner', () => {
    const board = ['O', null, null, 'O', null, null, 'O', null, null];
    expect(calculateWinner(board)).toBe('O');
  });

  test('detects diagonal winner', () => {
    const board = ['X', null, null, null, 'X', null, null, null, 'X'];
    expect(calculateWinner(board)).toBe('X');
  });

  test('detects draw', () => {
    // Full board with no winners
    const board = ['X','O','X','X','O','O','O','X','X'];
    expect(calculateWinner(board)).toBeNull();
    expect(isDraw(board, null)).toBe(true);
  });

  test('non-draw when spaces remain', () => {
    const board = ['X', 'O', 'X', 'O', null, 'X', 'O', 'X', 'O'];
    expect(isDraw(board, null)).toBe(false);
  });
});
