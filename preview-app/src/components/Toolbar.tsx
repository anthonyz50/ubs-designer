import type { ViewportSize, ZoomLevel } from '../types';
import styles from './Toolbar.module.css';

const VIEWPORTS: { size: ViewportSize; label: string }[] = [
  { size: 320, label: 'Mobile' },
  { size: 768, label: 'Tablet' },
  { size: 1024, label: 'Desktop' },
  { size: 1440, label: 'Wide' },
];

const ZOOMS: ZoomLevel[] = [50, 75, 100];

interface ToolbarProps {
  viewport: ViewportSize;
  zoom: ZoomLevel;
  darkMode: boolean;
  onViewportChange: (size: ViewportSize) => void;
  onZoomChange: (zoom: ZoomLevel) => void;
  onDarkModeToggle: () => void;
}

export function Toolbar({
  viewport,
  zoom,
  darkMode,
  onViewportChange,
  onZoomChange,
  onDarkModeToggle,
}: ToolbarProps) {
  return (
    <div className={styles.toolbar}>
      <div className={styles.group}>
        <span className={styles.groupLabel}>Viewport</span>
        {VIEWPORTS.map((vp) => (
          <button
            key={vp.size}
            className={`${styles.btn} ${viewport === vp.size ? styles.active : ''}`}
            onClick={() => onViewportChange(vp.size)}
          >
            {vp.label} {vp.size}px
          </button>
        ))}
      </div>

      <div className={styles.group}>
        <span className={styles.groupLabel}>Zoom</span>
        {ZOOMS.map((z) => (
          <button
            key={z}
            className={`${styles.btn} ${zoom === z ? styles.active : ''}`}
            onClick={() => onZoomChange(z)}
          >
            {z}%
          </button>
        ))}

        <div className={styles.separator} />

        <button
          className={`${styles.btn} ${darkMode ? styles.active : ''}`}
          onClick={onDarkModeToggle}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </div>
  );
}
