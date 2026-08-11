import './input.css';

export interface InputProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor: string;
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
  label,
  ...props
}: InputProps) => {
  const mode = primary ? 'storybook-input--primary' : 'storybook-input--secondary';
  return (
    <input 
      placeholder='Cutis'
      className={['storybook-input', `storybook-input--${backgroundColor}`, mode].join(' ')}
      {...props}
    >
    </input>

  );
};
