import React, { forwardRef, useEffect } from 'react';
import styles from './Typography.module.css';

/**
 * UBS Typography hierarchy variants.
 * Maps to the 16-level UBS type system defined in the brand guidelines.
 */
export type TypographyVariant =
  | 'keyline'
  | 'infoline'
  | 'subheadline1'
  | 'subheadline2'
  | 'subheadline3'
  | 'subheadline4'
  | 'leadText1'
  | 'leadText2'
  | 'quotes'
  | 'subtitles'
  | 'copyText'
  | 'pageNumbers'
  | 'senderInfo'
  | 'smallCopyText'
  | 'environmentalInfo'
  | 'captions'
  | 'footnote';

/** Allowed font weights per UBS guidelines: light, roman, bold. */
export type TypographyWeight = 300 | 400 | 700 | 'light' | 'roman' | 'bold';

/** Polymorphic element type for Typography. */
export type TypographyElement =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'p' | 'span' | 'div' | 'label' | 'figcaption' | 'blockquote' | 'cite'
  | 'small' | 'strong' | 'em';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /** Typography variant from the UBS type hierarchy. @default 'copyText' */
  variant?: TypographyVariant;
  /** Polymorphic element to render as. Defaults based on variant. */
  as?: TypographyElement;
  /** Text colour. Must be a valid CSS colour value. UBS Red must NOT be used for numbers. */
  colour?: string;
  /** Font weight: 300 (light), 400 (roman), 700 (bold). Overrides the variant default. */
  weight?: TypographyWeight;
  /** Content. */
  children?: React.ReactNode;
}

/** Default HTML elements for each variant. */
const DEFAULT_ELEMENTS: Record<TypographyVariant, TypographyElement> = {
  keyline: 'h1',
  infoline: 'p',
  subheadline1: 'h2',
  subheadline2: 'h3',
  subheadline3: 'h4',
  subheadline4: 'h5',
  leadText1: 'p',
  leadText2: 'p',
  quotes: 'blockquote',
  subtitles: 'h6',
  copyText: 'p',
  pageNumbers: 'span',
  senderInfo: 'span',
  smallCopyText: 'p',
  environmentalInfo: 'small',
  captions: 'figcaption',
  footnote: 'small',
};

/** Resolve named weight to numeric. */
function resolveWeight(w?: TypographyWeight): number | undefined {
  if (w === undefined) return undefined;
  if (w === 'light') return 300;
  if (w === 'roman') return 400;
  if (w === 'bold') return 700;
  return w;
}

/**
 * Check if text contains red-coloured numbers, which violates UBS brand rules.
 * UBS Red (#E60000) must never be used for numbers.
 */
function containsNumbers(children: React.ReactNode): boolean {
  if (typeof children === 'number') return true;
  if (typeof children === 'string') return /\d/.test(children);
  if (Array.isArray(children)) return children.some(containsNumbers);
  return false;
}

function isRedColour(colour?: string): boolean {
  if (!colour) return false;
  const normalised = colour.toLowerCase().replace(/\s/g, '');
  return (
    normalised === '#e60000' ||
    normalised === '#d83b31' ||
    normalised === '#fe6f5d' ||
    normalised === 'red' ||
    normalised === '#bd000c'
  );
}

/**
 * UBS Design System Typography component.
 *
 * Implements the complete UBS 16-level type hierarchy with brand enforcement:
 * - Font: Frutiger (fallback Arial)
 * - Weights: light (300), roman (400), bold (700)
 * - Red is never applied to numbers (dev warning)
 * - No text shadows, no justified or right-aligned text
 * - WCAG 2.2 AA contrast compliant
 *
 * @example
 * ```tsx
 * <Typography variant="keyline">Welcome to UBS</Typography>
 * <Typography variant="copyText" weight="bold">Important notice</Typography>
 * <Typography variant="quotes" as="p" colour="#404040">
 *   "Excellence in everything we do."
 * </Typography>
 * ```
 */
export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = 'copyText',
      as,
      colour,
      weight,
      children,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    // UBS Rule: Never use red for numbers
    useEffect(() => {
      if (
        typeof window !== 'undefined' &&
        isRedColour(colour) &&
        containsNumbers(children)
      ) {
        console.warn(
          '[UBS Typography] Red must NOT be used for numbers. ' +
          'This violates UBS brand guidelines. ' +
          `Variant: "${variant}", colour: "${colour}".`
        );
      }
    }, [colour, children, variant]);

    const Component = as ?? DEFAULT_ELEMENTS[variant];
    const resolvedWeight = resolveWeight(weight);

    const classNames = [
      styles.typography,
      styles[variant],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const inlineStyle: React.CSSProperties = {
      ...style,
      ...(colour ? { color: colour } : {}),
      ...(resolvedWeight ? { fontWeight: resolvedWeight } : {}),
    };

    return React.createElement(
      Component,
      {
        ref,
        className: classNames,
        style: Object.keys(inlineStyle).length > 0 ? inlineStyle : undefined,
        ...rest,
      },
      children
    );
  }
);

Typography.displayName = 'Typography';
