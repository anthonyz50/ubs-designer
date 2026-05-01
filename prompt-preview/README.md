# UBS AI UX Designer

A prompt-to-preview tool that takes natural language descriptions and generates fully rendered UBS-compliant UI designs, complete with journey maps, UX reviews, and production-ready code output.

## What it does

You describe what you need in plain English. The tool interprets your prompt, plans a user journey, generates a complete design model, reviews the UX quality, and outputs code in React, Angular, or HTML/CSS. All output follows UBS design system standards: correct colours, typography, spacing, components, and accessibility guidelines.

## The prompt-to-preview pipeline

The generation process runs through 10 sequential steps:

1. **User enters a prompt** describing the desired UX pattern or journey
2. **Prompt interpretation** analyses the input and produces a structured UX brief (audience, goals, key pages, actions, states)
3. **Journey planning** creates a connected map of steps the user will follow
4. **Design model generation** builds a full `DesignModel` with pages, sections, and components
5. **Live preview rendering** displays the model as a fully styled UBS interface
6. **UX review** scores the design across 8 categories (information architecture, visual hierarchy, accessibility, content clarity, interaction design, error handling, brand alignment, mobile responsiveness)
7. **React code generation** produces a functional React component
8. **Angular code generation** produces an Angular component with template
9. **HTML/CSS generation** produces standalone markup with embedded UBS styles
10. **Model JSON export** provides the full design model for programmatic use

## Design model schema

The core data structure is `DesignModel`, containing:

- **projectName** and **prompt**: metadata about the generation
- **brief** (`InterpretedBrief`): structured understanding of the user's intent
- **journeyMap** (`JourneyMap`): connected steps with user intents, actions, and states
- **pages** (`PageModel[]`): each page has a type (hero, standard, form, confirmation, progress, success, error), sections with layout definitions, and components
- **metadata**: generation timestamp, version, output type

Components use a recursive `ComponentModel` structure supporting: heading, paragraph, button, card, alert, form-field, table, badge, progress-stepper, recommendation, list, metric-card, status-label, divider, and action-bar.

## UBS style layer

The design system is implemented as four CSS layers imported in order:

1. **reset.css**: minimal CSS reset with accessible focus styles
2. **tokens.css**: all design tokens as CSS custom properties (`--ubs-*`)
3. **layout.css**: grid system, flexbox utilities, responsive breakpoints
4. **components.css**: styled component classes (buttons, cards, alerts, tables, steppers, badges, forms, tabs, scores, modals)

All component styling uses `var(--ubs-*)` tokens. No inline styles or hardcoded colours.

## Adding AI integration

The mock service at `src/services/aiUxDesignerService.ts` has clearly marked integration points. Each function includes a comment block showing the exact API call to make:

- **Endpoint**: `https://ai-gregpanayi-4410.services.ai.azure.com/anthropic/v1/messages`
- **Model**: Claude Opus via Azure AI Foundry
- **Authentication**: `x-api-key` header with your Azure AI key
- **API version**: `anthropic-version: 2023-06-01`

Replace the mock return in each function with the corresponding API call. The UBS style guide (`src/config/ubs-style-guide.ts`) should be sent as context to the AI model to ensure brand-compliant output.

Functions to replace:
- `interpretPrompt()`: analyse the prompt, return `InterpretedBrief`
- `createJourneyMap()`: plan the journey from the brief, return `JourneyMap`
- `createDesignModel()`: generate the full page/component model, return `DesignModel`
- `reviewDesignModel()`: score the design across UX categories, return `UxReview`
- `generateReact()`, `generateAngular()`, `generateHtmlCss()`: generate production code
- `refineFromInstruction()`: modify the model based on natural-language instructions

## Adding more components

To add a new component type:

1. Add the type name to `ComponentType` in `src/types/index.ts`
2. Add a new `case` in `src/components/PreviewPanel/ComponentRenderer.tsx`
3. Add corresponding CSS classes in `src/styles/components.css` (if needed)
4. Update the mock data in the service to use the new component

## Adding more journeys

To add new mock journeys:

1. Add a new condition in `interpretPrompt()` that matches keywords from the prompt
2. Return a new `InterpretedBrief` tailored to the use case
3. Return a matching `JourneyMap` from `createJourneyMap()`
4. Return a complete set of `PageModel[]` from `createDesignModel()`

## Evaluating output quality

The UX review scorecard system evaluates designs across 8 categories on a 1 to 10 scale:

| Score range | Level   | Meaning                          |
| ----------- | ------- | -------------------------------- |
| 8 to 10     | High    | Strong, minor improvements only  |
| 5 to 7      | Medium  | Acceptable, clear areas to fix   |
| 1 to 4      | Low     | Significant issues, needs rework |

Each category includes detailed notes explaining the score and specific recommendations.

## Getting started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Type check
npx tsc --noEmit

# Build for production
npm run build
```

## Project structure

```
prompt-preview/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── README.md
└── src/
    ├── main.tsx                          # Entry point
    ├── App.tsx                           # Main application with state management
    ├── App.module.css                    # App layout styles
    ├── types/
    │   └── index.ts                      # Full type schema
    ├── styles/
    │   ├── ubs-theme.css                 # Master import
    │   ├── reset.css                     # CSS reset
    │   ├── tokens.css                    # Design tokens
    │   ├── layout.css                    # Layout utilities
    │   └── components.css                # Component styles
    ├── config/
    │   └── ubs-style-guide.ts            # Style guide for AI context
    ├── utils/
    │   └── helpers.ts                    # Utility functions
    ├── services/
    │   └── aiUxDesignerService.ts        # Mock AI service (AI integration points)
    └── components/
        ├── common/
        │   ├── UbsIcon.tsx               # 27 SVG icons
        │   ├── LoadingSpinner.tsx         # Loading state
        │   ├── EmptyState.tsx             # Empty state placeholder
        │   └── StatusBadge.tsx            # Status badge
        ├── PromptPanel/
        │   ├── PromptPanel.tsx            # Prompt input, controls, progress
        │   └── PromptPanel.module.css
        ├── PreviewPanel/
        │   ├── PreviewPanel.tsx           # Live preview with page/state/viewport controls
        │   ├── ComponentRenderer.tsx      # Recursive component renderer
        │   └── PreviewPanel.module.css
        ├── JourneyPanel/
        │   ├── JourneyPanel.tsx           # Journey map visualisation
        │   └── JourneyPanel.module.css
        ├── CodePanel/
        │   ├── CodePanel.tsx              # Code output with tabs and copy
        │   └── CodePanel.module.css
        ├── BriefPanel/
        │   ├── BriefPanel.tsx             # UX brief display
        │   └── BriefPanel.module.css
        ├── ReviewPanel/
        │   ├── ReviewPanel.tsx            # UX review scores and notes
        │   └── ReviewPanel.module.css
        └── EditPanel/
            ├── EditPanel.tsx              # JSON model editor
            └── EditPanel.module.css
```
