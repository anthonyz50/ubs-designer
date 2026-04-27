/**
 * AI Generation Service
 *
 * Service layer for generating UBS-branded UI from natural language prompts.
 *
 * Currently uses local mock generation. All mock content follows the UBS
 * tone of voice pillars: clear (simple, direct, scannable), convincing
 * (benefit-led, no jargon), and with charm (engaging, personal).
 *
 * The ubsStyleGuide (src/config/ubs-style-guide.ts) contains the full
 * UBS design system reference, including:
 *   - Complete colour palette (corporate, grays, bordeaux, bronze, pastels,
 *     dark mode, RAG status, trading, metallic silver, 20 chart colours)
 *   - Typography: Frutiger font family, 5 weights, 16-level hierarchy,
 *     web-optimised sizes, and typography rules
 *   - Accessibility: WCAG 2.2 Level AA, contrast ratios (4.5:1 text,
 *     3:1 large text, 3:1 icons/graphics)
 *   - Tone of voice: three pillars (clear, convincing, with charm),
 *     brand personality traits, messaging principle (1-2 punch)
 *   - Layout: impulse, logo, key symbol, moving frame, grid rules
 *   - 4px spacing grid, breakpoints (320, 768, 1024, 1440)
 *
 * Integration points for future AI backends:
 *
 * Azure AI Foundry:
 *   Replace the mock logic in generateUiFromPrompt() with a call to
 *   the Azure OpenAI endpoint. Pass the ubsStyleGuide as system context
 *   and the user prompt as the user message. Parse the response as UiModel JSON.
 *
 *   Example:
 *   const response = await fetch(AZURE_ENDPOINT, {
 *     method: 'POST',
 *     headers: { 'api-key': AZURE_API_KEY, 'Content-Type': 'application/json' },
 *     body: JSON.stringify({
 *       messages: [
 *         { role: 'system', content: buildSystemPrompt(ubsStyleGuide) },
 *         { role: 'user', content: prompt }
 *       ]
 *     })
 *   });
 *
 * Claude (Anthropic):
 *   Replace with a call to the Claude Messages API or via AWS Bedrock.
 *   Include the UBS style guide and UI model schema in the system prompt.
 *   Request JSON output matching the UiModel interface.
 *
 * When building the system prompt, include:
 *   1. The full ubsStyleGuide object (colours, typography, accessibility)
 *   2. The UiModel TypeScript interface as the response schema
 *   3. Tone of voice pillars as writing instructions
 *   4. Typography hierarchy for heading and text sizing decisions
 *   5. Accessibility rules (WCAG 2.2 AA, contrast ratios, alt text)
 */

import type { UiModel, OutputType, PageType, GenerationResult } from '../types';

// ─── Mock Prompt Analysis ────────────────────────────────────────────

function inferPageType(prompt: string): PageType {
  const lower = prompt.toLowerCase();
  if (lower.includes('dashboard') || lower.includes('status') || lower.includes('overview')) return 'dashboard';
  if (lower.includes('form') || lower.includes('submit') || lower.includes('register')) return 'form';
  if (lower.includes('table') || lower.includes('data') || lower.includes('list')) return 'data-table';
  if (lower.includes('landing') || lower.includes('welcome') || lower.includes('hero')) return 'landing-page';
  if (lower.includes('support') || lower.includes('help') || lower.includes('journey')) return 'support-journey';
  if (lower.includes('notification') || lower.includes('alert') || lower.includes('message')) return 'notification';
  return 'card';
}

// ─── Mock Generators ─────────────────────────────────────────────────
//
// All mock text follows the UBS tone of voice:
//   Clear: short sentences, main point first, no jargon
//   Convincing: benefit-led, concrete, from the reader's view
//   With charm: personal ("we", "you"), engaging, natural

function generateDashboardMock(prompt: string): UiModel {
  const services: string[] = [];
  const serviceKeywords: Record<string, string> = {
    'teams': 'Microsoft Teams',
    'outlook': 'Outlook',
    'email': 'Outlook',
    'wifi': 'Wi-Fi',
    'wi-fi': 'Wi-Fi',
    'vpn': 'VPN',
    'sharepoint': 'SharePoint',
    'onedrive': 'OneDrive',
    'slack': 'Slack',
    'zoom': 'Zoom',
    'network': 'Network',
    'printer': 'Printing Services',
    'citrix': 'Citrix',
    'salesforce': 'Salesforce',
  };

  const lower = prompt.toLowerCase();
  for (const [keyword, name] of Object.entries(serviceKeywords)) {
    if (lower.includes(keyword) && !services.includes(name)) {
      services.push(name);
    }
  }

  if (services.length === 0) {
    services.push('Microsoft Teams', 'Outlook', 'Wi-Fi');
  }

  const statuses: Array<{ status: 'operational' | 'degraded' | 'outage' | 'maintenance'; message: string; incidents: number }> = [
    { status: 'operational', message: 'Everything is running smoothly.', incidents: 0 },
    { status: 'degraded', message: 'Some users may notice slower responses. We are on it.', incidents: 3 },
    { status: 'operational', message: 'Fully available. No issues to report.', incidents: 0 },
    { status: 'outage', message: 'Currently unavailable. Our engineers are investigating.', incidents: 12 },
    { status: 'maintenance', message: 'Planned maintenance is under way. We will be back shortly.', incidents: 0 },
  ];

  return {
    pageType: 'dashboard',
    title: 'Your technology services at a glance',
    intro: 'See what is working, what needs attention, and how to get help.',
    cards: services.map((name, i) => ({
      title: name,
      status: statuses[i % statuses.length].status,
      message: statuses[i % statuses.length].message,
      metric: String(statuses[i % statuses.length].incidents),
      metricLabel: 'Active incidents',
      primaryAction: 'View details',
      secondaryAction: 'Run diagnostics',
    })),
    recommendations: [
      {
        title: 'Clear your browser cache',
        description: 'Slow page loads? Clearing your cache usually fixes it in seconds.',
        action: 'View instructions',
      },
      {
        title: 'Check service announcements',
        description: 'Planned maintenance and known issues are published here first.',
        action: 'Open portal',
      },
      {
        title: 'Restart your device',
        description: 'A quick restart resolves most connectivity and performance issues.',
      },
    ],
    supportMessage: 'Need help now? Call us on +44 20 7568 0000 or raise a ticket through ServiceNow.',
  };
}

function generateFormMock(_prompt: string): UiModel {
  return {
    pageType: 'form',
    title: 'Tell us what you need',
    intro: 'Fill in the details below and we will get back to you. Required fields are marked with an asterisk.',
    form: {
      title: 'Your request',
      description: 'The more detail you provide, the faster we can help.',
      fields: [
        { label: 'Full name', type: 'text', placeholder: 'Enter your full name', required: true },
        { label: 'Email address', type: 'email', placeholder: 'name@ubs.com', required: true },
        { label: 'Department', type: 'select', options: ['Technology', 'Operations', 'Finance', 'Risk', 'HR', 'Other'], required: true },
        { label: 'What do you need?', type: 'select', options: ['Access request', 'Equipment', 'Software', 'Support', 'Other'] },
        { label: 'Description', type: 'textarea', placeholder: 'Describe what you need and why', required: true },
        { label: 'Priority', type: 'select', options: ['Low', 'Medium', 'High', 'Critical'] },
        { label: 'Best date to contact you', type: 'date' },
        { label: 'I confirm this information is accurate', type: 'checkbox', required: true },
      ],
      submitLabel: 'Send request',
    },
  };
}

function generateDataTableMock(_prompt: string): UiModel {
  return {
    pageType: 'data-table',
    title: 'Service inventory',
    intro: 'All registered technology services and their current status, in one place.',
    table: {
      columns: [
        { key: 'name', label: 'Service name' },
        { key: 'owner', label: 'Owner' },
        { key: 'status', label: 'Status' },
        { key: 'uptime', label: 'Uptime (30d)', align: 'right' },
        { key: 'incidents', label: 'Incidents', align: 'right' },
        { key: 'lastReviewed', label: 'Last reviewed' },
      ],
      rows: [
        { name: 'Microsoft Teams', owner: 'Unified Comms', status: 'Operational', uptime: '99.98%', incidents: 0, lastReviewed: '25 Apr 2026' },
        { name: 'Outlook', owner: 'Messaging', status: 'Degraded', uptime: '99.71%', incidents: 3, lastReviewed: '24 Apr 2026' },
        { name: 'Wi-Fi', owner: 'Network Infra', status: 'Operational', uptime: '99.99%', incidents: 0, lastReviewed: '25 Apr 2026' },
        { name: 'VPN', owner: 'Network Infra', status: 'Operational', uptime: '99.95%', incidents: 1, lastReviewed: '23 Apr 2026' },
        { name: 'SharePoint', owner: 'Collaboration', status: 'Maintenance', uptime: '99.80%', incidents: 0, lastReviewed: '22 Apr 2026' },
        { name: 'Citrix', owner: 'Desktop Services', status: 'Operational', uptime: '99.92%', incidents: 2, lastReviewed: '25 Apr 2026' },
      ],
    },
  };
}

function generateNotificationMock(_prompt: string): UiModel {
  return {
    pageType: 'notification',
    title: 'What you need to know right now',
    intro: 'Current alerts and updates that may affect you.',
    notifications: [
      { type: 'warning', title: 'Outlook is slower than usual', message: 'Some emails are taking longer to deliver. We are investigating and expect this to be resolved by 14:00 GMT.' },
      { type: 'info', title: 'SharePoint maintenance this Saturday', message: 'We are upgrading SharePoint on 3 May from 02:00 to 06:00 GMT. You may not be able to access files during this time.' },
      { type: 'success', title: 'VPN upgrade complete', message: 'Good news: the VPN upgrade is finished. All regions are now on the new platform, and connections should feel faster.' },
      { type: 'error', title: 'Printers offline in London', message: 'Floor 3 and Floor 5 printers are currently down. Our engineers are on site and working to bring them back.' },
    ],
  };
}

function generateCardMock(_prompt: string): UiModel {
  return {
    pageType: 'card',
    title: 'What would you like to do?',
    intro: 'Pick an action to get started.',
    cards: [
      { title: 'Raise a support ticket', message: 'Got a problem? Tell us and we will sort it out.', primaryAction: 'Create ticket' },
      { title: 'Book a meeting room', message: 'Find and reserve a room at your office.', primaryAction: 'Book now' },
      { title: 'Request software', message: 'Browse our catalogue and request the tools you need.', primaryAction: 'Browse catalogue' },
      { title: 'Report an issue', message: 'Something not working? Let us know so we can fix it.', primaryAction: 'Report', secondaryAction: 'Known issues' },
    ],
  };
}

function generateLandingPageMock(_prompt: string): UiModel {
  return {
    pageType: 'landing-page',
    title: 'Technology Services Hub',
    intro: 'Your starting point for tech support, tools and resources.',
    cards: [
      { title: 'Service status', message: 'See how our services are performing right now.', primaryAction: 'View status', metric: '98.5%', metricLabel: 'Overall availability' },
      { title: 'Fix it yourself', message: 'Our guided tools help you resolve common issues in minutes.', primaryAction: 'Get started' },
      { title: 'Knowledge base', message: 'Answers to your questions, written in plain language.', primaryAction: 'Search articles', metric: '2,400+', metricLabel: 'Articles' },
    ],
    recommendations: [
      { title: 'New: Microsoft Copilot', description: 'Copilot is now available for everyone. It saves you time on everyday tasks.', action: 'Learn more' },
      { title: 'Security training due', description: 'Complete your mandatory security awareness training by 30 May 2026.', action: 'Start training' },
    ],
    supportMessage: 'Need help? Call us on +44 20 7568 0000. We are here 24/7.',
  };
}

function generateSupportJourneyMock(_prompt: string): UiModel {
  return {
    pageType: 'support-journey',
    title: 'How can we help?',
    intro: 'Choose the topic that best describes your problem. We will guide you to a fix.',
    cards: [
      { title: 'Connectivity', message: 'Wi-Fi, VPN, network access and remote working.', primaryAction: 'Start', icon: 'wifi' },
      { title: 'Email and calendar', message: 'Outlook, Teams meetings, calendar sync and mail delivery.', primaryAction: 'Start', icon: 'mail' },
      { title: 'Software', message: 'Installation, licensing, access and crashes.', primaryAction: 'Start', icon: 'apps' },
      { title: 'Hardware', message: 'Laptop, monitor, headset and peripherals.', primaryAction: 'Start', icon: 'device' },
      { title: 'Account and access', message: 'Passwords, MFA, permissions and lockouts.', primaryAction: 'Start', icon: 'lock' },
      { title: 'Something else', message: 'Not listed above? We can still help.', primaryAction: 'Start', icon: 'help' },
    ],
    supportMessage: 'Urgent and unable to work? Call our priority line on +44 20 7568 0001.',
  };
}

// ─── Main Service Functions ──────────────────────────────────────────

/**
 * Generate a UiModel from a natural language prompt.
 *
 * Future AI integration point:
 * Replace the mock generation below with a call to Azure AI Foundry or Claude.
 * Send the full ubsStyleGuide (colours, typography hierarchy, accessibility
 * rules, tone of voice pillars) as system context with the UiModel schema,
 * and parse the AI response into a UiModel object.
 *
 * The system prompt should instruct the AI to:
 *   - Follow WCAG 2.2 Level AA (4.5:1 text contrast, 3:1 large text)
 *   - Use the 16-level typography hierarchy for heading decisions
 *   - Write copy using the three tone pillars (clear, convincing, with charm)
 *   - Apply the 4px spacing grid and UBS colour palette
 *   - Never use UBS Red for numbers
 */
export async function generateUiFromPrompt(
  prompt: string,
  outputType: OutputType,
  pageType?: PageType,
): Promise<GenerationResult> {
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 600));

  const resolvedType = pageType ?? inferPageType(prompt);

  let model: UiModel;
  switch (resolvedType) {
    case 'dashboard': model = generateDashboardMock(prompt); break;
    case 'form': model = generateFormMock(prompt); break;
    case 'data-table': model = generateDataTableMock(prompt); break;
    case 'notification': model = generateNotificationMock(prompt); break;
    case 'landing-page': model = generateLandingPageMock(prompt); break;
    case 'support-journey': model = generateSupportJourneyMock(prompt); break;
    default: model = generateCardMock(prompt); break;
  }

  return {
    model,
    outputType,
    generatedAt: new Date().toISOString(),
  };
}

/**
 * Refine an existing UiModel based on a natural language instruction.
 *
 * Future AI integration point:
 * Send the current model JSON plus the refinement instruction to the AI,
 * along with the ubsStyleGuide for context. The AI should return an
 * updated UiModel that still meets accessibility and tone requirements.
 */
export async function refineUiFromInstruction(
  currentModel: UiModel,
  _instruction: string,
): Promise<UiModel> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    ...currentModel,
    title: currentModel.title,
  };
}

/**
 * Review an existing page or component and suggest improvements.
 *
 * Future AI integration point:
 * Send the input (HTML, screenshot description, or component config)
 * to the AI along with the full ubsStyleGuide. The AI returns
 * suggestions covering accessibility, tone, colour usage, typography,
 * and an improved UiModel.
 */
export async function reviewExistingPage(
  _input: string,
): Promise<{ suggestions: string[]; model?: UiModel }> {
  await new Promise(resolve => setTimeout(resolve, 600));
  return {
    suggestions: [
      'Use RAG status colours (red #BD000C, amber #E4A911, green #6F7A1A) for service health.',
      'Check all text meets WCAG 2.2 AA contrast: 4.5:1 for standard text, 3:1 for large text (over 25px).',
      'Follow the 4px spacing grid consistently.',
      'Use Frutiger (or Arial fallback) for all text.',
      'Ensure copy follows the tone of voice: clear, benefit-led, no jargon.',
      'Never use UBS Red for numbers or for highlighting in messages.',
    ],
  };
}

/**
 * Convert a UiModel to React component code.
 */
export async function convertToReact(model: UiModel): Promise<string> {
  const { generateReactCode } = await import('../generators/reactGenerator');
  return generateReactCode(model);
}

/**
 * Convert a UiModel to Angular component code.
 */
export async function convertToAngular(model: UiModel): Promise<string> {
  const { generateAngularCode } = await import('../generators/angularGenerator');
  return generateAngularCode(model);
}

/**
 * Convert a UiModel to standalone HTML/CSS.
 */
export async function convertToHtmlCss(model: UiModel): Promise<string> {
  const { generateHtmlCode } = await import('../generators/htmlGenerator');
  return generateHtmlCode(model);
}
