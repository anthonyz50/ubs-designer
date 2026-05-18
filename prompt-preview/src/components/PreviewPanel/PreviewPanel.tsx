/**
 * Preview Panel
 *
 * Centre panel that renders the generated UI model.
 * Includes viewport toggle, refresh and clear buttons.
 */

import type { UiModel, ViewportSize } from '../../types';
import UbsRenderer from '../UbsRenderer/UbsRenderer';
import LoadingSpinner from '../common/LoadingSpinner';
import EmptyState from '../common/EmptyState';
import styles from './PreviewPanel.module.css';

interface PreviewPanelProps {
  model: UiModel | null;
  viewportSize: ViewportSize;
  onViewportChange: (size: ViewportSize) => void;
  onRefresh: () => void;
  onClear: () => void;
  isGenerating: boolean;
}

export default function PreviewPanel({
  model,
  viewportSize,
  onViewportChange,
  onRefresh,
  onClear,
  isGenerating,
}: PreviewPanelProps) {
  return (
    <div className={styles.panel}>
      <div className={styles.toolbar}>
        <span className={styles.toolbarLabel}>Preview</span>
        <button
          className={`${styles.viewportBtn} ${viewportSize === 'desktop' ? styles.viewportBtnActive : ''}`}
          onClick={() => onViewportChange('desktop')}
          type="button"
        >
          Desktop
        </button>
        <button
          className={`${styles.viewportBtn} ${viewportSize === 'mobile' ? styles.viewportBtnActive : ''}`}
          onClick={() => onViewportChange('mobile')}
          type="button"
        >
          Mobile
        </button>
        <button
          className="ubs-btn ubs-btn--ghost ubs-btn--sm"
          onClick={onRefresh}
          disabled={!model}
          type="button"
        >
          Refresh
        </button>
        <button
          className="ubs-btn ubs-btn--ghost ubs-btn--sm"
          onClick={onClear}
          disabled={!model}
          type="button"
        >
          Clear
        </button>
      </div>

      <div className={styles.previewArea}>
        <div
          className={`${styles.previewContainer} ${viewportSize === 'mobile' ? styles.previewMobile : ''}`}
        >
          {isGenerating ? (
            <LoadingSpinner message="Generating your UI..." />
          ) : model ? (
            <UbsRenderer model={model} />
          ) : (
            <EmptyState
              title="No preview yet"
              description="Enter a prompt and press Generate to preview your UI."
              icon={'\uD83D\uDDBC\uFE0F'}
            />
          )}
        </div>
      </div>
    </div>
  );
}
