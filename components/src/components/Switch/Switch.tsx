import React, { forwardRef, useId } from 'react';
import styles from './Switch.module.css';

/** Switch size options. */
export type SwitchSize = 'small' | 'medium' | 'large';

/** Label position relative to the switch. */
export type SwitchLabelPosition = 'left' | 'right';

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Whether the switch is on. */
  checked?: boolean;
  /** Change handler. */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Label text displayed beside the switch. */
  label?: string;
  /** Position of the label relative to the switch. @default 'right' */
  labelPosition?: SwitchLabelPosition;
  /** Whether the switch is disabled. */
  disabled?: boolean;
  /** Size of the switch. @default 'medium' */
  size?: SwitchSize;
}

/**
 * UBS Design System Switch component.
 *
 * A toggle switch for on/off states. The UBS Switch variant uses a more
 * compact, squared-off design compared to the standard Toggle. Off state
 * uses Gray III track, on state uses UBS Red, both with white thumb.
 *
 * @example
 * ```tsx
 * <Switch
 *   label="Dark mode"
 *   checked={isDark}
 *   onChange={(e) => setIsDark(e.target.checked)}
 *   labelPosition="right"
 * />
 * ```
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      checked = false,
      onChange,
      label,
      labelPosition = 'right',
      disabled = false,
      size = 'medium',
      className,
      id: providedId,
      ...rest
    },
    ref
  ) => {
    const autoId = useId();
    const switchId = providedId ?? `ubs-switch-${autoId}`;

    const containerClassNames = [
      styles.container,
      styles[size],
      labelPosition === 'left' ? styles.labelLeft : styles.labelRight,
      disabled ? styles.disabled : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label htmlFor={switchId} className={containerClassNames}>
        {label && labelPosition === 'left' && (
          <span className={styles.label}>{label}</span>
        )}
        <span className={styles.switchWrapper}>
          <input
            ref={ref}
            id={switchId}
            type="checkbox"
            role="switch"
            className={styles.input}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            aria-checked={checked}
            aria-disabled={disabled}
            {...rest}
          />
          <span
            className={[styles.track, checked ? styles.trackOn : styles.trackOff]
              .filter(Boolean)
              .join(' ')}
            aria-hidden="true"
          >
            <span className={styles.thumb} />
          </span>
        </span>
        {label && labelPosition === 'right' && (
          <span className={styles.label}>{label}</span>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
