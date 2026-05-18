/**
 * AI Generation Service
 *
 * Generates UBS-branded UI from natural language prompts using Claude Opus
 * via Azure AI Foundry (Anthropic Messages API).
 *
 * Falls back to local mock generation when no API key is configured.
 *
 * Capabilities:
 *   - Generate: create a UiModel from a prompt
 *   - Critique: analyse a design against UBS brand rules and WCAG 2.2 AA
 *   - Suggest alternatives: propose 2-3 design variations with rationale
 *   - Refine: modify an existing design based on instructions
 *   - Review: assess existing HTML/component code for UBS compliance
 */

import type {
  UiModel,
  OutputType,
  PageType,
  GenerationResult,
  DesignCritique,
  DesignAlternative,
} from '../types';
import { ubsStyleGuide } from '../config/ubs-style-guide';

// ─── Configuration ───────────────────────────────────────────────────

const AZURE_ENDPOINT = import.meta.env.VITE_AZURE_ENDPOINT ?? '';
const AZURE_API_KEY = import.meta.env.VITE_AZURE_API_KEY ?? '';
const AZURE_MODEL = import.meta.env.VITE_AZURE_MODEL ?? 'claude-opus-4-7';

/** Check whether AI is configured and available. */
export function isAiConfigured(): boolean {
  return Boolean(AZURE_ENDPOINT && AZURE_API_KEY);
}

// ─── System Prompt ───────────────────────────────────────────────────

function buildSystemPrompt(): string {
  return `You are the world's best UX/UI designer specialising in enterprise banking interfaces for UBS.

You have deep expertise in:
- UBS brand guidelines and visual identity
- WCAG 2.2 Level AA accessibility
- Enterprise dashboard, form, and portal design
- Information architecture and user flows
- Typography, colour theory, and spatial design

## UBS Design System Reference

${JSON.stringify(ubsStyleGuide, null, 2)}

## Your Role

When generating UI, you must:
1. Follow all UBS brand rules exactly (colours, typography, spacing, accessibility)
2. Write copy using the three tone pillars: clear, convincing, with charm
3. Use the 4px spacing grid consistently
4. Ensure all colour combinations meet WCAG 2.2 AA contrast ratios
5. Never use UBS Red (#E60000) for numbers
6. Never use red highlighting in messages
7. Use Frutiger font family with Arial fallback
8. Use RAG colours for status: red (#BD000C), amber (#E4A911), green (#6F7A1A)

When critiquing designs, evaluate against:
- Accessibility (contrast, alt text, heading structure, colour reliance)
- Brand compliance (correct colours, typography rules, logo/impulse rules)
- Tone of voice (clear, benefit-led, personal, no jargon)
- Layout (spacing grid, visual hierarchy, responsive behaviour)
- Interaction design (clear CTAs, logical flow, feedback states)

When suggesting alternatives, provide genuinely different approaches:
- Different layout structures (grid vs list, card vs table)
- Different content hierarchies (what to emphasise)
- Different interaction patterns (progressive disclosure, tabs, accordions)
Always explain your reasoning.

## Response Format

Always respond with valid JSON matching the requested schema. No markdown wrapping, no code fences, just raw JSON.

Use UK English throughout (colour, centre, organisation, etc.).`;
}

// ─── UiModel Schema for Claude ───────────────────────────────────────

function getUiModelSchema(): string {
  return `{
  "pageType": "dashboard" | "form" | "card" | "landing-page" | "support-journey" | "data-table" | "notification",
  "title": "string",
  "intro": "string (optional)",
  "cards": [{ "title": "string", "status": "operational|degraded|outage|maintenance (optional)", "message": "string (optional)", "primaryAction": "string (optional)", "secondaryAction": "string (optional)", "metric": "string (optional)", "metricLabel": "string (optional)", "icon": "string (optional)" }],
  "form": { "title": "string (optional)", "description": "string (optional)", "fields": [{ "label": "string", "type": "text|email|select|textarea|checkbox|date", "placeholder": "string (optional)", "required": "boolean (optional)", "options": ["string"] }], "submitLabel": "string (optional)" },
  "table": { "columns": [{ "key": "string", "label": "string", "align": "left|centre|right (optional)" }], "rows": [{ "key": "value" }] },
  "notifications": [{ "type": "info|success|warning|error", "title": "string", "message": "string", "action": "string (optional)" }],
  "recommendations": [{ "title": "string", "description": "string", "action": "string (optional)" }],
  "supportMessage": "string (optional)",
  "footerText": "string (optional)"
}`;
}

// ─── Claude API Call ─────────────────────────────────────────────────

interface ClaudeMessage {
  role: 'user' | 'assistant';
  content: string;
}

async function callClaude(
  messages: ClaudeMessage[],
  maxTokens: number = 8192,
): Promise<string> {
  // Azure AI Foundry uses the Anthropic Messages API at:
  // {baseURL}/v1/messages
  // Auth via api-key header, plus anthropic-version header.
  const baseUrl = AZURE_ENDPOINT.replace(/\/+$/, '');
  const url = `${baseUrl}/v1/messages`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': AZURE_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: AZURE_MODEL,
      max_tokens: maxTokens,
      system: buildSystemPrompt(),
      messages,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Claude API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();

  // Anthropic Messages API response format
  if (data.content && Array.isArray(data.content)) {
    const textBlock = data.content.find(
      (block: { type: string; text?: string }) => block.type === 'text',
    );
    if (textBlock?.text) {
      return textBlock.text;
    }
  }

  throw new Error('Unexpected Claude response format');
}

/** Extract JSON from a response that might have markdown fences or extra text. */
function extractJson(text: string): string {
  // Try to find JSON in code fences first
  const fenceMatch = text.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/);
  if (fenceMatch) return fenceMatch[1].trim();

  // Try to find a JSON object or array
  const jsonMatch = text.match(/(\{[\s\S]*\}|\[[\s\S]*\])/);
  if (jsonMatch) return jsonMatch[1].trim();

  return text.trim();
}

// ─── Mock Fallback (when AI is not configured) ───────────────────────

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

function generateFormMock(): UiModel {
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

function generateDataTableMock(): UiModel {
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
      ],
    },
  };
}

function generateNotificationMock(): UiModel {
  return {
    pageType: 'notification',
    title: 'What you need to know right now',
    intro: 'Current alerts and updates that may affect you.',
    notifications: [
      { type: 'warning', title: 'Outlook is slower than usual', message: 'Some emails are taking longer to deliver. We are investigating and expect this to be resolved by 14:00 GMT.' },
      { type: 'info', title: 'SharePoint maintenance this Saturday', message: 'We are upgrading SharePoint on 3 May from 02:00 to 06:00 GMT. You may not be able to access files during this time.' },
      { type: 'success', title: 'VPN upgrade complete', message: 'Good news: the VPN upgrade is finished. All regions are now on the new platform.' },
      { type: 'error', title: 'Printers offline in London', message: 'Floor 3 and Floor 5 printers are currently down. Our engineers are on site.' },
    ],
  };
}

function generateCardMock(): UiModel {
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

function generateLandingPageMock(): UiModel {
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

function generateSupportJourneyMock(): UiModel {
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

function generateMock(prompt: string, pageType?: PageType): UiModel {
  const resolvedType = pageType ?? inferPageType(prompt);
  switch (resolvedType) {
    case 'dashboard': return generateDashboardMock(prompt);
    case 'form': return generateFormMock();
    case 'data-table': return generateDataTableMock();
    case 'notification': return generateNotificationMock();
    case 'landing-page': return generateLandingPageMock();
    case 'support-journey': return generateSupportJourneyMock();
    default: return generateCardMock();
  }
}

// ─── AI-Powered Generation ──────────────────────────────────────────

async function generateWithAi(
  prompt: string,
  outputType: OutputType,
  pageType?: PageType,
): Promise<GenerationResult> {
  const pageTypeHint = pageType ? `\nPage type: ${pageType}` : '';

  const userMessage = `Generate a UBS-branded UI for the following request. Return a JSON object with this exact structure:

{
  "model": <UiModel matching the schema below>,
  "critique": [
    {
      "category": "accessibility" | "branding" | "typography" | "layout" | "tone" | "colour" | "spacing" | "interaction",
      "severity": "error" | "warning" | "suggestion",
      "title": "short title",
      "description": "what the issue is",
      "recommendation": "how to fix or improve it"
    }
  ],
  "alternatives": [
    {
      "title": "short name for this alternative approach",
      "rationale": "why this alternative could work better",
      "model": <UiModel>
    }
  ],
  "reasoning": "brief explanation of your design decisions"
}

UiModel schema:
${getUiModelSchema()}

User request: ${prompt}${pageTypeHint}
Output type preference: ${outputType}

Requirements:
- Generate the primary model that best fits the request
- Include 3-5 critique points evaluating your own design against UBS rules
- Include 2 alternative approaches with different layouts or content strategies
- Use UK English throughout
- All copy must follow the UBS tone of voice (clear, convincing, with charm)
- Ensure WCAG 2.2 AA compliance in colour and structure choices`;

  const responseText = await callClaude([{ role: 'user', content: userMessage }]);
  const json = extractJson(responseText);
  const parsed = JSON.parse(json);

  // Validate and extract
  const model: UiModel = parsed.model ?? parsed;
  const critique: DesignCritique[] = parsed.critique ?? [];
  const alternatives: DesignAlternative[] = parsed.alternatives ?? [];
  const reasoning: string = parsed.reasoning ?? '';

  return {
    model,
    outputType,
    generatedAt: new Date().toISOString(),
    critique,
    alternatives,
    reasoning,
  };
}

// ─── Public API ──────────────────────────────────────────────────────

/**
 * Generate a UiModel from a natural language prompt.
 *
 * Uses Claude Opus via Azure AI Foundry when configured,
 * falls back to local mock generation otherwise.
 */
export async function generateUiFromPrompt(
  prompt: string,
  outputType: OutputType,
  pageType?: PageType,
): Promise<GenerationResult> {
  if (isAiConfigured()) {
    return generateWithAi(prompt, outputType, pageType);
  }

  // Mock fallback
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 600));
  return {
    model: generateMock(prompt, pageType),
    outputType,
    generatedAt: new Date().toISOString(),
  };
}

/**
 * Critique an existing design against UBS guidelines.
 *
 * Analyses the model for accessibility, branding, typography, layout,
 * tone of voice, and interaction design issues.
 */
export async function critiqueDesign(
  model: UiModel,
): Promise<{ critique: DesignCritique[]; summary: string }> {
  if (!isAiConfigured()) {
    return {
      critique: [
        { category: 'accessibility', severity: 'warning', title: 'Check contrast ratios', description: 'Ensure all text meets WCAG 2.2 AA: 4.5:1 for standard text, 3:1 for large text.', recommendation: 'Test all colour combinations with the Colour Contrast Analyser.' },
        { category: 'tone', severity: 'suggestion', title: 'Review copy tone', description: 'Ensure all copy follows the three pillars: clear, convincing, with charm.', recommendation: 'Read copy aloud. If it sounds like a robot, rewrite it.' },
        { category: 'branding', severity: 'error', title: 'Verify UBS Red usage', description: 'UBS Red must never be used for numbers or for highlighting in messages.', recommendation: 'Check all red-coloured elements. Use RAG colours for status instead.' },
        { category: 'spacing', severity: 'suggestion', title: 'Check 4px grid alignment', description: 'All spacing should follow the 4px grid: 0, 4, 8, 12, 16, 24, 32, 48, 64, 96.', recommendation: 'Inspect spacing values and round to the nearest grid value.' },
      ],
      summary: 'AI not configured. Showing standard UBS compliance checklist. Connect Claude Opus for detailed design-specific analysis.',
    };
  }

  const userMessage = `Critique the following UBS UI design. Evaluate it thoroughly against:

1. WCAG 2.2 Level AA accessibility (contrast, heading structure, alt text, colour reliance)
2. UBS brand compliance (colours, typography rules, logo/impulse rules)
3. Tone of voice (clear, convincing, with charm pillars)
4. Layout and spacing (4px grid, visual hierarchy, responsive considerations)
5. Interaction design (CTAs, flow, feedback states)
6. Typography (hierarchy usage, font weights, size rules)

Return a JSON object:
{
  "critique": [
    {
      "category": "accessibility" | "branding" | "typography" | "layout" | "tone" | "colour" | "spacing" | "interaction",
      "severity": "error" | "warning" | "suggestion",
      "title": "short title",
      "description": "what the issue is",
      "recommendation": "specific, actionable fix"
    }
  ],
  "summary": "2-3 sentence overall assessment"
}

Be thorough but constructive. Prioritise errors over warnings over suggestions.

Design to critique:
${JSON.stringify(model, null, 2)}`;

  const responseText = await callClaude([{ role: 'user', content: userMessage }]);
  const json = extractJson(responseText);
  const parsed = JSON.parse(json);

  return {
    critique: parsed.critique ?? [],
    summary: parsed.summary ?? '',
  };
}

/**
 * Suggest alternative design approaches for the same requirements.
 *
 * Returns 2-3 genuinely different layouts with rationale.
 */
export async function suggestAlternatives(
  model: UiModel,
  originalPrompt: string,
): Promise<DesignAlternative[]> {
  if (!isAiConfigured()) {
    return [];
  }

  const userMessage = `Given this UBS UI design and the original prompt, suggest 3 genuinely different alternative approaches.

Each alternative should use a different:
- Layout structure (grid vs list, card vs table, single-column vs multi-column)
- Content hierarchy (what to emphasise, what to de-emphasise)
- Interaction pattern (progressive disclosure, tabs, accordions, wizards)

Return a JSON array:
[
  {
    "title": "short name for this approach",
    "rationale": "2-3 sentences explaining why this approach could work better for certain users or contexts",
    "model": <UiModel matching the standard schema>
  }
]

Original prompt: ${originalPrompt}

Current design:
${JSON.stringify(model, null, 2)}

UiModel schema:
${getUiModelSchema()}`;

  const responseText = await callClaude([{ role: 'user', content: userMessage }]);
  const json = extractJson(responseText);
  return JSON.parse(json);
}

/**
 * Refine an existing UiModel based on a natural language instruction.
 */
export async function refineUiFromInstruction(
  currentModel: UiModel,
  instruction: string,
): Promise<UiModel> {
  if (!isAiConfigured()) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { ...currentModel };
  }

  const userMessage = `Modify this UBS UI design based on the following instruction. Return the complete updated UiModel as JSON.

Instruction: ${instruction}

Current design:
${JSON.stringify(currentModel, null, 2)}

UiModel schema:
${getUiModelSchema()}

Apply the change while maintaining UBS brand compliance, WCAG 2.2 AA accessibility, and tone of voice standards.`;

  const responseText = await callClaude([{ role: 'user', content: userMessage }]);
  const json = extractJson(responseText);
  return JSON.parse(json);
}

/**
 * Review existing HTML/code and suggest UBS-compliant improvements.
 */
export async function reviewExistingPage(
  input: string,
): Promise<{ suggestions: string[]; model?: UiModel }> {
  if (!isAiConfigured()) {
    await new Promise(resolve => setTimeout(resolve, 600));
    return {
      suggestions: [
        'Use RAG status colours (red #BD000C, amber #E4A911, green #6F7A1A) for service health.',
        'Check all text meets WCAG 2.2 AA contrast: 4.5:1 for standard text, 3:1 for large text.',
        'Follow the 4px spacing grid consistently.',
        'Use Frutiger (or Arial fallback) for all text.',
        'Ensure copy follows the tone of voice: clear, benefit-led, no jargon.',
        'Never use UBS Red for numbers or for highlighting in messages.',
      ],
    };
  }

  const userMessage = `Review this existing page/component and suggest improvements to make it UBS-compliant.

Evaluate against the full UBS style guide (colours, typography, accessibility, tone, layout).

Return a JSON object:
{
  "suggestions": ["actionable improvement 1", "actionable improvement 2", ...],
  "model": <optional UiModel representing the improved version>
}

Input to review:
${input}

UiModel schema (for the improved version):
${getUiModelSchema()}`;

  const responseText = await callClaude([{ role: 'user', content: userMessage }]);
  const json = extractJson(responseText);
  return JSON.parse(json);
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
