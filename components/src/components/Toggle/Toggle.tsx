import React, { forwardRef, useId } from 'react';
import styles from './Toggle.module.css';

/** Toggle size options. */
export type ToggleSize = 'sm' | 'md' | 'lg';

/** Label position relative to the toggle. */
export type ToggleLabelPosition = 'left' | 'right';

export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Label text displayed beside the toggle. */
  label: string;
  /** Whether the toggle is on. */
  checked?: boolean;
  /** Change handler. */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Whether the toggle is disabled. */
  disabled?: boolean;
  /** Size of the toggle. @default 'md' */
  size?: ToggleSize;
  /** Position of the label relative to the toggle. @default 'right' */
  labelPosition?: ToggleLabelPosition;
}

/**
 * UBS Design System Toggle (switch) component.
 *
 * A pill-shaped toggle with circular thumb. Off state uses Gray III track,
 * on state uses UBS Red track, both with white thumb. Minimum 44px touch target.
 *
 * @example
 * ```tsx
 * <Toggle
 *   label="Enable notifications"
 *   checked={enabled}
 *   onChange={(e) => setEnabled(e.target.checked)}
 * />
 * ```
 */
export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      label,
      checked = false,
      onChange,
      disabled = false,
      size = 'md',
      labelPosition = 'right',
      className,
      id: providedId,
      ...rest
    },
    ref
  ) => {
    const autoId = useId();
    const toggleId = providedId ?? `ubs-toggle-${autoId}`;

    const containerClassNames = [
      styles.container,
      styles[size],
      disabled ? styles.disabled : '',
      labelPosition === 'left' ? styles.labelLeft : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label htmlFor={toggleId} className={containerClassNames}>
        <input
          ref={ref}
          id={toggleId}
          type="checkbox"
          role="switch"
          className={styles.nativeInput}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          aria-checked={checked}
          {...rest}
        />
        <span className={styles.track} aria-hidden="true">
          <span className={styles.thumb} />
        </span>
        <span className={styles.label}>{label}</span>
      </label>
    );
  }
);

Toggle.displayName = 'Toggle';
