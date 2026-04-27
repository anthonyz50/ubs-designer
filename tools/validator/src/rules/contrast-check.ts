/**
 * contrast-check: WCAG 2.2 AA contrast validation.
 *
 * Implements relative luminance and contrast ratio calculations.
 * Checks foreground/background colour pairs found in CSS declarations.
 */

import * as csstree from 'css-tree';
import { Rule, RuleContext, ValidationIssue } from '../core/types';
import { parseCSS } from '../core/parser';

/**
 * Convert sRGB component (0-255) to linear RGB.
 */
function sRGBToLinear(value: number): number {
  const s = value / 255;
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

/**
 * Calculate WCAG relative luminance for an RGB colour.
 * https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 */
export function relativeLuminance(r: number, g: number, b: number): number {
  const rLin = sRGBToLinear(r);
  const gLin = sRGBToLinear(g);
  const bLin = sRGBToLinear(b);
  return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
}

/**
 * Calculate WCAG contrast ratio between two luminance values.
 */
export function contrastRatio(l1: number, l2: number): number {
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Parse hex colour to RGB.
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  let cleaned = hex.replace('#', '');
  if (cleaned.length === 3) {
    cleaned = cleaned[0] + cleaned[0] + cleaned[1] + cleaned[1] + cleaned[2] + cleaned[2];
  }
  if (cleaned.length === 8) {
    cleaned = cleaned.substring(0, 6);
  }
  if (cleaned.length === 4) {
    cleaned = cleaned[0] + cleaned[0] + cleaned[1] + cleaned[1] + cleaned[2] + cleaned[2];
  }
  if (cleaned.length !== 6) return null;

  const r = parseInt(cleaned.substring(0, 2), 16);
  const g = parseInt(cleaned.substring(2, 4), 16);
  const b = parseInt(cleaned.substring(4, 6), 16);

  if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
  return { r, g, b };
}

/**
 * Represents a parsed ruleset with its colour information.
 */
interface RuleColourPair {
  selector: string;
  foreground: { r: number; g: number; b: number } | null;
  background: { r: number; g: number; b: number } | null;
  fontSize: number | null; // in px
  fontWeight: number | null;
  line: number;
  column: number;
}

/**
 * Extract colour from a css-tree value node.
 */
function extractColourFromValue(
  valueNode: csstree.CssNode
): { r: number; g: number; b: number } | null {
  let result: { r: number; g: number; b: number } | null = null;

  csstree.walk(valueNode, {
    enter(node: csstree.CssNode) {
      if (result) return;

      if (node.type === 'Hash') {
        result = hexToRgb('#' + (node as csstree.Hash).value);
      }

      if (node.type === 'Function') {
        const fnName = (node as csstree.FunctionNode).name.toLowerCase();
        if (fnName === 'rgb' || fnName === 'rgba') {
          const nums: number[] = [];
          csstree.walk(node, {
            enter(child: csstree.CssNode) {
              if (child.type === 'Number') {
                nums.push(parseFloat((child as csstree.NumberNode).value));
              }
            },
          });
          if (nums.length >= 3) {
            result = { r: nums[0], g: nums[1], b: nums[2] };
          }
        }
      }
    },
  });

  return result;
}

/**
 * Parse a font-size value to pixels.
 */
function parseFontSize(value: string): number | null {
  const pxMatch = value.match(/([\d.]+)\s*px/i);
  if (pxMatch) return parseFloat(pxMatch[1]);

  const ptMatch = value.match(/([\d.]+)\s*pt/i);
  if (ptMatch) return parseFloat(ptMatch[1]) * (4 / 3); // pt to px conversion

  const remMatch = value.match(/([\d.]+)\s*rem/i);
  if (remMatch) return parseFloat(remMatch[1]) * 16; // assume 16px base

  const emMatch = value.match(/([\d.]+)\s*em/i);
  if (emMatch) return parseFloat(emMatch[1]) * 16; // approximate

  return null;
}

/**
 * Parse font-weight to a numeric value.
 */
function parseFontWeight(value: string): number | null {
  const numMatch = value.match(/\d+/);
  if (numMatch) return parseInt(numMatch[0], 10);

  const lower = value.toLowerCase().trim();
  if (lower === 'bold') return 700;
  if (lower === 'normal') return 400;
  if (lower === 'lighter') return 300;
  if (lower === 'bolder') return 700;

  return null;
}

/**
 * Determine if text is "large" per WCAG.
 * Large: >= 18pt (24px) or >= 14pt (18.66px) bold
 */
function isLargeText(fontSize: number | null, fontWeight: number | null): boolean {
  if (fontSize === null) return false;
  if (fontSize >= 24) return true;
  if (fontSize >= 18.66 && fontWeight !== null && fontWeight >= 700) return true;
  return false;
}

export const contrastCheck: Rule = {
  name: 'contrast-check',
  description: 'WCAG 2.2 AA contrast validation for foreground/background colour pairs',
  fileTypes: ['css', 'scss'],

  validate(context: RuleContext): ValidationIssue[] {
    const { file, content } = context;
    const issues: ValidationIssue[] = [];

    let ast: csstree.CssNode;
    try {
      ast = parseCSS(content);
    } catch {
      return issues;
    }

    // Walk through rules and collect fg/bg pairs per ruleset
    csstree.walk(ast, {
      visit: 'Rule',
      enter(ruleNode: csstree.Rule) {
        const pair: RuleColourPair = {
          selector: ruleNode.prelude ? csstree.generate(ruleNode.prelude) : '<unknown>',
          foreground: null,
          background: null,
          fontSize: null,
          fontWeight: null,
          line: ruleNode.loc?.start?.line ?? 0,
          column: ruleNode.loc?.start?.column ?? 0,
        };

        if (ruleNode.block) {
          csstree.walk(ruleNode.block, {
            visit: 'Declaration',
            enter(decl: csstree.Declaration) {
              const prop = decl.property.toLowerCase();

              if (prop === 'color') {
                pair.foreground = extractColourFromValue(decl.value);
              } else if (prop === 'background-color' || prop === 'background') {
                pair.background = extractColourFromValue(decl.value);
              } else if (prop === 'font-size') {
                pair.fontSize = parseFontSize(csstree.generate(decl.value));
              } else if (prop === 'font-weight') {
                pair.fontWeight = parseFontWeight(csstree.generate(decl.value));
              }
            },
          });
        }

        // Only check if both foreground and background are present
        if (pair.foreground && pair.background) {
          const fgLum = relativeLuminance(pair.foreground.r, pair.foreground.g, pair.foreground.b);
          const bgLum = relativeLuminance(pair.background.r, pair.background.g, pair.background.b);
          const ratio = contrastRatio(fgLum, bgLum);

          const large = isLargeText(pair.fontSize, pair.fontWeight);
          const threshold = large ? 3.0 : 4.5;
          const thresholdLabel = large ? '3:1 (large text)' : '4.5:1 (normal text)';

          if (ratio < threshold) {
            issues.push({
              rule: 'contrast-check',
              severity: 'error',
              message: `Insufficient contrast ratio ${ratio.toFixed(2)}:1 (minimum ${thresholdLabel}) for selector "${pair.selector}".`,
              file,
              line: pair.line,
              column: pair.column,
              value: `fg: rgb(${pair.foreground.r},${pair.foreground.g},${pair.foreground.b}) / bg: rgb(${pair.background.r},${pair.background.g},${pair.background.b})`,
            });
          }
        }
      },
    });

    return issues;
  },
};
