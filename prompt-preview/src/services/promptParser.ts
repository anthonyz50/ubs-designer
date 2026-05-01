// ============================================================
// UBS AI UX Designer — Prompt Parser
// ============================================================
// Analyses a natural-language prompt and returns structured intent
// for the template assembly engine.
//
// Design principles:
// 1. Action verbs (create, design, build) are instructions to the
//    tool, not pattern indicators. They are stripped before scoring.
// 2. Keywords are matched with word boundaries to prevent partial
//    matches (e.g. "log" inside "login").
// 3. The component pattern is reserved for truly standalone UI
//    elements (footer, header, navbar). Page-level elements like
//    "card" or "hero" are not standalone components.
// 4. Multi-word phrases score higher than single words.

import type { PatternType, InteractionState } from '../types';

export interface ParsedIntent {
  patternType: PatternType;
  domain: string;
  subject: string;
  originalPrompt: string;
  actions: string[];
  hasMultiStep: boolean;
  complexity: 'simple' | 'moderate' | 'complex';
  suggestedPages: string[];
  suggestedStates: InteractionState[];
}

// ----- Keyword groups for pattern detection -----
// IMPORTANT: Do NOT include action verbs (create, build, design,
// make, submit, enter, input, capture, manage) as pattern keywords.
// These are instructions, not indicators.

const PATTERN_KEYWORDS: Record<PatternType, string[]> = {
  dashboard: [
    'dashboard', 'overview', 'metrics', 'kpi', 'analytics', 'summary',
    'monitoring', 'monitor', 'health check', 'status board',
  ],
  form: [
    'form', 'registration form', 'submission form', 'input form',
    'fill in', 'fill out', 'questionnaire', 'survey',
  ],
  'data-table': [
    'data table', 'data grid', 'records', 'spreadsheet',
    'catalogue', 'catalog', 'inventory', 'directory',
  ],
  'support-flow': [
    'support', 'troubleshoot', 'diagnose', 'resolve',
    'issue', 'problem', 'incident', 'triage', 'helpdesk', 'help desk',
    'fix', 'repair',
  ],
  'approval-flow': [
    'approval', 'approve', 'reject', 'authorise', 'authorize',
    'sign off', 'approval flow', 'approval workflow',
  ],
  onboarding: [
    'onboard', 'onboarding', 'welcome', 'getting started',
    'new joiner', 'first time', 'new employee', 'new hire', 'induction',
  ],
  wizard: [
    'wizard', 'step by step', 'multi-step', 'guided', 'walkthrough',
  ],
  settings: [
    'settings', 'preferences', 'configuration',
  ],
  'admin-panel': [
    'admin', 'admin panel', 'administration',
    'user management', 'role management', 'permissions',
  ],
  reporting: [
    'report', 'reporting', 'chart', 'graph', 'trend',
    'visualisation', 'visualization', 'analytics report',
  ],
  inbox: [
    'inbox', 'messages', 'message queue',
  ],
  'master-detail': [
    'master detail', 'list detail', 'split view',
  ],
  'file-management': [
    'file management', 'document management', 'file browser',
    'file upload', 'attachment',
  ],
  'activity-feed': [
    'activity feed', 'activity log', 'audit trail', 'audit log',
    'history log', 'event log',
  ],
  notification: [
    'notification', 'notification centre', 'alert centre',
    'announcement',
  ],
  'search-results': [
    'search', 'search results', 'find', 'lookup', 'knowledge base',
  ],
  comparison: [
    'compare', 'comparison', 'side by side', 'versus', 'vs',
  ],
  profile: [
    'profile', 'my account', 'user profile', 'account page',
  ],
  // Standalone UI components (truly standalone elements)
  component: [
    'footer', 'header', 'navbar', 'navigation bar', 'sidebar',
    'toolbar', 'widget', 'clock', 'world clock',
  ],
  // Generic page patterns
  page: [
    'landing page', 'home page', 'homepage', 'portal',
    'page', 'screen', 'view',
  ],
  journey: [
    'journey', 'user journey', 'customer journey',
  ],
};

// Multi-word phrases that indicate a standalone component request
// (distinct from page-level patterns)
const STANDALONE_COMPONENT_INDICATORS = [
  'footer', 'header', 'navbar', 'navigation bar', 'nav bar',
  'sidebar', 'side bar', 'toolbar', 'tool bar',
  'widget', 'clock widget', 'world clock',
];

const MULTI_STEP_KEYWORDS = [
  'journey', 'flow', 'workflow', 'process', 'steps', 'wizard',
  'onboarding', 'pipeline', 'sequence',
];

const SEQUENCE_INDICATORS = [
  'first', 'then', 'after', 'finally', 'next', 'followed by',
  'subsequently', 'lastly',
];

// ----- Page suggestions per pattern -----

const PATTERN_PAGE_SUGGESTIONS: Record<string, string[]> = {
  dashboard: ['Dashboard overview', 'Service detail', 'Incident timeline'],
  form: ['Form entry', 'Review submission', 'Confirmation'],
  'data-table': ['Data list', 'Record detail', 'Filters panel'],
  'support-flow': [
    'Report issue', 'Diagnosis', 'Recommended fix',
    'Confirm action', 'Applying fix', 'Issue resolved', 'Escalation',
  ],
  'approval-flow': [
    'Submit request', 'Request review', 'Approval queue',
    'Decision', 'Completion',
  ],
  onboarding: [
    'Welcome', 'Personal details', 'Team setup',
    'Tools access', 'Preferences', 'Complete',
  ],
  wizard: [
    'Step 1: Getting started', 'Step 2: Details',
    'Step 3: Review', 'Step 4: Complete',
  ],
  settings: ['Settings categories', 'Setting detail'],
  'admin-panel': [
    'Item list', 'Item detail', 'Create item', 'Confirmation',
  ],
  reporting: ['Report dashboard', 'Report detail', 'Export options'],
  inbox: ['Inbox list', 'Message detail', 'Compose'],
  'master-detail': ['List view', 'Detail view'],
  'file-management': [
    'File browser', 'Upload', 'File detail', 'Version history',
  ],
  'activity-feed': ['Activity feed', 'Activity detail'],
  notification: ['Notification centre', 'Notification settings'],
  'search-results': ['Search', 'Results list', 'Item detail'],
  comparison: ['Selection', 'Comparison view', 'Summary'],
  profile: ['Profile overview', 'Edit profile', 'Confirmation'],
  component: ['Component preview'],
  page: ['Landing page'],
  journey: ['Journey start', 'Journey step', 'Journey end'],
};

// ----- State suggestions per pattern -----

const PATTERN_STATE_SUGGESTIONS: Record<string, InteractionState[]> = {
  dashboard: ['default', 'loading', 'empty', 'error'],
  form: ['default', 'loading', 'error', 'success', 'confirmation'],
  'data-table': ['default', 'loading', 'empty', 'error'],
  'support-flow': ['default', 'loading', 'progress', 'success', 'error', 'confirmation'],
  'approval-flow': ['default', 'loading', 'success', 'error', 'confirmation'],
  onboarding: ['default', 'loading', 'success', 'progress'],
  wizard: ['default', 'loading', 'error', 'success', 'progress'],
  settings: ['default', 'loading', 'success'],
  'admin-panel': ['default', 'loading', 'empty', 'error', 'success', 'confirmation'],
  reporting: ['default', 'loading', 'empty'],
  inbox: ['default', 'loading', 'empty'],
  'master-detail': ['default', 'loading', 'empty', 'error'],
  'file-management': ['default', 'loading', 'progress', 'success', 'error'],
  'activity-feed': ['default', 'loading', 'empty'],
  notification: ['default', 'loading', 'empty'],
  'search-results': ['default', 'loading', 'empty'],
  comparison: ['default', 'loading'],
  profile: ['default', 'loading', 'success'],
  component: ['default'],
  page: ['default', 'loading'],
  journey: ['default', 'loading', 'success'],
};

// ----- Helper utilities -----

function normalise(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Strip common instruction verbs from the prompt before scoring.
 * "Create a landing page" becomes "a landing page" so "create"
 * does not inflate the form pattern score.
 */
function stripInstructionVerbs(text: string): string {
  return text
    .replace(/\b(create|design|build|make|give|show|generate|produce)\b\s*(me\s+)?/gi, '')
    .replace(/\b(a|an|the)\b\s*/gi, ' ')
    .replace(/\bubs[- ]style\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Score keywords using word-boundary matching.
 * "log" will not match inside "login".
 * Multi-word phrases score higher (2x per extra word).
 */
function scorePatternBounded(text: string, keywords: string[], patternName?: string): number {
  let score = 0;

  // If the exact pattern name appears in the text, give it a strong boost
  // e.g. "dashboard" in the text should strongly prefer the dashboard pattern
  if (patternName) {
    const patternWord = patternName.replace(/-/g, ' ');
    const patternRegex = new RegExp(`\\b${patternWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    if (patternRegex.test(text)) {
      score += 10; // strong boost for exact pattern name match
    }
  }

  for (const keyword of keywords) {
    // Use word boundary regex for matching
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'i');
    if (regex.test(text)) {
      // Multi-word phrases are weighted more heavily
      const wordCount = keyword.split(/\s+/).length;
      score += wordCount * 2;
    }
  }
  return score;
}

function extractSubject(prompt: string): string {
  const normalised = normalise(prompt);

  // Try to find the main noun phrase after common verbs
  // Handle "create me a ...", "build me a ..." etc.
  const subjectPatterns = [
    /(?:create|design|build|make)\s+me\s+(?:a|an|the)\s+(?:ubs[- ]style\s+)?(.+?)(?:\s+for\s+|\s+to\s+|\s+with\s+|$)/i,
    /(?:create|design|build|make)\s+(?:a|an|the)\s+(?:ubs[- ]style\s+)?(.+?)(?:\s+for\s+|\s+to\s+|\s+with\s+|$)/i,
    /(?:create|design|build|make)\s+(?:ubs[- ]style\s+)?(.+?)(?:\s+for\s+|\s+to\s+|\s+with\s+|$)/i,
    /(?:for|about)\s+(.+?)(?:\s+that\s+|\s+which\s+|\s+with\s+|$)/i,
  ];

  for (const pattern of subjectPatterns) {
    const match = normalised.match(pattern);
    if (match?.[1]) {
      const subject = match[1].trim().replace(/\s+/g, ' ');
      const words = subject.split(' ').slice(0, 6);
      return words.join(' ');
    }
  }

  // Fallback: strip instruction words and take core phrase
  const words = normalised.split(' ').filter(
    (w) => !['create', 'design', 'build', 'make', 'me', 'a', 'an', 'the', 'ubs', 'style'].includes(w),
  );
  return words.slice(0, 4).join(' ') || 'application';
}

function extractDomain(prompt: string): string {
  const normalised = normalise(prompt);

  const domainPatterns: [RegExp, string][] = [
    [/(?:user|employee|staff)\s*management/i, 'user management'],
    [/expense\s*(?:report|management|tracking)/i, 'expense reporting'],
    [/(?:it\s+)?service\s*(?:health|monitoring|desk)/i, 'IT service management'],
    [/(?:document|file)\s*management/i, 'document management'],
    [/(?:software|access)\s*(?:request|approval)/i, 'access management'],
    [/(?:knowledge\s*base|articles?|wiki)/i, 'knowledge management'],
    [/(?:incident|issue|problem)\s*(?:triage|management)/i, 'incident management'],
    [/(?:notification|alert)\s*(?:preference|setting)/i, 'notification management'],
    [/onboard/i, 'employee onboarding'],
    [/(?:microsoft\s*)?teams/i, 'Microsoft Teams support'],
    [/landing\s*page|home\s*page|portal/i, 'enterprise portal'],
    [/support/i, 'IT support'],
    [/admin/i, 'administration'],
    [/dashboard/i, 'analytics'],
    [/setting/i, 'preferences'],
    [/search/i, 'search'],
    [/approv/i, 'approvals'],
    [/report/i, 'reporting'],
    [/login|sign in/i, 'authentication'],
  ];

  for (const [pattern, domain] of domainPatterns) {
    if (pattern.test(normalised)) return domain;
  }

  return 'enterprise workflow';
}

function extractActions(prompt: string): string[] {
  const normalised = normalise(prompt);
  const actionVerbs = [
    'create', 'view', 'edit', 'delete', 'submit', 'approve', 'reject',
    'search', 'filter', 'export', 'import', 'upload', 'download',
    'assign', 'escalate', 'resolve', 'diagnose', 'fix', 'configure',
    'manage', 'monitor', 'track', 'review', 'report', 'notify',
    'authorise', 'onboard', 'compare', 'browse', 'select',
  ];

  const found: string[] = [];
  for (const verb of actionVerbs) {
    // Use word boundary to avoid partial matches
    const regex = new RegExp(`\\b${verb}\\b`, 'i');
    if (regex.test(normalised)) {
      found.push(verb);
    }
  }

  if (found.length === 0) {
    return ['view', 'navigate'];
  }

  return found;
}

function detectMultiStep(prompt: string): boolean {
  const normalised = normalise(prompt);

  for (const keyword of MULTI_STEP_KEYWORDS) {
    if (normalised.includes(keyword)) return true;
  }

  let sequenceCount = 0;
  for (const indicator of SEQUENCE_INDICATORS) {
    if (normalised.includes(indicator)) sequenceCount++;
  }
  if (sequenceCount >= 2) return true;

  const actions = extractActions(prompt);
  if (actions.length >= 3) return true;

  return false;
}

function detectComplexity(
  prompt: string,
  actions: string[],
  hasMultiStep: boolean,
): 'simple' | 'moderate' | 'complex' {
  const normalised = normalise(prompt);
  const wordCount = normalised.split(' ').length;

  if (hasMultiStep && actions.length >= 4) return 'complex';
  if (hasMultiStep && actions.length >= 2) return 'moderate';
  if (wordCount > 20 && actions.length >= 3) return 'complex';
  if (actions.length >= 3 || wordCount > 15) return 'moderate';
  return 'simple';
}

// ----- Main parser -----

export function parsePrompt(prompt: string): ParsedIntent {
  const normalised = normalise(prompt);

  // Step 1: Check for standalone UI component requests first.
  // BUT skip the component check when:
  //   a) Multiple page-level sections are mentioned (header + footer + hero etc.) → landing page
  //   b) It's an explicit layout/landing page request
  //   c) The prompt matches a specific flow/pattern (has 3+ distinct component mentions alongside a pattern keyword)
  const pageSectionKeywords = ['header', 'footer', 'hero', 'about', 'nav', 'navigation'];
  let pageSectionCount = 0;
  for (const kw of pageSectionKeywords) {
    const regex = new RegExp(`\\b${kw}\\b`, 'i');
    if (regex.test(normalised)) pageSectionCount++;
  }
  const isMultiSectionPage = pageSectionCount >= 2;

  // Only match explicit "layout" or "landing page" requests
  const isLayoutRequest = /\blayout\b|\blanding\s+page\b/i.test(normalised);

  // Check if the prompt describes a multi-component page (e.g. "page with sidebar, cards, timeline, stepper")
  // These are NOT standalone component requests, even if they mention component keywords
  const richComponentIndicators = [
    'sidebar', 'card', 'cards', 'table', 'timeline', 'stepper',
    'badge', 'badges', 'chart', 'form', 'alert', 'notification',
    'accordion', 'breadcrumb', 'tab', 'tabs', 'toggle', 'stat',
    'progress', 'metric', 'upload', 'list',
  ];
  let richComponentCount = 0;
  for (const kw of richComponentIndicators) {
    const regex = new RegExp(`\\b${kw}s?\\b`, 'i');
    if (regex.test(normalised)) richComponentCount++;
  }
  const isRichPage = richComponentCount >= 3; // 3+ different component types = not a standalone component

  let isComponentRequest = false;
  if (!isMultiSectionPage && !isLayoutRequest && !isRichPage) {
    for (const keyword of STANDALONE_COMPONENT_INDICATORS) {
      const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escaped}\\b`, 'i');
      if (regex.test(normalised)) {
        isComponentRequest = true;
        break;
      }
    }
  }

  // Step 2: Strip instruction verbs before scoring patterns.
  // This prevents "create" from matching the form pattern.
  const strippedForScoring = stripInstructionVerbs(normalised);

  // Step 3: Score each pattern against the stripped text
  const scores: [PatternType, number][] = [];
  for (const [pattern, keywords] of Object.entries(PATTERN_KEYWORDS)) {
    if (pattern === 'component') continue; // handled separately
    const score = scorePatternBounded(strippedForScoring, keywords, pattern);
    if (score > 0) {
      scores.push([pattern as PatternType, score]);
    }
  }

  // Sort by score descending
  scores.sort((a, b) => b[1] - a[1]);

  // Step 4: Determine pattern type
  // First, check if the primary subject (early in the prompt) explicitly names a pattern
  // e.g. "Build me a ... dashboard ..." should always be 'dashboard' even if 'data table' appears later
  // Check if the primary subject (early in the prompt) explicitly names a known pattern.
  // This catches "Build me a dashboard", "Design a form", "Create a support triage page", etc.
  let subjectPatternOverride: PatternType | null = null;
  const earlyText = normalised.slice(0, 100).toLowerCase();
  const patternSignals: [PatternType, RegExp][] = [
    ['dashboard', /\bdashboard\b/i],
    ['form', /\bform\b/i],
    ['support-flow', /\bsupport\b|\btriage\b|\btroubleshoot\b|\bhelpdesk\b/i],
    ['approval-flow', /\bapproval\b|\bapprove\b/i],
    ['onboarding', /\bonboard/i],
    ['wizard', /\bwizard\b/i],
    ['settings', /\bsettings\b|\bpreferences\b/i],
    ['admin-panel', /\badmin\b/i],
    ['reporting', /\breport/i],
    ['inbox', /\binbox\b/i],
    ['data-table', /\btable\b|\bdata\s+grid\b/i],
    ['master-detail', /\bmaster\s+detail\b/i],
    ['file-management', /\bfile\s+management\b|\bdocument\s+management\b/i],
    ['activity-feed', /\bactivity\s+feed\b|\baudit\s+trail\b/i],
    ['notification', /\bnotification\s+centre\b/i],
    ['search-results', /\bsearch\s+results\b/i],
    ['profile', /\bprofile\b/i],
  ];
  for (const [pn, regex] of patternSignals) {
    if (regex.test(earlyText)) {
      subjectPatternOverride = pn;
      break;
    }
  }

  let patternType: PatternType;
  if (isMultiSectionPage || isLayoutRequest) {
    // Multi-section layout requests are always 'page' (landing page)
    patternType = 'page';
  } else if (isComponentRequest) {
    patternType = 'component';
  } else if (subjectPatternOverride) {
    // The prompt's subject explicitly names a pattern (e.g. "... dashboard ...")
    patternType = subjectPatternOverride;
  } else if (scores.length > 0) {
    patternType = scores[0][0];
  } else {
    // No strong match: default to 'page' for generic page requests
    patternType = 'page';
  }

  const actions = extractActions(prompt);
  const hasMultiStep = detectMultiStep(prompt);
  const complexity = detectComplexity(prompt, actions, hasMultiStep);
  const subject = extractSubject(prompt);
  const domain = extractDomain(prompt);

  // Get page suggestions
  let suggestedPages = PATTERN_PAGE_SUGGESTIONS[patternType] ?? ['Main page'];

  // Adjust page count by complexity
  if (complexity === 'simple' && suggestedPages.length > 2) {
    suggestedPages = suggestedPages.slice(0, 2);
  } else if (complexity === 'moderate' && suggestedPages.length > 5) {
    suggestedPages = suggestedPages.slice(0, 5);
  }

  // For component patterns, generate a single page
  if (patternType === 'component') {
    suggestedPages = [capitalise(subject)];
  }

  // Customise page titles with the subject
  suggestedPages = suggestedPages.map((page) => {
    return page
      .replace(/Item/g, capitalise(subject.split(' ')[0] || 'Item'))
      .replace(/item/g, subject.split(' ')[0] || 'item');
  });

  const suggestedStates: InteractionState[] =
    PATTERN_STATE_SUGGESTIONS[patternType] ?? ['default', 'loading'];

  return {
    patternType,
    domain,
    subject,
    originalPrompt: prompt,
    actions,
    hasMultiStep,
    complexity,
    suggestedPages,
    suggestedStates,
  };
}

function capitalise(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
