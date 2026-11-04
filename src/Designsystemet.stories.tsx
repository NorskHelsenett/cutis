/**
 * @file Oversikt over Designsystemet-komponenter med Cutis-temaet.
 *
 * Viser at komponentene fra @digdir/designsystemet-react får NHN-farger,
 * -font og -radius via src/foundations.
 */
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Alert,
  Button,
  Card,
  Checkbox,
  Heading,
  Paragraph,
  Tag,
  Textfield,
} from '@digdir/designsystemet-react';

const Oversikt = () => (
  <div style={{ display: 'grid', gap: 'var(--ds-size-6)', maxWidth: '40rem' }}>
    <Heading level={1} data-size="lg">
      Cutis × Designsystemet
    </Heading>
    <Paragraph>
      Komponentene under kommer fra Designsystemet og bruker Cutis-temaet.
    </Paragraph>

    <div style={{ display: 'flex', gap: 'var(--ds-size-3)', flexWrap: 'wrap' }}>
      <Button>Primær</Button>
      <Button variant="secondary">Sekundær</Button>
      <Button variant="tertiary">Tertiær</Button>
      <Button data-color="brand1">Brand 1</Button>
      <Button data-color="brand2">Brand 2</Button>
    </div>

    <div style={{ display: 'flex', gap: 'var(--ds-size-2)', flexWrap: 'wrap' }}>
      <Tag data-color="accent">accent</Tag>
      <Tag data-color="brand1">brand1</Tag>
      <Tag data-color="brand2">brand2</Tag>
      <Tag data-color="neutral">neutral</Tag>
    </div>

    <Textfield label="Navn" description="Fornavn og etternavn" />
    <Checkbox label="Jeg godtar vilkårene" value="ok" />

    <Alert data-color="info">Info-melding</Alert>
    <Alert data-color="success">Suksess-melding</Alert>
    <Alert data-color="warning">Advarsel</Alert>
    <Alert data-color="danger">Feilmelding</Alert>

    <Card data-color="brand1">
      <Heading level={2} data-size="sm">Kort</Heading>
      <Paragraph>Et kort med brand1-farge.</Paragraph>
    </Card>
  </div>
);

const meta = {
  title: 'Designsystemet/Oversikt',
  component: Oversikt,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Oversikt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lys: Story = {};

export const Mork: Story = {
  name: 'Mørk',
  decorators: [
    (Story) => (
      <div
        data-color-scheme="dark"
        style={{ background: 'var(--ds-color-neutral-background-default)', padding: 'var(--ds-size-6)' }}
      >
        <Story />
      </div>
    ),
  ],
};
