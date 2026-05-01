// ============================================================
// UBS AI UX Designer — Brief Builder
// ============================================================
// Generates an InterpretedBrief from parsed prompt intent.

import type { InterpretedBrief, PatternType } from '../types';
import type { ParsedIntent } from './promptParser';

// ----- Pattern-specific brief content -----

interface BriefTemplate {
  goalPrefix: string;
  audience: string;
  accessibilityNotes: string[];
  toneNotes: string[];
}

const BRIEF_TEMPLATES: Partial<Record<PatternType, BriefTemplate>> = {
  dashboard: {
    goalPrefix: 'Monitor and understand',
    audience: 'Managers and analysts who need real-time visibility into',
    accessibilityNotes: [
      'Metric cards must have clear labels readable by screen readers',
      'Charts should include text alternatives or data tables',
      'Colour is supplemented by icons and labels for status indicators',
      'Auto-refreshing content uses ARIA live regions',
    ],
    toneNotes: [
      'Data-driven and factual',
      'Use concise labels for metrics',
      'Provide context alongside numbers (e.g. trends, comparisons)',
      'Neutral and professional tone throughout',
    ],
  },
  form: {
    goalPrefix: 'Submit or capture',
    audience: 'Internal users who need to create or register',
    accessibilityNotes: [
      'All form fields have visible labels and programmatic associations',
      'Error messages are announced to screen readers',
      'Required fields are indicated by both visual and programmatic means',
      'Tab order follows logical form flow',
    ],
    toneNotes: [
      'Clear, instructional language on field labels',
      'Helpful placeholder text and inline guidance',
      'Error messages explain how to correct the issue',
      'Confirmation messages are reassuring',
    ],
  },
  'data-table': {
    goalPrefix: 'Browse, search, and manage',
    audience: 'Team members who need to find and manage',
    accessibilityNotes: [
      'Table headers use proper scope attributes',
      'Sort controls are keyboard accessible',
      'Row selection state is announced to assistive technology',
      'Search results update announced via ARIA live regions',
    ],
    toneNotes: [
      'Column headers are concise and scannable',
      'Empty states are helpful, not just "No results"',
      'Action labels are specific (e.g. "Export to CSV" not "Export")',
      'Filter labels are plain and descriptive',
    ],
  },
  'support-flow': {
    goalPrefix: 'Resolve',
    audience: 'Internal employees experiencing issues with',
    accessibilityNotes: [
      'Progress steps must be announced to screen readers',
      'Action buttons need clear, descriptive labels',
      'Status alerts should use appropriate ARIA roles',
      'Colour is not the sole indicator of status; icons and text are used alongside',
      'All interactive elements meet the 44px minimum touch target',
    ],
    toneNotes: [
      'Reassuring and professional throughout',
      'Use plain language; avoid technical jargon where possible',
      'Action-oriented button labels (e.g. "Apply fix" not "Submit")',
      'Explain what each step does before asking the user to proceed',
      'Error and escalation messaging should be supportive, not alarming',
    ],
  },
  'approval-flow': {
    goalPrefix: 'Review and action',
    audience: 'Approvers and managers responsible for reviewing',
    accessibilityNotes: [
      'Approval and rejection buttons have distinct, descriptive labels',
      'Queue count updates are announced via ARIA live',
      'Decision forms are fully keyboard navigable',
      'Priority indicators use both colour and text',
    ],
    toneNotes: [
      'Objective and factual in request descriptions',
      'Clear distinction between approve, reject, and defer actions',
      'Justification prompts are open-ended and non-leading',
      'Confirmation messages confirm the specific action taken',
    ],
  },
  onboarding: {
    goalPrefix: 'Get started with',
    audience: 'New joiners and first-time users of',
    accessibilityNotes: [
      'Step progress is communicated to screen readers',
      'Welcome content is structured with proper heading hierarchy',
      'All getting-started cards are keyboard navigable',
      'Skip links allow users to bypass introductory content',
    ],
    toneNotes: [
      'Warm and welcoming',
      'Encouraging without being patronising',
      'Short, clear instructions at each step',
      'Celebrate completion without excessive fanfare',
    ],
  },
  wizard: {
    goalPrefix: 'Complete a guided process for',
    audience: 'Users who need step-by-step guidance through',
    accessibilityNotes: [
      'Current step is announced on each page transition',
      'Form validation errors are linked to their fields',
      'Previous/Next navigation is keyboard accessible',
      'Progress indicator shows completed, current, and remaining steps',
    ],
    toneNotes: [
      'Instructional and supportive',
      'Each step has a clear purpose stated at the top',
      'Button labels reflect the action (not generic "Next")',
      'Final step summarises what was completed',
    ],
  },
  settings: {
    goalPrefix: 'Configure preferences for',
    audience: 'Users who want to customise their experience with',
    accessibilityNotes: [
      'Toggle states are announced (on/off)',
      'Settings categories are navigable by keyboard',
      'Save confirmation is announced to screen readers',
      'Reset to defaults requires confirmation',
    ],
    toneNotes: [
      'Descriptive labels with brief explanations',
      'Changes are saved automatically or with clear save prompts',
      'Technical terminology is explained in context',
      'Default values are shown for reference',
    ],
  },
  'admin-panel': {
    goalPrefix: 'Manage and administer',
    audience: 'Administrators responsible for managing',
    accessibilityNotes: [
      'Data tables follow WAI-ARIA grid pattern',
      'Bulk actions describe how many items are selected',
      'Destructive actions require confirmation',
      'Role and permission labels are descriptive',
    ],
    toneNotes: [
      'Professional and precise',
      'Action consequences are clearly stated',
      'Use imperative verbs for admin actions (Create, Edit, Remove)',
      'Confirmation dialogs state exactly what will happen',
    ],
  },
  reporting: {
    goalPrefix: 'Analyse and report on',
    audience: 'Analysts and managers who need insights into',
    accessibilityNotes: [
      'Charts include text descriptions or data tables',
      'Report filters are keyboard accessible',
      'Export options are clearly labelled',
      'Colour is supplemented by patterns or labels in charts',
    ],
    toneNotes: [
      'Data-focused and analytical',
      'Provide context for metrics (time period, comparison)',
      'Use consistent terminology across reports',
      'Export labels specify format (PDF, CSV, Excel)',
    ],
  },
  inbox: {
    goalPrefix: 'View and manage messages for',
    audience: 'Users who receive notifications and messages about',
    accessibilityNotes: [
      'Unread status is communicated to screen readers',
      'Message list is keyboard navigable',
      'New message alerts use ARIA live regions',
      'Batch actions describe selected count',
    ],
    toneNotes: [
      'Concise message previews',
      'Timestamps are relative and human-readable',
      'Action labels are specific (Archive, Delete, Mark as read)',
      'Empty state is encouraging, not blank',
    ],
  },
  'master-detail': {
    goalPrefix: 'Browse and inspect',
    audience: 'Users who need to review individual records of',
    accessibilityNotes: [
      'List and detail panels have clear landmarks',
      'Selected item state is announced',
      'Detail content updates are communicated via ARIA live',
      'Keyboard users can navigate between list and detail',
    ],
    toneNotes: [
      'List items show just enough info to differentiate',
      'Detail view provides comprehensive information',
      'Navigation between items is intuitive',
      'Related actions are contextual to the selected item',
    ],
  },
  'file-management': {
    goalPrefix: 'Organise and access documents for',
    audience: 'Team members who work with files and documents related to',
    accessibilityNotes: [
      'File type icons have text alternatives',
      'Upload progress is announced to screen readers',
      'File actions (download, rename, delete) are keyboard accessible',
      'Drag and drop has a keyboard alternative',
    ],
    toneNotes: [
      'File metadata is concise (name, type, size, date)',
      'Upload feedback is immediate and clear',
      'Version history uses clear chronological labels',
      'Destructive file actions require confirmation',
    ],
  },
  'activity-feed': {
    goalPrefix: 'Track activity and changes for',
    audience: 'Team members who need visibility into changes to',
    accessibilityNotes: [
      'Activity items use proper list semantics',
      'Timestamps are accessible and parseable',
      'Filter changes are announced',
      'New activity items are announced via ARIA live',
    ],
    toneNotes: [
      'Activity descriptions follow "Person did action on target" pattern',
      'Timestamps are relative (e.g. "2 hours ago")',
      'System events are distinguished from user actions',
      'Filters use clear category labels',
    ],
  },
  comparison: {
    goalPrefix: 'Compare options for',
    audience: 'Decision-makers evaluating',
    accessibilityNotes: [
      'Comparison table headers clearly identify each option',
      'Best/recommended values are indicated by more than colour',
      'Table is navigable by keyboard',
      'Summary is provided as an alternative to the full table',
    ],
    toneNotes: [
      'Feature labels are consistent and objective',
      'Values are comparable across columns',
      'Recommendations are clearly justified',
      'Selection action is prominent',
    ],
  },
  'search-results': {
    goalPrefix: 'Find and discover',
    audience: 'Users searching for information about',
    accessibilityNotes: [
      'Search field has a visible label and submit button',
      'Result count is announced when results update',
      'Results are structured with proper heading hierarchy',
      'No-results state is helpful and suggests alternatives',
    ],
    toneNotes: [
      'Search placeholder text is helpful',
      'Result snippets highlight matching terms',
      'Category filters use plain language',
      'Empty results suggest alternative searches',
    ],
  },
  profile: {
    goalPrefix: 'View and manage profile information for',
    audience: 'Users who need to review or update their',
    accessibilityNotes: [
      'Profile fields are clearly labelled',
      'Edit mode transition is announced',
      'Avatar images have appropriate alt text',
      'Save and cancel actions are keyboard accessible',
    ],
    toneNotes: [
      'Personal information labels are standard and recognisable',
      'Edit prompts are encouraging',
      'Validation feedback is immediate and helpful',
      'Privacy-sensitive fields are clearly marked',
    ],
  },
  notification: {
    goalPrefix: 'Stay informed about',
    audience: 'Users who receive alerts and notifications about',
    accessibilityNotes: [
      'Notification priority is indicated by text, not just colour',
      'Dismiss actions are keyboard accessible',
      'New notifications are announced via ARIA live regions',
      'Notification preferences are clearly configurable',
    ],
    toneNotes: [
      'Notification titles are concise and actionable',
      'Severity levels use consistent language',
      'Dismiss and action buttons are clearly labelled',
      'Grouped notifications show count clearly',
    ],
  },
};

const DEFAULT_TEMPLATE: BriefTemplate = {
  goalPrefix: 'Interact with',
  audience: 'Internal UBS employees using',
  accessibilityNotes: [
    'All interactive elements are keyboard accessible',
    'Colour is not the sole means of conveying information',
    'ARIA labels are used for non-text interactive elements',
    'Focus management follows logical page flow',
  ],
  toneNotes: [
    'Professional and clear',
    'Action-oriented button labels',
    'Consistent terminology throughout',
    'Supportive error messaging',
  ],
};

// ----- Helper: build summary -----

function buildSummary(intent: ParsedIntent, prompt: string): string {
  const template = BRIEF_TEMPLATES[intent.patternType] ?? DEFAULT_TEMPLATE;
  const prefix = template.goalPrefix;

  const complexity = intent.complexity === 'complex'
    ? 'comprehensive'
    : intent.complexity === 'moderate'
      ? 'multi-step'
      : 'focused';

  const pageCount = intent.suggestedPages.length;

  return `A ${complexity} ${intent.patternType.replace(/-/g, ' ')} covering ${intent.domain}. `
    + `${prefix} ${intent.subject} through ${pageCount} page${pageCount !== 1 ? 's' : ''}: `
    + `${intent.suggestedPages.join(', ')}. `
    + `Based on the prompt: "${prompt.length > 120 ? prompt.slice(0, 117) + '...' : prompt}"`;
}

// ----- Helper: build user goal -----

function buildUserGoal(intent: ParsedIntent): string {
  const template = BRIEF_TEMPLATES[intent.patternType] ?? DEFAULT_TEMPLATE;
  return `${template.goalPrefix} ${intent.subject} efficiently and independently`;
}

// ----- Main builder -----

export function buildBrief(
  intent: ParsedIntent,
  prompt: string,
): InterpretedBrief {
  const template = BRIEF_TEMPLATES[intent.patternType] ?? DEFAULT_TEMPLATE;

  return {
    summary: buildSummary(intent, prompt),
    userGoal: buildUserGoal(intent),
    audience: `${template.audience} ${intent.subject}`,
    journeyType: intent.patternType,
    mainPages: intent.suggestedPages,
    mainActions: intent.actions.map((a) => a.charAt(0).toUpperCase() + a.slice(1)),
    keyStates: intent.suggestedStates as string[],
    accessibilityConsiderations: template.accessibilityNotes,
    toneOfVoiceNotes: template.toneNotes,
  };
}
