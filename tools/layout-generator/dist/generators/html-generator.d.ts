/**
 * HTML Generator
 *
 * Generates semantic HTML layout files using Handlebars templates.
 * Outputs UBS CSS class structure with logo placeholder,
 * content areas, and impulse area.
 */
import { GeneratorOptions } from '../core/types';
/**
 * Generate the complete HTML document.
 */
export declare function generateHTML(options: GeneratorOptions, inlineCSS?: string): string;
