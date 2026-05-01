import React, { forwardRef } from 'react';
import styles from './Links.module.css';

/**
 * Link variant options following UBS brand guidelines.
 * - `inline`: Within body text, underlined
 * - `standalone`: Standalone link with arrow indicator
 * - `external`: External link with outbound icon indicator
 */
export type LinkVariant = 'inline' | 'standalone' | 'external';

export interface LinksProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Visual variant of the link. @default 'inline' */
  variant?: LinkVariant;
  /** Optional icon element rendered before the label. */
  icon?: React.ReactNode;
  /** Link content. */
  children: React.ReactNode;
}

/**
 * UBS Design System Link component.
 *
 * Implements UBS brand link styling:
 * - UBS Red (#E60000) for link colour
 * - Hover state uses Bordeaux I (#BD000C)
 * - Underline for inline variant
 * - Arrow indicator for standalone variant
 * - External icon indicator for external links
 * - WCAG 2.2 AA compliant focus indicators
 *
 * @example
 * ```tsx
 * <Links href="/about" variant="inline">Learn more</Links>
 *
 * <Links href="/services" variant="standalone">View services</Links>
 *
 * <Links href="https://external.com" variant="external">External site</Links>
 * ```
 */
export const Links = forwardRef<HTMLAnchorElement, LinksProps>(
  (
    {
      variant = 'inline',
      icon,
      children,
      className,
      target,
      rel,
      ...rest
    },
    ref
  ) => {
    const isExternal = variant === 'external';

    const classNames = [
      styles.link,
      styles[variant],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const externalProps = isExternal
      ? {
          target: target ?? '_blank',
          rel: rel ?? 'noopener noreferrer',
        }
      : { target, rel };

    return (
      <a
        ref={ref}
        className={classNames}
        aria-label={isExternal ? `${typeof children === 'string' ? children : ''} (opens in new tab)` : undefined}
        {...externalProps}
        {...rest}
      >
        {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
        <span className={styles.label}>{children}</span>
        {variant === 'standalone' && (
          <span className={styles.arrow} aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 3L11 8L6 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
        {isExternal && (
          <span className={styles.externalIcon} aria-hidden="true">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7.5V11.5C11 12.0523 10.5523 12.5 10 12.5H2.5C1.94772 12.5 1.5 12.0523 1.5 11.5V4C1.5 3.44772 1.94772 3 2.5 3H6.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 1.5H12.5V5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 8.5L12.5 1.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </a>
    );
  }
);

Links.displayName = 'Links';
