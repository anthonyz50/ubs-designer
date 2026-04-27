import { useCallback } from 'react';
import type { LayoutConfig, PageType, ColourDirection, SectionConfig, SectionType, StatsRowOptions } from '../types';
import { SectionBuilder } from './SectionBuilder';
import styles from './LayoutBuilder.module.css';

const PAGE_TYPES: { value: PageType; label: string }[] = [
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'landing', label: 'Landing Page' },
  { value: 'content', label: 'Content Page' },
  { value: 'form', label: 'Form Page' },
  { value: 'table', label: 'Table Page' },
  { value: 'login', label: 'Login' },
  { value: 'error', label: 'Error Page' },
  { value: 'settings', label: 'Settings' },
];

const COLOUR_DIRECTIONS: { value: ColourDirection; label: string }[] = [
  { value: 'gray', label: 'Gray' },
  { value: 'bordeaux', label: 'Bordeaux' },
  { value: 'bronze', label: 'Bronze' },
];

interface LayoutBuilderProps {
  config: LayoutConfig;
  onChange: (config: LayoutConfig) => void;
  onGenerate: () => void;
  onExportHTML: () => void;
  onExportReact: () => void;
}

let sectionCounter = 0;

export function LayoutBuilder({ config, onChange, onGenerate, onExportHTML, onExportReact }: LayoutBuilderProps) {
  const update = useCallback(
    (partial: Partial<LayoutConfig>) => {
      onChange({ ...config, ...partial });
    },
    [config, onChange],
  );

  const handleSectionChange = useCallback(
    (id: string, updates: Partial<SectionConfig>) => {
      const next = config.sections.map((s) => (s.id === id ? { ...s, ...updates } : s));
      update({ sections: next });
    },
    [config.sections, update],
  );

  const handleSectionRemove = useCallback(
    (id: string) => {
      update({ sections: config.sections.filter((s) => s.id !== id) });
    },
    [config.sections, update],
  );

  const addSection = useCallback(() => {
    sectionCounter++;
    const newSection: SectionConfig = {
      id: `section-${Date.now()}-${sectionCounter}`,
      title: '',
      type: 'stats-row' as SectionType,
      options: { count: 4, sampleData: true } as StatsRowOptions,
    };
    update({ sections: [...config.sections, newSection] });
  }, [config.sections, update]);

  const showMovingFrame = config.pageType === 'landing' || config.pageType === 'content';
  const showHeroImage = config.pageType === 'landing' || config.pageType === 'content';

  return (
    <div className={styles.builder}>
      <div className={styles.header}>
        <h2 className={styles.title}>Layout Builder</h2>
        <p className={styles.subtitle}>Configure your UBS-branded page</p>
      </div>

      <div className={styles.scrollArea}>
        {/* Page Settings */}
        <div className={styles.fieldGroup}>
          <div className={styles.groupTitle}>Page Settings</div>

          <div className={styles.field}>
            <label className={styles.label}>Page Type</label>
            <select
              className={styles.select}
              value={config.pageType}
              onChange={(e) => update({ pageType: e.target.value as PageType })}
            >
              {PAGE_TYPES.map((pt) => (
                <option key={pt.value} value={pt.value}>{pt.label}</option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Title</label>
            <input
              className={styles.input}
              value={config.title}
              onChange={(e) => update({ title: e.target.value })}
              placeholder="Page title..."
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Subtitle (optional)</label>
            <input
              className={styles.input}
              value={config.subtitle}
              onChange={(e) => update({ subtitle: e.target.value })}
              placeholder="Page subtitle..."
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Colour Direction</label>
            <select
              className={styles.select}
              value={config.colourDirection}
              onChange={(e) => update({ colourDirection: e.target.value as ColourDirection })}
            >
              {COLOUR_DIRECTIONS.map((cd) => (
                <option key={cd.value} value={cd.value}>{cd.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Toggles */}
        <div className={styles.fieldGroup}>
          <div className={styles.groupTitle}>Layout Options</div>

          <ToggleOption label="Dark Mode" checked={config.darkMode} onChange={(v) => update({ darkMode: v })} />
          <ToggleOption label="Include Navbar" checked={config.includeNavbar} onChange={(v) => update({ includeNavbar: v })} />
          <ToggleOption label="Include Footer" checked={config.includeFooter} onChange={(v) => update({ includeFooter: v })} />
          <ToggleOption label="Include Impulse" checked={config.includeImpulse} onChange={(v) => update({ includeImpulse: v })} />
          {showMovingFrame && (
            <ToggleOption label="Include Moving Frame" checked={config.includeMovingFrame} onChange={(v) => update({ includeMovingFrame: v })} />
          )}
          {showHeroImage && (
            <ToggleOption label="Hero Image" checked={config.heroImage} onChange={(v) => update({ heroImage: v })} />
          )}
        </div>

        {/* Sections */}
        <div className={styles.fieldGroup}>
          <div className={styles.groupTitle}>Sections</div>

          <div className={styles.sectionsList}>
            {config.sections.map((section, i) => (
              <SectionBuilder
                key={section.id}
                section={section}
                index={i}
                onChange={handleSectionChange}
                onRemove={handleSectionRemove}
              />
            ))}
          </div>

          <button className={styles.addSectionBtn} onClick={addSection}>
            + Add Section
          </button>
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.primaryBtn} onClick={onGenerate}>
          Generate Preview
        </button>
        <div className={styles.secondaryRow}>
          <button className={styles.secondaryBtn} onClick={onExportHTML}>
            Export HTML
          </button>
          <button className={styles.secondaryBtn} onClick={onExportReact}>
            Export React
          </button>
        </div>
      </div>
    </div>
  );
}

function ToggleOption({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className={styles.toggleRow}>
      <span className={styles.toggleLabel}>{label}</span>
      <div
        className={`${styles.toggleSwitch} ${checked ? styles.active : ''}`}
        onClick={() => onChange(!checked)}
        role="switch"
        aria-checked={checked}
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onChange(!checked); }}}
      />
    </div>
  );
}
