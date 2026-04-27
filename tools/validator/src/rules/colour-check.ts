/**
 * colour-check: Validates colours against the official UBS palette.
 *
 * Scans CSS/SCSS for colour values (hex, rgb, rgba, hsl) and reports
 * any colour not in the approved UBS palette.
 */

import * as csstree from 'css-tree';
import { Rule, RuleContext, ValidationIssue } from '../core/types';
import { parseCSS, extractInlineStyles } from '../core/parser';

// Official UBS colour palette (normalised to uppercase)
const UBS_PALETTE: Set<string> = new Set([
  // Corporate
  '#FFFFFF', '#E60000', '#000000',
  // Grays
  '#CCCABC', '#B8B3A2', '#8E8D83', '#7A7870', '#5A5D5C', '#404040',
  // Bordeaux
  '#BD000C', '#8A000A', '#620004',
  // Bronze
  '#B98E2C', '#946F29', '#6C5312',
  // Pastels
  '#ECEBE4', '#F5F0E1',
  // Dark mode
  '#D83B31', '#FE6F5D',
  // RAG
  '#E4A911', '#6F7A1A',
  // Trading
  '#498100', '#C81219',
  // Metallic
  '#BEBEBE',
  // Chart 20
  '#AF8626', '#00759E', '#879420', '#4B2D58', '#9F8865', '#2E476B',
  '#469A6C', '#AD3E4A', '#8489BD', '#0C7EC6', '#654D16', '#804C95',
  '#45999C', '#4972AC', '#CC707A', '#295B40', '#545A9C', '#785E4A',
  '#07476F',
]);

// Build an array version for nearest-colour lookups
const PALETTE_ARRAY = Array.from(UBS_PALETTE);

// Colour properties in CSS that take colour values
const COLOUR_PROPERTIES = new Set([
  'color', 'background-color', 'background', 'border-color',
  'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color',
  'border', 'border-top', 'border-right', 'border-bottom', 'border-left',
  'outline-color', 'outline', 'text-decoration-color', 'fill', 'stroke',
  'box-shadow', 'text-shadow', 'caret-color', 'column-rule-color',
  'accent-color', 'scrollbar-color',
]);

/**
 * Parse a hex colour string to RGB.
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  let cleaned = hex.replace('#', '').toUpperCase();

  // Expand shorthand (#ABC -> #AABBCC)
  if (cleaned.length === 3) {
    cleaned = cleaned[0] + cleaned[0] + cleaned[1] + cleaned[1] + cleaned[2] + cleaned[2];
  }
  // Handle 4-char shorthand with alpha (#ABCD -> #AABBCCDD, ignore alpha)
  if (cleaned.length === 4) {
    cleaned = cleaned[0] + cleaned[0] + cleaned[1] + cleaned[1] + cleaned[2] + cleaned[2];
  }
  // Handle 8-char hex with alpha, take first 6
  if (cleaned.length === 8) {
    cleaned = cleaned.substring(0, 6);
  }

  if (cleaned.length !== 6) return null;

  const r = parseInt(cleaned.substring(0, 2), 16);
  const g = parseInt(cleaned.substring(2, 4), 16);
  const b = parseInt(cleaned.substring(4, 6), 16);

  if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
  return { r, g, b };
}

/**
 * Convert RGB to hex string.
 */
function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0').toUpperCase();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Calculate Euclidean distance between two colours in RGB space.
 */
function colourDistance(
  c1: { r: number; g: number; b: number },
  c2: { r: number; g: number; b: number }
): number {
  return Math.sqrt(
    (c1.r - c2.r) ** 2 + (c1.g - c2.g) ** 2 + (c1.b - c2.b) ** 2
  );
}

/**
 * Find the nearest UBS palette colour to a given hex colour.
 */
function findNearestPaletteColour(hex: string): string | null {
  const target = hexToRgb(hex);
  if (!target) return null;

  let nearest = '';
  let minDist = Infinity;

  for (const paletteHex of PALETTE_ARRAY) {
    const paletteRgb = hexToRgb(paletteHex);
    if (!paletteRgb) continue;
    const dist = colourDistance(target, paletteRgb);
    if (dist < minDist) {
      minDist = dist;
      nearest = paletteHex;
    }
  }

  return nearest || null;
}

/**
 * Normalise a hex colour to uppercase 6-digit format.
 */
function normaliseHex(hex: string): string {
  let cleaned = hex.replace('#', '').toUpperCase();
  if (cleaned.length === 3) {
    cleaned = cleaned[0] + cleaned[0] + cleaned[1] + cleaned[1] + cleaned[2] + cleaned[2];
  }
  return '#' + cleaned.substring(0, 6);
}

/**
 * Check if a hex colour has an alpha channel.
 */
function hasAlpha(hex: string): boolean {
  const cleaned = hex.replace('#', '');
  return cleaned.length === 4 || cleaned.length === 8;
}

/**
 * Extract colour issues from CSS content.
 */
function validateCSSContent(
  content: string,
  file: string,
  fix: boolean
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

      // Only check colour-related properties
      if (!COLOUR_PROPERTIES.has(property)) return;

      csstree.walk(node.value, {
        enter(valueNode: csstree.CssNode) {
          // Check hex colours
          if (valueNode.type === 'Hash') {
            const hex = '#' + (valueNode as csstree.Hash).value;
            const normalised = normaliseHex(hex);
            const loc = valueNode.loc;

            if (hasAlpha(hex)) {
              issues.push({
                rule: 'colour-check',
                severity: 'warning',
                message: `Colour with alpha channel detected: ${hex}. Verify opacity usage is intentional.`,
                file,
                line: loc?.start?.line,
                column: loc?.start?.column,
                value: hex,
              });
            }

            if (!UBS_PALETTE.has(normalised)) {
              const nearest = findNearestPaletteColour(normalised);
              issues.push({
                rule: 'colour-check',
                severity: 'error',
                message: `Colour ${hex} is not in the UBS palette.`,
                file,
                line: loc?.start?.line,
                column: loc?.start?.column,
                value: hex,
                fix: nearest ? `Use ${nearest} instead` : undefined,
              });
            }
          }

          // Check rgb/rgba functions
          if (valueNode.type === 'Function') {
            const fnName = (valueNode as csstree.FunctionNode).name.toLowerCase();
            if (fnName === 'rgb' || fnName === 'rgba') {
              const args: number[] = [];
              csstree.walk(valueNode, {
                enter(child: csstree.CssNode) {
                  if (child.type === 'Number') {
                    args.push(parseFloat((child as csstree.NumberNode).value));
                  }
                  if (child.type === 'Percentage') {
                    // Convert percentage to 0-255 for RGB
                    args.push(Math.round((parseFloat((child as csstree.Percentage).value) / 100) * 255));
                  }
                },
              });

              if (args.length >= 3) {
                const hex = rgbToHex(args[0], args[1], args[2]);
                const loc = valueNode.loc;

                if (fnName === 'rgba' || args.length > 3) {
                  issues.push({
                    rule: 'colour-check',
                    severity: 'warning',
                    message: `Colour with alpha channel detected: ${fnName}(${args.join(', ')}). Verify opacity usage is intentional.`,
                    file,
                    line: loc?.start?.line,
                    column: loc?.start?.column,
                    value: `${fnName}(${args.join(', ')})`,
                  });
                }

                if (!UBS_PALETTE.has(hex)) {
                  const nearest = findNearestPaletteColour(hex);
                  issues.push({
                    rule: 'colour-check',
                    severity: 'error',
                    message: `Colour ${fnName}(${args.slice(0, 3).join(', ')}) (${hex}) is not in the UBS palette.`,
                    file,
                    line: loc?.start?.line,
                    column: loc?.start?.column,
                    value: hex,
                    fix: nearest ? `Use ${nearest} instead` : undefined,
                  });
                }
              }
            }

            // Check hsl/hsla functions
            if (fnName === 'hsl' || fnName === 'hsla') {
              const args: number[] = [];
              csstree.walk(valueNode, {
                enter(child: csstree.CssNode) {
                  if (child.type === 'Number') {
                    args.push(parseFloat((child as csstree.NumberNode).value));
                  }
                  if (child.type === 'Percentage') {
                    args.push(parseFloat((child as csstree.Percentage).value));
                  }
                },
              });

              if (args.length >= 3) {
                const rgb = hslToRgb(args[0], args[1], args[2]);
                const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
                const loc = valueNode.loc;

                if (fnName === 'hsla' || args.length > 3) {
                  issues.push({
                    rule: 'colour-check',
                    severity: 'warning',
                    message: `Colour with alpha channel detected: ${fnName}(${args.join(', ')}). Verify opacity usage is intentional.`,
                    file,
                    line: loc?.start?.line,
                    column: loc?.start?.column,
                    value: `${fnName}(${args.join(', ')})`,
                  });
                }

                if (!UBS_PALETTE.has(hex)) {
                  const nearest = findNearestPaletteColour(hex);
                  issues.push({
                    rule: 'colour-check',
                    severity: 'error',
                    message: `Colour ${fnName}(${args.slice(0, 3).join(', ')}) (${hex}) is not in the UBS palette.`,
                    file,
                    line: loc?.start?.line,
                    column: loc?.start?.column,
                    value: hex,
                    fix: nearest ? `Use ${nearest} instead` : undefined,
                  });
                }
              }
            }
          }
        },
      });
    },
  });

  return issues;
}

/**
 * Convert HSL to RGB.
 */
function hslToRgb(
  h: number,
  s: number,
  l: number
): { r: number; g: number; b: number } {
  h = h % 360;
  if (h < 0) h += 360;
  s = s / 100;
  l = l / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0, g = 0, b = 0;

  if (h < 60) { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

export const colourCheck: Rule = {
  name: 'colour-check',
  description: 'Validates colours against the official UBS palette',
  fileTypes: ['css', 'scss', 'html'],

  validate(context: RuleContext): ValidationIssue[] {
    const { file, content, fileType, fix } = context;

    if (fileType === 'html') {
      // Extract inline styles and <style> blocks, then validate each
      const styles = extractInlineStyles(content);
      const issues: ValidationIssue[] = [];

      for (const { style, line: baseLine } of styles) {
        // Wrap inline style in a dummy rule for parsing
        const wrapped = `_dummy { ${style} }`;
        const styleIssues = validateCSSContent(wrapped, file, fix);

        // Adjust line numbers relative to the HTML position
        for (const issue of styleIssues) {
          issue.line = baseLine + (issue.line ?? 1) - 1;
          issues.push(issue);
        }
      }

      // Also check for colour attributes in HTML (e.g., bgcolor, color attributes)
      const hexInHtmlRegex = /#([0-9A-Fa-f]{3,8})\b/g;
      let match: RegExpExecArray | null;
      const lines = content.split('\n');

      for (let i = 0; i < lines.length; i++) {
        while ((match = hexInHtmlRegex.exec(lines[i])) !== null) {
          const hex = match[0];
          const normalised = normaliseHex(hex);

          if (!UBS_PALETTE.has(normalised)) {
            const nearest = findNearestPaletteColour(normalised);
            issues.push({
              rule: 'colour-check',
              severity: 'error',
              message: `Colour ${hex} is not in the UBS palette.`,
              file,
              line: i + 1,
              column: match.index + 1,
              value: hex,
              fix: nearest ? `Use ${nearest} instead` : undefined,
            });
          }
        }
      }

      return issues;
    }

    // CSS / SCSS
    return validateCSSContent(content, file, fix);
  },
};
