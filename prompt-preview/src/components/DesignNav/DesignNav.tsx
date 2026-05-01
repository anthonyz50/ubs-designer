import type { SavedDesign } from '../../types';
import { UbsIcon } from '../common/UbsIcon';
import styles from './DesignNav.module.css';

interface DesignNavProps {
  designs: SavedDesign[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
}

function formatTime(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

export function DesignNav({ designs, activeId, onSelect, onDelete }: DesignNavProps) {
  return (
    <div className={styles.nav}>
      <div className={styles.heading}>
        <span>Designs</span>
        {designs.length > 0 && <span className={styles.count}>{designs.length}</span>}
      </div>

      {designs.length === 0 ? (
        <div className={styles.empty}>
          No designs yet. Enter a prompt and generate one.
        </div>
      ) : (
        <div className={styles.list}>
          {designs.map((design) => (
            <button
              key={design.id}
              className={styles.item}
              data-active={design.id === activeId}
              onClick={() => onSelect(design.id)}
            >
              <span className={styles.itemIcon}>
                <UbsIcon name="document" size={16} />
              </span>
              <span className={styles.itemContent}>
                <span className={styles.itemLabel}>{design.label}</span>
                <span className={styles.itemPrompt}>{design.prompt}</span>
                <span className={styles.itemMeta}>
                  <span className={styles.itemTime}>{formatTime(design.createdAt)}</span>
                  <span className={styles.itemPageCount}>
                    {design.model.pages.length} {design.model.pages.length === 1 ? 'page' : 'pages'}
                  </span>
                </span>
              </span>
              <span
                className={styles.deleteBtn}
                role="button"
                aria-label={`Delete ${design.label}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(design.id);
                }}
              >
                <UbsIcon name="close" size={12} />
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
