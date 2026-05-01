import { useState, useCallback, useRef, useEffect } from 'react';
import {
  generatePage,
  isAiConfigured,
} from '../../services/aiGenerationService';
import type { GeneratedPage } from '../../services/aiGenerationService';
import styles from './PageBuilder.module.css';

// Bootstrap + UBS theme CSS (loaded as string for iframe injection)
import bootstrapUbsCss from '../../styles/bootstrap-ubs.css?raw';

type ViewMode = 'preview' | 'code';

const EXAMPLE_PROMPTS = [
  'Create a wealth management dashboard showing portfolio performance, asset allocation donut chart, recent transactions table, and market overview cards',
  'Build a client onboarding form with personal details, investment preferences, risk profile questionnaire, and document upload section',
  'Design a landing page for UBS sustainable investing with a hero section, three benefit cards, testimonial carousel, and a contact form',
  'Create an account overview page showing multiple accounts (savings, current, investment), recent activity, and quick action buttons for transfers',
  'Build a mortgage calculator page with input sliders for amount, term, and interest rate, a results summary card, and a "speak to an advisor" CTA',
  'Design an investment research article page with a hero image, key takeaways sidebar, author bio, related articles grid, and newsletter signup',
];

// Build the full HTML document for the iframe
function buildIframeDoc(bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${bootstrapUbsCss}</style>
</head>
<body>
${bodyHtml}
</body>
</html>`;
}

export function PageBuilder() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPage, setGeneratedPage] = useState<GeneratedPage | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('preview');
  const [history, setHistory] = useState<GeneratedPage[]>([]);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const configured = isAiConfigured();

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = Math.min(el.scrollHeight, 120) + 'px';
    }
  }, [prompt]);

  // Write to iframe when generated HTML changes
  useEffect(() => {
    if (generatedPage?.html && iframeRef.current && viewMode === 'preview') {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(buildIframeDoc(generatedPage.html));
        doc.close();
      }
    }
  }, [generatedPage, viewMode]);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setError(null);

    try {
      const result = await generatePage(prompt);
      setGeneratedPage(result);
      setHistory((prev) => [result, ...prev]);
      setViewMode('preview');
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Unknown error occurred';
      setError(message);
    } finally {
      setIsGenerating(false);
    }
  }, [prompt, isGenerating]);

  const handleEdit = useCallback(async () => {
    if (!prompt.trim() || isGenerating || !generatedPage) return;

    setIsGenerating(true);
    setError(null);

    try {
      const result = await generatePage(prompt, {
        existingHtml: generatedPage.html,
      });
      setGeneratedPage(result);
      setHistory((prev) => [result, ...prev]);
      setViewMode('preview');
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Unknown error occurred';
      setError(message);
    } finally {
      setIsGenerating(false);
    }
  }, [prompt, isGenerating, generatedPage]);

  const handleExampleClick = useCallback((example: string) => {
    setPrompt(example);
    textareaRef.current?.focus();
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (generatedPage) {
          handleEdit();
        } else {
          handleGenerate();
        }
      }
    },
    [handleGenerate, handleEdit, generatedPage],
  );

  const handleCopy = useCallback(() => {
    if (generatedPage?.html) {
      navigator.clipboard.writeText(
        viewMode === 'code'
          ? generatedPage.html
          : buildIframeDoc(generatedPage.html),
      );
    }
  }, [generatedPage, viewMode]);

  return (
    <div className={styles.builder}>
      {/* Prompt bar */}
      <div className={styles.promptBar}>
        <textarea
          ref={textareaRef}
          className={styles.promptInput}
          placeholder={
            generatedPage
              ? 'Describe changes to make to this page...'
              : 'Describe the page you want to build...'
          }
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
        />
        {generatedPage ? (
          <>
            <button
              className={styles.editBtn}
              onClick={handleEdit}
              disabled={!prompt.trim() || isGenerating || !configured}
            >
              {isGenerating ? 'Updating...' : '✏️ Edit page'}
            </button>
            <button
              className={styles.generateBtn}
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating || !configured}
            >
              {isGenerating ? 'Generating...' : '🚀 New page'}
            </button>
          </>
        ) : (
          <button
            className={styles.generateBtn}
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating || !configured}
          >
            {isGenerating ? 'Generating...' : '🚀 Generate'}
          </button>
        )}
      </div>

      {/* Status bar */}
      {(isGenerating || generatedPage) && (
        <div className={styles.statusBar}>
          <span
            className={styles.statusDot}
            data-generating={isGenerating}
          />
          <span className={styles.statusText}>
            {isGenerating
              ? 'Generating page with Claude...'
              : `Generated: ${generatedPage?.title ?? 'Page'}`}
          </span>
          {generatedPage?.tokensUsed && (
            <span className={styles.tokenCount}>
              {generatedPage.tokensUsed.toLocaleString()} tokens
            </span>
          )}
        </div>
      )}

      {/* Config warning */}
      {!configured && (
        <div className={styles.configBar}>
          <span className={styles.configLabel}>⚠️ API key not configured.</span>
          <span>
            Copy <code>.env.example</code> to <code>.env</code> and set{' '}
            <code>VITE_AI_API_KEY</code>.
          </span>
        </div>
      )}

      {/* View toolbar (when there's content) */}
      {generatedPage && (
        <div className={styles.viewToolbar}>
          <button
            className={styles.viewBtn}
            data-active={viewMode === 'preview'}
            onClick={() => setViewMode('preview')}
          >
            Preview
          </button>
          <button
            className={styles.viewBtn}
            data-active={viewMode === 'code'}
            onClick={() => setViewMode('code')}
          >
            HTML
          </button>
          <div className={styles.viewSpacer} />
          <button className={styles.copyBtn} onClick={handleCopy}>
            Copy {viewMode === 'code' ? 'HTML' : 'Full Page'}
          </button>
          {history.length > 1 && (
            <span style={{ fontSize: 12, color: '#7a7870' }}>
              {history.length} versions
            </span>
          )}
        </div>
      )}

      {/* Main content area */}
      {error ? (
        <div className={styles.error}>
          <div className={styles.errorTitle}>Generation failed</div>
          <div className={styles.errorMessage}>{error}</div>
          <button
            className={styles.retryBtn}
            onClick={generatedPage ? handleEdit : handleGenerate}
          >
            Try again
          </button>
        </div>
      ) : generatedPage ? (
        <div className={styles.previewArea}>
          {viewMode === 'preview' ? (
            <iframe
              ref={iframeRef}
              className={styles.previewFrame}
              title="Generated page preview"
              sandbox="allow-same-origin"
            />
          ) : (
            <div className={styles.codeView}>
              <pre>{generatedPage.html}</pre>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>🏗️</div>
          <h3 className={styles.emptyTitle}>Build a page with AI</h3>
          <p className={styles.emptyDescription}>
            Describe what you want and Claude will generate a complete
            Bootstrap 5 page with UBS brand theming. You can then edit it
            with follow-up prompts.
          </p>
          <div className={styles.examplePrompts}>
            {EXAMPLE_PROMPTS.map((example, i) => (
              <button
                key={i}
                className={styles.examplePrompt}
                onClick={() => handleExampleClick(example)}
                disabled={!configured}
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
