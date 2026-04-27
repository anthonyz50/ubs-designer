/**
 * UBS UI Prompt Preview - Main Application
 *
 * Three-panel layout for generating, previewing and editing
 * UBS-branded UI from natural language prompts.
 */

import { useState, useCallback } from 'react';
import type { OutputType, PageType, ViewportSize, UiModel } from './types';
import { generateUiFromPrompt } from './services/aiGenerationService';
import PromptPanel from './components/PromptPanel/PromptPanel';
import PreviewPanel from './components/PreviewPanel/PreviewPanel';
import EditPanel from './components/EditPanel/EditPanel';
import CodePanel from './components/CodePanel/CodePanel';
import styles from './App.module.css';

type CodeTab = 'json' | 'react' | 'angular' | 'html';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [outputType, setOutputType] = useState<OutputType>('react');
  const [pageType, setPageType] = useState<PageType | undefined>();
  const [generatedModel, setGeneratedModel] = useState<UiModel | null>(null);
  const [editedModel, setEditedModel] = useState<UiModel | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<CodeTab>('json');
  const [viewportSize, setViewportSize] = useState<ViewportSize>('desktop');

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    try {
      const result = await generateUiFromPrompt(prompt, outputType, pageType);
      setGeneratedModel(result.model);
      setEditedModel(result.model);
    } catch (err) {
      console.error('Generation failed:', err);
    } finally {
      setIsGenerating(false);
    }
  }, [prompt, outputType, pageType, isGenerating]);

  const handleClear = useCallback(() => {
    setPrompt('');
    setGeneratedModel(null);
    setEditedModel(null);
  }, []);

  const handlePreviewClear = useCallback(() => {
    setGeneratedModel(null);
    setEditedModel(null);
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

  return (
    <div className={styles.app}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoText}>UBS</span>
          <div className={styles.logoAccent} />
        </div>
        <span className={styles.headerTitle}>UI Prompt Preview</span>
        <span className={styles.versionBadge}>v0.1.0</span>
      </header>

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

        {/* Centre: Preview + Code */}
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
          <div className={styles.codeSection}>
            <CodePanel
              model={editedModel}
              activeTab={activeCodeTab}
              onTabChange={setActiveCodeTab}
            />
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
