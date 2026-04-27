/**
 * red-number-check: No red for numbers.
 *
 * Scans HTML for elements that use red colour (#E60000, #D83B31, #FE6F5D)
 * and contain numeric content. UBS brand guidelines prohibit using red
 * to denote negative numbers (financial context).
 */

import { Rule, RuleContext, ValidationIssue } from '../core/types';

// UBS red colours (lowercase for comparison)
const RED_COLOURS = ['#e60000', '#d83b31', '#fe6f5d'];

// Regex to match style attributes containing colour declarations
const STYLE_COLOUR_REGEX = /style\s*=\s*"([^"]*)"/gi;

// Regex to match hex colour values
const HEX_COLOUR_REGEX = /#([0-9a-fA-F]{3,8})\b/g;

// Regex to match rgb colour values
const RGB_COLOUR_REGEX = /(?:rgba?)\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/gi;

// Regex to match elements with their content
const ELEMENT_WITH_STYLE_REGEX = /<(\w+)\s+[^>]*style\s*=\s*"([^"]*)"[^>]*>([\s\S]*?)<\/\1>/gi;

// Regex to detect numeric content (numbers, currency, percentages)
const NUMERIC_CONTENT_REGEX = /[-+]?\s*[$€£¥]?\s*\d[\d,.']*\s*%?/;

/**
 * Normalise a 3-digit hex to 6-digit lowercase.
 */
function normaliseHex(hex: string): string {
  let cleaned = hex.replace('#', '').toLowerCase();
  if (cleaned.length === 3) {
    cleaned = cleaned[0] + cleaned[0] + cleaned[1] + cleaned[1] + cleaned[2] + cleaned[2];
  }
  return '#' + cleaned.substring(0, 6);
}

/**
 * Check if a colour value is a UBS red.
 */
function isRedColour(colourStr: string): boolean {
  // Check hex values
  const hexMatches = colourStr.match(HEX_COLOUR_REGEX);
  if (hexMatches) {
    for (const hex of hexMatches) {
      if (RED_COLOURS.includes(normaliseHex(hex))) {
        return true;
      }
    }
  }

  // Check rgb values
  const rgbRegex = /(?:rgba?)\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/gi;
  let rgbMatch: RegExpExecArray | null;
  while ((rgbMatch = rgbRegex.exec(colourStr)) !== null) {
    const r = parseInt(rgbMatch[1], 10);
    const g = parseInt(rgbMatch[2], 10);
    const b = parseInt(rgbMatch[3], 10);

    const hex = '#' +
      r.toString(16).padStart(2, '0') +
      g.toString(16).padStart(2, '0') +
      b.toString(16).padStart(2, '0');

    if (RED_COLOURS.includes(hex.toLowerCase())) {
      return true;
    }
  }

  return false;
}

/**
 * Strip HTML tags from content to get text-only.
 */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

export const redNumberCheck: Rule = {
  name: 'red-number-check',
  description: 'Ensures red colours are not used for numeric content (UBS financial rule)',
  fileTypes: ['html'],

  validate(context: RuleContext): ValidationIssue[] {
    const { file, content } = context;
    const issues: ValidationIssue[] = [];
    const lines = content.split('\n');

    // Approach: find elements with inline styles containing red, then check their text content
    let match: RegExpExecArray | null;

    // Reset regex
    ELEMENT_WITH_STYLE_REGEX.lastIndex = 0;
    while ((match = ELEMENT_WITH_STYLE_REGEX.exec(content)) !== null) {
      const styleAttr = match[2];
      const innerContent = match[3];

      // Check if the style contains a colour property with a red value
      const hasColourProp = /(?:^|;)\s*color\s*:/i.test(styleAttr);
      if (!hasColourProp) continue;

      if (isRedColour(styleAttr)) {
        const textContent = stripHtml(innerContent);

        if (NUMERIC_CONTENT_REGEX.test(textContent)) {
          // Find line number
          const offset = match.index;
          let lineNum = 1;
          for (let i = 0; i < offset && i < content.length; i++) {
            if (content[i] === '\n') lineNum++;
          }

          issues.push({
            rule: 'red-number-check',
            severity: 'error',
            message: `Red colour used for numeric content "${textContent.substring(0, 50)}". UBS brand prohibits red for numbers.`,
            file,
            line: lineNum,
            value: styleAttr,
            fix: 'Use #000000 (black) for numeric values, or a non-red colour',
          });
        }
      }
    }

    // Also check CSS classes applied via class="" that might reference known red classes
    // and elements with color attributes (legacy HTML)
    const colourAttrRegex = /<(\w+)\s+[^>]*color\s*=\s*["']([^"']*)["'][^>]*>([\s\S]*?)<\/\1>/gi;
    while ((match = colourAttrRegex.exec(content)) !== null) {
      const colourValue = match[2];
      const innerContent = match[3];

      if (isRedColour(colourValue) || RED_COLOURS.includes(normaliseHex(colourValue))) {
        const textContent = stripHtml(innerContent);

        if (NUMERIC_CONTENT_REGEX.test(textContent)) {
          const offset = match.index;
          let lineNum = 1;
          for (let i = 0; i < offset && i < content.length; i++) {
            if (content[i] === '\n') lineNum++;
          }

          issues.push({
            rule: 'red-number-check',
            severity: 'error',
            message: `Red colour used for numeric content "${textContent.substring(0, 50)}". UBS brand prohibits red for numbers.`,
            file,
            line: lineNum,
            value: colourValue,
            fix: 'Use #000000 (black) for numeric values',
          });
        }
      }
    }

    return issues;
  },
};
