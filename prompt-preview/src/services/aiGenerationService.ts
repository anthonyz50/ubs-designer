/**
 * AI Generation Service
 *
 * Service layer for generating UBS-branded UI from natural language prompts.
 *
 * Currently uses local mock generation.
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
 */

import type { UiModel, OutputType, PageType, GenerationResult } from '../types';

// Reference to style guide for future AI integration
// import { ubsStyleGuide } from '../config/ubs-style-guide';

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
    { status: 'operational', message: 'All systems running normally.', incidents: 0 },
    { status: 'degraded', message: 'Some users may experience slower response times.', incidents: 3 },
    { status: 'operational', message: 'Service fully available.', incidents: 0 },
    { status: 'outage', message: 'Service currently unavailable. Engineers are investigating.', incidents: 12 },
    { status: 'maintenance', message: 'Scheduled maintenance window active.', incidents: 0 },
  ];

  return {
    pageType: 'dashboard',
    title: 'Technology service overview',
    intro: 'Review service status, key actions and current support information.',
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
        title: 'Clear browser cache',
        description: 'If you are experiencing slow page loads, clearing your browser cache often resolves the issue.',
        action: 'View instructions',
      },
      {
        title: 'Check service announcements',
        description: 'Planned maintenance and known issues are published on the service health portal.',
        action: 'Open portal',
      },
      {
        title: 'Restart your device',
        description: 'A simple restart can resolve many common connectivity and performance issues.',
      },
    ],
    supportMessage: 'For immediate assistance, contact the Global Service Desk on +44 20 7568 0000 or raise a ticket through ServiceNow.',
  };
}

function generateFormMock(_prompt: string): UiModel {
  return {
    pageType: 'form',
    title: 'Submit a request',
    intro: 'Complete the form below to submit your request. Required fields are marked with an asterisk.',
    form: {
      title: 'Request details',
      description: 'Provide the relevant information for your request.',
      fields: [
        { label: 'Full name', type: 'text', placeholder: 'Enter your full name', required: true },
        { label: 'Email address', type: 'email', placeholder: 'name@ubs.com', required: true },
        { label: 'Department', type: 'select', options: ['Technology', 'Operations', 'Finance', 'Risk', 'HR', 'Other'], required: true },
        { label: 'Request type', type: 'select', options: ['Access request', 'Equipment', 'Software', 'Support', 'Other'] },
        { label: 'Description', type: 'textarea', placeholder: 'Describe your request in detail', required: true },
        { label: 'Priority', type: 'select', options: ['Low', 'Medium', 'High', 'Critical'] },
        { label: 'Preferred contact date', type: 'date' },
        { label: 'I confirm this information is accurate', type: 'checkbox', required: true },
      ],
      submitLabel: 'Submit request',
    },
  };
}

function generateDataTableMock(_prompt: string): UiModel {
  return {
    pageType: 'data-table',
    title: 'Service inventory',
    intro: 'A summary of all registered technology services and their current status.',
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
    title: 'System notifications',
    intro: 'Current alerts and notifications for your attention.',
    notifications: [
      { type: 'warning', title: 'Outlook performance degradation', message: 'Some users are experiencing delayed email delivery. The team is actively investigating. Expected resolution by 14:00 GMT.' },
      { type: 'info', title: 'Scheduled maintenance', message: 'SharePoint will undergo planned maintenance on Saturday 3 May from 02:00 to 06:00 GMT. Service may be intermittently unavailable.' },
      { type: 'success', title: 'VPN upgrade complete', message: 'The VPN infrastructure upgrade has been completed successfully. All regions are now running on the updated platform.' },
      { type: 'error', title: 'Printing service outage', message: 'Floor 3 and Floor 5 printers in the London office are currently offline. Engineers are on site.' },
    ],
  };
}

function generateCardMock(_prompt: string): UiModel {
  return {
    pageType: 'card',
    title: 'Quick actions',
    intro: 'Commonly used services and actions.',
    cards: [
      { title: 'Raise a support ticket', message: 'Submit a request to the service desk for technical assistance.', primaryAction: 'Create ticket' },
      { title: 'Book a meeting room', message: 'Reserve a meeting room or collaboration space at your office.', primaryAction: 'Book now' },
      { title: 'Request software', message: 'Request installation of approved software from the catalogue.', primaryAction: 'Browse catalogue' },
      { title: 'Report an issue', message: 'Flag a problem with a technology service or application.', primaryAction: 'Report', secondaryAction: 'Known issues' },
    ],
  };
}

function generateLandingPageMock(_prompt: string): UiModel {
  return {
    pageType: 'landing-page',
    title: 'Technology Services Hub',
    intro: 'Your central destination for technology support, tools and resources across UBS.',
    cards: [
      { title: 'Service status', message: 'Check the current health of all technology services.', primaryAction: 'View status', metric: '98.5%', metricLabel: 'Overall availability' },
      { title: 'Self-service portal', message: 'Resolve common issues quickly using our guided troubleshooting tools.', primaryAction: 'Get started' },
      { title: 'Knowledge base', message: 'Browse articles, guides and FAQs for all supported applications.', primaryAction: 'Search articles', metric: '2,400+', metricLabel: 'Articles' },
    ],
    recommendations: [
      { title: 'New: Microsoft Copilot', description: 'Microsoft Copilot is now available for all employees. Learn how to get started.', action: 'Learn more' },
      { title: 'Security awareness training', description: 'Complete your mandatory security awareness training by 30 May 2026.', action: 'Start training' },
    ],
    supportMessage: 'Need help? Contact the Global Service Desk on +44 20 7568 0000, available 24/7.',
  };
}

function generateSupportJourneyMock(_prompt: string): UiModel {
  return {
    pageType: 'support-journey',
    title: 'Get help with your issue',
    intro: 'Select the category that best describes your problem and we will guide you to a resolution.',
    cards: [
      { title: 'Connectivity', message: 'Wi-Fi, VPN, network access and remote working issues.', primaryAction: 'Start', icon: 'wifi' },
      { title: 'Email and calendar', message: 'Outlook, Teams meetings, calendar sync and mail delivery.', primaryAction: 'Start', icon: 'mail' },
      { title: 'Software and applications', message: 'Installation, licensing, access requests and crashes.', primaryAction: 'Start', icon: 'apps' },
      { title: 'Hardware', message: 'Laptop, monitor, headset, docking station and peripherals.', primaryAction: 'Start', icon: 'device' },
      { title: 'Account and access', message: 'Password resets, MFA, permissions and account lockouts.', primaryAction: 'Start', icon: 'lock' },
      { title: 'Something else', message: 'Raise a general support request for anything not listed above.', primaryAction: 'Start', icon: 'help' },
    ],
    supportMessage: 'If your issue is urgent or you are unable to work, call the priority line on +44 20 7568 0001.',
  };
}

// ─── Main Service Functions ──────────────────────────────────────────

/**
 * Generate a UiModel from a natural language prompt.
 *
 * Future AI integration point:
 * Replace the mock generation below with a call to Azure AI Foundry or Claude.
 * Send the ubsStyleGuide as system context with the UiModel schema,
 * and parse the AI response into a UiModel object.
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
 * Send the current model JSON plus the refinement instruction to the AI.
 * The AI should return an updated UiModel.
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
 * to the AI along with UBS style guidelines. The AI returns
 * suggestions and an improved UiModel.
 */
export async function reviewExistingPage(
  _input: string,
): Promise<{ suggestions: string[]; model?: UiModel }> {
  await new Promise(resolve => setTimeout(resolve, 600));
  return {
    suggestions: [
      'Consider using UBS RAG status colours for service health indicators.',
      'Ensure all interactive elements have visible focus states.',
      'Spacing should follow the 4px grid consistently.',
      'Use the Frutiger typeface (or Arial fallback) for all text.',
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
