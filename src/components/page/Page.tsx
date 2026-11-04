/**
 * @file NHN page component.
 *
 * Example page composition: NHN header plus a content section built from
 * Designsystemet's typography, list, alert and link components, with a
 * small form using Cutis' Input and Button.
 */
import React from 'react';
import {
  Alert,
  Heading,
  Link,
  List,
  Paragraph,
} from '@digdir/designsystemet-react';

import { Button } from '../button/Button';
import { Header } from '../header/Header';
import { Input } from '../input/Input';
import './page.css';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article className="cutis-page">
      <Header
        title="Cutis"
        user={user}
        onLogin={() => setUser({ name: 'Kari Nordmann' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Kari Nordmann' })}
      />

      <main className="cutis-page__content">
        <Heading level={1} data-size="xl">
          Cutis – NHNs komponentbibliotek
        </Heading>
        <Paragraph data-size="lg">
          Cutis samler React-komponenter som følger NHNs visuelle profil, bygget
          på{' '}
          <Link href="https://designsystemet.no" target="_blank" rel="noopener noreferrer">
            Designsystemet
          </Link>
          .
        </Paragraph>

        <section className="cutis-page__section">
          <Heading level={2} data-size="md">
            Slik er Cutis bygget opp
          </Heading>
          <List.Unordered>
            <List.Item>Fargene, fonten og formene kommer fra NHNs designtokens.</List.Item>
            <List.Item>
              Komponentene bygger på Designsystemet, som gir universell utforming,
              mørk modus og tastaturnavigasjon.
            </List.Item>
            <List.Item>Alle komponentene dokumenteres og testes i Storybook.</List.Item>
          </List.Unordered>
        </section>

        <Alert data-color="info">
          <Heading level={2} data-size="xs">
            Tips
          </Heading>
          <Paragraph>
            Juster bredden på visningen med Viewport-verktøyet i Storybook for å se
            hvordan siden oppfører seg på mobil.
          </Paragraph>
        </Alert>

        <section className="cutis-page__section">
          <Heading level={2} data-size="md">
            Ta kontakt
          </Heading>
          <form className="cutis-page__form" onSubmit={(e) => e.preventDefault()}>
            <Input label="Navn" />
            <Input
              label="E-post"
              type="email"
              description="Vi bruker e-posten kun til å svare deg."
            />
            <div>
              <Button primary label="Send" />
            </div>
          </form>
        </section>
      </main>
    </article>
  );
};
