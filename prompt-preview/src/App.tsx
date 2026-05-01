import { useState, useCallback, useRef, useEffect } from 'react';
import {
  Logo,
  Button,
  Icon,
  Tabs,
  Badge,
  Alert,
  Card,
  Tag,
} from '@ubs/design-system';
import type { TabItem } from '@ubs/design-system';

// Services
import {
  generatePage,
  isAiConfigured,
} from './services/aiGenerationService';
import type { GeneratedPage } from './services/aiGenerationService';
import {
  interpretPrompt,
  createJourneyMap,
  createDesignModel,
  reviewDesignModel,
  generateReact,
  generateAngular,
  generateHtmlCss,
} from './services/aiUxDesignerService';
import { runPersonaTest } from './services/personaTestingService';

// Types
import type {
  OutputType,
  DesignModel,
  ComponentModel,
  UxReview,
  InterpretedBrief,
  JourneyMap,
  InteractionState,
  ViewportSize,
  PersonaTestReport,
  SavedDesign,
} from './types';

// Panels (existing — kept as-is)
import { PreviewPanel } from './components/PreviewPanel/PreviewPanel';
import { JourneyPanel } from './components/JourneyPanel/JourneyPanel';
import { CodePanel } from './components/CodePanel/CodePanel';
import { BriefPanel } from './components/BriefPanel/BriefPanel';
import { ReviewPanel } from './components/ReviewPanel/ReviewPanel';
import { EditPanel } from './components/EditPanel/EditPanel';
import { PersonaTestPanel } from './components/PersonaTestPanel/PersonaTestPanel';
import { TestExportPanel } from './components/TestExportPanel/TestExportPanel';
import { DesignSystemEditor } from './components/DesignSystemEditor/DesignSystemEditor';
import { ComponentLibrary } from './components/ComponentLibrary/ComponentLibrary';
import { UxGuidelines } from './components/UxGuidelines/UxGuidelines';

// Bootstrap + UBS theme for iframe injection
import bootstrapUbsCss from './styles/bootstrap-ubs.css?raw';

import styles from './App.module.css';

// ── Helpers ──────────────────────────────────────────────────────

let designCounter = 0;
function nextDesignId(): string {
  designCounter += 1;
  return `design-${designCounter}`;
}

function truncatePrompt(prompt: string, max = 40): string {
  const t = prompt.trim().replace(/\s+/g, ' ');
  return t.length <= max ? t : t.slice(0, max).replace(/\s+\S*$/, '') + '\u2026';
}

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

// ── Example prompts ──────────────────────────────────────────────

const EXAMPLES = [
  {
    label: 'Wealth Dashboard',
    prompt: 'Create a wealth management dashboard showing portfolio performance, asset allocation donut chart, recent transactions table, and market overview cards',
  },
  {
    label: 'Client Onboarding',
    prompt: 'Build a client onboarding form with personal details, investment preferences, risk profile questionnaire, and document upload section',
  },
  {
    label: 'Sustainable Investing',
    prompt: 'Design a landing page for UBS sustainable investing with a hero section, three benefit cards, testimonial quotes, and a contact form',
  },
  {
    label: 'Account Overview',
    prompt: 'Create an account overview page showing multiple accounts (savings, current, investment), recent activity, and quick action buttons for transfers',
  },
  {
    label: 'Mortgage Calculator',
    prompt: 'Build a mortgage calculator page with input sliders for amount, term, and interest rate, a results summary card, and a speak to an advisor CTA',
  },
  {
    label: 'Research Article',
    prompt: 'Design an investment research article page with a hero image, key takeaways sidebar, author bio, related articles grid, and newsletter signup',
  },
];

// ── Tab types ────────────────────────────────────────────────────

type MainTab =
  | 'preview'
  | 'review'
  | 'testing'
  | 'code'
  | 'journey'
  | 'components'
  | 'ux-guidelines';

type SubView = 'visual' | 'html';
type CodeTab = 'json' | 'react' | 'angular' | 'html-css';

type GenerationStep =
  | 'interpreting'
  | 'planning'
  | 'designing'
  | 'reviewing'
  | 'generating-code';

// ═════════════════════════════════════════════════════════════════
// App
// ═════════════════════════════════════════════════════════════════

export default function App() {
  const configured = isAiConfigured();

  // ── Prompt ────────────────────────────────────────────────────
  const [prompt, setPrompt] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // ── AI generation (real) ──────────────────────────────────────
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiPage, setAiPage] = useState<GeneratedPage | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);

  // ── Mock pipeline state (existing) ────────────────────────────
  const [generationStep, setGenerationStep] = useState<GenerationStep | null>(null);
  const [model, setModel] = useState<DesignModel | null>(null);
  const [review, setReview] = useState<UxReview | null>(null);
  const [brief, setBrief] = useState<InterpretedBrief | null>(null);
  const [journeyMap, setJourneyMap] = useState<JourneyMap | null>(null);
  const [outputType] = useState<OutputType>('react');
  const [generatedCode, setGeneratedCode] = useState({ react: '', angular: '', htmlCss: '' });
  const [currentPageId, setCurrentPageId] = useState('');
  const [currentState, setCurrentState] = useState<InteractionState>('default');
  const [viewport, setViewport] = useState<ViewportSize>('desktop');
  const [activeCodeTab, setActiveCodeTab] = useState<CodeTab>('json');

  // ── Persona testing ───────────────────────────────────────────
  const [testReport, setTestReport] = useState<PersonaTestReport | null>(null);
  const [isTesting, setIsTesting] = useState(false);

  // ── Saved designs ─────────────────────────────────────────────
  const [savedDesigns, setSavedDesigns] = useState<SavedDesign[]>([]);
  const [activeDesignId, setActiveDesignId] = useState<string | null>(null);

  // ── Navigation ────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState<MainTab>('preview');
  const [subView, setSubView] = useState<SubView>('visual');

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const hasAiPage = aiPage !== null;
  const hasModel = model !== null;
  const hasResult = hasAiPage || hasModel;

  // ── Auto-resize textarea ──────────────────────────────────────
  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = Math.min(el.scrollHeight, 120) + 'px';
    }
  }, [prompt]);

  // ── Write iframe ──────────────────────────────────────────────
  useEffect(() => {
    if (aiPage?.html && iframeRef.current && activeTab === 'preview' && subView === 'visual') {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(buildIframeDoc(aiPage.html));
        doc.close();
      }
    }
  }, [aiPage, activeTab, subView]);

  // ── Generate (AI) ─────────────────────────────────────────────
  const handleGenerate = useCallback(async () => {
    if (!prompt.trim() || isGenerating) return;
    setIsGenerating(true);
    setAiError(null);
    setActiveTab('preview');
    setSubView('visual');

    try {
      // 1. AI page generation
      const page = await generatePage(prompt);
      setAiPage(page);

      // 2. Run mock pipeline in parallel for UX review / brief / journey
      const interpretedBrief = await interpretPrompt(prompt);
      setBrief(interpretedBrief);

      const map = await createJourneyMap(interpretedBrief);
      setJourneyMap(map);

      const designModel = await createDesignModel(prompt, interpretedBrief, map, outputType);
      setModel(designModel);
      setCurrentPageId(designModel.currentPageId);
      setCurrentState(designModel.currentState);

      const uxReview = await reviewDesignModel(designModel);
      setReview(uxReview);

      const [reactCode, angularCode, htmlCssCode] = await Promise.all([
        generateReact(designModel),
        generateAngular(designModel),
        generateHtmlCss(designModel),
      ]);
      setGeneratedCode({ react: reactCode, angular: angularCode, htmlCss: htmlCssCode });

      // Save to history
      const id = nextDesignId();
      const saved: SavedDesign = {
        id,
        prompt,
        label: page.title || truncatePrompt(prompt),
        createdAt: new Date().toISOString(),
        model: designModel,
        review: uxReview,
        brief: interpretedBrief,
        journeyMap: map,
        generatedCode: { react: reactCode, angular: angularCode, htmlCss: htmlCssCode },
      };
      setSavedDesigns((prev) => [saved, ...prev]);
      setActiveDesignId(id);
    } catch (err: unknown) {
      setAiError(err instanceof Error ? err.message : 'Generation failed');
    } finally {
      setIsGenerating(false);
      setGenerationStep(null);
    }
  }, [prompt, isGenerating, outputType]);

  // ── Edit existing page ────────────────────────────────────────
  const handleEdit = useCallback(async () => {
    if (!prompt.trim() || isGenerating || !aiPage) return;
    setIsGenerating(true);
    setAiError(null);

    try {
      const page = await generatePage(prompt, { existingHtml: aiPage.html });
      setAiPage(page);
      setSubView('visual');
    } catch (err: unknown) {
      setAiError(err instanceof Error ? err.message : 'Edit failed');
    } finally {
      setIsGenerating(false);
    }
  }, [prompt, isGenerating, aiPage]);

  // ── Key handler ───────────────────────────────────────────────
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        hasAiPage ? handleEdit() : handleGenerate();
      }
    },
    [handleGenerate, handleEdit, hasAiPage],
  );

  // ── Copy HTML ─────────────────────────────────────────────────
  const handleCopy = useCallback(() => {
    if (aiPage?.html) {
      const text = subView === 'html' ? aiPage.html : buildIframeDoc(aiPage.html);
      navigator.clipboard.writeText(text);
    }
  }, [aiPage, subView]);

  // ── Select saved design ───────────────────────────────────────
  const handleSelectDesign = useCallback(
    (id: string) => {
      const design = savedDesigns.find((d) => d.id === id);
      if (!design) return;
      setActiveDesignId(id);
      setModel(design.model);
      setReview(design.review);
      setBrief(design.brief);
      setJourneyMap(design.journeyMap);
      setGeneratedCode(design.generatedCode);
      setCurrentPageId(design.model.currentPageId);
      setCurrentState(design.model.currentState);
      setPrompt(design.prompt);
      setActiveTab('preview');
      setTestReport(null);
    },
    [savedDesigns],
  );

  // ── Component update from preview ─────────────────────────────
  const handleComponentUpdate = useCallback(
    (updatedComponent: ComponentModel) => {
      if (!model) return;
      const walk = (comps: ComponentModel[]): ComponentModel[] =>
        comps.map((c) =>
          c.id === updatedComponent.id
            ? updatedComponent
            : c.children
              ? { ...c, children: walk(c.children) }
              : c,
        );
      setModel({
        ...model,
        pages: model.pages.map((p) => ({
          ...p,
          sections: p.sections.map((s) => ({
            ...s,
            components: walk(s.components),
          })),
        })),
      });
    },
    [model],
  );

  // ── Persona test ──────────────────────────────────────────────
  const handleRunTest = useCallback(async () => {
    if (!model) return;
    setIsTesting(true);
    try {
      setTestReport(await runPersonaTest(model));
    } catch (err) {
      console.error('Persona testing failed:', err);
    } finally {
      setIsTesting(false);
    }
  }, [model]);

  // ── Edit model apply ──────────────────────────────────────────
  const handleApplyEditedModel = useCallback((edited: DesignModel) => {
    setModel(edited);
    if (edited.pages.length > 0) {
      const ok = edited.pages.some((p) => p.id === edited.currentPageId);
      setCurrentPageId(ok ? edited.currentPageId : edited.pages[0].id);
    }
  }, []);

  // ── Page nav ──────────────────────────────────────────────────
  const handlePageChange = useCallback((pageId: string) => {
    setCurrentPageId(pageId);
    setActiveTab('preview');
  }, []);

  // ── Tab definitions ───────────────────────────────────────────

  const mainTabs: TabItem[] = [
    {
      value: 'preview',
      label: 'Preview',
      icon: <Icon name="search" size="sm" />,
    },
    {
      value: 'review',
      label: 'UX Review',
      icon: <Icon name="shield" size="sm" />,
      disabled: !review,
    },
    {
      value: 'testing',
      label: 'Testing',
      icon: <Icon name="target" size="sm" />,
      disabled: !hasResult,
    },
    {
      value: 'code',
      label: 'Code Export',
      icon: <Icon name="document" size="sm" />,
      disabled: !hasModel,
    },
    {
      value: 'journey',
      label: 'Journey',
      icon: <Icon name="globe" size="sm" />,
      disabled: !journeyMap,
    },
    {
      value: 'components',
      label: 'Components',
      icon: <Icon name="chart" size="sm" />,
    },
    {
      value: 'ux-guidelines',
      label: 'UX Guidelines',
      icon: <Icon name="lightbulb" size="sm" />,
    },
  ];

  // ── Status text ───────────────────────────────────────────────
  const statusText = isGenerating
    ? generationStep
      ? `Generating: ${generationStep.replace(/-/g, ' ')}`
      : 'Generating page\u2026'
    : hasResult
      ? 'Page ready'
      : 'Ready';

  const statusState = isGenerating ? 'generating' : aiError ? 'error' : 'ready';

  // ═════════════════════════════════════════════════════════════
  // Render
  // ═════════════════════════════════════════════════════════════

  return (
    <div className={styles.app}>
      {/* ── Header ──────────────────────────────────────────── */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Logo variant="full" colour="white" size={80} />
          <span className={styles.headerTitle}>Page Builder</span>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.statusIndicator}>
            <span className={styles.statusDot} data-status={statusState} />
            {statusText}
          </div>
          {aiPage?.tokensUsed && (
            <Badge variant="default" size="sm">
              {aiPage.tokensUsed.toLocaleString()} tokens
            </Badge>
          )}
        </div>
      </header>

      {/* ── Prompt Bar ──────────────────────────────────────── */}
      <div className={styles.promptBar}>
        <div className={styles.promptInputWrapper}>
          <textarea
            ref={textareaRef}
            className={styles.promptTextarea}
            placeholder={
              hasAiPage
                ? 'Describe changes to make to this page\u2026'
                : 'Describe the page you want to build\u2026'
            }
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
          />
        </div>
        <div className={styles.promptActions}>
          {hasAiPage && (
            <Button
              variant="outline"
              size="medium"
              icon={<Icon name="edit" size="sm" />}
              onClick={handleEdit}
              disabled={!prompt.trim() || isGenerating || !configured}
              loading={isGenerating}
            >
              Edit
            </Button>
          )}
          <Button
            variant="primary"
            size="medium"
            icon={<Icon name="lightbulb" size="sm" />}
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating || !configured}
            loading={isGenerating && !hasAiPage}
          >
            {hasAiPage ? 'New page' : 'Generate'}
          </Button>
        </div>
      </div>

      {/* ── Config warning ──────────────────────────────────── */}
      {!configured && (
        <div className={styles.errorWrap}>
          <Alert variant="warning">
            API key not configured. Copy <code>.env.example</code> to{' '}
            <code>.env</code> and set <code>VITE_AI_API_KEY</code>, then restart
            the dev server.
          </Alert>
        </div>
      )}

      {/* ── Error ───────────────────────────────────────────── */}
      {aiError && (
        <div className={styles.errorWrap}>
          <Alert variant="error">{aiError}</Alert>
        </div>
      )}

      {/* ── Design History ──────────────────────────────────── */}
      {savedDesigns.length > 0 && (
        <div className={styles.historyBar}>
          <span className={styles.historyLabel}>History</span>
          {savedDesigns.map((d) => (
            <Tag
              key={d.id}
              label={d.label}
              variant={d.id === activeDesignId ? 'red' : 'outline'}
              size="sm"
              onClick={() => handleSelectDesign(d.id)}
            />
          ))}
        </div>
      )}

      {/* ── Main Tabs ───────────────────────────────────────── */}
      <div className={styles.tabBar}>
        <Tabs
          tabs={mainTabs}
          activeTab={activeTab}
          onChange={(val) => setActiveTab(val as MainTab)}
          variant="underline"
        />
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className={styles.content}>
        {/* ─── Preview ─────────────────────────────────────── */}
        {activeTab === 'preview' && (
          hasAiPage ? (
            <div className={styles.tabContent} data-tab="preview">
              <div className={styles.previewToolbar}>
                <div className={styles.viewToggle}>
                  <button
                    className={styles.viewToggleBtn}
                    data-active={subView === 'visual'}
                    onClick={() => setSubView('visual')}
                  >
                    <Icon name="search" size="sm" /> Preview
                  </button>
                  <button
                    className={styles.viewToggleBtn}
                    data-active={subView === 'html'}
                    onClick={() => setSubView('html')}
                  >
                    HTML
                  </button>
                </div>
                <div className={styles.toolbarSpacer} />
                <Button variant="ghost" size="small" icon={<Icon name="copy" size="sm" />} onClick={handleCopy}>
                  Copy
                </Button>
                {aiPage.tokensUsed && (
                  <Badge variant="default" size="sm">
                    {aiPage.model}
                  </Badge>
                )}
              </div>

              {subView === 'visual' ? (
                <iframe
                  ref={iframeRef}
                  className={styles.previewFrame}
                  title="Generated page preview"
                  sandbox="allow-same-origin"
                />
              ) : (
                <div className={styles.codeView}>
                  <pre>{aiPage.html}</pre>
                </div>
              )}
            </div>
          ) : hasModel ? (
            <div className={styles.tabContent}>
              <PreviewPanel
                model={model}
                currentPageId={currentPageId}
                currentState={currentState}
                viewport={viewport}
                onPageChange={handlePageChange}
                onStateChange={setCurrentState}
                onViewportChange={setViewport}
                onComponentUpdate={handleComponentUpdate}
              />
            </div>
          ) : (
            <div className={styles.tabContent}>
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>
                  <Icon name="lightbulb" size="lg" variant="illustrative" colour="#E60000" />
                </div>
                <h2 className={styles.emptyTitle}>Build a page with AI</h2>
                <p className={styles.emptyDescription}>
                  Describe what you need and Claude will generate a complete page
                  using Bootstrap 5 with UBS brand theming. Then review it against
                  UBS UX guidelines, run persona tests, and export production code.
                </p>
                <div className={styles.exampleGrid}>
                  {EXAMPLES.map((ex, i) => (
                    <Card
                      key={i}
                      variant="default"
                      padding="small"
                      hoverable
                      onClick={() => {
                        setPrompt(ex.prompt);
                        textareaRef.current?.focus();
                      }}
                    >
                      <div className={styles.exampleCardInner}>
                        <strong>{ex.label}</strong>
                        <br />
                        {ex.prompt.slice(0, 80)}{ex.prompt.length > 80 ? '\u2026' : ''}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )
        )}

        {/* ─── UX Review ───────────────────────────────────── */}
        {activeTab === 'review' && (
          <div className={styles.tabContent}>
            <div className={styles.reviewContent}>
              {brief && (
                <Card variant="pastel1" padding="medium" style={{ marginBottom: 16 }}>
                  <BriefPanel brief={brief} />
                </Card>
              )}
              <ReviewPanel review={review} />
              {model && (
                <Card variant="default" padding="medium" style={{ marginTop: 16 }}>
                  <EditPanel model={model} onApply={handleApplyEditedModel} />
                </Card>
              )}
              {model && (
                <Card variant="default" padding="medium" style={{ marginTop: 16 }}>
                  <DesignSystemEditor />
                </Card>
              )}
            </div>
          </div>
        )}

        {/* ─── Testing ─────────────────────────────────────── */}
        {activeTab === 'testing' && (
          <div className={styles.tabContent}>
            <PersonaTestPanel
              model={model}
              report={testReport}
              isTesting={isTesting}
              onRunTest={handleRunTest}
            />
            {model && (
              <TestExportPanel model={model} />
            )}
          </div>
        )}

        {/* ─── Code Export ─────────────────────────────────── */}
        {activeTab === 'code' && (
          <div className={styles.tabContent}>
            <CodePanel
              model={model}
              activeCodeTab={activeCodeTab}
              onCodeTabChange={setActiveCodeTab}
              generatedCode={generatedCode}
            />
          </div>
        )}

        {/* ─── Journey ─────────────────────────────────────── */}
        {activeTab === 'journey' && (
          <div className={styles.tabContent}>
            <JourneyPanel
              journeyMap={journeyMap}
              currentPageId={currentPageId}
              onStepClick={handlePageChange}
            />
          </div>
        )}

        {/* ─── Components ──────────────────────────────────── */}
        {activeTab === 'components' && (
          <div className={styles.tabContent} data-tab="components">
            <ComponentLibrary />
          </div>
        )}

        {/* ─── UX Guidelines ──────────────────────────────── */}
        {activeTab === 'ux-guidelines' && (
          <div className={styles.tabContent} data-tab="ux-guidelines">
            <UxGuidelines />
          </div>
        )}
      </div>
    </div>
  );
}
