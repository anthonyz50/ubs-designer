import React, { forwardRef, useId } from 'react';
import { FormField } from '../FormField';
import styles from './Textarea.module.css';

/** Resize behaviour for the textarea. */
export type TextareaResize = 'none' | 'vertical' | 'both';

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'> {
  /** Label text displayed above the textarea. */
  label?: string;
  /** Controlled value. */
  value?: string;
  /** Change handler. */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  /** Error message. Displays red border and error text below. */
  error?: string;
  /** Helper text displayed below the textarea when there is no error. */
  helperText?: string;
  /** Whether the textarea is disabled. */
  disabled?: boolean;
  /** Whether the textarea is required. */
  required?: boolean;
  /** Whether the textarea is read-only. */
  readOnly?: boolean;
  /** Number of visible text rows. @default 4 */
  rows?: number;
  /** Maximum character count. */
  maxLength?: number;
  /** Whether to display the character count. @default false */
  showCount?: boolean;
  /** Resize behaviour. @default 'vertical' */
  resize?: TextareaResize;
  /** Whether the wrapper should be full width. */
  fullWidth?: boolean;
}

/**
 * UBS Design System Textarea component.
 *
 * A multi-line text input with label, error, helper text, character count,
 * and configurable resize behaviour. Follows UBS brand guidelines.
 *
 * @example
 * ```tsx
 * <Textarea
 *   label="Comments"
 *   maxLength={500}
 *   showCount
 *   placeholder="Enter your comments"
 * />
 * ```
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      value,
      onChange,
      error,
      helperText,
      disabled = false,
      required = false,
      readOnly = false,
      rows = 4,
      maxLength,
      showCount = false,
      resize = 'vertical',
      fullWidth = false,
      className,
      id: providedId,
      ...rest
    },
    ref
  ) => {
    const autoId = useId();
    const textareaId = providedId ?? `ubs-textarea-${autoId}`;
    const errorId = error ? `${textareaId}-error` : undefined;
    const helperTextId =
      helperText && !error ? `${textareaId}-helper` : undefined;
    const describedBy =
      [errorId, helperTextId].filter(Boolean).join(' ') || undefined;

    const resizeClass =
      resize === 'none'
        ? styles.resizeNone
        : resize === 'both'
          ? styles.resizeBoth
          : styles.resizeVertical;

    const textareaClassNames = [
      styles.textarea,
      resizeClass,
      error ? styles.error : '',
      disabled ? styles.disabled : '',
      readOnly ? styles.readonly : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const currentLength = typeof value === 'string' ? value.length : 0;
    const isOver = maxLength !== undefined && currentLength > maxLength;

    return (
      <FormField
        label={label}
        error={error}
        helperText={helperText}
        required={required}
        htmlFor={textareaId}
        fullWidth={fullWidth}
        errorId={errorId}
        helperTextId={helperTextId}
      >
        <textarea
          ref={ref}
          id={textareaId}
          className={textareaClassNames}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          readOnly={readOnly}
          rows={rows}
          maxLength={maxLength}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          {...rest}
        />

        {showCount && (
          <div className={styles.countWrapper}>
            <span className={`${styles.count}${isOver ? ` ${styles.countOver}` : ''}`}>
              {currentLength}
              {maxLength !== undefined ? ` / ${maxLength}` : ''}
            </span>
          </div>
        )}
      </FormField>
    );
  }
);

Textarea.displayName = 'Textarea';
