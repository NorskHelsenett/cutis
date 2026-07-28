/**
 * NHN semantic typography tokens.
 *
 * Maps design intent (e.g. heading, body, caption) to primitive typography
 * values. Components should reference these semantic tokens rather than
 * primitive tokens directly, so meaning stays consistent even if the
 * underlying primitive values change.
 *
 * @see ../primitive/typography.ts
 */

import * as primitive from '../primitive/typography';

export const fontSizeDesktop = {
    heading_xl: primitive.fontSizeDesktop.heading_xl,
    heading_l:  primitive.fontSizeDesktop.heading_l,
    heading_m:  primitive.fontSizeDesktop.heading_m,
    heading_s:  primitive.fontSizeDesktop.heading_s,
    body_l:     primitive.fontSizeDesktop.body_l,
    body_m:     primitive.fontSizeDesktop.body_m,
    body_s:     primitive.fontSizeDesktop.body_s,
    caption:    primitive.fontSizeDesktop.caption,
    label:      primitive.fontSizeDesktop.label,
};

export const fontSizeMobile = {
    heading_xl: primitive.fontSizeMobile.heading_xl,
    heading_l:  primitive.fontSizeMobile.heading_l,
    heading_m:  primitive.fontSizeMobile.heading_m,
    heading_s:  primitive.fontSizeMobile.heading_s,
    body_l:     primitive.fontSizeMobile.body_l,
    body_m:     primitive.fontSizeMobile.body_m,
    body_s:     primitive.fontSizeMobile.body_s,
    caption:    primitive.fontSizeMobile.caption,
    label:      primitive.fontSizeMobile.label,
};

export const lineHeightDesktop = {
    heading_xl: primitive.lineHeightDesktop.heading_xl,
    heading_l:  primitive.lineHeightDesktop.heading_l,
    heading_m:  primitive.lineHeightDesktop.heading_m,
    heading_s:  primitive.lineHeightDesktop.heading_s,
    body_l:     primitive.lineHeightDesktop.body_l,
    body_m:     primitive.lineHeightDesktop.body_m,
    body_s:     primitive.lineHeightDesktop.body_s,
    caption:    primitive.lineHeightDesktop.caption,
    label:      primitive.lineHeightDesktop.label,
};

export const lineHeightMobile = {
    heading_xl: primitive.lineHeightMobile.heading_xl,
    heading_l:  primitive.lineHeightMobile.heading_l,
    heading_m:  primitive.lineHeightMobile.heading_m,
    heading_s:  primitive.lineHeightMobile.heading_s,
    body_l:     primitive.lineHeightMobile.body_l,
    body_m:     primitive.lineHeightMobile.body_m,
    body_s:     primitive.lineHeightMobile.body_s,
    caption:    primitive.lineHeightMobile.caption,
    label:      primitive.lineHeightMobile.label,
};