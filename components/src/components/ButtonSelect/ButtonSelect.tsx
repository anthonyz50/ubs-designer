import React, { forwardRef, useCallback } from 'react';
import styles from './ButtonSelect.module.css';

/** A selectable option. */
export interface ButtonSelectOption {
  /** Display label. */
  label: string;
  /** The option value. */
  value: string;
  /** Optional icon element. */
  icon?: React.ReactNode;
  /** Whether this option is disabled. */
  disabled?: boolean;
}

/** ButtonSelect size options. */
export type ButtonSelectSize = 'small' | 'medium' | 'large';

export interface ButtonSelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Available options to select from. */
  options: ButtonSelectOption[];
  /** Current selected value(s). String for single, string[] for multiple. */
  value?: string | string[];
  /** Change handler receiving the new value(s). */
  onChange?: (value: string | string[]) => void;
  /** Whether multiple options can be selected simultaneously. @default false */
  multiple?: boolean;
  /** Size of the buttons. @default 'medium' */
  size?: ButtonSelectSize;
  /** Whether the entire component is disabled. */
  disabled?: boolean;
}

/**
 * UBS Design System ButtonSelect component.
 *
 * A set of button options that toggle selection state. Supports both
 * single-select (radio-like) and multi-select (checkbox-like) modes.
 * Selected buttons use UBS Red to indicate active state.
 *
 * @example
 * ```tsx
 * <ButtonSelect
 *   options={[
 *     { label: 'Day', value: 'day' },
 *     { label: 'Week', value: 'week' },
 *     { label: 'Month', value: 'month' },
 *   ]}
 *   value="week"
 *   onChange={(val) => setView(val as string)}
 * />
 * ```
 */
export const ButtonSelect = forwardRef<HTMLDivElement, ButtonSelectProps>(
  (
    {
      options,
      value,
      onChange,
      multiple = false,
      size = 'medium',
      disabled = false,
      className,
      ...rest
    },
    ref
  ) => {
    const selectedValues: string[] = Array.isArray(value)
      ? value
      : value !== undefined
        ? [value]
        : [];

    const isSelected = useCallback(
      (optValue: string) => selectedValues.includes(optValue),
      [selectedValues]
    );

    const handleSelect = (optValue: string) => {
      if (disabled) return;
      if (!onChange) return;

      if (multiple) {
        const newValues = isSelected(optValue)
          ? selectedValues.filter(v => v !== optValue)
          : [...selectedValues, optValue];
        onChange(newValues);
      } else {
        onChange(optValue);
      }
    };

    const containerClassNames = [
      styles.container,
      styles[size],
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        role={multiple ? 'group' : 'radiogroup'}
        className={containerClassNames}
        aria-disabled={disabled}
        {...rest}
      >
        {options.map((option) => {
          const selected = isSelected(option.value);
          const isDisabled = disabled || option.disabled;

          const buttonClassNames = [
            styles.button,
            selected ? styles.selected : '',
            isDisabled ? styles.buttonDisabled : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <button
              key={option.value}
              type="button"
              role={multiple ? 'checkbox' : 'radio'}
              className={buttonClassNames}
              disabled={isDisabled}
              aria-checked={selected}
              aria-disabled={isDisabled}
              onClick={() => handleSelect(option.value)}
            >
              {option.icon && <span className={styles.icon}>{option.icon}</span>}
              <span className={styles.label}>{option.label}</span>
            </button>
          );
        })}
      </div>
    );
  }
);

ButtonSelect.displayName = 'ButtonSelect';
