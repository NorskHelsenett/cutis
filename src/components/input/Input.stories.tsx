/**
 * @file Storybook stories for the Input component.
 *
 * Shows the default, described, error, required and disabled states.
 */
import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '20rem' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    label: 'Navn',
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MedBeskrivelse: Story = {
  name: 'Med beskrivelse',
  args: {
    label: 'E-post',
    type: 'email',
    description: 'Vi bruker e-posten kun til å svare deg.',
    placeholder: 'navn@nhn.no',
  },
};

export const MedFeil: Story = {
  name: 'Med feil',
  args: {
    label: 'Fødselsnummer',
    defaultValue: '123',
    error: 'Fødselsnummeret må ha 11 siffer.',
  },
};

export const Paakrevd: Story = {
  name: 'Påkrevd',
  args: {
    label: 'Telefonnummer',
    type: 'tel',
    required: true,
  },
};

export const Deaktivert: Story = {
  args: {
    label: 'Organisasjonsnummer',
    defaultValue: '994 598 759',
    disabled: true,
  },
};

export const Small: Story = {
  args: { size: 'small' },
};

export const Large: Story = {
  args: { size: 'large' },
};
