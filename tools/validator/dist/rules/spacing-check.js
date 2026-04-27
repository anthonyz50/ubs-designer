"use strict";
/**
 * spacing-check: 4px grid alignment validation.
 *
 * Validates that margin and padding values align to the UBS 4px grid.
 * Allowed values: 0, 4, 8, 12, 16, 24, 32, 48, 64, 96 (and their negatives for margin).
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
exports.spacingCheck = void 0;
const csstree = __importStar(require("css-tree"));
const parser_1 = require("../core/parser");
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
function toPx(value) {
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
    if (pxMatch)
        return parseFloat(pxMatch[1]);
    // We skip rem/em/% etc. as they depend on context
    return null;
}
/**
 * Find the nearest grid value to the given pixel value.
 */
function nearestGridValue(px) {
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
function validateCSSContent(content, file, lineOffset = 0) {
    const issues = [];
    let ast;
    try {
        ast = (0, parser_1.parseCSS)(content);
    }
    catch {
        return issues;
    }
    csstree.walk(ast, {
        visit: 'Declaration',
        enter(node) {
            const property = node.property.toLowerCase();
            if (!SPACING_PROPERTIES.has(property))
                return;
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
                if (px === null)
                    continue; // Skip unconvertible values
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
exports.spacingCheck = {
    name: 'spacing-check',
    description: 'Validates spacing values align to the UBS 4px grid',
    fileTypes: ['css', 'scss', 'html'],
    validate(context) {
        const { file, content, fileType } = context;
        if (fileType === 'html') {
            const styles = (0, parser_1.extractInlineStyles)(content);
            const issues = [];
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
//# sourceMappingURL=spacing-check.js.map