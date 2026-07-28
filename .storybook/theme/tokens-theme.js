/**
 * @file Design tokens for the Storybook manager theme.
 * 
 * These are raw, named values only — no Storybook-specific concepts live here. 
 * This keeps the palette reusable outside of Storybook theming 
 * (e.g. in the component library itself) if needed later.
 */

export const colors = {
    cutisDark:         '#C77B85',
    cutis:             '#FFBBC4',
    cutisLight:        '#FFE3E7',
    cutisExtraLight:   '#FFE3E7',

    // TODO: update these brandpad colors to the color variables from the design tokens once they're implemented
    skin1:             '#3D1A13',
    skin2:             '#723E33',
    skin3:             '#B86853',
    skin4:             '#E09D7B',
    skin5:             '#FBD9A5',
    skin6:             '#F7C9BE',

    green1_1:          '#002920',
    darkGreenPrimary:  '#015945',
    lightGreenPrimary: '#7BEFB2',
    green4_2:          '#D3F5E3',

    black:             '#000000',
    gray1:             '#808285', // Mid gray — secondary text/icons
    gray2:             '#BCBEC0',
    gray3:             '#DCDDDE', // Light gray — borders
    gray4:             '#F1F2F2',
    warmGray:          '#F7F5F4', // Off-white — app background
    white:             '#FFFFFF'
};

export const typography = {
  fontBase: 'Inter, Arial, sans-serif',
  fontCode: 'monospace',
};

export const brand = {
  title: 'Components',                                      // Text shown next to/instead of logo (e.g. "My Design System")
//  url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',  // Where clicking the logo/title navigates to
//  image: '/public/CutisHang.svg'
};