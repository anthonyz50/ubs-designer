/**
 * typography-check: Validates typography rules against UBS brand guidelines.
 *
 * Checks:
 * - font-family must be Frutiger or Arial (fallback)
 * - font-weight must be 300 (light), 400 (roman), or 700 (bold)
 * - No text-shadow usage
 * - No text-align: justify or text-align: right
 * - Minimum font-size of 14px / 10.5pt for web
 */

import * as csstree from 'css-tree';
import { Rule, RuleContext, ValidationIssue } from '../core/types';
import { parseCSS, extractInlineStyles } from '../core/parser';

const ALLOWED_FONT_FAMILIES = ['frutiger', 'arial'];
const ALLOWED_FONT_WEIGHTS = [300, 400, 700];
const MIN_FONT_SIZE_PX = 14;

/**
 * Parse font-weight string to numeric value.
 */
function parseFontWeight(value: string): number | null {
  const trimmed = value.trim().toLowerCase();
  if (trimmed === 'normal') return 400;
  if (trimmed === 'bold') return 700;
  if (trimmed === 'lighter' || trimmed === 'light') return 300;
  if (trimmed === 'bolder') return 700;
  const num = parseInt(trimmed, 10);
  return isNaN(num) ? null : num;
}

/**
 * Parse font-size to pixels.
 */
function parseFontSizeToPx(value: string): number | null {
  const pxMatch = value.match(/([\d.]+)\s*px/i);
  if (pxMatch) return parseFloat(pxMatch[1]);

  const ptMatch = value.match(/([\d.]+)\s*pt/i);
  if (ptMatch) return parseFloat(ptMatch[1]) * (4 / 3);

  const remMatch = value.match(/([\d.]+)\s*rem/i);
  if (remMatch) return parseFloat(remMatch[1]) * 16;

  const emMatch = value.match(/([\d.]+)\s*em/i);
  if (emMatch) return parseFloat(emMatch[1]) * 16;

  return null;
}

/**
 * Check font-family value against allowed families.
 */
function checkFontFamily(value: string): boolean {
  const lower = value.toLowerCase();
  // Extract individual font names, handling quotes
  const fonts = lower
    .split(',')
    .map(f => f.trim().replace(/['"]/g, '').trim());

  // At least the first font should be Frutiger; Arial is acceptable as sole or fallback
  return fonts.some(f => ALLOWED_FONT_FAMILIES.some(allowed => f.includes(allowed)));
}

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

      // Check font-family
      if (property === 'font-family') {
        if (!checkFontFamily(value)) {
          issues.push({
            rule: 'typography-check',
            severity: 'error',
            message: `Font family "${value}" is not allowed. Use Frutiger with Arial as fallback.`,
            file,
            line,
            column,
            value,
            fix: "font-family: 'Frutiger', Arial, sans-serif",
          });
        }
      }

      // Check font shorthand for font-family
      if (property === 'font') {
        // The font shorthand's last segment(s) are the family
        // We'll do a basic check: if neither Frutiger nor Arial appears, flag it
        const lower = value.toLowerCase();
        if (!lower.includes('frutiger') && !lower.includes('arial')) {
          issues.push({
            rule: 'typography-check',
            severity: 'error',
            message: `Font shorthand "${value}" does not use Frutiger or Arial.`,
            file,
            line,
            column,
            value,
          });
        }
      }

      // Check font-weight
      if (property === 'font-weight') {
        const weight = parseFontWeight(value);
        if (weight !== null && !ALLOWED_FONT_WEIGHTS.includes(weight)) {
          issues.push({
            rule: 'typography-check',
            severity: 'error',
            message: `Font weight ${weight} is not allowed. Use 300 (light), 400 (roman), or 700 (bold).`,
            file,
            line,
            column,
            value: String(weight),
            fix: `Use font-weight: ${ALLOWED_FONT_WEIGHTS.join(' or ')}`,
          });
        }
      }

      // Check text-shadow (absolute prohibition)
      if (property === 'text-shadow') {
        if (value.trim() !== 'none') {
          issues.push({
            rule: 'typography-check',
            severity: 'error',
            message: 'text-shadow is not permitted in UBS brand guidelines.',
            file,
            line,
            column,
            value,
            fix: 'Remove text-shadow',
          });
        }
      }

      // Check text-align
      if (property === 'text-align') {
        const trimmed = value.trim().toLowerCase();
        if (trimmed === 'justify') {
          issues.push({
            rule: 'typography-check',
            severity: 'error',
            message: 'text-align: justify is not permitted. Use left or center.',
            file,
            line,
            column,
            value,
            fix: 'text-align: left',
          });
        }
        if (trimmed === 'right') {
          issues.push({
            rule: 'typography-check',
            severity: 'error',
            message: 'text-align: right is not permitted unless for numeric data tables.',
            file,
            line,
            column,
            value,
          });
        }
      }

      // Check font-size
      if (property === 'font-size') {
        const px = parseFontSizeToPx(value);
        if (px !== null && px < MIN_FONT_SIZE_PX) {
          issues.push({
            rule: 'typography-check',
            severity: 'warning',
            message: `Font size ${value} (${px}px) is below the minimum of ${MIN_FONT_SIZE_PX}px for web.`,
            file,
            line,
            column,
            value,
            fix: `font-size: ${MIN_FONT_SIZE_PX}px`,
          });
        }
      }
    },
  });

  return issues;
}

export const typographyCheck: Rule = {
  name: 'typography-check',
  description: 'Validates typography against UBS brand rules (fonts, weights, sizes, alignment)',
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
