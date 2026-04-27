/**
 * Angular Code Generator
 *
 * Converts a UiModel into an Angular component string.
 * Output includes @Component decorator, template, and component class.
 */

import type { UiModel, UiCard, UiFormField, UiTableColumn, UiTableRow, UiNotification, UiRecommendation } from '../types';

function generateCardTemplate(card: UiCard): string {
  const lines: string[] = [];
  lines.push(`    <div class="ubs-card">`);
  lines.push(`      <div class="ubs-card__header">`);
  lines.push(`        <h3 class="ubs-card__title">${card.title}</h3>`);
  if (card.status) {
    lines.push(`        <span class="ubs-badge ubs-badge--${card.status}">${card.status}</span>`);
  }
  lines.push(`      </div>`);
  if (card.metric) {
    lines.push(`      <div class="ubs-card__metric">`);
    lines.push(`        <span class="ubs-card__metric-value">${card.metric}</span>`);
    if (card.metricLabel) {
      lines.push(`        <span class="ubs-card__metric-label">${card.metricLabel}</span>`);
    }
    lines.push(`      </div>`);
  }
  if (card.message) {
    lines.push(`      <div class="ubs-card__body">`);
    lines.push(`        <p>${card.message}</p>`);
    lines.push(`      </div>`);
  }
  if (card.primaryAction || card.secondaryAction) {
    lines.push(`      <div class="ubs-card__footer">`);
    if (card.primaryAction) {
      lines.push(`        <button class="ubs-btn ubs-btn--primary ubs-btn--sm">${card.primaryAction}</button>`);
    }
    if (card.secondaryAction) {
      lines.push(`        <button class="ubs-btn ubs-btn--ghost ubs-btn--sm">${card.secondaryAction}</button>`);
    }
    lines.push(`      </div>`);
  }
  lines.push(`    </div>`);
  return lines.join('\n');
}

function generateFormFieldTemplate(field: UiFormField, idx: number): string {
  const lines: string[] = [];
  const reqClass = field.required ? ' ubs-label--required' : '';

  if (field.type === 'checkbox') {
    lines.push(`    <div class="ubs-checkbox-group">`);
    lines.push(`      <input type="checkbox" id="field-${idx}" ${field.required ? 'required ' : ''}/>`);
    lines.push(`      <label for="field-${idx}" class="ubs-label">${field.label}</label>`);
    lines.push(`    </div>`);
  } else {
    lines.push(`    <div class="ubs-form-group">`);
    lines.push(`      <label for="field-${idx}" class="ubs-label${reqClass}">${field.label}</label>`);
    if (field.type === 'select' && field.options) {
      lines.push(`      <select id="field-${idx}" class="ubs-select" ${field.required ? 'required ' : ''}>`);
      lines.push(`        <option value="">Select an option</option>`);
      for (const opt of field.options) {
        lines.push(`        <option value="${opt}">${opt}</option>`);
      }
      lines.push(`      </select>`);
    } else if (field.type === 'textarea') {
      lines.push(`      <textarea id="field-${idx}" class="ubs-textarea" placeholder="${field.placeholder || ''}" rows="4" ${field.required ? 'required ' : ''}></textarea>`);
    } else {
      lines.push(`      <input id="field-${idx}" type="${field.type}" class="ubs-input" placeholder="${field.placeholder || ''}" ${field.required ? 'required ' : ''}/>`);
    }
    lines.push(`    </div>`);
  }
  return lines.join('\n');
}

function generateNotificationTemplate(notif: UiNotification): string {
  const iconMap: Record<string, string> = { info: 'i', success: '\u2713', warning: '!', error: '\u2717' };
  const lines: string[] = [];
  lines.push(`    <div class="ubs-alert ubs-alert--${notif.type}" role="alert">`);
  lines.push(`      <div class="ubs-alert__icon">${iconMap[notif.type] || 'i'}</div>`);
  lines.push(`      <div class="ubs-alert__content">`);
  lines.push(`        <div class="ubs-alert__title">${notif.title}</div>`);
  lines.push(`        <div class="ubs-alert__message">${notif.message}</div>`);
  if (notif.action) {
    lines.push(`        <button class="ubs-btn ubs-btn--ghost ubs-btn--sm" style="margin-top: 8px">${notif.action}</button>`);
  }
  lines.push(`      </div>`);
  lines.push(`    </div>`);
  return lines.join('\n');
}

function generateRecommendationTemplate(rec: UiRecommendation): string {
  const lines: string[] = [];
  lines.push(`    <div class="ubs-recommendation">`);
  lines.push(`      <div class="ubs-recommendation__icon">\u2728</div>`);
  lines.push(`      <div class="ubs-recommendation__content">`);
  lines.push(`        <div class="ubs-recommendation__title">${rec.title}</div>`);
  lines.push(`        <div class="ubs-recommendation__desc">${rec.description}</div>`);
  if (rec.action) {
    lines.push(`        <button class="ubs-btn ubs-btn--ghost ubs-btn--sm" style="margin-top: 8px">${rec.action}</button>`);
  }
  lines.push(`      </div>`);
  lines.push(`    </div>`);
  return lines.join('\n');
}

function generateTableTemplate(columns: UiTableColumn[], rows: UiTableRow[]): string {
  const lines: string[] = [];
  lines.push(`    <table class="ubs-table">`);
  lines.push(`      <thead>`);
  lines.push(`        <tr>`);
  for (const col of columns) {
    const align = col.align ? ` data-align="${col.align}"` : '';
    lines.push(`          <th${align}>${col.label}</th>`);
  }
  lines.push(`        </tr>`);
  lines.push(`      </thead>`);
  lines.push(`      <tbody>`);
  for (const row of rows) {
    lines.push(`        <tr>`);
    for (const col of columns) {
      const align = col.align ? ` data-align="${col.align}"` : '';
      lines.push(`          <td${align}>${String(row[col.key])}</td>`);
    }
    lines.push(`        </tr>`);
  }
  lines.push(`      </tbody>`);
  lines.push(`    </table>`);
  return lines.join('\n');
}

export function generateAngularCode(model: UiModel): string {
  const lines: string[] = [];

  const kebabName = model.title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-');

  const className = model.title
    .split(/\s+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '') + 'Component';

  lines.push(`/**`);
  lines.push(` * ${model.title}`);
  lines.push(` *`);
  lines.push(` * Auto-generated UBS-branded Angular component.`);
  lines.push(` * Page type: ${model.pageType}`);
  lines.push(` */`);
  lines.push(``);
  lines.push(`import { Component } from '@angular/core';`);
  lines.push(``);
  lines.push(`@Component({`);
  lines.push(`  selector: 'app-${kebabName}',`);
  lines.push(`  standalone: true,`);
  lines.push(`  styleUrls: ['./ubs-theme.css'],`);
  lines.push(`  template: \``);

  // Template content
  lines.push(`  <div class="ubs-container">`);

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
      lines.push(generateCardTemplate(card));
    }
    lines.push(`    </div>`);
  }

  // Form
  if (model.form) {
    lines.push(``);
    lines.push(`    <!-- Form -->`);
    lines.push(`    <form class="ubs-stack" (ngSubmit)="onSubmit()">`);
    if (model.form.title) {
      lines.push(`      <h2 class="ubs-heading-3">${model.form.title}</h2>`);
    }
    if (model.form.description) {
      lines.push(`      <p class="ubs-body--small ubs-text--secondary">${model.form.description}</p>`);
    }
    model.form.fields.forEach((field, i) => {
      lines.push(generateFormFieldTemplate(field, i));
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
    lines.push(generateTableTemplate(model.table.columns, model.table.rows));
  }

  // Notifications
  if (model.notifications && model.notifications.length > 0) {
    lines.push(``);
    lines.push(`    <!-- Notifications -->`);
    lines.push(`    <div class="ubs-stack">`);
    for (const notif of model.notifications) {
      lines.push(generateNotificationTemplate(notif));
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
      lines.push(generateRecommendationTemplate(rec));
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

  lines.push(`  </div>`);
  lines.push(`  \``);
  lines.push(`})`);
  lines.push(`export class ${className} {`);

  if (model.form) {
    lines.push(`  onSubmit(): void {`);
    lines.push(`    console.log('Form submitted');`);
    lines.push(`  }`);
  }

  lines.push(`}`);

  return lines.join('\n');
}
