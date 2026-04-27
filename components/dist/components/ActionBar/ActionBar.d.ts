import { default as React } from 'react';

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
export declare const ActionBar: React.ForwardRefExoticComponent<ActionBarProps & React.RefAttributes<HTMLDivElement>>;
