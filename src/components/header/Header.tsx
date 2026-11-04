/**
 * @file NHN header component.
 *
 * Dark green application header with the NHN symbol, a product title and
 * login/logout actions. Colors, font and button styles come from the Cutis
 * theme (Designsystemet + NHN tokens in src/foundations).
 */

import { Button } from '../button/Button';
import './header.css';

type User = {
  name: string;
};

export interface HeaderProps {
  /** Product or service name shown next to the NHN symbol */
  title?: string;
  /** Logged-in user, if any */
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

/** NHN-symbolet (hvit), fra public/NHN_Symbol_Hvit.svg */
const NhnSymbol = () => (
  <svg
    className="cutis-header__logo"
    viewBox="0 0 283.77 166.26"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M271.6,12.17a41.58,41.58,0,0,0-58.79,0L154.65,70.34A41.55,41.55,0,0,0,95.3,12.17L12.17,95.3A41.57,41.57,0,0,0,71,154.09l58.16-58.17a41.55,41.55,0,0,0,59.35,58.17L271.6,71A41.58,41.58,0,0,0,271.6,12.17Z"
    />
  </svg>
);

export const Header = ({
  title = 'Norsk helsenett',
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  // Mørkt fargeskjema gir lys tekst, kanter og fokusring på den grønne bakgrunnen
  <header className="cutis-header" data-color-scheme="dark">
    <a className="cutis-header__brand" href="/">
      <NhnSymbol />
      <span className="cutis-header__title">{title}</span>
    </a>

    <div className="cutis-header__actions">
      {user ? (
        <>
          <span className="cutis-header__welcome">
            Velkommen, <b>{user.name}</b>!
          </span>
          <Button size="small" color="neutral" onClick={onLogout} label="Logg ut" />
        </>
      ) : (
        <>
          <Button size="small" color="neutral" onClick={onLogin} label="Logg inn" />
          <Button
            primary
            size="small"
            color="brand1"
            onClick={onCreateAccount}
            label="Opprett konto"
          />
        </>
      )}
    </div>
  </header>
);
