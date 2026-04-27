/**
 * File parser for CSS/SCSS (using css-tree) and HTML (regex-based).
 */

import * as fs from 'fs';
import * as csstree from 'css-tree';

export type FileType = 'css' | 'scss' | 'html';

export function detectFileType(filePath: string): FileType | null {
  if (filePath.endsWith('.css')) return 'css';
  if (filePath.endsWith('.scss') || filePath.endsWith('.sass')) return 'scss';
  if (filePath.endsWith('.html') || filePath.endsWith('.htm')) return 'html';
  return null;
}

export function readFile(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8');
}

/**
 * Parse CSS/SCSS content into a css-tree AST.
 * For SCSS, we parse in tolerant mode to handle SCSS-specific syntax.
 */
export function parseCSS(content: string): csstree.CssNode {
  return csstree.parse(content, {
    parseAtrulePrelude: false,
    parseRulePrelude: false,
    parseValue: true,
    parseCustomProperty: true,
    positions: true,
    onParseError: () => {
      // Silently skip parse errors (common with SCSS variables etc.)
    },
  });
}

/**
 * Extract inline styles from HTML content.
 * Returns an array of { style, line, column } objects.
 */
export function extractInlineStyles(
  htmlContent: string
): Array<{ style: string; line: number; column: number }> {
  const results: Array<{ style: string; line: number; column: number }> = [];

  // Match style="..." attributes
  const styleAttrRegex = /style\s*=\s*"([^"]*)"/gi;
  let match: RegExpExecArray | null;

  while ((match = styleAttrRegex.exec(htmlContent)) !== null) {
    const pos = getLineAndColumn(htmlContent, match.index);
    results.push({
      style: match[1],
      line: pos.line,
      column: pos.column,
    });
  }

  // Match <style> blocks
  const styleBlockRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  while ((match = styleBlockRegex.exec(htmlContent)) !== null) {
    const pos = getLineAndColumn(htmlContent, match.index);
    results.push({
      style: match[1],
      line: pos.line,
      column: pos.column,
    });
  }

  return results;
}

/**
 * Extract CSS property-value declarations from a css-tree AST.
 */
export function extractDeclarations(
  ast: csstree.CssNode
): Array<{
  property: string;
  value: string;
  valueNode: csstree.CssNode;
  line: number;
  column: number;
}> {
  const declarations: Array<{
    property: string;
    value: string;
    valueNode: csstree.CssNode;
    line: number;
    column: number;
  }> = [];

  csstree.walk(ast, {
    visit: 'Declaration',
    enter(node: csstree.Declaration) {
      const loc = node.loc;
      declarations.push({
        property: node.property,
        value: csstree.generate(node.value),
        valueNode: node.value,
        line: loc?.start?.line ?? 0,
        column: loc?.start?.column ?? 0,
      });
    },
  });

  return declarations;
}

/**
 * Convert a byte offset in a string to line and column numbers.
 */
export function getLineAndColumn(
  content: string,
  offset: number
): { line: number; column: number } {
  const lines = content.substring(0, offset).split('\n');
  return {
    line: lines.length,
    column: (lines[lines.length - 1]?.length ?? 0) + 1,
  };
}
