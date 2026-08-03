/**
 * @file Storybook manager entry point.
 *
 * Registers the custom manager UI theme with Storybook's addon config.
 * Kept intentionally thin — all actual theme values live in
 * ./theme/manager-theme.js and ./theme/tokens-theme.js.
 *
 * @see ./theme/manager-theme.js
 * @see ./theme/tokens-theme.js
 * @see https://storybook.js.org/docs/configure/user-interface/theming
 */

import { addons } from 'storybook/manager-api';
import managerTheme from './theme/manager-theme';

addons.setConfig({
  theme: managerTheme,
});