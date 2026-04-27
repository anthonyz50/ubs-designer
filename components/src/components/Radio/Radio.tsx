import React, { forwardRef, useId } from 'react';
import styles from './Radio.module.css';

/** Radio size options. */
export type RadioSize = 'sm' | 'md';

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Label text displayed beside the radio. */
  label: string;
  /** The value of this radio option. */
  value: string;
  /** Whether this radio is checked. */
  checked?: boolean;
  /** Change handler. */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Whether the radio is disabled. */
  disabled?: boolean;
  /** The name attribute for grouping radios. */
  name?: string;
  /** Size of the radio. @default 'md' */
  size?: RadioSize;
}

/**
 * UBS Design System Radio component.
 *
 * A custom-styled radio button with UBS Red fill when selected
 * and 44px minimum touch target. Use with RadioGroup for managed groups.
 *
 * @example
 * ```tsx
 * <Radio
 *   label="Option A"
 *   value="a"
 *   name="example"
 *   checked={selected === 'a'}
 *   onChange={(e) => setSelected(e.target.value)}
 * />
 * ```
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      value,
      checked = false,
      onChange,
      disabled = false,
      name,
      size = 'md',
      className,
      id: providedId,
      ...rest
    },
    ref
  ) => {
    const autoId = useId();
    const radioId = providedId ?? `ubs-radio-${autoId}`;

    const containerClassNames = [
      styles.container,
      styles[size],
      disabled ? styles.disabled : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label htmlFor={radioId} className={containerClassNames}>
        <input
          ref={ref}
          id={radioId}
          type="radio"
          className={styles.nativeInput}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
        <span className={styles.circle} aria-hidden="true">
          <span className={styles.dot} />
        </span>
        <span className={styles.label}>{label}</span>
      </label>
    );
  }
);

Radio.displayName = 'Radio';

/* ─── RadioGroup ──────────────────────────────────────────────────── */

export interface RadioGroupProps {
  /** Group label displayed above the radio options. */
  label?: string;
  /** The name shared by all radios in the group. */
  name: string;
  /** The currently selected value. */
  value?: string;
  /** Change handler. */
  onChange?: (value: string) => void;
  /** Whether the group is required. */
  required?: boolean;
  /** Whether the group is disabled. */
  disabled?: boolean;
  /** Error message displayed below the group. */
  error?: string;
  /** The Radio children. */
  children: React.ReactNode;
  /** Additional CSS class name. */
  className?: string;
}

/**
 * UBS Design System RadioGroup component.
 *
 * Wraps multiple Radio components, providing a shared name,
 * value management, and group-level label/error display.
 *
 * @example
 * ```tsx
 * <RadioGroup
 *   label="Preferred contact method"
 *   name="contact"
 *   value={contactMethod}
 *   onChange={setContactMethod}
 * >
 *   <Radio label="Email" value="email" />
 *   <Radio label="Phone" value="phone" />
 *   <Radio label="Post" value="post" />
 * </RadioGroup>
 * ```
 */
export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  (
    {
      label,
      name,
      value,
      onChange,
      required = false,
      disabled = false,
      error,
      children,
      className,
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const enhancedChildren = React.Children.map(children, (child) => {
      if (React.isValidElement<RadioProps>(child)) {
        return React.cloneElement(child, {
          name,
          checked: child.props.value === value,
          onChange: handleChange,
          disabled: disabled || child.props.disabled,
        });
      }
      return child;
    });

    const groupClassNames = [styles.group, className ?? '']
      .filter(Boolean)
      .join(' ');

    return (
      <fieldset ref={ref} className={groupClassNames} role="radiogroup">
        {label && (
          <legend
            className={`${styles.groupLabel}${required ? ` ${styles.groupRequired}` : ''}`}
          >
            {label}
          </legend>
        )}
        {enhancedChildren}
        {error && (
          <p className={styles.groupError} role="alert">
            {error}
          </p>
        )}
      </fieldset>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';
