/**
 * Output formatter for validation results.
 * Supports text (terminal with colours), JSON, and GitHub Actions annotations.
 */

import { OutputFormat, ValidationResult, ValidationIssue, Severity } from './types';

const COLOURS = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m',
  bold: '\x1b[1m',
  underline: '\x1b[4m',
};

function severityColour(severity: Severity): string {
  switch (severity) {
    case 'error':
      return COLOURS.red;
    case 'warning':
      return COLOURS.yellow;
    case 'info':
      return COLOURS.cyan;
  }
}

function severityIcon(severity: Severity): string {
  switch (severity) {
    case 'error':
      return '✖';
    case 'warning':
      return '⚠';
    case 'info':
      return 'ℹ';
  }
}

/**
 * Format a single issue for terminal display.
 */
function formatIssueText(issue: ValidationIssue): string {
  const loc =
    issue.line !== undefined
      ? `${COLOURS.dim}${issue.line}:${issue.column ?? 0}${COLOURS.reset}`
      : '';
  const icon = severityIcon(issue.severity);
  const colour = severityColour(issue.severity);
  const fixHint = issue.fix ? `${COLOURS.dim} (fix: ${issue.fix})${COLOURS.reset}` : '';
  const value = issue.value ? `${COLOURS.dim} [${issue.value}]${COLOURS.reset}` : '';

  return `  ${loc}  ${colour}${icon} ${issue.severity}${COLOURS.reset}  ${issue.message}${value}${fixHint}  ${COLOURS.dim}${issue.rule}${COLOURS.reset}`;
}

/**
 * Format a single issue as a GitHub Actions annotation.
 */
function formatIssueGitHub(issue: ValidationIssue): string {
  const level = issue.severity === 'error' ? 'error' : 'warning';
  const filePart = `file=${issue.file}`;
  const linePart = issue.line ? `,line=${issue.line}` : '';
  const colPart = issue.column ? `,col=${issue.column}` : '';
  const title = `${issue.rule}`;
  return `::${level} ${filePart}${linePart}${colPart},title=${title}::${issue.message}`;
}

/**
 * Format all validation results.
 */
export function formatResults(
  results: ValidationResult[],
  format: OutputFormat
): string {
  if (format === 'json') {
    return JSON.stringify(results, null, 2);
  }

  if (format === 'github') {
    const lines: string[] = [];
    for (const result of results) {
      for (const issue of result.issues) {
        lines.push(formatIssueGitHub(issue));
      }
    }
    return lines.join('\n');
  }

  // Text format
  const lines: string[] = [];
  let totalErrors = 0;
  let totalWarnings = 0;

  for (const result of results) {
    if (result.issues.length === 0) continue;

    lines.push('');
    lines.push(`${COLOURS.underline}${result.file}${COLOURS.reset}`);

    for (const issue of result.issues) {
      lines.push(formatIssueText(issue));
    }

    totalErrors += result.errorCount;
    totalWarnings += result.warningCount;
  }

  if (totalErrors === 0 && totalWarnings === 0) {
    lines.push('');
    lines.push(`${COLOURS.green}✔ All files pass UBS brand validation${COLOURS.reset}`);
  } else {
    lines.push('');
    const summary: string[] = [];
    if (totalErrors > 0) {
      summary.push(`${COLOURS.red}${totalErrors} error${totalErrors !== 1 ? 's' : ''}${COLOURS.reset}`);
    }
    if (totalWarnings > 0) {
      summary.push(`${COLOURS.yellow}${totalWarnings} warning${totalWarnings !== 1 ? 's' : ''}${COLOURS.reset}`);
    }
    lines.push(`${COLOURS.bold}${severityIcon(totalErrors > 0 ? 'error' : 'warning')} ${summary.join(', ')} found${COLOURS.reset}`);
  }

  lines.push('');
  return lines.join('\n');
}
