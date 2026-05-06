// ============================================================
// Site Critique & Redesign Service
// Analyses existing sites (via URL or screenshot) against UBS
// design standards, then generates an improved alternative.
// ============================================================

const AI_ENDPOINT =
  import.meta.env.VITE_AI_ENDPOINT ||
  'https://ai-gregpanayi-4410.services.ai.azure.com/anthropic/v1/messages';
const AI_API_KEY = import.meta.env.VITE_AI_API_KEY || '';

// ─── Types ───────────────────────────────────────────────────

export interface CritiqueIssue {
  category: 'branding' | 'typography' | 'layout' | 'colour' | 'accessibility' | 'ux' | 'content' | 'responsiveness';
  severity: 'critical' | 'major' | 'minor' | 'suggestion';
  title: string;
  description: string;
  recommendation: string;
}

export interface CritiqueResult {
  summary: string;
  overallScore: number; // 0-100
  scores: {
    branding: number;
    typography: number;
    layout: number;
    colour: number;
    accessibility: number;
    ux: number;
    content: number;
    responsiveness: number;
  };
  issues: CritiqueIssue[];
  strengths: string[];
  redesignHtml: string;
  redesignNotes: string;
  originalUrl?: string;
  analysedAt: string;
  tokensUsed?: number;
}

export interface CritiqueInput {
  url?: string;
  screenshot?: string; // base64 data URL
  htmlContent?: string; // raw HTML from URL fetch
  additionalContext?: string; // user notes about what to focus on
}

// ─── System Prompt ───────────────────────────────────────────

const CRITIQUE_SYSTEM_PROMPT = `You are a senior UX designer at UBS. You analyse existing web pages and provide detailed critiques against UBS design standards, then generate an improved alternative.

## Your Task
1. Analyse the provided page (screenshot and/or HTML)
2. Score it against UBS design standards
3. Identify specific issues with severity ratings
4. Note what works well (strengths)
5. Generate a complete redesigned HTML alternative using Bootstrap 5 + UBS theming

## Scoring Categories (0-100 each)
- **Branding**: UBS visual identity, logo usage, brand consistency
- **Typography**: Font choices, hierarchy, readability, weight usage
- **Layout**: Grid system, spacing, alignment, visual rhythm
- **Colour**: UBS palette adherence, contrast ratios, colour harmony
- **Accessibility**: WCAG compliance, semantic HTML, screen reader support
- **UX**: Usability, navigation clarity, interaction patterns, CTA effectiveness
- **Content**: Copy quality, tone of voice, information architecture
- **Responsiveness**: Mobile-friendliness, breakpoint handling, touch targets

## Issue Severities
- **critical**: Breaks brand guidelines or accessibility standards
- **major**: Significantly impacts user experience or brand perception
- **minor**: Noticeable but not harmful, polish issue
- **suggestion**: Enhancement opportunity, not a deficiency

## UBS Design Standards Reference

### Colours
- Primary brand: #E60000 (UBS Red) for CTAs, active states, accents
- Text primary: #1C1C1C (near-black)
- Text secondary: #5A5D5C
- Text tertiary: #7A7870
- Background primary: #FFFFFF
- Background cream: #F4F3EE (footer, alternate sections)
- Background pastel I: #ECEBE4
- Background pastel II: #F5F0E1
- Border primary: #B8B3A2
- Bordeaux I: #BD000C (hover on red)
- Bordeaux II: #8A000A (active/pressed)

### Typography
- Font: Frutiger / Helvetica Neue / Arial
- H1: 2.5rem, weight 300 (light)
- H2: 2rem, weight 300
- H3: 1.5rem, weight 400
- Body: 16px, weight 400
- Headings always use light weight (300) for the UBS editorial feel

### Layout Principles
- Clean whitespace, generous padding
- Alternate white/cream sections for visual rhythm
- Maximum one primary CTA per section
- Cards in responsive grids (col-lg-4 col-md-6)
- Mobile-first responsive design

### UX Principles
- Simplicity over complexity
- Clear visual hierarchy
- Benefit-driven CTAs (not "Click here")
- Scannable content with headings
- Consistent interaction patterns

## Output Format
Return a JSON object (no markdown fences, just raw JSON):
{
  "summary": "2-3 sentence executive summary of the critique",
  "overallScore": 72,
  "scores": {
    "branding": 60,
    "typography": 75,
    "layout": 80,
    "colour": 65,
    "accessibility": 70,
    "ux": 78,
    "content": 72,
    "responsiveness": 68
  },
  "issues": [
    {
      "category": "branding",
      "severity": "major",
      "title": "Non-standard primary colour",
      "description": "The page uses #FF0000 instead of UBS Red #E60000",
      "recommendation": "Replace all instances of #FF0000 with the official UBS Red #E60000"
    }
  ],
  "strengths": [
    "Clean card-based layout with good information grouping",
    "Responsive grid properly handles mobile breakpoints"
  ],
  "redesignHtml": "<nav class='navbar'>...</nav><section>...</section>",
  "redesignNotes": "Key changes made in the redesign: 1) Updated colour palette to UBS standards..."
}

The redesignHtml should be complete, production-ready HTML using Bootstrap 5 classes and UBS CSS classes (.bg-ubs-cream, .text-ubs-red, .ubs-section-white, etc.). It should preserve the original page's purpose and content while fixing all identified issues.`;

// ─── URL-based HTML Fetching ─────────────────────────────────

/**
 * Fetches HTML content from a URL.
 * Uses the Vite dev server proxy at /api/fetch-page to avoid CORS issues.
 * Falls back to direct fetch and public CORS proxies.
 */
export async function fetchPageHtml(url: string): Promise<string | null> {
  // 1. Try local Vite proxy (runs server-side, no CORS issues)
  try {
    const proxyUrl = `/api/fetch-page?url=${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);
    if (response.ok) {
      const text = await response.text();
      // Check it's actually HTML, not an error JSON
      if (text.trim().startsWith('<') || text.includes('<!DOCTYPE') || text.includes('<html')) {
        return text;
      }
    }
  } catch {
    // Proxy not available (e.g. production build), fall through
  }

  // 2. Try direct fetch (works for same-origin or CORS-enabled sites)
  try {
    const response = await fetch(url, {
      headers: { Accept: 'text/html' },
    });
    if (response.ok) {
      return await response.text();
    }
  } catch {
    // CORS blocked, fall through
  }

  // 3. Try allorigins CORS proxy
  try {
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);
    if (response.ok) {
      return await response.text();
    }
  } catch {
    // Proxy failed
  }

  // 4. Try corsproxy.io as last resort
  try {
    const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);
    if (response.ok) {
      return await response.text();
    }
  } catch {
    // All methods failed
  }

  return null;
}

// ─── Screenshot Capture via DOM ──────────────────────────────

/**
 * Captures a screenshot of a URL by rendering it in a hidden iframe
 * and using html2canvas. Returns a base64 data URL or null.
 * Note: This only works for CORS-friendly pages.
 */
export async function captureScreenshot(url: string): Promise<string | null> {
  // For now, screenshots from URLs require the user to provide them
  // since cross-origin iframe rendering is heavily restricted.
  // The screenshot upload path handles this case.
  return null;
}

// ─── AI Critique Call ────────────────────────────────────────

export async function critiquePage(input: CritiqueInput): Promise<CritiqueResult> {
  if (!AI_API_KEY) {
    throw new Error('API key not configured. Set VITE_AI_API_KEY in your .env file.');
  }

  // Build the content array for the message
  const contentParts: Array<{ type: string; [key: string]: unknown }> = [];

  // Add screenshot if provided (vision input)
  if (input.screenshot) {
    // Extract base64 data and media type from data URL
    const match = input.screenshot.match(/^data:(image\/[^;]+);base64,(.+)$/);
    if (match) {
      contentParts.push({
        type: 'image',
        source: {
          type: 'base64',
          media_type: match[1],
          data: match[2],
        },
      });
    }
  }

  // Build text prompt
  let textPrompt = 'Analyse this web page and provide a detailed UBS design critique with a redesigned alternative.\n\n';

  if (input.url) {
    textPrompt += `**Source URL:** ${input.url}\n\n`;
  }

  if (input.htmlContent) {
    // Truncate very large HTML to stay within token limits
    const maxHtmlChars = 15000;
    const html = input.htmlContent.length > maxHtmlChars
      ? input.htmlContent.slice(0, maxHtmlChars) + '\n\n<!-- HTML truncated for analysis -->'
      : input.htmlContent;
    textPrompt += `**Page HTML:**\n\`\`\`html\n${html}\n\`\`\`\n\n`;
  }

  if (input.additionalContext) {
    textPrompt += `**Additional context from the reviewer:** ${input.additionalContext}\n\n`;
  }

  if (!input.screenshot && !input.htmlContent) {
    throw new Error('Please provide either a screenshot or a URL to analyse.');
  }

  if (input.screenshot) {
    textPrompt += 'I have provided a screenshot of the page above. Please analyse both the visual design and any HTML provided.';
  } else {
    textPrompt += 'Please analyse the HTML provided and critique the design based on the code structure, styling, and content.';
  }

  contentParts.push({ type: 'text', text: textPrompt });

  const response = await fetch(AI_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': AI_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-opus-4-6',
      max_tokens: 12000,
      system: CRITIQUE_SYSTEM_PROMPT,
      messages: [{ role: 'user', content: contentParts }],
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
    throw new Error(`AI API error: ${response.status} — ${details}`);
  }

  const data = await response.json();
  const rawContent = data.content?.[0]?.text || '';

  // Parse the JSON response
  let parsed: CritiqueResult;
  try {
    // Try to extract JSON from the response (in case it's wrapped in markdown)
    const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in response');
    }
    parsed = JSON.parse(jsonMatch[0]);
  } catch (parseErr) {
    console.error('Failed to parse critique response:', rawContent);
    throw new Error('Failed to parse AI critique response. The model may have returned an unexpected format.');
  }

  return {
    ...parsed,
    originalUrl: input.url,
    analysedAt: new Date().toISOString(),
    tokensUsed: data.usage?.output_tokens,
  };
}
