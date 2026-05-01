import React, { forwardRef, useState, useRef, useEffect, useCallback, useId, useMemo } from 'react';
import styles from './TimePicker.module.css';

/** Time format. */
export type TimeFormat = '12h' | '24h';

/** Structured time value. */
export interface TimeValue {
  /** Hours (0-23 for 24h, 1-12 for 12h). */
  hours: number;
  /** Minutes (0-59). */
  minutes: number;
  /** Seconds (0-59). */
  seconds: number;
  /** AM/PM period (only for 12h format). */
  period?: 'AM' | 'PM';
}

export interface TimePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current time value. */
  value?: TimeValue;
  /** Change handler. */
  onChange?: (value: TimeValue) => void;
  /** Time display format. @default '24h' */
  format?: TimeFormat;
  /** Whether to show the seconds selector. @default false */
  showSeconds?: boolean;
  /** Minimum time (hours, minutes). */
  min?: { hours: number; minutes: number };
  /** Maximum time (hours, minutes). */
  max?: { hours: number; minutes: number };
  /** Whether the time picker is disabled. */
  disabled?: boolean;
  /** Label text displayed above the picker. */
  label?: string;
  /** Error message. */
  error?: string;
  /** Helper text. */
  helperText?: string;
  /** Placeholder text. */
  placeholder?: string;
}

/**
 * UBS Design System TimePicker component.
 *
 * A time selection input with hour, minute, and optional second selectors.
 * Supports 12-hour (with AM/PM) and 24-hour formats. Designed as a
 * companion to the existing DatePicker component.
 *
 * @example
 * ```tsx
 * <TimePicker
 *   label="Meeting time"
 *   format="12h"
 *   value={{ hours: 2, minutes: 30, seconds: 0, period: 'PM' }}
 *   onChange={(time) => setMeetingTime(time)}
 * />
 * ```
 */
export const TimePicker = forwardRef<HTMLDivElement, TimePickerProps>(
  (
    {
      value,
      onChange,
      format = '24h',
      showSeconds = false,
      min,
      max,
      disabled = false,
      label,
      error,
      helperText,
      placeholder = 'Select time',
      className,
      ...rest
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const autoId = useId();
    const dropdownId = `ubs-timepicker-${autoId}`;
    const inputId = `ubs-timepicker-input-${autoId}`;

    const defaultTime: TimeValue = {
      hours: format === '12h' ? 12 : 0,
      minutes: 0,
      seconds: 0,
      period: format === '12h' ? 'AM' : undefined,
    };

    const currentTime = value ?? defaultTime;

    const close = useCallback(() => setOpen(false), []);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          close();
        }
      };
      if (open) {
        document.addEventListener('mousedown', handleClickOutside);
      }
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open, close]);

    const formatDisplayValue = (): string => {
      if (!value) return '';
      const h = String(value.hours).padStart(2, '0');
      const m = String(value.minutes).padStart(2, '0');
      const s = String(value.seconds).padStart(2, '0');
      let display = `${h}:${m}`;
      if (showSeconds) display += `:${s}`;
      if (format === '12h' && value.period) display += ` ${value.period}`;
      return display;
    };

    const updateTime = (partial: Partial<TimeValue>) => {
      if (!onChange) return;
      onChange({ ...currentTime, ...partial });
    };

    const hoursRange = useMemo(() => {
      if (format === '12h') {
        return Array.from({ length: 12 }, (_, i) => i + 1);
      }
      return Array.from({ length: 24 }, (_, i) => i);
    }, [format]);

    const minutesRange = useMemo(
      () => Array.from({ length: 60 }, (_, i) => i),
      []
    );

    const secondsRange = useMemo(
      () => Array.from({ length: 60 }, (_, i) => i),
      []
    );

    const handleToggle = () => {
      if (!disabled) setOpen(prev => !prev);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
      } else if (!open && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown')) {
        e.preventDefault();
        setOpen(true);
      }
    };

    const scrollToSelected = (listEl: HTMLUListElement | null, selectedValue: number) => {
      if (!listEl) return;
      const items = listEl.querySelectorAll('[role="option"]');
      for (const item of items) {
        if (Number((item as HTMLElement).dataset.value) === selectedValue) {
          item.scrollIntoView({ block: 'nearest' });
          break;
        }
      }
    };

    const hoursListRef = useRef<HTMLUListElement>(null);
    const minutesListRef = useRef<HTMLUListElement>(null);
    const secondsListRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
      if (open) {
        requestAnimationFrame(() => {
          scrollToSelected(hoursListRef.current, currentTime.hours);
          scrollToSelected(minutesListRef.current, currentTime.minutes);
          if (showSeconds) {
            scrollToSelected(secondsListRef.current, currentTime.seconds);
          }
        });
      }
    }, [open]);

    const containerClassNames = [
      styles.container,
      disabled ? styles.disabled : '',
      error ? styles.error : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const renderColumn = (
      columnLabel: string,
      values: number[],
      selected: number,
      onSelect: (val: number) => void,
      listRef: React.RefObject<HTMLUListElement | null>
    ) => (
      <div className={styles.column}>
        <span className={styles.columnLabel} aria-hidden="true">
          {columnLabel}
        </span>
        <ul
          ref={listRef as React.RefObject<HTMLUListElement>}
          role="listbox"
          className={styles.columnList}
          aria-label={columnLabel}
        >
          {values.map((val) => (
            <li
              key={val}
              role="option"
              className={[
                styles.columnItem,
                val === selected ? styles.columnItemSelected : '',
              ]
                .filter(Boolean)
                .join(' ')}
              data-value={val}
              aria-selected={val === selected}
              onClick={() => onSelect(val)}
              tabIndex={val === selected ? 0 : -1}
            >
              {String(val).padStart(2, '0')}
            </li>
          ))}
        </ul>
      </div>
    );

    return (
      <div ref={ref} className={containerClassNames} {...rest}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <div ref={containerRef} className={styles.wrapper}>
          <button
            type="button"
            id={inputId}
            className={[styles.trigger, open ? styles.triggerOpen : '']
              .filter(Boolean)
              .join(' ')}
            disabled={disabled}
            aria-disabled={disabled}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls={open ? dropdownId : undefined}
            aria-invalid={!!error}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
          >
            <svg
              className={styles.clockIcon}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 4.5V8L10.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={value ? styles.triggerValue : styles.triggerPlaceholder}>
              {value ? formatDisplayValue() : placeholder}
            </span>
            <svg
              className={styles.chevron}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {open && (
            <div
              id={dropdownId}
              role="dialog"
              className={styles.dropdown}
              aria-label="Time picker"
            >
              <div className={styles.columns}>
                {renderColumn(
                  'Hours',
                  hoursRange,
                  currentTime.hours,
                  (val) => updateTime({ hours: val }),
                  hoursListRef
                )}
                <div className={styles.separator} aria-hidden="true">:</div>
                {renderColumn(
                  'Minutes',
                  minutesRange,
                  currentTime.minutes,
                  (val) => updateTime({ minutes: val }),
                  minutesListRef
                )}
                {showSeconds && (
                  <>
                    <div className={styles.separator} aria-hidden="true">:</div>
                    {renderColumn(
                      'Seconds',
                      secondsRange,
                      currentTime.seconds,
                      (val) => updateTime({ seconds: val }),
                      secondsListRef
                    )}
                  </>
                )}
                {format === '12h' && (
                  <div className={styles.column}>
                    <span className={styles.columnLabel} aria-hidden="true">
                      Period
                    </span>
                    <ul
                      role="listbox"
                      className={styles.columnList}
                      aria-label="AM/PM"
                    >
                      {(['AM', 'PM'] as const).map((period) => (
                        <li
                          key={period}
                          role="option"
                          className={[
                            styles.columnItem,
                            styles.periodItem,
                            currentTime.period === period ? styles.columnItemSelected : '',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                          aria-selected={currentTime.period === period}
                          onClick={() => updateTime({ period })}
                          tabIndex={currentTime.period === period ? 0 : -1}
                        >
                          {period}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className={styles.footer}>
                <button
                  type="button"
                  className={styles.nowButton}
                  onClick={() => {
                    const now = new Date();
                    let hours = now.getHours();
                    let period: 'AM' | 'PM' | undefined;
                    if (format === '12h') {
                      period = hours >= 12 ? 'PM' : 'AM';
                      hours = hours % 12 || 12;
                    }
                    onChange?.({
                      hours,
                      minutes: now.getMinutes(),
                      seconds: now.getSeconds(),
                      period,
                    });
                  }}
                >
                  Now
                </button>
                <button
                  type="button"
                  className={styles.doneButton}
                  onClick={close}
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
        {error && <span className={styles.errorText} role="alert">{error}</span>}
        {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
      </div>
    );
  }
);

TimePicker.displayName = 'TimePicker';
