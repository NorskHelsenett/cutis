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


/**
 * Used once per page as the main heading
 */
export const heading_xl = {
    fontSize:   primitive.fontSize.heading_xl,
    lineHeight: primitive.lineHeight.heading_xl,
    fontFamily: defaults.fontFamily.default,
    fontWeight: defaults.fontWeight.bold,
};

/**
 * Used for section headings
 */
export const heading_l = {
    fontSize:   primitive.fontSize.heading_l,
    lineHeight: primitive.lineHeight.heading_l,
    fontFamily: defaults.fontFamily.default,
    fontWeight: defaults.fontWeight.bold,
};

/**
 * Used for subsections and short titles
 */
export const heading_m = {
    fontSize:   primitive.fontSize.heading_m,
    lineHeight: primitive.lineHeight.heading_m,
    fontFamily: defaults.fontFamily.default,
    fontWeight: defaults.fontWeight.bold,
};

/**
 * Used for smaller sections or panel headings
 */
export const heading_s = {
    fontSize:   primitive.fontSize.heading_s,
    lineHeight: primitive.lineHeight.heading_s,
    fontFamily: defaults.fontFamily.default,
    fontWeight: defaults.fontWeight.bold,
};

/**
 * Introductory text or longer descriptions
 */
export const body_l = {
    fontSize:   primitive.fontSize.body_l,
    lineHeight: primitive.lineHeight.body_l,
    fontFamily: defaults.fontFamily.default,
    fontWeight: defaults.fontWeight.regular,
};

/**
 * Default body text in the interface
 */
export const body_m = {
    fontSize:   primitive.fontSize.body_m,
    lineHeight: primitive.lineHeight.body_m,
    fontFamily: defaults.fontFamily.default,
    fontWeight: defaults.fontWeight.regular,
};

/**
 * Help texts and secondary information
 */
export const body_s = {
    fontSize:   primitive.fontSize.body_s,
    lineHeight: primitive.lineHeight.body_s,
    fontFamily: defaults.fontFamily.default,
    fontWeight: defaults.fontWeight.regular,
};

/**
 * Metadata, captions, and other low-priority information
 */
export const caption = {
    fontSize:   primitive.fontSize.caption,
    lineHeight: primitive.lineHeight.caption,
    fontFamily: defaults.fontFamily.default,
    fontWeight: defaults.fontWeight.regular,
};

/**
 * Form fields, buttons, and labels
 */
export const label = {
    fontSize:   primitive.fontSize.label,
    lineHeight: primitive.lineHeight.label,
    fontFamily: defaults.fontFamily.default,
    fontWeight: defaults.fontWeight.medium,
};


/* Typography groups */


/**
 * Heading styles
 */
export const heading = {
    xl: heading_xl,
    l:  heading_l,
    m:  heading_m,
    s:  heading_s
}

/**
 * Body styles
 */
export const body = {
    l:       body_l,
    m:       body_m,
    s:       body_s,
    caption: caption
}