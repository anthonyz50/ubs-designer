// ============================================================
// UBS AI UX Designer — Persona Testing Service (Smart Mock)
// ============================================================
// Simulates multiple user personas walking through a design
// journey, analysing actual model structure for realistic
// feedback. Each persona evaluates the flow from their own
// perspective and flags confusion, accessibility issues, and
// usability problems.
//
// All functions retain clear AI integration point comments
// showing where Azure AI Foundry / Claude calls would replace
// the mock logic.

import type {
  DesignModel,
  UserPersona,
  PageModel,
  PageWalkthrough,
  PersonaTestResult,
  PersonaTestReport,
  PredictedIssue,
  TestSummary,
  ComponentModel,
} from '../types';

// ----------------------------------------------------------
// Default personas
// ----------------------------------------------------------
const DEFAULT_PERSONAS: UserPersona[] = [
  {
    id: 'persona-1',
    name: 'Sarah Chen',
    age: 28,
    role: 'Junior Analyst',
    techProficiency: 'high',
    accessibilityNeeds: [],
    context: 'Tech-savvy, prefers self-service, impatient with slow workflows',
    avatar: 'SC',
  },
  {
    id: 'persona-2',
    name: 'David Thompson',
    age: 55,
    role: 'Senior Managing Director',
    techProficiency: 'low',
    accessibilityNeeds: ['larger text', 'high contrast'],
    context:
      'Limited patience for complex UIs, delegates most tech tasks, needs clear simple paths',
    avatar: 'DT',
  },
  {
    id: 'persona-3',
    name: 'Priya Patel',
    age: 42,
    role: 'Operations Manager',
    techProficiency: 'moderate',
    accessibilityNeeds: [],
    context:
      'Processes many requests daily, values efficiency and batch operations, familiar with enterprise tools',
    avatar: 'PP',
  },
  {
    id: 'persona-4',
    name: 'James McCarthy',
    age: 35,
    role: 'IT Support Engineer',
    techProficiency: 'high',
    accessibilityNeeds: [],
    context:
      'Power user, often helps others navigate tools, notices technical inconsistencies',
    avatar: 'JM',
  },
  {
    id: 'persona-5',
    name: 'Maria Gonzalez',
    age: 48,
    role: 'Compliance Officer',
    techProficiency: 'moderate',
    accessibilityNeeds: ['screen reader'],
    context:
      'Uses a screen reader, detail-oriented, needs every step clearly explained, concerned with audit trails',
    avatar: 'MG',
  },
];

// ----------------------------------------------------------
// Public API
// ----------------------------------------------------------

export function getDefaultPersonas(): UserPersona[] {
  return [...DEFAULT_PERSONAS];
}

// ----- AI INTEGRATION POINT -----
// Replace the entire runPersonaTest function body with:
//   const results = await Promise.all(
//     personas.map(async (persona) => {
//       const response = await fetch(AZURE_AI_ENDPOINT, {
//         body: JSON.stringify({
//           model: 'claude-opus-4-20250514',
//           system: `You are ${persona.name}, a ${persona.age}-year-old ${persona.role} at UBS. ${persona.context}. Walk through this UI journey page by page and evaluate it from your perspective.`,
//           messages: [{ role: 'user', content: `Walk through this UI journey and describe your experience page by page: ${JSON.stringify(model)}` }],
//         }),
//       });
//       return parsePersonaResponse(response, persona);
//     })
//   );
// ----- END AI INTEGRATION POINT -----

export async function runPersonaTest(
  model: DesignModel,
  personas?: UserPersona[],
): Promise<PersonaTestReport> {
  const selectedPersonas = personas ?? DEFAULT_PERSONAS;
  const results: PersonaTestResult[] = [];

  for (const persona of selectedPersonas) {
    // 200-400ms delay per persona to simulate processing
    await delay(200 + Math.random() * 200);
    const result = await simulatePersonaWalkthrough(persona, model);
    results.push(result);
  }

  const summary = buildTestSummary(results, model);

  return {
    testId: `test-${Date.now()}`,
    modelId: model.projectName,
    runAt: new Date().toISOString(),
    personas: selectedPersonas,
    results,
    summary,
  };
}

// ----------------------------------------------------------
// Internal: simulate one persona walking through the model
// ----------------------------------------------------------

// ----- AI INTEGRATION POINT -----
// Replace this entire function with an AI call:
//   const response = await fetch(AZURE_AI_ENDPOINT, {
//     body: JSON.stringify({
//       model: 'claude-opus-4-20250514',
//       system: `You are ${persona.name}, a ${persona.age}-year-old ${persona.role} at UBS. ${persona.context}. Your accessibility needs: ${persona.accessibilityNeeds.join(', ') || 'none'}. Tech proficiency: ${persona.techProficiency}.`,
//       messages: [{ role: 'user', content: `Walk through this UI journey and describe your experience page by page: ${JSON.stringify(model)}` }],
//     }),
//   });
// ----- END AI INTEGRATION POINT -----

async function simulatePersonaWalkthrough(
  persona: UserPersona,
  model: DesignModel,
): Promise<PersonaTestResult> {
  const startedAt = new Date().toISOString();
  const walkthroughs: PageWalkthrough[] = [];
  const predictedIssues: PredictedIssue[] = [];

  const pageAnalyses = model.pages.map((page) => analysePage(page));
  const isDeepJourney = model.pages.length > 5;
  let totalTime = 0;
  let abandonedAt: number | null = null;

  for (let i = 0; i < model.pages.length; i++) {
    const page = model.pages[i];
    const analysis = pageAnalyses[i];
    const walkthrough = generatePageWalkthrough(
      persona,
      page,
      analysis,
      i,
      model.pages.length,
      isDeepJourney,
    );

    totalTime += walkthrough.timeSpentSeconds;
    walkthroughs.push(walkthrough);

    // Check if persona abandons the journey
    if (!walkthrough.completed && abandonedAt === null) {
      abandonedAt = i;
    }

    // Generate predicted issues for this page
    const pageIssues = generatePredictedIssues(persona, page, analysis);
    predictedIssues.push(...pageIssues);
  }

  // Deep journey fatigue for low-tech users
  if (isDeepJourney && persona.techProficiency === 'low') {
    predictedIssues.push({
      severity: 'major',
      category: 'usability',
      pageId: model.pages[model.pages.length - 1].id,
      description: `Journey has ${model.pages.length} pages, which is likely to cause fatigue for less technical users`,
      recommendation:
        'Consider consolidating steps or adding a progress indicator to set expectations',
    });
  }

  const taskCompleted = abandonedAt === null;
  const satisfactionScore = computeSatisfaction(
    persona,
    walkthroughs,
    predictedIssues,
    taskCompleted,
  );
  const difficultyScore = computeDifficulty(
    persona,
    walkthroughs,
    pageAnalyses,
  );
  const overallFeedback = generateOverallFeedback(
    persona,
    taskCompleted,
    satisfactionScore,
    difficultyScore,
    walkthroughs,
  );

  return {
    persona,
    startedAt,
    completedAt: new Date().toISOString(),
    taskCompleted,
    taskCompletionTime: totalTime,
    walkthroughs,
    overallFeedback,
    satisfactionScore,
    difficultyScore,
    predictedIssues,
  };
}

// ----------------------------------------------------------
// Page analysis helpers
// ----------------------------------------------------------

interface PageAnalysis {
  componentCount: number;
  formFieldCount: number;
  unlabelledFields: number;
  actionCount: number;
  hasPrimaryAction: boolean;
  hasLoadingState: boolean;
  hasErrorState: boolean;
  hasEmptyState: boolean;
  hasJargonHeadings: boolean;
  missingAccessibilityLabels: number;
  smallInteractiveElements: number;
  headings: string[];
}

function analysePage(page: PageModel): PageAnalysis {
  const allComponents = flattenComponents(page);
  const formFields = allComponents.filter(
    (c) => c.type === 'form-field' || c.type === 'form-group',
  );
  const unlabelledFields = formFields.filter(
    (c) =>
      !c.props.label &&
      !c.accessibility?.label,
  ).length;
  const actions = allComponents.filter(
    (c) => c.type === 'button' || c.type === 'action-bar',
  );
  const hasStates = (state: string) =>
    allComponents.some(
      (c) => c.states && Object.keys(c.states).includes(state),
    );

  const headings = allComponents
    .filter((c) => c.type === 'heading' || c.type === 'section-header')
    .map((c) => String(c.props.text || c.props.title || c.props.label || ''));

  const jargonPatterns =
    /\b(SLA|API|ETL|RBAC|IAM|SSO|SAML|OAuth|LDAP|regex|cron|webhook|payload|endpoint|schema|middleware|daemon)\b/i;
  const hasJargonHeadings = headings.some((h) => jargonPatterns.test(h));

  const missingAccessibilityLabels = allComponents.filter(
    (c) =>
      ['button', 'form-field', 'search', 'filter', 'toggle', 'file-upload'].includes(c.type) &&
      !c.accessibility?.label &&
      !c.props.label &&
      !c.props['aria-label'],
  ).length;

  return {
    componentCount: allComponents.length,
    formFieldCount: formFields.length,
    unlabelledFields,
    actionCount: actions.length,
    hasPrimaryAction: !!page.primaryAction,
    hasLoadingState: hasStates('loading'),
    hasErrorState: hasStates('error'),
    hasEmptyState: hasStates('empty'),
    hasJargonHeadings,
    missingAccessibilityLabels,
    smallInteractiveElements: 0, // would check sizing in a real implementation
    headings,
  };
}

function flattenComponents(page: PageModel): ComponentModel[] {
  const result: ComponentModel[] = [];
  for (const section of page.sections) {
    for (const comp of section.components) {
      result.push(comp);
      if (comp.children) {
        result.push(...flattenChildren(comp.children));
      }
    }
  }
  return result;
}

function flattenChildren(children: ComponentModel[]): ComponentModel[] {
  const result: ComponentModel[] = [];
  for (const child of children) {
    result.push(child);
    if (child.children) {
      result.push(...flattenChildren(child.children));
    }
  }
  return result;
}

// ----------------------------------------------------------
// Per-page walkthrough generation
// ----------------------------------------------------------

function generatePageWalkthrough(
  persona: UserPersona,
  page: PageModel,
  analysis: PageAnalysis,
  pageIndex: number,
  totalPages: number,
  isDeepJourney: boolean,
): PageWalkthrough {
  // Time spent varies by tech proficiency
  const baseTime = {
    low: 45,
    moderate: 25,
    high: 15,
  }[persona.techProficiency];

  // More components = more time
  const complexityMultiplier = 1 + analysis.componentCount * 0.05;
  // Forms take longer
  const formMultiplier = analysis.formFieldCount > 0 ? 1.3 : 1;
  // Fatigue on later pages
  const fatigueMultiplier = isDeepJourney ? 1 + pageIndex * 0.1 : 1;

  const timeSpent = Math.round(
    baseTime * complexityMultiplier * formMultiplier * fatigueMultiplier,
  );

  // Determine confusion
  const { confused, confusionReason } = evaluateConfusion(
    persona,
    page,
    analysis,
    pageIndex,
    isDeepJourney,
  );

  // Generate persona-specific thoughts
  const thoughts = generateThoughts(persona, page, analysis, confused);

  // Identify issues from this persona's perspective
  const issues = generatePageIssues(persona, page, analysis);

  // Determine action taken
  const actionTaken = confused
    ? pickRandom([
        'Hesitated, then clicked the first visible button',
        'Re-read the page heading twice before proceeding',
        'Scrolled up and down looking for guidance',
        'Tried to go back to the previous page',
      ])
    : analysis.hasPrimaryAction
      ? `Clicked "${page.primaryAction?.label ?? 'primary action'}" and proceeded`
      : 'Reviewed the content and moved to the next step';

  // Determine if the page was "completed" (low-tech users may abandon complex pages)
  const completed = !(
    confused &&
    persona.techProficiency === 'low' &&
    analysis.componentCount > 15 &&
    Math.random() < 0.4
  );

  return {
    pageId: page.id,
    pageTitle: page.title,
    timeSpentSeconds: timeSpent,
    confused,
    confusionReason: confused ? confusionReason : undefined,
    actionTaken,
    thoughts,
    issues,
    completed,
  };
}

function evaluateConfusion(
  persona: UserPersona,
  page: PageModel,
  analysis: PageAnalysis,
  pageIndex: number,
  isDeepJourney: boolean,
): { confused: boolean; confusionReason: string } {
  const reasons: string[] = [];

  // Low-tech users confused by dense pages
  if (
    persona.techProficiency === 'low' &&
    analysis.componentCount > 10
  ) {
    reasons.push(
      'Too many elements on the page; unclear where to focus',
    );
  }

  // Anyone confused by no clear primary action
  if (!analysis.hasPrimaryAction && analysis.actionCount > 2) {
    reasons.push(
      'Multiple actions visible but no clear primary action to guide the next step',
    );
  }

  // Jargon confuses non-technical users
  if (
    analysis.hasJargonHeadings &&
    persona.techProficiency !== 'high'
  ) {
    reasons.push(
      'Technical jargon in headings is unclear',
    );
  }

  // Large forms confuse low-tech users
  if (
    analysis.formFieldCount > 5 &&
    persona.techProficiency === 'low'
  ) {
    reasons.push(
      'Too many form fields to complete at once',
    );
  }

  // Deep journey fatigue
  if (
    isDeepJourney &&
    pageIndex > 4 &&
    persona.techProficiency !== 'high'
  ) {
    reasons.push(
      'Journey fatigue: too many steps to stay focused',
    );
  }

  // Accessibility-related confusion
  if (
    persona.accessibilityNeeds.length > 0 &&
    analysis.missingAccessibilityLabels > 0
  ) {
    reasons.push(
      'Missing accessibility labels make navigation difficult',
    );
  }

  const confused = reasons.length > 0;
  return {
    confused,
    confusionReason: reasons.join('; '),
  };
}

function generateThoughts(
  persona: UserPersona,
  page: PageModel,
  analysis: PageAnalysis,
  confused: boolean,
): string {
  const parts: string[] = [];

  if (persona.techProficiency === 'low') {
    if (confused) {
      parts.push(
        `I'm not sure what I'm supposed to do on "${page.title}". There seem to be a lot of options.`,
      );
    } else {
      parts.push(
        `This page seems straightforward enough. I can see what to do next.`,
      );
    }
    if (analysis.formFieldCount > 3) {
      parts.push(
        'That is quite a lot of fields to fill in. I hope I do not miss anything important.',
      );
    }
  } else if (persona.techProficiency === 'moderate') {
    if (analysis.hasJargonHeadings) {
      parts.push(
        'Some of the terminology could be clearer. I know what most of these mean but a new starter might not.',
      );
    }
    if (!analysis.hasErrorState) {
      parts.push(
        'I wonder what happens if something goes wrong here. There does not seem to be any error guidance.',
      );
    }
    parts.push(
      confused
        ? 'I had to pause and think about what the next step should be.'
        : 'The flow feels logical so far.',
    );
  } else {
    // High proficiency
    if (analysis.actionCount < 2 && analysis.componentCount > 5) {
      parts.push(
        'This page has a lot of information but not many actionable options. Keyboard shortcuts would help here.',
      );
    }
    if (!analysis.hasLoadingState) {
      parts.push(
        'No loading state defined. If data takes time to fetch, the user will see a blank screen.',
      );
    }
    if (analysis.unlabelledFields > 0) {
      parts.push(
        `${analysis.unlabelledFields} form field(s) appear to lack labels, which will cause issues for screen readers and automated testing.`,
      );
    }
    parts.push(
      confused
        ? 'The information architecture could be improved. Some elements compete for attention.'
        : 'Clean layout. I can navigate this efficiently.',
    );
  }

  // Accessibility-specific thoughts
  if (persona.accessibilityNeeds.includes('screen reader')) {
    if (analysis.missingAccessibilityLabels > 0) {
      parts.push(
        `My screen reader cannot identify ${analysis.missingAccessibilityLabels} interactive element(s). I would need sighted assistance here.`,
      );
    } else {
      parts.push(
        'The labels seem complete for screen reader navigation.',
      );
    }
  }

  if (persona.accessibilityNeeds.includes('larger text')) {
    parts.push(
      analysis.componentCount > 12
        ? 'With larger text enabled, this page would likely overflow and require excessive scrolling.'
        : 'This page should render acceptably with larger text settings.',
    );
  }

  return parts.join(' ');
}

function generatePageIssues(
  persona: UserPersona,
  _page: PageModel,
  analysis: PageAnalysis,
): string[] {
  const issues: string[] = [];

  if (
    persona.techProficiency === 'low' &&
    analysis.componentCount > 12
  ) {
    issues.push('Page feels overwhelming with too many elements');
  }

  if (analysis.unlabelledFields > 0) {
    issues.push(
      `${analysis.unlabelledFields} form field(s) missing labels`,
    );
  }

  if (!analysis.hasPrimaryAction && analysis.actionCount > 0) {
    issues.push('No clear primary action button');
  }

  if (analysis.hasJargonHeadings && persona.techProficiency !== 'high') {
    issues.push('Technical jargon in headings');
  }

  if (
    persona.accessibilityNeeds.includes('screen reader') &&
    analysis.missingAccessibilityLabels > 0
  ) {
    issues.push(
      `${analysis.missingAccessibilityLabels} elements missing accessibility labels`,
    );
  }

  if (
    persona.accessibilityNeeds.includes('high contrast') &&
    analysis.componentCount > 0
  ) {
    // Mock: assume some contrast issues exist
    if (Math.random() < 0.3) {
      issues.push('Some elements may have insufficient colour contrast');
    }
  }

  return issues;
}

// ----------------------------------------------------------
// Predicted issues generation
// ----------------------------------------------------------

function generatePredictedIssues(
  persona: UserPersona,
  page: PageModel,
  analysis: PageAnalysis,
): PredictedIssue[] {
  const issues: PredictedIssue[] = [];

  // Missing accessibility labels
  if (analysis.missingAccessibilityLabels > 0) {
    issues.push({
      severity:
        persona.accessibilityNeeds.length > 0 ? 'critical' : 'major',
      category: 'accessibility',
      pageId: page.id,
      description: `${analysis.missingAccessibilityLabels} interactive element(s) on "${page.title}" lack accessibility labels`,
      recommendation:
        'Add aria-label or visible label text to all interactive elements',
    });
  }

  // Unlabelled form fields
  if (analysis.unlabelledFields > 0) {
    issues.push({
      severity: 'critical',
      category: 'accessibility',
      pageId: page.id,
      description: `${analysis.unlabelledFields} form field(s) on "${page.title}" have no visible label`,
      recommendation:
        'Every form field must have an associated <label> element or aria-label attribute',
    });
  }

  // No primary action
  if (!analysis.hasPrimaryAction && analysis.actionCount > 1) {
    issues.push({
      severity: 'major',
      category: 'usability',
      pageId: page.id,
      description: `"${page.title}" has ${analysis.actionCount} actions but no designated primary action`,
      recommendation:
        'Designate one clear primary action button to guide users',
    });
  }

  // Too many components for low-tech users
  if (analysis.componentCount > 15) {
    issues.push({
      severity: 'major',
      category: 'usability',
      pageId: page.id,
      description: `"${page.title}" contains ${analysis.componentCount} components, which may overwhelm less technical users`,
      recommendation:
        'Consider breaking this page into smaller steps or using progressive disclosure',
    });
  }

  // Jargon in headings
  if (analysis.hasJargonHeadings) {
    issues.push({
      severity: 'minor',
      category: 'content',
      pageId: page.id,
      description: `"${page.title}" contains technical jargon in headings`,
      recommendation:
        'Replace technical terms with plain language or provide tooltips explaining abbreviations',
    });
  }

  // Missing loading/error states
  if (!analysis.hasLoadingState && analysis.componentCount > 5) {
    issues.push({
      severity: 'minor',
      category: 'usability',
      pageId: page.id,
      description: `"${page.title}" has no loading state defined`,
      recommendation:
        'Add a loading skeleton or spinner to provide feedback during data fetching',
    });
  }

  if (!analysis.hasErrorState && analysis.formFieldCount > 0) {
    issues.push({
      severity: 'minor',
      category: 'usability',
      pageId: page.id,
      description: `"${page.title}" has form fields but no error state defined`,
      recommendation:
        'Add inline validation and error messages for form fields',
    });
  }

  // Large forms
  if (analysis.formFieldCount > 8) {
    issues.push({
      severity: 'minor',
      category: 'usability',
      pageId: page.id,
      description: `"${page.title}" has ${analysis.formFieldCount} form fields, which is a heavy cognitive load`,
      recommendation:
        'Break the form into logical sections or use a multi-step wizard pattern',
    });
  }

  return issues;
}

// ----------------------------------------------------------
// Summary builder
// ----------------------------------------------------------

function buildTestSummary(
  results: PersonaTestResult[],
  model: DesignModel,
): TestSummary {
  const totalPersonas = results.length;
  const completedCount = results.filter((r) => r.taskCompleted).length;
  const completionRate = (completedCount / totalPersonas) * 100;

  const averageSatisfaction =
    results.reduce((sum, r) => sum + r.satisfactionScore, 0) / totalPersonas;
  const averageDifficulty =
    results.reduce((sum, r) => sum + r.difficultyScore, 0) / totalPersonas;
  const averageTimeSeconds =
    results.reduce((sum, r) => sum + r.taskCompletionTime, 0) / totalPersonas;

  // Collect all issues
  const allIssues = results.flatMap((r) => r.predictedIssues);

  // Deduplicate issues by description
  const seen = new Set<string>();
  const uniqueIssues: PredictedIssue[] = [];
  for (const issue of allIssues) {
    if (!seen.has(issue.description)) {
      seen.add(issue.description);
      uniqueIssues.push(issue);
    }
  }

  const criticalIssues = uniqueIssues.filter(
    (i) => i.severity === 'critical',
  );
  const majorIssues = uniqueIssues.filter(
    (i) => i.severity === 'major',
  );

  // Confusion hotspots
  const confusionMap = new Map<
    string,
    { pageId: string; pageTitle: string; count: number }
  >();
  for (const result of results) {
    for (const wt of result.walkthroughs) {
      if (wt.confused) {
        const existing = confusionMap.get(wt.pageId);
        if (existing) {
          existing.count++;
        } else {
          confusionMap.set(wt.pageId, {
            pageId: wt.pageId,
            pageTitle: wt.pageTitle,
            count: 1,
          });
        }
      }
    }
  }
  const confusionHotspots = [...confusionMap.values()]
    .sort((a, b) => b.count - a.count)
    .map((h) => ({
      pageId: h.pageId,
      pageTitle: h.pageTitle,
      confusedCount: h.count,
    }));

  // Top recommendations: prioritise critical, then major
  const topRecommendations = [
    ...criticalIssues.map((i) => i.recommendation),
    ...majorIssues.map((i) => i.recommendation),
  ].slice(0, 8);

  // Add journey-level recommendations
  if (model.pages.length > 5) {
    topRecommendations.push(
      'Consider reducing the number of steps in this journey to reduce drop-off risk',
    );
  }
  if (completionRate < 80) {
    topRecommendations.push(
      'Low completion rate suggests significant usability barriers. Prioritise simplifying the critical path.',
    );
  }

  return {
    totalPersonas,
    completionRate: Math.round(completionRate * 10) / 10,
    averageSatisfaction: Math.round(averageSatisfaction * 10) / 10,
    averageDifficulty: Math.round(averageDifficulty * 10) / 10,
    averageTimeSeconds: Math.round(averageTimeSeconds),
    criticalIssues,
    majorIssues,
    topRecommendations,
    confusionHotspots,
  };
}

// ----------------------------------------------------------
// Score computation helpers
// ----------------------------------------------------------

function computeSatisfaction(
  persona: UserPersona,
  walkthroughs: PageWalkthrough[],
  issues: PredictedIssue[],
  taskCompleted: boolean,
): number {
  let score = taskCompleted ? 7 : 3;

  // Penalise for confusion
  const confusedPages = walkthroughs.filter((w) => w.confused).length;
  score -= confusedPages * 0.5;

  // Penalise for critical issues
  const criticalCount = issues.filter(
    (i) => i.severity === 'critical',
  ).length;
  score -= criticalCount * 0.8;

  // Low-tech users are generally less satisfied with complex UIs
  if (persona.techProficiency === 'low') {
    score -= 0.5;
  }

  // Accessibility needs unmet
  if (
    persona.accessibilityNeeds.length > 0 &&
    issues.some((i) => i.category === 'accessibility')
  ) {
    score -= 1;
  }

  return Math.max(1, Math.min(10, Math.round(score * 10) / 10));
}

function computeDifficulty(
  persona: UserPersona,
  walkthroughs: PageWalkthrough[],
  pageAnalyses: PageAnalysis[],
): number {
  let score = 3; // baseline moderate

  // More pages = harder
  score += walkthroughs.length * 0.3;

  // Complex pages
  const avgComponents =
    pageAnalyses.reduce((sum, a) => sum + a.componentCount, 0) /
    pageAnalyses.length;
  if (avgComponents > 10) score += 1.5;
  else if (avgComponents > 6) score += 0.5;

  // Confusion adds difficulty
  const confusedRatio =
    walkthroughs.filter((w) => w.confused).length / walkthroughs.length;
  score += confusedRatio * 3;

  // Proficiency adjusts perception
  if (persona.techProficiency === 'low') score += 1.5;
  if (persona.techProficiency === 'high') score -= 1;

  return Math.max(1, Math.min(10, Math.round(score * 10) / 10));
}

// ----------------------------------------------------------
// Feedback generation
// ----------------------------------------------------------

function generateOverallFeedback(
  persona: UserPersona,
  taskCompleted: boolean,
  satisfaction: number,
  difficulty: number,
  walkthroughs: PageWalkthrough[],
): string {
  const parts: string[] = [];

  if (!taskCompleted) {
    const abandonPage = walkthroughs.find((w) => !w.completed);
    parts.push(
      `I was unable to complete the task. I got stuck on "${abandonPage?.pageTitle ?? 'a page'}" and could not figure out how to proceed.`,
    );
  }

  if (persona.techProficiency === 'low') {
    if (satisfaction >= 7) {
      parts.push(
        'Overall the flow was clear enough for me to follow. I appreciated the straightforward layout.',
      );
    } else if (satisfaction >= 5) {
      parts.push(
        'Some parts were confusing but I managed to get through. A colleague might struggle more than I did.',
      );
    } else {
      parts.push(
        'I found this very difficult to use. I would probably ask someone to help me or give up.',
      );
    }
  } else if (persona.techProficiency === 'moderate') {
    if (difficulty <= 4) {
      parts.push(
        'The workflow is efficient and well-structured. I could process my daily tasks through this without issues.',
      );
    } else {
      parts.push(
        'There are some friction points that would slow me down if I had to use this repeatedly throughout the day.',
      );
    }
  } else {
    // High proficiency
    const issueCount = walkthroughs.reduce(
      (sum, w) => sum + w.issues.length,
      0,
    );
    if (issueCount > 5) {
      parts.push(
        `I noticed ${issueCount} issues across the journey. While I can work around most of them, less technical colleagues will struggle.`,
      );
    } else {
      parts.push(
        'Solid implementation. A few refinements would make it production-ready.',
      );
    }
  }

  // Accessibility-specific feedback
  if (persona.accessibilityNeeds.includes('screen reader')) {
    const a11yIssues = walkthroughs.flatMap((w) =>
      w.issues.filter((i) => i.toLowerCase().includes('accessibility') || i.toLowerCase().includes('label')),
    );
    if (a11yIssues.length > 0) {
      parts.push(
        `As a screen reader user, I encountered ${a11yIssues.length} accessibility barrier(s) that would prevent me from using this independently.`,
      );
    } else {
      parts.push(
        'The accessibility support seems reasonable for screen reader navigation.',
      );
    }
  }

  return parts.join(' ');
}

// ----------------------------------------------------------
// Utility
// ----------------------------------------------------------

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
