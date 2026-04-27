"use strict";
/**
 * UBS ESLint Plugin — Strict flat config.
 * All rules enabled as errors.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strict = {
    rules: {
        'ubs/no-red-numbers': 'error',
        'ubs/colour-palette': 'error',
        'ubs/trading-region': 'error',
        'ubs/require-alt-text': 'error',
        'ubs/no-pie-chart': 'error',
        'ubs/chart-sequence': 'error',
        'ubs/no-3d-charts': 'error',
        'ubs/impulse-rules': 'error',
    },
};
exports.default = strict;
