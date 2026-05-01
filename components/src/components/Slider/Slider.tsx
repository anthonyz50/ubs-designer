import React, { forwardRef, useState, useRef, useCallback, useEffect, useId } from 'react';
import styles from './Slider.module.css';

/** A mark on the slider track. */
export interface SliderMark {
  /** The value at which the mark appears. */
  value: number;
  /** Optional label for the mark. */
  label?: string;
}

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Minimum value. @default 0 */
  min?: number;
  /** Maximum value. @default 100 */
  max?: number;
  /** Step increment. @default 1 */
  step?: number;
  /** Current value. Number for single thumb, [number, number] for range. */
  value?: number | [number, number];
  /** Change handler. */
  onChange?: (value: number | [number, number]) => void;
  /** Whether to show dual thumbs for range selection. @default false */
  range?: boolean;
  /** Whether to show the current value label above the thumb. @default true */
  showValue?: boolean;
  /** Marks to display on the slider track. */
  marks?: SliderMark[];
  /** Whether the slider is disabled. */
  disabled?: boolean;
  /** Accessible label for the slider. */
  label?: string;
}

/**
 * UBS Design System Slider component.
 *
 * A range slider input supporting both single value and dual-thumb range
 * modes. Displays optional value labels and track marks. Uses UBS Red
 * for the active track portion.
 *
 * @example
 * ```tsx
 * <Slider
 *   label="Price range"
 *   min={0}
 *   max={1000}
 *   step={10}
 *   value={[200, 800]}
 *   range
 *   showValue
 *   onChange={(val) => setRange(val as [number, number])}
 * />
 * ```
 */
export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      min = 0,
      max = 100,
      step = 1,
      value,
      onChange,
      range = false,
      showValue = true,
      marks,
      disabled = false,
      label,
      className,
      ...rest
    },
    ref
  ) => {
    const autoId = useId();
    const trackRef = useRef<HTMLDivElement>(null);

    // Normalise value
    const defaultValue: [number, number] = range ? [min, max] : [min, min];
    const currentValue: [number, number] = Array.isArray(value)
      ? value
      : value !== undefined
        ? [value, value]
        : defaultValue;

    const [dragging, setDragging] = useState<'low' | 'high' | null>(null);

    const clamp = (val: number) => Math.min(max, Math.max(min, val));
    const snap = (val: number) => Math.round((val - min) / step) * step + min;
    const percent = (val: number) => ((val - min) / (max - min)) * 100;

    const getValueFromPosition = useCallback(
      (clientX: number): number => {
        if (!trackRef.current) return min;
        const rect = trackRef.current.getBoundingClientRect();
        const ratio = (clientX - rect.left) / rect.width;
        return snap(clamp(min + ratio * (max - min)));
      },
      [min, max, step]
    );

    const handleChange = useCallback(
      (thumb: 'low' | 'high', newVal: number) => {
        if (!onChange) return;
        if (range) {
          const newRange: [number, number] =
            thumb === 'low'
              ? [Math.min(newVal, currentValue[1]), currentValue[1]]
              : [currentValue[0], Math.max(newVal, currentValue[0])];
          onChange(newRange);
        } else {
          onChange(newVal);
        }
      },
      [onChange, range, currentValue]
    );

    const handleTrackClick = (e: React.MouseEvent) => {
      if (disabled) return;
      const val = getValueFromPosition(e.clientX);
      if (range) {
        // Move nearest thumb
        const distLow = Math.abs(val - currentValue[0]);
        const distHigh = Math.abs(val - currentValue[1]);
        handleChange(distLow <= distHigh ? 'low' : 'high', val);
      } else {
        handleChange('low', val);
      }
    };

    // Mouse drag handlers
    useEffect(() => {
      if (!dragging) return;
      const handleMove = (e: MouseEvent) => {
        const val = getValueFromPosition(e.clientX);
        handleChange(dragging, val);
      };
      const handleUp = () => setDragging(null);
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleUp);
      return () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleUp);
      };
    }, [dragging, getValueFromPosition, handleChange]);

    const handleThumbKeyDown = (thumb: 'low' | 'high') => (e: React.KeyboardEvent) => {
      let newVal: number | null = null;
      const val = thumb === 'low' ? currentValue[0] : currentValue[1];

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowUp':
          e.preventDefault();
          newVal = clamp(snap(val + step));
          break;
        case 'ArrowLeft':
        case 'ArrowDown':
          e.preventDefault();
          newVal = clamp(snap(val - step));
          break;
        case 'Home':
          e.preventDefault();
          newVal = min;
          break;
        case 'End':
          e.preventDefault();
          newVal = max;
          break;
        case 'PageUp':
          e.preventDefault();
          newVal = clamp(snap(val + step * 10));
          break;
        case 'PageDown':
          e.preventDefault();
          newVal = clamp(snap(val - step * 10));
          break;
      }

      if (newVal !== null) {
        handleChange(thumb, newVal);
      }
    };

    const lowPercent = percent(currentValue[0]);
    const highPercent = range ? percent(currentValue[1]) : lowPercent;

    const containerClassNames = [
      styles.container,
      disabled ? styles.disabled : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const renderThumb = (thumb: 'low' | 'high', val: number, pct: number) => (
      <div
        className={styles.thumb}
        role="slider"
        tabIndex={disabled ? -1 : 0}
        aria-valuenow={val}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-label={
          range
            ? thumb === 'low'
              ? `${label ?? 'Slider'} minimum`
              : `${label ?? 'Slider'} maximum`
            : label ?? 'Slider'
        }
        aria-disabled={disabled}
        style={{ left: `${pct}%` }}
        onMouseDown={(e) => {
          e.preventDefault();
          if (!disabled) setDragging(thumb);
        }}
        onKeyDown={handleThumbKeyDown(thumb)}
      >
        {showValue && (
          <span className={styles.valueLabel} aria-hidden="true">
            {val}
          </span>
        )}
      </div>
    );

    return (
      <div ref={ref} className={containerClassNames} {...rest}>
        {label && <span className={styles.label}>{label}</span>}
        <div className={styles.sliderWrapper}>
          <span className={styles.minLabel} aria-hidden="true">{min}</span>
          <div className={styles.trackWrapper}>
            <div
              ref={trackRef}
              className={styles.track}
              onClick={handleTrackClick}
            >
              <div
                className={styles.fill}
                style={
                  range
                    ? { left: `${lowPercent}%`, width: `${highPercent - lowPercent}%` }
                    : { left: '0%', width: `${lowPercent}%` }
                }
              />
              {marks?.map((mark) => {
                const pct = percent(mark.value);
                return (
                  <div
                    key={mark.value}
                    className={styles.mark}
                    style={{ left: `${pct}%` }}
                  >
                    <span className={styles.markDot} />
                    {mark.label && (
                      <span className={styles.markLabel}>{mark.label}</span>
                    )}
                  </div>
                );
              })}
            </div>
            {renderThumb('low', currentValue[0], lowPercent)}
            {range && renderThumb('high', currentValue[1], highPercent)}
          </div>
          <span className={styles.maxLabel} aria-hidden="true">{max}</span>
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';
