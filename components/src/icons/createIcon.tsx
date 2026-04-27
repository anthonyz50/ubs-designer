/**
 * @module icons/createIcon
 * @description Higher-order component factory for creating consistent SVG icon components.
 *
 * Wraps SVG path definitions into a fully-featured React icon component with:
 * - Configurable size (sm/md/lg or custom number)
 * - Colour and accent colour props
 * - Proper accessibility attributes
 * - forwardRef support
 */
import { forwardRef, type ReactElement } from 'react';
import { type IconSVGProps, SIZE_MAP, UBS_ICON_COLOURS } from './types';

export interface CreateIconOptions {
  /** Display name for the component. */
  displayName: string;
  /** Default viewBox (e.g. '0 0 24 24' for webapp, '0 0 48 48' for illustrative). */
  viewBox: string;
  /** Default size if none provided. */
  defaultSize?: number | 'sm' | 'md' | 'lg';
  /** Whether this is an illustrative icon (enables accent colour). */
  illustrative?: boolean;
  /**
   * Render function that receives resolved colours and returns SVG children.
   * @param colour — resolved primary stroke/fill colour
   * @param accentColour — resolved accent colour (only meaningful for illustrative)
   */
  path: (colour: string, accentColour: string) => ReactElement | ReactElement[];
}

/**
 * Creates a reusable SVG icon component.
 *
 * @example
 * ```tsx
 * export const SearchIcon = createIcon({
 *   displayName: 'SearchIcon',
 *   viewBox: '0 0 24 24',
 *   path: (colour) => (
 *     <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35" stroke={colour} />
 *   ),
 * });
 * ```
 */
export function createIcon(options: CreateIconOptions) {
  const {
    displayName,
    viewBox,
    defaultSize = 'lg',
    illustrative = false,
    path,
  } = options;

  const IconComponent = forwardRef<SVGSVGElement, IconSVGProps>(
    (
      {
        size = defaultSize,
        colour = UBS_ICON_COLOURS.black,
        accentColour = illustrative ? UBS_ICON_COLOURS.red : UBS_ICON_COLOURS.black,
        variant = 'default',
        className,
        style,
        ...rest
      },
      ref,
    ) => {
      const resolvedSize = typeof size === 'string' ? (SIZE_MAP[size] ?? 24) : size;
      const resolvedColour = colour;
      const resolvedAccent = variant === 'black' ? resolvedColour : accentColour;

      return (
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          width={resolvedSize}
          height={resolvedSize}
          fill="none"
          aria-hidden="true"
          role="img"
          focusable="false"
          className={className}
          style={style}
          {...rest}
        >
          {path(resolvedColour, resolvedAccent)}
        </svg>
      );
    },
  );

  IconComponent.displayName = displayName;
  return IconComponent;
}
