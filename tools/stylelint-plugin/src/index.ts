/**
 * stylelint-plugin-ubs
 *
 * Stylelint plugin for UBS brand CSS rule enforcement.
 * Enforces colour palette, typography, spacing, and visual rules
 * aligned with UBS brand guidelines.
 */

import colourPalette from './rules/colour-palette';
import noTextShadow from './rules/no-text-shadow';
import noJustify from './rules/no-justify';
import fontFamily from './rules/font-family';
import fontWeight from './rules/font-weight';
import minFontSize from './rules/min-font-size';
import noGradients from './rules/no-gradients';
import spacingGrid from './rules/spacing-grid';
import recommended from './configs/recommended';
import strict from './configs/strict';

// Export all rule plugins as an array (Stylelint plugin convention)
// Stylelint 16+ uses dynamic import; for CJS modules the default export
// needs to be the array directly on module.exports for compatibility.
const plugins = [
  colourPalette,
  noTextShadow,
  noJustify,
  fontFamily,
  fontWeight,
  minFontSize,
  noGradients,
  spacingGrid,
];

// Export configs
export const configs = {
  recommended,
  strict,
};

// Named exports for individual rules
export {
  colourPalette,
  noTextShadow,
  noJustify,
  fontFamily,
  fontWeight,
  minFontSize,
  noGradients,
  spacingGrid,
};

// Default export: array of plugins
export default plugins;

// For CommonJS compatibility — assign plugins array to module.exports
// while preserving named exports. This ensures Stylelint 16+ (ESM)
// can load the plugin correctly via dynamic import.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _module = module as any;
Object.assign(plugins, {
  configs,
  colourPalette,
  noTextShadow,
  noJustify,
  fontFamily,
  fontWeight,
  minFontSize,
  noGradients,
  spacingGrid,
});
_module.exports = plugins;
