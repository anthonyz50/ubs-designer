"use strict";
/**
 * HTML Generator
 *
 * Generates semantic HTML layout files using Handlebars templates.
 * Outputs UBS CSS class structure with logo placeholder,
 * content areas, and impulse area.
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHTML = generateHTML;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const handlebars_1 = __importDefault(require("handlebars"));
const formats_1 = require("../core/formats");
// Register Handlebars helpers
handlebars_1.default.registerHelper('capitalise', (str) => {
    if (!str)
        return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
});
handlebars_1.default.registerHelper('eq', (a, b) => a === b);
/**
 * Load and compile a Handlebars template from the templates directory.
 */
function loadTemplate(templateName) {
    const templatePath = path.resolve(__dirname, '..', 'templates', `${templateName}.hbs`);
    // Try compiled location first, then source location
    let source;
    if (fs.existsSync(templatePath)) {
        source = fs.readFileSync(templatePath, 'utf-8');
    }
    else {
        // Fallback: look relative to the project root src/templates
        const fallbackPath = path.resolve(__dirname, '..', '..', 'src', 'templates', `${templateName}.hbs`);
        if (fs.existsSync(fallbackPath)) {
            source = fs.readFileSync(fallbackPath, 'utf-8');
        }
        else {
            throw new Error(`Template not found: ${templateName}.hbs (searched ${templatePath} and ${fallbackPath})`);
        }
    }
    return handlebars_1.default.compile(source);
}
/**
 * Generate the inner body HTML for the given layout type.
 */
function generateBody(options, format) {
    const layoutTemplate = options.layout === 'cover' ? 'cover' : 'inside';
    const template = loadTemplate(layoutTemplate);
    const data = {
        format,
        options,
        palette: (0, formats_1.getColourPalette)(options.colourDirection),
    };
    return template(data);
}
/**
 * Generate the complete HTML document.
 */
function generateHTML(options, inlineCSS) {
    const format = (0, formats_1.getFormatSpec)(options.format);
    const body = generateBody(options, format);
    const baseTemplate = loadTemplate('base');
    const data = {
        format,
        options,
        palette: (0, formats_1.getColourPalette)(options.colourDirection),
        css: inlineCSS,
        body,
    };
    return baseTemplate(data);
}
//# sourceMappingURL=html-generator.js.map