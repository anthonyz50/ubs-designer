/**
 * eslint-plugin-ubs
 *
 * ESLint plugin enforcing UBS brand rules in React/JSX/TSX code.
 * Plugin namespace: ubs
 */

import type { Rule, ESLint } from 'eslint';
import noRedNumbers from './rules/no-red-numbers';
import colourPalette from './rules/colour-palette';
import tradingRegion from './rules/trading-region';
import requireAltText from './rules/require-alt-text';
import noPieChart from './rules/no-pie-chart';
import chartSequence from './rules/chart-sequence';
import no3dCharts from './rules/no-3d-charts';
import impulseRules from './rules/impulse-rules';
import recommendedConfig from './configs/recommended';
import strictConfig from './configs/strict';

const rules: Record<string, Rule.RuleModule> = {
  'no-red-numbers': noRedNumbers,
  'colour-palette': colourPalette,
  'trading-region': tradingRegion,
  'require-alt-text': requireAltText,
  'no-pie-chart': noPieChart,
  'chart-sequence': chartSequence,
  'no-3d-charts': no3dCharts,
  'impulse-rules': impulseRules,
};

const plugin: ESLint.Plugin = {
  rules,
  configs: {
    recommended: recommendedConfig,
    strict: strictConfig,
  },
};

export = plugin;
