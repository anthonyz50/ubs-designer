import { default as React } from 'react';

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
declare const BannerBox: React.ForwardRefExoticComponent<BannerBoxProps & React.RefAttributes<HTMLDivElement>>;
export { BannerBox };
