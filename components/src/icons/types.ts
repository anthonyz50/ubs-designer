/**
 * @module icons/types
 * @description Shared type definitions for the UBS icon library.
 */
import type { SVGAttributes } from 'react';

/** Props shared by all SVG icon components. */
export interface IconSVGProps extends SVGAttributes<SVGSVGElement> {
  /** Display size. Named sizes: sm=12, md=16, lg=24. Or pass a custom number. */
  size?: number | 'sm' | 'md' | 'lg';
  /** Primary colour. Defaults to #000000. */
  colour?: string;
  /** Red accent colour for illustrative icons. Defaults to #E60000. */
  accentColour?: string;
  /** Variant: 'default' uses red accent, 'black' is monochrome. */
  variant?: 'default' | 'black';
}

/** Size name to pixel mapping. */
export const SIZE_MAP: Record<string, number> = {
  sm: 12,
  md: 16,
  lg: 24,
} as const;

/** UBS brand colours used in icons. */
export const UBS_ICON_COLOURS = {
  black: '#000000',
  red: '#E60000',
  warmGray1: '#CCCABC',
  warmGray2: '#B8B3A2',
} as const;
