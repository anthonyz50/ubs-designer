import { useCallback, type KeyboardEvent } from 'react';
import type { OutputType, PatternType } from '../../types';
import { UbsIcon } from '../common/UbsIcon';
import type { IconName } from '../common/UbsIcon';
import styles from './PromptPanel.module.css';

const EXAMPLE_PROMPTS: { label: string; icon: IconName; prompt: string }[] = [
  {
    label: 'Landing page',
    icon: 'layout',
    prompt: 'Create a landing page with a top navigation, hero section, about us area, and footer',
  },
  {
    label: 'Dashboard',
    icon: 'chart',
    prompt: 'Build me a wealth management dashboard with portfolio stats, a data table of recent transactions, and alert notifications',
  },
  {
    label: 'Form flow',
    icon: 'document',
    prompt: 'Design a client onboarding form with personal details, account preferences, file upload for ID documents, and a progress stepper',
  },
  {
    label: 'Support flow',
    icon: 'tool',
    prompt: 'Create an IT support triage page with a sidebar navigation, incident cards with severity badges, a timeline of actions taken, and a status stepper',
  },
  {
    label: 'Footer',
    icon: 'columns',
    prompt: 'Build a footer with three link columns for Services, Company, and Legal',
  },
  {
    label: 'Data table',
    icon: 'grid',
    prompt: 'Create a client portfolio table with columns for Name, Account, Balance, Risk Level, and Last Activity',
  },
  {
    label: 'Approval flow',
    icon: 'shield-check',
    prompt: 'Design an expense approval workflow with a queue list, detail view, and approve/reject actions',
  },
  {
    label: 'Settings',
    icon: 'gear',
    prompt: 'Create a user preferences page with notification settings, display options, and security toggles',
  },
];

const EXAMPLE_PROMPT = EXAMPLE_PROMPTS[0].prompt;

const OUTPUT_TYPES: { value: OutputType; label: string }[] = [
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'html-css', label: 'HTML/CSS' },
  { value: 'all', label: 'All' },
];

const PATTERN_TYPES: { value: PatternType; label: string }[] = [
  { value: 'component', label: 'Component' },
  { value: 'page', label: 'Page' },
  { value: 'journey', label: 'Journey' },
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'form', label: 'Form' },
  { value: 'support-flow', label: 'Support flow' },
  { value: 'data-table', label: 'Data table' },
  { value: 'notification', label: 'Notification' },
];

type GenerationStep =
  | 'interpreting'
  | 'planning'
  | 'designing'
  | 'reviewing'
  | 'generating-code';

const GENERATION_STEPS: { key: GenerationStep; label: string }[] = [
  { key: 'interpreting', label: 'Interpreting prompt' },
  { key: 'planning', label: 'Planning journey' },
  { key: 'designing', label: 'Designing pages' },
  { key: 'reviewing', label: 'Reviewing UX' },
  { key: 'generating-code', label: 'Generating code' },
];

interface PromptPanelProps {
  prompt: string;
  onPromptChange: (value: string) => void;
  outputType: OutputType;
  onOutputTypeChange: (value: OutputType) => void;
  patternType: PatternType;
  onPatternTypeChange: (value: PatternType) => void;
  isGenerating: boolean;
  generationStep: GenerationStep | null;
  onGenerate: () => void;
  onClear: () => void;
}

function getStepStatus(
  step: GenerationStep,
  currentStep: GenerationStep | null,
): 'pending' | 'active' | 'complete' {
  if (!currentStep) return 'pending';
  const order = GENERATION_STEPS.map((s) => s.key);
  const currentIdx = order.indexOf(currentStep);
  const stepIdx = order.indexOf(step);
  if (stepIdx < currentIdx) return 'complete';
  if (stepIdx === currentIdx) return 'active';
  return 'pending';
}

export function PromptPanel({
  prompt,
  onPromptChange,
  outputType,
  onOutputTypeChange,
  patternType,
  onPatternTypeChange,
  isGenerating,
  generationStep,
  onGenerate,
  onClear,
}: PromptPanelProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        if (!isGenerating && prompt.trim()) {
          onGenerate();
        }
      }
    },
    [isGenerating, prompt, onGenerate],
  );

  // EXAMPLE_PROMPT kept for backward compat but example grid replaces single button
  void EXAMPLE_PROMPT;

  return (
    <div className={styles.panel}>
      <div className={styles.section}>
        <span className={styles.sectionLabel}>Prompt</span>
        <textarea
          className={styles.textarea}
          rows={8}
          placeholder="Describe the UX pattern or journey you want to create..."
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isGenerating}
        />
      </div>

      <div className={styles.buttonRow}>
        <button
          className="ubs-btn ubs-btn-primary ubs-btn-sm"
          onClick={onGenerate}
          disabled={isGenerating || !prompt.trim()}
        >
          <UbsIcon name="magic" size={14} />
          Generate
        </button>
        <button
          className="ubs-btn ubs-btn-ghost ubs-btn-sm"
          onClick={onClear}
          disabled={isGenerating || !prompt.trim()}
        >
          Clear
        </button>
      </div>

      <div className={styles.section}>
        <span className={styles.sectionLabel}>Examples</span>
        <div className={styles.exampleGrid}>
          {EXAMPLE_PROMPTS.map((ex, idx) => (
            <button
              key={idx}
              className={styles.exampleCard}
              onClick={() => onPromptChange(ex.prompt)}
              disabled={isGenerating}
              title={ex.prompt}
            >
              <UbsIcon name={ex.icon} size={14} />
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.sectionLabel}>Output type</span>
        <div className={styles.pills}>
          {OUTPUT_TYPES.map((ot) => (
            <button
              key={ot.value}
              className={styles.pill}
              data-active={outputType === ot.value}
              onClick={() => onOutputTypeChange(ot.value)}
              disabled={isGenerating}
            >
              {ot.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.sectionLabel}>Pattern type</span>
        <div className={styles.pills}>
          {PATTERN_TYPES.map((pt) => (
            <button
              key={pt.value}
              className={styles.chip}
              data-active={patternType === pt.value}
              onClick={() => onPatternTypeChange(pt.value)}
              disabled={isGenerating}
            >
              {pt.label}
            </button>
          ))}
        </div>
      </div>

      {isGenerating && generationStep && (
        <div className={styles.progressSection}>
          <span className={styles.sectionLabel}>Generating</span>
          {GENERATION_STEPS.map((step) => {
            const status = getStepStatus(step.key, generationStep);
            return (
              <div
                key={step.key}
                className={styles.progressStep}
                data-status={status}
              >
                <span className={styles.progressDot} />
                {status === 'complete' && <UbsIcon name="check" size={12} />}
                {step.label}
              </div>
            );
          })}
        </div>
      )}

      <p className={styles.hint}>
        Press <strong>Cmd+Enter</strong> to generate. Use the controls above to
        set the output format and pattern type.
      </p>
    </div>
  );
}
