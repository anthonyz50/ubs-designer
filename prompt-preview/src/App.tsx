/**
 * UBS UI Prompt Preview: Main Application
 *
 * Three-panel layout for generating, previewing and editing
 * UBS-branded UI from natural language prompts.
 *
 * Powered by Claude Opus via Azure AI Foundry.
 */

import { useState, useCallback } from 'react';
import type { OutputType, PageType, ViewportSize, UiModel, DesignCritique, DesignAlternative } from './types';
import { generateUiFromPrompt, critiqueDesign, suggestAlternatives, isAiConfigured } from './services/aiGenerationService';
import PromptPanel from './components/PromptPanel/PromptPanel';
import PreviewPanel from './components/PreviewPanel/PreviewPanel';
import EditPanel from './components/EditPanel/EditPanel';
import CodePanel from './components/CodePanel/CodePanel';
import styles from './App.module.css';

type CodeTab = 'json' | 'react' | 'angular' | 'html';
type BottomTab = 'code' | 'critique' | 'alternatives';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [outputType, setOutputType] = useState<OutputType>('react');
  const [pageType, setPageType] = useState<PageType | undefined>();
  const [generatedModel, setGeneratedModel] = useState<UiModel | null>(null);
  const [editedModel, setEditedModel] = useState<UiModel | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<CodeTab>('json');
  const [viewportSize, setViewportSize] = useState<ViewportSize>('desktop');
  const [bottomTab, setBottomTab] = useState<BottomTab>('code');

  // AI-powered features
  const [critique, setCritique] = useState<DesignCritique[]>([]);
  const [critiqueSummary, setCritiqueSummary] = useState('');
  const [alternatives, setAlternatives] = useState<DesignAlternative[]>([]);
  const [reasoning, setReasoning] = useState('');
  const [isCritiquing, setIsCritiquing] = useState(false);
  const [isLoadingAlts, setIsLoadingAlts] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const aiEnabled = isAiConfigured();

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setError(null);
    setCritique([]);
    setCritiqueSummary('');
    setAlternatives([]);
    setReasoning('');

    try {
      const result = await generateUiFromPrompt(prompt, outputType, pageType);
      setGeneratedModel(result.model);
      setEditedModel(result.model);

      // If AI returned critique and alternatives inline, use them
      if (result.critique?.length) {
        setCritique(result.critique);
        setBottomTab('critique');
      }
      if (result.alternatives?.length) {
        setAlternatives(result.alternatives);
      }
      if (result.reasoning) {
        setReasoning(result.reasoning);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Generation failed';
      setError(message);
      console.error('Generation failed:', err);
    } finally {
      setIsGenerating(false);
    }
  }, [prompt, outputType, pageType, isGenerating]);

  const handleCritique = useCallback(async () => {
    if (!editedModel || isCritiquing) return;
    setIsCritiquing(true);
    setError(null);

    try {
      const result = await critiqueDesign(editedModel);
      setCritique(result.critique);
      setCritiqueSummary(result.summary);
      setBottomTab('critique');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Critique failed';
      setError(message);
    } finally {
      setIsCritiquing(false);
    }
  }, [editedModel, isCritiquing]);

  const handleGetAlternatives = useCallback(async () => {
    if (!editedModel || isLoadingAlts) return;
    setIsLoadingAlts(true);
    setError(null);

    try {
      const alts = await suggestAlternatives(editedModel, prompt);
      setAlternatives(alts);
      setBottomTab('alternatives');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to generate alternatives';
      setError(message);
    } finally {
      setIsLoadingAlts(false);
    }
  }, [editedModel, prompt, isLoadingAlts]);

  const handleSelectAlternative = useCallback((alt: DesignAlternative) => {
    setEditedModel(alt.model);
    setGeneratedModel(alt.model);
    setCritique([]);
    setCritiqueSummary('');
  }, []);

  const handleClear = useCallback(() => {
    setPrompt('');
    setGeneratedModel(null);
    setEditedModel(null);
    setCritique([]);
    setCritiqueSummary('');
    setAlternatives([]);
    setReasoning('');
    setError(null);
  }, []);

  const handlePreviewClear = useCallback(() => {
    setGeneratedModel(null);
    setEditedModel(null);
    setCritique([]);
    setAlternatives([]);
  }, []);

  const handleRefresh = useCallback(() => {
    if (prompt.trim()) {
      handleGenerate();
    }
  }, [prompt, handleGenerate]);

  const handleApplyEdit = useCallback((model: UiModel) => {
    setEditedModel(model);
  }, []);

  const handleResetEdit = useCallback(() => {
    if (generatedModel) {
      setEditedModel(structuredClone(generatedModel));
    }
  }, [generatedModel]);

  const severityColour = (severity: string) => {
    switch (severity) {
      case 'error': return 'var(--ubs-rag-red)';
      case 'warning': return 'var(--ubs-rag-amber)';
      default: return 'var(--ubs-rag-green)';
    }
  };

  return (
    <div className={styles.app}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoText}>UBS</span>
          <div className={styles.logoAccent} />
        </div>
        <span className={styles.headerTitle}>UI Prompt Preview</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--ubs-space-2)' }}>
          <span
            className={styles.versionBadge}
            style={{
              background: aiEnabled ? 'var(--ubs-rag-green)' : 'var(--ubs-gray-iii)',
              color: 'var(--ubs-white)',
            }}
          >
            {aiEnabled ? '🤖 Claude Opus' : '⚡ Mock mode'}
          </span>
          <span className={styles.versionBadge}>v0.2.0</span>
        </div>
      </header>

      {/* Error banner */}
      {error && (
        <div style={{
          background: '#FFF0F0',
          borderBottom: '2px solid var(--ubs-rag-red)',
          padding: 'var(--ubs-space-3) var(--ubs-space-5)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 'var(--ubs-font-size-sm)',
        }}>
          <span>⚠️ {error}</span>
          <button
            onClick={() => setError(null)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 700 }}
          >
            ✕
          </button>
        </div>
      )}

      {/* Main layout */}
      <div className={styles.main}>
        {/* Left: Prompt Panel */}
        <div className={styles.leftPanel}>
          <PromptPanel
            prompt={prompt}
            onPromptChange={setPrompt}
            outputType={outputType}
            onOutputTypeChange={setOutputType}
            pageType={pageType}
            onPageTypeChange={setPageType}
            onGenerate={handleGenerate}
            onClear={handleClear}
            isGenerating={isGenerating}
          />
        </div>

        {/* Centre: Preview + Bottom Tabs */}
        <div className={styles.centrePanel}>
          <div className={styles.previewSection}>
            <PreviewPanel
              model={editedModel}
              viewportSize={viewportSize}
              onViewportChange={setViewportSize}
              onRefresh={handleRefresh}
              onClear={handlePreviewClear}
              isGenerating={isGenerating}
            />
          </div>

          {/* Bottom tabs: Code | Critique | Alternatives */}
          <div className={styles.codeSection}>
            <div style={{
              display: 'flex',
              borderBottom: '1px solid var(--ubs-border)',
              gap: 0,
            }}>
              {(['code', 'critique', 'alternatives'] as BottomTab[]).map(tab => (
                <button
                  key={tab}
                  onClick={() => setBottomTab(tab)}
                  style={{
                    padding: 'var(--ubs-space-2) var(--ubs-space-4)',
                    background: bottomTab === tab ? 'var(--ubs-bg-primary)' : 'var(--ubs-bg-secondary)',
                    border: 'none',
                    borderBottom: bottomTab === tab ? '2px solid var(--ubs-red)' : '2px solid transparent',
                    cursor: 'pointer',
                    fontFamily: 'var(--ubs-font-family)',
                    fontSize: 'var(--ubs-font-size-sm)',
                    fontWeight: bottomTab === tab ? 700 : 400,
                    textTransform: 'capitalize',
                  }}
                >
                  {tab}
                  {tab === 'critique' && critique.length > 0 && (
                    <span style={{
                      marginLeft: 'var(--ubs-space-1)',
                      background: 'var(--ubs-rag-amber)',
                      color: 'var(--ubs-white)',
                      borderRadius: 'var(--ubs-radius-full)',
                      padding: '1px 6px',
                      fontSize: '11px',
                    }}>
                      {critique.length}
                    </span>
                  )}
                  {tab === 'alternatives' && alternatives.length > 0 && (
                    <span style={{
                      marginLeft: 'var(--ubs-space-1)',
                      background: 'var(--ubs-bronze-i)',
                      color: 'var(--ubs-white)',
                      borderRadius: 'var(--ubs-radius-full)',
                      padding: '1px 6px',
                      fontSize: '11px',
                    }}>
                      {alternatives.length}
                    </span>
                  )}
                </button>
              ))}

              {/* Action buttons on the right */}
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 'var(--ubs-space-2)', padding: 'var(--ubs-space-1)' }}>
                {editedModel && (
                  <>
                    <button
                      className="ubs-btn ubs-btn--ghost"
                      onClick={handleCritique}
                      disabled={isCritiquing}
                      style={{ fontSize: 'var(--ubs-font-size-xs)', padding: '4px 10px' }}
                    >
                      {isCritiquing ? 'Analysing...' : '🔍 Critique'}
                    </button>
                    <button
                      className="ubs-btn ubs-btn--ghost"
                      onClick={handleGetAlternatives}
                      disabled={isLoadingAlts || !aiEnabled}
                      style={{ fontSize: 'var(--ubs-font-size-xs)', padding: '4px 10px' }}
                      title={aiEnabled ? 'Get alternative designs' : 'Requires AI connection'}
                    >
                      {isLoadingAlts ? 'Thinking...' : '💡 Alternatives'}
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Tab content */}
            {bottomTab === 'code' && (
              <CodePanel
                model={editedModel}
                activeTab={activeCodeTab}
                onTabChange={setActiveCodeTab}
              />
            )}

            {bottomTab === 'critique' && (
              <div style={{ padding: 'var(--ubs-space-4)', overflow: 'auto', maxHeight: '400px' }}>
                {reasoning && (
                  <div style={{
                    marginBottom: 'var(--ubs-space-4)',
                    padding: 'var(--ubs-space-3)',
                    background: 'var(--ubs-pastel-ii)',
                    borderRadius: 'var(--ubs-radius-md)',
                    fontSize: 'var(--ubs-font-size-sm)',
                    lineHeight: 'var(--ubs-line-height-base)',
                  }}>
                    <strong>Design reasoning:</strong> {reasoning}
                  </div>
                )}
                {critiqueSummary && (
                  <div style={{
                    marginBottom: 'var(--ubs-space-4)',
                    padding: 'var(--ubs-space-3)',
                    background: 'var(--ubs-bg-secondary)',
                    borderRadius: 'var(--ubs-radius-md)',
                    fontSize: 'var(--ubs-font-size-sm)',
                  }}>
                    {critiqueSummary}
                  </div>
                )}
                {critique.length === 0 && !isCritiquing && (
                  <div style={{ color: 'var(--ubs-text-tertiary)', fontSize: 'var(--ubs-font-size-sm)' }}>
                    Generate a design then click "Critique" to get a UBS compliance review.
                  </div>
                )}
                {critique.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      marginBottom: 'var(--ubs-space-3)',
                      padding: 'var(--ubs-space-3)',
                      border: '1px solid var(--ubs-border)',
                      borderLeft: `4px solid ${severityColour(item.severity)}`,
                      borderRadius: 'var(--ubs-radius-sm)',
                      background: 'var(--ubs-bg-primary)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--ubs-space-2)', marginBottom: 'var(--ubs-space-1)' }}>
                      <span style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: severityColour(item.severity),
                      }}>
                        {item.severity}
                      </span>
                      <span style={{
                        fontSize: '11px',
                        color: 'var(--ubs-text-tertiary)',
                        textTransform: 'uppercase',
                      }}>
                        {item.category}
                      </span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 'var(--ubs-font-size-sm)', marginBottom: 'var(--ubs-space-1)' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: 'var(--ubs-font-size-sm)', color: 'var(--ubs-text-secondary)', marginBottom: 'var(--ubs-space-2)' }}>
                      {item.description}
                    </div>
                    <div style={{ fontSize: 'var(--ubs-font-size-xs)', color: 'var(--ubs-text-primary)', fontStyle: 'italic' }}>
                      💡 {item.recommendation}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {bottomTab === 'alternatives' && (
              <div style={{ padding: 'var(--ubs-space-4)', overflow: 'auto', maxHeight: '400px' }}>
                {alternatives.length === 0 && !isLoadingAlts && (
                  <div style={{ color: 'var(--ubs-text-tertiary)', fontSize: 'var(--ubs-font-size-sm)' }}>
                    {aiEnabled
                      ? 'Generate a design then click "Alternatives" to see different approaches.'
                      : 'Connect Claude Opus to get AI-generated design alternatives.'}
                  </div>
                )}
                {alternatives.map((alt, i) => (
                  <div
                    key={i}
                    style={{
                      marginBottom: 'var(--ubs-space-3)',
                      padding: 'var(--ubs-space-4)',
                      border: '1px solid var(--ubs-border)',
                      borderRadius: 'var(--ubs-radius-md)',
                      background: 'var(--ubs-bg-primary)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--ubs-space-2)' }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 'var(--ubs-font-size-base)', marginBottom: 'var(--ubs-space-1)' }}>
                          {alt.title}
                        </div>
                        <div style={{ fontSize: 'var(--ubs-font-size-sm)', color: 'var(--ubs-text-secondary)', lineHeight: 'var(--ubs-line-height-base)' }}>
                          {alt.rationale}
                        </div>
                      </div>
                      <button
                        className="ubs-btn ubs-btn--primary"
                        onClick={() => handleSelectAlternative(alt)}
                        style={{ fontSize: 'var(--ubs-font-size-xs)', padding: '6px 14px', whiteSpace: 'nowrap', marginLeft: 'var(--ubs-space-3)' }}
                      >
                        Use this
                      </button>
                    </div>
                    <div style={{
                      fontSize: 'var(--ubs-font-size-xs)',
                      color: 'var(--ubs-text-tertiary)',
                      marginTop: 'var(--ubs-space-2)',
                    }}>
                      Type: {alt.model.pageType} · {alt.model.cards?.length ?? 0} cards · {alt.model.form ? 'Has form' : 'No form'}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Edit Panel */}
        <div className={styles.rightPanel}>
          <EditPanel
            model={editedModel}
            generatedModel={generatedModel}
            onApply={handleApplyEdit}
            onReset={handleResetEdit}
          />
        </div>
      </div>
    </div>
  );
}
