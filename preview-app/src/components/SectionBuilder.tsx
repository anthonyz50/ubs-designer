import { useCallback } from 'react';
import type {
  SectionConfig,
  SectionType,
  SectionOptions,
  StatsRowOptions,
  ChartGridOptions,
  FeatureGridOptions,
  FormFieldsOptions,
  TableOptions,
  ContentBlockOptions,
  CardGridOptions,
  CTABlockOptions,
  ChartTypeOption,
  FormFieldType,
  TextAlignment,
  CardVariantOption,
  CTAVariantOption,
} from '../types';
import styles from './SectionBuilder.module.css';

const SECTION_TYPES: { value: SectionType; label: string }[] = [
  { value: 'stats-row', label: 'Stats Row' },
  { value: 'chart-grid', label: 'Chart Grid' },
  { value: 'feature-grid', label: 'Feature Grid' },
  { value: 'form-fields', label: 'Form Fields' },
  { value: 'table', label: 'Table' },
  { value: 'content-block', label: 'Content Block' },
  { value: 'card-grid', label: 'Card Grid' },
  { value: 'cta-block', label: 'CTA Block' },
];

function getDefaultOptions(type: SectionType): SectionOptions {
  switch (type) {
    case 'stats-row': return { count: 4, sampleData: true } satisfies StatsRowOptions;
    case 'chart-grid': return { chartType: 'donut', count: 2 } satisfies ChartGridOptions;
    case 'feature-grid': return { count: 3, withIcons: true } satisfies FeatureGridOptions;
    case 'form-fields': return { fieldTypes: ['text', 'email', 'select'] } satisfies FormFieldsOptions;
    case 'table': return { columns: 5, rows: 6, sortable: true, selectable: false } satisfies TableOptions;
    case 'content-block': return { withIllustration: true, textAlignment: 'left' } satisfies ContentBlockOptions;
    case 'card-grid': return { count: 3, variant: 'default' } satisfies CardGridOptions;
    case 'cta-block': return { variant: 'button', label: 'Get Started' } satisfies CTABlockOptions;
  }
}

interface SectionBuilderProps {
  section: SectionConfig;
  index: number;
  onChange: (id: string, updates: Partial<SectionConfig>) => void;
  onRemove: (id: string) => void;
}

export function SectionBuilder({ section, index, onChange, onRemove }: SectionBuilderProps) {
  const updateOptions = useCallback(
    (optUpdates: Record<string, unknown>) => {
      onChange(section.id, { options: { ...section.options, ...optUpdates } as SectionOptions });
    },
    [section.id, section.options, onChange],
  );

  const handleTypeChange = useCallback(
    (newType: SectionType) => {
      onChange(section.id, { type: newType, options: getDefaultOptions(newType) });
    },
    [section.id, onChange],
  );

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>Section {index + 1}</span>
        <button className={styles.removeBtn} onClick={() => onRemove(section.id)}>
          Remove
        </button>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>Section Title</label>
          <input
            className={styles.input}
            value={section.title}
            onChange={(e) => onChange(section.id, { title: e.target.value })}
            placeholder="Section title..."
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Type</label>
          <select
            className={styles.select}
            value={section.type}
            onChange={(e) => handleTypeChange(e.target.value as SectionType)}
          >
            {SECTION_TYPES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.subOptions}>
        <div className={styles.subTitle}>Options</div>
        {renderSubOptions(section, updateOptions)}
      </div>
    </div>
  );
}

function renderSubOptions(
  section: SectionConfig,
  update: (opts: Record<string, unknown>) => void,
) {
  switch (section.type) {
    case 'stats-row': {
      const opts = section.options as StatsRowOptions;
      return (
        <>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Number of Stats</label>
              <input
                className={styles.input}
                type="number"
                min={1}
                max={6}
                value={opts.count}
                onChange={(e) => update({ count: Math.max(1, Math.min(6, Number(e.target.value))) })}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={opts.sampleData}
                  onChange={(e) => update({ sampleData: e.target.checked })}
                />
                Sample Data
              </label>
            </div>
          </div>
        </>
      );
    }

    case 'chart-grid': {
      const opts = section.options as ChartGridOptions;
      return (
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Chart Type</label>
            <select
              className={styles.select}
              value={opts.chartType}
              onChange={(e) => update({ chartType: e.target.value as ChartTypeOption })}
            >
              <option value="donut">Donut</option>
              <option value="bar">Bar</option>
              <option value="line">Line</option>
            </select>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Count (1-4)</label>
            <input
              className={styles.input}
              type="number"
              min={1}
              max={4}
              value={opts.count}
              onChange={(e) => update({ count: Math.max(1, Math.min(4, Number(e.target.value))) })}
            />
          </div>
        </div>
      );
    }

    case 'feature-grid': {
      const opts = section.options as FeatureGridOptions;
      return (
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Features (2-6)</label>
            <input
              className={styles.input}
              type="number"
              min={2}
              max={6}
              value={opts.count}
              onChange={(e) => update({ count: Math.max(2, Math.min(6, Number(e.target.value))) })}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={opts.withIcons}
                onChange={(e) => update({ withIcons: e.target.checked })}
              />
              With Icons
            </label>
          </div>
        </div>
      );
    }

    case 'form-fields': {
      const opts = section.options as FormFieldsOptions;
      const allTypes: FormFieldType[] = ['text', 'email', 'select', 'textarea', 'checkbox', 'radio', 'toggle', 'date'];
      return (
        <div>
          <label className={styles.label}>Field Types</label>
          <div className={styles.checkGrid}>
            {allTypes.map((ft) => (
              <label key={ft} className={styles.checkLabel}>
                <input
                  type="checkbox"
                  checked={opts.fieldTypes.includes(ft)}
                  onChange={(e) => {
                    const next = e.target.checked
                      ? [...opts.fieldTypes, ft]
                      : opts.fieldTypes.filter((t) => t !== ft);
                    update({ fieldTypes: next });
                  }}
                />
                {ft}
              </label>
            ))}
          </div>
        </div>
      );
    }

    case 'table': {
      const opts = section.options as TableOptions;
      return (
        <>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Columns</label>
              <input
                className={styles.input}
                type="number"
                min={2}
                max={7}
                value={opts.columns}
                onChange={(e) => update({ columns: Math.max(2, Math.min(7, Number(e.target.value))) })}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Rows</label>
              <input
                className={styles.input}
                type="number"
                min={1}
                max={8}
                value={opts.rows}
                onChange={(e) => update({ rows: Math.max(1, Math.min(8, Number(e.target.value))) })}
              />
            </div>
          </div>
          <div className={styles.row} style={{ marginTop: 8 }}>
            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={opts.sortable}
                onChange={(e) => update({ sortable: e.target.checked })}
              />
              Sortable
            </label>
            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={opts.selectable}
                onChange={(e) => update({ selectable: e.target.checked })}
              />
              Selectable
            </label>
          </div>
        </>
      );
    }

    case 'content-block': {
      const opts = section.options as ContentBlockOptions;
      return (
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.toggle}>
              <input
                type="checkbox"
                checked={opts.withIllustration}
                onChange={(e) => update({ withIllustration: e.target.checked })}
              />
              With Illustration
            </label>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Text Alignment</label>
            <select
              className={styles.select}
              value={opts.textAlignment}
              onChange={(e) => update({ textAlignment: e.target.value as TextAlignment })}
            >
              <option value="left">Left</option>
              <option value="center">Centre</option>
              <option value="right">Right</option>
            </select>
          </div>
        </div>
      );
    }

    case 'card-grid': {
      const opts = section.options as CardGridOptions;
      return (
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Cards (2-6)</label>
            <input
              className={styles.input}
              type="number"
              min={2}
              max={6}
              value={opts.count}
              onChange={(e) => update({ count: Math.max(2, Math.min(6, Number(e.target.value))) })}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Variant</label>
            <select
              className={styles.select}
              value={opts.variant}
              onChange={(e) => update({ variant: e.target.value as CardVariantOption })}
            >
              <option value="default">Default</option>
              <option value="pastel1">Pastel I</option>
              <option value="pastel2">Pastel II</option>
            </select>
          </div>
        </div>
      );
    }

    case 'cta-block': {
      const opts = section.options as CTABlockOptions;
      return (
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Variant</label>
            <select
              className={styles.select}
              value={opts.variant}
              onChange={(e) => update({ variant: e.target.value as CTAVariantOption })}
            >
              <option value="button">Button</option>
              <option value="text">Text</option>
            </select>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Label</label>
            <input
              className={styles.input}
              value={opts.label}
              onChange={(e) => update({ label: e.target.value })}
              placeholder="CTA text..."
            />
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}
