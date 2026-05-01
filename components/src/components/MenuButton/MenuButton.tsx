import React, { forwardRef, useState, useRef, useEffect, useCallback, useId } from 'react';
import styles from './MenuButton.module.css';

/** Menu item configuration. */
export interface MenuItem {
  /** Display label for the menu item. */
  label: string;
  /** Optional icon element rendered before the label. */
  icon?: React.ReactNode;
  /** Click handler for the menu item. */
  onClick?: () => void;
  /** Whether this item acts as a visual divider. */
  divider?: boolean;
  /** Whether this item is disabled. */
  disabled?: boolean;
}

/** MenuButton variant options. */
export type MenuButtonVariant = 'primary' | 'secondary' | 'outline';

/** MenuButton size options. */
export type MenuButtonSize = 'small' | 'medium' | 'large';

export interface MenuButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Button label text. */
  label: string;
  /** Array of menu items to display in the dropdown. */
  items: MenuItem[];
  /** Visual variant of the button. @default 'primary' */
  variant?: MenuButtonVariant;
  /** Size of the button. @default 'medium' */
  size?: MenuButtonSize;
  /** Whether the button is disabled. */
  disabled?: boolean;
}

/**
 * UBS Design System MenuButton component.
 *
 * A button that opens a dropdown menu when clicked. Includes a chevron
 * indicator and supports keyboard navigation through menu items.
 *
 * @example
 * ```tsx
 * <MenuButton
 *   label="Actions"
 *   variant="primary"
 *   items={[
 *     { label: 'Edit', icon: <EditIcon />, onClick: handleEdit },
 *     { divider: true, label: '' },
 *     { label: 'Delete', onClick: handleDelete },
 *   ]}
 * />
 * ```
 */
export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  (
    {
      label,
      items,
      variant = 'primary',
      size = 'medium',
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
    const menuId = `ubs-menu-${autoId}`;

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
        const items = menuRef.current.querySelectorAll('[role="menuitem"]');
        (items[focusedIndex] as HTMLElement)?.focus();
      }
    }, [focusedIndex, open]);

    const handleToggle = () => {
      if (disabled) return;
      if (open) {
        close();
      } else {
        setOpen(true);
        setFocusedIndex(0);
      }
    };

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
          const currentActionIdx = actionableItems.findIndex(a => a.index === focusedIndex);
          const next = actionableItems[(currentActionIdx + 1) % actionableItems.length];
          if (next) setFocusedIndex(next.index);
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          const currentActionIdx = actionableItems.findIndex(a => a.index === focusedIndex);
          const prev = actionableItems[(currentActionIdx - 1 + actionableItems.length) % actionableItems.length];
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
        case 'Home': {
          e.preventDefault();
          const first = actionableItems[0];
          if (first) setFocusedIndex(first.index);
          break;
        }
        case 'End': {
          e.preventDefault();
          const last = actionableItems[actionableItems.length - 1];
          if (last) setFocusedIndex(last.index);
          break;
        }
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
            className={styles.menu}
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

MenuButton.displayName = 'MenuButton';
