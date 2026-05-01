import { default as React } from 'react';

/** A context option. */
export interface ContextSelectorOption {
    /** Display label. */
    label: string;
    /** The option value. */
    value: string;
    /** Optional description or subtitle. */
    description?: string;
    /** Optional icon or avatar element. */
    icon?: React.ReactNode;
    /** Whether this option is disabled. */
    disabled?: boolean;
}
export interface ContextSelectorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Available context options. */
    options: ContextSelectorOption[];
    /** Currently selected value. */
    value?: string;
    /** Change handler. */
    onChange?: (value: string) => void;
    /** Label text displayed above the selector. */
    label?: string;
    /** Icon element shown alongside the current selection. */
    icon?: React.ReactNode;
    /** Whether the options list is searchable. @default true */
    searchable?: boolean;
    /** Whether the selector is disabled. */
    disabled?: boolean;
    /** Placeholder text when no value is selected. */
    placeholder?: string;
}
/**
 * UBS Design System ContextSelector component.
 *
 * A dropdown for switching contexts such as accounts, workspaces, or
 * portfolios. Displays the current selection with an optional icon/avatar
 * and supports search within the options list.
 *
 * @example
 * ```tsx
 * <ContextSelector
 *   label="Account"
 *   options={[
 *     { label: 'Personal', value: 'personal', description: 'CH-1234' },
 *     { label: 'Business', value: 'business', description: 'CH-5678' },
 *   ]}
 *   value="personal"
 *   onChange={(val) => setAccount(val)}
 *   searchable
 * />
 * ```
 */
export declare const ContextSelector: React.ForwardRefExoticComponent<ContextSelectorProps & React.RefAttributes<HTMLDivElement>>;
