/**
 * Public entry point for the theme module.
 *
 * Re-export design tokens (palette, spacers, grid) and accessor
 * functions so consumers can import everything from a single path
 * (e.g. `theme`) instead of reaching into individual files.
 */

export * as colors from "./semantic/palette";
export * as spacing from "./semantic/spacing";
export * as border from "./semantic/border";
export * as typographyDesktop from "./semantic/typography/desktop";
export * as typographyMobile from "./semantic/typography/mobile";