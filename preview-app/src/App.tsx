import { useState, useCallback, type ReactNode } from 'react';
import type { LayoutConfig, ViewportSize, ZoomLevel, StatsRowOptions } from './types';
import { LayoutBuilder } from './components/LayoutBuilder';
import { PreviewPanel } from './components/PreviewPanel';
import { generateLayout } from './generators/generateLayout';
import { generateHTML } from './generators/generateHTML';
import { generateReact } from './generators/generateReact';
import styles from './App.module.css';

const DEFAULT_CONFIG: LayoutConfig = {
  pageType: 'dashboard',
  title: 'Portfolio Overview',
  subtitle: 'Your current holdings and performance',
  colourDirection: 'gray',
  darkMode: false,
  includeNavbar: true,
  includeFooter: true,
  includeImpulse: false,
  includeMovingFrame: false,
  heroImage: false,
  sections: [
    {
      id: 'default-stats',
      title: 'Key Figures',
      type: 'stats-row',
      options: { count: 4, sampleData: true } as StatsRowOptions,
    },
  ],
};

function downloadFile(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function App() {
  const [config, setConfig] = useState<LayoutConfig>(DEFAULT_CONFIG);
  const [preview, setPreview] = useState<ReactNode | null>(null);
  const [viewport, setViewport] = useState<ViewportSize>(1024);
  const [zoom, setZoom] = useState<ZoomLevel>(75);

  const handleGenerate = useCallback(() => {
    const element = generateLayout(config);
    setPreview(element);
  }, [config]);

  const handleExportHTML = useCallback(() => {
    const html = generateHTML(config);
    downloadFile(html, 'ubs-layout.html', 'text/html');
  }, [config]);

  const handleExportReact = useCallback(() => {
    const tsx = generateReact(config);
    downloadFile(tsx, 'GeneratedLayout.tsx', 'text/typescript');
  }, [config]);

  const handleDarkModeToggle = useCallback(() => {
    setConfig((prev) => {
      const next = { ...prev, darkMode: !prev.darkMode };
      return next;
    });
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.leftPanel}>
        <LayoutBuilder
          config={config}
          onChange={setConfig}
          onGenerate={handleGenerate}
          onExportHTML={handleExportHTML}
          onExportReact={handleExportReact}
        />
      </div>
      <div className={styles.rightPanel}>
        <PreviewPanel
          preview={preview}
          viewport={viewport}
          zoom={zoom}
          darkMode={config.darkMode}
          onViewportChange={setViewport}
          onZoomChange={setZoom}
          onDarkModeToggle={handleDarkModeToggle}
        />
      </div>
    </div>
  );
}
