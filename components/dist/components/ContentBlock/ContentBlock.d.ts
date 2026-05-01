import { default as React } from 'react';

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
declare const ContentBlock: React.ForwardRefExoticComponent<ContentBlockProps & React.RefAttributes<HTMLDivElement>>;
export { ContentBlock };
