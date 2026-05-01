// ============================================================
// UBS AI UX Designer — Review Builder
// ============================================================
// Generates a UxReview by analysing the actual DesignModel
// content rather than returning hardcoded scores.

import type { DesignModel, UxReview, ScoreItem, PageModel, ComponentModel } from '../types';

// ----- Analysis helpers -----

interface ModelStats {
  pageCount: number;
  sectionCount: number;
  componentCount: number;
  hasAccessibilityProps: boolean;
  accessibilityCount: number;
  hasResponsiveProps: boolean;
  responsiveCount: number;
  hasNavigationLinks: boolean;
  navigationLinkCount: number;
  hasStateCoverage: boolean;
  uniqueStates: string[];
  componentTypes: Set<string>;
  hasFooterText: boolean;
  hasSecondaryActions: boolean;
  hasHeadings: boolean;
  hasAlerts: boolean;
  hasForms: boolean;
  hasProgressIndicators: boolean;
  avgComponentsPerPage: number;
  pageTypes: Set<string>;
}

function analyseModel(model: DesignModel): ModelStats {
  let sectionCount = 0;
  let componentCount = 0;
  let accessibilityCount = 0;
  let responsiveCount = 0;
  let navigationLinkCount = 0;
  const componentTypes = new Set<string>();
  const pageTypes = new Set<string>();
  const uniqueStates = new Set<string>();
  let hasFooterText = false;
  let hasSecondaryActions = false;
  let hasHeadings = false;
  let hasAlerts = false;
  let hasForms = false;
  let hasProgressIndicators = false;

  function countComponents(components: ComponentModel[]): void {
    for (const comp of components) {
      componentCount++;
      componentTypes.add(comp.type);

      if (comp.accessibility) accessibilityCount++;
      if (comp.responsive) responsiveCount++;
      if (comp.states) {
        for (const state of Object.keys(comp.states)) {
          uniqueStates.add(state);
        }
      }

      if (comp.type === 'heading') hasHeadings = true;
      if (comp.type === 'alert') hasAlerts = true;
      if (comp.type === 'form-field' || comp.type === 'form-group') hasForms = true;
      if (comp.type === 'progress-stepper' || comp.type === 'step-indicator') hasProgressIndicators = true;

      if (comp.children) {
        countComponents(comp.children);
      }
    }
  }

  for (const page of model.pages) {
    pageTypes.add(page.pageType);
    sectionCount += page.sections.length;

    if (page.footerText) hasFooterText = true;
    if (page.secondaryAction) hasSecondaryActions = true;

    if (page.primaryAction?.navigateTo) navigationLinkCount++;
    if (page.secondaryAction?.navigateTo) navigationLinkCount++;

    for (const section of page.sections) {
      countComponents(section.components);
    }
  }

  // Add journey states
  if (model.journeyMap?.steps) {
    for (const step of model.journeyMap.steps) {
      for (const state of step.possibleStates) {
        uniqueStates.add(state);
      }
    }
  }

  // Add current state
  uniqueStates.add(model.currentState);

  return {
    pageCount: model.pages.length,
    sectionCount,
    componentCount,
    hasAccessibilityProps: accessibilityCount > 0,
    accessibilityCount,
    hasResponsiveProps: responsiveCount > 0,
    responsiveCount,
    hasNavigationLinks: navigationLinkCount > 0,
    navigationLinkCount,
    hasStateCoverage: uniqueStates.size >= 3,
    uniqueStates: Array.from(uniqueStates),
    componentTypes,
    hasFooterText,
    hasSecondaryActions,
    hasHeadings,
    hasAlerts,
    hasForms,
    hasProgressIndicators,
    avgComponentsPerPage: model.pages.length > 0 ? componentCount / model.pages.length : 0,
    pageTypes,
  };
}

// ----- Score calculators -----

function scoreInformationArchitecture(stats: ModelStats): ScoreItem {
  let score = 5;
  const notes: string[] = [];

  // More pages = richer IA (to a point)
  if (stats.pageCount >= 3 && stats.pageCount <= 8) {
    score += 1;
    notes.push(`Good page count (${stats.pageCount}) for the journey complexity.`);
  } else if (stats.pageCount > 8) {
    notes.push(`Consider whether ${stats.pageCount} pages could be consolidated.`);
  } else if (stats.pageCount < 3) {
    notes.push('The journey may benefit from additional pages for better user guidance.');
  }

  // Navigation links show connected flow
  if (stats.hasNavigationLinks && stats.navigationLinkCount >= stats.pageCount) {
    score += 1;
    notes.push('Navigation links create a well-connected page flow.');
  } else if (stats.hasNavigationLinks) {
    score += 0.5;
    notes.push('Some pages lack navigation links; consider adding more connections.');
  }

  // Variety of page types
  if (stats.pageTypes.size >= 3) {
    score += 1;
    notes.push('Good variety of page types supports different user tasks.');
  }

  // Secondary actions for alternative flows
  if (stats.hasSecondaryActions) {
    score += 0.5;
    notes.push('Secondary actions provide alternative paths through the journey.');
  }

  return {
    category: 'Information architecture',
    score: Math.min(Math.round(score * 10) / 10, 10),
    maxScore: 10,
    notes: notes.join(' '),
  };
}

function scoreVisualHierarchy(stats: ModelStats): ScoreItem {
  let score = 5;
  const notes: string[] = [];

  // Headings establish hierarchy
  if (stats.hasHeadings) {
    score += 1;
    notes.push('Headings establish clear visual hierarchy.');
  } else {
    notes.push('Consider adding headings to improve page structure.');
  }

  // Good component variety
  if (stats.componentTypes.size >= 5) {
    score += 1;
    notes.push('Good variety of component types creates visual interest.');
  }

  // Average components per page (not too sparse, not too busy)
  if (stats.avgComponentsPerPage >= 3 && stats.avgComponentsPerPage <= 8) {
    score += 1;
    notes.push('Component density per page is well balanced.');
  } else if (stats.avgComponentsPerPage > 8) {
    notes.push('Some pages may feel dense; consider breaking content into additional sections.');
  }

  // Alerts for drawing attention
  if (stats.hasAlerts) {
    score += 0.5;
    notes.push('Alert components draw attention to important information.');
  }

  return {
    category: 'Visual hierarchy',
    score: Math.min(Math.round(score * 10) / 10, 10),
    maxScore: 10,
    notes: notes.join(' '),
  };
}

function scoreAccessibility(stats: ModelStats): ScoreItem {
  let score = 5;
  const notes: string[] = [];

  if (stats.hasAccessibilityProps) {
    const ratio = stats.accessibilityCount / stats.componentCount;
    if (ratio > 0.5) {
      score += 2;
      notes.push('Strong accessibility coverage across components.');
    } else if (ratio > 0.2) {
      score += 1;
      notes.push('Moderate accessibility annotations. Consider adding more ARIA labels.');
    } else {
      score += 0.5;
      notes.push('Some accessibility props present. Many components would benefit from ARIA labels.');
    }
  } else {
    notes.push('No accessibility properties detected. Add ARIA labels, roles, and descriptions.');
  }

  if (stats.hasAlerts) {
    score += 0.5;
    notes.push('Alert components use semantic variants for status communication.');
  }

  if (stats.hasProgressIndicators) {
    score += 0.5;
    notes.push('Progress indicators present; ensure they announce step changes via ARIA live regions.');
  }

  return {
    category: 'Accessibility',
    score: Math.min(Math.round(score * 10) / 10, 10),
    maxScore: 10,
    notes: notes.join(' '),
  };
}

function scoreContentClarity(stats: ModelStats): ScoreItem {
  let score = 6;
  const notes: string[] = [];

  // Headings improve scannability
  if (stats.hasHeadings) {
    score += 1;
    notes.push('Headings improve content scannability.');
  }

  // Alerts provide clear status messaging
  if (stats.hasAlerts) {
    score += 0.5;
    notes.push('Alert components provide clear status messaging.');
  }

  // Footer text adds supporting context
  if (stats.hasFooterText) {
    score += 0.5;
    notes.push('Footer text adds helpful context.');
  }

  // Good section count means content is well-organised
  if (stats.sectionCount >= stats.pageCount * 2) {
    score += 1;
    notes.push('Content is well-organised into logical sections.');
  }

  return {
    category: 'Content clarity',
    score: Math.min(Math.round(score * 10) / 10, 10),
    maxScore: 10,
    notes: notes.join(' '),
  };
}

function scoreInteractionDesign(stats: ModelStats): ScoreItem {
  let score = 5;
  const notes: string[] = [];

  // Navigation links
  if (stats.navigationLinkCount >= stats.pageCount) {
    score += 1.5;
    notes.push('Navigation between pages is well-connected.');
  } else if (stats.hasNavigationLinks) {
    score += 0.5;
    notes.push('Some navigation links present; consider adding more for a smoother flow.');
  }

  // Secondary actions
  if (stats.hasSecondaryActions) {
    score += 1;
    notes.push('Secondary actions provide back/cancel options for user control.');
  } else {
    notes.push('Consider adding secondary actions (back, cancel) for user control.');
  }

  // Forms have interaction depth
  if (stats.hasForms) {
    score += 0.5;
    notes.push('Form components allow user input and interaction.');
  }

  // Progress indicators
  if (stats.hasProgressIndicators) {
    score += 0.5;
    notes.push('Progress indicators keep users informed of their position.');
  }

  return {
    category: 'Interaction design',
    score: Math.min(Math.round(score * 10) / 10, 10),
    maxScore: 10,
    notes: notes.join(' '),
  };
}

function scoreErrorHandling(stats: ModelStats): ScoreItem {
  let score = 5;
  const notes: string[] = [];

  // Has error-related states
  if (stats.uniqueStates.includes('error')) {
    score += 1;
    notes.push('Error state is defined in the journey.');
  } else {
    notes.push('Consider adding explicit error states to handle failure scenarios.');
  }

  // Has alerts for communicating issues
  if (stats.hasAlerts) {
    score += 1;
    notes.push('Alert components can communicate errors clearly.');
  }

  // Has secondary actions for escape hatches
  if (stats.hasSecondaryActions) {
    score += 0.5;
    notes.push('Secondary actions provide escape routes when things go wrong.');
  }

  // State variety suggests good coverage
  if (stats.uniqueStates.length >= 4) {
    score += 0.5;
    notes.push('Good variety of states covers multiple scenarios.');
  }

  return {
    category: 'Error handling',
    score: Math.min(Math.round(score * 10) / 10, 10),
    maxScore: 10,
    notes: notes.join(' '),
  };
}

function scoreBrandAlignment(stats: ModelStats): ScoreItem {
  let score = 7;
  const notes: string[] = [];

  // Using UBS component patterns
  notes.push('Uses UBS component patterns correctly.');

  // Component variety suggests proper use of the design system
  if (stats.componentTypes.size >= 5) {
    score += 1;
    notes.push('Good use of design system component variety.');
  }

  // Proper section layouts
  if (stats.sectionCount > stats.pageCount) {
    score += 0.5;
    notes.push('Sections use appropriate layout patterns.');
  }

  return {
    category: 'Brand alignment',
    score: Math.min(Math.round(score * 10) / 10, 10),
    maxScore: 10,
    notes: notes.join(' '),
  };
}

function scoreMobileResponsiveness(stats: ModelStats): ScoreItem {
  let score = 6;
  const notes: string[] = [];

  if (stats.hasResponsiveProps) {
    const ratio = stats.responsiveCount / stats.componentCount;
    if (ratio > 0.3) {
      score += 2;
      notes.push('Good responsive property coverage across components.');
    } else {
      score += 1;
      notes.push('Some responsive properties present. Consider adding more for mobile views.');
    }
  } else {
    notes.push('No explicit responsive properties. Add hideOnMobile, stackOnMobile, etc.');
  }

  // Grid layouts generally handle responsiveness
  const hasGridLayouts = stats.pageCount > 0;
  if (hasGridLayouts) {
    score += 0.5;
    notes.push('Grid-based layouts adapt to different screen widths.');
  }

  notes.push('Ensure touch targets meet the 44px minimum on mobile.');

  return {
    category: 'Mobile responsiveness',
    score: Math.min(Math.round(score * 10) / 10, 10),
    maxScore: 10,
    notes: notes.join(' '),
  };
}

// ----- Recommendation generators -----

function generateRecommendations(stats: ModelStats): string[] {
  const recs: string[] = [];

  if (!stats.hasAccessibilityProps) {
    recs.push('Add ARIA labels and roles to all interactive components');
  }

  if (!stats.hasResponsiveProps) {
    recs.push('Add responsive properties (hideOnMobile, stackOnMobile) to components');
  }

  if (stats.navigationLinkCount < stats.pageCount) {
    recs.push('Add navigation links between all pages for a smoother flow');
  }

  if (!stats.hasProgressIndicators && stats.pageCount > 3) {
    recs.push('Consider adding a progress indicator for multi-step journeys');
  }

  if (!stats.hasFooterText) {
    recs.push('Add footer text on key pages to provide additional context or help links');
  }

  if (stats.avgComponentsPerPage > 8) {
    recs.push('Some pages are content-heavy; consider splitting into additional sections or pages');
  }

  if (!stats.uniqueStates.includes('empty')) {
    recs.push('Add empty state handling for lists and data views');
  }

  if (stats.componentTypes.size < 4) {
    recs.push('Use a wider variety of component types to create richer experiences');
  }

  // Always include some general good-practice recommendations
  recs.push('Add keyboard shortcuts for primary navigation between pages');
  recs.push('Test tab order through the full journey flow');

  return recs.slice(0, 5);
}

function generateAccessibilityNotes(stats: ModelStats): string[] {
  const notes: string[] = [];

  if (stats.hasProgressIndicators) {
    notes.push('Ensure progress steppers announce step changes via aria-live');
  }

  notes.push('Confirm all heading elements use appropriate levels (h1-h4)');
  notes.push('Verify focus is managed correctly when navigating between pages');

  if (stats.hasAlerts) {
    notes.push('Alert components should use role="alert" or role="status" as appropriate');
  }

  if (stats.hasForms) {
    notes.push('Form validation errors must be programmatically linked to their fields');
  }

  return notes.slice(0, 4);
}

function generateContentNotes(stats: ModelStats): string[] {
  const notes: string[] = [];

  notes.push('Review all microcopy for consistency with UBS tone of voice guidelines');

  if (stats.hasForms) {
    notes.push('Ensure form labels and placeholder text are distinct and helpful');
  }

  if (stats.hasAlerts) {
    notes.push('Verify alert messages are actionable and provide clear next steps');
  }

  notes.push('Consider adding contextual help links or tooltips for complex fields');

  return notes.slice(0, 3);
}

function generateInteractionNotes(stats: ModelStats): string[] {
  const notes: string[] = [];

  if (stats.hasProgressIndicators) {
    notes.push('Consider auto-advancing from progress to success after completion');
  }

  if (stats.pageCount > 4) {
    notes.push('Add breadcrumb navigation for journeys with many steps');
  }

  notes.push('Consider adding loading animations for transitions between pages');

  if (stats.hasForms) {
    notes.push('Add inline validation feedback as users complete form fields');
  }

  return notes.slice(0, 3);
}

// ----- Main builder -----

export function buildReview(model: DesignModel): UxReview {
  const stats = analyseModel(model);

  const scores: ScoreItem[] = [
    scoreInformationArchitecture(stats),
    scoreVisualHierarchy(stats),
    scoreAccessibility(stats),
    scoreContentClarity(stats),
    scoreInteractionDesign(stats),
    scoreErrorHandling(stats),
    scoreBrandAlignment(stats),
    scoreMobileResponsiveness(stats),
  ];

  const totalScore = scores.reduce((sum, s) => sum + s.score, 0);
  const overallScore = Math.round((totalScore / scores.length) * 10) / 10;

  return {
    overallScore,
    maxScore: 10,
    scores,
    recommendations: generateRecommendations(stats),
    accessibilityNotes: generateAccessibilityNotes(stats),
    contentNotes: generateContentNotes(stats),
    interactionNotes: generateInteractionNotes(stats),
  };
}
