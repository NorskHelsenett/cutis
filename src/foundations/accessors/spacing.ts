/**
 * Spacing accessor functions.
 *
 * Provides a way for components to consume spacing tokens defined in
 * `semantic/spacing.ts` as usable CSS values, in either px or rem.
 */

import { spacing } from '../semantic/spacing';

type SpacingToken = keyof typeof spacing;
type SpacingUnit = 'px' | 'rem';

export const getSpacing = (token: SpacingToken, unit: SpacingUnit = 'rem'): string => {
    const value = spacing[token][unit];
    return `${value}${unit}`;
};