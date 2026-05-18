/**
 * Edit Panel
 *
 * Right panel for editing the current UI model.
 * Provides both field-level editing and a raw JSON editor.
 * Changes are held locally until "Apply" is pressed.
 */

import { useState, useEffect, useCallback } from 'react';
import type { UiModel } from '../../types';
import { formatJson } from '../../utils/helpers';
import EmptyState from '../common/EmptyState';
import styles from './EditPanel.module.css';

interface EditPanelProps {
  model: UiModel | null;
  generatedModel: UiModel | null;
  onApply: (model: UiModel) => void;
  onReset: () => void;
}

export default function EditPanel({ model, generatedModel, onApply, onReset }: EditPanelProps) {
  const [localModel, setLocalModel] = useState<UiModel | null>(null);
  const [jsonText, setJsonText] = useState('');
  const [jsonError, setJsonError] = useState('');

  // Sync local state when external model changes
  useEffect(() => {
    if (model) {
      setLocalModel(structuredClone(model));
      setJsonText(formatJson(model));
      setJsonError('');
    } else {
      setLocalModel(null);
      setJsonText('');
      setJsonError('');
    }
  }, [model]);

  const updateField = useCallback((path: string, value: string) => {
    if (!localModel) return;

    const updated = structuredClone(localModel);
    switch (path) {
      case 'title':
        updated.title = value;
        break;
      case 'intro':
        updated.intro = value;
        break;
      case 'supportMessage':
        updated.supportMessage = value;
        break;
      case 'footerText':
        updated.footerText = value;
        break;
      default:
        break;
    }
    setLocalModel(updated);
    setJsonText(formatJson(updated));
    setJsonError('');
  }, [localModel]);

  const updateCardField = useCallback((cardIndex: number, field: string, value: string) => {
    if (!localModel || !localModel.cards) return;

    const updated = structuredClone(localModel);
    if (updated.cards && updated.cards[cardIndex]) {
      (updated.cards[cardIndex] as unknown as Record<string, unknown>)[field] = value;
    }
    setLocalModel(updated);
    setJsonText(formatJson(updated));
    setJsonError('');
  }, [localModel]);

  const handleJsonChange = useCallback((text: string) => {
    setJsonText(text);
    try {
      const parsed = JSON.parse(text) as UiModel;
      setLocalModel(parsed);
      setJsonError('');
    } catch (e) {
      setJsonError(e instanceof Error ? e.message : 'Invalid JSON');
    }
  }, []);

  const handleApply = () => {
    if (localModel && !jsonError) {
      onApply(localModel);
    }
  };

  if (!model) {
    return (
      <div className={styles.panel}>
        <div className={styles.header}>
          <span className={styles.headerLabel}>Edit</span>
        </div>
        <div className={styles.content}>
          <EmptyState
            title="Nothing to edit"
            description="Generate a UI first, then edit it here."
            icon={'\u270F\uFE0F'}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>Edit</span>
      </div>

      <div className={styles.content}>
        {/* Basic fields */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Page title</label>
          <input
            className={styles.fieldInput}
            value={localModel?.title || ''}
            onChange={(e) => updateField('title', e.target.value)}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Introduction</label>
          <textarea
            className={`${styles.fieldInput}`}
            value={localModel?.intro || ''}
            onChange={(e) => updateField('intro', e.target.value)}
            rows={3}
            style={{ resize: 'vertical', minHeight: 60 }}
          />
        </div>

        {localModel?.supportMessage !== undefined && (
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>Support message</label>
            <textarea
              className={styles.fieldInput}
              value={localModel?.supportMessage || ''}
              onChange={(e) => updateField('supportMessage', e.target.value)}
              rows={2}
              style={{ resize: 'vertical', minHeight: 50 }}
            />
          </div>
        )}

        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Footer text</label>
          <input
            className={styles.fieldInput}
            value={localModel?.footerText || ''}
            onChange={(e) => updateField('footerText', e.target.value)}
            placeholder="Optional footer text"
          />
        </div>

        {/* Card editors */}
        {localModel?.cards && localModel.cards.length > 0 && (
          <>
            <hr className={styles.divider} />
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Cards</label>
            </div>
            {localModel.cards.map((card, i) => (
              <div key={i} className={styles.cardSection}>
                <div className={styles.cardSectionTitle}>Card {i + 1}</div>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Title</label>
                  <input
                    className={styles.fieldInput}
                    value={card.title}
                    onChange={(e) => updateCardField(i, 'title', e.target.value)}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Message</label>
                  <input
                    className={styles.fieldInput}
                    value={card.message || ''}
                    onChange={(e) => updateCardField(i, 'message', e.target.value)}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Primary action</label>
                  <input
                    className={styles.fieldInput}
                    value={card.primaryAction || ''}
                    onChange={(e) => updateCardField(i, 'primaryAction', e.target.value)}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Secondary action</label>
                  <input
                    className={styles.fieldInput}
                    value={card.secondaryAction || ''}
                    onChange={(e) => updateCardField(i, 'secondaryAction', e.target.value)}
                  />
                </div>
              </div>
            ))}
          </>
        )}

        {/* JSON editor */}
        <hr className={styles.divider} />
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>JSON model</label>
          <textarea
            className={styles.jsonEditor}
            value={jsonText}
            onChange={(e) => handleJsonChange(e.target.value)}
            spellCheck={false}
          />
          {jsonError && <div className={styles.jsonError}>{jsonError}</div>}
        </div>
      </div>

      <div className={styles.actions}>
        <button
          className="ubs-btn ubs-btn--primary ubs-btn--sm"
          onClick={handleApply}
          disabled={!!jsonError}
          type="button"
        >
          Apply changes
        </button>
        <button
          className="ubs-btn ubs-btn--secondary ubs-btn--sm"
          onClick={onReset}
          disabled={!generatedModel}
          type="button"
        >
          Reset to generated
        </button>
      </div>
    </div>
  );
}
