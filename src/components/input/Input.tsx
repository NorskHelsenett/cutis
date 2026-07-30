import React from 'react';

import './input.css';

export interface InputProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor: '#FFFF00' | 'red' | '#ABCDEF';

  fontColor: 'black' | 'white';
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Input = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  fontColor,
  label,
  ...props
}: InputProps) => {
  const mode = primary ? 'storybook-input--primary' : 'storybook-input--secondary';
  return (
    <input 
      placeholder='Cutis :D'
      className={['storybook-input', `storybook-input--${backgroundColor}`, `storybook-input--${fontColor}`, mode].join(' ')}
      style={{ backgroundColor, color: `${fontColor} !important` }}
      {...props}
    >
    </input>

  );
};
