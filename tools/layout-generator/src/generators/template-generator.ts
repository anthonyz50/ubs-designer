/**
 * Template Generator
 *
 * Combines HTML + CSS into a single self-contained file.
 * Includes inline CSS custom properties and print-ready
 * @page rules for the chosen ISO format.
 */

import * as fs from 'fs';
import * as path from 'path';
import { GeneratorOptions } from '../core/types';
import { getFormatSpec } from '../core/formats';
import { generateCSS } from './css-generator';
import { generateHTML } from './html-generator';

export interface GenerationResult {
  html?: string;
  css?: string;
  combined?: string;
  files: Array<{ filename: string; content: string }>;
}

/**
 * Generate all requested output files.
 */
export function generateLayout(options: GeneratorOptions): GenerationResult {
  const format = getFormatSpec(options.format);
  const result: GenerationResult = { files: [] };

  const formatSlug = options.format.toLowerCase().replace('-', '');
  const baseFilename = `ubs-${options.layout}-${formatSlug}`;

  // Generate CSS
  if (options.type === 'css' || options.type === 'both') {
    const css = generateCSS(options);
    result.css = css;
    result.files.push({
      filename: `${baseFilename}.css`,
      content: css,
    });
  }

  // Generate HTML
  if (options.type === 'html' || options.type === 'both') {
    // For standalone HTML, embed minimal inline styles
    const html = generateHTML(options);
    result.html = html;
    result.files.push({
      filename: `${baseFilename}.html`,
      content: html,
    });
  }

  // Always generate combined template
  if (options.type === 'both') {
    const css = result.css || generateCSS(options);
    const combined = generateHTML(options, css);
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
export function writeOutput(result: GenerationResult, outputDir: string): string[] {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const writtenFiles: string[] = [];

  for (const file of result.files) {
    const filePath = path.join(outputDir, file.filename);
    fs.writeFileSync(filePath, file.content, 'utf-8');
    writtenFiles.push(filePath);
  }

  return writtenFiles;
}
