/**
 * @file Storybook manager UI theme.
 *
 * Maps raw design tokens (./tokens.js) into the shape expected by
 * Storybook's `create()` theming API. Consumed by `.storybook/manager.js`.
 *
 * @see https://storybook.js.org/docs/configure/user-interface/theming
 */

import { create } from 'storybook/theming/create';
import { colors, typography, brand } from './tokens-theme';

export default create({
  base: 'light', // 'light' or 'dark' — the baseline Storybook theme to extend

  // Brandings
  brandTitle: brand.title,
  brandUrl: brand.url,
  brandImage: brand.image,
  brandTarget: '_self',

  // Typography
  fontBase: typography.fontBase,
  fontCode: typography.fontCode,

  // Core UI colors
  colorPrimary: colors.pink600,  // Main brand color — focus rings, active states
  colorSecondary: colors.pink400,     // Bold pink — links, secondary highlights

  // App chrome backgrounds
  appBg: colors.warmGray,             // Outer app background — soft off-white
  appContentBg: colors.white,         // Canvas/preview area — clean white
  appPreviewBg: colors.white,         // Background behind the story preview itself
  appBorderColor: colors.gray3,       // Subtle border color throughout the UI
  appBorderRadius: 4,

  // Text colors
  textColor: colors.black,            // Primary text
  textInverseColor: colors.white,     // Text on dark/colored surfaces

  // Toolbar (logo, search bar, addon icons — this is your "header")
  // barTextColor / barSelectedColor / barHoverColor / textMutedColor intentionally
  // left unset — Storybook's defaults are designed for a light bar background
  // and read correctly against brandLight without any overrides.
  barBg: colors.pink50,        // Header background — light brand pink

  // Form elements (search input, addon panels)
  inputBg: colors.white,
  inputBorder: colors.gray3,
  inputTextColor: colors.black,
  inputBorderRadius: 4,
});