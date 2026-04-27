import React, { forwardRef } from 'react';
import styles from './ActionBar.module.css';

/** Action definition for ActionBar buttons. */
export interface ActionBarAction {
  /** Button label text. */
  label: string;
  /** Click handler. */
  onClick: () => void;
  /** Optional button variant override (for primary action). @default 'primary' */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

/** ActionBar alignment options. */
export type ActionBarAlign = 'left' | 'right' | 'between' | 'center';

export interface ActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Primary action (rendered as UBS Red button by default). */
  primaryAction: ActionBarAction;
  /** Optional secondary action (rendered as outline button). */
  secondaryAction?: ActionBarAction;
  /** Optional tertiary actions (rendered as ghost buttons). */
  tertiaryActions?: ActionBarAction[];
  /** Alignment of actions. @default 'between' */
  align?: ActionBarAlign;
  /** Whether the bar sticks to the bottom of the viewport. @default false */
  sticky?: boolean;
}

const ALIGN_MAP: Record<ActionBarAlign, string> = {
  left: styles.alignLeft,
  right: styles.alignRight,
  between: styles.alignBetween,
  center: styles.alignCenter,
};

/**
 * UBS Design System ActionBar component.
 *
 * A bottom bar pattern for form pages and multi-step workflows:
 * - Primary action (right side by default, UBS Red)
 * - Secondary action (left side, outline style)
 * - Optional tertiary actions (ghost style)
 * - Sticky positioning for long-scroll pages
 *
 * Uses native button elements styled with CSS classes matching the
 * Button component styles. For full Button features (loading, icons),
 * pass custom children via className overrides.
 *
 * @example
 * ```tsx
 * <ActionBar
 *   primaryAction={{ label: 'Submit', onClick: handleSubmit }}
 *   secondaryAction={{ label: 'Cancel', onClick: handleCancel }}
 *   sticky
 * />
 * ```
 */
export const ActionBar = forwardRef<HTMLDivElement, ActionBarProps>(
  (
    {
      primaryAction,
      secondaryAction,
      tertiaryActions,
      align = 'between',
      sticky = false,
      className,
      ...rest
    },
    ref
  ) => {
    const classNames = [
      styles.actionBar,
      ALIGN_MAP[align],
      sticky ? styles.sticky : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    // When align is 'between', group secondary/tertiary on the left and primary on the right
    const useSplitLayout = align === 'between' && (secondaryAction || (tertiaryActions && tertiaryActions.length > 0));

    return (
      <div ref={ref} className={classNames} role="toolbar" aria-label="Page actions" {...rest}>
        {useSplitLayout ? (
          <>
            <div className={styles.startGroup}>
              {secondaryAction && (
                <button
                  type="button"
                  onClick={secondaryAction.onClick}
                  data-variant={secondaryAction.variant ?? 'outline'}
                >
                  {secondaryAction.label}
                </button>
              )}
              {tertiaryActions?.map((action, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={action.onClick}
                  data-variant={action.variant ?? 'ghost'}
                >
                  {action.label}
                </button>
              ))}
            </div>
            <div className={styles.endGroup}>
              <button
                type="button"
                onClick={primaryAction.onClick}
                data-variant={primaryAction.variant ?? 'primary'}
              >
                {primaryAction.label}
              </button>
            </div>
          </>
        ) : (
          <>
            {tertiaryActions?.map((action, index) => (
              <button
                key={index}
                type="button"
                onClick={action.onClick}
                data-variant={action.variant ?? 'ghost'}
              >
                {action.label}
              </button>
            ))}
            {secondaryAction && (
              <button
                type="button"
                onClick={secondaryAction.onClick}
                data-variant={secondaryAction.variant ?? 'outline'}
              >
                {secondaryAction.label}
              </button>
            )}
            <button
              type="button"
              onClick={primaryAction.onClick}
              data-variant={primaryAction.variant ?? 'primary'}
            >
              {primaryAction.label}
            </button>
          </>
        )}
      </div>
    );
  }
);

ActionBar.displayName = 'ActionBar';
