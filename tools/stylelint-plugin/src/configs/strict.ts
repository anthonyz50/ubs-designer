/**
 * UBS Stylelint Plugin — Strict Configuration
 *
 * All rules enabled as errors with strict settings.
 * No exceptions or fallback-only modes.
 */
const strict = {
  plugins: ['stylelint-plugin-ubs'],
  rules: {
    'ubs/colour-palette': [true, { severity: 'error', allowCustomProperties: true }],
    'ubs/no-text-shadow': [true, { severity: 'error' }],
    'ubs/no-justify': [true, { severity: 'error' }],
    'ubs/font-family': [true, { allowFallbackOnly: false, severity: 'error' }],
    'ubs/font-weight': [true, { severity: 'error' }],
    'ubs/min-font-size': [true, { minimum: '14px', severity: 'error' }],
    'ubs/no-gradients': [true, { severity: 'error' }],
    'ubs/spacing-grid': [true, { allowZero: true, allowAuto: false, severity: 'error' }],
  },
};

export default strict;
