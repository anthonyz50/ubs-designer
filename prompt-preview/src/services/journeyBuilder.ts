// ============================================================
// UBS AI UX Designer — Journey Builder
// ============================================================
// Assembles JourneyMap objects from page lists, creating
// proper step chains with navigation and state mappings.

import type { JourneyMap, JourneyStep, PageModel } from '../types';

// ----- Page type to state mapping -----

const PAGE_TYPE_STATES: Record<string, string[]> = {
  hero: ['default'],
  standard: ['default', 'loading'],
  form: ['default', 'loading', 'error'],
  confirmation: ['default', 'confirmation'],
  progress: ['progress', 'loading'],
  success: ['success'],
  error: ['error', 'default'],
  dashboard: ['default', 'loading', 'empty'],
  list: ['default', 'loading', 'empty'],
  detail: ['default', 'loading'],
  settings: ['default', 'loading', 'success'],
  'wizard-step': ['default', 'loading', 'error'],
  split: ['default', 'loading'],
};

// ----- User intent inference -----

function inferUserIntent(page: PageModel): string {
  const title = page.title.toLowerCase();
  const type = page.pageType;

  if (type === 'hero' || title.includes('welcome') || title.includes('entry'))
    return 'Understand what this is about and get started';
  if (type === 'form' || title.includes('create') || title.includes('submit'))
    return 'Provide the required information';
  if (type === 'confirmation')
    return 'Review details before confirming';
  if (type === 'progress')
    return 'Wait for the process to complete';
  if (type === 'success')
    return 'Confirm the operation was successful';
  if (type === 'error')
    return 'Understand what went wrong and recover';
  if (type === 'dashboard')
    return 'Get an overview of key metrics and status';
  if (type === 'list')
    return 'Browse and find specific items';
  if (type === 'detail')
    return 'View full details of the selected item';
  if (type === 'settings')
    return 'Configure preferences and options';
  if (type === 'wizard-step')
    return 'Complete this step of the guided process';
  if (type === 'split')
    return 'Browse items and view details side by side';

  // Fall back to title-based inference
  if (title.includes('search') || title.includes('find'))
    return 'Search for relevant content';
  if (title.includes('review') || title.includes('approval'))
    return 'Review and make a decision';
  if (title.includes('diagnosis') || title.includes('diagnose'))
    return 'Understand the detected issues';
  if (title.includes('fix') || title.includes('resolve'))
    return 'See the proposed solution';
  if (title.includes('escalat'))
    return 'Get further help from a specialist';

  return `Complete the "${page.title}" step`;
}

// ----- Terminal page detection -----

function isTerminalPage(page: PageModel, index: number, total: number): boolean {
  if (page.pageType === 'success') return true;
  if (page.pageType === 'error') return true;
  if (page.title.toLowerCase().includes('escalat')) return true;
  if (page.title.toLowerCase().includes('complete')) return true;
  if (index === total - 1) return true;
  return false;
}

// ----- Main builder -----

export function buildJourneyMap(
  title: string,
  pages: PageModel[],
  description: string,
): JourneyMap {
  if (pages.length === 0) {
    return {
      title,
      description,
      steps: [],
    };
  }

  const steps: JourneyStep[] = pages.map((page, index) => {
    const isTerminal = isTerminalPage(page, index, pages.length);
    const nextPage = !isTerminal && index < pages.length - 1
      ? pages[index + 1]
      : undefined;

    const step: JourneyStep = {
      id: `step-${page.id}`,
      title: page.title,
      userIntent: inferUserIntent(page),
      pageRequired: page.title,
      primaryAction: page.primaryAction?.label ?? 'Continue',
      possibleStates: PAGE_TYPE_STATES[page.pageType] ?? ['default'],
    };

    if (page.secondaryAction) {
      step.secondaryAction = page.secondaryAction.label;
    }

    if (nextPage && !isTerminal) {
      step.nextStepId = `step-${nextPage.id}`;
    }

    if (isTerminal) {
      step.isTerminal = true;
    }

    return step;
  });

  return {
    title,
    description,
    steps,
  };
}
