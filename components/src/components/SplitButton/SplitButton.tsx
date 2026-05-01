import React, { forwardRef, useState, useRef, useEffect, useCallback, useId } from 'react';
import styles from './SplitButton.module.css';

/** Dropdown item for the split button menu. */
export interface SplitButtonItem {
  /** Display label. */
  label: string;
  /** Optional icon element. */
  icon?: React.ReactNode;
  /** Click handler. */
  onClick?: () => void;
  /** Whether this item is disabled. */
  disabled?: boolean;
}

/** SplitButton variant options. */
export type SplitButtonVariant = 'primary' | 'secondary' | 'outline';

/** SplitButton size options. */
export type SplitButtonSize = 'small' | 'medium' | 'large';

export interface SplitButtonProps {
  /** Label for the primary action button. */
  label: string;
  /** Click handler for the primary action. */
  onClick?: () => void;
  /** Array of dropdown menu items. */
  items: SplitButtonItem[];
  /** Visual variant. @default 'primary' */
  variant?: SplitButtonVariant;
  /** Size of the button. @default 'medium' */
  size?: SplitButtonSize;
  /** Whether the entire split button is disabled. */
  disabled?: boolean;
  /** Additional CSS class name. */
  className?: string;
}

/**
 * UBS Design System SplitButton component.
 *
 * A dual-action button combining a primary action (left) with a dropdown
 * toggle (right). The left side triggers the main action while the right
 * side opens a menu of secondary actions.
 *
 * @example
 * ```tsx
 * <SplitButton
 *   label="Save"
 *   onClick={handleSave}
 *   items={[
 *     { label: 'Save as draft', onClick: handleSaveDraft },
 *     { label: 'Save and close', onClick: handleSaveClose },
 *   ]}
 * />
 * ```
 */
export const SplitButton = forwardRef<HTMLDivElement, SplitButtonProps>(
  (
    {
      label,
      onClick,
      items,
      variant = 'primary',
      size = 'medium',
      disabled = false,
      className,
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLUListElement>(null);
    const autoId = useId();
    const menuId = `ubs-split-menu-${autoId}`;

    const actionableItems = items
      .map((item, i) => ({ item, index: i }))
      .filter(({ item }) => !item.disabled);

    const close = useCallback(() => {
      setOpen(false);
      setFocusedIndex(-1);
    }, []);

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

    useEffect(() => {
      if (open && focusedIndex >= 0 && menuRef.current) {
        const menuItems = menuRef.current.querySelectorAll('[role="menuitem"]');
        (menuItems[focusedIndex] as HTMLElement)?.focus();
      }
    }, [focusedIndex, open]);

    const handleToggleKeyDown = (e: React.KeyboardEvent) => {
      if (!open) {
        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setOpen(true);
          setFocusedIndex(0);
        }
        return;
      }

      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault();
          const curIdx = actionableItems.findIndex(a => a.index === focusedIndex);
          const next = actionableItems[(curIdx + 1) % actionableItems.length];
          if (next) setFocusedIndex(next.index);
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          const curIdx = actionableItems.findIndex(a => a.index === focusedIndex);
          const prev = actionableItems[(curIdx - 1 + actionableItems.length) % actionableItems.length];
          if (prev) setFocusedIndex(prev.index);
          break;
        }
        case 'Escape':
          e.preventDefault();
          close();
          break;
        case 'Tab':
          close();
          break;
        case 'Enter':
        case ' ': {
          e.preventDefault();
          const item = items[focusedIndex];
          if (item && !item.disabled) {
            item.onClick?.();
            close();
          }
          break;
        }
      }
    };

    const containerClassNames = [
      styles.container,
      styles[variant],
      styles[size],
      disabled ? styles.disabled : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref ?? containerRef} className={containerClassNames}>
        <div className={styles.wrapper} ref={containerRef}>
          <button
            type="button"
            className={styles.primary}
            disabled={disabled}
            aria-disabled={disabled}
            onClick={() => {
              if (!disabled) onClick?.();
            }}
          >
            <span className={styles.label}>{label}</span>
          </button>
          <button
            type="button"
            className={styles.toggle}
            disabled={disabled}
            aria-disabled={disabled}
            aria-haspopup="true"
            aria-expanded={open}
            aria-controls={open ? menuId : undefined}
            aria-label="More options"
            onClick={() => {
              if (!disabled) {
                if (open) close();
                else {
                  setOpen(true);
                  setFocusedIndex(0);
                }
              }
            }}
            onKeyDown={handleToggleKeyDown}
          >
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
            <ul
              ref={menuRef}
              id={menuId}
              role="menu"
              className={styles.menu}
              aria-label={`${label} options`}
              onKeyDown={handleToggleKeyDown}
            >
              {items.map((item, index) => (
                <li
                  key={index}
                  role="menuitem"
                  className={[
                    styles.menuItem,
                    item.disabled ? styles.menuItemDisabled : '',
                    focusedIndex === index ? styles.menuItemFocused : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  tabIndex={focusedIndex === index ? 0 : -1}
                  aria-disabled={item.disabled}
                  onClick={() => {
                    if (item.disabled) return;
                    item.onClick?.();
                    close();
                  }}
                >
                  {item.icon && <span className={styles.menuItemIcon}>{item.icon}</span>}
                  <span className={styles.menuItemLabel}>{item.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
);

SplitButton.displayName = 'SplitButton';
