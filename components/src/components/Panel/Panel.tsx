/**
 * @module Panel
 * @description Collapsible panel/container following UBS brand guidelines.
 *
 * A content panel with a header that can be collapsed/expanded.
 * Suitable for sidebar sections, settings groups, and collapsible content areas.
 *
 * @example
 * ```tsx
 * <Panel
 *   title="Account details"
 *   collapsible
 *   defaultOpen
 *   variant="bordered"
 *   headerAction={<Button size="small">Edit</Button>}
 * >
 *   <p>Account information goes here.</p>
 * </Panel>
 * ```
 */
import React, { forwardRef, useState, useCallback, useId } from 'react';
import styles from './Panel.module.css';

/** Visual variant of the panel. */
export type PanelVariant = 'default' | 'bordered' | 'elevated';

/**
 * Props for the {@link Panel} component.
 */
export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Panel heading text. */
  title: string;
  /** Panel body content. */
  children?: React.ReactNode;
  /** Whether the panel starts in the expanded state. @default true */
  defaultOpen?: boolean;
  /** Whether the panel can be collapsed. @default false */
  collapsible?: boolean;
  /** Visual variant. @default 'default' */
  variant?: PanelVariant;
  /** Optional action element rendered in the header (e.g. a button). */
  headerAction?: React.ReactNode;
}

/**
 * Collapsible panel component with header and content body.
 *
 * Uses proper ARIA attributes for expand/collapse state.
 * Keyboard accessible with Enter and Space to toggle.
 *
 * @example
 * ```tsx
 * <Panel title="Settings" collapsible variant="elevated">
 *   <p>Settings content</p>
 * </Panel>
 * ```
 */
const Panel = forwardRef<HTMLDivElement, PanelProps>(
  (
    {
      title,
      children,
      defaultOpen = true,
      collapsible = false,
      variant = 'default',
      headerAction,
      className,
      ...rest
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const contentId = useId();
    const headerId = useId();

    const handleToggle = useCallback(() => {
      if (collapsible) {
        setIsOpen((prev) => !prev);
      }
    }, [collapsible]);

    const rootClass = [
      styles.root,
      styles[variant],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const headerElement = collapsible ? (
      <button
        className={styles.headerButton}
        type="button"
        id={headerId}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className={styles.titleText}>{title}</span>
        <div className={styles.headerRight}>
          {headerAction && (
            <span
              className={styles.headerAction}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
              role="presentation"
            >
              {headerAction}
            </span>
          )}
          <svg
            className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    ) : (
      <div className={styles.headerStatic} id={headerId}>
        <span className={styles.titleText}>{title}</span>
        {headerAction && (
          <span className={styles.headerAction}>{headerAction}</span>
        )}
      </div>
    );

    return (
      <div ref={ref} className={rootClass} {...rest}>
        <div className={styles.header}>
          {headerElement}
        </div>
        <div
          id={contentId}
          className={`${styles.content} ${isOpen ? styles.contentOpen : styles.contentClosed}`}
          role="region"
          aria-labelledby={headerId}
          hidden={!isOpen}
        >
          <div className={styles.contentInner}>{children}</div>
        </div>
      </div>
    );
  },
);

Panel.displayName = 'Panel';

export { Panel };
