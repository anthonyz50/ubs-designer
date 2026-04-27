/**
 * shadow-check: No shadows on brand elements.
 *
 * Checks for box-shadow, text-shadow, and drop-shadow usage.
 * text-shadow is a hard error (per UBS brand rules).
 * box-shadow and drop-shadow are warnings.
 */

import * as csstree from 'css-tree';
import { Rule, RuleContext, ValidationIssue } from '../core/types';
import { parseCSS, extractInlineStyles } from '../core/parser';

function validateCSSContent(
  content: string,
  file: string,
  lineOffset: number = 0
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  let ast: csstree.CssNode;
  try {
    ast = parseCSS(content);
  } catch {
    return issues;
  }

  csstree.walk(ast, {
    visit: 'Declaration',
    enter(node: csstree.Declaration) {
      const property = node.property.toLowerCase();
      const value = csstree.generate(node.value);
      const line = (node.loc?.start?.line ?? 0) + lineOffset;
      const column = node.loc?.start?.column ?? 0;

      // text-shadow is a hard error
      if (property === 'text-shadow' && value.trim() !== 'none') {
        issues.push({
          rule: 'shadow-check',
          severity: 'error',
          message: 'text-shadow is not permitted in UBS brand guidelines.',
          file,
          line,
          column,
          value,
          fix: 'Remove text-shadow declaration',
        });
      }

      // box-shadow is a warning
      if (property === 'box-shadow' && value.trim() !== 'none') {
        issues.push({
          rule: 'shadow-check',
          severity: 'warning',
          message: 'box-shadow usage detected. Shadows should be used sparingly per UBS brand guidelines.',
          file,
          line,
          column,
          value,
          fix: 'Consider removing box-shadow or use very subtle values',
        });
      }

      // Check for drop-shadow in filter property
      if (property === 'filter') {
        const lower = value.toLowerCase();
        if (lower.includes('drop-shadow')) {
          issues.push({
            rule: 'shadow-check',
            severity: 'warning',
            message: 'drop-shadow() filter detected. Shadows should be used sparingly per UBS brand guidelines.',
            file,
            line,
            column,
            value,
            fix: 'Consider removing drop-shadow filter',
          });
        }
      }

      // Check -webkit-box-shadow and -moz-box-shadow
      if (
        (property === '-webkit-box-shadow' || property === '-moz-box-shadow') &&
        value.trim() !== 'none'
      ) {
        issues.push({
          rule: 'shadow-check',
          severity: 'warning',
          message: `${property} usage detected. Shadows should be used sparingly per UBS brand guidelines.`,
          file,
          line,
          column,
          value,
        });
      }
    },
  });

  return issues;
}

export const shadowCheck: Rule = {
  name: 'shadow-check',
  description: 'Checks for prohibited shadow usage on brand elements',
  fileTypes: ['css', 'scss', 'html'],

  validate(context: RuleContext): ValidationIssue[] {
    const { file, content, fileType } = context;

    if (fileType === 'html') {
      const styles = extractInlineStyles(content);
      const issues: ValidationIssue[] = [];

      for (const { style, line: baseLine } of styles) {
        const wrapped = `_dummy { ${style} }`;
        const styleIssues = validateCSSContent(wrapped, file, baseLine - 1);
        issues.push(...styleIssues);
      }

      return issues;
    }

    return validateCSSContent(content, file);
  },
};
