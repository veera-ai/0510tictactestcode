import React, { forwardRef } from 'react';

/**
 * PUBLIC_INTERFACE
 * Square
 * Represents an individual cell on the board.
 * Renders a real button for native accessibility.
 */
const Square = ({
  value,
  onClick,
  index,
  onKeyDown,
  disabled,
  refCallback,
}) => {
  const label = value ? `Square ${index + 1}, ${value}` : `Square ${index + 1}, empty`;

  return (
    <button
      type="button"
      className={`square ${value ? 'square-filled' : ''}`}
      aria-label={label}
      aria-pressed={value ? 'true' : undefined}
      role="gridcell"
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={disabled}
      ref={refCallback}
    >
      {value || ''}
    </button>
  );
};

export default Square;
