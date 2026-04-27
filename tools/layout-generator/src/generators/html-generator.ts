/**
 * HTML Generator
 *
 * Generates semantic HTML layout files using Handlebars templates.
 * Outputs UBS CSS class structure with logo placeholder,
 * content areas, and impulse area.
 */

import * as fs from 'fs';
import * as path from 'path';
import Handlebars from 'handlebars';
import { GeneratorOptions, FormatSpec, TemplateData } from '../core/types';
import { getFormatSpec, getColourPalette } from '../core/formats';

// Register Handlebars helpers
Handlebars.registerHelper('capitalise', (str: string) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
});

Handlebars.registerHelper('eq', (a: unknown, b: unknown) => a === b);

/**
 * Load and compile a Handlebars template from the templates directory.
 */
function loadTemplate(templateName: string): HandlebarsTemplateDelegate {
  const templatePath = path.resolve(__dirname, '..', 'templates', `${templateName}.hbs`);

  // Try compiled location first, then source location
  let source: string;
  if (fs.existsSync(templatePath)) {
    source = fs.readFileSync(templatePath, 'utf-8');
  } else {
    // Fallback: look relative to the project root src/templates
    const fallbackPath = path.resolve(__dirname, '..', '..', 'src', 'templates', `${templateName}.hbs`);
    if (fs.existsSync(fallbackPath)) {
      source = fs.readFileSync(fallbackPath, 'utf-8');
    } else {
      throw new Error(`Template not found: ${templateName}.hbs (searched ${templatePath} and ${fallbackPath})`);
    }
  }

  return Handlebars.compile(source);
}

/**
 * Generate the inner body HTML for the given layout type.
 */
function generateBody(options: GeneratorOptions, format: FormatSpec): string {
  const layoutTemplate = options.layout === 'cover' ? 'cover' : 'inside';
  const template = loadTemplate(layoutTemplate);

  const data: TemplateData = {
    format,
    options,
    palette: getColourPalette(options.colourDirection),
  };

  return template(data);
}

/**
 * Generate the complete HTML document.
 */
export function generateHTML(options: GeneratorOptions, inlineCSS?: string): string {
  const format = getFormatSpec(options.format);
  const body = generateBody(options, format);
  const baseTemplate = loadTemplate('base');

  const data: TemplateData & { body: string } = {
    format,
    options,
    palette: getColourPalette(options.colourDirection),
    css: inlineCSS,
    body,
  };

  return baseTemplate(data);
}
