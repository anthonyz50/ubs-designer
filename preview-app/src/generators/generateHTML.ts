/**
 * generateHTML — Exports the current layout config as a standalone HTML file.
 */
import type { LayoutConfig } from '../types';

export function generateHTML(config: LayoutConfig): string {
  const darkClass = config.darkMode ? ' class="dark"' : '';

  return `<!DOCTYPE html>
<html lang="en"${darkClass}>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${config.title || 'UBS Layout'}</title>
  <style>
    /* UBS Design System — Standalone Styles */
    :root {
      --ubs-red: #E60000;
      --ubs-black: #000000;
      --ubs-white: #FFFFFF;
      --ubs-gray-i: #CCCABC;
      --ubs-gray-ii: #A09E90;
      --ubs-gray-iii: #6E6E6E;
      --ubs-gray-iv: #4A4A4A;
      --ubs-pastel-i: #ECEBE4;
      --ubs-pastel-ii: #F5F0E1;
      --ubs-bordeaux: #87011F;
      --ubs-bronze: #A2871D;
      --ubs-success: #00893D;
      --ubs-warning: #FFAB00;
      --ubs-error: #E60000;
      --ubs-info: #0072B2;
      --ubs-font-family: 'Frutiger Neue LT', 'Frutiger', Arial, Helvetica, sans-serif;
      --ubs-spacing-xs: 4px;
      --ubs-spacing-sm: 8px;
      --ubs-spacing-md: 16px;
      --ubs-spacing-lg: 24px;
      --ubs-spacing-xl: 32px;
      --ubs-spacing-xxl: 48px;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }

    body {
      font-family: var(--ubs-font-family);
      font-size: 16px;
      line-height: 1.375;
      color: var(--ubs-black);
      background: var(--ubs-white);
      min-height: 100vh;
    }

    ${config.darkMode ? `
    html.dark body {
      background: #1a1a1a;
      color: var(--ubs-white);
    }
    ` : ''}

    .page-wrapper { min-height: 100vh; display: flex; flex-direction: column; }

    /* Navbar */
    .navbar {
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 40px; height: 64px;
      background: ${config.darkMode ? '#1a1a1a' : 'var(--ubs-white)'};
      border-bottom: 1px solid ${config.darkMode ? '#333' : 'var(--ubs-pastel-i)'};
      position: sticky; top: 0; z-index: 100;
    }
    .navbar-logo { font-weight: 700; font-size: 24px; letter-spacing: -0.5px; }
    .navbar-links { display: flex; gap: 32px; }
    .navbar-links a { text-decoration: none; color: inherit; font-size: 14px; font-weight: 500; }
    .navbar-links a:hover { color: var(--ubs-red); }
    .navbar-actions { display: flex; gap: 16px; align-items: center; }

    /* Page Header */
    .page-header {
      padding: 32px 40px;
      border-bottom: 1px solid var(--ubs-pastel-i);
    }
    .page-header.impulse { border-left: 4px solid var(--ubs-red); margin-left: 40px; padding-left: 20px; }
    .page-header h1 { font-size: 32px; font-weight: 700; line-height: 1.2; margin-bottom: 4px; }
    .page-header p { font-size: 16px; color: var(--ubs-gray-iii); }
    .breadcrumbs { font-size: 13px; color: var(--ubs-gray-iii); margin-bottom: 8px; }
    .breadcrumbs a { color: var(--ubs-gray-iii); text-decoration: none; }
    .breadcrumbs a:hover { color: var(--ubs-red); }

    /* Section */
    .section { padding: var(--ubs-spacing-xxl) 40px; }
    .section-title { font-size: 24px; font-weight: 700; margin-bottom: 24px; }
    .section.bg-pastel1 { background: var(--ubs-pastel-i); }

    /* Grid */
    .grid { display: grid; gap: 24px; }
    .grid-2 { grid-template-columns: repeat(2, 1fr); }
    .grid-3 { grid-template-columns: repeat(3, 1fr); }
    .grid-4 { grid-template-columns: repeat(4, 1fr); }
    @media (max-width: 768px) { .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; } }

    /* Stat */
    .stat { padding: 20px; }
    .stat-label { font-size: 13px; font-weight: 500; color: var(--ubs-gray-iii); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
    .stat-value { font-size: 28px; font-weight: 700; line-height: 1.2; }
    .stat-change { font-size: 13px; margin-top: 4px; }
    .stat-change.up { color: var(--ubs-success); }
    .stat-change.down { color: var(--ubs-error); }

    /* Card */
    .card {
      background: var(--ubs-white); padding: 24px;
      border: 1px solid var(--ubs-pastel-i); border-radius: 0;
      transition: transform 0.2s ease;
    }
    .card:hover { transform: translateY(-2px); }
    .card.pastel1 { background: var(--ubs-pastel-i); border-color: var(--ubs-gray-i); }
    .card.pastel2 { background: var(--ubs-pastel-ii); border-color: var(--ubs-gray-i); }
    .card h3 { font-size: 18px; font-weight: 600; margin-bottom: 8px; }
    .card p { font-size: 14px; color: var(--ubs-gray-iii); margin-bottom: 16px; }

    /* CTA */
    .cta-button {
      display: inline-flex; align-items: center; gap: 8px;
      background: var(--ubs-red); color: var(--ubs-white);
      padding: 12px 24px; border: none; cursor: pointer;
      font-family: var(--ubs-font-family); font-weight: 700; font-size: 16px;
      text-decoration: none; white-space: nowrap;
    }
    .cta-text {
      display: inline-flex; align-items: center; gap: 4px;
      color: var(--ubs-red); font-weight: 600; font-size: 14px;
      text-decoration: none; border: none; background: none; cursor: pointer;
      font-family: var(--ubs-font-family);
    }

    /* Footer */
    .footer {
      background: var(--ubs-pastel-i); padding: 48px 40px 24px;
      margin-top: auto;
    }
    .footer-inner { display: flex; gap: 60px; flex-wrap: wrap; margin-bottom: 32px; }
    .footer-group h3 { font-size: 14px; font-weight: 700; margin-bottom: 12px; }
    .footer-group ul { list-style: none; }
    .footer-group li { margin-bottom: 8px; }
    .footer-group a { font-size: 13px; color: var(--ubs-gray-iv); text-decoration: none; }
    .footer-group a:hover { color: var(--ubs-red); }
    .footer-copyright { font-size: 12px; color: var(--ubs-gray-iii); border-top: 1px solid var(--ubs-gray-i); padding-top: 16px; }

    /* Table */
    .table-wrapper { overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; font-size: 14px; }
    thead th { text-align: left; padding: 12px 16px; font-weight: 600; border-bottom: 2px solid var(--ubs-gray-i); }
    tbody td { padding: 12px 16px; border-bottom: 1px solid var(--ubs-pastel-i); }
    tbody tr:nth-child(even) { background: var(--ubs-pastel-i); }
    tbody tr:hover { background: var(--ubs-pastel-ii); }

    /* Form */
    .form-field { margin-bottom: 20px; max-width: 600px; }
    .form-field label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 6px; }
    .form-field input, .form-field select, .form-field textarea {
      width: 100%; padding: 10px 12px; border: 1px solid var(--ubs-gray-i);
      font-family: var(--ubs-font-family); font-size: 14px; background: var(--ubs-white);
    }
    .form-field input:focus, .form-field select:focus, .form-field textarea:focus {
      outline: 2px solid var(--ubs-red); border-color: var(--ubs-red);
    }

    /* Impulse */
    .impulse-line { border-left: 4px solid var(--ubs-red); padding-left: 16px; }

    /* Masthead Navigation */
    .masthead-nav { display: flex; align-items: stretch; height: 48px; border-bottom: 2px solid var(--ubs-pastel-i); }
    .masthead-nav a {
      display: flex; align-items: center; padding: 0 20px;
      font-size: 14px; font-weight: 500; color: var(--ubs-gray-iii);
      text-decoration: none; position: relative; white-space: nowrap;
    }
    .masthead-nav a:hover { color: var(--ubs-black); }
    .masthead-nav a.active { color: var(--ubs-black); font-weight: 600; }
    .masthead-nav a.active::after {
      content: ''; position: absolute; bottom: -2px; left: 20px; right: 20px;
      height: 3px; background: var(--ubs-red);
    }
    .masthead-nav-secondary {
      display: flex; align-items: stretch; height: 40px;
      background: var(--ubs-pastel-i); border-bottom: 1px solid var(--ubs-gray-i);
    }
    .masthead-nav-secondary a {
      display: flex; align-items: center; padding: 0 16px;
      font-size: 13px; color: var(--ubs-gray-iii); text-decoration: none;
    }
    .masthead-nav-secondary a:hover { color: var(--ubs-black); }
    .masthead-nav-secondary a.active { color: var(--ubs-black); font-weight: 700; }

    /* Content Block */
    .content-flex { display: flex; gap: 40px; align-items: center; flex-wrap: wrap; }
    .content-text { flex: 1; min-width: 280px; }
    .content-text h2 { font-size: 28px; font-weight: 700; margin-bottom: 16px; }
    .content-text p { font-size: 16px; color: var(--ubs-gray-iii); margin-bottom: 12px; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="page-wrapper">
    ${config.includeNavbar ? `
    <nav class="navbar">
      <div class="navbar-logo">UBS</div>
      <div class="navbar-links">
        <a href="#">Home</a>
        <a href="#">Portfolio</a>
        <a href="#">Markets</a>
        <a href="#">Research</a>
        <a href="#">Services</a>
      </div>
      <div class="navbar-actions">🔍 🔔 👤</div>
    </nav>` : ''}

    <div class="page-header${config.includeImpulse ? ' impulse' : ''}">
      <div class="breadcrumbs"><a href="#">Home</a> / ${config.title || 'Page'}</div>
      <h1>${config.title || 'Untitled Page'}</h1>
      ${config.subtitle ? `<p>${config.subtitle}</p>` : ''}
    </div>

    <main style="flex: 1;">
      ${config.sections.map(renderHTMLSection).join('\n')}
    </main>

    ${config.includeFooter ? `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-group">
          <h3>Wealth Management</h3>
          <ul>
            <li><a href="#">Investment Advisory</a></li>
            <li><a href="#">Portfolio Management</a></li>
            <li><a href="#">Financial Planning</a></li>
          </ul>
        </div>
        <div class="footer-group">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Online Banking</a></li>
            <li><a href="#">Mobile App</a></li>
            <li><a href="#">Research Portal</a></li>
          </ul>
        </div>
        <div class="footer-group">
          <h3>About UBS</h3>
          <ul>
            <li><a href="#">Our Firm</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-copyright">© 2026 UBS Group AG. All rights reserved.</div>
    </footer>` : ''}
  </div>
</body>
</html>`;
}

function renderHTMLSection(section: import('../types').SectionConfig): string {
  const bgClass = section.type === 'stats-row' ? ' bg-pastel1' : '';

  if (section.type === 'masthead-navigation') {
    const opts = section.options as import('../types').MastheadNavigationOptions;
    switch (opts.navType) {
      case 'single':
        return `
    <section class="section">
      ${section.title ? `<h2 class="section-title">${section.title}</h2>` : ''}
      <nav class="masthead-nav">
        <a href="#" class="active">Overview</a>
        <a href="#">Portfolio</a>
        <a href="#">Transactions</a>
        <a href="#">Documents</a>
        <a href="#">Settings</a>
      </nav>
    </section>`;
      case 'double':
        return `
    <section class="section">
      ${section.title ? `<h2 class="section-title">${section.title}</h2>` : ''}
      <nav class="masthead-nav">
        <a href="#" class="active">Wealth Management</a>
        <a href="#">Investment Bank</a>
        <a href="#">Asset Management</a>
        <a href="#">Personal Banking</a>
      </nav>
      <nav class="masthead-nav-secondary">
        <a href="#" class="active">Overview</a>
        <a href="#">Accounts</a>
        <a href="#">Performance</a>
        <a href="#">Advisory</a>
        <a href="#">Reports</a>
      </nav>
    </section>`;
      default:
        return `
    <section class="section">
      ${section.title ? `<h2 class="section-title">${section.title}</h2>` : ''}
      <p style="color: var(--ubs-gray-iii); font-style: italic;">[${opts.navType} masthead navigation \u2014 render in React for full fidelity]</p>
    </section>`;
    }
  }

  return `
    <section class="section${bgClass}">
      ${section.title ? `<h2 class="section-title">${section.title}</h2>` : ''}
      <p style="color: var(--ubs-gray-iii); font-style: italic;">[${section.type} section \u2014 render in React for full fidelity]</p>
    </section>`;
}
