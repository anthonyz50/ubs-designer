// ============================================================
// Test Export Service
// Generates a self-contained HTML test package from a DesignModel
// with embedded analytics, feedback collection, and page rendering.
// ============================================================

import type { DesignModel, PageModel, SectionModel, ComponentModel } from '../types';

// ----------------------------------------------------------
// Config types
// ----------------------------------------------------------

export interface FeedbackQuestion {
  id: string;
  question: string;
  type: 'rating' | 'text' | 'yes-no';
}

export interface TestExportConfig {
  testTitle: string;
  testDescription: string;
  taskInstructions: string;
  webhookUrl?: string;
  collectFeedback: boolean;
  feedbackQuestions: FeedbackQuestion[];
  showTimer: boolean;
  allowPageRevisit: boolean;
  testerId?: string;
}

export const DEFAULT_FEEDBACK_QUESTIONS: FeedbackQuestion[] = [
  { id: 'clarity', question: 'Was it clear what to do on each step?', type: 'rating' },
  { id: 'ease', question: 'How easy was the overall experience?', type: 'rating' },
  { id: 'confused', question: 'Were there any pages where you felt confused?', type: 'text' },
  { id: 'missing', question: 'Was anything missing that you expected to see?', type: 'text' },
  { id: 'recommend', question: 'Would you recommend this workflow to a colleague?', type: 'yes-no' },
];

// ----------------------------------------------------------
// HTML generation helpers
// ----------------------------------------------------------

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderComponentHtml(component: ComponentModel): string {
  const { type, props } = component;

  switch (type) {
    case 'heading': {
      const level = Math.min(Math.max((props.level as number) ?? 2, 1), 6);
      const text = escapeHtml((props.text as string) ?? '');
      return `<h${level} class="ubs-header-${level}">${text}</h${level}>`;
    }

    case 'paragraph': {
      const text = escapeHtml((props.text as string) ?? '');
      const variant = (props.variant as string) ?? 'body-1';
      return `<p class="ubs-${variant}">${text}</p>`;
    }

    case 'button': {
      const label = escapeHtml((props.label as string) ?? 'Button');
      const variant = (props.variant as string) ?? 'primary';
      const navigateTo = props.navigateTo as string | undefined;
      const dataNav = navigateTo ? ` data-navigate-to="${escapeHtml(navigateTo)}"` : '';
      return `<button class="ubs-btn ubs-btn-${variant}"${dataNav} onclick="handleButtonClick(this, '${escapeHtml(label)}')">${label}</button>`;
    }

    case 'card': {
      const title = escapeHtml((props.title as string) ?? '');
      const description = escapeHtml((props.description as string) ?? '');
      const children = props.children as Array<{ label: string; value: string }> | undefined;
      let html = '<div class="ubs-card">';
      if (title) {
        html += `<div class="ubs-card-header"><span class="ubs-header-5">${title}</span></div>`;
      }
      html += '<div class="ubs-card-body">';
      if (description) html += `<p class="ubs-body-2">${description}</p>`;
      if (children && Array.isArray(children)) {
        html += '<dl class="ubs-stack ubs-stack-sm">';
        for (const item of children) {
          html += `<div class="ubs-flex-between"><dt class="ubs-body-3 ubs-text-secondary">${escapeHtml(item.label)}</dt><dd class="ubs-body-3" style="font-weight:500">${escapeHtml(item.value)}</dd></div>`;
        }
        html += '</dl>';
      }
      html += '</div></div>';
      return html;
    }

    case 'alert': {
      const variant = (props.variant as string) ?? 'info';
      const title = escapeHtml((props.title as string) ?? '');
      const message = escapeHtml((props.message as string) ?? '');
      let content = '';
      if (title) content += `<strong>${title}</strong>`;
      if (title && message) content += '<br>';
      if (message) content += `<span>${message}</span>`;
      return `<div class="ubs-alert ubs-alert-${variant}" role="alert"><div>${content}</div></div>`;
    }

    case 'form-field': {
      const label = escapeHtml((props.label as string) ?? '');
      const inputType = (props.inputType as string) ?? 'text';
      const placeholder = escapeHtml((props.placeholder as string) ?? '');
      let html = '<div class="ubs-form-group">';
      if (label) html += `<label class="ubs-label">${label}</label>`;
      if (inputType === 'textarea') {
        html += `<textarea class="ubs-textarea" placeholder="${placeholder}" readonly></textarea>`;
      } else {
        html += `<input class="ubs-input" type="${inputType}" placeholder="${placeholder}" readonly>`;
      }
      html += '</div>';
      return html;
    }

    case 'form-group': {
      const children = component.children ?? [];
      let html = '<div class="ubs-form-group">';
      for (const child of children) {
        html += renderComponentHtml(child);
      }
      html += '</div>';
      return html;
    }

    case 'table': {
      const headers = (props.headers as string[]) ?? [];
      const rows = (props.rows as string[][]) ?? [];
      let html = '<table class="ubs-table">';
      if (headers.length > 0) {
        html += '<thead><tr>';
        for (const h of headers) html += `<th>${escapeHtml(h)}</th>`;
        html += '</tr></thead>';
      }
      html += '<tbody>';
      for (const row of rows) {
        html += '<tr>';
        for (const cell of row) html += `<td>${escapeHtml(cell)}</td>`;
        html += '</tr>';
      }
      html += '</tbody></table>';
      return html;
    }

    case 'badge':
    case 'status-label': {
      const label = escapeHtml((props.label as string) ?? '');
      const variant = (props.variant as string) ?? 'info';
      return `<span class="ubs-badge ubs-badge-${variant}">${label}</span>`;
    }

    case 'progress-stepper': {
      const steps = (props.steps as Array<{ label: string; status: string }>) ?? [];
      let html = '<div class="ubs-stepper">';
      for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        const cls = step.status === 'complete' ? 'is-complete' : step.status === 'active' ? 'is-active' : '';
        const dot = step.status === 'complete' ? '&#10003;' : String(i + 1);
        html += `<div class="ubs-stepper-step ${cls}"><div class="ubs-stepper-dot">${dot}</div><span class="ubs-stepper-label">${escapeHtml(step.label)}</span></div>`;
      }
      html += '</div>';
      return html;
    }

    case 'recommendation': {
      const title = escapeHtml((props.title as string) ?? '');
      const description = escapeHtml((props.description as string) ?? '');
      let content = '';
      if (title) content += `<strong class="ubs-body-2">${title}</strong>`;
      if (title && description) content += '<br>';
      if (description) content += `<span class="ubs-body-2 ubs-text-secondary">${description}</span>`;
      return `<div class="ubs-recommendation"><span class="ubs-recommendation-icon">&#128161;</span><div>${content}</div></div>`;
    }

    case 'list': {
      const items = (props.items as string[]) ?? [];
      const ordered = (props.ordered as boolean) ?? false;
      const tag = ordered ? 'ol' : 'ul';
      let html = `<${tag} style="padding-left:20px;list-style:${ordered ? 'decimal' : 'disc'}">`;
      for (const item of items) {
        html += `<li class="ubs-body-2" style="margin-bottom:4px">${escapeHtml(item)}</li>`;
      }
      html += `</${tag}>`;
      return html;
    }

    case 'metric-card': {
      const value = escapeHtml((props.value as string) ?? '');
      const label = escapeHtml((props.label as string) ?? '');
      return `<div class="ubs-card"><div class="ubs-card-metric"><div class="metric-value">${value}</div><div class="metric-label">${label}</div></div></div>`;
    }

    case 'divider':
      return '<hr class="ubs-divider">';

    case 'action-bar': {
      const actions = (props.actions as Array<{ label: string; variant?: string; navigateTo?: string }>) ?? [];
      let html = '<div class="ubs-flex-row">';
      for (const action of actions) {
        const dataNav = action.navigateTo ? ` data-navigate-to="${escapeHtml(action.navigateTo)}"` : '';
        html += `<button class="ubs-btn ubs-btn-${action.variant ?? 'primary'}"${dataNav} onclick="handleButtonClick(this, '${escapeHtml(action.label)}')">${escapeHtml(action.label)}</button>`;
      }
      html += '</div>';
      return html;
    }

    case 'breadcrumb':
    case 'breadcrumb-nav': {
      const items = (props.items as string[]) ?? [];
      let html = '<nav class="ubs-breadcrumb" aria-label="Breadcrumb">';
      for (let i = 0; i < items.length; i++) {
        if (i > 0) html += '<span class="ubs-breadcrumb-separator">/</span>';
        const current = i === items.length - 1;
        html += `<span class="ubs-breadcrumb-item${current ? ' is-current' : ''}"${current ? ' aria-current="page"' : ''}>${escapeHtml(items[i])}</span>`;
      }
      html += '</nav>';
      return html;
    }

    case 'accordion': {
      const items = (props.items as Array<{ title: string; content: string }>) ?? [];
      let html = '<div class="ubs-accordion">';
      for (const item of items) {
        html += `<div class="ubs-accordion-item"><button class="ubs-accordion-header" onclick="this.parentElement.classList.toggle('is-open')"><span>${escapeHtml(item.title)}</span><span>&#9660;</span></button><div class="ubs-accordion-body">${escapeHtml(item.content)}</div></div>`;
      }
      html += '</div>';
      return html;
    }

    case 'timeline': {
      const items = (props.items as Array<{ date?: string; title: string; description?: string; active?: boolean }>) ?? [];
      let html = '<div class="ubs-timeline">';
      for (const item of items) {
        html += `<div class="ubs-timeline-item${item.active ? ' is-active' : ''}"><div class="ubs-timeline-dot"></div><div class="ubs-timeline-content">`;
        if (item.date) html += `<div class="ubs-timeline-date">${escapeHtml(item.date)}</div>`;
        html += `<div class="ubs-timeline-title">${escapeHtml(item.title)}</div>`;
        if (item.description) html += `<div class="ubs-timeline-description">${escapeHtml(item.description)}</div>`;
        html += '</div></div>';
      }
      html += '</div>';
      return html;
    }

    case 'avatar': {
      const initials = escapeHtml((props.initials as string) ?? '?');
      const size = (props.size as string) ?? 'md';
      return `<div class="ubs-avatar ubs-avatar-${size}">${initials}</div>`;
    }

    case 'user-info': {
      const name = escapeHtml((props.name as string) ?? '');
      const role = escapeHtml((props.role as string) ?? '');
      const initials = escapeHtml((props.initials as string) ?? name.charAt(0).toUpperCase());
      const size = (props.avatarSize as string) ?? 'md';
      let html = `<div class="ubs-user-info"><div class="ubs-avatar ubs-avatar-${size}">${initials}</div><div class="ubs-user-info-details"><span class="ubs-user-info-name">${name}</span>`;
      if (role) html += `<span class="ubs-user-info-role">${role}</span>`;
      html += '</div></div>';
      return html;
    }

    case 'file-upload': {
      const text = escapeHtml((props.text as string) ?? 'Drag and drop files here, or click to browse');
      const hint = escapeHtml((props.hint as string) ?? '');
      const buttonLabel = escapeHtml((props.buttonLabel as string) ?? 'Browse files');
      let html = `<div class="ubs-file-upload"><span class="ubs-file-upload-text">${text}</span>`;
      if (hint) html += `<span class="ubs-file-upload-hint">${hint}</span>`;
      html += `<button class="ubs-btn ubs-btn-secondary ubs-btn-sm">${buttonLabel}</button></div>`;
      return html;
    }

    case 'date-picker': {
      const label = escapeHtml((props.label as string) ?? 'Date');
      return `<div class="ubs-form-group"><label class="ubs-label">${label}</label><input class="ubs-input" type="date" readonly></div>`;
    }

    case 'toggle': {
      const label = escapeHtml((props.label as string) ?? '');
      const checked = (props.checked as boolean) ?? false;
      return `<label class="ubs-toggle"><span class="ubs-toggle-track${checked ? ' is-on' : ''}"><span class="ubs-toggle-thumb"></span></span>${label ? `<span>${label}</span>` : ''}</label>`;
    }

    case 'pagination': {
      const totalPages = (props.totalPages as number) ?? 5;
      const currentPage = (props.currentPage as number) ?? 1;
      let html = '<nav class="ubs-pagination" aria-label="Pagination">';
      html += `<span class="ubs-pagination-item${currentPage <= 1 ? ' is-disabled' : ''}">&laquo;</span>`;
      for (let p = 1; p <= totalPages; p++) {
        html += `<span class="ubs-pagination-item${p === currentPage ? ' is-active' : ''}">${p}</span>`;
      }
      html += `<span class="ubs-pagination-item${currentPage >= totalPages ? ' is-disabled' : ''}">&raquo;</span>`;
      html += '</nav>';
      return html;
    }

    case 'stat-group': {
      const stats = (props.stats as Array<{ value: string; label: string }>) ?? [];
      let html = '<div class="ubs-stat-group">';
      for (const stat of stats) {
        html += `<div class="ubs-stat-item"><div class="ubs-stat-value">${escapeHtml(stat.value)}</div><div class="ubs-stat-label">${escapeHtml(stat.label)}</div></div>`;
      }
      html += '</div>';
      return html;
    }

    case 'nav-tabs': {
      const tabs = (props.tabs as Array<{ label: string; id?: string }>) ?? [];
      const activeTab = (props.activeTab as string) ?? '';
      let html = '<nav class="ubs-nav-tabs">';
      for (const tab of tabs) {
        const isActive = (tab.id ?? tab.label) === activeTab;
        html += `<button class="ubs-nav-tab${isActive ? ' is-active' : ''}">${escapeHtml(tab.label)}</button>`;
      }
      html += '</nav>';
      return html;
    }

    case 'toolbar': {
      const actions = (props.actions as Array<{ label: string; variant?: string }>) ?? [];
      let html = '<div class="ubs-toolbar">';
      for (const action of actions) {
        html += `<button class="ubs-btn ubs-btn-${action.variant ?? 'ghost'} ubs-btn-sm">${escapeHtml(action.label)}</button>`;
      }
      html += '</div>';
      return html;
    }

    case 'chip-group': {
      const chips = (props.chips as Array<{ label: string; removable?: boolean }>) ?? [];
      let html = '<div class="ubs-chip-group">';
      for (const chip of chips) {
        html += `<span class="ubs-chip">${escapeHtml(chip.label)}${chip.removable !== false ? '<span class="ubs-chip-remove">&times;</span>' : ''}</span>`;
      }
      html += '</div>';
      return html;
    }

    case 'comment': {
      const author = escapeHtml((props.author as string) ?? '');
      const time = escapeHtml((props.time as string) ?? '');
      const text = escapeHtml((props.text as string) ?? '');
      const initials = escapeHtml((props.initials as string) ?? author.charAt(0).toUpperCase());
      return `<div class="ubs-comment"><div class="ubs-avatar ubs-avatar-sm">${initials}</div><div class="ubs-comment-body"><div class="ubs-comment-meta"><span class="ubs-comment-author">${author}</span>${time ? `<span class="ubs-comment-time">${time}</span>` : ''}</div><div class="ubs-comment-text">${text}</div></div></div>`;
    }

    case 'activity-item': {
      const description = escapeHtml((props.description as string) ?? '');
      const time = escapeHtml((props.time as string) ?? '');
      return `<div class="ubs-activity-item"><div class="ubs-activity-icon">&#9679;</div><div class="ubs-activity-content"><div class="ubs-activity-description">${description}</div>${time ? `<div class="ubs-activity-time">${time}</div>` : ''}</div></div>`;
    }

    case 'key-value': {
      const items = (props.items as Array<{ label: string; value: string }>) ?? [];
      let html = '<div>';
      for (const item of items) {
        html += `<div class="ubs-key-value"><span class="ubs-key-value-label">${escapeHtml(item.label)}</span><span class="ubs-key-value-value">${escapeHtml(item.value)}</span></div>`;
      }
      html += '</div>';
      return html;
    }

    case 'section-header': {
      const title = escapeHtml((props.title as string) ?? '');
      const actionLabel = escapeHtml((props.actionLabel as string) ?? '');
      const navigateTo = props.navigateTo as string | undefined;
      const dataNav = navigateTo ? ` data-navigate-to="${escapeHtml(navigateTo)}"` : '';
      return `<div class="ubs-section-header"><span class="ubs-section-header-title">${title}</span>${actionLabel ? `<button class="ubs-btn ubs-btn-ghost ubs-btn-sm"${dataNav} onclick="handleButtonClick(this, '${escapeHtml(actionLabel)}')">${actionLabel}</button>` : ''}</div>`;
    }

    case 'sidebar-nav': {
      const items = (props.items as Array<{ label: string; id?: string }>) ?? [];
      const activeItem = (props.activeItem as string) ?? '';
      let html = '<nav class="ubs-sidebar-nav">';
      for (const item of items) {
        const isActive = (item.id ?? item.label) === activeItem;
        html += `<button class="ubs-sidebar-nav-item${isActive ? ' is-active' : ''}">${escapeHtml(item.label)}</button>`;
      }
      html += '</nav>';
      return html;
    }

    case 'split-view': {
      const listItems = (props.items as Array<{ label: string; id?: string }>) ?? [];
      const activeItem = (props.activeItem as string) ?? '';
      const detailTitle = escapeHtml((props.detailTitle as string) ?? '');
      const detailContent = escapeHtml((props.detailContent as string) ?? '');
      let html = '<div class="ubs-split-view"><div class="ubs-split-view-list">';
      for (const item of listItems) {
        const isActive = (item.id ?? item.label) === activeItem;
        html += `<div class="ubs-split-view-list-item${isActive ? ' is-active' : ''}">${escapeHtml(item.label)}</div>`;
      }
      html += '</div><div class="ubs-split-view-detail">';
      if (detailTitle) html += `<h3 class="ubs-header-4">${detailTitle}</h3>`;
      if (detailContent) html += `<p class="ubs-body-2 ubs-text-secondary">${detailContent}</p>`;
      if (component.children) {
        for (const child of component.children) {
          html += renderComponentHtml(child);
        }
      }
      html += '</div></div>';
      return html;
    }

    case 'drawer': {
      const title = escapeHtml((props.title as string) ?? 'Drawer');
      const body = escapeHtml((props.body as string) ?? '');
      let html = `<aside class="ubs-drawer"><div class="ubs-drawer-header"><span class="ubs-drawer-title">${title}</span></div><div class="ubs-drawer-body">`;
      if (body) html += `<p class="ubs-body-2">${body}</p>`;
      if (component.children) {
        for (const child of component.children) {
          html += renderComponentHtml(child);
        }
      }
      html += '</div></aside>';
      return html;
    }

    default:
      return `<div class="ubs-body-3 ubs-text-muted">[${escapeHtml(type)}: ${escapeHtml(component.id)}]</div>`;
  }
}

function renderSectionHtml(section: SectionModel): string {
  const layoutClass = (() => {
    switch (section.layout) {
      case 'grid':
      case 'grid-auto':
        return 'section-grid';
      case 'flex-row':
        return 'section-flex-row';
      case 'flex-between':
        return 'section-flex-between';
      case 'sidebar-content':
        return 'ubs-sidebar-content';
      case 'split-equal':
        return 'ubs-split-view';
      case 'stack':
      default:
        return 'section-stack';
    }
  })();

  const spacing = section.spacing ?? 'md';
  let html = '<div class="test-section">';
  if (section.title) {
    html += `<h3 class="section-title">${escapeHtml(section.title)}</h3>`;
  }
  html += `<div class="${layoutClass}" data-spacing="${spacing}">`;
  for (const comp of section.components) {
    html += renderComponentHtml(comp);
  }
  html += '</div></div>';
  return html;
}

function renderPageHtml(page: PageModel): string {
  let html = `<div class="test-page" id="page-${escapeHtml(page.id)}" data-page-id="${escapeHtml(page.id)}">`;
  html += '<div class="page-header">';
  html += `<h1 class="ubs-header-2">${escapeHtml(page.title)}</h1>`;
  if (page.description) {
    html += `<p class="ubs-body-1 ubs-text-secondary">${escapeHtml(page.description)}</p>`;
  }
  html += '</div>';

  for (const section of page.sections) {
    html += renderSectionHtml(section);
  }

  if (page.primaryAction || page.secondaryAction) {
    html += '<div class="page-actions">';
    if (page.primaryAction) {
      const nav = page.primaryAction.navigateTo ? ` data-navigate-to="${escapeHtml(page.primaryAction.navigateTo)}"` : '';
      html += `<button class="ubs-btn ubs-btn-primary"${nav} onclick="handleButtonClick(this, '${escapeHtml(page.primaryAction.label)}')">${escapeHtml(page.primaryAction.label)}</button>`;
    }
    if (page.secondaryAction) {
      const nav = page.secondaryAction.navigateTo ? ` data-navigate-to="${escapeHtml(page.secondaryAction.navigateTo)}"` : '';
      html += `<button class="ubs-btn ubs-btn-secondary"${nav} onclick="handleButtonClick(this, '${escapeHtml(page.secondaryAction.label)}')">${escapeHtml(page.secondaryAction.label)}</button>`;
    }
    html += '</div>';
  }

  if (page.footerText) {
    html += `<p class="page-footer ubs-body-3 ubs-text-muted">${escapeHtml(page.footerText)}</p>`;
  }

  html += '</div>';
  return html;
}

// ----------------------------------------------------------
// Main export function
// ----------------------------------------------------------

export async function exportTestPackage(
  model: DesignModel,
  config: TestExportConfig,
): Promise<Blob> {
  const testId = 'test-' + Math.random().toString(36).slice(2, 10) + '-' + Date.now();
  const testerId = config.testerId || 'tester-' + Math.random().toString(36).slice(2, 8);
  const pageIds = model.pages.map((p) => p.id);
  const firstPageId = pageIds[0] ?? '';

  // Build page HTML
  const pagesHtml = model.pages.map(renderPageHtml).join('\n');

  // Build page tabs
  const pageTabsHtml = model.pages
    .map(
      (p) =>
        `<button class="page-tab" data-page-id="${escapeHtml(p.id)}" onclick="navigateToPage('${escapeHtml(p.id)}')">${escapeHtml(p.title)}</button>`,
    )
    .join('\n');

  // Build feedback form HTML
  const feedbackHtml = config.collectFeedback
    ? buildFeedbackHtml(config.feedbackQuestions)
    : '';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UBS UX Test: ${escapeHtml(config.testTitle)}</title>
  <style>${getEmbeddedCss()}</style>
</head>
<body>
  <!-- Test header -->
  <header class="test-header">
    <div class="test-header-left">
      <span class="test-header-brand">UBS</span>
      <span class="test-header-title">${escapeHtml(config.testTitle)}</span>
    </div>
    <div class="test-header-right">
      ${config.showTimer ? '<div class="test-timer" id="testTimer">00:00</div>' : ''}
      <div class="test-progress" id="testProgress">
        Page <span id="currentPageNum">1</span> of <span id="totalPageNum">${pageIds.length}</span>
      </div>
    </div>
  </header>

  <!-- Task instructions banner -->
  <div class="test-instructions">
    <div class="test-instructions-inner">
      <strong>Your task:</strong> ${escapeHtml(config.taskInstructions)}
    </div>
  </div>

  <!-- Page navigation tabs -->
  <nav class="page-tabs-bar" id="pageTabsBar">
    ${pageTabsHtml}
  </nav>

  <!-- Preview area -->
  <main class="test-main" id="testMain">
    ${pagesHtml}
  </main>

  <!-- Finish test button -->
  <footer class="test-footer">
    <button class="ubs-btn ubs-btn-primary" id="finishTestBtn" onclick="finishTest()">Finish test</button>
  </footer>

  <!-- Feedback overlay -->
  <div class="feedback-overlay" id="feedbackOverlay" style="display:none">
    <div class="feedback-modal">
      <div class="feedback-modal-header">
        <h2 class="ubs-header-3">Test complete</h2>
        <p class="ubs-body-2 ubs-text-secondary">Thank you for participating. ${config.collectFeedback ? 'Please share your feedback below.' : ''}</p>
      </div>
      <div class="feedback-modal-body" id="feedbackBody">
        ${feedbackHtml}
      </div>
      <div class="feedback-modal-footer">
        ${config.collectFeedback ? '<button class="ubs-btn ubs-btn-primary" id="submitFeedbackBtn" onclick="submitFeedback()">Submit feedback</button>' : ''}
        <button class="ubs-btn ubs-btn-secondary" onclick="downloadResults()">Download results</button>
      </div>
    </div>
  </div>

  <!-- Thank you overlay -->
  <div class="feedback-overlay" id="thankYouOverlay" style="display:none">
    <div class="feedback-modal">
      <div class="feedback-modal-header">
        <h2 class="ubs-header-3">Thank you!</h2>
        <p class="ubs-body-2 ubs-text-secondary">Your feedback has been recorded.</p>
      </div>
      <div class="feedback-modal-body">
        <div class="test-summary" id="testSummary"></div>
      </div>
      <div class="feedback-modal-footer">
        <button class="ubs-btn ubs-btn-primary" onclick="downloadResults()">Download results</button>
      </div>
    </div>
  </div>

  <script>
  // ============================================================
  // Analytics & test session tracking
  // ============================================================
  (function() {
    'use strict';

    var testSession = {
      testId: ${JSON.stringify(testId)},
      testerId: ${JSON.stringify(testerId)},
      testTitle: ${JSON.stringify(config.testTitle)},
      startedAt: new Date().toISOString(),
      events: [],
      pageVisits: [],
      navigationPath: [],
      feedbackResponses: {},
      completed: false,
      completedAt: null,
      totalTimeSeconds: 0
    };

    var currentPageId = ${JSON.stringify(firstPageId)};
    var currentPageEnteredAt = Date.now();
    var startTime = Date.now();
    var timerInterval = null;
    var allowRevisit = ${config.allowPageRevisit ? 'true' : 'false'};
    var webhookUrl = ${config.webhookUrl ? JSON.stringify(config.webhookUrl) : 'null'};
    var hesitationTimers = {};
    var pageIds = ${JSON.stringify(pageIds)};

    // ---- Timer ----
    ${config.showTimer ? `
    timerInterval = setInterval(function() {
      var elapsed = Math.floor((Date.now() - startTime) / 1000);
      var mins = String(Math.floor(elapsed / 60)).padStart(2, '0');
      var secs = String(elapsed % 60).padStart(2, '0');
      var el = document.getElementById('testTimer');
      if (el) el.textContent = mins + ':' + secs;
    }, 1000);
    ` : ''}

    function recordEvent(type, details) {
      testSession.events.push({
        type: type,
        pageId: currentPageId,
        timestamp: new Date().toISOString(),
        details: details || {}
      });
    }

    function showPage(pageId) {
      var pages = document.querySelectorAll('.test-page');
      for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = pages[i].getAttribute('data-page-id') === pageId ? 'block' : 'none';
      }
      // Update tabs
      var tabs = document.querySelectorAll('.page-tab');
      for (var j = 0; j < tabs.length; j++) {
        tabs[j].classList.toggle('is-active', tabs[j].getAttribute('data-page-id') === pageId);
      }
      // Update progress
      var idx = pageIds.indexOf(pageId);
      var numEl = document.getElementById('currentPageNum');
      if (numEl) numEl.textContent = String(idx + 1);
    }

    function startHesitationTimer(pageId) {
      if (hesitationTimers[pageId]) clearTimeout(hesitationTimers[pageId]);
      hesitationTimers[pageId] = setTimeout(function() {
        recordEvent('hesitation', { pageId: pageId, durationSeconds: 30 });
      }, 30000);
    }

    function stopHesitationTimer(pageId) {
      if (hesitationTimers[pageId]) {
        clearTimeout(hesitationTimers[pageId]);
        delete hesitationTimers[pageId];
      }
    }

    // ---- Page navigation ----
    window.navigateToPage = function(pageId) {
      if (pageId === currentPageId) return;

      // Check revisit permission
      var isBack = testSession.navigationPath.indexOf(pageId) !== -1;
      if (isBack && !allowRevisit) return;

      // Record leaving current page
      var now = Date.now();
      var duration = Math.round((now - currentPageEnteredAt) / 1000);
      testSession.pageVisits.push({
        pageId: currentPageId,
        enteredAt: new Date(currentPageEnteredAt).toISOString(),
        leftAt: new Date(now).toISOString(),
        duration: duration
      });
      recordEvent('page_leave', { duration: duration });
      stopHesitationTimer(currentPageId);

      // Record back navigation
      if (isBack) {
        recordEvent('back_navigation', { fromPage: currentPageId, toPage: pageId });
      }

      // Navigate
      currentPageId = pageId;
      currentPageEnteredAt = Date.now();
      testSession.navigationPath.push(pageId);
      showPage(pageId);
      recordEvent('page_enter', {});
      startHesitationTimer(pageId);
    };

    // ---- Button click handler ----
    window.handleButtonClick = function(el, label) {
      var navigateTo = el.getAttribute('data-navigate-to');
      recordEvent('button_click', { label: label, navigateTo: navigateTo || null });
      if (navigateTo) {
        window.navigateToPage(navigateTo);
      }
    };

    // ---- Finish test ----
    window.finishTest = function() {
      // Record final page visit
      var now = Date.now();
      var duration = Math.round((now - currentPageEnteredAt) / 1000);
      testSession.pageVisits.push({
        pageId: currentPageId,
        enteredAt: new Date(currentPageEnteredAt).toISOString(),
        leftAt: new Date(now).toISOString(),
        duration: duration
      });
      recordEvent('page_leave', { duration: duration });
      stopHesitationTimer(currentPageId);

      testSession.completed = true;
      testSession.completedAt = new Date().toISOString();
      testSession.totalTimeSeconds = Math.round((now - startTime) / 1000);
      recordEvent('test_complete', { totalTimeSeconds: testSession.totalTimeSeconds });

      if (timerInterval) clearInterval(timerInterval);

      document.getElementById('feedbackOverlay').style.display = 'flex';
    };

    // ---- Submit feedback ----
    window.submitFeedback = function() {
      var responses = {};
      var questions = document.querySelectorAll('[data-question-id]');
      for (var i = 0; i < questions.length; i++) {
        var qEl = questions[i];
        var qId = qEl.getAttribute('data-question-id');
        var qType = qEl.getAttribute('data-question-type');

        if (qType === 'rating') {
          var selected = qEl.querySelector('.rating-btn.is-selected');
          responses[qId] = selected ? parseInt(selected.getAttribute('data-value'), 10) : null;
        } else if (qType === 'text') {
          var textarea = qEl.querySelector('textarea');
          responses[qId] = textarea ? textarea.value : '';
        } else if (qType === 'yes-no') {
          var selectedYn = qEl.querySelector('.yn-btn.is-selected');
          responses[qId] = selectedYn ? selectedYn.getAttribute('data-value') : null;
        }
      }

      testSession.feedbackResponses = responses;
      recordEvent('feedback_submitted', { responses: responses });

      // Show thank you
      document.getElementById('feedbackOverlay').style.display = 'none';

      var summaryEl = document.getElementById('testSummary');
      if (summaryEl) {
        var mins = Math.floor(testSession.totalTimeSeconds / 60);
        var secs = testSession.totalTimeSeconds % 60;
        summaryEl.innerHTML =
          '<div class="summary-stat"><span class="summary-label">Total time</span><span class="summary-value">' + mins + 'm ' + secs + 's</span></div>' +
          '<div class="summary-stat"><span class="summary-label">Pages visited</span><span class="summary-value">' + testSession.pageVisits.length + '</span></div>' +
          '<div class="summary-stat"><span class="summary-label">Navigation steps</span><span class="summary-value">' + testSession.navigationPath.length + '</span></div>';
      }

      document.getElementById('thankYouOverlay').style.display = 'flex';

      // Send to webhook if configured
      if (webhookUrl) {
        sendToWebhook();
      }
    };

    // ---- Download results ----
    window.downloadResults = function() {
      var json = JSON.stringify(testSession, null, 2);
      var blob = new Blob([json], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'ux-test-results-' + testSession.testId + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    // ---- Webhook ----
    function sendToWebhook() {
      if (!webhookUrl) return;
      try {
        fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(testSession)
        }).catch(function() {
          console.warn('Failed to send results to webhook');
        });
      } catch (e) {
        console.warn('Webhook error:', e);
      }
    }

    // ---- Rating button handler ----
    window.selectRating = function(btn) {
      var parent = btn.closest('[data-question-id]');
      var buttons = parent.querySelectorAll('.rating-btn');
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('is-selected');
      }
      btn.classList.add('is-selected');
    };

    // ---- Yes/No button handler ----
    window.selectYesNo = function(btn) {
      var parent = btn.closest('[data-question-id]');
      var buttons = parent.querySelectorAll('.yn-btn');
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('is-selected');
      }
      btn.classList.add('is-selected');
    };

    // ---- Initialise ----
    testSession.navigationPath.push(currentPageId);
    recordEvent('page_enter', {});
    showPage(currentPageId);
    startHesitationTimer(currentPageId);
  })();
  </script>
</body>
</html>`;

  return new Blob([html], { type: 'text/html' });
}

// ----------------------------------------------------------
// Build feedback form HTML
// ----------------------------------------------------------

function buildFeedbackHtml(questions: FeedbackQuestion[]): string {
  let html = '<div class="feedback-questions">';

  for (const q of questions) {
    html += `<div class="feedback-question" data-question-id="${escapeHtml(q.id)}" data-question-type="${q.type}">`;
    html += `<label class="feedback-question-label">${escapeHtml(q.question)}</label>`;

    if (q.type === 'rating') {
      html += '<div class="rating-group">';
      for (let i = 1; i <= 5; i++) {
        html += `<button class="rating-btn" data-value="${i}" onclick="selectRating(this)" type="button">${i}</button>`;
      }
      html += '<span class="rating-hint">1 = Poor, 5 = Excellent</span>';
      html += '</div>';
    } else if (q.type === 'text') {
      html += `<textarea class="feedback-textarea" placeholder="Type your answer here..." rows="3"></textarea>`;
    } else if (q.type === 'yes-no') {
      html += '<div class="yn-group">';
      html += `<button class="yn-btn" data-value="yes" onclick="selectYesNo(this)" type="button">Yes</button>`;
      html += `<button class="yn-btn" data-value="no" onclick="selectYesNo(this)" type="button">No</button>`;
      html += '</div>';
    }

    html += '</div>';
  }

  html += '</div>';
  return html;
}

// ----------------------------------------------------------
// Embedded CSS (self-contained UBS theme subset)
// ----------------------------------------------------------

function getEmbeddedCss(): string {
  return `
    /* ---- Reset ---- */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Frutiger', Arial, Helvetica, sans-serif;
      font-size: 14px;
      line-height: 1.5;
      color: #1C1C1C;
      background-color: #F4F3EE;
      min-height: 100vh;
    }

    /* ---- Typography ---- */
    .ubs-header-1 { font-size: 2.25rem; line-height: 1.2; font-weight: 300; letter-spacing: -0.02em; color: #1C1C1C; }
    .ubs-header-2 { font-size: 1.75rem; line-height: 1.25; font-weight: 300; letter-spacing: -0.01em; color: #1C1C1C; }
    .ubs-header-3 { font-size: 1.375rem; line-height: 1.3; font-weight: 400; color: #1C1C1C; }
    .ubs-header-4 { font-size: 1.125rem; line-height: 1.35; font-weight: 500; color: #1C1C1C; }
    .ubs-header-5 { font-size: 1rem; line-height: 1.4; font-weight: 700; color: #1C1C1C; }
    .ubs-header-6 { font-size: 0.875rem; line-height: 1.4; font-weight: 700; letter-spacing: 0.02em; color: #1C1C1C; }
    .ubs-body-1 { font-size: 1rem; line-height: 1.5; font-weight: 300; }
    .ubs-body-2 { font-size: 0.875rem; line-height: 1.5; font-weight: 300; }
    .ubs-body-3 { font-size: 0.8125rem; line-height: 1.45; font-weight: 400; }
    .ubs-body-4 { font-size: 0.75rem; line-height: 1.4; font-weight: 400; }
    .ubs-text-muted { color: #8E8D83; }
    .ubs-text-secondary { color: #5A5D5C; }

    /* ---- Buttons ---- */
    .ubs-btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      min-height: 44px; padding: 8px 24px;
      font-family: inherit; font-size: 0.875rem; font-weight: 500; line-height: 1.4;
      border-radius: 4px; cursor: pointer; white-space: nowrap;
      text-decoration: none; border: 1px solid transparent; transition: all 150ms ease;
    }
    .ubs-btn:disabled { opacity: 0.4; cursor: not-allowed; }
    .ubs-btn-primary { background-color: #E60000; color: #FFFFFF; border-color: #E60000; }
    .ubs-btn-primary:hover:not(:disabled) { background-color: #BA0000; border-color: #BA0000; }
    .ubs-btn-secondary { background-color: #FFFFFF; color: #1C1C1C; border-color: #B8B3A2; }
    .ubs-btn-secondary:hover:not(:disabled) { background-color: #F9F9F7; border-color: #5A5D5C; }
    .ubs-btn-ghost { background-color: transparent; color: #1C1C1C; border-color: transparent; }
    .ubs-btn-ghost:hover:not(:disabled) { background-color: #F4F3EE; }
    .ubs-btn-sm { min-height: 32px; padding: 4px 12px; font-size: 0.75rem; }

    /* ---- Cards ---- */
    .ubs-card { background: #FFFFFF; border: 1px solid #E0DFD7; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); overflow: hidden; }
    .ubs-card-header { display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; border-bottom: 1px solid #E0DFD7; }
    .ubs-card-body { padding: 24px; }
    .ubs-card-metric { padding: 24px; text-align: center; }
    .ubs-card-metric .metric-value { font-size: 2.25rem; font-weight: 700; color: #1C1C1C; line-height: 1.2; }
    .ubs-card-metric .metric-label { font-size: 0.8125rem; color: #5A5D5C; margin-top: 4px; }

    /* ---- Badges ---- */
    .ubs-badge { display: inline-flex; align-items: center; gap: 4px; padding: 4px 12px; font-size: 0.75rem; font-weight: 500; line-height: 1.4; border-radius: 9999px; white-space: nowrap; }
    .ubs-badge-info { background-color: #E6F5FB; color: #3A5A88; }
    .ubs-badge-success { background-color: #e8edc9; color: #6F7A1A; }
    .ubs-badge-warning { background-color: #fef0cc; color: #8a6c08; }
    .ubs-badge-error { background-color: #f5ccce; color: #BD000C; }

    /* ---- Forms ---- */
    .ubs-form-group { display: flex; flex-direction: column; gap: 4px; }
    .ubs-label { font-size: 0.875rem; font-weight: 500; color: #1C1C1C; }
    .ubs-input, .ubs-textarea, .ubs-select {
      min-height: 44px; padding: 8px 12px;
      font-family: inherit; font-size: 0.875rem; color: #1C1C1C;
      background: #FFFFFF; border: 1px solid #B8B3A2; border-radius: 4px;
      transition: border-color 150ms ease, box-shadow 150ms ease;
    }
    .ubs-input:focus, .ubs-textarea:focus { border-color: #009BD2; box-shadow: 0 0 0 3px rgba(0,155,210,0.15); outline: none; }
    .ubs-input::placeholder, .ubs-textarea::placeholder { color: #8E8D83; }
    .ubs-textarea { min-height: 100px; resize: vertical; }

    /* ---- Alerts ---- */
    .ubs-alert { display: flex; align-items: flex-start; gap: 12px; padding: 16px; border-radius: 8px; font-size: 0.875rem; line-height: 1.5; }
    .ubs-alert-info { background: #E6F5FB; color: #3A5A88; border-left: 3px solid #3A5A88; }
    .ubs-alert-success { background: #e8edc9; color: #4a5211; border-left: 3px solid #6F7A1A; }
    .ubs-alert-warning { background: #fef0cc; color: #8a6c08; border-left: 3px solid #E4A911; }
    .ubs-alert-error { background: #f5ccce; color: #8a000a; border-left: 3px solid #BD000C; }

    /* ---- Tables ---- */
    .ubs-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
    .ubs-table th { padding: 12px 16px; font-weight: 500; text-align: left; background: #F9F9F7; border-bottom: 2px solid #E0DFD7; color: #1C1C1C; }
    .ubs-table td { padding: 12px 16px; border-bottom: 1px solid #E0DFD7; color: #1C1C1C; }
    .ubs-table tr:hover { background: #F9F9F7; }
    .ubs-table tr:last-child td { border-bottom: none; }

    /* ---- Stepper ---- */
    .ubs-stepper { display: flex; align-items: center; }
    .ubs-stepper-step { display: flex; align-items: center; gap: 8px; flex: 1; position: relative; }
    .ubs-stepper-step:not(:last-child)::after { content: ''; flex: 1; height: 2px; background: #E0DFD7; margin: 0 8px; }
    .ubs-stepper-step.is-complete:not(:last-child)::after { background: #6F7A1A; }
    .ubs-stepper-dot { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 9999px; border: 2px solid #B8B3A2; background: #FFFFFF; font-size: 0.75rem; font-weight: 700; color: #5A5D5C; flex-shrink: 0; }
    .ubs-stepper-step.is-active .ubs-stepper-dot { border-color: #E60000; color: #E60000; }
    .ubs-stepper-step.is-complete .ubs-stepper-dot { border-color: #6F7A1A; color: #FFFFFF; background: #6F7A1A; }
    .ubs-stepper-label { font-size: 0.75rem; color: #5A5D5C; white-space: nowrap; }
    .ubs-stepper-step.is-active .ubs-stepper-label { color: #1C1C1C; font-weight: 500; }

    /* ---- Recommendation ---- */
    .ubs-recommendation { display: flex; align-items: flex-start; gap: 12px; padding: 16px; background: #F9F9F7; border-radius: 8px; font-size: 0.875rem; }
    .ubs-recommendation-icon { flex-shrink: 0; color: #B98E2C; }

    /* ---- Divider ---- */
    .ubs-divider { border: none; border-top: 1px solid #E0DFD7; margin: 24px 0; }

    /* ---- Toggle ---- */
    .ubs-toggle { display: inline-flex; align-items: center; gap: 12px; cursor: pointer; font-size: 0.875rem; color: #1C1C1C; }
    .ubs-toggle-track { position: relative; width: 44px; height: 24px; background: #B8B3A2; border-radius: 9999px; transition: background 150ms ease; flex-shrink: 0; }
    .ubs-toggle-track.is-on { background: #6F7A1A; }
    .ubs-toggle-thumb { position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background: #FFFFFF; border-radius: 9999px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); transition: transform 150ms ease; }
    .ubs-toggle-track.is-on .ubs-toggle-thumb { transform: translateX(20px); }

    /* ---- Avatar ---- */
    .ubs-avatar { display: inline-flex; align-items: center; justify-content: center; border-radius: 9999px; background: #E0DFD7; color: #1C1C1C; font-weight: 700; flex-shrink: 0; overflow: hidden; }
    .ubs-avatar-sm { width: 28px; height: 28px; font-size: 0.75rem; }
    .ubs-avatar-md { width: 40px; height: 40px; font-size: 0.875rem; }
    .ubs-avatar-lg { width: 56px; height: 56px; font-size: 1.125rem; }

    /* ---- User Info ---- */
    .ubs-user-info { display: flex; align-items: center; gap: 12px; }
    .ubs-user-info-details { display: flex; flex-direction: column; }
    .ubs-user-info-name { font-size: 0.875rem; font-weight: 500; color: #1C1C1C; }
    .ubs-user-info-role { font-size: 0.8125rem; color: #5A5D5C; }

    /* ---- File Upload ---- */
    .ubs-file-upload { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; padding: 40px 24px; border: 2px dashed #B8B3A2; border-radius: 8px; background: #F9F9F7; cursor: pointer; text-align: center; }
    .ubs-file-upload:hover { border-color: #5A5D5C; background: #F4F3EE; }
    .ubs-file-upload-text { font-size: 0.875rem; color: #5A5D5C; }
    .ubs-file-upload-hint { font-size: 0.75rem; color: #8E8D83; }

    /* ---- Pagination ---- */
    .ubs-pagination { display: flex; align-items: center; gap: 4px; }
    .ubs-pagination-item { display: flex; align-items: center; justify-content: center; min-width: 36px; height: 36px; padding: 0 8px; font-size: 0.8125rem; font-weight: 500; color: #5A5D5C; border: 1px solid #E0DFD7; border-radius: 4px; background: #FFFFFF; cursor: pointer; }
    .ubs-pagination-item:hover { border-color: #5A5D5C; color: #1C1C1C; }
    .ubs-pagination-item.is-active { background: #E60000; border-color: #E60000; color: #FFFFFF; }
    .ubs-pagination-item.is-disabled { opacity: 0.4; cursor: not-allowed; }

    /* ---- Stat Group ---- */
    .ubs-stat-group { display: flex; gap: 16px; flex-wrap: wrap; }
    .ubs-stat-item { flex: 1; min-width: 140px; padding: 16px 24px; background: #FFFFFF; border: 1px solid #E0DFD7; border-radius: 8px; text-align: center; }
    .ubs-stat-value { font-size: 1.75rem; font-weight: 700; color: #1C1C1C; line-height: 1.2; }
    .ubs-stat-label { font-size: 0.8125rem; color: #5A5D5C; margin-top: 4px; }

    /* ---- Nav Tabs ---- */
    .ubs-nav-tabs { display: flex; gap: 0; border-bottom: 2px solid #E0DFD7; }
    .ubs-nav-tab { padding: 12px 24px; font-size: 0.875rem; font-weight: 500; color: #5A5D5C; cursor: pointer; border: none; background: none; border-bottom: 2px solid transparent; margin-bottom: -2px; transition: all 150ms ease; }
    .ubs-nav-tab:hover { color: #1C1C1C; }
    .ubs-nav-tab.is-active { color: #E60000; border-bottom-color: #E60000; }

    /* ---- Toolbar ---- */
    .ubs-toolbar { display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: #F9F9F7; border: 1px solid #E0DFD7; border-radius: 8px; flex-wrap: wrap; }

    /* ---- Chip Group ---- */
    .ubs-chip-group { display: flex; flex-wrap: wrap; gap: 8px; }
    .ubs-chip { display: inline-flex; align-items: center; gap: 8px; padding: 4px 12px; font-size: 0.8125rem; font-weight: 500; color: #1C1C1C; background: #F4F3EE; border-radius: 9999px; border: 1px solid #E0DFD7; }
    .ubs-chip-remove { display: flex; align-items: center; justify-content: center; width: 16px; height: 16px; font-size: 10px; color: #8E8D83; cursor: pointer; border-radius: 9999px; }
    .ubs-chip-remove:hover { color: #1C1C1C; background: #E0DFD7; }

    /* ---- Comment ---- */
    .ubs-comment { display: flex; gap: 12px; padding: 16px; background: #F9F9F7; border-radius: 8px; border: 1px solid #E0DFD7; }
    .ubs-comment-body { flex: 1; }
    .ubs-comment-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
    .ubs-comment-author { font-size: 0.8125rem; font-weight: 500; color: #1C1C1C; }
    .ubs-comment-time { font-size: 0.75rem; color: #8E8D83; }
    .ubs-comment-text { font-size: 0.875rem; color: #5A5D5C; line-height: 1.5; }

    /* ---- Activity Item ---- */
    .ubs-activity-item { display: flex; align-items: flex-start; gap: 12px; padding: 12px 0; border-bottom: 1px solid #E0DFD7; }
    .ubs-activity-item:last-child { border-bottom: none; }
    .ubs-activity-icon { display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 9999px; background: #F4F3EE; color: #5A5D5C; flex-shrink: 0; }
    .ubs-activity-content { flex: 1; }
    .ubs-activity-description { font-size: 0.875rem; color: #1C1C1C; }
    .ubs-activity-time { font-size: 0.75rem; color: #8E8D83; margin-top: 4px; }

    /* ---- Key Value ---- */
    .ubs-key-value { display: flex; justify-content: space-between; align-items: baseline; padding: 8px 0; border-bottom: 1px solid #E0DFD7; }
    .ubs-key-value:last-child { border-bottom: none; }
    .ubs-key-value-label { font-size: 0.8125rem; color: #5A5D5C; }
    .ubs-key-value-value { font-size: 0.875rem; font-weight: 500; color: #1C1C1C; text-align: right; }

    /* ---- Section Header ---- */
    .ubs-section-header { display: flex; align-items: center; justify-content: space-between; padding-bottom: 12px; border-bottom: 1px solid #E0DFD7; margin-bottom: 16px; }
    .ubs-section-header-title { font-size: 1.125rem; font-weight: 500; color: #1C1C1C; }

    /* ---- Sidebar Nav ---- */
    .ubs-sidebar-nav { display: flex; flex-direction: column; gap: 4px; min-width: 200px; }
    .ubs-sidebar-nav-item { display: flex; align-items: center; gap: 12px; padding: 8px 16px; font-size: 0.875rem; font-weight: 500; color: #5A5D5C; border-radius: 4px; cursor: pointer; border: none; background: none; width: 100%; text-align: left; transition: all 150ms ease; }
    .ubs-sidebar-nav-item:hover { background: #F4F3EE; color: #1C1C1C; }
    .ubs-sidebar-nav-item.is-active { background: #F4F3EE; color: #E60000; font-weight: 700; }

    /* ---- Breadcrumb ---- */
    .ubs-breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 0.8125rem; color: #5A5D5C; }
    .ubs-breadcrumb-item { color: #5A5D5C; text-decoration: none; cursor: pointer; }
    .ubs-breadcrumb-item:hover { color: #1C1C1C; }
    .ubs-breadcrumb-item.is-current { color: #1C1C1C; font-weight: 500; cursor: default; }
    .ubs-breadcrumb-separator { color: #8E8D83; user-select: none; }

    /* ---- Accordion ---- */
    .ubs-accordion { display: flex; flex-direction: column; border: 1px solid #E0DFD7; border-radius: 8px; overflow: hidden; }
    .ubs-accordion-item { border-bottom: 1px solid #E0DFD7; }
    .ubs-accordion-item:last-child { border-bottom: none; }
    .ubs-accordion-header { display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; font-size: 0.875rem; font-weight: 500; color: #1C1C1C; background: #FFFFFF; cursor: pointer; border: none; width: 100%; text-align: left; }
    .ubs-accordion-header:hover { background: #F9F9F7; }
    .ubs-accordion-body { padding: 16px 24px; font-size: 0.875rem; color: #5A5D5C; background: #FFFFFF; display: none; }
    .ubs-accordion-item.is-open .ubs-accordion-body { display: block; }

    /* ---- Timeline ---- */
    .ubs-timeline { display: flex; flex-direction: column; position: relative; padding-left: 24px; }
    .ubs-timeline::before { content: ''; position: absolute; left: 7px; top: 6px; bottom: 6px; width: 2px; background: #E0DFD7; }
    .ubs-timeline-item { display: flex; gap: 16px; padding-bottom: 24px; position: relative; }
    .ubs-timeline-item:last-child { padding-bottom: 0; }
    .ubs-timeline-dot { position: absolute; left: -21px; top: 4px; width: 10px; height: 10px; border-radius: 9999px; background: #B8B3A2; border: 2px solid #FFFFFF; z-index: 1; }
    .ubs-timeline-item.is-active .ubs-timeline-dot { background: #E60000; }
    .ubs-timeline-content { flex: 1; }
    .ubs-timeline-date { font-size: 0.75rem; color: #8E8D83; margin-bottom: 4px; }
    .ubs-timeline-title { font-size: 0.875rem; font-weight: 500; color: #1C1C1C; }
    .ubs-timeline-description { font-size: 0.8125rem; color: #5A5D5C; margin-top: 4px; }

    /* ---- Drawer ---- */
    .ubs-drawer { display: flex; flex-direction: column; width: 360px; max-width: 100%; background: #FFFFFF; border: 1px solid #E0DFD7; border-radius: 12px; box-shadow: 0 12px 32px rgba(0,0,0,0.14); overflow: hidden; }
    .ubs-drawer-header { display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; border-bottom: 1px solid #E0DFD7; }
    .ubs-drawer-title { font-size: 1.125rem; font-weight: 500; color: #1C1C1C; }
    .ubs-drawer-body { padding: 24px; flex: 1; overflow-y: auto; }

    /* ---- Split View ---- */
    .ubs-split-view { display: flex; gap: 0; border: 1px solid #E0DFD7; border-radius: 8px; overflow: hidden; min-height: 300px; }
    .ubs-split-view-list { width: 280px; flex-shrink: 0; border-right: 1px solid #E0DFD7; overflow-y: auto; background: #F9F9F7; }
    .ubs-split-view-list-item { padding: 12px 16px; font-size: 0.875rem; color: #1C1C1C; cursor: pointer; border-bottom: 1px solid #E0DFD7; }
    .ubs-split-view-list-item:hover { background: #F4F3EE; }
    .ubs-split-view-list-item.is-active { background: #F4F3EE; border-left: 3px solid #E60000; }
    .ubs-split-view-detail { flex: 1; padding: 24px; overflow-y: auto; }

    /* ---- Sidebar Content Layout ---- */
    .ubs-sidebar-content { display: flex; gap: 32px; min-height: 400px; }
    .ubs-sidebar-content > :first-child { flex-shrink: 0; width: 220px; }
    .ubs-sidebar-content > :last-child { flex: 1; min-width: 0; }

    /* ---- Layout helpers ---- */
    .ubs-flex-row { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
    .ubs-flex-between { display: flex; justify-content: space-between; align-items: center; }
    .ubs-stack { display: flex; flex-direction: column; }
    .ubs-stack-sm { gap: 8px; }

    /* ============================================================
       Test shell styles
       ============================================================ */

    /* ---- Test header ---- */
    .test-header {
      display: flex; align-items: center; justify-content: space-between;
      height: 56px; padding: 0 24px;
      background: #1C1C1C; color: #FFFFFF; flex-shrink: 0;
    }
    .test-header-left { display: flex; align-items: center; gap: 16px; }
    .test-header-brand {
      font-size: 1.125rem; font-weight: 700; color: #E60000;
      padding-right: 16px; border-right: 1px solid rgba(255,255,255,0.2);
    }
    .test-header-title { font-size: 1rem; font-weight: 500; }
    .test-header-right { display: flex; align-items: center; gap: 24px; }
    .test-timer {
      font-size: 1.125rem; font-weight: 700; font-variant-numeric: tabular-nums;
      padding: 4px 12px; background: rgba(255,255,255,0.1); border-radius: 4px;
    }
    .test-progress { font-size: 0.8125rem; color: rgba(255,255,255,0.7); }

    /* ---- Task instructions ---- */
    .test-instructions {
      background: #E6F5FB; border-bottom: 1px solid #009BD2;
      padding: 12px 24px;
    }
    .test-instructions-inner {
      font-size: 0.875rem; color: #3A5A88; max-width: 960px; margin: 0 auto;
    }

    /* ---- Page tabs ---- */
    .page-tabs-bar {
      display: flex; gap: 0; padding: 0 24px;
      background: #FFFFFF; border-bottom: 2px solid #E0DFD7;
    }
    .page-tab {
      padding: 12px 24px; font-size: 0.875rem; font-weight: 500;
      color: #5A5D5C; cursor: pointer; border: none; background: none;
      border-bottom: 2px solid transparent; margin-bottom: -2px;
      transition: all 150ms ease;
    }
    .page-tab:hover { color: #1C1C1C; }
    .page-tab.is-active { color: #E60000; border-bottom-color: #E60000; }

    /* ---- Main content ---- */
    .test-main {
      flex: 1; overflow-y: auto;
      padding: 32px 24px; max-width: 960px; margin: 0 auto; width: 100%;
    }
    .test-page { display: none; }
    .test-page:first-child { display: block; }

    /* ---- Page structure ---- */
    .page-header { margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #E0DFD7; }
    .page-actions { display: flex; gap: 12px; margin-top: 32px; padding-top: 24px; border-top: 1px solid #E0DFD7; }
    .page-footer { margin-top: 24px; }

    /* ---- Section ---- */
    .test-section { margin-bottom: 24px; }
    .section-title { font-size: 1.125rem; font-weight: 500; color: #1C1C1C; margin-bottom: 16px; }
    .section-stack { display: flex; flex-direction: column; }
    .section-stack[data-spacing="sm"] { gap: 8px; }
    .section-stack[data-spacing="md"] { gap: 16px; }
    .section-stack[data-spacing="lg"] { gap: 24px; }
    .section-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
    .section-grid[data-spacing="sm"] { gap: 8px; }
    .section-grid[data-spacing="md"] { gap: 16px; }
    .section-grid[data-spacing="lg"] { gap: 24px; }
    .section-flex-row { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
    .section-flex-between { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }

    /* ---- Test footer ---- */
    .test-footer {
      display: flex; justify-content: center; padding: 16px 24px;
      background: #FFFFFF; border-top: 1px solid #E0DFD7;
    }

    /* ============================================================
       Feedback overlay styles
       ============================================================ */
    .feedback-overlay {
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.5);
      display: flex; align-items: center; justify-content: center;
      z-index: 1000; padding: 24px;
    }
    .feedback-modal {
      background: #FFFFFF; border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.14);
      width: 100%; max-width: 600px; max-height: 90vh;
      overflow-y: auto;
    }
    .feedback-modal-header {
      padding: 24px 24px 16px;
      border-bottom: 1px solid #E0DFD7;
    }
    .feedback-modal-header h2 { margin-bottom: 8px; }
    .feedback-modal-body { padding: 24px; }
    .feedback-modal-footer {
      display: flex; justify-content: flex-end; gap: 12px;
      padding: 16px 24px; border-top: 1px solid #E0DFD7;
    }

    /* ---- Feedback questions ---- */
    .feedback-questions { display: flex; flex-direction: column; gap: 24px; }
    .feedback-question { display: flex; flex-direction: column; gap: 8px; }
    .feedback-question-label { font-size: 0.875rem; font-weight: 500; color: #1C1C1C; }

    .rating-group { display: flex; align-items: center; gap: 8px; }
    .rating-btn {
      width: 40px; height: 40px; border-radius: 8px;
      border: 2px solid #E0DFD7; background: #FFFFFF;
      font-size: 0.875rem; font-weight: 700; color: #5A5D5C;
      cursor: pointer; transition: all 150ms ease;
      display: flex; align-items: center; justify-content: center;
    }
    .rating-btn:hover { border-color: #E60000; color: #E60000; }
    .rating-btn.is-selected { border-color: #E60000; background: #E60000; color: #FFFFFF; }
    .rating-hint { font-size: 0.75rem; color: #8E8D83; margin-left: 8px; }

    .feedback-textarea {
      width: 100%; min-height: 80px; padding: 12px;
      font-family: inherit; font-size: 0.875rem; color: #1C1C1C;
      background: #FFFFFF; border: 1px solid #B8B3A2; border-radius: 4px;
      resize: vertical; transition: border-color 150ms ease;
    }
    .feedback-textarea:focus { border-color: #009BD2; box-shadow: 0 0 0 3px rgba(0,155,210,0.15); outline: none; }

    .yn-group { display: flex; gap: 8px; }
    .yn-btn {
      padding: 8px 24px; border-radius: 4px;
      border: 2px solid #E0DFD7; background: #FFFFFF;
      font-size: 0.875rem; font-weight: 500; color: #5A5D5C;
      cursor: pointer; transition: all 150ms ease;
    }
    .yn-btn:hover { border-color: #E60000; color: #E60000; }
    .yn-btn.is-selected { border-color: #E60000; background: #E60000; color: #FFFFFF; }

    /* ---- Test summary ---- */
    .test-summary { display: flex; flex-direction: column; gap: 12px; }
    .summary-stat {
      display: flex; justify-content: space-between; align-items: center;
      padding: 12px 0; border-bottom: 1px solid #E0DFD7;
    }
    .summary-stat:last-child { border-bottom: none; }
    .summary-label { font-size: 0.875rem; color: #5A5D5C; }
    .summary-value { font-size: 1rem; font-weight: 700; color: #1C1C1C; }
  `;
}
