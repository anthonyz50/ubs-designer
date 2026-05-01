import React, { forwardRef, useState, useRef, useEffect, useCallback, useId } from 'react';
import styles from './DropdownButton.module.css';

/** A dropdown menu item. */
export interface DropdownButtonItem {
  /** Display label. */
  label: string;
  /** Optional icon element. */
  icon?: React.ReactNode;
  /** Click handler. */
  onClick?: () => void;
  /** Whether this item is disabled. */
  disabled?: boolean;
  /** Whether this item acts as a visual divider. */
  divider?: boolean;
}

/** DropdownButton variant options. */
export type DropdownButtonVariant = 'primary' | 'secondary' | 'outline';

/** DropdownButton size options. */
export type DropdownButtonSize = 'small' | 'medium' | 'large';

/** DropdownButton placement options. */
export type DropdownButtonPlacement = 'bottom-start' | 'bottom-end';

export interface DropdownButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Button label text. */
  label: string;
  /** Array of dropdown menu items. */
  items: DropdownButtonItem[];
  /** Visual variant. @default 'primary' */
  variant?: DropdownButtonVariant;
  /** Size of the button. @default 'medium' */
  size?: DropdownButtonSize;
  /** Dropdown placement relative to the button. @default 'bottom-start' */
  placement?: DropdownButtonPlacement;
  /** Whether the button is disabled. */
  disabled?: boolean;
}

/**
 * UBS Design System DropdownButton component.
 *
 * A button that reveals a dropdown menu of secondary actions. Similar to
 * MenuButton but specifically designed for "more actions" patterns with
 * configurable dropdown placement.
 *
 * @example
 * ```tsx
 * <DropdownButton
 *   label="More actions"
 *   placement="bottom-end"
 *   items={[
 *     { label: 'Export as PDF', onClick: handleExport },
 *     { label: 'Print', onClick: handlePrint },
 *     { divider: true, label: '' },
 *     { label: 'Archive', onClick: handleArchive },
 *   ]}
 * />
 * ```
 */
export const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(
  (
    {
      label,
      items,
      variant = 'primary',
      size = 'medium',
      placement = 'bottom-start',
      disabled = false,
      className,
      ...rest
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLUListElement>(null);
    const autoId = useId();
    const menuId = `ubs-dropdown-btn-${autoId}`;

    const actionableItems = items
      .map((item, i) => ({ item, index: i }))
      .filter(({ item }) => !item.divider && !item.disabled);

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

    const handleKeyDown = (e: React.KeyboardEvent) => {
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
          if (item && !item.divider && !item.disabled) {
            item.onClick?.();
            close();
          }
          break;
        }
      }
    };

    const handleToggle = () => {
      if (disabled) return;
      if (open) {
        close();
      } else {
        setOpen(true);
        setFocusedIndex(0);
      }
    };

    const buttonClassNames = [
      styles.button,
      styles[variant],
      styles[size],
      open ? styles.open : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const menuClassNames = [
      styles.menu,
      placement === 'bottom-end' ? styles.menuEnd : styles.menuStart,
    ].join(' ');

    return (
      <div className={styles.container} ref={containerRef}>
        <button
          ref={ref}
          type="button"
          className={buttonClassNames}
          disabled={disabled}
          aria-disabled={disabled}
          aria-haspopup="true"
          aria-expanded={open}
          aria-controls={open ? menuId : undefined}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          {...rest}
        >
          <span className={styles.label}>{label}</span>
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
            className={menuClassNames}
            aria-label={label}
            onKeyDown={handleKeyDown}
          >
            {items.map((item, index) => {
              if (item.divider) {
                return <li key={index} role="separator" className={styles.divider} />;
              }
              return (
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
              );
            })}
          </ul>
        )}
      </div>
    );
  }
);

DropdownButton.displayName = 'DropdownButton';
