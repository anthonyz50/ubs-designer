/**
 * UBS Design System — CTA Arrow Icon
 *
 * Standalone SVG arrow at 90 degrees (pointing right-up at 45°, rendered as a
 * right-angle arrow per UBS CTA rules). Animatable with CSS transitions.
 *
 * UBS Rules:
 * - Arrow angle: 90 degrees (right-angled, not curved)
 * - Arrow stroke weight matches the accompanying font weight visually
 *
 * @example
 * ```tsx
 * <CTAArrow size={16} strokeWidth={2} />
 * <CTAArrow size={20} strokeWidth={2.5} className="hover-slide" />
 * ```
 */
import { forwardRef, type SVGAttributes } from 'react';

export interface CTAArrowProps extends SVGAttributes<SVGSVGElement> {
  /** Icon size in pixels. Defaults to 16. */
  size?: number;
  /**
   * Stroke width of the arrow lines.
   * Should match the visual weight of the accompanying text.
   * Defaults to 2.
   */
  strokeWidth?: number;
  /** Arrow colour. Defaults to 'currentColor'. */
  colour?: string;
}

/**
 * CTAArrow — UBS 90-degree arrow icon for CTA components.
 *
 * Renders a right-angle arrow (→ with 90° corner) using SVG lines.
 * The arrow is aligned to the x-height of text when used inline.
 */
export const CTAArrow = forwardRef<SVGSVGElement, CTAArrowProps>(
  (
    {
      size = 16,
      strokeWidth = 2,
      colour = 'currentColor',
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        className={className}
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
          flexShrink: 0,
          ...style,
        }}
        aria-hidden="true"
        role="presentation"
        {...rest}
      >
        {/*
          90-degree arrow: straight horizontal line with an angled head.
          Path: horizontal shaft + two angled lines forming the arrowhead.
          All corners are 90 degrees per UBS brand rules.
        */}
        <line
          x1="2"
          y1="8"
          x2="12"
          y2="8"
          stroke={colour}
          strokeWidth={strokeWidth}
          strokeLinecap="square"
        />
        {/* Upper arm of arrowhead */}
        <line
          x1="8"
          y1="4"
          x2="12"
          y2="8"
          stroke={colour}
          strokeWidth={strokeWidth}
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        {/* Lower arm of arrowhead */}
        <line
          x1="8"
          y1="12"
          x2="12"
          y2="8"
          stroke={colour}
          strokeWidth={strokeWidth}
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
    );
  },
);

CTAArrow.displayName = 'CTAArrow';

export default CTAArrow;
