/**
 * UBS Stylelint Plugin — Recommended Configuration
 *
 * All rules enabled with sensible defaults.
 * Colour palette and spacing grid are warnings; structural rules are errors.
 */
const recommended = {
  plugins: ['stylelint-plugin-ubs'],
  rules: {
    'ubs/colour-palette': [true, { allowCustomProperties: true }],
    'ubs/no-text-shadow': true,
    'ubs/no-justify': true,
    'ubs/font-family': [true, { allowFallbackOnly: false }],
    'ubs/font-weight': true,
    'ubs/min-font-size': [true, { minimum: '14px' }],
    'ubs/no-gradients': true,
    'ubs/spacing-grid': [true, { allowZero: true, allowAuto: true }],
  },
};

export default recommended;
