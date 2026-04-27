/**
 * Configuration loading for UBS Brand Validator.
 * Loads defaults, then merges with .ubsrc.json if found.
 */

import * as fs from 'fs';
import * as path from 'path';
import { ValidatorConfig } from './types';

const DEFAULT_CONFIG: ValidatorConfig = {
  rules: [],
  disabledRules: [],
  ignore: ['node_modules/**', 'dist/**', 'build/**', '.git/**'],
  customColours: [],
  strict: false,
};

/**
 * Load config from a specific path or search for .ubsrc.json in cwd.
 */
export function loadConfig(configPath?: string): ValidatorConfig {
  const config = { ...DEFAULT_CONFIG };

  let filePath = configPath;
  if (!filePath) {
    const candidate = path.resolve(process.cwd(), '.ubsrc.json');
    if (fs.existsSync(candidate)) {
      filePath = candidate;
    }
  }

  if (filePath) {
    if (!fs.existsSync(filePath)) {
      console.error(`Config file not found: ${filePath}`);
      process.exit(1);
    }

    try {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const userConfig = JSON.parse(raw) as Partial<ValidatorConfig>;

      if (userConfig.rules) config.rules = userConfig.rules;
      if (userConfig.disabledRules) config.disabledRules = userConfig.disabledRules;
      if (userConfig.ignore) config.ignore = [...config.ignore, ...userConfig.ignore];
      if (userConfig.customColours) config.customColours = userConfig.customColours;
      if (userConfig.strict !== undefined) config.strict = userConfig.strict;
    } catch (err) {
      console.error(`Failed to parse config file: ${filePath}`);
      process.exit(1);
    }
  }

  return config;
}
