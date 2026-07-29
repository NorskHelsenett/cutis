/**
 * NHN semantic color palette
 * 
 * Maps design intent (e.g. text, background, border) to primitive
 * color values. Components should reference these semantic tokens rather
 * than primitive tokens directly, so meaning stays consistent even if the
 * underlying primitive values change.
 * 
 * @see ../primitive/palette.ts
 */

import * as primitive from '../primitive/palette';


/**
 * NHN primary brand colors
 */
export const brand = {
    primary:   primitive.primary.darkGreen,
    secondary: primitive.primary.lightGreen,
};

/**
 * Background colors
 */
export const background = {
    primary:   primitive.gray.white,
    secondary: primitive.gray.warmGray,
    dark:      primitive.green1.green1_1,
};

/**
 * Surface colors
 */
export const surface = {
    default: primitive.gray.warmGray,
    raised:  primitive.primary.lightGreen,
};

/**
 * Text colors
 */
export const text = {
    primary:        primitive.gray.black,
    secondary:      primitive.green2.green2_1,
    headingAccent:  primitive.green1.green1_1,
    disabled:       primitive.gray.gray1,
    inverse:        primitive.green1.green1_4,
    headingInverse: primitive.gray.white,
};

/**
 * Interactive colors
 */
export const interactive = {
    raisedHover:   primitive.green3.green3_2,
    raisedPressed: primitive.green3.green3_1,
    disabled:      primitive.gray.gray3,
};

/**
 * User interaction colors
 */
export const UI = {
    warning: primitive.extended.yellow,
    success: primitive.extended.green,
    error:   primitive.extended.red,
    info:    primitive.extended.blue,
};