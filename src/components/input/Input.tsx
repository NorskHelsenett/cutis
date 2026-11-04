/**
 * @file Text input component for the Cutis design system.
 *
 * Thin wrapper around Designsystemet's Textfield (@digdir/designsystemet-react),
 * styled through the Cutis theme in src/foundations. Always renders a visible
 * label, and optionally a description and an error message, all correctly
 * linked to the input for screen readers.
 */

import type { ChangeEvent } from 'react';
import { Textfield } from '@digdir/designsystemet-react';
import './input.css';

const sizeMap = { small: 'sm', medium: 'md', large: 'lg' } as const;

export interface InputProps {
  /** Visible label for the field (required for accessibility) */
  label: string;
  /** Help text shown between the label and the field */
  description?: string;
  /** Error message — also marks the field as invalid */
  error?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number';
  /** How large should the field be? */
  size?: 'small' | 'medium' | 'large';
  /** Controlled value */
  value?: string;
  /** Initial value (uncontrolled) */
  defaultValue?: string;
  /** Is the field required? */
  required?: boolean;
  /** Is the field disabled? */
  disabled?: boolean;
  /** Is the field read-only? */
  readOnly?: boolean;
  /** Optional change handler */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

/** Text field with label, description and error message */
export const Input = ({
  label,
  description,
  error,
  size = 'medium',
  type = 'text',
  ...props
}: InputProps) => {
  return (
    <Textfield
      className="cutis-input"
      label={label}
      description={description}
      error={error}
      type={type}
      data-size={sizeMap[size]}
      {...props}
    />
  );
};
