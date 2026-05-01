/**
 * @module BannerBox
 * @description Promotional/informational banner following UBS brand guidelines.
 *
 * Displays banners for information, promotions, or warnings with optional
 * call-to-action buttons and dismiss functionality.
 *
 * @example
 * ```tsx
 * <BannerBox
 *   title="New feature available"
 *   description="Explore our enhanced portfolio analytics dashboard."
 *   variant="promotional"
 *   action={{ label: 'Learn more', onClick: () => navigate('/analytics') }}
 *   dismissible
 *   onDismiss={() => setDismissed(true)}
 * />
 * ```
 */
import React, { forwardRef, useState } from 'react';
import styles from './BannerBox.module.css';

/** Visual variant of the banner. */
export type BannerBoxVariant = 'info' | 'promotional' | 'warning';

/** Configuration for the banner's call-to-action button. */
export interface BannerBoxAction {
  /** Button label text. */
  label: string;
  /** Click handler for the button. */
  onClick?: () => void;
  /** Optional URL to navigate to. */
  href?: string;
}

/**
 * Props for the {@link BannerBox} component.
 */
export interface BannerBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Banner headline. */
  title: string;
  /** Banner body text. */
  description?: string;
  /** Visual variant controlling colour and icon. @default 'info' */
  variant?: BannerBoxVariant;
  /** Optional CTA button configuration. */
  action?: BannerBoxAction;
  /** Whether the banner can be dismissed. @default false */
  dismissible?: boolean;
  /** Callback fired when the dismiss button is clicked. */
  onDismiss?: () => void;
  /** Optional image URL displayed alongside the content. */
  image?: string;
}

/**
 * Banner component for informational, promotional, or warning messages.
 *
 * Supports dismiss functionality and call-to-action buttons.
 * Uses appropriate ARIA roles for accessibility.
 *
 * @example
 * ```tsx
 * <BannerBox
 *   title="Important notice"
 *   description="Please update your contact details."
 *   variant="warning"
 *   dismissible
 * />
 * ```
 */
const BannerBox = forwardRef<HTMLDivElement, BannerBoxProps>(
  (
    {
      title,
      description,
      variant = 'info',
      action,
      dismissible = false,
      onDismiss,
      image,
      className,
      ...rest
    },
    ref,
  ) => {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) return null;

    const handleDismiss = () => {
      setDismissed(true);
      onDismiss?.();
    };

    const rootClass = [
      styles.root,
      styles[variant],
      image ? styles.withImage : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const role = variant === 'warning' ? 'alert' : 'region';

    return (
      <div
        ref={ref}
        className={rootClass}
        role={role}
        aria-label={title}
        {...rest}
      >
        {/* Icon */}
        <div className={styles.iconWrapper} aria-hidden="true">
          {variant === 'info' && (
            <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
          {variant === 'promotional' && (
            <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {variant === 'warning' && (
            <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
              <path d="M10.29 3.86L1.82 18A2 2 0 003.54 21H20.46A2 2 0 0022.18 18L13.71 3.86A2 2 0 0010.29 3.86Z" stroke="currentColor" strokeWidth="2" />
              <path d="M12 9V13M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          {description && (
            <p className={styles.description}>{description}</p>
          )}
          {action && (
            action.href ? (
              <a
                className={styles.action}
                href={action.href}
                onClick={action.onClick}
              >
                {action.label}
              </a>
            ) : (
              <button
                className={styles.action}
                type="button"
                onClick={action.onClick}
              >
                {action.label}
              </button>
            )
          )}
        </div>

        {/* Image */}
        {image && (
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={image} alt="" loading="lazy" />
          </div>
        )}

        {/* Dismiss */}
        {dismissible && (
          <button
            className={styles.dismiss}
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss banner"
          >
            <svg viewBox="0 0 16 16" fill="none" className={styles.dismissIcon}>
              <path
                d="M4 4L12 12M12 4L4 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>
    );
  },
);

BannerBox.displayName = 'BannerBox';

export { BannerBox };
