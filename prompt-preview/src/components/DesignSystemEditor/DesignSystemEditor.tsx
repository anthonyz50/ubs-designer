import { useState, useCallback, useEffect } from 'react';
import { UbsIcon } from '../common/UbsIcon';
import type {
  DesignSystemProfile,
  DesignTokens,
} from '../../services/designSystemService';
import {
  getDefaultProfile,
  getSavedProfiles,
  saveProfile,
  deleteProfile,
  applyProfile,
  resetToDefault,
} from '../../services/designSystemService';
import styles from './DesignSystemEditor.module.css';

// ── Colour section definitions ──

interface ColourEntry {
  key: keyof DesignTokens['colours'];
  label: string;
}

const BRAND_COLOURS: ColourEntry[] = [
  { key: 'primary', label: 'Primary' },
  { key: 'primaryDark', label: 'Primary dark' },
  { key: 'accent', label: 'Accent' },
  { key: 'focus', label: 'Focus' },
];

const BG_COLOURS: ColourEntry[] = [
  { key: 'bgPrimary', label: 'Background' },
  { key: 'bgSecondary', label: 'Bg secondary' },
  { key: 'bgTertiary', label: 'Bg tertiary' },
];

const TEXT_COLOURS: ColourEntry[] = [
  { key: 'textPrimary', label: 'Text primary' },
  { key: 'textSecondary', label: 'Text secondary' },
  { key: 'textTertiary', label: 'Text tertiary' },
];

const BORDER_COLOURS: ColourEntry[] = [
  { key: 'border', label: 'Border' },
  { key: 'borderStrong', label: 'Border strong' },
];

const STATUS_COLOURS: ColourEntry[] = [
  { key: 'statusError', label: 'Error' },
  { key: 'statusWarning', label: 'Warning' },
  { key: 'statusSuccess', label: 'Success' },
  { key: 'statusInfo', label: 'Info' },
];

const WEIGHT_OPTIONS = [300, 400, 500, 700];

// ── Component ──

export function DesignSystemEditor() {
  const [activeProfileId, setActiveProfileId] = useState('ubs-default');
  const [tokens, setTokens] = useState<DesignTokens>(getDefaultProfile().tokens);
  const [profiles, setProfiles] = useState<DesignSystemProfile[]>([]);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [saveName, setSaveName] = useState('');
  const [saveDescription, setSaveDescription] = useState('');

  // Load saved profiles on mount
  useEffect(() => {
    setProfiles(getSavedProfiles());
  }, []);

  // Apply tokens whenever they change
  useEffect(() => {
    const profile: DesignSystemProfile = {
      id: activeProfileId,
      name: '',
      description: '',
      tokens,
      createdAt: '',
      updatedAt: '',
    };
    applyProfile(profile);
  }, [tokens, activeProfileId]);

  const updateColour = useCallback(
    (key: keyof DesignTokens['colours'], value: string) => {
      setTokens((prev) => ({
        ...prev,
        colours: { ...prev.colours, [key]: value },
      }));
    },
    [],
  );

  const updateTypography = useCallback(
    <K extends keyof DesignTokens['typography']>(
      key: K,
      value: DesignTokens['typography'][K],
    ) => {
      setTokens((prev) => ({
        ...prev,
        typography: { ...prev.typography, [key]: value },
      }));
    },
    [],
  );

  const updateSpacing = useCallback(
    <K extends keyof DesignTokens['spacing']>(
      key: K,
      value: DesignTokens['spacing'][K],
    ) => {
      setTokens((prev) => ({
        ...prev,
        spacing: { ...prev.spacing, [key]: value },
      }));
    },
    [],
  );

  const updateBorderRadius = useCallback(
    (key: keyof DesignTokens['borderRadius'], value: string) => {
      setTokens((prev) => ({
        ...prev,
        borderRadius: { ...prev.borderRadius, [key]: value },
      }));
    },
    [],
  );

  const updateShadow = useCallback(
    (key: keyof DesignTokens['shadows'], value: string) => {
      setTokens((prev) => ({
        ...prev,
        shadows: { ...prev.shadows, [key]: value },
      }));
    },
    [],
  );

  const handleProfileChange = useCallback(
    (id: string) => {
      setActiveProfileId(id);
      if (id === 'ubs-default') {
        const defaultTokens = getDefaultProfile().tokens;
        setTokens(defaultTokens);
      } else {
        const saved = profiles.find((p) => p.id === id);
        if (saved) {
          setTokens(structuredClone(saved.tokens));
        }
      }
    },
    [profiles],
  );

  const handleReset = useCallback(() => {
    resetToDefault();
    setTokens(getDefaultProfile().tokens);
    setActiveProfileId('ubs-default');
  }, []);

  const handleSaveAsNew = useCallback(() => {
    setShowSaveModal(true);
    setSaveName('');
    setSaveDescription('');
  }, []);

  const handleSaveConfirm = useCallback(() => {
    if (!saveName.trim()) return;

    const now = new Date().toISOString();
    const profile: DesignSystemProfile = {
      id: `profile-${Date.now()}`,
      name: saveName.trim(),
      description: saveDescription.trim(),
      tokens: structuredClone(tokens),
      createdAt: now,
      updatedAt: now,
    };
    saveProfile(profile);
    setProfiles(getSavedProfiles());
    setActiveProfileId(profile.id);
    setShowSaveModal(false);
  }, [saveName, saveDescription, tokens]);

  const handleDeleteProfile = useCallback(
    (id: string) => {
      if (id === 'ubs-default') return;
      deleteProfile(id);
      setProfiles(getSavedProfiles());
      if (activeProfileId === id) {
        handleReset();
      }
    },
    [activeProfileId, handleReset],
  );



  // ── Render helpers ──

  function renderColourGroup(title: string, entries: ColourEntry[]) {
    return (
      <>
        <span className={styles.subSectionTitle}>{title}</span>
        <div className={styles.colourGrid}>
          {entries.map(({ key, label }) => (
            <div key={key} className={styles.colourItem}>
              <div
                className={styles.colourSwatch}
                style={{ backgroundColor: tokens.colours[key] }}
              >
                <input
                  type="color"
                  className={styles.colourPickerInput}
                  value={tokens.colours[key]}
                  onChange={(e) => updateColour(key, e.target.value)}
                  title={label}
                />
              </div>
              <div className={styles.colourInfo}>
                <span className={styles.colourLabel}>{label}</span>
                <input
                  className={styles.colourHexInput}
                  type="text"
                  value={tokens.colours[key]}
                  onChange={(e) => {
                    const val = e.target.value;
                    updateColour(key, val);
                  }}
                  onBlur={(e) => {
                    let val = e.target.value.trim();
                    if (val && !val.startsWith('#')) val = `#${val}`;
                    updateColour(key, val);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className={styles.panel}>
      {/* ── Profile bar ── */}
      <div className={styles.profileBar}>
        <select
          className={`${styles.fieldSelect} ${styles.profileSelect}`}
          value={activeProfileId}
          onChange={(e) => handleProfileChange(e.target.value)}
        >
          <option value="ubs-default">UBS Default</option>
          {profiles.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
        <button
          className="ubs-btn ubs-btn-secondary ubs-btn-sm"
          onClick={handleSaveAsNew}
          title="Save as new profile"
        >
          Save as new
        </button>
        <button
          className="ubs-btn ubs-btn-ghost ubs-btn-sm"
          onClick={handleReset}
          title="Reset to default UBS tokens"
        >
          Reset
        </button>
        {activeProfileId !== 'ubs-default' && (
          <button
            className="ubs-btn ubs-btn-ghost ubs-btn-sm"
            onClick={() => handleDeleteProfile(activeProfileId)}
            title="Delete this profile"
          >
            Delete
          </button>
        )}
      </div>

      {/* ── Scrollable sections ── */}
      <div className={styles.sections}>
        {/* ── Colours ── */}
        <div className={styles.section}>
          <span className={styles.sectionTitle}>Colours</span>
          {renderColourGroup('Brand', BRAND_COLOURS)}
          {renderColourGroup('Background', BG_COLOURS)}
          {renderColourGroup('Text', TEXT_COLOURS)}
          {renderColourGroup('Border', BORDER_COLOURS)}
          {renderColourGroup('Status', STATUS_COLOURS)}
        </div>

        {/* ── Typography ── */}
        <div className={styles.section}>
          <span className={styles.sectionTitle}>Typography</span>
          <div className={styles.fieldGrid}>
            <div className={styles.fieldFull}>
              <label className={styles.fieldLabel}>Font family</label>
              <input
                className={styles.fieldInput}
                type="text"
                value={tokens.typography.fontFamily}
                onChange={(e) =>
                  updateTypography('fontFamily', e.target.value)
                }
              />
            </div>
            <div className={styles.fieldFull}>
              <label className={styles.fieldLabel}>Fallback fonts</label>
              <input
                className={styles.fieldInput}
                type="text"
                value={tokens.typography.fontFamilyFallback}
                onChange={(e) =>
                  updateTypography('fontFamilyFallback', e.target.value)
                }
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Header weight</label>
              <select
                className={styles.fieldSelect}
                value={tokens.typography.headerWeight}
                onChange={(e) =>
                  updateTypography('headerWeight', Number(e.target.value))
                }
              >
                {WEIGHT_OPTIONS.map((w) => (
                  <option key={w} value={w}>
                    {w}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Body weight</label>
              <select
                className={styles.fieldSelect}
                value={tokens.typography.bodyWeight}
                onChange={(e) =>
                  updateTypography('bodyWeight', Number(e.target.value))
                }
              >
                {WEIGHT_OPTIONS.map((w) => (
                  <option key={w} value={w}>
                    {w}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Base font size</label>
              <input
                className={styles.fieldInput}
                type="text"
                value={tokens.typography.baseFontSize}
                onChange={(e) =>
                  updateTypography('baseFontSize', e.target.value)
                }
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Line height</label>
              <input
                className={styles.fieldInput}
                type="text"
                value={tokens.typography.lineHeight}
                onChange={(e) =>
                  updateTypography('lineHeight', e.target.value)
                }
              />
            </div>
          </div>
        </div>

        {/* ── Spacing ── */}
        <div className={styles.section}>
          <span className={styles.sectionTitle}>Spacing</span>
          <div className={styles.fieldGrid}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Base unit (px)</label>
              <input
                className={styles.fieldInput}
                type="number"
                min={1}
                max={16}
                value={tokens.spacing.unit}
                onChange={(e) =>
                  updateSpacing('unit', Number(e.target.value) || 4)
                }
              />
            </div>
          </div>
          <div className={styles.spacingPreview}>
            {tokens.spacing.scale.map((multiplier, i) => {
              const px = tokens.spacing.unit * multiplier;
              return (
                <div key={i} className={styles.spacingBar}>
                  <span className={styles.spacingBarLabel}>
                    space-{i} ({px}px)
                  </span>
                  <div
                    className={styles.spacingBarFill}
                    style={{ width: `${Math.max(px, 2)}px` }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Border radius ── */}
        <div className={styles.section}>
          <span className={styles.sectionTitle}>Border radius</span>
          <div className={styles.fieldGrid}>
            {(
              Object.keys(tokens.borderRadius) as Array<
                keyof DesignTokens['borderRadius']
              >
            ).map((key) => (
              <div key={key} className={styles.field}>
                <label className={styles.fieldLabel}>
                  {key === 'sm'
                    ? 'Small'
                    : key === 'md'
                      ? 'Medium'
                      : key === 'lg'
                        ? 'Large'
                        : 'Full'}
                </label>
                <input
                  className={styles.fieldInput}
                  type="text"
                  value={tokens.borderRadius[key]}
                  onChange={(e) => updateBorderRadius(key, e.target.value)}
                />
              </div>
            ))}
          </div>
          <div className={styles.radiusPreview}>
            {(
              Object.entries(tokens.borderRadius) as Array<
                [keyof DesignTokens['borderRadius'], string]
              >
            ).map(([key, value]) => (
              <div key={key} className={styles.radiusBox}>
                <div
                  className={styles.radiusSquare}
                  style={{ borderRadius: value }}
                />
                <span className={styles.radiusLabel}>
                  {key}: {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Shadows ── */}
        <div className={styles.section}>
          <span className={styles.sectionTitle}>Shadows</span>
          {(
            Object.keys(tokens.shadows) as Array<keyof DesignTokens['shadows']>
          ).map((key) => (
            <div key={key} className={styles.field}>
              <label className={styles.fieldLabel}>
                {key === 'sm' ? 'Small' : key === 'md' ? 'Medium' : 'Large'}
              </label>
              <input
                className={styles.shadowInput}
                type="text"
                value={tokens.shadows[key]}
                onChange={(e) => updateShadow(key, e.target.value)}
              />
            </div>
          ))}
          <div className={styles.shadowPreview}>
            {(
              Object.entries(tokens.shadows) as Array<
                [keyof DesignTokens['shadows'], string]
              >
            ).map(([key, value]) => (
              <div key={key} className={styles.shadowBox}>
                <div
                  className={styles.shadowSquare}
                  style={{ boxShadow: value }}
                />
                <span className={styles.shadowLabel}>{key}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Live component preview ── */}
        <div className={styles.section}>
          <span className={styles.sectionTitle}>Live preview</span>
          <div className={styles.previewContainer}>
            {/* Buttons */}
            <div>
              <div className={styles.previewLabel}>Buttons</div>
              <div className={styles.previewRow}>
                <button className="ubs-btn ubs-btn-primary">Primary</button>
                <button className="ubs-btn ubs-btn-secondary">Secondary</button>
                <button className="ubs-btn ubs-btn-ghost">Ghost</button>
              </div>
            </div>

            {/* Card */}
            <div>
              <div className={styles.previewLabel}>Card</div>
              <div className={styles.previewCard}>
                <div className={styles.previewCardHeader}>Card header</div>
                <div className={styles.previewCardBody}>
                  Card body content with some example text to demonstrate
                  how the tokens affect component appearance.
                </div>
              </div>
            </div>

            {/* Alert */}
            <div>
              <div className={styles.previewLabel}>Alert</div>
              <div className="ubs-alert ubs-alert-info">
                <UbsIcon name="info" size={14} /> This is an informational alert to preview the info status colour.
              </div>
            </div>

            {/* Form field */}
            <div>
              <div className={styles.previewLabel}>Form field</div>
              <div className="ubs-form-group">
                <label className="ubs-label">Label text</label>
                <input
                  className="ubs-input"
                  type="text"
                  placeholder="Placeholder text"
                  readOnly
                />
              </div>
            </div>

            {/* Badge */}
            <div>
              <div className={styles.previewLabel}>Badges</div>
              <div className={styles.previewRow}>
                <span className="ubs-badge ubs-badge-success"><UbsIcon name="success-circle" size={10} /> Operational</span>
                <span className="ubs-badge ubs-badge-warning"><UbsIcon name="warning" size={10} /> Degraded</span>
                <span className="ubs-badge ubs-badge-error"><UbsIcon name="error-circle" size={10} /> Outage</span>
                <span className="ubs-badge ubs-badge-info"><UbsIcon name="info" size={10} /> Info</span>
              </div>
            </div>

            {/* Table */}
            <div>
              <div className={styles.previewLabel}>Table</div>
              <table className={styles.previewTable}>
                <thead>
                  <tr>
                    <th>Column A</th>
                    <th>Column B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Row 1, A</td>
                    <td>Row 1, B</td>
                  </tr>
                  <tr>
                    <td>Row 2, A</td>
                    <td>Row 2, B</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* ── Save modal ── */}
      {showSaveModal && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowSaveModal(false);
          }}
        >
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <span className={styles.modalTitle}>Save profile</span>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Profile name</label>
                <input
                  className={styles.fieldInput}
                  type="text"
                  value={saveName}
                  onChange={(e) => setSaveName(e.target.value)}
                  placeholder="e.g. Dark mode experiment"
                  autoFocus
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>
                  Description (optional)
                </label>
                <input
                  className={styles.fieldInput}
                  type="text"
                  value={saveDescription}
                  onChange={(e) => setSaveDescription(e.target.value)}
                  placeholder="Brief description of this profile"
                />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button
                className="ubs-btn ubs-btn-ghost ubs-btn-sm"
                onClick={() => setShowSaveModal(false)}
              >
                Cancel
              </button>
              <button
                className="ubs-btn ubs-btn-primary ubs-btn-sm"
                onClick={handleSaveConfirm}
                disabled={!saveName.trim()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
