import { useState, useCallback } from 'react';
import type {
  OutputType,
  PatternType,
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
import { PromptPanel } from './components/PromptPanel/PromptPanel';
import { PreviewPanel } from './components/PreviewPanel/PreviewPanel';
import { JourneyPanel } from './components/JourneyPanel/JourneyPanel';
import { CodePanel } from './components/CodePanel/CodePanel';
import { BriefPanel } from './components/BriefPanel/BriefPanel';
import { ReviewPanel } from './components/ReviewPanel/ReviewPanel';
import { EditPanel } from './components/EditPanel/EditPanel';
import { PersonaTestPanel } from './components/PersonaTestPanel/PersonaTestPanel';
import { TestExportPanel } from './components/TestExportPanel/TestExportPanel';
import { DesignSystemEditor } from './components/DesignSystemEditor/DesignSystemEditor';
import { DesignNav } from './components/DesignNav/DesignNav';
import { ComponentLibrary } from './components/ComponentLibrary/ComponentLibrary';
import { UxGuidelines } from './components/UxGuidelines/UxGuidelines';
import styles from './App.module.css';

let designCounter = 0;
function nextDesignId(): string {
  designCounter += 1;
  return `design-${designCounter}`;
}

function truncatePrompt(prompt: string, max = 40): string {
  const trimmed = prompt.trim().replace(/\s+/g, ' ');
  if (trimmed.length <= max) return trimmed;
  return trimmed.slice(0, max).replace(/\s+\S*$/, '') + '...';
}

type MainTab = 'preview' | 'journey' | 'code' | 'review' | 'testing' | 'components' | 'ux-guidelines';
type RightTab = 'brief' | 'review' | 'edit' | 'test-export' | 'design-system';
type CodeTab = 'json' | 'react' | 'angular' | 'html-css';
type GenerationStep =
  | 'interpreting'
  | 'planning'
  | 'designing'
  | 'reviewing'
  | 'generating-code';

function App() {
  // Prompt state
  const [prompt, setPrompt] = useState('');
  const [outputType, setOutputType] = useState<OutputType>('react');
  const [patternType, setPatternType] = useState<PatternType>('support-flow');

  // Generation state
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState<GenerationStep | null>(
    null,
  );

  // Result state
  const [model, setModel] = useState<DesignModel | null>(null);
  const [review, setReview] = useState<UxReview | null>(null);
  const [brief, setBrief] = useState<InterpretedBrief | null>(null);
  const [journeyMap, setJourneyMap] = useState<JourneyMap | null>(null);

  // Navigation state
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('preview');
  const [activeRightTab, setActiveRightTab] = useState<RightTab>('brief');
  const [activeCodeTab, setActiveCodeTab] = useState<CodeTab>('json');
  const [currentPageId, setCurrentPageId] = useState('');
  const [currentState, setCurrentState] = useState<InteractionState>('default');
  const [viewport, setViewport] = useState<ViewportSize>('desktop');

  // Generated code
  const [generatedCode, setGeneratedCode] = useState({
    react: '',
    angular: '',
    htmlCss: '',
  });

  // Persona testing state
  const [testReport, setTestReport] = useState<PersonaTestReport | null>(null);
  const [isTesting, setIsTesting] = useState(false);

  // Saved designs nav
  const [savedDesigns, setSavedDesigns] = useState<SavedDesign[]>([]);
  const [activeDesignId, setActiveDesignId] = useState<string | null>(null);

  const hasResult = model !== null;

  // ── Generation flow ──
  const handleGenerate = useCallback(async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setActiveMainTab('preview');
    setActiveRightTab('brief');

    try {
      // Step 1: Interpret prompt
      setGenerationStep('interpreting');
      const interpretedBrief = await interpretPrompt(prompt);
      setBrief(interpretedBrief);

      // Step 2: Create journey map
      setGenerationStep('planning');
      const map = await createJourneyMap(interpretedBrief);
      setJourneyMap(map);

      // Step 3: Create design model
      setGenerationStep('designing');
      const designModel = await createDesignModel(
        prompt,
        interpretedBrief,
        map,
        outputType,
      );
      setModel(designModel);
      setCurrentPageId(designModel.currentPageId);
      setCurrentState(designModel.currentState);

      // Step 4: Review
      setGenerationStep('reviewing');
      const uxReview = await reviewDesignModel(designModel);
      setReview(uxReview);

      // Step 5: Generate code (in parallel)
      setGenerationStep('generating-code');
      const [reactCode, angularCode, htmlCssCode] = await Promise.all([
        generateReact(designModel),
        generateAngular(designModel),
        generateHtmlCss(designModel),
      ]);
      const codes = {
        react: reactCode,
        angular: angularCode,
        htmlCss: htmlCssCode,
      };
      setGeneratedCode(codes);

      // Auto-save to design nav
      const id = nextDesignId();
      const saved: SavedDesign = {
        id,
        prompt,
        label: designModel.projectName || truncatePrompt(prompt),
        createdAt: new Date().toISOString(),
        model: designModel,
        review: uxReview,
        brief: interpretedBrief,
        journeyMap: map,
        generatedCode: codes,
      };
      setSavedDesigns((prev) => [saved, ...prev]);
      setActiveDesignId(id);
    } catch (error) {
      console.error('Generation failed:', error);
    } finally {
      setIsGenerating(false);
      setGenerationStep(null);
    }
  }, [prompt, outputType]);

  const handleSelectDesign = useCallback((id: string) => {
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
    setActiveMainTab('preview');
    setActiveRightTab('brief');
    setTestReport(null);
  }, [savedDesigns]);

  const handleDeleteDesign = useCallback((id: string) => {
    setSavedDesigns((prev) => prev.filter((d) => d.id !== id));
    if (activeDesignId === id) {
      setActiveDesignId(null);
    }
  }, [activeDesignId]);

  const handleClear = useCallback(() => {
    setPrompt('');
    setModel(null);
    setReview(null);
    setBrief(null);
    setJourneyMap(null);
    setGeneratedCode({ react: '', angular: '', htmlCss: '' });
    setTestReport(null);
    setCurrentPageId('');
    setCurrentState('default');
    setActiveMainTab('preview');
    setActiveRightTab('brief');
    setActiveDesignId(null);
  }, []);

  const handleApplyEditedModel = useCallback((editedModel: DesignModel) => {
    setModel(editedModel);
    if (editedModel.pages.length > 0) {
      const hasCurrentPage = editedModel.pages.some(
        (p) => p.id === editedModel.currentPageId,
      );
      setCurrentPageId(
        hasCurrentPage ? editedModel.currentPageId : editedModel.pages[0].id,
      );
    }
  }, []);

  const handlePageChange = useCallback((pageId: string) => {
    setCurrentPageId(pageId);
    setActiveMainTab('preview');
  }, []);

  const handleComponentUpdate = useCallback(
    (updatedComponent: ComponentModel) => {
      if (!model) return;

      const updateComponents = (components: ComponentModel[]): ComponentModel[] =>
        components.map((comp) => {
          if (comp.id === updatedComponent.id) return updatedComponent;
          if (comp.children) {
            return { ...comp, children: updateComponents(comp.children) };
          }
          return comp;
        });

      const updatedPages = model.pages.map((page) => ({
        ...page,
        sections: page.sections.map((section) => ({
          ...section,
          components: updateComponents(section.components),
        })),
      }));

      setModel({ ...model, pages: updatedPages });
    },
    [model],
  );

  const handleRunTest = useCallback(async () => {
    if (!model) return;
    setIsTesting(true);
    try {
      const report = await runPersonaTest(model);
      setTestReport(report);
    } catch (error) {
      console.error('Persona testing failed:', error);
    } finally {
      setIsTesting(false);
    }
  }, [model]);

  const MAIN_TABS: { value: MainTab; label: string; disabled: boolean }[] = [
    { value: 'preview', label: 'Preview', disabled: false },
    { value: 'components', label: 'Components', disabled: false },
    { value: 'journey', label: 'Journey', disabled: !hasResult },
    { value: 'code', label: 'Code', disabled: !hasResult },
    { value: 'review', label: 'Review', disabled: !review },
    { value: 'testing', label: 'Testing', disabled: !hasResult },
    { value: 'ux-guidelines', label: 'UX Guidelines', disabled: false },
  ];

  const RIGHT_TABS: { value: RightTab; label: string; disabled: boolean }[] = [
    { value: 'brief', label: 'UX Brief', disabled: false },
    { value: 'review', label: 'UX Review', disabled: !review },
    { value: 'edit', label: 'Edit Model', disabled: !hasResult },
    { value: 'test-export', label: 'Export Test', disabled: !hasResult },
    { value: 'design-system', label: 'Design System', disabled: false },
  ];

  return (
    <div className={styles.app}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <img src="/ubs-logo.svg" alt="UBS" className={styles.headerLogo} />
          <span className={styles.headerTitle}>AI UX Designer</span>
          <span className={styles.headerVersion}>v1.0.0</span>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.headerStatus}>
            <span
              className={styles.statusDot}
              data-generating={isGenerating}
            />
            {isGenerating
              ? `Generating: ${generationStep?.replace(/-/g, ' ') ?? '...'}`
              : 'Ready'}
          </div>
        </div>
      </header>

      {/* Body */}
      <div className={styles.body}>
        {/* Left sidebar: Prompt Panel */}
        <aside className={styles.leftSidebar}>
          <PromptPanel
            prompt={prompt}
            onPromptChange={setPrompt}
            outputType={outputType}
            onOutputTypeChange={setOutputType}
            patternType={patternType}
            onPatternTypeChange={setPatternType}
            isGenerating={isGenerating}
            generationStep={generationStep}
            onGenerate={handleGenerate}
            onClear={handleClear}
          />
          <DesignNav
            designs={savedDesigns}
            activeId={activeDesignId}
            onSelect={handleSelectDesign}
            onDelete={handleDeleteDesign}
          />
        </aside>

        {/* Main content */}
        <main className={styles.mainContent}>
          <div className={styles.mainTabs}>
            {MAIN_TABS.map((tab) => (
              <button
                key={tab.value}
                className={styles.mainTab}
                data-active={activeMainTab === tab.value}
                disabled={tab.disabled}
                onClick={() => setActiveMainTab(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className={styles.mainTabContent} data-tab={activeMainTab}>
            {activeMainTab === 'preview' && (
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
            )}
            {activeMainTab === 'journey' && (
              <JourneyPanel
                journeyMap={journeyMap}
                currentPageId={currentPageId}
                onStepClick={handlePageChange}
              />
            )}
            {activeMainTab === 'code' && (
              <CodePanel
                model={model}
                activeCodeTab={activeCodeTab}
                onCodeTabChange={setActiveCodeTab}
                generatedCode={generatedCode}
              />
            )}
            {activeMainTab === 'review' && <ReviewPanel review={review} />}
            {activeMainTab === 'components' && (
              <ComponentLibrary />
            )}
            {activeMainTab === 'testing' && (
              <PersonaTestPanel
                model={model}
                report={testReport}
                isTesting={isTesting}
                onRunTest={handleRunTest}
              />
            )}
            {activeMainTab === 'ux-guidelines' && (
              <UxGuidelines />
            )}
          </div>
        </main>

        {/* Right sidebar */}
        <aside className={styles.rightSidebar}>
          <div className={styles.rightTabs}>
            {RIGHT_TABS.map((tab) => (
              <button
                key={tab.value}
                className={styles.rightTab}
                data-active={activeRightTab === tab.value}
                disabled={tab.disabled}
                onClick={() => setActiveRightTab(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className={styles.rightTabContent}>
            {activeRightTab === 'brief' && <BriefPanel brief={brief} />}
            {activeRightTab === 'review' && <ReviewPanel review={review} />}
            {activeRightTab === 'edit' && (
              <EditPanel model={model} onApply={handleApplyEditedModel} />
            )}
            {activeRightTab === 'test-export' && (
              <TestExportPanel model={model} />
            )}
            {activeRightTab === 'design-system' && (
              <DesignSystemEditor />
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
