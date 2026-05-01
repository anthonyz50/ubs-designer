/**
 * @module ContentBlock
 * @description Flexible content container following UBS brand guidelines.
 *
 * A versatile block component for displaying titled content sections
 * with optional media and call-to-action elements.
 *
 * @example
 * ```tsx
 * <ContentBlock
 *   title="Our approach"
 *   media={<img src="/approach.jpg" alt="Our approach" />}
 *   action={{ label: 'Read more', href: '/approach' }}
 *   variant="highlight"
 *   align="center"
 * >
 *   <p>We take a long-term, disciplined approach to wealth management.</p>
 * </ContentBlock>
 * ```
 */
import React, { forwardRef } from 'react';
import styles from './ContentBlock.module.css';

/** Visual variant of the content block. */
export type ContentBlockVariant = 'default' | 'highlight' | 'bordered';

/** Horizontal alignment of the content. */
export type ContentBlockAlign = 'left' | 'center' | 'right';

/** Configuration for the block's call-to-action. */
export interface ContentBlockAction {
  /** Button/link label text. */
  label: string;
  /** Click handler. */
  onClick?: () => void;
  /** Optional URL. */
  href?: string;
}

/**
 * Props for the {@link ContentBlock} component.
 */
export interface ContentBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Block heading. */
  title?: string;
  /** Block content. */
  children?: React.ReactNode;
  /** Optional media element (image, video, illustration). */
  media?: React.ReactNode;
  /** Optional call-to-action configuration. */
  action?: ContentBlockAction;
  /** Visual variant. @default 'default' */
  variant?: ContentBlockVariant;
  /** Content alignment. @default 'left' */
  align?: ContentBlockAlign;
}

/**
 * Flexible content container for building page sections.
 *
 * Supports different visual treatments and content alignment options.
 *
 * @example
 * ```tsx
 * <ContentBlock title="Key figures" variant="bordered" align="center">
 *   <p>$5.7 trillion in invested assets</p>
 * </ContentBlock>
 * ```
 */
const ContentBlock = forwardRef<HTMLDivElement, ContentBlockProps>(
  (
    {
      title,
      children,
      media,
      action,
      variant = 'default',
      align = 'left',
      className,
      ...rest
    },
    ref,
  ) => {
    const rootClass = [
      styles.root,
      styles[variant],
      styles[`align-${align}`],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={rootClass} {...rest}>
        {media && (
          <div className={styles.media}>{media}</div>
        )}
        <div className={styles.content}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {children && <div className={styles.body}>{children}</div>}
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
      </div>
    );
  },
);

ContentBlock.displayName = 'ContentBlock';

export { ContentBlock };
