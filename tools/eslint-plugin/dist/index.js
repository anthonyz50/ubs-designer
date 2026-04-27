"use strict";
/**
 * eslint-plugin-ubs
 *
 * ESLint plugin enforcing UBS brand rules in React/JSX/TSX code.
 * Plugin namespace: ubs
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const no_red_numbers_1 = __importDefault(require("./rules/no-red-numbers"));
const colour_palette_1 = __importDefault(require("./rules/colour-palette"));
const trading_region_1 = __importDefault(require("./rules/trading-region"));
const require_alt_text_1 = __importDefault(require("./rules/require-alt-text"));
const no_pie_chart_1 = __importDefault(require("./rules/no-pie-chart"));
const chart_sequence_1 = __importDefault(require("./rules/chart-sequence"));
const no_3d_charts_1 = __importDefault(require("./rules/no-3d-charts"));
const impulse_rules_1 = __importDefault(require("./rules/impulse-rules"));
const recommended_1 = __importDefault(require("./configs/recommended"));
const strict_1 = __importDefault(require("./configs/strict"));
const rules = {
    'no-red-numbers': no_red_numbers_1.default,
    'colour-palette': colour_palette_1.default,
    'trading-region': trading_region_1.default,
    'require-alt-text': require_alt_text_1.default,
    'no-pie-chart': no_pie_chart_1.default,
    'chart-sequence': chart_sequence_1.default,
    'no-3d-charts': no_3d_charts_1.default,
    'impulse-rules': impulse_rules_1.default,
};
const plugin = {
    rules,
    configs: {
        recommended: recommended_1.default,
        strict: strict_1.default,
    },
};
module.exports = plugin;
