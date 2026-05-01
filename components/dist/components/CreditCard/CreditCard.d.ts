import { default as React } from 'react';

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
declare const CreditCard: React.ForwardRefExoticComponent<CreditCardProps & React.RefAttributes<HTMLDivElement>>;
export { CreditCard };
