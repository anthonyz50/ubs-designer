/**
 * UBS Renderer
 *
 * Core renderer component. Takes a UiModel and renders it as semantic HTML
 * using UBS CSS classes. Handles all page types.
 */

import type { UiModel, UiCard, UiFormField, UiNotification, UiRecommendation } from '../../types';
import styles from './UbsRenderer.module.css';

interface UbsRendererProps {
  model: UiModel;
}

function renderStatusBadge(status: string) {
  return (
    <span className={`ubs-badge ubs-badge--${status}`}>
      {status}
    </span>
  );
}

function renderCard(card: UiCard, index: number) {
  return (
    <div className="ubs-card" key={index}>
      <div className="ubs-card__header">
        <h3 className="ubs-card__title">{card.title}</h3>
        {card.status && renderStatusBadge(card.status)}
      </div>
      {card.metric && (
        <div className="ubs-card__metric">
          <span className="ubs-card__metric-value">{card.metric}</span>
          {card.metricLabel && (
            <span className="ubs-card__metric-label">{card.metricLabel}</span>
          )}
        </div>
      )}
      {card.message && (
        <div className="ubs-card__body">
          <p>{card.message}</p>
        </div>
      )}
      {(card.primaryAction || card.secondaryAction) && (
        <div className="ubs-card__footer">
          {card.primaryAction && (
            <button className="ubs-btn ubs-btn--primary ubs-btn--sm" type="button">
              {card.primaryAction}
            </button>
          )}
          {card.secondaryAction && (
            <button className="ubs-btn ubs-btn--ghost ubs-btn--sm" type="button">
              {card.secondaryAction}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function renderFormField(field: UiFormField, index: number) {
  const fieldId = `preview-field-${index}`;

  if (field.type === 'checkbox') {
    return (
      <div className="ubs-checkbox-group" key={index}>
        <input type="checkbox" id={fieldId} />
        <label htmlFor={fieldId} className="ubs-label">
          {field.label}
        </label>
      </div>
    );
  }

  const reqClass = field.required ? 'ubs-label ubs-label--required' : 'ubs-label';

  return (
    <div className="ubs-form-group" key={index}>
      <label htmlFor={fieldId} className={reqClass}>
        {field.label}
      </label>
      {field.type === 'select' && field.options ? (
        <select id={fieldId} className="ubs-select">
          <option value="">Select an option</option>
          {field.options.map((opt, oi) => (
            <option key={oi} value={opt}>{opt}</option>
          ))}
        </select>
      ) : field.type === 'textarea' ? (
        <textarea
          id={fieldId}
          className="ubs-textarea"
          placeholder={field.placeholder || ''}
          rows={4}
        />
      ) : (
        <input
          id={fieldId}
          type={field.type}
          className="ubs-input"
          placeholder={field.placeholder || ''}
        />
      )}
    </div>
  );
}

function renderNotification(notif: UiNotification, index: number) {
  const iconMap: Record<string, string> = {
    info: 'i',
    success: '\u2713',
    warning: '!',
    error: '\u2717',
  };

  return (
    <div className={`ubs-alert ubs-alert--${notif.type}`} role="alert" key={index}>
      <div className="ubs-alert__icon">{iconMap[notif.type] || 'i'}</div>
      <div className="ubs-alert__content">
        <div className="ubs-alert__title">{notif.title}</div>
        <div className="ubs-alert__message">{notif.message}</div>
        {notif.action && (
          <button
            className="ubs-btn ubs-btn--ghost ubs-btn--sm"
            type="button"
            style={{ marginTop: 8 }}
          >
            {notif.action}
          </button>
        )}
      </div>
    </div>
  );
}

function renderRecommendation(rec: UiRecommendation, index: number) {
  return (
    <div className="ubs-recommendation" key={index}>
      <div className="ubs-recommendation__icon">{'\u2728'}</div>
      <div className="ubs-recommendation__content">
        <div className="ubs-recommendation__title">{rec.title}</div>
        <div className="ubs-recommendation__desc">{rec.description}</div>
        {rec.action && (
          <button
            className="ubs-btn ubs-btn--ghost ubs-btn--sm"
            type="button"
            style={{ marginTop: 8 }}
          >
            {rec.action}
          </button>
        )}
      </div>
    </div>
  );
}

export default function UbsRenderer({ model }: UbsRendererProps) {
  return (
    <div className={styles.renderer}>
      <div className="ubs-container">
        {/* Page header or hero */}
        {model.pageType === 'landing-page' ? (
          <div className="ubs-hero">
            <h1 className="ubs-hero__title">{model.title}</h1>
            {model.intro && (
              <p className="ubs-hero__subtitle">{model.intro}</p>
            )}
          </div>
        ) : (
          <div className="ubs-page-header">
            <h1 className="ubs-page-header__title">{model.title}</h1>
            {model.intro && (
              <p className="ubs-page-header__intro">{model.intro}</p>
            )}
          </div>
        )}

        {/* Cards grid */}
        {model.cards && model.cards.length > 0 && (
          <section>
            <div className="ubs-grid--auto">
              {model.cards.map((card, i) => renderCard(card, i))}
            </div>
          </section>
        )}

        {/* Form */}
        {model.form && (
          <section>
            <form className="ubs-stack" onSubmit={(e) => e.preventDefault()}>
              {model.form.title && (
                <h2 className="ubs-heading-3">{model.form.title}</h2>
              )}
              {model.form.description && (
                <p className="ubs-body--small ubs-text--secondary">
                  {model.form.description}
                </p>
              )}
              {model.form.fields.map((field, i) => renderFormField(field, i))}
              <div>
                <button type="submit" className="ubs-btn ubs-btn--primary">
                  {model.form.submitLabel || 'Submit'}
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Data table */}
        {model.table && (
          <section>
            <table className="ubs-table">
              <thead>
                <tr>
                  {model.table.columns.map((col, ci) => (
                    <th key={ci} data-align={col.align || undefined}>
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {model.table.rows.map((row, ri) => (
                  <tr key={ri}>
                    {model.table!.columns.map((col, ci) => (
                      <td key={ci} data-align={col.align || undefined}>
                        {String(row[col.key])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* Notifications */}
        {model.notifications && model.notifications.length > 0 && (
          <section>
            <div className="ubs-stack">
              {model.notifications.map((notif, i) => renderNotification(notif, i))}
            </div>
          </section>
        )}

        {/* Recommendations */}
        {model.recommendations && model.recommendations.length > 0 && (
          <section style={{ marginTop: 48 }}>
            <h2 className="ubs-section-heading">Recommendations</h2>
            <div className="ubs-stack">
              {model.recommendations.map((rec, i) => renderRecommendation(rec, i))}
            </div>
          </section>
        )}

        {/* Support message */}
        {model.supportMessage && (
          <div className="ubs-support-message" style={{ marginTop: 48 }}>
            <p>{model.supportMessage}</p>
          </div>
        )}

        {/* Footer */}
        {model.footerText && (
          <footer className="ubs-footer">
            <p>{model.footerText}</p>
          </footer>
        )}
      </div>
    </div>
  );
}
