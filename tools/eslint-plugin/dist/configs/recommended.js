"use strict";
/**
 * UBS ESLint Plugin — Recommended flat config.
 * All rules enabled with sensible default severities.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const recommended = {
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
exports.default = recommended;
