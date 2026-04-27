#!/usr/bin/env node

/**
 * UBS Layout Generator CLI
 *
 * Generates brand-compliant UBS layout files (HTML/CSS) for any ISO format.
 *
 * Usage:
 *   ubs-layout generate --format A4 --layout cover --colour-direction gray
 */

import { Command } from 'commander';
import * as path from 'path';
import {
  ISOFormat,
  LayoutType,
  ImageLayout,
  ColourDirection,
  MovingFrameType,
  OutputType,
  GeneratorOptions,
} from './core/types';
import { FORMAT_SPECS } from './core/formats';
import { generateLayout, writeOutput } from './generators/template-generator';

const VALID_FORMATS: ISOFormat[] = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A6-5', 'A7', 'A8'];
const VALID_LAYOUTS: LayoutType[] = ['cover', 'inside', 'inside-extra-margin'];
const VALID_IMAGE_LAYOUTS: ImageLayout[] = ['full-bleed', 'two-thirds', 'half', 'one-third', 'no-image'];
const VALID_COLOUR_DIRECTIONS: ColourDirection[] = ['gray', 'bordeaux', 'bronze'];
const VALID_MOVING_FRAMES: MovingFrameType[] = ['transparent', 'opaque'];
const VALID_OUTPUT_TYPES: OutputType[] = ['html', 'css', 'both'];

const program = new Command();

program
  .name('ubs-layout')
  .description('UBS Layout Generator — Generate brand-compliant layout files for ISO formats')
  .version('1.0.0');

program
  .command('generate')
  .description('Generate UBS layout files (HTML/CSS)')
  .option(
    '--format <format>',
    `ISO format (${VALID_FORMATS.join('|')})`,
    'A4'
  )
  .option(
    '--layout <layout>',
    `Grid layout type (${VALID_LAYOUTS.join('|')})`,
    'cover'
  )
  .option(
    '--image-layout <imageLayout>',
    `Image layout (${VALID_IMAGE_LAYOUTS.join('|')})`,
    'full-bleed'
  )
  .option(
    '--colour-direction <direction>',
    `Colour direction (${VALID_COLOUR_DIRECTIONS.join('|')})`,
    'gray'
  )
  .option(
    '--impulse',
    'Include UBS Impulse line',
    false
  )
  .option(
    '--moving-frame <type>',
    `Include Moving Frame (${VALID_MOVING_FRAMES.join('|')})`
  )
  .option(
    '--dark-mode',
    'Generate dark mode variant',
    false
  )
  .option(
    '--output <path>',
    'Output directory',
    './output'
  )
  .option(
    '--type <type>',
    `Output type (${VALID_OUTPUT_TYPES.join('|')})`,
    'both'
  )
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

    const options: GeneratorOptions = {
      format: opts.format as ISOFormat,
      layout: opts.layout as LayoutType,
      imageLayout: opts.imageLayout as ImageLayout,
      colourDirection: opts.colourDirection as ColourDirection,
      impulse: opts.impulse,
      movingFrame: opts.movingFrame as MovingFrameType | undefined,
      darkMode: opts.darkMode,
      output: path.resolve(opts.output),
      type: opts.type as OutputType,
    };

    const format = FORMAT_SPECS[options.format];

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
      const result = generateLayout(options);
      const writtenFiles = writeOutput(result, options.output);

      console.log(`  ✓ Generated ${writtenFiles.length} file(s):`);
      for (const file of writtenFiles) {
        console.log(`    → ${file}`);
      }
      console.log('');
    } catch (err) {
      console.error(`  ✗ Generation failed: ${(err as Error).message}`);
      process.exit(1);
    }
  });

program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
