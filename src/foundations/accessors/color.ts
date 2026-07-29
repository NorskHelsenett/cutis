/**
 * Color accessor functions.
 *
 * Provides a type-safe way for components to consume semantic color tokens
 * defined in `semantic/palette.ts`, grouped by design intent.
 */

// Import everything exported from semantic/palette.ts as one object called `semantic`.
import * as semantic from '../semantic/palette';

// `typeof semantic` = the *shape* (type) of the semantic object, not its values.
// `keyof` extracts just the top-level key names from that shape.
// Result: ColorGroup = 'brand' | 'background' | 'surface' | 'text' | 'interactive' | 'status'
type ColorGroup = keyof typeof semantic;

// A generic type — T is a placeholder for a specific group name (filled in later).
// `T extends ColorGroup` restricts T to only valid group names.
// `(typeof semantic)[T]` looks up that specific group's shape, e.g. semantic['text'].
// `keyof` on the result extracts the valid token names *within that group only*.
// e.g. ColorToken<'text'> = 'primary' | 'secondary' | 'headingAccent' | 'disabled' | 'inverse' | 'headingInverse'
type ColorToken<T extends ColorGroup> = keyof (typeof semantic)[T];

// The accessor function itself.
// <T extends ColorGroup> makes this function generic too — T is automatically
// inferred from whatever `group` value gets passed in when the function is called.
export const getColor = <T extends ColorGroup>(
    group: T,              // must be one of the valid group names (ColorGroup)
    token: ColorToken<T>    // must be a valid token name *within that specific group*
): string => {
    // Look up the actual color value at runtime using the two arguments.
    // e.g. semantic['text']['primary'] -> '#000000'
    // `as string` tells TypeScript to trust that this value is a string,
    // since TS can't always infer that automatically from a dynamic lookup like this.
    return semantic[group][token] as string;
};