/**
 * @file Design tokens for the Storybook manager theme.
 * 
 * These are raw, named values only — no Storybook-specific concepts live here. 
 * This keeps the palette reusable outside of Storybook theming 
 * (e.g. in the component library itself) if needed later.
 */

export const colors = {
  // Brand colors (primary palette)
  brandPrimary: '#B1531A',    // Burnt orange — main brand color
  brandSecondary: '#F4973F',  // Warm orange — accent/highlight
  brandTertiary: '#FFBDC5',   // Soft pink — accent surfaces
  brandLight: '#FFF7F8',      // Near-white pink — subtle backgrounds

  // Orange tones
  orange900: '#4D240B',  // Deep brown-orange — darkest, for high-contrast text/icons
  orange600: '#B1531A',  // Base orange — same as brandPrimary
  orange400: '#F4973F',  // Mid orange — same as brandSecondary
  orange200: '#FDC087',  // Light orange — hover/highlight states
  orange50: '#FFF1E4',   // Faint orange — tinted backgrounds

  // Pink tones
  pink900: '#41040E',  // Deep maroon-pink — darkest, for high-contrast text/icons
  pink600: '#BD4B64',  // Base pink — bold surfaces (e.g. header bar)
  pink400: '#FF93AA',  // Mid pink — accents, active states
  pink200: '#FFD4DE',  // Light pink — hover/highlight states
  pink50: '#FFF3F5',   // Faint pink — tinted backgrounds

  // Grayscale
  black: '#000000',
  gray1: '#808285',      // Mid gray — secondary text/icons
  gray3: '#DCDDDE',      // Light gray — borders
  warmGray: '#F7F5F4',   // Off-white — app background
  white: '#FFFFFF',
};

export const typography = {
  fontBase: '"Helvetica Now", Arial, sans-serif',
  fontCode: 'monospace',
};

export const brand = {
  title: 'Cutis',                                      // Text shown next to/instead of logo (e.g. "My Design System")
  url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',  // Where clicking the logo/title navigates to
  image: '/public/Cutis_logo.svg'
}