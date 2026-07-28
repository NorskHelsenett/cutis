/**
 * NHN semantic typography tokens for mobile.
 *
 * Maps design intent to primitive typography values.
 * Components should reference these semantic tokens rather than
 * primitive tokens directly, so meaning stays consistent even if the
 * underlying primitive values change.
 *
 * @see ../primitive/typography/mobile.ts
 * @see ../primitive/typography/defaults.ts
 */

import * as primitive from '../../primitive/typography/mobile';

export const heading = {
    heading_xl: primitive.fontSize.heading_xl,
    heading_l:  primitive.fontSize.heading_l,
    heading_m:  primitive.fontSize.heading_m,
    heading_s:  primitive.fontSize.heading_s,
};

export const body = {
    body_l:     primitive.fontSize.body_l,
    body_m:     primitive.fontSize.body_m,
    body_s:     primitive.fontSize.body_s,
    caption:    primitive.fontSize.caption,
};

export const label = primitive.fontSize.label;

// export const lineHeightDesktop = {
//     heading_xl: primitive.lineHeightDesktop.heading_xl,
//     heading_l:  primitive.lineHeightDesktop.heading_l,
//     heading_m:  primitive.lineHeightDesktop.heading_m,
//     heading_s:  primitive.lineHeightDesktop.heading_s,
//     body_l:     primitive.lineHeightDesktop.body_l,
//     body_m:     primitive.lineHeightDesktop.body_m,
//     body_s:     primitive.lineHeightDesktop.body_s,
//     caption:    primitive.lineHeightDesktop.caption,
//     label:      primitive.lineHeightDesktop.label,
// };

// export const lineHeightMobile = {
//     heading_xl: primitive.lineHeightMobile.heading_xl,
//     heading_l:  primitive.lineHeightMobile.heading_l,
//     heading_m:  primitive.lineHeightMobile.heading_m,
//     heading_s:  primitive.lineHeightMobile.heading_s,
//     body_l:     primitive.lineHeightMobile.body_l,
//     body_m:     primitive.lineHeightMobile.body_m,
//     body_s:     primitive.lineHeightMobile.body_s,
//     caption:    primitive.lineHeightMobile.caption,
//     label:      primitive.lineHeightMobile.label,
// };

// export const body = {
//     fontFamily: primitive.fontFamily.default,
//     // fontSize, fontWeight, lineHeight, etc.
// };