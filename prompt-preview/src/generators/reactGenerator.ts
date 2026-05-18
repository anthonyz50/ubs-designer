/**
 * React Code Generator
 *
 * Converts a UiModel into a complete React functional component string.
 * Output uses UBS CSS class names and follows TypeScript conventions.
 *
 * UBS Typography Hierarchy (16 levels):
 *   keyline, infoline, subheadline1-4, leadText1-2, quotes, subtitles,
 *   copyText, pageNumbers, senderInfo, smallCopyText, environmentalInfo,
 *   captions, footnote.
 *   Font: Frutiger (Arial fallback). Weights: light, lightItalic,
 *   lightBold, roman, lightCondensed.
 *   Web: min 14px, body 16px, body line-height 22px, large text 25px+.
 *
 * Accessibility: WCAG 2.2 Level AA.
 *   Text contrast: 4.5:1. Large text (over 25px): 3:1.
 *   Icons and graphics: 3:1. Colour alone must never convey meaning.
 *   All non-decorative images require alternative text.
 */

import type { UiModel, UiCard, UiFormField, UiTableColumn, UiTableRow, UiNotification, UiRecommendation } from '../types';

// indent helper available for future use:
// function indent(text: string, level: number): string {
//   const spaces = '  '.repeat(level);
//   return text.split('\n').map(line => line.trim() ? spaces + line : '').join('\n');
// }

function generateCardJsx(card: UiCard, idx: number): string {
  const lines: string[] = [];
  lines.push(`      <div key={${idx}} className="ubs-card">`);
  lines.push(`        <div className="ubs-card__header">`);
  lines.push(`          <h3 className="ubs-card__title">${card.title}</h3>`);
  if (card.status) {
    lines.push(`          <span className="ubs-badge ubs-badge--${card.status}">${card.status}</span>`);
  }
  lines.push(`        </div>`);
  if (card.metric) {
    lines.push(`        <div className="ubs-card__metric">`);
    lines.push(`          <span className="ubs-card__metric-value">${card.metric}</span>`);
    if (card.metricLabel) {
      lines.push(`          <span className="ubs-card__metric-label">${card.metricLabel}</span>`);
    }
    lines.push(`        </div>`);
  }
  if (card.message) {
    lines.push(`        <div className="ubs-card__body">`);
    lines.push(`          <p>${card.message}</p>`);
    lines.push(`        </div>`);
  }
  if (card.primaryAction || card.secondaryAction) {
    lines.push(`        <div className="ubs-card__footer">`);
    if (card.primaryAction) {
      lines.push(`          <button className="ubs-btn ubs-btn--primary ubs-btn--sm">${card.primaryAction}</button>`);
    }
    if (card.secondaryAction) {
      lines.push(`          <button className="ubs-btn ubs-btn--ghost ubs-btn--sm">${card.secondaryAction}</button>`);
    }
    lines.push(`        </div>`);
  }
  lines.push(`      </div>`);
  return lines.join('\n');
}

function generateFormFieldJsx(field: UiFormField, idx: number): string {
  const lines: string[] = [];
  const reqClass = field.required ? ' ubs-label--required' : '';

  if (field.type === 'checkbox') {
    lines.push(`      <div key={${idx}} className="ubs-checkbox-group">`);
    lines.push(`        <input type="checkbox" id="field-${idx}" ${field.required ? 'required ' : ''}/>`);
    lines.push(`        <label htmlFor="field-${idx}" className="ubs-label">${field.label}</label>`);
    lines.push(`      </div>`);
  } else {
    lines.push(`      <div key={${idx}} className="ubs-form-group">`);
    lines.push(`        <label htmlFor="field-${idx}" className="ubs-label${reqClass}">${field.label}</label>`);
    if (field.type === 'select' && field.options) {
      lines.push(`        <select id="field-${idx}" className="ubs-select" ${field.required ? 'required ' : ''}>`);
      lines.push(`          <option value="">Select an option</option>`);
      for (const opt of field.options) {
        lines.push(`          <option value="${opt}">${opt}</option>`);
      }
      lines.push(`        </select>`);
    } else if (field.type === 'textarea') {
      lines.push(`        <textarea id="field-${idx}" className="ubs-textarea" placeholder="${field.placeholder || ''}" rows={4} ${field.required ? 'required ' : ''}/>`);
    } else {
      lines.push(`        <input id="field-${idx}" type="${field.type}" className="ubs-input" placeholder="${field.placeholder || ''}" ${field.required ? 'required ' : ''}/>`);
    }
    lines.push(`      </div>`);
  }
  return lines.join('\n');
}

function generateNotificationJsx(notif: UiNotification, idx: number): string {
  const iconMap: Record<string, string> = { info: 'i', success: '\u2713', warning: '!', error: '\u2717' };
  const lines: string[] = [];
  lines.push(`      <div key={${idx}} className="ubs-alert ubs-alert--${notif.type}" role="alert">`);
  lines.push(`        <div className="ubs-alert__icon">${iconMap[notif.type] || 'i'}</div>`);
  lines.push(`        <div className="ubs-alert__content">`);
  lines.push(`          <div className="ubs-alert__title">${notif.title}</div>`);
  lines.push(`          <div className="ubs-alert__message">${notif.message}</div>`);
  if (notif.action) {
    lines.push(`          <button className="ubs-btn ubs-btn--ghost ubs-btn--sm" style={{ marginTop: '8px' }}>${notif.action}</button>`);
  }
  lines.push(`        </div>`);
  lines.push(`      </div>`);
  return lines.join('\n');
}

function generateRecommendationJsx(rec: UiRecommendation, idx: number): string {
  const lines: string[] = [];
  lines.push(`      <div key={${idx}} className="ubs-recommendation">`);
  lines.push(`        <div className="ubs-recommendation__icon">\u2728</div>`);
  lines.push(`        <div className="ubs-recommendation__content">`);
  lines.push(`          <div className="ubs-recommendation__title">${rec.title}</div>`);
  lines.push(`          <div className="ubs-recommendation__desc">${rec.description}</div>`);
  if (rec.action) {
    lines.push(`          <button className="ubs-btn ubs-btn--ghost ubs-btn--sm" style={{ marginTop: '8px' }}>${rec.action}</button>`);
  }
  lines.push(`        </div>`);
  lines.push(`      </div>`);
  return lines.join('\n');
}

function generateTableJsx(columns: UiTableColumn[], rows: UiTableRow[]): string {
  const lines: string[] = [];
  lines.push(`      <table className="ubs-table">`);
  lines.push(`        <thead>`);
  lines.push(`          <tr>`);
  for (const col of columns) {
    const align = col.align ? ` data-align="${col.align}"` : '';
    lines.push(`            <th${align}>${col.label}</th>`);
  }
  lines.push(`          </tr>`);
  lines.push(`        </thead>`);
  lines.push(`        <tbody>`);
  for (let r = 0; r < rows.length; r++) {
    lines.push(`          <tr>`);
    for (const col of columns) {
      const align = col.align ? ` data-align="${col.align}"` : '';
      lines.push(`            <td${align}>{${JSON.stringify(String(rows[r][col.key]))}}</td>`);
    }
    lines.push(`          </tr>`);
  }
  lines.push(`        </tbody>`);
  lines.push(`      </table>`);
  return lines.join('\n');
}

export function generateReactCode(model: UiModel): string {
  const lines: string[] = [];

  lines.push(`import React from 'react';`);
  lines.push(`import './ubs-theme.css';`);
  lines.push(``);
  lines.push(`/**`);
  lines.push(` * ${model.title}`);
  lines.push(` *`);
  lines.push(` * Auto-generated UBS-branded React component.`);
  lines.push(` * Page type: ${model.pageType}`);
  lines.push(` *`);
  lines.push(` * UBS Design System`);
  lines.push(` * Accessibility: WCAG 2.2 Level AA`);
  lines.push(` * Typography: Frutiger (Arial fallback), 16-level hierarchy`);
  lines.push(` * Contrast: 4.5:1 text, 3:1 large text (25px+), 3:1 icons/graphics`);
  lines.push(` * Colour rules: never use UBS Red for numbers, no red highlighting in messages`);
  lines.push(` */`);
  lines.push(``);

  const componentName = model.title
    .split(/\s+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '');

  lines.push(`const ${componentName}: React.FC = () => {`);
  lines.push(`  return (`);
  lines.push(`    <div className="ubs-container">`);

  // Page header (or hero for landing pages)
  if (model.pageType === 'landing-page') {
    lines.push(`      {/* Hero section */}`);
    lines.push(`      <div className="ubs-hero">`);
    lines.push(`        <h1 className="ubs-hero__title">${model.title}</h1>`);
    if (model.intro) {
      lines.push(`        <p className="ubs-hero__subtitle">${model.intro}</p>`);
    }
    lines.push(`      </div>`);
  } else {
    lines.push(`      {/* Page header */}`);
    lines.push(`      <div className="ubs-page-header">`);
    lines.push(`        <h1 className="ubs-page-header__title">${model.title}</h1>`);
    if (model.intro) {
      lines.push(`        <p className="ubs-page-header__intro">${model.intro}</p>`);
    }
    lines.push(`      </div>`);
  }

  // Cards grid
  if (model.cards && model.cards.length > 0) {
    lines.push(``);
    lines.push(`      {/* Cards */}`);
    lines.push(`      <div className="ubs-grid--auto">`);
    model.cards.forEach((card, i) => {
      lines.push(generateCardJsx(card, i));
    });
    lines.push(`      </div>`);
  }

  // Form
  if (model.form) {
    lines.push(``);
    lines.push(`      {/* Form */}`);
    lines.push(`      <form className="ubs-stack" onSubmit={(e) => e.preventDefault()}>`);
    if (model.form.title) {
      lines.push(`        <h2 className="ubs-heading-3">${model.form.title}</h2>`);
    }
    if (model.form.description) {
      lines.push(`        <p className="ubs-body--small ubs-text--secondary">${model.form.description}</p>`);
    }
    model.form.fields.forEach((field, i) => {
      lines.push(generateFormFieldJsx(field, i));
    });
    lines.push(`        <div>`);
    lines.push(`          <button type="submit" className="ubs-btn ubs-btn--primary">${model.form.submitLabel || 'Submit'}</button>`);
    lines.push(`        </div>`);
    lines.push(`      </form>`);
  }

  // Table
  if (model.table) {
    lines.push(``);
    lines.push(`      {/* Data table */}`);
    lines.push(generateTableJsx(model.table.columns, model.table.rows));
  }

  // Notifications
  if (model.notifications && model.notifications.length > 0) {
    lines.push(``);
    lines.push(`      {/* Notifications */}`);
    lines.push(`      <div className="ubs-stack">`);
    model.notifications.forEach((notif, i) => {
      lines.push(generateNotificationJsx(notif, i));
    });
    lines.push(`      </div>`);
  }

  // Recommendations
  if (model.recommendations && model.recommendations.length > 0) {
    lines.push(``);
    lines.push(`      {/* Recommendations */}`);
    lines.push(`      <div style={{ marginTop: '48px' }}>`);
    lines.push(`        <h2 className="ubs-section-heading">Recommendations</h2>`);
    lines.push(`        <div className="ubs-stack">`);
    model.recommendations.forEach((rec, i) => {
      lines.push(generateRecommendationJsx(rec, i));
    });
    lines.push(`        </div>`);
    lines.push(`      </div>`);
  }

  // Support message
  if (model.supportMessage) {
    lines.push(``);
    lines.push(`      {/* Support */}`);
    lines.push(`      <div className="ubs-support-message" style={{ marginTop: '48px' }}>`);
    lines.push(`        <p>${model.supportMessage}</p>`);
    lines.push(`      </div>`);
  }

  // Footer
  if (model.footerText) {
    lines.push(``);
    lines.push(`      <footer className="ubs-footer">`);
    lines.push(`        <p>${model.footerText}</p>`);
    lines.push(`      </footer>`);
  }

  lines.push(`    </div>`);
  lines.push(`  );`);
  lines.push(`};`);
  lines.push(``);
  lines.push(`export default ${componentName};`);

  return lines.join('\n');
}
