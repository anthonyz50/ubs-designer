/**
 * Template Generator
 *
 * Combines HTML + CSS into a single self-contained file.
 * Includes inline CSS custom properties and print-ready
 * @page rules for the chosen ISO format.
 */
import { GeneratorOptions } from '../core/types';
export interface GenerationResult {
    html?: string;
    css?: string;
    combined?: string;
    files: Array<{
        filename: string;
        content: string;
    }>;
}
/**
 * Generate all requested output files.
 */
export declare function generateLayout(options: GeneratorOptions): GenerationResult;
/**
 * Write generated files to the output directory.
 */
export declare function writeOutput(result: GenerationResult, outputDir: string): string[];
