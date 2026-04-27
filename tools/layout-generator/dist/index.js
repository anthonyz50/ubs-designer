#!/usr/bin/env node
"use strict";
/**
 * UBS Layout Generator CLI
 *
 * Generates brand-compliant UBS layout files (HTML/CSS) for any ISO format.
 *
 * Usage:
 *   ubs-layout generate --format A4 --layout cover --colour-direction gray
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
const commander_1 = require("commander");
const path = __importStar(require("path"));
const formats_1 = require("./core/formats");
const template_generator_1 = require("./generators/template-generator");
const VALID_FORMATS = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A6-5', 'A7', 'A8'];
const VALID_LAYOUTS = ['cover', 'inside', 'inside-extra-margin'];
const VALID_IMAGE_LAYOUTS = ['full-bleed', 'two-thirds', 'half', 'one-third', 'no-image'];
const VALID_COLOUR_DIRECTIONS = ['gray', 'bordeaux', 'bronze'];
const VALID_MOVING_FRAMES = ['transparent', 'opaque'];
const VALID_OUTPUT_TYPES = ['html', 'css', 'both'];
const program = new commander_1.Command();
program
    .name('ubs-layout')
    .description('UBS Layout Generator — Generate brand-compliant layout files for ISO formats')
    .version('1.0.0');
program
    .command('generate')
    .description('Generate UBS layout files (HTML/CSS)')
    .option('--format <format>', `ISO format (${VALID_FORMATS.join('|')})`, 'A4')
    .option('--layout <layout>', `Grid layout type (${VALID_LAYOUTS.join('|')})`, 'cover')
    .option('--image-layout <imageLayout>', `Image layout (${VALID_IMAGE_LAYOUTS.join('|')})`, 'full-bleed')
    .option('--colour-direction <direction>', `Colour direction (${VALID_COLOUR_DIRECTIONS.join('|')})`, 'gray')
    .option('--impulse', 'Include UBS Impulse line', false)
    .option('--moving-frame <type>', `Include Moving Frame (${VALID_MOVING_FRAMES.join('|')})`)
    .option('--dark-mode', 'Generate dark mode variant', false)
    .option('--output <path>', 'Output directory', './output')
    .option('--type <type>', `Output type (${VALID_OUTPUT_TYPES.join('|')})`, 'both')
    .action((opts) => {
    // Validate format
    if (!VALID_FORMATS.includes(opts.format)) {
        console.error(`Error: Invalid format "${opts.format}". Valid formats: ${VALID_FORMATS.join(', ')}`);
        process.exit(1);
    }
    // Validate layout
    if (!VALID_LAYOUTS.includes(opts.layout)) {
        console.error(`Error: Invalid layout "${opts.layout}". Valid layouts: ${VALID_LAYOUTS.join(', ')}`);
        process.exit(1);
    }
    // Validate image layout
    if (!VALID_IMAGE_LAYOUTS.includes(opts.imageLayout)) {
        console.error(`Error: Invalid image layout "${opts.imageLayout}". Valid options: ${VALID_IMAGE_LAYOUTS.join(', ')}`);
        process.exit(1);
    }
    // Validate colour direction
    if (!VALID_COLOUR_DIRECTIONS.includes(opts.colourDirection)) {
        console.error(`Error: Invalid colour direction "${opts.colourDirection}". Valid options: ${VALID_COLOUR_DIRECTIONS.join(', ')}`);
        process.exit(1);
    }
    // Validate moving frame (if provided)
    if (opts.movingFrame && !VALID_MOVING_FRAMES.includes(opts.movingFrame)) {
        console.error(`Error: Invalid moving frame type "${opts.movingFrame}". Valid options: ${VALID_MOVING_FRAMES.join(', ')}`);
        process.exit(1);
    }
    // Validate output type
    if (!VALID_OUTPUT_TYPES.includes(opts.type)) {
        console.error(`Error: Invalid output type "${opts.type}". Valid options: ${VALID_OUTPUT_TYPES.join(', ')}`);
        process.exit(1);
    }
    const options = {
        format: opts.format,
        layout: opts.layout,
        imageLayout: opts.imageLayout,
        colourDirection: opts.colourDirection,
        impulse: opts.impulse,
        movingFrame: opts.movingFrame,
        darkMode: opts.darkMode,
        output: path.resolve(opts.output),
        type: opts.type,
    };
    const format = formats_1.FORMAT_SPECS[options.format];
    console.log('');
    console.log('  UBS Layout Generator');
    console.log('  ─────────────────────');
    console.log(`  Format:           ${format.name} (${format.width}mm × ${format.height}mm)`);
    console.log(`  Margins:          ${format.margin}mm`);
    console.log(`  Layout:           ${options.layout}`);
    console.log(`  Image layout:     ${options.imageLayout}`);
    console.log(`  Colour direction: ${options.colourDirection}`);
    console.log(`  Impulse:          ${options.impulse ? 'yes' : 'no'}`);
    console.log(`  Moving frame:     ${options.movingFrame || 'none'}`);
    console.log(`  Dark mode:        ${options.darkMode ? 'yes' : 'no'}`);
    console.log(`  Output type:      ${options.type}`);
    console.log(`  Output dir:       ${options.output}`);
    console.log('');
    try {
        const result = (0, template_generator_1.generateLayout)(options);
        const writtenFiles = (0, template_generator_1.writeOutput)(result, options.output);
        console.log(`  ✓ Generated ${writtenFiles.length} file(s):`);
        for (const file of writtenFiles) {
            console.log(`    → ${file}`);
        }
        console.log('');
    }
    catch (err) {
        console.error(`  ✗ Generation failed: ${err.message}`);
        process.exit(1);
    }
});
program.parse(process.argv);
// Show help if no command provided
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
//# sourceMappingURL=index.js.map