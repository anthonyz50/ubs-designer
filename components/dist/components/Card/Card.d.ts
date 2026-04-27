import { default as React } from 'react';

/** Card background variant following UBS colour palette. */
export type CardVariant = 'default' | 'pastel1' | 'pastel2' | 'gray';
/** Card padding sizes. */
export type CardPadding = 'none' | 'small' | 'medium' | 'large';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Background variant. @default 'default' */
    variant?: CardVariant;
    /** Padding size. @default 'medium' */
    padding?: CardPadding;
    /** Whether the card shows a hover effect. @default false */
    hoverable?: boolean;
    /** Optional header slot content. */
    header?: React.ReactNode;
    /** Optional footer slot content. */
    footer?: React.ReactNode;
    /** Card body content. */
    children?: React.ReactNode;
}
/**
 * UBS Design System Card component.
 *
 * A container component following UBS brand guidelines:
 * - Default: white background (#FFFFFF)
 * - Pastel I: #ECEBE4 background
 * - Pastel II: #F5F0E1 background
 * - Gray: Gray I (#CCCABC) background
 * - No box shadows (clean, flat design per UBS brand)
 * - Optional header, body, and footer slots
 * - Hoverable state for interactive cards
 *
 * @example
 * ```tsx
 * <Card variant="default" padding="medium" hoverable>
 *   <p>Card content here</p>
 * </Card>
 *
 * <Card
 *   variant="pastel1"
 *   header={<h3>Title</h3>}
 *   footer={<Button variant="primary">Action</Button>}
 * >
 *   <p>Card body</p>
 * </Card>
 * ```
 */
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
