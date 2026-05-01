// ============================================================
// UBS AI UX Designer — Smart Mock AI Service
// ============================================================
// Uses a keyword-based prompt parser and template assembly
// system to generate realistic, prompt-specific designs.
// All functions retain clear AI integration point comments
// showing where Azure AI Foundry calls would replace the
// smart mock logic.

import type {
  InterpretedBrief,
  JourneyMap,
  DesignModel,
  UxReview,
  GenerationResult,
  OutputType,
  PageModel,
} from '../types';

import { parsePrompt } from './promptParser';
import type { ParsedIntent } from './promptParser';
import { buildBrief } from './briefBuilder';
import { buildJourneyMap } from './journeyBuilder';
import { buildReview } from './reviewBuilder';
import { pickIllustration, pickAboutIllustrations, pickCitySkyline, UBS_ILLUSTRATIONS } from './assetManifest';
import {
  resetIdCounter,
  createDashboardPage,
  createListPage,
  createDetailPage,
  createFormPage,
  createConfirmationPage,
  createProgressPage,
  createSuccessPage,
  createErrorPage,
  createSettingsPage,
  createWizardStepPage,
  createSearchResultsPage,
  createInboxPage,
  createApprovalQueuePage,
  createApprovalDetailPage,
  createOnboardingWelcomePage,
  createTimelinePage,
  createComparisonPage,
  createFileManagementPage,
  createActivityFeedPage,
  createSplitViewPage,
} from './pageTemplates';

// ----- AI INTEGRATION POINT -----
// Replace the smart mock logic below with:
//   const response = await fetch(AZURE_AI_ENDPOINT, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'x-api-key': AZURE_AI_KEY,
//       'anthropic-version': '2023-06-01',
//     },
//     body: JSON.stringify({
//       model: 'claude-opus-4-20250514',
//       max_tokens: 4096,
//       messages: [{ role: 'user', content: buildBriefPrompt(prompt) }],
//     }),
//   });
// Model: Claude Opus via Azure AI Foundry
// Endpoint: https://ai-gregpanayi-4410.services.ai.azure.com/anthropic/v1/messages
// ----- END AI INTEGRATION POINT -----

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomDelay(min: number, max: number): Promise<void> {
  return delay(Math.floor(Math.random() * (max - min + 1)) + min);
}

// ----- Helper: capitalise -----

function cap(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ============================================================
// Page assembly — builds pages from templates based on intent
// ============================================================

function assemblePages(intent: ParsedIntent): PageModel[] {
  resetIdCounter();

  switch (intent.patternType) {
    case 'dashboard':
      return assembleDashboard(intent);
    case 'form':
      return assembleForm(intent);
    case 'data-table':
      return assembleDataTable(intent);
    case 'support-flow':
      return assembleSupportFlow(intent);
    case 'approval-flow':
      return assembleApprovalFlow(intent);
    case 'onboarding':
      return assembleOnboarding(intent);
    case 'wizard':
      return assembleWizard(intent);
    case 'settings':
      return assembleSettings(intent);
    case 'admin-panel':
      return assembleAdminPanel(intent);
    case 'reporting':
      return assembleReporting(intent);
    case 'inbox':
      return assembleInbox(intent);
    case 'master-detail':
      return assembleMasterDetail(intent);
    case 'file-management':
      return assembleFileManagement(intent);
    case 'activity-feed':
      return assembleActivityFeed(intent);
    case 'search-results':
      return assembleSearchResults(intent);
    case 'comparison':
      return assembleComparison(intent);
    case 'notification':
      return assembleNotification(intent);
    case 'profile':
      return assembleProfile(intent);
    case 'component':
      return assembleComponent(intent);
    case 'page':
    case 'journey':
      return assembleLandingPage(intent);
    default:
      return assembleGenericFlow(intent);
  }
}

function assembleDashboard(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;
  const pages: PageModel[] = [];

  const metrics = inferMetrics(intent);
  const dashboard = createDashboardPage(s, metrics);

  // Add a header illustration to the first section
  if (dashboard.sections.length > 0) {
    dashboard.sections[0].components.unshift({
      id: 'comp-dashboard-hero-img',
      type: 'heading',
      props: {
        text: dashboard.title,
        level: 1,
        illustration: pickIllustration(intent.domain, 'dashboard'),
      },
    });
  }

  pages.push(dashboard);

  if (intent.complexity !== 'simple') {
    const detail = createDetailPage(s, [
      'Name', 'Status', 'Owner', 'Last updated', 'Category', 'Priority',
    ]);
    detail.secondaryAction = { label: 'Back to dashboard', navigateTo: dashboard.id };
    pages.push(detail);
  }

  if (intent.complexity === 'complex') {
    const timeline = createTimelinePage(s);
    timeline.secondaryAction = { label: 'Back to dashboard', navigateTo: dashboard.id };
    pages.push(timeline);
  }

  // Wire navigation
  if (pages.length > 1) {
    pages[0].primaryAction = { label: 'View details', navigateTo: pages[1].id };
  }

  return pages;
}

function assembleForm(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;
  const fields = inferFormFields(intent);

  const form = createFormPage(s, fields);
  const confirmation = createConfirmationPage(`submit ${s}`);
  const success = createSuccessPage(`${cap(s)} submission`, 'View submissions');

  form.primaryAction = { label: 'Review and submit', navigateTo: confirmation.id };
  confirmation.primaryAction = { label: 'Confirm and submit', navigateTo: success.id };
  confirmation.secondaryAction = { label: 'Edit details', navigateTo: form.id };

  return [form, confirmation, success];
}

function assembleDataTable(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;
  const columns = inferTableColumns(intent);

  const list = createListPage(s, columns);
  const detail = createDetailPage(s, inferDetailFields(intent));

  list.primaryAction = { label: `View ${s} detail`, navigateTo: detail.id };
  detail.secondaryAction = { label: 'Back to list', navigateTo: list.id };

  const pages = [list, detail];

  if (intent.complexity !== 'simple') {
    const form = createFormPage(s, inferFormFields(intent));
    form.primaryAction = { label: 'Save', navigateTo: list.id };
    form.secondaryAction = { label: 'Cancel', navigateTo: list.id };
    pages.push(form);
  }

  return pages;
}

function assembleSupportFlow(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;
  const pages: PageModel[] = [];

  // Entry page
  const entry = createDashboardPage(s, ['Issue severity', 'Affected users', 'Time since reported']);
  entry.title = `${cap(s)} — report issue`;
  entry.description = `Entry point for the ${s} support journey`;
  entry.pageType = 'hero';
  pages.push(entry);

  // Diagnosis
  const diagnosisPage = createProgressPage(`Diagnosing ${s}`, [
    'System check', 'Root cause analysis', 'Solution lookup', 'Recommendation',
  ]);
  diagnosisPage.title = 'Diagnosis';
  diagnosisPage.description = 'Automated checks and detected issues';
  diagnosisPage.pageType = 'standard';
  pages.push(diagnosisPage);

  // Recommended fix
  const fixDetail = createDetailPage(`${s} fix`, [
    'Fix type', 'Estimated duration', 'Risk level', 'Affected systems', 'Rollback available',
  ]);
  fixDetail.title = 'Recommended fix';
  fixDetail.description = 'Details of the proposed fix';
  pages.push(fixDetail);

  // Confirmation
  const confirm = createConfirmationPage(`apply ${s} fix`);
  pages.push(confirm);

  // Progress
  const progress = createProgressPage(`Applying ${s} fix`, [
    'Preparing', 'Applying changes', 'Verifying', 'Completing',
  ]);
  pages.push(progress);

  // Success
  const success = createSuccessPage(`${cap(s)} fix`);
  pages.push(success);

  // Escalation
  const escalation = createErrorPage(
    `The automated fix did not fully resolve the ${s} issue. A support engineer can investigate further.`,
  );
  escalation.title = 'Escalation';
  escalation.description = 'Path for unresolved issues';
  escalation.pageType = 'standard';
  escalation.primaryAction = { label: 'Raise a support request' };
  escalation.secondaryAction = { label: 'Back to start', navigateTo: entry.id };
  pages.push(escalation);

  // Wire navigation
  entry.primaryAction = { label: 'Start diagnosis', navigateTo: diagnosisPage.id };
  diagnosisPage.primaryAction = { label: 'View recommended fix', navigateTo: fixDetail.id };
  diagnosisPage.secondaryAction = { label: 'Back', navigateTo: entry.id };
  fixDetail.primaryAction = { label: 'Apply fix', navigateTo: confirm.id };
  fixDetail.secondaryAction = { label: 'Back', navigateTo: diagnosisPage.id };
  confirm.primaryAction = { label: 'Confirm and apply', navigateTo: progress.id };
  confirm.secondaryAction = { label: 'Cancel', navigateTo: fixDetail.id };
  progress.primaryAction = { label: 'View results', navigateTo: success.id };
  success.primaryAction = { label: `Check ${s} status` };
  success.secondaryAction = { label: 'Issue not resolved', navigateTo: escalation.id };

  return pages;
}

function assembleApprovalFlow(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;

  const form = createFormPage(s, inferFormFields(intent));
  form.title = `Submit ${s} request`;

  const queue = createApprovalQueuePage(s);
  const detail = createApprovalDetailPage(s);
  const confirmation = createConfirmationPage(`approve ${s} request`);
  const success = createSuccessPage(`${cap(s)} request`, 'Return to queue');

  form.primaryAction = { label: 'Submit request', navigateTo: confirmation.id };
  queue.primaryAction = { label: 'Review request', navigateTo: detail.id };
  detail.primaryAction = { label: 'Approve', navigateTo: confirmation.id };
  detail.secondaryAction = { label: 'Reject', navigateTo: confirmation.id };
  confirmation.primaryAction = { label: 'Confirm decision', navigateTo: success.id };
  confirmation.secondaryAction = { label: 'Back to review', navigateTo: detail.id };
  success.primaryAction = { label: 'Return to queue', navigateTo: queue.id };

  return [form, queue, detail, confirmation, success];
}

function assembleOnboarding(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;
  const pages: PageModel[] = [];

  // Welcome page
  const welcome = createOnboardingWelcomePage(s);
  pages.push(welcome);

  // Wizard steps
  const stepData: [string, string[]][] = [
    ['Personal details', ['Full name', 'Email address', 'Phone number', 'Employee ID']],
    ['Team setup', ['Department', 'Team', 'Manager', 'Office location']],
    ['Tools and access', ['Required systems', 'Access level', 'VPN needed', 'Mobile access']],
    ['Preferences', ['Language', 'Notification preferences', 'Theme', 'Default view']],
  ];

  const totalSteps = stepData.length;
  for (let i = 0; i < totalSteps; i++) {
    const [title, fields] = stepData[i];
    const step = createWizardStepPage(i + 1, totalSteps, title, fields);
    pages.push(step);
  }

  // Complete page
  const complete = createSuccessPage(`${cap(s)} onboarding`, 'Go to dashboard');
  complete.title = 'Setup complete';
  pages.push(complete);

  // Wire navigation
  welcome.primaryAction = { label: 'Get started', navigateTo: pages[1].id };
  for (let i = 1; i <= totalSteps; i++) {
    const current = pages[i];
    if (i < totalSteps) {
      current.primaryAction = { label: 'Next', navigateTo: pages[i + 1].id };
    } else {
      current.primaryAction = { label: 'Complete', navigateTo: complete.id };
    }
    current.secondaryAction = { label: 'Previous', navigateTo: pages[i - 1].id };
  }

  return pages;
}

function assembleWizard(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;
  const pages: PageModel[] = [];

  const stepCount = intent.complexity === 'complex' ? 5
    : intent.complexity === 'moderate' ? 4
    : 3;

  const defaultSteps: [string, string[]][] = [
    ['Getting started', ['Name', 'Type', 'Description']],
    ['Configuration', ['Category', 'Priority', 'Owner', 'Due date']],
    ['Details', ['Notes', 'Attachments', 'Tags']],
    ['Notifications', ['Notify on update', 'Email alerts', 'Slack integration']],
    ['Review', ['Summary', 'Confirmation']],
  ];

  for (let i = 0; i < stepCount; i++) {
    const [title, fields] = defaultSteps[i] || [`Step ${i + 1}`, ['Field 1', 'Field 2']];
    const step = createWizardStepPage(i + 1, stepCount, title, fields);
    pages.push(step);
  }

  const success = createSuccessPage(`${cap(s)} creation`, 'View result');
  pages.push(success);

  // Wire navigation
  for (let i = 0; i < stepCount; i++) {
    if (i < stepCount - 1) {
      pages[i].primaryAction = { label: 'Next', navigateTo: pages[i + 1].id };
    } else {
      pages[i].primaryAction = { label: 'Complete', navigateTo: success.id };
    }
    if (i > 0) {
      pages[i].secondaryAction = { label: 'Previous', navigateTo: pages[i - 1].id };
    }
  }

  return pages;
}

function assembleSettings(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;

  const categories = inferSettingsCategories(intent);
  const settingsMain = createSettingsPage(categories);

  const pages: PageModel[] = [settingsMain];

  if (intent.complexity !== 'simple') {
    const detail = createDetailPage(`${s} settings`, categories.map((c) => `${c} preference`));
    detail.title = 'Setting detail';
    detail.pageType = 'settings';
    detail.secondaryAction = { label: 'Back to settings', navigateTo: settingsMain.id };
    settingsMain.primaryAction = { label: 'Edit settings', navigateTo: detail.id };
    pages.push(detail);
  }

  return pages;
}

function assembleAdminPanel(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;
  const columns = inferTableColumns(intent);

  const list = createListPage(s, columns);
  list.title = `${cap(s)} management`;

  const detail = createDetailPage(s, inferDetailFields(intent));
  const form = createFormPage(s, inferFormFields(intent));
  const confirmation = createConfirmationPage(`create ${s}`);

  list.primaryAction = { label: `View ${s}`, navigateTo: detail.id };
  detail.primaryAction = { label: `Edit ${s}`, navigateTo: form.id };
  detail.secondaryAction = { label: 'Back to list', navigateTo: list.id };
  form.primaryAction = { label: 'Save', navigateTo: confirmation.id };
  form.secondaryAction = { label: 'Cancel', navigateTo: list.id };
  confirmation.primaryAction = { label: 'Confirm', navigateTo: list.id };
  confirmation.secondaryAction = { label: 'Back', navigateTo: form.id };

  return [list, detail, form, confirmation];
}

function assembleReporting(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;
  const metrics = inferMetrics(intent);

  const dashboard = createDashboardPage(s, metrics);
  dashboard.title = `${cap(s)} report`;

  const detail = createDetailPage(`${s} report`, [
    'Report name', 'Generated', 'Period', 'Author', 'Status',
  ]);
  detail.secondaryAction = { label: 'Back to reports', navigateTo: dashboard.id };
  dashboard.primaryAction = { label: 'View report detail', navigateTo: detail.id };

  const pages: PageModel[] = [dashboard, detail];

  if (intent.complexity !== 'simple') {
    const timeline = createTimelinePage(`${s} report`);
    timeline.secondaryAction = { label: 'Back', navigateTo: dashboard.id };
    pages.push(timeline);
  }

  return pages;
}

function assembleInbox(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;

  const inbox = createInboxPage(s);
  const detail = createDetailPage(`${s} message`, [
    'From', 'Subject', 'Date', 'Priority', 'Category',
  ]);
  detail.secondaryAction = { label: 'Back to inbox', navigateTo: inbox.id };
  inbox.primaryAction = { label: 'View message', navigateTo: detail.id };

  const pages: PageModel[] = [inbox, detail];

  if (intent.complexity !== 'simple') {
    const compose = createFormPage(`${s} message`, [
      'To', 'Subject', 'Priority', 'Message body',
    ]);
    compose.title = 'Compose message';
    compose.secondaryAction = { label: 'Discard', navigateTo: inbox.id };
    pages.push(compose);
  }

  return pages;
}

function assembleMasterDetail(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;

  const split = createSplitViewPage(s, s);
  const detail = createDetailPage(s, inferDetailFields(intent));

  split.primaryAction = { label: 'Open full detail', navigateTo: detail.id };
  detail.secondaryAction = { label: 'Back to list', navigateTo: split.id };

  return [split, detail];
}

function assembleFileManagement(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;

  const browser = createFileManagementPage(s);
  const detail = createDetailPage(`${s} file`, [
    'File name', 'Type', 'Size', 'Modified', 'Owner', 'Version',
  ]);
  detail.title = 'File detail';

  const upload = createFormPage(`${s} file`, [
    'File', 'Description', 'Category', 'Tags',
  ]);
  upload.title = 'Upload file';

  const history = createTimelinePage(`${s} file`);
  history.title = 'Version history';

  browser.primaryAction = { label: 'View file', navigateTo: detail.id };
  detail.primaryAction = { label: 'View history', navigateTo: history.id };
  detail.secondaryAction = { label: 'Back to files', navigateTo: browser.id };
  upload.primaryAction = { label: 'Upload', navigateTo: browser.id };
  upload.secondaryAction = { label: 'Cancel', navigateTo: browser.id };
  history.secondaryAction = { label: 'Back to file', navigateTo: detail.id };

  return [browser, upload, detail, history];
}

function assembleActivityFeed(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;

  const feed = createActivityFeedPage(s);
  const detail = createDetailPage(`${s} activity`, [
    'User', 'Action', 'Target', 'Timestamp', 'Details',
  ]);
  detail.title = 'Activity detail';

  feed.primaryAction = { label: 'View detail', navigateTo: detail.id };
  detail.secondaryAction = { label: 'Back to feed', navigateTo: feed.id };

  return [feed, detail];
}

function assembleSearchResults(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;

  const search = createSearchResultsPage(s);
  const detail = createDetailPage(s, inferDetailFields(intent));

  search.primaryAction = { label: 'View result', navigateTo: detail.id };
  detail.secondaryAction = { label: 'Back to results', navigateTo: search.id };

  const pages: PageModel[] = [search, detail];

  if (intent.complexity === 'complex') {
    const list = createListPage(s, inferTableColumns(intent));
    list.title = 'Advanced search';
    list.secondaryAction = { label: 'Basic search', navigateTo: search.id };
    pages.push(list);
  }

  return pages;
}

function assembleComparison(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;
  const items = ['Option A', 'Option B', 'Option C'];

  const selection = createListPage(s, ['Name', 'Category', 'Status']);
  selection.title = `Select ${s} to compare`;

  const comparison = createComparisonPage(s, items);
  const success = createSuccessPage(`${cap(s)} selection`);

  selection.primaryAction = { label: 'Compare selected', navigateTo: comparison.id };
  comparison.primaryAction = { label: 'Select preferred', navigateTo: success.id };
  comparison.secondaryAction = { label: 'Back to selection', navigateTo: selection.id };

  return [selection, comparison, success];
}

function assembleNotification(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;

  const inbox = createInboxPage(s);
  inbox.title = `${cap(s)} notifications`;

  const settings = createSettingsPage([
    'Email notifications', 'Push notifications', 'In-app alerts',
    'Digest frequency', 'Quiet hours',
  ]);
  settings.title = 'Notification settings';

  inbox.primaryAction = { label: 'Manage settings', navigateTo: settings.id };
  settings.secondaryAction = { label: 'Back to notifications', navigateTo: inbox.id };

  return [inbox, settings];
}

function assembleProfile(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;

  const profileView = createDetailPage(s, [
    'Full name', 'Email', 'Department', 'Location', 'Role', 'Phone',
  ]);
  profileView.title = `${cap(s)} profile`;
  profileView.pageType = 'detail';

  const editForm = createFormPage(s, [
    'Full name', 'Email', 'Phone', 'Department', 'Location', 'Bio',
  ]);
  editForm.title = 'Edit profile';

  const confirmation = createConfirmationPage('update profile');

  profileView.primaryAction = { label: 'Edit profile', navigateTo: editForm.id };
  editForm.primaryAction = { label: 'Save changes', navigateTo: confirmation.id };
  editForm.secondaryAction = { label: 'Cancel', navigateTo: profileView.id };
  confirmation.primaryAction = { label: 'Confirm', navigateTo: profileView.id };
  confirmation.secondaryAction = { label: 'Back', navigateTo: editForm.id };

  return [profileView, editForm, confirmation];
}

function assembleComponent(intent: ParsedIntent): PageModel[] {
  // Use the original prompt for keyword detection (not just the subject)
  // so "Create me a footer with clocks" detects both "footer" and "clocks"
  const fullPrompt = (intent.originalPrompt || intent.subject).toLowerCase();
  const components: import('../types').ComponentModel[] = [];
  let pageTitle = cap(intent.subject);
  let pageDescription = `A standalone ${intent.subject} component for UBS enterprise applications.`;

  // Detect specific component types from the full prompt
  const hasClocks = /clock|\btime\b|timezone|time zone/i.test(fullPrompt);
  const hasFooter = /footer/i.test(fullPrompt);
  const hasHeader = /header/i.test(fullPrompt);
  const hasNav = /nav|navigation|menu|sidebar/i.test(fullPrompt);
  const hasBanner = /banner|hero/i.test(fullPrompt);
  const hasToolbar = /toolbar|tool bar|action bar/i.test(fullPrompt);

  if (hasFooter && hasClocks) {
    pageTitle = 'Footer with world clocks';
    pageDescription = 'A footer component displaying the current time across key UBS office locations.';

    // Section header
    components.push({
      id: `comp-${Date.now()}-hd`,
      type: 'section-header',
      props: {
        title: 'World Clocks',
        action: { label: 'Settings' },
      },
    });

    // World clocks as stat-group of metric cards
    const cities = extractCities(fullPrompt) || [
      { city: 'Local time', offset: '+00:00' },
      { city: 'London', offset: 'GMT' },
      { city: 'New York', offset: 'EST' },
      { city: 'Mumbai', offset: 'IST' },
      { city: 'Singapore', offset: 'SGT' },
      { city: 'Zürich', offset: 'CET' },
    ];

    components.push({
      id: `comp-${Date.now()}-clocks`,
      type: 'stat-group',
      props: {
        stats: cities.map((c) => ({
          label: c.city,
          value: mockTimeForCity(c.city),
          subtitle: c.offset,
        })),
      },
    });

    // Divider
    components.push({
      id: `comp-${Date.now()}-div`,
      type: 'divider',
      props: {},
    });

    // Footer links
    components.push({
      id: `comp-${Date.now()}-links`,
      type: 'nav-tabs',
      props: {
        tabs: [
          { label: 'Help & Support', active: false },
          { label: 'Privacy', active: false },
          { label: 'Terms of Use', active: false },
          { label: 'Accessibility', active: false },
          { label: 'Contact IT', active: false },
        ],
      },
    });

    // Copyright
    components.push({
      id: `comp-${Date.now()}-copy`,
      type: 'paragraph',
      props: {
        text: `© ${new Date().getFullYear()} UBS Group AG. All rights reserved.`,
        variant: 'body-3',
      },
    });
  } else if (hasFooter) {
    pageTitle = 'Footer';
    pageDescription = 'A standard footer component for UBS enterprise applications.';

    components.push({
      id: `comp-${Date.now()}-links`,
      type: 'nav-tabs',
      props: {
        tabs: [
          { label: 'Help & Support', active: false },
          { label: 'Privacy', active: false },
          { label: 'Terms of Use', active: false },
          { label: 'Accessibility', active: false },
          { label: 'Contact IT', active: false },
        ],
      },
    });
    components.push({
      id: `comp-${Date.now()}-copy`,
      type: 'paragraph',
      props: {
        text: `© ${new Date().getFullYear()} UBS Group AG. All rights reserved.`,
        variant: 'body-3',
      },
    });
  } else if (hasHeader || hasBanner) {
    pageTitle = cap(intent.subject);
    pageDescription = `A ${hasHeader ? 'header' : 'banner'} component for UBS enterprise applications.`;

    components.push({
      id: `comp-${Date.now()}-hd`,
      type: 'heading',
      props: { text: 'UBS Enterprise Portal', level: 1 },
    });
    components.push({
      id: `comp-${Date.now()}-nav`,
      type: 'nav-tabs',
      props: {
        tabs: [
          { label: 'Home', active: true },
          { label: 'Services', active: false },
          { label: 'Tools', active: false },
          { label: 'Support', active: false },
          { label: 'My Account', active: false },
        ],
      },
    });
    if (hasBanner) {
      components.push({
        id: `comp-${Date.now()}-hero`,
        type: 'card',
        props: {
          title: 'Welcome to UBS Enterprise Portal',
          description: 'Access your tools, manage requests, and find support in one place.',
        },
      });
    }
  } else if (hasNav) {
    pageTitle = 'Navigation';
    pageDescription = 'A sidebar navigation component for UBS enterprise applications.';

    components.push({
      id: `comp-${Date.now()}-nav`,
      type: 'sidebar-nav',
      props: {
        items: [
          { label: 'Dashboard', icon: 'layout', active: true },
          { label: 'Services', icon: 'search' },
          { label: 'Requests', icon: 'document' },
          { label: 'Approvals', icon: 'check' },
          { label: 'Reports', icon: 'eye' },
          { label: 'Settings', icon: 'edit' },
        ],
        activeItem: 'Dashboard',
      },
    });
  } else if (hasToolbar) {
    pageTitle = 'Toolbar';
    pageDescription = 'A toolbar component for UBS enterprise applications.';

    components.push({
      id: `comp-${Date.now()}-tb`,
      type: 'toolbar',
      props: {
        actions: [
          { label: 'New', variant: 'primary' },
          { label: 'Edit', variant: 'secondary' },
          { label: 'Delete', variant: 'ghost' },
          { label: 'Export', variant: 'secondary' },
          { label: 'Filter', variant: 'ghost' },
        ],
      },
    });
  } else {
    // Generic single-component page
    pageTitle = cap(intent.subject);
    pageDescription = `A ${intent.subject} component preview.`;

    components.push({
      id: `comp-${Date.now()}-hd`,
      type: 'heading',
      props: { text: cap(intent.subject), level: 2 },
    });
    components.push({
      id: `comp-${Date.now()}-desc`,
      type: 'paragraph',
      props: {
        text: `This is a preview of the ${intent.subject} component. Customise it by editing the design model in the Edit panel.`,
        variant: 'body-1',
      },
    });
    components.push({
      id: `comp-${Date.now()}-card`,
      type: 'card',
      props: {
        title: cap(intent.subject),
        description: `A reusable ${intent.subject} component styled according to UBS design standards.`,
      },
    });
  }

  const page: import('../types').PageModel = {
    id: `page-component-1`,
    title: pageTitle,
    description: pageDescription,
    pageType: 'standard',
    sections: [
      {
        id: 'section-component-main',
        title: pageTitle,
        layout: 'stack',
        components,
        spacing: 'md',
      },
    ],
  };

  return [page];
}

// Extract city names from a prompt for world clocks
function extractCities(prompt: string): { city: string; offset: string }[] | null {
  const cityMap: Record<string, string> = {
    'local': '+00:00',
    'local time': '+00:00',
    'london': 'GMT',
    'new york': 'EST',
    'bombay': 'IST',
    'mumbai': 'IST',
    'singapore': 'SGT',
    'zurich': 'CET',
    'zürich': 'CET',
    'tokyo': 'JST',
    'hong kong': 'HKT',
    'sydney': 'AEST',
    'dubai': 'GST',
    'shanghai': 'CST',
    'frankfurt': 'CET',
    'paris': 'CET',
    'chicago': 'CST',
    'los angeles': 'PST',
    'san francisco': 'PST',
    'toronto': 'EST',
    'são paulo': 'BRT',
    'sao paulo': 'BRT',
    'beijing': 'CST',
    'seoul': 'KST',
    'jakarta': 'WIB',
    'mumbai': 'IST',
    'delhi': 'IST',
    'bangalore': 'IST',
  };

  const lower = prompt.toLowerCase();
  const found: { city: string; offset: string }[] = [];

  for (const [city, offset] of Object.entries(cityMap)) {
    if (lower.includes(city)) {
      // Capitalise city name nicely
      const displayName = city === 'local' || city === 'local time'
        ? 'Local time'
        : city.split(' ').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      // Avoid duplicates (e.g. bombay and mumbai both map to IST)
      if (!found.some((f) => f.city === displayName)) {
        found.push({ city: displayName, offset });
      }
    }
  }

  return found.length > 0 ? found : null;
}

// Generate a mock time string for a city
function mockTimeForCity(city: string): string {
  const offsets: Record<string, number> = {
    'Local time': 0,
    'London': 0,
    'New York': -5,
    'Mumbai': 5.5,
    'Bombay': 5.5,
    'Singapore': 8,
    'Zürich': 1,
    'Zurich': 1,
    'Tokyo': 9,
    'Hong Kong': 8,
    'Sydney': 11,
    'Dubai': 4,
    'Shanghai': 8,
    'Frankfurt': 1,
    'Paris': 1,
    'Chicago': -6,
    'Los Angeles': -8,
    'San Francisco': -8,
    'Toronto': -5,
    'São Paulo': -3,
    'Sao Paulo': -3,
    'Beijing': 8,
    'Seoul': 9,
    'Jakarta': 7,
    'Delhi': 5.5,
    'Bangalore': 5.5,
  };

  const utcHour = 14; // Mock: pretend it is 14:00 UTC
  const offset = offsets[city] ?? 0;
  const localHour = ((utcHour + offset) % 24 + 24) % 24;
  const hour = Math.floor(localHour);
  const minutes = (localHour % 1) * 60;
  const h = hour.toString().padStart(2, '0');
  const m = minutes.toString().padStart(2, '0');
  return `${h}:${m}`;
}

function assembleLandingPage(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;
  const domain = intent.domain;
  const fullPrompt = (intent.originalPrompt || '').toLowerCase();

  // Detect which sections the user wants
  const wantsHeader = /header|top nav|\bnav\b|navigation|nav bar|navbar/i.test(fullPrompt);
  const wantsHero = /hero|banner|welcome|intro/i.test(fullPrompt);
  const wantsAbout = /about|info|details|description|content/i.test(fullPrompt);
  const wantsFooter = /footer/i.test(fullPrompt);
  const wantsFeatures = /feature|service|card/i.test(fullPrompt);
  const wantsStats = /stat|metric|number|figure/i.test(fullPrompt);

  // Default: if nothing specific requested or it's a generic page, include everything
  const includeAll = !wantsHeader && !wantsHero && !wantsAbout && !wantsFooter && !wantsFeatures && !wantsStats;

  const sections: import('../types').SectionModel[] = [];

  // ─── HEADER ───
  if (includeAll || wantsHeader) {
    sections.push({
      id: 'section-header',
      layout: 'stack',
      spacing: 'sm',
      components: [{
        id: 'comp-header',
        type: 'header',
        props: {
          title: cap(s),
          navItems: [
            { label: 'Home', href: '#', active: true },
            { label: 'Services', href: '#services' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
          ],
          sticky: true,
        },
      }],
    });
  }

  // ─── HERO ───
  if (includeAll || wantsHero) {
    sections.push({
      id: 'section-hero',
      layout: 'stack',
      spacing: 'lg',
      components: [{
        id: 'comp-hero',
        type: 'hero',
        props: {
          title: `Welcome to ${cap(s)}`,
          subtitle: `Discover how ${s} can transform your experience with world-class services and innovative solutions.`,
          ctaLabel: 'Get started',
          secondaryCtaLabel: 'Learn more',
          illustration: pickIllustration(domain, 'hero'),
        },
      }],
    });
  }

  // ─── FEATURES ───
  if (includeAll || wantsFeatures) {
    sections.push({
      id: 'section-features',
      title: 'Key features',
      layout: 'grid-auto',
      spacing: 'md',
      components: [
        {
          id: 'comp-feature-1',
          type: 'card',
          props: {
            title: 'Quick access',
            description: 'Find your most-used tools and services in one convenient location.',
            icon: 'lightning',
            illustration: UBS_ILLUSTRATIONS.general.rocket,
          },
        },
        {
          id: 'comp-feature-2',
          type: 'card',
          props: {
            title: 'Service status',
            description: 'Check the status of services and view current incidents at a glance.',
            icon: 'eye',
            illustration: UBS_ILLUSTRATIONS.finance.dashboard,
          },
        },
        {
          id: 'comp-feature-3',
          type: 'card',
          props: {
            title: 'Self-service support',
            description: 'Resolve common issues independently with guided troubleshooting.',
            icon: 'lightbulb',
            illustration: UBS_ILLUSTRATIONS.general.helpDesk,
          },
        },
      ],
    });
  }

  // ─── STATS ───
  if (includeAll || wantsStats) {
    sections.push({
      id: 'section-stats',
      title: 'At a glance',
      layout: 'flex-row',
      spacing: 'md',
      components: [{
        id: 'comp-stat-group',
        type: 'stat-group',
        props: {
          stats: [
            { label: 'Active services', value: '142' },
            { label: 'Open requests', value: '23' },
            { label: 'Avg resolution', value: '4.2h' },
            { label: 'Satisfaction', value: '94%' },
          ],
        },
      }],
    });
  }

  // ─── ABOUT SECTION ───
  if (includeAll || wantsAbout) {
    sections.push({
      id: 'section-about',
      layout: 'stack',
      spacing: 'md',
      components: [{
        id: 'comp-about',
        type: 'about-section',
        props: {
          title: `About ${cap(s)}`,
          description: `We bring together expertise, innovation, and a client-first approach to deliver exceptional ${s} solutions.`,
          blocks: (() => {
            const aboutIlls = pickAboutIllustrations();
            return [
              {
                title: 'Expertise',
                description: `Our team of specialists brings decades of ${s} experience to every engagement.`,
                ctaLabel: 'Meet the team',
                illustration: aboutIlls[0],
              },
              {
                title: 'Innovation',
                description: `Cutting-edge technology and research drive our ${s} capabilities forward.`,
                ctaLabel: 'Our approach',
                illustration: aboutIlls[1],
              },
              {
                title: 'Client focus',
                description: 'Every solution is tailored to your unique needs and objectives.',
                ctaLabel: 'Case studies',
                illustration: aboutIlls[2],
              },
            ];
          })(),
        },
      }],
    });
  }

  // ─── FOOTER ───
  if (includeAll || wantsFooter) {
    sections.push({
      id: 'section-footer',
      layout: 'stack',
      spacing: 'sm',
      components: [{
        id: 'comp-footer',
        type: 'footer',
        props: {
          columns: [
            {
              title: 'Services',
              links: [
                { label: 'Wealth Management', href: '/wealth' },
                { label: 'Investment Banking', href: '/ib' },
                { label: 'Asset Management', href: '/am' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'About us', href: '/about' },
                { label: 'Careers', href: '/careers' },
                { label: 'Press', href: '/press' },
              ],
            },
            {
              title: 'Support',
              links: [
                { label: 'Contact us', href: '/contact' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Legal', href: '/legal' },
              ],
            },
          ],
          copyright: `\u00A9 ${new Date().getFullYear()} UBS Group AG. All rights reserved.`,
          legal: 'This content is provided for informational purposes only.',
          citySkyline: pickCitySkyline(),
        },
      }],
    });
  }

  const page: import('../types').PageModel = {
    id: 'page-landing-1',
    title: cap(s),
    description: `A ${s} landing page for ${domain}.`,
    pageType: 'hero',
    sections,
  };

  return [page];
}

function assembleGenericFlow(intent: ParsedIntent): PageModel[] {
  const s = intent.subject;

  const list = createListPage(s, inferTableColumns(intent));
  const detail = createDetailPage(s, inferDetailFields(intent));
  const form = createFormPage(s, inferFormFields(intent));

  list.primaryAction = { label: 'View detail', navigateTo: detail.id };
  detail.primaryAction = { label: `Edit ${s}`, navigateTo: form.id };
  detail.secondaryAction = { label: 'Back to list', navigateTo: list.id };
  form.primaryAction = { label: 'Save' };
  form.secondaryAction = { label: 'Cancel', navigateTo: detail.id };

  return [list, detail, form];
}

// ============================================================
// Field / column / metric inference helpers
// ============================================================

function inferMetrics(intent: ParsedIntent): string[] {
  const domain = intent.domain.toLowerCase();

  if (domain.includes('service') || domain.includes('monitoring'))
    return ['Uptime', 'Response time', 'Active incidents', 'User satisfaction', 'Error rate'];
  if (domain.includes('user') || domain.includes('admin'))
    return ['Total users', 'Active today', 'New this month', 'Pending approvals', 'Disabled accounts'];
  if (domain.includes('expense') || domain.includes('financial'))
    return ['Total submitted', 'Pending review', 'Approved this month', 'Average amount', 'Budget remaining'];
  if (domain.includes('support'))
    return ['Open tickets', 'Avg resolution time', 'Satisfaction score', 'SLA compliance', 'Escalation rate'];
  if (domain.includes('report') || domain.includes('analytics'))
    return ['Reports generated', 'Most viewed', 'Last updated', 'Active users', 'Data freshness'];

  return ['Total records', 'Active items', 'Pending actions', 'Completion rate', 'Last updated'];
}

function inferTableColumns(intent: ParsedIntent): string[] {
  const domain = intent.domain.toLowerCase();

  if (domain.includes('user') || domain.includes('admin'))
    return ['Name', 'Email', 'Department', 'Role', 'Status', 'Last active'];
  if (domain.includes('expense'))
    return ['Reference', 'Description', 'Amount', 'Category', 'Status', 'Submitted'];
  if (domain.includes('incident') || domain.includes('support'))
    return ['ID', 'Title', 'Severity', 'Status', 'Assigned to', 'Reported'];
  if (domain.includes('approval'))
    return ['Request', 'Requester', 'Date', 'Priority', 'Status'];
  if (domain.includes('document') || domain.includes('file'))
    return ['Name', 'Type', 'Size', 'Modified', 'Owner'];

  return ['Name', 'Type', 'Status', 'Created', 'Owner'];
}

function inferDetailFields(intent: ParsedIntent): string[] {
  const domain = intent.domain.toLowerCase();

  if (domain.includes('user') || domain.includes('admin'))
    return ['Full name', 'Email', 'Department', 'Role', 'Office location', 'Phone', 'Start date', 'Status'];
  if (domain.includes('expense'))
    return ['Reference', 'Description', 'Amount', 'Category', 'Submitted by', 'Date', 'Receipt', 'Status'];
  if (domain.includes('incident') || domain.includes('support'))
    return ['ID', 'Title', 'Description', 'Severity', 'Status', 'Assigned to', 'Reported by', 'Resolution'];

  return ['Name', 'Description', 'Status', 'Created', 'Last updated', 'Owner', 'Category'];
}

function inferFormFields(intent: ParsedIntent): string[] {
  const domain = intent.domain.toLowerCase();

  if (domain.includes('user') || domain.includes('admin'))
    return ['Full name', 'Email address', 'Department', 'Role', 'Office location', 'Phone number'];
  if (domain.includes('expense'))
    return ['Description', 'Amount', 'Currency', 'Category', 'Date', 'Receipt upload', 'Notes'];
  if (domain.includes('approval'))
    return ['Request type', 'Description', 'Justification', 'Priority', 'Required by date'];
  if (domain.includes('incident') || domain.includes('support'))
    return ['Title', 'Description', 'Severity', 'Category', 'Affected system', 'Screenshot'];

  return ['Name', 'Type', 'Description', 'Category', 'Priority', 'Notes'];
}

function inferSettingsCategories(intent: ParsedIntent): string[] {
  const domain = intent.domain.toLowerCase();

  if (domain.includes('notification'))
    return ['Email notifications', 'Push notifications', 'In-app alerts', 'Digest frequency', 'Quiet hours'];

  return ['General', 'Notifications', 'Privacy', 'Appearance', 'Language'];
}

// ============================================================
// Public API — same signatures, now powered by smart engine
// ============================================================

export async function interpretPrompt(prompt: string): Promise<InterpretedBrief> {
  // ----- AI INTEGRATION POINT -----
  // Replace with AI call that analyses the user prompt
  // and returns a structured brief.
  // ----- END AI INTEGRATION POINT -----
  await randomDelay(500, 800);

  const intent = parsePrompt(prompt);
  return buildBrief(intent, prompt);
}

export async function createJourneyMap(
  brief: InterpretedBrief,
): Promise<JourneyMap> {
  // ----- AI INTEGRATION POINT -----
  // Replace with AI call that creates a journey map
  // from the interpreted brief.
  // ----- END AI INTEGRATION POINT -----
  await randomDelay(500, 700);

  // Build pages to derive the journey from
  const intent = reverseIntent(brief);
  const pages = assemblePages(intent);

  const title = `${brief.journeyType.replace(/-/g, ' ')} — ${brief.userGoal}`;
  const description = brief.summary;

  return buildJourneyMap(title, pages, description);
}

export async function createDesignModel(
  prompt: string,
  brief: InterpretedBrief,
  journeyMap: JourneyMap,
  outputType: OutputType,
): Promise<DesignModel> {
  // ----- AI INTEGRATION POINT -----
  // Replace with AI call that generates the full DesignModel
  // from the prompt, brief, and journey map.
  // ----- END AI INTEGRATION POINT -----
  await randomDelay(800, 1200);

  const intent = parsePrompt(prompt);
  const pages = assemblePages(intent);

  return {
    projectName: `${cap(intent.subject)} ${intent.patternType.replace(/-/g, ' ')}`,
    prompt,
    brief,
    journeyMap,
    currentPageId: pages.length > 0 ? pages[0].id : 'page-1',
    currentState: 'default',
    metadata: {
      generatedAt: new Date().toISOString(),
      version: '1.0.0',
      outputType,
    },
    pages,
  };
}

export async function reviewDesignModel(model: DesignModel): Promise<UxReview> {
  // ----- AI INTEGRATION POINT -----
  // Replace with AI call that reviews the design model
  // and returns scores plus recommendations.
  // ----- END AI INTEGRATION POINT -----
  await randomDelay(600, 900);

  return buildReview(model);
}

// ============================================================
// Code generation — template-literal based, model-driven
// ============================================================

export async function generateReact(model: DesignModel): Promise<string> {
  // ----- AI INTEGRATION POINT -----
  // Replace with AI call that generates React code from the model.
  // ----- END AI INTEGRATION POINT -----
  await randomDelay(400, 600);

  const pages = model.pages.map((page) => {
    const fnName = pageIdToFunctionName(page.id);
    const sections = page.sections
      .map(
        (section) =>
          `        <section className="ubs-stack ubs-stack-${section.spacing ?? 'md'}">
${section.title ? `          <h3 className="ubs-header-4">${section.title}</h3>` : ''}
${section.components
  .map((comp) => renderReactComponent(comp))
  .join('\n')}
        </section>`,
      )
      .join('\n\n');

    return `  function ${fnName}() {
    return (
      <div className="ubs-container ubs-stack ubs-stack-lg">
        <div className="ubs-page-header">
          <h1 className="page-title">${page.title}</h1>
${page.description ? `          <p className="page-description">${page.description}</p>` : ''}
        </div>

${sections}

        <div className="ubs-flex-row">
${page.primaryAction ? `          <button className="ubs-btn ubs-btn-primary"${page.primaryAction.navigateTo ? ` onClick={() => setCurrentPage('${page.primaryAction.navigateTo}')}` : ''}>${page.primaryAction.label}</button>` : ''}
${page.secondaryAction ? `          <button className="ubs-btn ubs-btn-secondary"${page.secondaryAction.navigateTo ? ` onClick={() => setCurrentPage('${page.secondaryAction.navigateTo}')}` : ''}>${page.secondaryAction.label}</button>` : ''}
        </div>
${page.footerText ? `\n        <p className="ubs-footer-text">${page.footerText}</p>` : ''}
      </div>
    );
  }`;
  });

  return `import React, { useState } from 'react';

/**
 * ${model.projectName}
 * Generated by UBS AI UX Designer
 */

export default function App() {
  const [currentPage, setCurrentPage] = useState('${model.currentPageId}');

${pages.join('\n\n')}

  const pageMap: Record<string, React.FC> = {
${model.pages.map((p) => `    '${p.id}': ${pageIdToFunctionName(p.id)},`).join('\n')}
  };

  const CurrentPage = pageMap[currentPage];
  return CurrentPage ? <CurrentPage /> : null;
}
`;
}

export async function generateAngular(model: DesignModel): Promise<string> {
  // ----- AI INTEGRATION POINT -----
  // Replace with AI call that generates Angular code from the model.
  // ----- END AI INTEGRATION POINT -----
  await randomDelay(400, 600);

  const componentName = model.projectName.replace(/[^a-zA-Z0-9]/g, '');
  const selectorName = model.projectName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return `import { Component } from '@angular/core';

/**
 * ${model.projectName}
 * Generated by UBS AI UX Designer
 */

@Component({
  selector: 'app-${selectorName}',
  template: \`
    <div class="ubs-container ubs-stack ubs-stack-lg">
      <div class="ubs-page-header">
        <h1 class="page-title">{{ currentPageData?.title }}</h1>
        <p *ngIf="currentPageData?.description" class="page-description">
          {{ currentPageData?.description }}
        </p>
      </div>

      <ng-container [ngSwitch]="currentPage">
${model.pages
  .map(
    (page) => `        <ng-container *ngSwitchCase="'${page.id}'">
${page.sections
  .map(
    (section) => `          <section class="ubs-stack ubs-stack-${section.spacing ?? 'md'}">
${section.title ? `            <h3 class="ubs-header-4">${section.title}</h3>` : ''}
${section.components.map((comp) => renderAngularComponent(comp)).join('\n')}
          </section>`,
  )
  .join('\n')}
        </ng-container>`,
  )
  .join('\n\n')}
      </ng-container>

      <div class="ubs-flex-row">
        <button *ngIf="currentPageData?.primaryAction"
                class="ubs-btn ubs-btn-primary"
                (click)="navigate(currentPageData?.primaryAction?.navigateTo)">
          {{ currentPageData?.primaryAction?.label }}
        </button>
        <button *ngIf="currentPageData?.secondaryAction"
                class="ubs-btn ubs-btn-secondary"
                (click)="navigate(currentPageData?.secondaryAction?.navigateTo)">
          {{ currentPageData?.secondaryAction?.label }}
        </button>
      </div>
    </div>
  \`
})
export class ${componentName}Component {
  currentPage = '${model.currentPageId}';

  pages = ${JSON.stringify(
    model.pages.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description,
      primaryAction: p.primaryAction,
      secondaryAction: p.secondaryAction,
    })),
    null,
    4,
  )};

  get currentPageData() {
    return this.pages.find(p => p.id === this.currentPage);
  }

  navigate(pageId?: string) {
    if (pageId) this.currentPage = pageId;
  }
}
`;
}

export async function generateHtmlCss(model: DesignModel): Promise<string> {
  // ----- AI INTEGRATION POINT -----
  // Replace with AI call that generates standalone HTML/CSS.
  // ----- END AI INTEGRATION POINT -----
  await randomDelay(400, 600);

  const firstPage = model.pages[0];

  const pageSections = firstPage
    ? firstPage.sections
        .map(
          (section) => `    <section class="stack">
${section.title ? `      <h3>${section.title}</h3>` : ''}
${section.components.map((comp) => renderHtmlComponent(comp)).join('\n')}
    </section>`,
        )
        .join('\n\n')
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${model.projectName}</title>
  <style>
    :root {
      --ubs-font-family: 'Frutiger', Arial, Helvetica, sans-serif;
      --ubs-red: #E60000;
      --ubs-red-dark: #BA0000;
      --ubs-white: #FFFFFF;
      --ubs-neutral-05: #F9F9F7;
      --ubs-neutral-10: #F4F3EE;
      --ubs-neutral-20: #E0DFD7;
      --ubs-neutral-70: #5A5D5C;
      --ubs-neutral-90: #1C1C1C;
      --ubs-status-info: #3A5A88;
      --ubs-status-success: #6F7A1A;
      --ubs-status-warning: #E4A911;
      --ubs-status-error: #BD000C;
      --ubs-charlotte: #E6F5FB;
      --ubs-lagoon: #009BD2;
    }

    body {
      font-family: var(--ubs-font-family);
      font-weight: 300;
      color: var(--ubs-neutral-90);
      background: var(--ubs-white);
      margin: 0;
      padding: 0;
    }

    .container { max-width: 1200px; margin: 0 auto; padding: 24px; }
    .page-header { padding: 32px 0; border-bottom: 1px solid var(--ubs-neutral-20); margin-bottom: 24px; }
    .page-header h1 { font-size: 2.25rem; font-weight: 300; line-height: 1.2; letter-spacing: -0.02em; }
    .page-header p { margin-top: 8px; font-size: 1rem; color: var(--ubs-neutral-70); }
    .stack { display: flex; flex-direction: column; gap: 16px; }
    .stack-lg { gap: 32px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .alert { display: flex; align-items: flex-start; gap: 12px; padding: 16px; border-radius: 8px; font-size: 0.875rem; }
    .alert-warning { background: #fef0cc; color: #8a6c08; border-left: 3px solid var(--ubs-status-warning); }
    .alert-success { background: #e8edc9; color: #4a5211; border-left: 3px solid var(--ubs-status-success); }
    .alert-info { background: var(--ubs-charlotte); color: var(--ubs-status-info); border-left: 3px solid var(--ubs-status-info); }
    .alert-error { background: #fde8e9; color: var(--ubs-status-error); border-left: 3px solid var(--ubs-status-error); }
    .card { border: 1px solid var(--ubs-neutral-20); border-radius: 8px; padding: 20px; background: var(--ubs-white); }
    .card h4 { margin: 0 0 8px; font-weight: 500; }
    .card p { margin: 0; color: var(--ubs-neutral-70); font-size: 0.875rem; }
    .metric-card { text-align: centre; padding: 24px; border: 1px solid var(--ubs-neutral-20); border-radius: 8px; }
    .metric-card .value { font-size: 2rem; font-weight: 500; color: var(--ubs-neutral-90); }
    .metric-card .label { font-size: 0.875rem; color: var(--ubs-neutral-70); margin-top: 4px; }
    .btn { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 8px 24px; font-weight: 500; font-size: 0.875rem; border-radius: 4px; border: 1px solid transparent; cursor: pointer; }
    .btn-primary { background: var(--ubs-red); color: var(--ubs-white); border-color: var(--ubs-red); }
    .btn-primary:hover { background: var(--ubs-red-dark); }
    .btn-secondary { background: var(--ubs-white); color: var(--ubs-neutral-90); border-color: var(--ubs-neutral-20); }
    .actions { display: flex; gap: 16px; margin-top: 24px; }
    .form-group { display: flex; flex-direction: column; gap: 4px; }
    .form-group label { font-weight: 500; font-size: 0.875rem; }
    .form-group input, .form-group textarea, .form-group select { padding: 10px 12px; border: 1px solid var(--ubs-neutral-20); border-radius: 4px; font-size: 0.875rem; }
    table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
    th { text-align: left; padding: 12px 16px; background: var(--ubs-neutral-05); border-bottom: 2px solid var(--ubs-neutral-20); font-weight: 500; }
    td { padding: 12px 16px; border-bottom: 1px solid var(--ubs-neutral-10); }
    .kv-pair { display: flex; gap: 8px; }
    .kv-pair .kv-label { font-weight: 500; min-width: 160px; }
    .kv-pair .kv-value { color: var(--ubs-neutral-70); }
  </style>
</head>
<body>
  <div class="container stack stack-lg">
    <div class="page-header">
      <h1>${firstPage?.title ?? model.projectName}</h1>
${firstPage?.description ? `      <p>${firstPage.description}</p>` : ''}
    </div>

${pageSections}

    <div class="actions">
${firstPage?.primaryAction ? `      <button class="btn btn-primary">${firstPage.primaryAction.label}</button>` : ''}
${firstPage?.secondaryAction ? `      <button class="btn btn-secondary">${firstPage.secondaryAction.label}</button>` : ''}
    </div>
${firstPage?.footerText ? `\n    <p style="color: var(--ubs-neutral-70); font-size: 0.875rem;">${firstPage.footerText}</p>` : ''}
  </div>

  <script>
    // Page navigation
    const pages = ${JSON.stringify(model.pages.map((p) => p.id))};
    let currentPage = '${model.currentPageId}';

    function navigate(pageId) {
      if (pageId && pages.includes(pageId)) {
        currentPage = pageId;
        console.log('Navigate to:', pageId);
      }
    }
  </script>
</body>
</html>`;
}

export async function refineFromInstruction(
  model: DesignModel,
  instruction: string,
): Promise<DesignModel> {
  // ----- AI INTEGRATION POINT -----
  // Replace with AI call that refines the model based on
  // a natural-language instruction.
  // ----- END AI INTEGRATION POINT -----
  await randomDelay(600, 1000);

  void instruction;

  // For now, return the model with a version bump
  return { ...model, metadata: { ...model.metadata, version: '1.0.1' } };
}

/**
 * Master function: orchestrates the full prompt-to-preview pipeline.
 */
export async function generateFromPrompt(
  prompt: string,
  outputType: OutputType,
): Promise<GenerationResult> {
  const brief = await interpretPrompt(prompt);
  const journeyMap = await createJourneyMap(brief);
  const model = await createDesignModel(prompt, brief, journeyMap, outputType);
  const review = await reviewDesignModel(model);
  return { model, review };
}

// ============================================================
// Internal helpers for code generation
// ============================================================

function pageIdToFunctionName(id: string): string {
  return id
    .replace(/^page-/, 'Page')
    .replace(/-(\w)/g, (_, c) => c.toUpperCase())
    .replace(/-/g, '');
}

function renderReactComponent(comp: ComponentModel): string {
  const indent = '          ';
  switch (comp.type) {
    case 'heading': {
      const level = (comp.props.level as number) ?? 2;
      return `${indent}<h${level} className="ubs-header-${level}">${comp.props.text}</h${level}>`;
    }
    case 'paragraph':
      return `${indent}<p className="ubs-body-1">${comp.props.text}</p>`;
    case 'alert':
      return `${indent}<div className="ubs-alert ubs-alert-${comp.props.variant}" role="alert">
${indent}  <strong>${comp.props.title}</strong>
${indent}  <span>${comp.props.message}</span>
${indent}</div>`;
    case 'button':
      return `${indent}<button className="ubs-btn ubs-btn-${comp.props.variant ?? 'primary'}">${comp.props.label}</button>`;
    case 'card':
      return `${indent}<div className="ubs-card">
${indent}  <h4>${comp.props.title}</h4>
${indent}  <p>${comp.props.description}</p>
${indent}</div>`;
    case 'metric-card':
      return `${indent}<div className="ubs-metric-card">
${indent}  <span className="value">${comp.props.value}</span>
${indent}  <span className="label">${comp.props.label}</span>
${indent}</div>`;
    case 'form-field':
      return `${indent}<div className="ubs-form-group">
${indent}  <label>${comp.props.label}${comp.props.required ? ' *' : ''}</label>
${indent}  <input type="${comp.props.type ?? 'text'}" placeholder="${comp.props.placeholder ?? ''}" />
${indent}</div>`;
    case 'list':
      return `${indent}<${(comp.props as Record<string, unknown>).ordered ? 'ol' : 'ul'} className="ubs-list">
${((comp.props as Record<string, unknown>).items as string[] || []).map((item: string) => `${indent}  <li>${item}</li>`).join('\n')}
${indent}</${(comp.props as Record<string, unknown>).ordered ? 'ol' : 'ul'}>`;
    case 'table': {
      const cols = (comp.props.columns as string[]) || [];
      const rows = (comp.props.rows as string[][]) || [];
      return `${indent}<table className="ubs-table">
${indent}  <thead><tr>${cols.map((c: string) => `<th>${c}</th>`).join('')}</tr></thead>
${indent}  <tbody>
${rows.map((row: string[]) => `${indent}    <tr>${row.map((cell: string) => `<td>${cell}</td>`).join('')}</tr>`).join('\n')}
${indent}  </tbody>
${indent}</table>`;
    }
    case 'key-value':
      return `${indent}<div className="ubs-kv-pair"><span className="label">${comp.props.label}</span><span className="value">${comp.props.value}</span></div>`;
    case 'search':
      return `${indent}<input type="search" className="ubs-search" placeholder="${comp.props.placeholder ?? 'Search...'}" />`;
    case 'progress-stepper':
      return `${indent}<div className="ubs-stepper">${((comp.props.steps as Array<{label: string; status: string}>) || []).map((s) => `<span className="step step-${s.status}">${s.label}</span>`).join(' → ')}</div>`;
    case 'status-label':
      return `${indent}<span className="ubs-status ubs-status-${comp.props.variant}">${comp.props.status}</span>`;
    case 'recommendation':
      return `${indent}<div className="ubs-recommendation">
${indent}  <h4>${comp.props.title}</h4>
${indent}  <p>${comp.props.description}</p>
${indent}</div>`;
    default:
      return `${indent}{/* ${comp.type}: ${comp.id} */}`;
  }
}

function renderAngularComponent(comp: ComponentModel): string {
  const indent = '            ';
  switch (comp.type) {
    case 'heading': {
      const level = (comp.props.level as number) ?? 2;
      return `${indent}<h${level} class="ubs-header-${level}">${comp.props.text}</h${level}>`;
    }
    case 'paragraph':
      return `${indent}<p class="ubs-body-1">${comp.props.text}</p>`;
    case 'alert':
      return `${indent}<div class="ubs-alert ubs-alert-${comp.props.variant}" role="alert">
${indent}  <strong>${comp.props.title}</strong>
${indent}  <span>${comp.props.message}</span>
${indent}</div>`;
    case 'card':
      return `${indent}<div class="ubs-card"><h4>${comp.props.title}</h4><p>${comp.props.description}</p></div>`;
    case 'form-field':
      return `${indent}<div class="ubs-form-group"><label>${comp.props.label}</label><input type="${comp.props.type ?? 'text'}" /></div>`;
    default:
      return `${indent}<!-- ${comp.type}: ${comp.id} -->`;
  }
}

function renderHtmlComponent(comp: ComponentModel): string {
  const indent = '      ';
  switch (comp.type) {
    case 'heading': {
      const level = (comp.props.level as number) ?? 2;
      return `${indent}<h${level}>${comp.props.text}</h${level}>`;
    }
    case 'paragraph':
      return `${indent}<p>${comp.props.text}</p>`;
    case 'alert':
      return `${indent}<div class="alert alert-${comp.props.variant}" role="alert">
${indent}  <strong>${comp.props.title}</strong>
${indent}  <span>${comp.props.message}</span>
${indent}</div>`;
    case 'card':
      return `${indent}<div class="card">
${indent}  <h4>${comp.props.title}</h4>
${indent}  <p>${comp.props.description}</p>
${indent}</div>`;
    case 'metric-card':
      return `${indent}<div class="metric-card">
${indent}  <div class="value">${comp.props.value}</div>
${indent}  <div class="label">${comp.props.label}</div>
${indent}</div>`;
    case 'form-field':
      return `${indent}<div class="form-group">
${indent}  <label>${comp.props.label}${comp.props.required ? ' *' : ''}</label>
${indent}  <input type="${comp.props.type ?? 'text'}" placeholder="${comp.props.placeholder ?? ''}" />
${indent}</div>`;
    case 'list':
      return `${indent}<${(comp.props as Record<string, unknown>).ordered ? 'ol' : 'ul'}>
${((comp.props as Record<string, unknown>).items as string[] || []).map((item: string) => `${indent}  <li>${item}</li>`).join('\n')}
${indent}</${(comp.props as Record<string, unknown>).ordered ? 'ol' : 'ul'}>`;
    case 'table': {
      const cols = (comp.props.columns as string[]) || [];
      const rows = (comp.props.rows as string[][]) || [];
      return `${indent}<table>
${indent}  <thead><tr>${cols.map((c: string) => `<th>${c}</th>`).join('')}</tr></thead>
${indent}  <tbody>
${rows.map((row: string[]) => `${indent}    <tr>${row.map((cell: string) => `<td>${cell}</td>`).join('')}</tr>`).join('\n')}
${indent}  </tbody>
${indent}</table>`;
    }
    case 'key-value':
      return `${indent}<div class="kv-pair"><span class="kv-label">${comp.props.label}</span><span class="kv-value">${comp.props.value}</span></div>`;
    case 'search':
      return `${indent}<input type="search" placeholder="${comp.props.placeholder ?? 'Search...'}" />`;
    case 'recommendation':
      return `${indent}<div class="card">
${indent}  <h4>${comp.props.title}</h4>
${indent}  <p>${comp.props.description}</p>
${indent}</div>`;
    default:
      return `${indent}<!-- ${comp.type}: ${comp.id} -->`;
  }
}

// ----- Helper: reverse-engineer ParsedIntent from brief -----

function reverseIntent(brief: InterpretedBrief): ParsedIntent {
  return {
    patternType: brief.journeyType,
    domain: brief.audience,
    subject: brief.userGoal.replace(/^[A-Z][a-z]+\s/, '').toLowerCase(),
    actions: brief.mainActions.map((a) => a.toLowerCase()),
    hasMultiStep: brief.mainPages.length > 3,
    complexity:
      brief.mainPages.length > 5
        ? 'complex'
        : brief.mainPages.length > 2
          ? 'moderate'
          : 'simple',
    suggestedPages: brief.mainPages,
    suggestedStates: brief.keyStates as ParsedIntent['suggestedStates'],
  };
}
