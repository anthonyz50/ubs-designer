/**
 * ISO format definitions with UBS brand specifications.
 *
 * All dimensions in mm unless otherwise noted.
 * Impulse width in pt, impulse spacing in mm.
 * Logo size as percentage of page width.
 */
import { ISOFormat, FormatSpec, ColourDirection, ColourPalette } from './types';
export declare const FORMAT_SPECS: Record<ISOFormat, FormatSpec>;
/**
 * Colour direction palettes.
 * Values are UBS brand hex colours.
 */
export declare const COLOUR_PALETTES: Record<ColourDirection, ColourPalette>;
export declare function getFormatSpec(format: ISOFormat): FormatSpec;
export declare function getColourPalette(direction: ColourDirection): ColourPalette;
