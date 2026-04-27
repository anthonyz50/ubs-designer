/**
 * Prompt Panel
 *
 * Left panel containing the prompt textarea, output type selector,
 * page type selector, and action buttons.
 */

import type { OutputType, PageType } from '../../types';
import styles from './PromptPanel.module.css';

const EXAMPLE_PROMPT =
  'Create a UBS-style technology service status dashboard showing Microsoft Teams, Outlook and Wi-Fi status, with incident counts, recommended actions and support links.';

const OUTPUT_TYPES: { value: OutputType; label: string }[] = [
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'html-css', label: 'HTML/CSS' },
];

const PAGE_TYPES: { value: PageType | undefined; label: string }[] = [
  { value: undefined, label: 'Auto-detect' },
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'form', label: 'Form' },
  { value: 'card', label: 'Card' },
  { value: 'landing-page', label: 'Landing page' },
  { value: 'support-journey', label: 'Support journey' },
  { value: 'data-table', label: 'Data table' },
  { value: 'notification', label: 'Notification' },
];

interface PromptPanelProps {
  prompt: string;
  onPromptChange: (prompt: string) => void;
  outputType: OutputType;
  onOutputTypeChange: (type: OutputType) => void;
  pageType: PageType | undefined;
  onPageTypeChange: (type: PageType | undefined) => void;
  onGenerate: () => void;
  onClear: () => void;
  isGenerating: boolean;
}

export default function PromptPanel({
  prompt,
  onPromptChange,
  outputType,
  onOutputTypeChange,
  pageType,
  onPageTypeChange,
  onGenerate,
  onClear,
  isGenerating,
}: PromptPanelProps) {
  const handleTryExample = () => {
    onPromptChange(EXAMPLE_PROMPT);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      onGenerate();
    }
  };

  return (
    <div className={styles.panel}>
      <div>
        <span className={styles.sectionLabel}>Prompt</span>
      </div>

      <textarea
        className={`ubs-textarea ${styles.promptTextarea}`}
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Describe the UI you want to create..."
        rows={8}
        aria-label="UI prompt"
      />

      <div className={styles.actions}>
        <button
          className="ubs-btn ubs-btn--primary"
          onClick={onGenerate}
          disabled={isGenerating || !prompt.trim()}
          type="button"
        >
          {isGenerating ? 'Generating...' : 'Generate'}
        </button>
        <button
          className="ubs-btn ubs-btn--secondary"
          onClick={handleTryExample}
          type="button"
        >
          Try example
        </button>
        <button
          className="ubs-btn ubs-btn--ghost"
          onClick={onClear}
          type="button"
        >
          Clear
        </button>
      </div>

      <div>
        <span className={styles.sectionLabel}>Output type</span>
        <div className={styles.pillGroup} style={{ marginTop: 8 }}>
          {OUTPUT_TYPES.map((ot) => (
            <button
              key={ot.value}
              className={`${styles.pill} ${outputType === ot.value ? styles.pillActive : ''}`}
              onClick={() => onOutputTypeChange(ot.value)}
              type="button"
            >
              {ot.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <span className={styles.sectionLabel}>Page type</span>
        <div className={styles.pillGroup} style={{ marginTop: 8 }}>
          {PAGE_TYPES.map((pt) => (
            <button
              key={pt.label}
              className={`${styles.chip} ${pageType === pt.value ? styles.chipActive : ''}`}
              onClick={() => onPageTypeChange(pt.value)}
              type="button"
            >
              {pt.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: 16 }}>
        <p style={{ fontSize: '0.75rem', color: '#8E8D83', lineHeight: 1.5 }}>
          Press <strong>Cmd+Enter</strong> to generate. The prompt is analysed to
          determine the best page type automatically, or you can select one above.
        </p>
      </div>
    </div>
  );
}
