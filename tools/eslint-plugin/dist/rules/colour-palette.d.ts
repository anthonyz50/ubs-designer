/**
 * ubs/colour-palette
 *
 * Validates that hex colours in JSX style props and inline styles
 * are from the approved UBS colour palette. Suggests the nearest
 * palette colour for off-palette values.
 */
import { Rule } from 'eslint';
declare const rule: Rule.RuleModule;
export default rule;
