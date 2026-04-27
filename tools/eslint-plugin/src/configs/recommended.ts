/**
 * UBS ESLint Plugin — Recommended flat config.
 * All rules enabled with sensible default severities.
 */

import type { Linter } from 'eslint';

const recommended: Linter.Config = {
  rules: {
    'ubs/no-red-numbers': 'error',
    'ubs/colour-palette': 'warn',
    'ubs/trading-region': 'error',
    'ubs/require-alt-text': 'error',
    'ubs/no-pie-chart': 'error',
    'ubs/chart-sequence': 'warn',
    'ubs/no-3d-charts': 'error',
    'ubs/impulse-rules': 'warn',
  },
};

export default recommended;
