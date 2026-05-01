/**
 * @module CountryFlag
 * @description Country flag display following UBS brand guidelines.
 *
 * Renders a country flag using emoji with an optional country name label.
 * Uses ISO 3166-1 alpha-2 country codes for flag resolution.
 *
 * @example
 * ```tsx
 * <CountryFlag country="CH" size="medium" showLabel />
 * <CountryFlag country="GB" label="United Kingdom" size="large" />
 * ```
 */
import React, { forwardRef, useMemo } from 'react';
import styles from './CountryFlag.module.css';

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

/** Map of common ISO codes to country names for accessible labels. */
const COUNTRY_NAMES: Record<string, string> = {
  CH: 'Switzerland',
  GB: 'United Kingdom',
  US: 'United States',
  DE: 'Germany',
  FR: 'France',
  IT: 'Italy',
  JP: 'Japan',
  CN: 'China',
  HK: 'Hong Kong',
  SG: 'Singapore',
  AU: 'Australia',
  BR: 'Brazil',
  CA: 'Canada',
  IN: 'India',
  LU: 'Luxembourg',
  NL: 'Netherlands',
  ES: 'Spain',
  SE: 'Sweden',
  AE: 'United Arab Emirates',
  IE: 'Ireland',
};

/**
 * Convert an ISO 3166-1 alpha-2 code to a flag emoji.
 * Each letter is offset to the regional indicator symbol range.
 */
function isoToEmoji(code: string): string {
  const upper = code.toUpperCase();
  if (upper.length !== 2) return '';
  const codePoints = [...upper].map(
    (char) => 0x1f1e6 + char.charCodeAt(0) - 65,
  );
  return String.fromCodePoint(...codePoints);
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
const CountryFlag = forwardRef<HTMLSpanElement, CountryFlagProps>(
  (
    {
      country,
      size = 'medium',
      showLabel = false,
      label,
      className,
      ...rest
    },
    ref,
  ) => {
    const code = country.toUpperCase();
    const emoji = useMemo(() => isoToEmoji(code), [code]);
    const countryName = label || COUNTRY_NAMES[code] || code;

    const rootClass = [
      styles.root,
      styles[size],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span
        ref={ref}
        className={rootClass}
        aria-label={`Flag of ${countryName}`}
        role="img"
        {...rest}
      >
        <span className={styles.flag} aria-hidden="true">
          {emoji}
        </span>
        {(showLabel || label) && (
          <span className={styles.label}>{countryName}</span>
        )}
      </span>
    );
  },
);

CountryFlag.displayName = 'CountryFlag';

export { CountryFlag };
