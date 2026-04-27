"use strict";
/**
 * Template Generator
 *
 * Combines HTML + CSS into a single self-contained file.
 * Includes inline CSS custom properties and print-ready
 * @page rules for the chosen ISO format.
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
exports.generateLayout = generateLayout;
exports.writeOutput = writeOutput;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const formats_1 = require("../core/formats");
const css_generator_1 = require("./css-generator");
const html_generator_1 = require("./html-generator");
/**
 * Generate all requested output files.
 */
function generateLayout(options) {
    const format = (0, formats_1.getFormatSpec)(options.format);
    const result = { files: [] };
    const formatSlug = options.format.toLowerCase().replace('-', '');
    const baseFilename = `ubs-${options.layout}-${formatSlug}`;
    // Generate CSS
    if (options.type === 'css' || options.type === 'both') {
        const css = (0, css_generator_1.generateCSS)(options);
        result.css = css;
        result.files.push({
            filename: `${baseFilename}.css`,
            content: css,
        });
    }
    // Generate HTML
    if (options.type === 'html' || options.type === 'both') {
        // For standalone HTML, embed minimal inline styles
        const html = (0, html_generator_1.generateHTML)(options);
        result.html = html;
        result.files.push({
            filename: `${baseFilename}.html`,
            content: html,
        });
    }
    // Always generate combined template
    if (options.type === 'both') {
        const css = result.css || (0, css_generator_1.generateCSS)(options);
        const combined = (0, html_generator_1.generateHTML)(options, css);
        result.combined = combined;
        result.files.push({
            filename: `${baseFilename}-complete.html`,
            content: combined,
        });
    }
    return result;
}
/**
 * Write generated files to the output directory.
 */
function writeOutput(result, outputDir) {
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    const writtenFiles = [];
    for (const file of result.files) {
        const filePath = path.join(outputDir, file.filename);
        fs.writeFileSync(filePath, file.content, 'utf-8');
        writtenFiles.push(filePath);
    }
    return writtenFiles;
}
//# sourceMappingURL=template-generator.js.map