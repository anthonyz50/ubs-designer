import { HTMLAttributes, ReactNode } from 'react';

/** Single accordion item definition. */
export interface AccordionItem {
    /** Title displayed in the trigger button. */
    title: ReactNode;
    /** Content shown when the item is expanded. */
    content: ReactNode;
    /** Whether the item is disabled. */
    disabled?: boolean;
}
/** Visual variant of the Accordion. */
export type AccordionVariant = 'default' | 'bordered';
export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Accordion items to render. */
    items: AccordionItem[];
    /** Allow multiple items to be open simultaneously. Defaults to `false`. */
    allowMultiple?: boolean;
    /** Indices of items open by default. */
    defaultOpen?: number[];
    /** Visual variant. Defaults to `'default'`. */
    variant?: AccordionVariant;
}
/**
 * Accordion — expandable content sections with animated transitions.
 *
 * Adheres to WAI-ARIA Accordion pattern with full keyboard support.
 */
export declare const Accordion: import('react').ForwardRefExoticComponent<AccordionProps & import('react').RefAttributes<HTMLDivElement>>;
export default Accordion;
