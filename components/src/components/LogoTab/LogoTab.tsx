/**
 * @module LogoTab
 * @description UBS Animated Logo Tab for video/motion content.
 *
 * Displays the UBS logo (or partnership logos) as an overlay tab,
 * positioned at a corner of the content area. Supports animated entry
 * and watermark modes.
 *
 * **UBS Rules:**
 * - Standard variant: left-aligned top for animated content
 * - Static (non-animated): right-aligned bottom
 * - Animation: slide in from corner, 500ms, spring easing
 * - Watermark: semi-transparent, stays after animation
 * - Partnership: UBS logo + divider + partner logo
 *
 * @example
 * ```tsx
 * // Standard animated logo tab
 * <LogoTab position="top-left" animated />
 *
 * // Static watermark
 * <LogoTab position="bottom-right" watermark />
 *
 * // Partnership with custom logo
 * <LogoTab variant="partnership" partnerLogo={<img src="/partner.svg" alt="Partner" />} animated />
 * ```
 */
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import styles from './LogoTab.module.css';

/** Logo tab position. */
export type LogoTabPosition = 'top-left' | 'bottom-right';

/** Logo tab variant. */
export type LogoTabVariant = 'standard' | 'partnership';

export interface LogoTabProps extends HTMLAttributes<HTMLDivElement> {
  /** Corner position. Defaults based on animation state: `'top-left'` when animated, `'bottom-right'` when static. */
  position?: LogoTabPosition;
  /** Enable slide-in animation on mount. Defaults to `false`. */
  animated?: boolean;
  /** Watermark mode: semi-transparent, stays visible. Defaults to `false`. */
  watermark?: boolean;
  /** Variant. Defaults to `'standard'`. */
  variant?: LogoTabVariant;
  /** Partner logo element for partnership variant. */
  partnerLogo?: ReactNode;
  /** Custom UBS logo element. If not provided, renders the default UBS keys SVG. */
  customLogo?: ReactNode;
}

/**
 * Default UBS Keys logo as inline SVG.
 * Simplified three-keys mark.
 */
function UBSKeysLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 24"
      height="24"
      fill="none"
      aria-label="UBS"
      role="img"
    >
      {/* Simplified UBS keys logo mark */}
      <rect x="0" y="0" width="80" height="24" rx="0" fill="none" />
      <text
        x="0"
        y="18"
        fontFamily="'Frutiger', Arial, sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="#E60000"
      >
        UBS
      </text>
    </svg>
  );
}

/**
 * LogoTab — Animated UBS logo overlay for video/motion content.
 */
export const LogoTab = forwardRef<HTMLDivElement, LogoTabProps>(
  (
    {
      position: positionProp,
      animated = false,
      watermark = false,
      variant = 'standard',
      partnerLogo,
      customLogo,
      className,
      ...rest
    },
    ref,
  ) => {
    // Default position per UBS rules: top-left for animated, bottom-right for static
    const position = positionProp ?? (animated ? 'top-left' : 'bottom-right');

    const positionClass = position === 'top-left' ? styles.topLeft : styles.bottomRight;

    const classNames = [
      styles.logoTab,
      positionClass,
      animated ? styles.animatedEntry : '',
      watermark ? styles.watermark : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const logoElement = customLogo ?? <UBSKeysLogo className={styles.logo} />;

    return (
      <div ref={ref} className={classNames} {...rest}>
        {logoElement}

        {variant === 'partnership' && partnerLogo && (
          <>
            <div className={styles.partnerDivider} aria-hidden="true" />
            <div className={styles.partnerLogo}>{partnerLogo}</div>
          </>
        )}
      </div>
    );
  },
);

LogoTab.displayName = 'LogoTab';

export default LogoTab;
