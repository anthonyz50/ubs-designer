#!/usr/bin/env node

/**
 * UBS Brand Validator CLI
 *
 * Validates CSS, SCSS, and HTML files against UBS brand guidelines.
 * Usage: ubs-validate <files...> [options]
 */

import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';
import { loadConfig } from './core/config';
import { detectFileType, readFile } from './core/parser';
import { formatResults } from './core/reporter';
import {
  Rule,
  RuleContext,
  ValidationResult,
  OutputFormat,
  ValidatorConfig,
} from './core/types';

// Import all rules
import { colourCheck } from './rules/colour-check';
import { contrastCheck } from './rules/contrast-check';
import { typographyCheck } from './rules/typography-check';
import { redNumberCheck } from './rules/red-number-check';
import { shadowCheck } from './rules/shadow-check';
import { spacingCheck } from './rules/spacing-check';

// All available rules
const ALL_RULES: Rule[] = [
  colourCheck,
  contrastCheck,
  typographyCheck,
  redNumberCheck,
  shadowCheck,
  spacingCheck,
];

/**
 * Resolve glob patterns to file paths.
 * Simple implementation: handles basic wildcards and directory traversal.
 */
function resolveFiles(patterns: string[]): string[] {
  const files: string[] = [];

  for (const pattern of patterns) {
    if (fs.existsSync(pattern)) {
      const stat = fs.statSync(pattern);
      if (stat.isFile()) {
        files.push(path.resolve(pattern));
      } else if (stat.isDirectory()) {
        // Recursively find CSS/SCSS/HTML files
        walkDir(pattern, files);
      }
    } else {
      // Try simple glob expansion
      const dir = path.dirname(pattern);
      const base = path.basename(pattern);

      if (fs.existsSync(dir)) {
        const entries = fs.readdirSync(dir);
        const globRegex = new RegExp(
          '^' +
            base
              .replace(/\./g, '\\.')
              .replace(/\*/g, '.*')
              .replace(/\?/g, '.') +
            '$'
        );

        for (const entry of entries) {
          if (globRegex.test(entry)) {
            const fullPath = path.resolve(dir, entry);
            if (fs.statSync(fullPath).isFile()) {
              files.push(fullPath);
            }
          }
        }
      }
    }
  }

  return [...new Set(files)]; // deduplicate
}

/**
 * Recursively walk a directory and collect CSS/SCSS/HTML files.
 */
function walkDir(dir: string, files: string[]): void {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip common non-project directories
      if (['node_modules', '.git', 'dist', 'build'].includes(entry.name)) continue;
      walkDir(fullPath, files);
    } else if (entry.isFile()) {
      const fileType = detectFileType(entry.name);
      if (fileType) {
        files.push(path.resolve(fullPath));
      }
    }
  }
}

/**
 * Get the active rules based on config.
 */
function getActiveRules(config: ValidatorConfig): Rule[] {
  let rules = ALL_RULES;

  // If specific rules are listed, only use those
  if (config.rules.length > 0) {
    rules = rules.filter(r => config.rules.includes(r.name));
  }

  // Remove disabled rules
  if (config.disabledRules.length > 0) {
    rules = rules.filter(r => !config.disabledRules.includes(r.name));
  }

  return rules;
}

/**
 * Validate a single file against all active rules.
 */
function validateFile(
  filePath: string,
  rules: Rule[],
  config: ValidatorConfig,
  fix: boolean
): ValidationResult {
  const fileType = detectFileType(filePath);
  if (!fileType) {
    return { file: filePath, issues: [], errorCount: 0, warningCount: 0 };
  }

  const content = readFile(filePath);
  const context: RuleContext = {
    file: filePath,
    content,
    fileType,
    fix,
  };

  const result: ValidationResult = {
    file: filePath,
    issues: [],
    errorCount: 0,
    warningCount: 0,
  };

  for (const rule of rules) {
    // Only run rules that apply to this file type
    if (!rule.fileTypes.includes(fileType)) continue;

    try {
      const issues = rule.validate(context);

      // In strict mode, promote warnings to errors
      if (config.strict) {
        for (const issue of issues) {
          if (issue.severity === 'warning') {
            issue.severity = 'error';
          }
        }
      }

      result.issues.push(...issues);
    } catch (err) {
      result.issues.push({
        rule: rule.name,
        severity: 'error',
        message: `Rule crashed: ${err instanceof Error ? err.message : String(err)}`,
        file: filePath,
      });
    }
  }

  // Count errors and warnings
  result.errorCount = result.issues.filter(i => i.severity === 'error').length;
  result.warningCount = result.issues.filter(i => i.severity === 'warning').length;

  return result;
}

// CLI setup
const program = new Command();

program
  .name('ubs-validate')
  .description('UBS Brand Validator — validates CSS/SCSS/HTML against UBS brand guidelines')
  .version('1.0.0')
  .argument('<files...>', 'Files or directories to validate (glob patterns supported)')
  .option('-f, --format <format>', 'Output format: text, json, github', 'text')
  .option('-s, --strict', 'Treat warnings as errors', false)
  .option('--fix', 'Show auto-fix suggestions', false)
  .option('-c, --config <path>', 'Path to config file (.ubsrc.json)')
  .option('--rules <rules>', 'Comma-separated list of rules to run')
  .option('--no-colour', 'Disable coloured output')
  .action((files: string[], options: {
    format: string;
    strict: boolean;
    fix: boolean;
    config?: string;
    rules?: string;
    colour?: boolean;
  }) => {
    // Load config
    const config = loadConfig(options.config);

    // Override strict from CLI
    if (options.strict) {
      config.strict = true;
    }

    // Override rules from CLI
    if (options.rules) {
      config.rules = options.rules.split(',').map(r => r.trim());
    }

    // Resolve files
    const resolvedFiles = resolveFiles(files);

    if (resolvedFiles.length === 0) {
      console.error('No matching files found.');
      process.exit(1);
    }

    // Get active rules
    const rules = getActiveRules(config);

    if (rules.length === 0) {
      console.error('No rules enabled. Check your configuration.');
      process.exit(1);
    }

    // Validate each file
    const results: ValidationResult[] = [];

    for (const filePath of resolvedFiles) {
      const result = validateFile(filePath, rules, config, options.fix);
      results.push(result);
    }

    // Format and output results
    const format = options.format as OutputFormat;
    const output = formatResults(results, format);
    console.log(output);

    // Exit code: 1 if any errors found
    const totalErrors = results.reduce((sum, r) => sum + r.errorCount, 0);
    process.exit(totalErrors > 0 ? 1 : 0);
  });

program.parse();
