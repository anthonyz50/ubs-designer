#!/usr/bin/env node
"use strict";
/**
 * UBS Brand Validator CLI
 *
 * Validates CSS, SCSS, and HTML files against UBS brand guidelines.
 * Usage: ubs-validate <files...> [options]
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const config_1 = require("./core/config");
const parser_1 = require("./core/parser");
const reporter_1 = require("./core/reporter");
// Import all rules
const colour_check_1 = require("./rules/colour-check");
const contrast_check_1 = require("./rules/contrast-check");
const typography_check_1 = require("./rules/typography-check");
const red_number_check_1 = require("./rules/red-number-check");
const shadow_check_1 = require("./rules/shadow-check");
const spacing_check_1 = require("./rules/spacing-check");
// All available rules
const ALL_RULES = [
    colour_check_1.colourCheck,
    contrast_check_1.contrastCheck,
    typography_check_1.typographyCheck,
    red_number_check_1.redNumberCheck,
    shadow_check_1.shadowCheck,
    spacing_check_1.spacingCheck,
];
/**
 * Resolve glob patterns to file paths.
 * Simple implementation: handles basic wildcards and directory traversal.
 */
function resolveFiles(patterns) {
    const files = [];
    for (const pattern of patterns) {
        if (fs.existsSync(pattern)) {
            const stat = fs.statSync(pattern);
            if (stat.isFile()) {
                files.push(path.resolve(pattern));
            }
            else if (stat.isDirectory()) {
                // Recursively find CSS/SCSS/HTML files
                walkDir(pattern, files);
            }
        }
        else {
            // Try simple glob expansion
            const dir = path.dirname(pattern);
            const base = path.basename(pattern);
            if (fs.existsSync(dir)) {
                const entries = fs.readdirSync(dir);
                const globRegex = new RegExp('^' +
                    base
                        .replace(/\./g, '\\.')
                        .replace(/\*/g, '.*')
                        .replace(/\?/g, '.') +
                    '$');
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
function walkDir(dir, files) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            // Skip common non-project directories
            if (['node_modules', '.git', 'dist', 'build'].includes(entry.name))
                continue;
            walkDir(fullPath, files);
        }
        else if (entry.isFile()) {
            const fileType = (0, parser_1.detectFileType)(entry.name);
            if (fileType) {
                files.push(path.resolve(fullPath));
            }
        }
    }
}
/**
 * Get the active rules based on config.
 */
function getActiveRules(config) {
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
function validateFile(filePath, rules, config, fix) {
    const fileType = (0, parser_1.detectFileType)(filePath);
    if (!fileType) {
        return { file: filePath, issues: [], errorCount: 0, warningCount: 0 };
    }
    const content = (0, parser_1.readFile)(filePath);
    const context = {
        file: filePath,
        content,
        fileType,
        fix,
    };
    const result = {
        file: filePath,
        issues: [],
        errorCount: 0,
        warningCount: 0,
    };
    for (const rule of rules) {
        // Only run rules that apply to this file type
        if (!rule.fileTypes.includes(fileType))
            continue;
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
        }
        catch (err) {
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
const program = new commander_1.Command();
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
    .action((files, options) => {
    // Load config
    const config = (0, config_1.loadConfig)(options.config);
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
    const results = [];
    for (const filePath of resolvedFiles) {
        const result = validateFile(filePath, rules, config, options.fix);
        results.push(result);
    }
    // Format and output results
    const format = options.format;
    const output = (0, reporter_1.formatResults)(results, format);
    console.log(output);
    // Exit code: 1 if any errors found
    const totalErrors = results.reduce((sum, r) => sum + r.errorCount, 0);
    process.exit(totalErrors > 0 ? 1 : 0);
});
program.parse();
//# sourceMappingURL=index.js.map