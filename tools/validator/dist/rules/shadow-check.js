"use strict";
/**
 * shadow-check: No shadows on brand elements.
 *
 * Checks for box-shadow, text-shadow, and drop-shadow usage.
 * text-shadow is a hard error (per UBS brand rules).
 * box-shadow and drop-shadow are warnings.
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
exports.shadowCheck = void 0;
const csstree = __importStar(require("css-tree"));
const parser_1 = require("../core/parser");
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
            if ((property === '-webkit-box-shadow' || property === '-moz-box-shadow') &&
                value.trim() !== 'none') {
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
exports.shadowCheck = {
    name: 'shadow-check',
    description: 'Checks for prohibited shadow usage on brand elements',
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
//# sourceMappingURL=shadow-check.js.map