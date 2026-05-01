import { useState, useCallback, useEffect } from 'react';
import type { DesignModel } from '../../types';
import { UbsIcon } from '../common/UbsIcon';
import { EmptyState } from '../common/EmptyState';
import { formatJson } from '../../utils/helpers';
import styles from './EditPanel.module.css';

interface EditPanelProps {
  model: DesignModel | null;
  onApply: (model: DesignModel) => void;
}

export function EditPanel({ model, onApply }: EditPanelProps) {
  const [jsonText, setJsonText] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (model) {
      setJsonText(formatJson(model));
      setError(null);
    }
  }, [model]);

  const handleApply = useCallback(() => {
    try {
      const parsed = JSON.parse(jsonText) as DesignModel;
      setError(null);
      onApply(parsed);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Invalid JSON');
    }
  }, [jsonText, onApply]);

  const handleReset = useCallback(() => {
    if (model) {
      setJsonText(formatJson(model));
      setError(null);
    }
  }, [model]);

  if (!model) {
    return (
      <EmptyState
        icon={<UbsIcon name="edit" size={32} />}
        title="No model to edit"
        description="Generate a design to edit the model JSON."
      />
    );
  }

  return (
    <div className={styles.panel}>
      <span className={styles.label}>Design model JSON</span>

      <div className={styles.editorWrapper}>
        <textarea
          className={styles.editor}
          value={jsonText}
          onChange={(e) => {
            setJsonText(e.target.value);
            setError(null);
          }}
          data-invalid={error !== null}
          spellCheck={false}
        />
      </div>

      {error && (
        <div className={styles.error}>
          <UbsIcon name="error-circle" size={14} /> {error}
        </div>
      )}

      <div className={styles.buttonRow}>
        <button
          className="ubs-btn ubs-btn-primary ubs-btn-sm"
          onClick={handleApply}
        >
          Apply changes
        </button>
        <button
          className="ubs-btn ubs-btn-ghost ubs-btn-sm"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
