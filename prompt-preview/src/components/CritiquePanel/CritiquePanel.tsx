import { useState, useCallback, useRef, useEffect } from 'react';
import {
  Button,
  Icon,
  Badge,
  Alert,
  Card,
} from '@ubs/design-system';
import {
  critiquePage,
  fetchPageHtml,
} from '../../services/critiqueService';
import type { CritiqueResult, CritiqueIssue } from '../../services/critiqueService';
import type { GeneratedPage } from '../../services/aiGenerationService';

import bootstrapUbsCss from '../../styles/bootstrap-ubs.css?raw';
import styles from './CritiquePanel.module.css';

// ── Helpers ──────────────────────────────────────────────────

function buildIframeDoc(bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${bootstrapUbsCss}</style>
</head>
<body>${bodyHtml}</body>
</html>`;
}

function severityColour(severity: CritiqueIssue['severity']): string {
  switch (severity) {
    case 'critical': return 'red';
    case 'major': return 'orange';
    case 'minor': return 'blue';
    case 'suggestion': return 'outline';
    default: return 'outline';
  }
}

function categoryIcon(category: CritiqueIssue['category']): string {
  switch (category) {
    case 'branding': return 'shield';
    case 'typography': return 'document';
    case 'layout': return 'chart';
    case 'colour': return 'lightbulb';
    case 'accessibility': return 'target';
    case 'ux': return 'users';
    case 'content': return 'edit';
    case 'responsiveness': return 'globe';
    default: return 'search';
  }
}

function scoreLabel(score: number): string {
  if (score >= 90) return 'Excellent';
  if (score >= 75) return 'Good';
  if (score >= 60) return 'Needs work';
  if (score >= 40) return 'Poor';
  return 'Critical';
}

function scoreColour(score: number): string {
  if (score >= 75) return 'var(--ubs-status-success)';
  if (score >= 60) return 'var(--ubs-status-warning)';
  return 'var(--ubs-status-error)';
}

// ── Props ────────────────────────────────────────────────────

interface CritiquePanelProps {
  onRedesignReady?: (page: GeneratedPage) => void;
}

// ── Input mode type ──────────────────────────────────────────

type InputMode = 'url' | 'screenshot';
type ResultView = 'critique' | 'original' | 'redesign' | 'side-by-side';

// ═════════════════════════════════════════════════════════════
// CritiquePanel
// ═════════════════════════════════════════════════════════════

export function CritiquePanel({ onRedesignReady }: CritiquePanelProps) {
  // ── Input state ───────────────────────────────────────────
  const [inputMode, setInputMode] = useState<InputMode>('url');
  const [url, setUrl] = useState('');
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [screenshotName, setScreenshotName] = useState<string | null>(null);
  const [additionalContext, setAdditionalContext] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  // ── Processing state ──────────────────────────────────────
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [progressText, setProgressText] = useState('');
  const [error, setError] = useState<string | null>(null);

  // ── Result state ──────────────────────────────────────────
  const [result, setResult] = useState<CritiqueResult | null>(null);
  const [resultView, setResultView] = useState<ResultView>('critique');

  // ── Refs ──────────────────────────────────────────────────
  const fileInputRef = useRef<HTMLInputElement>(null);
  const redesignIframeRef = useRef<HTMLIFrameElement>(null);
  const originalIframeRef = useRef<HTMLIFrameElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  // ── Write redesign iframe ─────────────────────────────────
  useEffect(() => {
    if (result?.redesignHtml && redesignIframeRef.current &&
        (resultView === 'redesign' || resultView === 'side-by-side')) {
      const doc = redesignIframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(buildIframeDoc(result.redesignHtml));
        doc.close();
      }
    }
  }, [result, resultView]);

  // ── Write original iframe (for URL-sourced HTML) ──────────
  useEffect(() => {
    if (result?.originalUrl && originalIframeRef.current &&
        (resultView === 'original' || resultView === 'side-by-side')) {
      originalIframeRef.current.src = result.originalUrl;
    }
  }, [result, resultView]);

  // ── File handling ─────────────────────────────────────────

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (PNG, JPG, WebP).');
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setError('Image too large. Maximum 20 MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setScreenshot(reader.result as string);
      setScreenshotName(file.name);
      setError(null);
    };
    reader.onerror = () => {
      setError('Failed to read file.');
    };
    reader.readAsDataURL(file);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }, [handleFile]);

  // ── Drag and drop ─────────────────────────────────────────

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
      setInputMode('screenshot');
    }
  }, [handleFile]);

  // ── Paste screenshot ──────────────────────────────────────

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (const item of items) {
        if (item.type.startsWith('image/')) {
          const file = item.getAsFile();
          if (file) {
            handleFile(file);
            setInputMode('screenshot');
          }
          break;
        }
      }
    };

    document.addEventListener('paste', handlePaste);
    return () => document.removeEventListener('paste', handlePaste);
  }, [handleFile]);

  // ── Analyse ───────────────────────────────────────────────

  const handleAnalyse = useCallback(async () => {
    if (isAnalysing) return;

    setIsAnalysing(true);
    setError(null);
    setResult(null);

    try {
      let htmlContent: string | null = null;

      // Fetch HTML from URL if provided
      if (url.trim()) {
        setProgressText('Fetching page content\u2026');
        htmlContent = await fetchPageHtml(url.trim());
        if (!htmlContent && !screenshot) {
          throw new Error(
            'Could not fetch the page HTML (likely blocked by CORS). ' +
            'Try uploading a screenshot instead, or paste the HTML manually.'
          );
        }
      }

      if (!url.trim() && !screenshot) {
        throw new Error('Please enter a URL or upload a screenshot to analyse.');
      }

      setProgressText('Analysing design against UBS standards\u2026');

      const critiqueResult = await critiquePage({
        url: url.trim() || undefined,
        screenshot: screenshot || undefined,
        htmlContent: htmlContent || undefined,
        additionalContext: additionalContext.trim() || undefined,
      });

      setResult(critiqueResult);
      setResultView('critique');

      // Notify parent with redesign as a GeneratedPage
      if (onRedesignReady && critiqueResult.redesignHtml) {
        onRedesignReady({
          html: critiqueResult.redesignHtml,
          title: `Redesign: ${url || 'Uploaded screenshot'}`,
          prompt: `Redesign of ${url || 'uploaded screenshot'}`,
          generatedAt: critiqueResult.analysedAt,
          model: 'claude-opus-4-6',
          tokensUsed: critiqueResult.tokensUsed,
        });
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Analysis failed');
    } finally {
      setIsAnalysing(false);
      setProgressText('');
    }
  }, [url, screenshot, additionalContext, isAnalysing, onRedesignReady]);

  // ── Reset ─────────────────────────────────────────────────

  const handleReset = useCallback(() => {
    setUrl('');
    setScreenshot(null);
    setScreenshotName(null);
    setAdditionalContext('');
    setResult(null);
    setError(null);
    setResultView('critique');
  }, []);

  // ── Copy redesign HTML ────────────────────────────────────

  const handleCopyRedesign = useCallback(() => {
    if (result?.redesignHtml) {
      navigator.clipboard.writeText(buildIframeDoc(result.redesignHtml));
    }
  }, [result]);

  // ═════════════════════════════════════════════════════════
  // Render
  // ═════════════════════════════════════════════════════════

  // No result yet — show input form
  if (!result) {
    return (
      <div
        className={styles.panel}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* Drag overlay */}
        {isDragging && (
          <div className={styles.dragOverlay}>
            <div className={styles.dragContent}>
              <Icon name="upload" size="lg" />
              <span>Drop screenshot here</span>
            </div>
          </div>
        )}

        <div className={styles.inputSection}>
          <div className={styles.inputHeader}>
            <h2 className={styles.inputTitle}>Critique a site</h2>
            <p className={styles.inputDescription}>
              Enter a URL or upload a screenshot. The AI will analyse the design against
              UBS standards and generate an improved alternative.
            </p>
          </div>

          {/* Mode toggle */}
          <div className={styles.modeToggle}>
            <button
              className={styles.modeBtn}
              data-active={inputMode === 'url'}
              onClick={() => setInputMode('url')}
            >
              <Icon name="globe" size="sm" /> URL
            </button>
            <button
              className={styles.modeBtn}
              data-active={inputMode === 'screenshot'}
              onClick={() => setInputMode('screenshot')}
            >
              <Icon name="search" size="sm" /> Screenshot
            </button>
          </div>

          {/* URL input */}
          {inputMode === 'url' && (
            <div className={styles.urlInputGroup}>
              <input
                type="url"
                className={styles.urlInput}
                placeholder="https://example.com/page-to-analyse"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleAnalyse();
                  }
                }}
              />
              <p className={styles.urlHint}>
                Tip: Also paste or drag a screenshot for better visual analysis.
                You can use both URL and screenshot together.
              </p>
            </div>
          )}

          {/* Screenshot input */}
          {inputMode === 'screenshot' && (
            <div className={styles.screenshotSection}>
              {screenshot ? (
                <div className={styles.screenshotPreview}>
                  <img src={screenshot} alt="Uploaded screenshot" className={styles.previewImage} />
                  <div className={styles.screenshotMeta}>
                    <span>{screenshotName}</span>
                    <Button
                      variant="ghost"
                      size="small"
                      icon={<Icon name="close" size="sm" />}
                      onClick={() => {
                        setScreenshot(null);
                        setScreenshotName(null);
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ) : (
                <div
                  ref={dropZoneRef}
                  className={styles.dropZone}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Icon name="upload" size="lg" variant="illustrative" colour="#E60000" />
                  <p className={styles.dropText}>
                    Drop a screenshot here, <strong>click to browse</strong>, or paste from clipboard
                  </p>
                  <p className={styles.dropHint}>PNG, JPG, or WebP up to 20 MB</p>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                style={{ display: 'none' }}
              />
            </div>
          )}

          {/* Screenshot indicator when in URL mode but screenshot is also attached */}
          {inputMode === 'url' && screenshot && (
            <div className={styles.attachedScreenshot}>
              <Badge variant="default" size="sm">
                <Icon name="search" size="sm" /> Screenshot attached: {screenshotName}
              </Badge>
              <Button
                variant="ghost"
                size="small"
                icon={<Icon name="close" size="sm" />}
                onClick={() => {
                  setScreenshot(null);
                  setScreenshotName(null);
                }}
              >
                Remove
              </Button>
            </div>
          )}

          {/* Additional context */}
          <div className={styles.contextSection}>
            <label className={styles.contextLabel}>Focus areas (optional)</label>
            <textarea
              className={styles.contextInput}
              placeholder="E.g. 'Focus on the navigation and hero section' or 'This is a client portal for high-net-worth individuals'"
              value={additionalContext}
              onChange={(e) => setAdditionalContext(e.target.value)}
              rows={2}
            />
          </div>

          {/* Error */}
          {error && (
            <Alert variant="error">{error}</Alert>
          )}

          {/* Progress */}
          {isAnalysing && (
            <div className={styles.progressSection}>
              <div className={styles.progressIndicator}>
                <span className={styles.progressDot} />
                <span>{progressText}</span>
              </div>
            </div>
          )}

          {/* Action */}
          <div className={styles.actionRow}>
            <Button
              variant="primary"
              size="medium"
              icon={<Icon name="shield" size="sm" />}
              onClick={handleAnalyse}
              disabled={isAnalysing || (!url.trim() && !screenshot)}
              loading={isAnalysing}
            >
              {isAnalysing ? 'Analysing\u2026' : 'Analyse & Redesign'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // ── Result view ───────────────────────────────────────────

  const issuesBySeverity = (severity: CritiqueIssue['severity']) =>
    result.issues.filter((i) => i.severity === severity);

  return (
    <div className={styles.panel}>
      {/* Result toolbar */}
      <div className={styles.resultToolbar}>
        <div className={styles.resultViewToggle}>
          <button
            className={styles.viewBtn}
            data-active={resultView === 'critique'}
            onClick={() => setResultView('critique')}
          >
            <Icon name="shield" size="sm" /> Critique
          </button>
          <button
            className={styles.viewBtn}
            data-active={resultView === 'redesign'}
            onClick={() => setResultView('redesign')}
          >
            <Icon name="lightbulb" size="sm" /> Redesign
          </button>
          <button
            className={styles.viewBtn}
            data-active={resultView === 'side-by-side'}
            onClick={() => setResultView('side-by-side')}
          >
            <Icon name="chart" size="sm" /> Compare
          </button>
          {(result.originalUrl || screenshot) && (
            <button
              className={styles.viewBtn}
              data-active={resultView === 'original'}
              onClick={() => setResultView('original')}
            >
              <Icon name="globe" size="sm" /> Original
            </button>
          )}
        </div>
        <div className={styles.resultActions}>
          {result.tokensUsed && (
            <Badge variant="default" size="sm">
              {result.tokensUsed.toLocaleString()} tokens
            </Badge>
          )}
          <Button
            variant="ghost"
            size="small"
            icon={<Icon name="copy" size="sm" />}
            onClick={handleCopyRedesign}
          >
            Copy redesign
          </Button>
          <Button
            variant="outline"
            size="small"
            icon={<Icon name="close" size="sm" />}
            onClick={handleReset}
          >
            New critique
          </Button>
        </div>
      </div>

      {/* ─── Critique View ───────────────────────────────── */}
      {resultView === 'critique' && (
        <div className={styles.critiqueContent}>
          {/* Summary card */}
          <Card variant="default" padding="medium" className={styles.summaryCard}>
            <div className={styles.summaryHeader}>
              <div className={styles.overallScore}>
                <div
                  className={styles.scoreCircle}
                  style={{
                    borderColor: scoreColour(result.overallScore),
                    color: scoreColour(result.overallScore),
                  }}
                >
                  {result.overallScore}
                </div>
                <div className={styles.scoreLabel}>
                  <strong>{scoreLabel(result.overallScore)}</strong>
                  <span>Overall UBS compliance</span>
                </div>
              </div>
              {result.originalUrl && (
                <Badge variant="outline" size="sm">{result.originalUrl}</Badge>
              )}
            </div>
            <p className={styles.summaryText}>{result.summary}</p>
          </Card>

          {/* Score breakdown */}
          <Card variant="pastel1" padding="medium" className={styles.scoresCard}>
            <h3 className={styles.sectionTitle}>Score breakdown</h3>
            <div className={styles.scoreGrid}>
              {(Object.entries(result.scores) as [keyof typeof result.scores, number][]).map(
                ([category, score]) => (
                  <div key={category} className={styles.scoreItem}>
                    <div className={styles.scoreItemHeader}>
                      <Icon name={categoryIcon(category as CritiqueIssue['category'])} size="sm" />
                      <span className={styles.scoreCategory}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </span>
                      <span
                        className={styles.scoreValue}
                        style={{ color: scoreColour(score) }}
                      >
                        {score}
                      </span>
                    </div>
                    <div className={styles.scoreBar}>
                      <div
                        className={styles.scoreBarFill}
                        style={{
                          width: `${score}%`,
                          backgroundColor: scoreColour(score),
                        }}
                      />
                    </div>
                  </div>
                ),
              )}
            </div>
          </Card>

          {/* Strengths */}
          {result.strengths.length > 0 && (
            <Card variant="default" padding="medium" className={styles.strengthsCard}>
              <h3 className={styles.sectionTitle}>
                <Icon name="check" size="sm" /> Strengths
              </h3>
              <ul className={styles.strengthsList}>
                {result.strengths.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </Card>
          )}

          {/* Issues by severity */}
          {(['critical', 'major', 'minor', 'suggestion'] as const).map((severity) => {
            const issues = issuesBySeverity(severity);
            if (issues.length === 0) return null;
            return (
              <div key={severity} className={styles.issueGroup}>
                <h3 className={styles.issueGroupTitle}>
                  <Badge
                    variant={severityColour(severity) as 'red' | 'orange' | 'blue' | 'outline'}
                    size="sm"
                  >
                    {severity.charAt(0).toUpperCase() + severity.slice(1)}
                  </Badge>
                  <span>{issues.length} {issues.length === 1 ? 'issue' : 'issues'}</span>
                </h3>
                {issues.map((issue, idx) => (
                  <Card key={idx} variant="default" padding="small" className={styles.issueCard}>
                    <div className={styles.issueHeader}>
                      <Icon name={categoryIcon(issue.category)} size="sm" />
                      <strong>{issue.title}</strong>
                      <Badge variant="outline" size="sm">{issue.category}</Badge>
                    </div>
                    <p className={styles.issueDescription}>{issue.description}</p>
                    <div className={styles.issueRecommendation}>
                      <strong>Fix:</strong> {issue.recommendation}
                    </div>
                  </Card>
                ))}
              </div>
            );
          })}

          {/* Redesign notes */}
          {result.redesignNotes && (
            <Card variant="pastel2" padding="medium" className={styles.redesignNotesCard}>
              <h3 className={styles.sectionTitle}>Redesign approach</h3>
              <p>{result.redesignNotes}</p>
              <Button
                variant="primary"
                size="medium"
                icon={<Icon name="lightbulb" size="sm" />}
                onClick={() => setResultView('redesign')}
                style={{ marginTop: 12 }}
              >
                View redesign
              </Button>
            </Card>
          )}
        </div>
      )}

      {/* ─── Redesign View ───────────────────────────────── */}
      {resultView === 'redesign' && (
        <div className={styles.redesignContent}>
          <iframe
            ref={redesignIframeRef}
            className={styles.fullFrame}
            title="Redesigned page preview"
            sandbox="allow-same-origin"
          />
        </div>
      )}

      {/* ─── Original View ───────────────────────────────── */}
      {resultView === 'original' && (
        <div className={styles.originalContent}>
          {screenshot ? (
            <div className={styles.originalScreenshot}>
              <img src={screenshot} alt="Original page screenshot" />
            </div>
          ) : result.originalUrl ? (
            <iframe
              ref={originalIframeRef}
              className={styles.fullFrame}
              title="Original page"
              sandbox="allow-same-origin allow-scripts"
            />
          ) : (
            <div className={styles.noOriginal}>
              <p>No original preview available.</p>
            </div>
          )}
        </div>
      )}

      {/* ─── Side-by-Side View ───────────────────────────── */}
      {resultView === 'side-by-side' && (
        <div className={styles.sideBySide}>
          <div className={styles.comparePane}>
            <div className={styles.comparePaneHeader}>
              <Badge variant="outline" size="sm">Original</Badge>
              <Badge
                variant="red"
                size="sm"
              >
                Score: {result.overallScore}/100
              </Badge>
            </div>
            {screenshot ? (
              <div className={styles.compareImage}>
                <img src={screenshot} alt="Original page" />
              </div>
            ) : result.originalUrl ? (
              <iframe
                ref={originalIframeRef}
                className={styles.compareFrame}
                title="Original page"
                sandbox="allow-same-origin allow-scripts"
              />
            ) : (
              <div className={styles.noOriginal}>
                <p>Original preview not available</p>
              </div>
            )}
          </div>
          <div className={styles.compareDivider} />
          <div className={styles.comparePane}>
            <div className={styles.comparePaneHeader}>
              <Badge variant="default" size="sm">UBS Redesign</Badge>
              <Badge variant="default" size="sm">
                {result.issues.length} issues fixed
              </Badge>
            </div>
            <iframe
              ref={redesignIframeRef}
              className={styles.compareFrame}
              title="Redesigned page"
              sandbox="allow-same-origin"
            />
          </div>
        </div>
      )}
    </div>
  );
}
