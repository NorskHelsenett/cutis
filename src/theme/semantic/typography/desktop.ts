/**
 * NHN semantic typography tokens for desktop.
 *
 * Maps design intent to primitive typography values.
 * Components should reference these semantic tokens rather than
 * primitive tokens directly, so meaning stays consistent even if the
 * underlying primitive values change.
 *
 * @see ../primitive/typography/desktop.ts
 * @see ../primitive/typography/defaults.ts
 */

import * as primitive from '../../primitive/typography/desktop';
import * as defaults  from '../../primitive/typography/defaults'


/* Typography styles */

export const heading_xl = {
    fontSize:   primitive.fontSize.heading_xl,
    lineHeight: primitive.lineHeight.heading_xl,
    fontFamily: defaults.fontFamily,
    fontWeight: defaults.fontWeight,
};

export const heading_l = {
    fontSize:   primitive.fontSize.heading_l,
    lineHeight: primitive.lineHeight.heading_l,
    fontFamily: defaults.fontFamily,
    fontWeight: defaults.fontWeight,
};

export const heading_m = {
    fontSize:   primitive.fontSize.heading_m,
    lineHeight: primitive.lineHeight.heading_m,
    fontFamily: defaults.fontFamily,
    fontWeight: defaults.fontWeight,
};

export const heading_s = {
    fontSize:   primitive.fontSize.heading_s,
    lineHeight: primitive.lineHeight.heading_s,
    fontFamily: defaults.fontFamily,
    fontWeight: defaults.fontWeight,
};


/* Typography groups */

export const heading = {
    xl:         heading_xl,
    l:          heading_l,
    m:          heading_m,
    s:          heading_s
}