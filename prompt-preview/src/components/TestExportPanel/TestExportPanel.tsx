import { useState, useCallback } from 'react';
import type { DesignModel } from '../../types';
import type { TestExportConfig, FeedbackQuestion } from '../../services/testExportService';
import {
  exportTestPackage,
  DEFAULT_FEEDBACK_QUESTIONS,
} from '../../services/testExportService';
import { UbsIcon } from '../common/UbsIcon';
import { EmptyState } from '../common/EmptyState';
import { generateId } from '../../utils/helpers';
import styles from './TestExportPanel.module.css';

interface TestExportPanelProps {
  model: DesignModel | null;
}

export function TestExportPanel({ model }: TestExportPanelProps) {
  // Config state
  const [testTitle, setTestTitle] = useState(model?.projectName ?? '');
  const [taskInstructions, setTaskInstructions] = useState('');
  const [webhookUrl, setWebhookUrl] = useState('');
  const [showTimer, setShowTimer] = useState(true);
  const [allowPageRevisit, setAllowPageRevisit] = useState(true);
  const [testerId, setTesterId] = useState('');
  const [collectFeedback, setCollectFeedback] = useState(true);
  const [questions, setQuestions] = useState<FeedbackQuestion[]>(
    () => [...DEFAULT_FEEDBACK_QUESTIONS],
  );

  // Export state
  const [isExporting, setIsExporting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // ---- Question management ----

  const handleUpdateQuestion = useCallback(
    (id: string, field: 'question' | 'type', value: string) => {
      setQuestions((prev) =>
        prev.map((q) =>
          q.id === id
            ? { ...q, [field]: field === 'type' ? (value as FeedbackQuestion['type']) : value }
            : q,
        ),
      );
    },
    [],
  );

  const handleRemoveQuestion = useCallback((id: string) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  }, []);

  const handleAddQuestion = useCallback(() => {
    setQuestions((prev) => [
      ...prev,
      { id: generateId(), question: '', type: 'text' },
    ]);
  }, []);

  // ---- Export ----

  const handleExport = useCallback(async () => {
    if (!model) return;

    setIsExporting(true);
    setShowSuccess(false);

    try {
      const config: TestExportConfig = {
        testTitle: testTitle || model.projectName,
        testDescription: '',
        taskInstructions,
        webhookUrl: webhookUrl.trim() || undefined,
        collectFeedback,
        feedbackQuestions: questions.filter((q) => q.question.trim() !== ''),
        showTimer,
        allowPageRevisit,
        testerId: testerId.trim() || undefined,
      };

      const blob = await exportTestPackage(model, config);

      // Trigger download
      const slug = (config.testTitle || 'test')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ubs-ux-test-${slug}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  }, [
    model, testTitle, taskInstructions, webhookUrl,
    collectFeedback, questions, showTimer, allowPageRevisit, testerId,
  ]);

  // ---- Empty state ----

  if (!model) {
    return (
      <EmptyState
        icon={<UbsIcon name="download" size={32} />}
        title="No design to export"
        description="Generate a design first, then export it as a test package."
      />
    );
  }

  const pageCount = model.pages.length;

  return (
    <div className={styles.panel}>
      {/* ---- Test configuration ---- */}
      <span className={styles.sectionHeading}>Test configuration</span>

      <div className={styles.formGroup}>
        <label className={styles.label}>Test title</label>
        <input
          className={styles.input}
          type="text"
          value={testTitle}
          onChange={(e) => setTestTitle(e.target.value)}
          placeholder={model.projectName}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Task instructions</label>
        <textarea
          className={styles.textarea}
          value={taskInstructions}
          onChange={(e) => setTaskInstructions(e.target.value)}
          placeholder="Describe what the tester should try to accomplish"
          rows={3}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Webhook URL (optional)</label>
        <input
          className={styles.input}
          type="url"
          value={webhookUrl}
          onChange={(e) => setWebhookUrl(e.target.value)}
          placeholder="https://your-endpoint.com/results"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Tester ID (optional)</label>
        <input
          className={styles.input}
          type="text"
          value={testerId}
          onChange={(e) => setTesterId(e.target.value)}
          placeholder="Pre-filled tester identifier"
        />
      </div>

      <hr className={styles.divider} />

      {/* ---- Toggles ---- */}
      <div className={styles.toggleRow}>
        <span className={styles.toggleLabel}>Show timer</span>
        <button
          className={styles.toggleSwitch}
          data-on={showTimer}
          onClick={() => setShowTimer((v) => !v)}
          type="button"
          aria-label="Toggle show timer"
        >
          <span className={styles.toggleThumb} />
        </button>
      </div>

      <div className={styles.toggleRow}>
        <span className={styles.toggleLabel}>Allow page revisit</span>
        <button
          className={styles.toggleSwitch}
          data-on={allowPageRevisit}
          onClick={() => setAllowPageRevisit((v) => !v)}
          type="button"
          aria-label="Toggle allow page revisit"
        >
          <span className={styles.toggleThumb} />
        </button>
      </div>

      <div className={styles.toggleRow}>
        <span className={styles.toggleLabel}>Collect feedback</span>
        <button
          className={styles.toggleSwitch}
          data-on={collectFeedback}
          onClick={() => setCollectFeedback((v) => !v)}
          type="button"
          aria-label="Toggle collect feedback"
        >
          <span className={styles.toggleThumb} />
        </button>
      </div>

      <hr className={styles.divider} />

      {/* ---- Feedback questions ---- */}
      {collectFeedback && (
        <>
          <span className={styles.sectionHeading}>Feedback questions</span>

          <div className={styles.questionList}>
            {questions.map((q) => (
              <div key={q.id} className={styles.questionItem}>
                <div className={styles.questionRow}>
                  <input
                    className={styles.questionInput}
                    type="text"
                    value={q.question}
                    onChange={(e) =>
                      handleUpdateQuestion(q.id, 'question', e.target.value)
                    }
                    placeholder="Enter question text"
                  />
                  <select
                    className={styles.typeSelect}
                    value={q.type}
                    onChange={(e) =>
                      handleUpdateQuestion(q.id, 'type', e.target.value)
                    }
                  >
                    <option value="rating">Rating</option>
                    <option value="text">Text</option>
                    <option value="yes-no">Yes / No</option>
                  </select>
                  <button
                    className={styles.removeBtn}
                    onClick={() => handleRemoveQuestion(q.id)}
                    aria-label={`Remove question: ${q.question}`}
                    type="button"
                  >
                    <UbsIcon name="close" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            className="ubs-btn ubs-btn-ghost ubs-btn-sm"
            onClick={handleAddQuestion}
            type="button"
          >
            + Add question
          </button>

          <hr className={styles.divider} />
        </>
      )}

      {/* ---- Info box ---- */}
      <div className={styles.infoBox}>
        <UbsIcon name="info" size={16} />
        <span>
          The test package will include {pageCount} page{pageCount !== 1 ? 's' : ''} with
          interaction tracking{collectFeedback ? ' and a feedback form' : ''}.
        </span>
      </div>

      {/* ---- Export ---- */}
      <div className={styles.exportRow}>
        <button
          className="ubs-btn ubs-btn-primary"
          onClick={handleExport}
          disabled={isExporting}
          type="button"
        >
          {isExporting ? 'Exporting...' : 'Export test package'}
        </button>

        {showSuccess && (
          <div className={styles.successAlert}>
            <UbsIcon name="check" size={14} />
            Test package downloaded successfully.
          </div>
        )}
      </div>
    </div>
  );
}
