import React, { forwardRef, useRef, useCallback } from 'react';
import styles from './Tabs.module.css';

/** A single tab definition. */
export interface TabItem {
  /** Display label for the tab. */
  label: string;
  /** Unique value identifying this tab. */
  value: string;
  /** Whether the tab is disabled and cannot be selected. */
  disabled?: boolean;
  /** Optional icon element rendered before the label. */
  icon?: React.ReactNode;
}

/** Visual variant of the tabs. */
export type TabsVariant = 'underline' | 'contained';

/**
 * Props for the {@link Tabs} component.
 */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Array of tab definitions. */
  tabs: TabItem[];
  /** Currently active tab value. */
  activeTab: string;
  /** Callback fired when a tab is selected. */
  onChange: (value: string) => void;
  /** Visual variant. @default 'underline' */
  variant?: TabsVariant;
  /** Whether tabs should stretch to fill the container width. @default false */
  fullWidth?: boolean;
}

/**
 * Tabbed navigation component following UBS brand guidelines.
 *
 * Supports keyboard navigation (Arrow keys, Home, End) and
 * proper ARIA roles for accessibility.
 *
 * @example
 * ```tsx
 * <Tabs
 *   tabs={[
 *     { label: 'Overview', value: 'overview' },
 *     { label: 'Details', value: 'details' },
 *   ]}
 *   activeTab="overview"
 *   onChange={setActiveTab}
 * />
 * ```
 */
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  {
    tabs,
    activeTab,
    onChange,
    variant = 'underline',
    fullWidth = false,
    className,
    ...rest
  },
  ref,
) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = useCallback(
    (index: number) => {
      const enabledTabs = tabs
        .map((t, i) => ({ ...t, index: i }))
        .filter((t) => !t.disabled);
      if (enabledTabs.length === 0) return;

      /* Wrap the given index to the nearest enabled tab */
      let target = enabledTabs.find((t) => t.index === index);
      if (!target) {
        /* Find closest enabled tab in the requested direction */
        target = enabledTabs[0];
      }
      tabRefs.current[target.index]?.focus();
    },
    [tabs],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
      const enabledIndices = tabs
        .map((t, i) => ({ disabled: t.disabled, index: i }))
        .filter((t) => !t.disabled)
        .map((t) => t.index);

      const currentPos = enabledIndices.indexOf(currentIndex);
      let nextIndex: number | null = null;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown': {
          e.preventDefault();
          const next = currentPos + 1;
          nextIndex = enabledIndices[next >= enabledIndices.length ? 0 : next];
          break;
        }
        case 'ArrowLeft':
        case 'ArrowUp': {
          e.preventDefault();
          const prev = currentPos - 1;
          nextIndex = enabledIndices[prev < 0 ? enabledIndices.length - 1 : prev];
          break;
        }
        case 'Home': {
          e.preventDefault();
          nextIndex = enabledIndices[0];
          break;
        }
        case 'End': {
          e.preventDefault();
          nextIndex = enabledIndices[enabledIndices.length - 1];
          break;
        }
      }

      if (nextIndex != null) {
        tabRefs.current[nextIndex]?.focus();
        onChange(tabs[nextIndex].value);
      }
    },
    [tabs, onChange],
  );

  const classNames = [
    styles.tablist,
    styles[variant],
    fullWidth ? styles.fullWidth : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={classNames} role="tablist" {...rest}>
      {tabs.map((tab, index) => {
        const isActive = tab.value === activeTab;
        return (
          <button
            key={tab.value}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            type="button"
            role="tab"
            id={`tab-${tab.value}`}
            aria-selected={isActive}
            aria-controls={`tabpanel-${tab.value}`}
            tabIndex={isActive ? 0 : -1}
            disabled={tab.disabled}
            className={[styles.tab, isActive ? styles.tabActive : '']
              .filter(Boolean)
              .join(' ')}
            onClick={() => {
              if (!tab.disabled) onChange(tab.value);
            }}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {tab.icon && <span className={styles.tabIcon}>{tab.icon}</span>}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
});
