/**
 * @module CTA
 * @description UBS Call-to-Action component.
 *
 * Three variants following UBS CTA brand rules:
 * - **Button CTA:** Bold Frutiger text + arrow, red background, white text
 * - **Text CTA:** UBS Red text + 90-degree arrow aligned to x-height
 * - **URL CTA:** For Moving Frame or white backgrounds, underlined
 *
 * **UBS Rules enforced:**
 * - Arrow angle: 90 degrees (via CTAArrow)
 * - Arrow stroke matches font weight visually
 * - Text CTA colour is always UBS Red (no other colours)
 * - No multiline button text (white-space: nowrap)
 * - No black text CTA
 * - No duplicating CTAs (developer responsibility)
 *
 * @example
 * ```tsx
 * <CTA variant="button" label="Get started" href="/start" />
 * <CTA variant="text" label="Learn more" onClick={handleClick} />
 * <CTA variant="url" label="View report" href="/report" animated />
 * ```
 */
import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { CTAArrow } from './CTAArrow.tsx';
import styles from './CTA.module.css';

/** CTA style variants. */
export type CTAVariant = 'button' | 'text' | 'url';

/** CTA size options. */
export type CTASize = 'sm' | 'md' | 'lg';

/** Arrow stroke width per CTA size (matches font weight visually). */
const ARROW_STROKE_MAP: Record<CTASize, number> = {
  sm: 1.5,
  md: 2,
  lg: 2.5,
};

/** Arrow icon size per CTA size. */
const ARROW_SIZE_MAP: Record<CTASize, number> = {
  sm: 14,
  md: 16,
  lg: 20,
};

type NativeProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export interface CTAProps extends Omit<NativeProps, 'children'> {
  /** CTA style variant. Defaults to `'button'`. */
  variant?: CTAVariant;
  /** Display text. Required. */
  label: string;
  /** Link URL. When provided, renders an `<a>`. Otherwise renders a `<button>`. */
  href?: string;
  /** Click handler. */
  onClick?: (e: React.MouseEvent) => void;
  /** Custom icon to replace the default arrow. Pass `null` to hide the icon. */
  icon?: ReactNode;
  /** Size. Defaults to `'md'`. */
  size?: CTASize;
  /** Enable arrow slide animation on hover. Defaults to `false`. */
  animated?: boolean;
}

/**
 * CTA — UBS Call-to-Action component.
 *
 * Renders as an `<a>` when `href` is provided, otherwise as a `<button>`.
 * Automatically applies the correct arrow stroke weight for the chosen size.
 */
export const CTA = forwardRef<HTMLAnchorElement | HTMLButtonElement, CTAProps>(
  (
    {
      variant = 'button',
      label,
      href,
      onClick,
      icon,
      size = 'md',
      animated = false,
      className,
      ...rest
    },
    ref,
  ) => {
    const classNames = [
      styles.cta,
      styles[variant],
      styles[size],
      animated ? styles.animated : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Resolve arrow icon
    const arrowElement =
      icon === null ? null : (
        icon ?? (
          <CTAArrow
            className={styles.arrow}
            size={ARROW_SIZE_MAP[size]}
            strokeWidth={ARROW_STROKE_MAP[size]}
          />
        )
      );

    const content = (
      <>
        <span className={styles.label}>{label}</span>
        {arrowElement}
      </>
    );

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classNames}
          onClick={onClick}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        className={classNames}
        onClick={onClick}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  },
);

CTA.displayName = 'CTA';

export default CTA;
