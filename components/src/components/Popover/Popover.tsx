import React, { useRef, useCallback, useEffect, useId, useState } from 'react';
import styles from './Popover.module.css';

/** Popover position relative to the trigger element. */
export type PopoverPosition = 'top' | 'bottom' | 'left' | 'right';

/**
 * Props for the {@link Popover} component.
 */
export interface PopoverProps {
  /** Content rendered inside the popover panel. */
  content: React.ReactNode;
  /** Trigger element that toggles the popover. */
  trigger: React.ReactNode;
  /** Position of the popover relative to the trigger. @default 'bottom' */
  position?: PopoverPosition;
  /** Controlled open state. When provided, the component becomes controlled. */
  isOpen?: boolean;
  /** Callback fired when the open state should change. */
  onOpenChange?: (open: boolean) => void;
}

/**
 * Popover component following UBS brand guidelines.
 *
 * Opens on click (not hover), closes on outside click or Escape.
 * Uses a white background with Gray II border and a directional arrow.
 *
 * @example
 * ```tsx
 * <Popover
 *   trigger={<button>Open</button>}
 *   content={<p>Popover content here</p>}
 *   position="bottom"
 * />
 * ```
 */
export function Popover({
  content,
  trigger,
  position = 'bottom',
  isOpen: controlledOpen,
  onOpenChange,
}: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;
  const popoverId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const setOpen = useCallback(
    (next: boolean) => {
      if (onOpenChange) onOpenChange(next);
      else setInternalOpen(next);
    },
    [onOpenChange],
  );

  const toggle = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  /* Close on outside click */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, setOpen]);

  /* Close on Escape */
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, setOpen]);

  /* Focus first focusable inside popover on open */
  useEffect(() => {
    if (!open) return;
    requestAnimationFrame(() => {
      const el = popoverRef.current;
      if (!el) return;
      const focusable = el.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      focusable?.focus();
    });
  }, [open]);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={styles.trigger}
        onClick={toggle}
        aria-expanded={open}
        aria-controls={open ? popoverId : undefined}
      >
        {trigger}
      </div>
      <div
        ref={popoverRef}
        id={popoverId}
        className={[
          styles.popover,
          styles[position],
          open ? styles.visible : '',
        ]
          .filter(Boolean)
          .join(' ')}
        role="dialog"
        aria-hidden={!open}
      >
        <span className={styles.arrow} />
        {content}
      </div>
    </div>
  );
}
