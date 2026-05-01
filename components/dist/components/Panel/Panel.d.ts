import { default as React } from 'react';

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
declare const Panel: React.ForwardRefExoticComponent<PanelProps & React.RefAttributes<HTMLDivElement>>;
export { Panel };
