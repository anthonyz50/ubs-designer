import { type ReactNode } from 'react';
import type { ViewportSize, ZoomLevel } from '../types';
import { Toolbar } from './Toolbar';
import styles from './PreviewPanel.module.css';

interface PreviewPanelProps {
  preview: ReactNode | null;
  viewport: ViewportSize;
  zoom: ZoomLevel;
  darkMode: boolean;
  onViewportChange: (size: ViewportSize) => void;
  onZoomChange: (zoom: ZoomLevel) => void;
  onDarkModeToggle: () => void;
}

export function PreviewPanel({
  preview,
  viewport,
  zoom,
  darkMode,
  onViewportChange,
  onZoomChange,
  onDarkModeToggle,
}: PreviewPanelProps) {
  const scale = zoom / 100;

  return (
    <div className={styles.panel}>
      <Toolbar
        viewport={viewport}
        zoom={zoom}
        darkMode={darkMode}
        onViewportChange={onViewportChange}
        onZoomChange={onZoomChange}
        onDarkModeToggle={onDarkModeToggle}
      />

      <div className={styles.previewArea}>
        {preview ? (
          <div
            className={styles.previewFrame}
            style={{
              width: viewport,
              transform: `scale(${scale})`,
              minHeight: 600,
            }}
          >
            {preview}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🏗️</div>
            <div className={styles.emptyTitle}>No preview yet</div>
            <div className={styles.emptyText}>
              Configure your layout and click "Generate Preview"
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
