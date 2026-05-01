// ============================================================
// AI Page Generation Service
// Uses Claude via Azure AI Foundry to generate Bootstrap 5 + UBS
// themed HTML pages from natural language prompts.
// ============================================================

const AI_ENDPOINT =
  import.meta.env.VITE_AI_ENDPOINT ||
  'https://ai-gregpanayi-4410.services.ai.azure.com/anthropic/v1/messages';
const AI_API_KEY = import.meta.env.VITE_AI_API_KEY || '';

// ─── System Prompt ───────────────────────────────────────────

const SYSTEM_PROMPT = `You are a UBS web page designer. You generate complete, production-ready HTML pages using Bootstrap 5 with UBS brand theming.

## Your Output
Return ONLY valid HTML. No markdown, no explanation, no code fences. Just the HTML that goes inside <body>.

## Design System
You use Bootstrap 5 (already loaded) with these UBS brand overrides:

### Colours
- Primary brand: #E60000 (UBS Red) — use for CTAs, active states, accents
- Text primary: #1C1C1C (near-black, NOT pure black)
- Text secondary: #5A5D5C
- Text tertiary: #7A7870
- Background primary: #FFFFFF
- Background cream: #F4F3EE (use for footer, alternate sections)
- Background pastel I: #ECEBE4 (card backgrounds, table stripes)
- Background pastel II: #F5F0E1
- Border primary: #B8B3A2
- Border secondary: #CCCABC
- Bordeaux I: #BD000C (hover on red)
- Bordeaux II: #8A000A (active/pressed on red)

### Typography
- Font: Frutiger / Helvetica Neue / Arial (already set via CSS)
- H1: 2.5rem, weight 300 (light)
- H2: 2rem, weight 300
- H3: 1.5rem, weight 400
- Body: 16px, weight 400
- Small text: 14px
- All headings use light weight (300) for the UBS editorial feel

### UBS-Specific CSS Classes Available
- .bg-ubs-cream, .bg-ubs-pastel-i, .bg-ubs-pastel-ii, .bg-ubs-red
- .text-ubs-red, .text-ubs-secondary, .text-ubs-tertiary
- .border-ubs
- .ubs-impulse (4px red accent line)
- .ubs-section-white, .ubs-section-cream, .ubs-section-pastel, .ubs-section-dark
- .footer-ubs (light cream footer)

### Bootstrap Classes
Use standard Bootstrap 5 classes: container, row, col-*, card, btn-primary, btn-secondary, btn-outline-primary, table, form-control, nav, navbar, accordion, badge, breadcrumb, alert, progress, list-group, etc.

### Button Rules
- Primary action: btn-primary (red)
- Secondary action: btn-secondary (black) or btn-outline-primary
- Tertiary/link: btn-link
- One primary CTA per section maximum

## UX Best Practices (UBS Guidelines)
1. USABILITY: Keep interfaces simple. Reduce choices. Use familiar patterns.
2. CONSISTENCY: Standardise elements. Clear labels (never "click here"). Uniform layout.
3. READABILITY: Plain language. Headings for structure. Line length 50-80 chars. Break up long text.
4. ACCESSIBILITY: Alt text on images. Proper heading hierarchy (H1 > H2 > H3). Semantic HTML.
5. RESPONSIVENESS: Mobile-first. CTA visible on mobile. Use Bootstrap responsive grid.
6. HIERARCHY: Important information first. Visual hierarchy with size/spacing/colour.
7. CTA: One clear primary action per page. Benefit-driven labels. Prominent position.
8. CONTENT: Strong headline (55-65 chars). Scannable. Benefit-focused, not feature-focused.

## Page Structure Pattern
Use this general structure (adapt as needed):

1. Navigation bar (navbar with UBS logo placeholder, nav links)
2. Hero/page header section (H1, subtitle, optional CTA)
3. Content sections (alternate white/cream backgrounds for visual rhythm)
4. Cards in responsive grids for feature/service blocks
5. Data tables for tabular content
6. Forms with proper labels and validation states
7. Footer (.footer-ubs with link columns)

## Content Rules
- Write realistic, professional UBS-style copy (financial services context)
- Use real-seeming data (account numbers like CH93 0076 2011 6238 5295 7, amounts like CHF 1,250,000)
- Use realistic names, dates, and financial terminology
- Never use "Lorem ipsum" or placeholder text
- Headings should be compelling and benefit-focused
- Keep paragraphs short (2-3 sentences max)

## Responsive Grid
- Use col-lg-* for desktop, col-md-* for tablet, col-* for mobile
- Cards: col-lg-4 col-md-6 for 3-column grids
- Sidebar layouts: col-lg-3 + col-lg-9
- Forms: col-lg-6 offset-lg-3 for centred forms
- Always include mobile-friendly spacing (py-4, py-5 for sections)

## Icons
Use Bootstrap Icons via HTML entities or simple text symbols:
- Arrow: &rarr;
- Check: &#10003;
- Phone: &#9742;
- Mail: &#9993;
- Or use descriptive text like [icon: chart], [icon: shield] as placeholders`;

// ─── Types ───────────────────────────────────────────────────

export interface GeneratedPage {
  html: string;
  title: string;
  prompt: string;
  generatedAt: string;
  model: string;
  tokensUsed?: number;
}

export interface GenerationError {
  message: string;
  status?: number;
  details?: string;
}

// ─── API Call ────────────────────────────────────────────────

export async function generatePage(
  prompt: string,
  options?: {
    model?: string;
    maxTokens?: number;
    existingHtml?: string;
  },
): Promise<GeneratedPage> {
  if (!AI_API_KEY) {
    throw new Error(
      'API key not configured. Set VITE_AI_API_KEY in your .env file.',
    );
  }

  const model = options?.model || 'claude-opus-4-6';
  const maxTokens = options?.maxTokens || 8192;

  // Build user message
  let userMessage = prompt;
  if (options?.existingHtml) {
    userMessage = `I have an existing page. Please modify it based on my instructions.

EXISTING PAGE HTML:
${options.existingHtml}

MODIFICATION REQUEST:
${prompt}

Return the complete modified HTML (the full page, not just the changed parts).`;
  }

  const response = await fetch(AI_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': AI_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model,
      max_tokens: maxTokens,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userMessage }],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    let details: string | undefined;
    try {
      const errorJson = JSON.parse(errorText);
      details = errorJson.error?.message || errorText;
    } catch {
      details = errorText;
    }
    throw Object.assign(new Error(`AI API error: ${response.status}`), {
      status: response.status,
      details,
    } as GenerationError);
  }

  const data = await response.json();
  const content = data.content?.[0]?.text || '';

  // Extract a title from the generated HTML
  const titleMatch = content.match(/<h1[^>]*>(.*?)<\/h1>/i);
  const title = titleMatch
    ? titleMatch[1].replace(/<[^>]+>/g, '').trim()
    : prompt.slice(0, 60);

  return {
    html: content,
    title,
    prompt,
    generatedAt: new Date().toISOString(),
    model,
    tokensUsed: data.usage?.output_tokens,
  };
}

// ─── Check if API is configured ─────────────────────────────

export function isAiConfigured(): boolean {
  return Boolean(AI_API_KEY);
}

export function getAiEndpoint(): string {
  return AI_ENDPOINT;
}
