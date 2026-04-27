/**
 * File parser for CSS/SCSS (using css-tree) and HTML (regex-based).
 */
import * as csstree from 'css-tree';
export type FileType = 'css' | 'scss' | 'html';
export declare function detectFileType(filePath: string): FileType | null;
export declare function readFile(filePath: string): string;
/**
 * Parse CSS/SCSS content into a css-tree AST.
 * For SCSS, we parse in tolerant mode to handle SCSS-specific syntax.
 */
export declare function parseCSS(content: string): csstree.CssNode;
/**
 * Extract inline styles from HTML content.
 * Returns an array of { style, line, column } objects.
 */
export declare function extractInlineStyles(htmlContent: string): Array<{
    style: string;
    line: number;
    column: number;
}>;
/**
 * Extract CSS property-value declarations from a css-tree AST.
 */
export declare function extractDeclarations(ast: csstree.CssNode): Array<{
    property: string;
    value: string;
    valueNode: csstree.CssNode;
    line: number;
    column: number;
}>;
/**
 * Convert a byte offset in a string to line and column numbers.
 */
export declare function getLineAndColumn(content: string, offset: number): {
    line: number;
    column: number;
};
//# sourceMappingURL=parser.d.ts.map