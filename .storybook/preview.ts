/**
 * @file Global Storybook preview configuration.
 *
 * Sets the shared parameters and accessibility defaults for all stories.
 */

import type { Preview } from '@storybook/react-vite'
import managerTheme from './theme/manager-theme';

// NHN-tokens + Designsystemet (komponent-CSS og Cutis-tema)
import '../src/foundations/index.css';

const preview: Preview = {
  parameters: {
    docs: { theme: managerTheme },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;