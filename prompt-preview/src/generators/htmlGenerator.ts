/**
 * HTML/CSS Code Generator
 *
 * Converts a UiModel into a complete, self-contained HTML document
 * with inline UBS styles. The output works as a standalone file.
 */

import type { UiModel, UiCard, UiFormField, UiTableColumn, UiTableRow, UiNotification, UiRecommendation } from '../types';

function getInlineStyles(): string {
  return `
    /* UBS Design Tokens */
    :root {
      --ubs-white: #FFFFFF;
      --ubs-red: #E60000;
      --ubs-black: #000000;
      --ubs-gray-i: #CCCABC;
      --ubs-gray-ii: #B8B3A2;
      --ubs-gray-iii: #8E8D83;
      --ubs-gray-iv: #7A7870;
      --ubs-gray-v: #5A5D5C;
      --ubs-gray-vi: #404040;
      --ubs-bordeaux-i: #BD000C;
      --ubs-pastel-i: #ECEBE4;
      --ubs-pastel-ii: #F5F0E1;
      --ubs-rag-red: #BD000C;
      --ubs-rag-amber: #E4A911;
      --ubs-rag-green: #6F7A1A;
      --ubs-bronze-i: #B98E2C;
    }

    /* Reset */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: "Frutiger", Arial, sans-serif;
      font-size: 16px;
      line-height: 1.5;
      color: #000000;
      background: #FFFFFF;
      -webkit-font-smoothing: antialiased;
    }

    /* Container */
    .ubs-container { max-width: 1200px; margin: 0 auto; padding: 24px; }

    /* Page header */
    .ubs-page-header { margin-bottom: 32px; }
    .ubs-page-header__title {
      font-size: 2.25rem; font-weight: 700; line-height: 1.2; margin-bottom: 8px;
    }
    .ubs-page-header__intro {
      font-size: 1rem; color: #5A5D5C; line-height: 1.75; max-width: 640px;
    }

    /* Hero */
    .ubs-hero {
      padding: 64px 0 48px; border-bottom: 1px solid #CCCABC; margin-bottom: 32px;
    }
    .ubs-hero__title {
      font-size: 3rem; font-weight: 700; line-height: 1.2; margin-bottom: 12px;
    }
    .ubs-hero__subtitle {
      font-size: 1.125rem; color: #5A5D5C; line-height: 1.75; max-width: 560px;
    }

    /* Grid */
    .ubs-grid--auto {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;
    }

    /* Cards */
    .ubs-card {
      background: #FFFFFF; border: 1px solid #CCCABC; border-radius: 8px;
      padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      transition: box-shadow 250ms ease;
    }
    .ubs-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .ubs-card__header {
      display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;
    }
    .ubs-card__title { font-size: 1.125rem; font-weight: 500; }
    .ubs-card__body { margin-bottom: 16px; }
    .ubs-card__body p { font-size: 0.8125rem; color: #5A5D5C; line-height: 1.5; }
    .ubs-card__metric { margin-bottom: 12px; }
    .ubs-card__metric-value { font-size: 1.75rem; font-weight: 700; display: block; }
    .ubs-card__metric-label {
      font-size: 0.75rem; color: #8E8D83; text-transform: uppercase; letter-spacing: 0.05em;
    }
    .ubs-card__footer {
      display: flex; gap: 8px; padding-top: 12px; border-top: 1px solid #CCCABC;
    }

    /* Badges */
    .ubs-badge {
      display: inline-flex; align-items: center; gap: 4px;
      padding: 4px 12px; font-size: 0.75rem; font-weight: 500;
      border-radius: 9999px; text-transform: capitalize;
    }
    .ubs-badge::before {
      content: ''; display: inline-block; width: 8px; height: 8px; border-radius: 50%;
    }
    .ubs-badge--operational { background: rgba(111,122,26,0.12); color: #6F7A1A; }
    .ubs-badge--operational::before { background: #6F7A1A; }
    .ubs-badge--degraded { background: rgba(228,169,17,0.12); color: #8a6600; }
    .ubs-badge--degraded::before { background: #E4A911; }
    .ubs-badge--outage { background: rgba(189,0,12,0.1); color: #BD000C; }
    .ubs-badge--outage::before { background: #BD000C; }
    .ubs-badge--maintenance { background: rgba(90,93,92,0.1); color: #5A5D5C; }
    .ubs-badge--maintenance::before { background: #8E8D83; }

    /* Buttons */
    .ubs-btn {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 8px 24px; font-size: 0.8125rem; font-weight: 500;
      border-radius: 4px; border: 1px solid transparent; cursor: pointer;
      transition: all 150ms ease; text-decoration: none; font-family: inherit;
    }
    .ubs-btn--primary { background: #E60000; color: #FFFFFF; border-color: #E60000; }
    .ubs-btn--primary:hover { background: #BD000C; }
    .ubs-btn--secondary { background: transparent; color: #000; border-color: #8E8D83; }
    .ubs-btn--secondary:hover { background: #ECEBE4; }
    .ubs-btn--ghost { background: transparent; color: #5A5D5C; border-color: transparent; }
    .ubs-btn--ghost:hover { background: #ECEBE4; color: #000; }
    .ubs-btn--sm { padding: 4px 12px; font-size: 0.75rem; }

    /* Forms */
    .ubs-stack { display: flex; flex-direction: column; gap: 16px; }
    .ubs-form-group { display: flex; flex-direction: column; gap: 4px; }
    .ubs-label { font-size: 0.8125rem; font-weight: 500; }
    .ubs-label--required::after { content: ' *'; color: #E60000; }
    .ubs-input, .ubs-textarea, .ubs-select {
      width: 100%; padding: 8px 12px; font-size: 0.8125rem; font-family: inherit;
      border: 1px solid #CCCABC; border-radius: 4px; background: #FFFFFF; color: #000;
    }
    .ubs-input:focus, .ubs-textarea:focus, .ubs-select:focus {
      outline: none; border-color: #E60000; box-shadow: 0 0 0 3px rgba(230,0,0,0.12);
    }
    .ubs-textarea { resize: vertical; min-height: 80px; }
    .ubs-checkbox-group { display: flex; align-items: flex-start; gap: 8px; }
    .ubs-checkbox-group input[type="checkbox"] { width: 18px; height: 18px; accent-color: #E60000; }

    /* Alerts */
    .ubs-alert {
      display: flex; gap: 12px; padding: 16px; border-radius: 8px; border-left: 4px solid;
    }
    .ubs-alert__icon {
      width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 0.75rem; border-radius: 50%; flex-shrink: 0;
    }
    .ubs-alert__content { flex: 1; }
    .ubs-alert__title { font-size: 0.8125rem; font-weight: 700; margin-bottom: 4px; }
    .ubs-alert__message { font-size: 0.8125rem; line-height: 1.5; }
    .ubs-alert--info { background: rgba(90,93,92,0.06); border-left-color: #5A5D5C; }
    .ubs-alert--info .ubs-alert__title { color: #404040; }
    .ubs-alert--info .ubs-alert__message { color: #5A5D5C; }
    .ubs-alert--info .ubs-alert__icon { background: #5A5D5C; color: #FFF; }
    .ubs-alert--success { background: rgba(111,122,26,0.06); border-left-color: #6F7A1A; }
    .ubs-alert--success .ubs-alert__title { color: #6F7A1A; }
    .ubs-alert--success .ubs-alert__message { color: #5A5D5C; }
    .ubs-alert--success .ubs-alert__icon { background: #6F7A1A; color: #FFF; }
    .ubs-alert--warning { background: rgba(228,169,17,0.08); border-left-color: #E4A911; }
    .ubs-alert--warning .ubs-alert__title { color: #8a6600; }
    .ubs-alert--warning .ubs-alert__message { color: #5A5D5C; }
    .ubs-alert--warning .ubs-alert__icon { background: #E4A911; color: #FFF; }
    .ubs-alert--error { background: rgba(189,0,12,0.06); border-left-color: #BD000C; }
    .ubs-alert--error .ubs-alert__title { color: #BD000C; }
    .ubs-alert--error .ubs-alert__message { color: #5A5D5C; }
    .ubs-alert--error .ubs-alert__icon { background: #BD000C; color: #FFF; }

    /* Tables */
    .ubs-table {
      width: 100%; font-size: 0.8125rem; border: 1px solid #CCCABC;
      border-radius: 8px; overflow: hidden; border-collapse: collapse;
    }
    .ubs-table thead { background: #ECEBE4; }
    .ubs-table th {
      padding: 12px 16px; text-align: left; font-weight: 500; border-bottom: 2px solid #CCCABC;
    }
    .ubs-table th[data-align="right"] { text-align: right; }
    .ubs-table th[data-align="centre"] { text-align: center; }
    .ubs-table td { padding: 12px 16px; border-bottom: 1px solid #CCCABC; }
    .ubs-table td[data-align="right"] { text-align: right; }
    .ubs-table td[data-align="centre"] { text-align: center; }
    .ubs-table tbody tr:nth-child(even) { background: rgba(236,235,228,0.3); }

    /* Recommendations */
    .ubs-recommendation {
      display: flex; gap: 12px; padding: 16px; background: #ECEBE4;
      border-radius: 8px; border: 1px solid #CCCABC;
    }
    .ubs-recommendation__icon {
      width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;
      background: #B98E2C; color: #FFF; border-radius: 4px; font-size: 0.8125rem; font-weight: 700;
      flex-shrink: 0;
    }
    .ubs-recommendation__content { flex: 1; }
    .ubs-recommendation__title { font-size: 0.8125rem; font-weight: 500; margin-bottom: 4px; }
    .ubs-recommendation__desc { font-size: 0.8125rem; color: #5A5D5C; line-height: 1.5; }

    /* Section heading */
    .ubs-section-heading {
      font-size: 1.375rem; font-weight: 500; margin-bottom: 16px;
      padding-bottom: 8px; border-bottom: 2px solid #E60000; display: inline-block;
    }

    /* Support message */
    .ubs-support-message {
      padding: 24px; background: #F5F0E1; border-radius: 8px;
      border: 1px solid #CCCABC; font-size: 0.8125rem; color: #5A5D5C; line-height: 1.75;
    }

    /* Footer */
    .ubs-footer {
      padding-top: 32px; margin-top: 32px; border-top: 1px solid #CCCABC;
      font-size: 0.75rem; color: #8E8D83;
    }

    /* Heading helpers */
    .ubs-heading-3 { font-size: 1.375rem; font-weight: 500; }
    .ubs-body--small { font-size: 0.8125rem; }
    .ubs-text--secondary { color: #5A5D5C; }
  `;
}

function cardHtml(card: UiCard): string {
  const lines: string[] = [];
  lines.push(`      <div class="ubs-card">`);
  lines.push(`        <div class="ubs-card__header">`);
  lines.push(`          <h3 class="ubs-card__title">${card.title}</h3>`);
  if (card.status) {
    lines.push(`          <span class="ubs-badge ubs-badge--${card.status}">${card.status}</span>`);
  }
  lines.push(`        </div>`);
  if (card.metric) {
    lines.push(`        <div class="ubs-card__metric">`);
    lines.push(`          <span class="ubs-card__metric-value">${card.metric}</span>`);
    if (card.metricLabel) {
      lines.push(`          <span class="ubs-card__metric-label">${card.metricLabel}</span>`);
    }
    lines.push(`        </div>`);
  }
  if (card.message) {
    lines.push(`        <div class="ubs-card__body">`);
    lines.push(`          <p>${card.message}</p>`);
    lines.push(`        </div>`);
  }
  if (card.primaryAction || card.secondaryAction) {
    lines.push(`        <div class="ubs-card__footer">`);
    if (card.primaryAction) {
      lines.push(`          <button class="ubs-btn ubs-btn--primary ubs-btn--sm">${card.primaryAction}</button>`);
    }
    if (card.secondaryAction) {
      lines.push(`          <button class="ubs-btn ubs-btn--ghost ubs-btn--sm">${card.secondaryAction}</button>`);
    }
    lines.push(`        </div>`);
  }
  lines.push(`      </div>`);
  return lines.join('\n');
}

function formFieldHtml(field: UiFormField, idx: number): string {
  const lines: string[] = [];
  const reqClass = field.required ? ' ubs-label--required' : '';

  if (field.type === 'checkbox') {
    lines.push(`        <div class="ubs-checkbox-group">`);
    lines.push(`          <input type="checkbox" id="field-${idx}" ${field.required ? 'required ' : ''}/>`);
    lines.push(`          <label for="field-${idx}" class="ubs-label">${field.label}</label>`);
    lines.push(`        </div>`);
  } else {
    lines.push(`        <div class="ubs-form-group">`);
    lines.push(`          <label for="field-${idx}" class="ubs-label${reqClass}">${field.label}</label>`);
    if (field.type === 'select' && field.options) {
      lines.push(`          <select id="field-${idx}" class="ubs-select" ${field.required ? 'required ' : ''}>`);
      lines.push(`            <option value="">Select an option</option>`);
      for (const opt of field.options) {
        lines.push(`            <option value="${opt}">${opt}</option>`);
      }
      lines.push(`          </select>`);
    } else if (field.type === 'textarea') {
      lines.push(`          <textarea id="field-${idx}" class="ubs-textarea" placeholder="${field.placeholder || ''}" rows="4" ${field.required ? 'required ' : ''}></textarea>`);
    } else {
      lines.push(`          <input id="field-${idx}" type="${field.type}" class="ubs-input" placeholder="${field.placeholder || ''}" ${field.required ? 'required ' : ''}/>`);
    }
    lines.push(`        </div>`);
  }
  return lines.join('\n');
}

function notifHtml(notif: UiNotification): string {
  const iconMap: Record<string, string> = { info: 'i', success: '\u2713', warning: '!', error: '\u2717' };
  const lines: string[] = [];
  lines.push(`        <div class="ubs-alert ubs-alert--${notif.type}" role="alert">`);
  lines.push(`          <div class="ubs-alert__icon">${iconMap[notif.type] || 'i'}</div>`);
  lines.push(`          <div class="ubs-alert__content">`);
  lines.push(`            <div class="ubs-alert__title">${notif.title}</div>`);
  lines.push(`            <div class="ubs-alert__message">${notif.message}</div>`);
  if (notif.action) {
    lines.push(`            <button class="ubs-btn ubs-btn--ghost ubs-btn--sm" style="margin-top: 8px">${notif.action}</button>`);
  }
  lines.push(`          </div>`);
  lines.push(`        </div>`);
  return lines.join('\n');
}

function recHtml(rec: UiRecommendation): string {
  const lines: string[] = [];
  lines.push(`        <div class="ubs-recommendation">`);
  lines.push(`          <div class="ubs-recommendation__icon">\u2728</div>`);
  lines.push(`          <div class="ubs-recommendation__content">`);
  lines.push(`            <div class="ubs-recommendation__title">${rec.title}</div>`);
  lines.push(`            <div class="ubs-recommendation__desc">${rec.description}</div>`);
  if (rec.action) {
    lines.push(`            <button class="ubs-btn ubs-btn--ghost ubs-btn--sm" style="margin-top: 8px">${rec.action}</button>`);
  }
  lines.push(`          </div>`);
  lines.push(`        </div>`);
  return lines.join('\n');
}

function tableHtml(columns: UiTableColumn[], rows: UiTableRow[]): string {
  const lines: string[] = [];
  lines.push(`      <table class="ubs-table">`);
  lines.push(`        <thead>`);
  lines.push(`          <tr>`);
  for (const col of columns) {
    const align = col.align ? ` data-align="${col.align}"` : '';
    lines.push(`            <th${align}>${col.label}</th>`);
  }
  lines.push(`          </tr>`);
  lines.push(`        </thead>`);
  lines.push(`        <tbody>`);
  for (const row of rows) {
    lines.push(`          <tr>`);
    for (const col of columns) {
      const align = col.align ? ` data-align="${col.align}"` : '';
      lines.push(`            <td${align}>${String(row[col.key])}</td>`);
    }
    lines.push(`          </tr>`);
  }
  lines.push(`        </tbody>`);
  lines.push(`      </table>`);
  return lines.join('\n');
}

export function generateHtmlCode(model: UiModel): string {
  const lines: string[] = [];

  lines.push(`<!DOCTYPE html>`);
  lines.push(`<html lang="en">`);
  lines.push(`<head>`);
  lines.push(`  <meta charset="UTF-8" />`);
  lines.push(`  <meta name="viewport" content="width=device-width, initial-scale=1.0" />`);
  lines.push(`  <title>${model.title} | UBS</title>`);
  lines.push(`  <style>${getInlineStyles()}</style>`);
  lines.push(`</head>`);
  lines.push(`<body>`);
  lines.push(`  <main class="ubs-container">`);

  // Page header or hero
  if (model.pageType === 'landing-page') {
    lines.push(`    <!-- Hero section -->`);
    lines.push(`    <div class="ubs-hero">`);
    lines.push(`      <h1 class="ubs-hero__title">${model.title}</h1>`);
    if (model.intro) {
      lines.push(`      <p class="ubs-hero__subtitle">${model.intro}</p>`);
    }
    lines.push(`    </div>`);
  } else {
    lines.push(`    <!-- Page header -->`);
    lines.push(`    <div class="ubs-page-header">`);
    lines.push(`      <h1 class="ubs-page-header__title">${model.title}</h1>`);
    if (model.intro) {
      lines.push(`      <p class="ubs-page-header__intro">${model.intro}</p>`);
    }
    lines.push(`    </div>`);
  }

  // Cards
  if (model.cards && model.cards.length > 0) {
    lines.push(``);
    lines.push(`    <!-- Cards -->`);
    lines.push(`    <div class="ubs-grid--auto">`);
    for (const card of model.cards) {
      lines.push(cardHtml(card));
    }
    lines.push(`    </div>`);
  }

  // Form
  if (model.form) {
    lines.push(``);
    lines.push(`    <!-- Form -->`);
    lines.push(`    <form class="ubs-stack">`);
    if (model.form.title) {
      lines.push(`      <h2 class="ubs-heading-3">${model.form.title}</h2>`);
    }
    if (model.form.description) {
      lines.push(`      <p class="ubs-body--small ubs-text--secondary">${model.form.description}</p>`);
    }
    model.form.fields.forEach((field, i) => {
      lines.push(formFieldHtml(field, i));
    });
    lines.push(`      <div>`);
    lines.push(`        <button type="submit" class="ubs-btn ubs-btn--primary">${model.form.submitLabel || 'Submit'}</button>`);
    lines.push(`      </div>`);
    lines.push(`    </form>`);
  }

  // Table
  if (model.table) {
    lines.push(``);
    lines.push(`    <!-- Data table -->`);
    lines.push(tableHtml(model.table.columns, model.table.rows));
  }

  // Notifications
  if (model.notifications && model.notifications.length > 0) {
    lines.push(``);
    lines.push(`    <!-- Notifications -->`);
    lines.push(`    <div class="ubs-stack">`);
    for (const n of model.notifications) {
      lines.push(notifHtml(n));
    }
    lines.push(`    </div>`);
  }

  // Recommendations
  if (model.recommendations && model.recommendations.length > 0) {
    lines.push(``);
    lines.push(`    <!-- Recommendations -->`);
    lines.push(`    <div style="margin-top: 48px">`);
    lines.push(`      <h2 class="ubs-section-heading">Recommendations</h2>`);
    lines.push(`      <div class="ubs-stack">`);
    for (const rec of model.recommendations) {
      lines.push(recHtml(rec));
    }
    lines.push(`      </div>`);
    lines.push(`    </div>`);
  }

  // Support message
  if (model.supportMessage) {
    lines.push(``);
    lines.push(`    <!-- Support -->`);
    lines.push(`    <div class="ubs-support-message" style="margin-top: 48px">`);
    lines.push(`      <p>${model.supportMessage}</p>`);
    lines.push(`    </div>`);
  }

  // Footer
  if (model.footerText) {
    lines.push(``);
    lines.push(`    <footer class="ubs-footer">`);
    lines.push(`      <p>${model.footerText}</p>`);
    lines.push(`    </footer>`);
  }

  lines.push(`  </main>`);
  lines.push(`</body>`);
  lines.push(`</html>`);

  return lines.join('\n');
}
