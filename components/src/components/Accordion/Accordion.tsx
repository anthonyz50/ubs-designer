/**
 * @module Accordion
 * @description Expandable/collapsible content sections following UBS brand guidelines.
 *
 * Supports single or multiple open panels, keyboard navigation (Enter/Space/Arrow keys),
 * animated expand/collapse, and bordered variant.
 *
 * @example
 * ```tsx
 * <Accordion
 *   items={[
 *     { title: 'Portfolio Overview', content: <p>Details here...</p> },
 *     { title: 'Risk Analysis', content: <p>Risk metrics...</p> },
 *   ]}
 *   allowMultiple
 *   variant="bordered"
 * />
 * ```
 */
import {
  forwardRef,
  useState,
  useCallback,
  useRef,
  useEffect,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import styles from './Accordion.module.css';

/** Single accordion item definition. */
export interface AccordionItem {
  /** Title displayed in the trigger button. */
  title: ReactNode;
  /** Content shown when the item is expanded. */
  content: ReactNode;
  /** Whether the item is disabled. */
  disabled?: boolean;
}

/** Visual variant of the Accordion. */
export type AccordionVariant = 'default' | 'bordered';

export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Accordion items to render. */
  items: AccordionItem[];
  /** Allow multiple items to be open simultaneously. Defaults to `false`. */
  allowMultiple?: boolean;
  /** Indices of items open by default. */
  defaultOpen?: number[];
  /** Visual variant. Defaults to `'default'`. */
  variant?: AccordionVariant;
}

const ChevronIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Accordion — expandable content sections with animated transitions.
 *
 * Adheres to WAI-ARIA Accordion pattern with full keyboard support.
 */
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ items, allowMultiple = false, defaultOpen = [], variant = 'default', className, ...rest }, ref) => {
    const [openIndices, setOpenIndices] = useState<Set<number>>(new Set(defaultOpen));
    const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggle = useCallback(
      (index: number) => {
        setOpenIndices((prev) => {
          const next = new Set(prev);
          if (next.has(index)) {
            next.delete(index);
          } else {
            if (!allowMultiple) {
              next.clear();
            }
            next.add(index);
          }
          return next;
        });
      },
      [allowMultiple],
    );

    // Animate max-height on open/close
    useEffect(() => {
      panelRefs.current.forEach((panel, i) => {
        if (!panel) return;
        if (openIndices.has(i)) {
          panel.style.maxHeight = `${panel.scrollHeight}px`;
        } else {
          panel.style.maxHeight = '0px';
        }
      });
    }, [openIndices]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent, index: number) => {
        const enabledIndices = items
          .map((item, i) => ({ disabled: item.disabled, i }))
          .filter((x) => !x.disabled)
          .map((x) => x.i);

        const currentPos = enabledIndices.indexOf(index);

        let targetIndex: number | undefined;

        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            targetIndex = enabledIndices[(currentPos + 1) % enabledIndices.length];
            break;
          case 'ArrowUp':
            e.preventDefault();
            targetIndex = enabledIndices[(currentPos - 1 + enabledIndices.length) % enabledIndices.length];
            break;
          case 'Home':
            e.preventDefault();
            targetIndex = enabledIndices[0];
            break;
          case 'End':
            e.preventDefault();
            targetIndex = enabledIndices[enabledIndices.length - 1];
            break;
        }

        if (targetIndex !== undefined) {
          triggerRefs.current[targetIndex]?.focus();
        }
      },
      [items],
    );

    const wrapperClasses = [
      styles.accordion,
      variant === 'bordered' ? styles.bordered : undefined,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={wrapperClasses} {...rest}>
        {items.map((item, index) => {
          const isOpen = openIndices.has(index);
          const triggerId = `accordion-trigger-${index}`;
          const panelId = `accordion-panel-${index}`;

          return (
            <div key={index} className={styles.item}>
              <h3>
                <button
                  id={triggerId}
                  ref={(el) => { triggerRefs.current[index] = el; }}
                  className={styles.trigger}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  aria-disabled={item.disabled || undefined}
                  onClick={() => !item.disabled && toggle(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  tabIndex={item.disabled ? -1 : 0}
                >
                  <span>{item.title}</span>
                  <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>
                    <ChevronIcon />
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                ref={(el) => { panelRefs.current[index] = el; }}
                role="region"
                aria-labelledby={triggerId}
                className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
                hidden={!isOpen}
              >
                <div className={styles.panelContent}>{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  },
);

Accordion.displayName = 'Accordion';

export default Accordion;
