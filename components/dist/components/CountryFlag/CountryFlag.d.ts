import { default as React } from 'react';

/** Size of the flag display. */
export type CountryFlagSize = 'small' | 'medium' | 'large';
/**
 * Props for the {@link CountryFlag} component.
 */
export interface CountryFlagProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** ISO 3166-1 alpha-2 country code (e.g. 'CH', 'GB', 'US'). */
    country: string;
    /** Size variant. @default 'medium' */
    size?: CountryFlagSize;
    /** Whether to display the country code as a label. @default false */
    showLabel?: boolean;
    /** Custom label text. Overrides the country code display. */
    label?: string;
}
/**
 * Country flag component displaying an emoji flag with optional label.
 *
 * Provides an accessible name via `aria-label` for screen readers.
 *
 * @example
 * ```tsx
 * <CountryFlag country="US" showLabel size="small" />
 * ```
 */
declare const CountryFlag: React.ForwardRefExoticComponent<CountryFlagProps & React.RefAttributes<HTMLSpanElement>>;
export { CountryFlag };
