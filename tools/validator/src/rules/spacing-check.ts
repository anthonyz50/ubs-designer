/**
 * spacing-check: 4px grid alignment validation.
 *
 * Validates that margin and padding values align to the UBS 4px grid.
 * Allowed values: 0, 4, 8, 12, 16, 24, 32, 48, 64, 96 (and their negatives for margin).
 */

import * as csstree from 'css-tree';
import { Rule, RuleContext, ValidationIssue } from '../core/types';
import { parseCSS, extractInlineStyles } from '../core/parser';

const GRID_VALUES = new Set([0, 4, 8, 12, 16, 24, 32, 48, 64, 96]);

const SPACING_PROPERTIES = new Set([
  'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
  'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
  'gap', 'row-gap', 'column-gap', 'grid-gap', 'grid-row-gap', 'grid-column-gap',
]);

/**
 * Parse a dimension value to pixels.
 * Returns null for values we can't reliably convert (%, em, rem, vh, etc.)
 * or for auto/inherit/initial etc.
 */
function toPx(value: string): number | null {
  const trimmed = value.trim().toLowerCase();

  // Skip non-numeric values
  if (['auto', 'inherit', 'initial', 'unset', 'revert'].includes(trimmed)) {
    return null;
  }

  // Pure number (0)
  if (/^-?\d+$/.test(trimmed)) {
    return parseInt(trimmed, 10);
  }

  // px values
  const pxMatch = trimmed.match(/^(-?[\d.]+)\s*px$/);
  if (pxMatch) return parseFloat(pxMatch[1]);

  // We skip rem/em/% etc. as they depend on context
  return null;
}

/**
 * Find the nearest grid value to the given pixel value.
 */
function nearestGridValue(px: number): number {
  const abs = Math.abs(px);
  const sign = px < 0 ? -1 : 1;
  const gridArr = Array.from(GRID_VALUES).sort((a, b) => a - b);

  let nearest = 0;
  let minDist = Infinity;

  for (const gv of gridArr) {
    const dist = Math.abs(abs - gv);
    if (dist < minDist) {
      minDist = dist;
      nearest = gv;
    }
  }

  return nearest * sign;
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
      if (!SPACING_PROPERTIES.has(property)) return;

      const value = csstree.generate(node.value);
      const line = (node.loc?.start?.line ?? 0) + lineOffset;
      const column = node.loc?.start?.column ?? 0;

      // Split multi-value shorthand (e.g. margin: 8px 16px 12px 4px)
      const parts = value.split(/\s+/).filter(p => p.length > 0);

      for (const part of parts) {
        // Skip CSS variables and calc()
        if (part.startsWith('var(') || part.startsWith('calc(') || part.includes('var(')) {
          continue;
        }

        const px = toPx(part);
        if (px === null) continue; // Skip unconvertible values

        const abs = Math.abs(px);
        if (!GRID_VALUES.has(abs)) {
          const nearest = nearestGridValue(px);
          issues.push({
            rule: 'spacing-check',
            severity: 'warning',
            message: `Spacing value ${part} does not align to the 4px grid. Allowed values: ${Array.from(GRID_VALUES).sort((a, b) => a - b).join(', ')}px.`,
            file,
            line,
            column,
            value: part,
            fix: `Use ${nearest}px instead`,
          });
        }
      }
    },
  });

  return issues;
}

export const spacingCheck: Rule = {
  name: 'spacing-check',
  description: 'Validates spacing values align to the UBS 4px grid',
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
