"use strict";
/**
 * File parser for CSS/SCSS (using css-tree) and HTML (regex-based).
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
exports.detectFileType = detectFileType;
exports.readFile = readFile;
exports.parseCSS = parseCSS;
exports.extractInlineStyles = extractInlineStyles;
exports.extractDeclarations = extractDeclarations;
exports.getLineAndColumn = getLineAndColumn;
const fs = __importStar(require("fs"));
const csstree = __importStar(require("css-tree"));
function detectFileType(filePath) {
    if (filePath.endsWith('.css'))
        return 'css';
    if (filePath.endsWith('.scss') || filePath.endsWith('.sass'))
        return 'scss';
    if (filePath.endsWith('.html') || filePath.endsWith('.htm'))
        return 'html';
    return null;
}
function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}
/**
 * Parse CSS/SCSS content into a css-tree AST.
 * For SCSS, we parse in tolerant mode to handle SCSS-specific syntax.
 */
function parseCSS(content) {
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
function extractInlineStyles(htmlContent) {
    const results = [];
    // Match style="..." attributes
    const styleAttrRegex = /style\s*=\s*"([^"]*)"/gi;
    let match;
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
function extractDeclarations(ast) {
    const declarations = [];
    csstree.walk(ast, {
        visit: 'Declaration',
        enter(node) {
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
function getLineAndColumn(content, offset) {
    const lines = content.substring(0, offset).split('\n');
    return {
        line: lines.length,
        column: (lines[lines.length - 1]?.length ?? 0) + 1,
    };
}
//# sourceMappingURL=parser.js.map