/**
 * @file Reusable button component for the Cutis design system.
 *
 * Thin wrapper around Designsystemet's Button (@digdir/designsystemet-react),
 * styled through the Cutis theme in src/foundations. Keeps the original
 * Cutis props (`primary`, `size`, `label`) so existing usage keeps working.
 */

import { Button as DsButton } from '@digdir/designsystemet-react';
import './button.css';

const sizeMap = { small: 'sm', medium: 'md', large: 'lg' } as const;

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <DsButton
      type="button"
      className="cutis-button"
      variant={primary ? 'primary' : 'secondary'}
      data-size={sizeMap[size]}
      data-color="accent"
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </DsButton>
  );
};
