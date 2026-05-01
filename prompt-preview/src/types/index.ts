// ============================================================
// UBS AI UX Designer — Core Design Model Types
// ============================================================

// Output and pattern types
export type OutputType = 'react' | 'angular' | 'html-css' | 'all';
export type PatternType =
  | 'component'
  | 'page'
  | 'journey'
  | 'dashboard'
  | 'form'
  | 'support-flow'
  | 'data-table'
  | 'notification'
  | 'admin-panel'
  | 'onboarding'
  | 'wizard'
  | 'settings'
  | 'search-results'
  | 'profile'
  | 'inbox'
  | 'approval-flow'
  | 'reporting'
  | 'file-management'
  | 'activity-feed'
  | 'comparison'
  | 'master-detail';
export type ViewportSize = 'desktop' | 'mobile';

// ----------------------------------------------------------
// UX Planning types
// ----------------------------------------------------------
export interface InterpretedBrief {
  summary: string;
  userGoal: string;
  audience: string;
  journeyType: PatternType;
  mainPages: string[];
  mainActions: string[];
  keyStates: string[];
  accessibilityConsiderations: string[];
  toneOfVoiceNotes: string[];
}

// ----------------------------------------------------------
// Journey map types
// ----------------------------------------------------------
export interface JourneyStep {
  id: string;
  title: string;
  userIntent: string;
  pageRequired: string;
  primaryAction: string;
  secondaryAction?: string;
  possibleStates: string[];
  nextStepId?: string;
  isTerminal?: boolean;
}

export interface JourneyMap {
  title: string;
  description: string;
  steps: JourneyStep[];
}

// ----------------------------------------------------------
// Component and page types
// ----------------------------------------------------------
export type ComponentType =
  | 'heading'
  | 'paragraph'
  | 'button'
  | 'card'
  | 'alert'
  | 'form-field'
  | 'form-group'
  | 'table'
  | 'badge'
  | 'icon'
  | 'progress-stepper'
  | 'empty-state'
  | 'loading-spinner'
  | 'recommendation'
  | 'divider'
  | 'image'
  | 'list'
  | 'tabs'
  | 'modal'
  | 'status-label'
  | 'metric-card'
  | 'search'
  | 'filter'
  | 'action-bar'
  | 'sidebar-nav'
  | 'breadcrumb'
  | 'drawer'
  | 'accordion'
  | 'timeline'
  | 'avatar'
  | 'user-info'
  | 'file-upload'
  | 'date-picker'
  | 'toggle'
  | 'pagination'
  | 'tree-view'
  | 'split-view'
  | 'stat-group'
  | 'nav-tabs'
  | 'toolbar'
  | 'breadcrumb-nav'
  | 'chip-group'
  | 'comment'
  | 'activity-item'
  | 'skeleton'
  | 'step-indicator'
  | 'key-value'
  | 'section-header'
  | 'header'
  | 'footer'
  | 'hero'
  | 'about-section';

export type InteractionState =
  | 'default'
  | 'loading'
  | 'empty'
  | 'error'
  | 'success'
  | 'confirmation'
  | 'progress';

export interface ComponentModel {
  id: string;
  type: ComponentType;
  props: Record<string, unknown>;
  children?: ComponentModel[];
  states?: Partial<Record<InteractionState, Record<string, unknown>>>;
  accessibility?: {
    role?: string;
    label?: string;
    description?: string;
  };
  responsive?: {
    hideOnMobile?: boolean;
    stackOnMobile?: boolean;
    fullWidthOnMobile?: boolean;
  };
}

export interface SectionModel {
  id: string;
  title?: string;
  layout:
    | 'stack'
    | 'grid'
    | 'grid-auto'
    | 'flex-row'
    | 'flex-between'
    | 'sidebar-content'
    | 'split-equal'
    | 'header-body-footer';
  components: ComponentModel[];
  spacing?: 'sm' | 'md' | 'lg';
}

export interface PageModel {
  id: string;
  title: string;
  description?: string;
  pageType:
    | 'hero'
    | 'standard'
    | 'form'
    | 'confirmation'
    | 'progress'
    | 'success'
    | 'error'
    | 'dashboard'
    | 'list'
    | 'detail'
    | 'settings'
    | 'wizard-step'
    | 'split';
  sections: SectionModel[];
  primaryAction?: { label: string; navigateTo?: string };
  secondaryAction?: { label: string; navigateTo?: string };
  footerText?: string;
}

// ----------------------------------------------------------
// Full design model
// ----------------------------------------------------------
export interface DesignModel {
  projectName: string;
  prompt: string;
  brief: InterpretedBrief;
  journeyMap: JourneyMap;
  pages: PageModel[];
  currentPageId: string;
  currentState: InteractionState;
  metadata: {
    generatedAt: string;
    version: string;
    outputType: OutputType;
  };
}

// ----------------------------------------------------------
// UX Review types
// ----------------------------------------------------------
export interface ScoreItem {
  category: string;
  score: number; // 1–10
  maxScore: number; // always 10
  notes: string;
}

export interface UxReview {
  overallScore: number;
  maxScore: number;
  scores: ScoreItem[];
  recommendations: string[];
  accessibilityNotes: string[];
  contentNotes: string[];
  interactionNotes: string[];
}

// ----------------------------------------------------------
// Generation result
// ----------------------------------------------------------
export interface GenerationResult {
  model: DesignModel;
  review: UxReview;
}

// ----------------------------------------------------------
// AI Persona Testing types
// ----------------------------------------------------------
export interface UserPersona {
  id: string;
  name: string;
  age: number;
  role: string;
  techProficiency: 'low' | 'moderate' | 'high';
  accessibilityNeeds: string[];
  context: string;
  avatar: string; // initials for display
}

export interface PageWalkthrough {
  pageId: string;
  pageTitle: string;
  timeSpentSeconds: number;
  confused: boolean;
  confusionReason?: string;
  actionTaken: string;
  thoughts: string;
  issues: string[];
  completed: boolean;
}

export interface PersonaTestResult {
  persona: UserPersona;
  startedAt: string;
  completedAt: string;
  taskCompleted: boolean;
  taskCompletionTime: number; // total seconds
  walkthroughs: PageWalkthrough[];
  overallFeedback: string;
  satisfactionScore: number; // 1-10
  difficultyScore: number;   // 1-10 (1=very easy, 10=very hard)
  predictedIssues: PredictedIssue[];
}

export interface PredictedIssue {
  severity: 'critical' | 'major' | 'minor' | 'suggestion';
  category: 'usability' | 'accessibility' | 'content' | 'navigation' | 'visual';
  pageId: string;
  description: string;
  recommendation: string;
}

export interface PersonaTestReport {
  testId: string;
  modelId: string;
  runAt: string;
  personas: UserPersona[];
  results: PersonaTestResult[];
  summary: TestSummary;
}

// ----------------------------------------------------------
// Saved design (history nav)
// ----------------------------------------------------------
export interface SavedDesign {
  id: string;
  prompt: string;
  label: string;
  createdAt: string;
  model: DesignModel;
  review: UxReview | null;
  brief: InterpretedBrief | null;
  journeyMap: JourneyMap | null;
  generatedCode: { react: string; angular: string; htmlCss: string };
}

export interface TestSummary {
  totalPersonas: number;
  completionRate: number;    // percentage
  averageSatisfaction: number;
  averageDifficulty: number;
  averageTimeSeconds: number;
  criticalIssues: PredictedIssue[];
  majorIssues: PredictedIssue[];
  topRecommendations: string[];
  confusionHotspots: { pageId: string; pageTitle: string; confusedCount: number }[];
}
