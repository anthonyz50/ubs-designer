/**
 * @module CreditCard
 * @description Credit/debit card visual display following UBS brand guidelines.
 *
 * Renders a realistic card representation with masked number, cardholder name,
 * expiry date, and card network logo. Supports standard, premium, and black variants.
 *
 * @example
 * ```tsx
 * <CreditCard
 *   number="4242424242424242"
 *   name="ANTHONY ZSCHERPEL"
 *   expiry="12/28"
 *   type="visa"
 *   variant="premium"
 * />
 * ```
 */
import React, { forwardRef, useMemo } from 'react';
import styles from './CreditCard.module.css';

/** Card network type. */
export type CreditCardType = 'visa' | 'mastercard' | 'amex';

/** Visual variant of the card. */
export type CreditCardVariant = 'standard' | 'premium' | 'black';

/**
 * Props for the {@link CreditCard} component.
 */
export interface CreditCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Full or partial card number. Only the last 4 digits are shown. */
  number: string;
  /** Cardholder name displayed on the card. */
  name: string;
  /** Expiry date string (e.g. '12/28'). */
  expiry: string;
  /** Card network type. @default 'visa' */
  type?: CreditCardType;
  /** Visual variant. @default 'standard' */
  variant?: CreditCardVariant;
}

/**
 * Mask a card number, showing only the last 4 digits.
 */
function maskNumber(num: string, cardType: CreditCardType): string {
  const digits = num.replace(/\D/g, '');
  const last4 = digits.slice(-4);
  if (cardType === 'amex') {
    return `\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022\u2022\u2022 \u2022${last4}`;
  }
  return `\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ${last4}`;
}

/**
 * Credit card visual component displaying a card-shaped representation.
 *
 * The card number is automatically masked for security. Only the last 4 digits
 * are shown. Includes proper ARIA labelling for accessibility.
 *
 * @example
 * ```tsx
 * <CreditCard
 *   number="5500000000004444"
 *   name="J. DOE"
 *   expiry="06/26"
 *   type="mastercard"
 *   variant="black"
 * />
 * ```
 */
const CreditCard = forwardRef<HTMLDivElement, CreditCardProps>(
  (
    {
      number,
      name,
      expiry,
      type = 'visa',
      variant = 'standard',
      className,
      ...rest
    },
    ref,
  ) => {
    const masked = useMemo(() => maskNumber(number, type), [number, type]);
    const last4 = number.replace(/\D/g, '').slice(-4);

    const rootClass = [
      styles.root,
      styles[variant],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={rootClass}
        role="img"
        aria-label={`${type} card ending in ${last4}, ${name}, expires ${expiry}`}
        {...rest}
      >
        {/* Card network logo */}
        <div className={styles.header}>
          <div className={styles.chip} aria-hidden="true">
            <svg viewBox="0 0 40 30" className={styles.chipSvg}>
              <rect x="2" y="2" width="36" height="26" rx="4" fill="currentColor" opacity="0.3" />
              <rect x="6" y="6" width="28" height="18" rx="2" fill="currentColor" opacity="0.5" />
              <line x1="20" y1="6" x2="20" y2="24" stroke="currentColor" opacity="0.3" strokeWidth="1" />
              <line x1="6" y1="15" x2="34" y2="15" stroke="currentColor" opacity="0.3" strokeWidth="1" />
            </svg>
          </div>
          <div className={styles.network} aria-hidden="true">
            {type === 'visa' && (
              <span className={styles.networkText}>VISA</span>
            )}
            {type === 'mastercard' && (
              <svg viewBox="0 0 48 30" className={styles.networkSvg}>
                <circle cx="18" cy="15" r="12" fill="#eb001b" opacity="0.8" />
                <circle cx="30" cy="15" r="12" fill="#f79e1b" opacity="0.8" />
              </svg>
            )}
            {type === 'amex' && (
              <span className={styles.networkText}>AMEX</span>
            )}
          </div>
        </div>

        {/* Card number */}
        <div className={styles.number} aria-hidden="true">
          {masked}
        </div>

        {/* Footer: name and expiry */}
        <div className={styles.footer}>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>Card Holder</span>
            <span className={styles.detailValue}>{name}</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>Expires</span>
            <span className={styles.detailValue}>{expiry}</span>
          </div>
        </div>
      </div>
    );
  },
);

CreditCard.displayName = 'CreditCard';

export { CreditCard };
