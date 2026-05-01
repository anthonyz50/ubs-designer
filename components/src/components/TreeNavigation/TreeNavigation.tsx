import React, { forwardRef, useState, useCallback } from 'react';
import styles from './TreeNavigation.module.css';

export interface TreeNodeItem {
  /** Unique identifier for this tree node. */
  id: string;
  /** Display label. */
  label: string;
  /** Optional icon element. */
  icon?: React.ReactNode;
  /** Child nodes. */
  children?: TreeNodeItem[];
  /** Whether this node is disabled. */
  disabled?: boolean;
}

export interface TreeNavigationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
  /** Tree structure of navigation items. */
  items: TreeNodeItem[];
  /** Currently active/selected item ID. */
  activeId?: string;
  /** Callback when a node is selected. */
  onSelect?: (id: string) => void;
  /** Set of currently expanded node IDs (controlled). */
  expandedIds?: Set<string>;
  /** Set of initially expanded node IDs (uncontrolled). */
  defaultExpandedIds?: Set<string>;
  /** Callback when expanded state changes. */
  onExpandChange?: (expandedIds: Set<string>) => void;
}

/**
 * UBS Design System TreeNavigation component.
 *
 * Hierarchical tree menu for sidebar navigation with
 * expandable/collapsible nodes and active item highlighting.
 *
 * @example
 * ```tsx
 * <TreeNavigation
 *   items={[
 *     {
 *       id: 'portfolio',
 *       label: 'Portfolio',
 *       children: [
 *         { id: 'overview', label: 'Overview' },
 *         { id: 'holdings', label: 'Holdings' },
 *       ],
 *     },
 *     { id: 'transactions', label: 'Transactions' },
 *   ]}
 *   activeId="overview"
 *   onSelect={(id) => console.log('Selected:', id)}
 * />
 * ```
 */
export const TreeNavigation = forwardRef<HTMLElement, TreeNavigationProps>(
  (
    {
      items,
      activeId,
      onSelect,
      expandedIds: controlledExpanded,
      defaultExpandedIds,
      onExpandChange,
      className,
      ...rest
    },
    ref
  ) => {
    const [internalExpanded, setInternalExpanded] = useState<Set<string>>(
      defaultExpandedIds ?? new Set()
    );

    const expandedIds = controlledExpanded ?? internalExpanded;

    const toggleExpanded = useCallback(
      (id: string) => {
        const newExpanded = new Set(expandedIds);
        if (newExpanded.has(id)) {
          newExpanded.delete(id);
        } else {
          newExpanded.add(id);
        }

        if (!controlledExpanded) {
          setInternalExpanded(newExpanded);
        }
        onExpandChange?.(newExpanded);
      },
      [expandedIds, controlledExpanded, onExpandChange]
    );

    const handleSelect = useCallback(
      (id: string) => {
        onSelect?.(id);
      },
      [onSelect]
    );

    const classNames = [
      styles.treeNavigation,
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <nav ref={ref} className={classNames} aria-label="Tree navigation" {...rest}>
        <TreeNodeList
          items={items}
          activeId={activeId}
          expandedIds={expandedIds}
          onToggle={toggleExpanded}
          onSelect={handleSelect}
          level={0}
        />
      </nav>
    );
  }
);

TreeNavigation.displayName = 'TreeNavigation';

/* ─── Internal TreeNodeList ───────────────────────────────────────── */

interface TreeNodeListProps {
  items: TreeNodeItem[];
  activeId?: string;
  expandedIds: Set<string>;
  onToggle: (id: string) => void;
  onSelect: (id: string) => void;
  level: number;
}

function TreeNodeList({
  items,
  activeId,
  expandedIds,
  onToggle,
  onSelect,
  level,
}: TreeNodeListProps) {
  return (
    <ul
      className={styles.nodeList}
      role={level === 0 ? 'tree' : 'group'}
      style={{ '--tree-level': level } as React.CSSProperties}
    >
      {items.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expandedIds.has(item.id);
        const isActive = activeId === item.id;

        return (
          <li
            key={item.id}
            className={styles.nodeItem}
            role="treeitem"
            aria-expanded={hasChildren ? isExpanded : undefined}
            aria-selected={isActive}
          >
            <div
              className={[
                styles.nodeContent,
                isActive ? styles.nodeActive : '',
                item.disabled ? styles.nodeDisabled : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {hasChildren && (
                <button
                  type="button"
                  className={[
                    styles.expandButton,
                    isExpanded ? styles.expandButtonOpen : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => onToggle(item.id)}
                  aria-label={isExpanded ? `Collapse ${item.label}` : `Expand ${item.label}`}
                  tabIndex={-1}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M4.5 2.5L8 6L4.5 9.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
              {!hasChildren && <span className={styles.expandSpacer} />}
              <button
                type="button"
                className={styles.nodeButton}
                onClick={() => {
                  if (item.disabled) return;
                  if (hasChildren) onToggle(item.id);
                  onSelect(item.id);
                }}
                disabled={item.disabled}
                tabIndex={0}
              >
                {item.icon && (
                  <span className={styles.nodeIcon} aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                <span className={styles.nodeLabel}>{item.label}</span>
              </button>
            </div>
            {hasChildren && isExpanded && (
              <TreeNodeList
                items={item.children!}
                activeId={activeId}
                expandedIds={expandedIds}
                onToggle={onToggle}
                onSelect={onSelect}
                level={level + 1}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
