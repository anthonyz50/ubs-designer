/**
 * Shared types for UBS Layout Generator
 */

export type ISOFormat =
  | 'A0'
  | 'A1'
  | 'A2'
  | 'A3'
  | 'A4'
  | 'A5'
  | 'A6'
  | 'A6-5'
  | 'A7'
  | 'A8';

export type LayoutType = 'cover' | 'inside' | 'inside-extra-margin';

export type ImageLayout =
  | 'full-bleed'
  | 'two-thirds'
  | 'half'
  | 'one-third'
  | 'no-image';

export type ColourDirection = 'gray' | 'bordeaux' | 'bronze';

export type MovingFrameType = 'transparent' | 'opaque';

export type OutputType = 'html' | 'css' | 'both';

export interface FormatSpec {
  /** Format name */
  name: ISOFormat;
  /** Width in mm */
  width: number;
  /** Height in mm */
  height: number;
  /** Margin in mm */
  margin: number;
  /** Impulse line width in pt */
  impulseWidth: number;
  /** Impulse spacing in mm */
  impulseSpacing: number;
  /** Logo size as percentage of page width */
  logoSize: number;
}

export interface ColourPalette {
  name: ColourDirection;
  colours: Record<string, string>;
}

export interface GeneratorOptions {
  format: ISOFormat;
  layout: LayoutType;
  imageLayout: ImageLayout;
  colourDirection: ColourDirection;
  impulse: boolean;
  movingFrame?: MovingFrameType;
  darkMode: boolean;
  output: string;
  type: OutputType;
}

export interface TemplateData {
  format: FormatSpec;
  options: GeneratorOptions;
  palette: ColourPalette;
  css?: string;
}
