// ============================================================
// Component Catalogue — metadata for the component browser
// ============================================================

export interface ComponentEntry {
  name: string;
  category: Category;
  description: string;
  variants: string[];
  tags: string[];
}

export type Category =
  | 'Navigation'
  | 'Input'
  | 'Content'
  | 'Feedback'
  | 'Charts'
  | 'Layout';

export const CATEGORIES: Category[] = [
  'Navigation',
  'Input',
  'Content',
  'Feedback',
  'Charts',
  'Layout',
];

export const CATALOGUE: ComponentEntry[] = [
  // ─── Navigation ─────────────────────────────
  { name: 'FilterGroup', category: 'Navigation', description: 'Faceted filter bar with multiple filter dropdowns.', variants: ['default'], tags: ['filter', 'search', 'facet'] },
  { name: 'PageFooter', category: 'Navigation', description: 'Page footer with link columns, copyright, and legal text. Light cream background matching ubs.com, with dark mode variants.', variants: ['standard', 'minimal', 'dark', 'dark-minimal'], tags: ['footer', 'links', 'legal'] },
  { name: 'Header', category: 'Navigation', description: 'Top navigation bar with logo, nav items, and actions.', variants: ['standard', 'compact'], tags: ['header', 'navbar', 'top'] },
  { name: 'MastheadNavigation', category: 'Navigation', description: 'Top-level masthead navigation bar. Supports single-level tabs, double-level with bold secondary row, multi-level dropdowns opening to the right, and mega drop-down menus with quick links and status boxes.', variants: ['single-level', 'double-level', 'multi-level', 'mega-dropdown'], tags: ['nav', 'mega-menu', 'masthead', 'tabs', 'dropdown'] },
  { name: 'Links', category: 'Navigation', description: 'Styled link component with inline, standalone, and external variants.', variants: ['inline', 'standalone', 'external'], tags: ['link', 'anchor', 'url'] },
  { name: 'ProcessNavigation', category: 'Navigation', description: 'Step-by-step process indicator (horizontal or vertical).', variants: ['horizontal', 'vertical'], tags: ['stepper', 'wizard', 'progress'] },
  { name: 'TreeNavigation', category: 'Navigation', description: 'Collapsible tree navigation for hierarchical content.', variants: ['default'], tags: ['tree', 'sidebar', 'hierarchy'] },
  { name: 'MenuListItem', category: 'Navigation', description: 'Single menu list item for sidebar navigation.', variants: ['default'], tags: ['menu', 'item', 'sidebar'] },
  { name: 'Breadcrumbs', category: 'Navigation', description: 'Breadcrumb trail for page hierarchy.', variants: ['default'], tags: ['breadcrumb', 'trail', 'path'] },
  { name: 'Navbar', category: 'Navigation', description: 'Horizontal navigation bar.', variants: ['default'], tags: ['nav', 'bar'] },
  { name: 'Pagination', category: 'Navigation', description: 'Page pagination with previous/next and page numbers.', variants: ['default'], tags: ['pagination', 'pages'] },
  { name: 'SidebarNav', category: 'Navigation', description: 'Vertical sidebar navigation with active state.', variants: ['light', 'dark'], tags: ['sidebar', 'nav', 'vertical'] },
  { name: 'Tabs', category: 'Navigation', description: 'Tab navigation component with underline and contained variants.', variants: ['underline', 'contained'], tags: ['tabs', 'switch'] },

  // ─── Input ──────────────────────────────────
  { name: 'Button', category: 'Input', description: 'Primary action button with multiple variants and sizes.', variants: ['primary', 'secondary', 'outline', 'ghost', 'destructive'], tags: ['button', 'action', 'click'] },
  { name: 'MenuButton', category: 'Input', description: 'Button with a dropdown menu of actions.', variants: ['primary', 'secondary', 'outline'], tags: ['button', 'menu', 'dropdown'] },
  { name: 'SplitButton', category: 'Input', description: 'Button with a primary action and dropdown for alternatives.', variants: ['primary', 'secondary'], tags: ['button', 'split', 'dropdown'] },
  { name: 'ButtonGroup', category: 'Input', description: 'Group of related buttons displayed together.', variants: ['default'], tags: ['button', 'group'] },
  { name: 'ButtonSelect', category: 'Input', description: 'Segmented button selector for mutually exclusive options.', variants: ['default'], tags: ['button', 'select', 'segment'] },
  { name: 'DropdownButton', category: 'Input', description: 'Button that opens a dropdown list of actions.', variants: ['default'], tags: ['button', 'dropdown'] },
  { name: 'ComboBox', category: 'Input', description: 'Searchable dropdown combining text input and selection.', variants: ['default'], tags: ['combobox', 'search', 'select', 'autocomplete'] },
  { name: 'ContextSelector', category: 'Input', description: 'Context/account switcher dropdown.', variants: ['default'], tags: ['context', 'selector', 'switch'] },
  { name: 'Dropdown', category: 'Input', description: 'Standard dropdown select component.', variants: ['default'], tags: ['dropdown', 'select'] },
  { name: 'Slider', category: 'Input', description: 'Range slider for numeric input.', variants: ['default'], tags: ['slider', 'range'] },
  { name: 'Switch', category: 'Input', description: 'Toggle switch for binary options.', variants: ['default'], tags: ['switch', 'toggle', 'boolean'] },
  { name: 'FileUpload', category: 'Input', description: 'File upload with dropzone or compact variants.', variants: ['dropzone', 'compact'], tags: ['file', 'upload', 'dropzone'] },
  { name: 'TimePicker', category: 'Input', description: 'Time input with hours, minutes, and seconds.', variants: ['default'], tags: ['time', 'picker', 'clock'] },
  { name: 'DatePicker', category: 'Input', description: 'Date picker with calendar dropdown.', variants: ['default'], tags: ['date', 'picker', 'calendar'] },
  { name: 'Checkbox', category: 'Input', description: 'Checkbox for multiple selections or boolean input.', variants: ['default'], tags: ['checkbox', 'check', 'boolean'] },
  { name: 'Radio', category: 'Input', description: 'Radio button for single selection from a group.', variants: ['default'], tags: ['radio', 'select', 'option'] },
  { name: 'Toggle', category: 'Input', description: 'Toggle component similar to switch.', variants: ['default'], tags: ['toggle', 'switch'] },
  { name: 'Input', category: 'Input', description: 'Text input field with label, placeholder, and error states.', variants: ['sm', 'md', 'lg'], tags: ['input', 'text', 'field', 'form'] },
  { name: 'Select', category: 'Input', description: 'Select dropdown for form fields.', variants: ['default'], tags: ['select', 'dropdown', 'form'] },
  { name: 'Textarea', category: 'Input', description: 'Multi-line text input area.', variants: ['default'], tags: ['textarea', 'text', 'multiline'] },
  { name: 'CTA', category: 'Input', description: 'Call-to-action component with button, text, and URL variants.', variants: ['button', 'text', 'url'], tags: ['cta', 'action', 'link'] },

  // ─── Content ────────────────────────────────
  { name: 'Accordion', category: 'Content', description: 'Expandable content panels for FAQs and details.', variants: ['default', 'bordered'], tags: ['accordion', 'expand', 'collapse', 'faq'] },
  { name: 'AgendaSteps', category: 'Content', description: 'Timeline or compact agenda/step display.', variants: ['timeline', 'compact'], tags: ['agenda', 'steps', 'timeline'] },
  { name: 'Amount', category: 'Content', description: 'Formatted currency amount with trend indicator.', variants: ['sm', 'md', 'lg'], tags: ['amount', 'currency', 'money'] },
  { name: 'Article', category: 'Content', description: 'Article card for news, research, and insights.', variants: ['card', 'featured', 'horizontal'], tags: ['article', 'card', 'news'] },
  { name: 'Avatar', category: 'Content', description: 'User avatar with initials and status indicator.', variants: ['circle', 'square'], tags: ['avatar', 'user', 'profile'] },
  { name: 'BannerBox', category: 'Content', description: 'Promotional or informational banner.', variants: ['info', 'promotional', 'warning'], tags: ['banner', 'promo', 'info'] },
  { name: 'Card', category: 'Content', description: 'Content card with variants for backgrounds and hover effects.', variants: ['default', 'pastel1', 'pastel2', 'gray'], tags: ['card', 'container'] },
  { name: 'ContentBlock', category: 'Content', description: 'Content block with title, body, and optional CTA.', variants: ['default', 'highlight', 'bordered'], tags: ['content', 'block', 'text'] },
  { name: 'CountryFlag', category: 'Content', description: 'Country flag icon by ISO code.', variants: ['sm', 'md', 'lg'], tags: ['flag', 'country', 'icon'] },
  { name: 'CreditCardDisplay', category: 'Content', description: 'Visual credit/debit card display.', variants: ['default'], tags: ['card', 'credit', 'payment'] },
  { name: 'DataViz', category: 'Content', description: 'Simple data visualisation container.', variants: ['default'], tags: ['data', 'chart', 'viz'] },
  { name: 'Divider', category: 'Content', description: 'Horizontal or vertical divider line.', variants: ['horizontal', 'vertical'], tags: ['divider', 'separator', 'line'] },
  { name: 'List', category: 'Content', description: 'List component with hover and divider variants.', variants: ['default', 'divided'], tags: ['list', 'items'] },
  { name: 'Panel', category: 'Content', description: 'Collapsible panel for additional context.', variants: ['default'], tags: ['panel', 'container', 'collapsible'] },
  { name: 'Stat', category: 'Content', description: 'KPI stat with label, value, and trend indicator.', variants: ['sm', 'md', 'lg'], tags: ['stat', 'kpi', 'metric', 'number'] },
  { name: 'Table', category: 'Content', description: 'Data table with sorting, striping, and hover.', variants: ['default'], tags: ['table', 'data', 'grid', 'rows'] },
  { name: 'Tag', category: 'Content', description: 'Label tag for categorisation and status.', variants: ['default', 'red', 'success', 'warning', 'outline'], tags: ['tag', 'label', 'status'] },
  { name: 'Chip', category: 'Content', description: 'Chip for filtering, choices, or input tokens.', variants: ['filter', 'choice', 'input'], tags: ['chip', 'filter', 'token'] },
  { name: 'Tile', category: 'Content', description: 'Tile card for quick actions or selections.', variants: ['default', 'selectable', 'action'], tags: ['tile', 'card', 'action'] },
  { name: 'Typography', category: 'Content', description: 'UBS type scale: keyline, subheadlines, body, captions.', variants: ['h1', 'h2', 'h3', 'h4', 'body', 'caption', 'overline'], tags: ['typography', 'text', 'heading', 'font'] },
  { name: 'Badge', category: 'Content', description: 'Small badge for counts, status, and notifications.', variants: ['default', 'red', 'success', 'warning'], tags: ['badge', 'count', 'notification'] },

  // ─── Feedback ───────────────────────────────
  { name: 'Alert', category: 'Feedback', description: 'Inline alert message for info, success, warning, and error.', variants: ['info', 'success', 'warning', 'error'], tags: ['alert', 'message', 'notification'] },
  { name: 'EmptyState', category: 'Feedback', description: 'Empty state placeholder with title, description, and CTA.', variants: ['default'], tags: ['empty', 'state', 'placeholder'] },
  { name: 'FormValidation', category: 'Feedback', description: 'Form validation error summary or inline messages.', variants: ['summary', 'inline'], tags: ['form', 'validation', 'error'] },
  { name: 'MessageBox', category: 'Feedback', description: 'Message box for important notices.', variants: ['info', 'success', 'warning', 'error'], tags: ['message', 'box', 'notice'] },
  { name: 'Modal', category: 'Feedback', description: 'Overlay modal dialog for confirmations and forms.', variants: ['default'], tags: ['modal', 'dialog', 'overlay'] },
  { name: 'OverlayMessage', category: 'Feedback', description: 'Full overlay message for status feedback.', variants: ['info', 'success', 'error', 'warning'], tags: ['overlay', 'message', 'status'] },
  { name: 'Popover', category: 'Feedback', description: 'Popover tooltip triggered by hover or click.', variants: ['default'], tags: ['popover', 'tooltip', 'hover'] },
  { name: 'Progress', category: 'Feedback', description: 'Progress bar or circle with percentage.', variants: ['bar', 'circle'], tags: ['progress', 'loading', 'bar', 'circle'] },
  { name: 'Skeleton', category: 'Feedback', description: 'Loading skeleton placeholder.', variants: ['rect', 'text', 'circle'], tags: ['skeleton', 'loading', 'placeholder'] },
  { name: 'Snackbar', category: 'Feedback', description: 'Temporary snackbar notification.', variants: ['info', 'success', 'error'], tags: ['snackbar', 'toast', 'notification'] },
  { name: 'Tooltip', category: 'Feedback', description: 'Tooltip on hover for contextual help.', variants: ['default'], tags: ['tooltip', 'hover', 'help'] },
  { name: 'Timer', category: 'Feedback', description: 'Countdown or count-up timer display.', variants: ['default', 'compact'], tags: ['timer', 'countdown', 'clock'] },

  // ─── Charts ─────────────────────────────────
  { name: 'BarChart', category: 'Charts', description: 'Vertical or horizontal bar chart for comparisons.', variants: ['vertical', 'horizontal'], tags: ['chart', 'bar', 'graph'] },
  { name: 'DonutChartWidget', category: 'Charts', description: 'Donut chart with centre label and percentages.', variants: ['default'], tags: ['chart', 'donut', 'pie'] },
  { name: 'LineChart', category: 'Charts', description: 'Line chart with multiple series and grid.', variants: ['default'], tags: ['chart', 'line', 'graph', 'trend'] },
  { name: 'PieChart', category: 'Charts', description: 'Pie chart with labels and legend.', variants: ['default'], tags: ['chart', 'pie', 'graph'] },

  // ─── Layout ─────────────────────────────────
  { name: 'Grid', category: 'Layout', description: 'CSS grid layout component with configurable columns.', variants: ['default'], tags: ['grid', 'layout', 'columns'] },
  { name: 'Layout', category: 'Layout', description: 'Page-level layout structure with header, sidebar, and content.', variants: ['default'], tags: ['layout', 'page', 'structure'] },
  { name: 'PageHeader', category: 'Layout', description: 'Page header with title, subtitle, and breadcrumbs.', variants: ['default', 'impulse'], tags: ['page', 'header', 'title'] },
  { name: 'SectionWrapper', category: 'Layout', description: 'Section container with consistent padding and backgrounds.', variants: ['default'], tags: ['section', 'wrapper', 'container'] },
  { name: 'ActionBar', category: 'Layout', description: 'Sticky action bar with primary and secondary actions.', variants: ['default'], tags: ['action', 'bar', 'footer', 'sticky'] },
  { name: 'Logo', category: 'Layout', description: 'UBS logo in full, symbol, or wordmark variants.', variants: ['full', 'symbol', 'wordmark'], tags: ['logo', 'ubs', 'brand'] },
  { name: 'LogoTab', category: 'Layout', description: 'UBS corner logo tab element.', variants: ['default'], tags: ['logo', 'tab', 'corner'] },
  { name: 'Icon', category: 'Layout', description: 'UBS icon set component.', variants: ['sm', 'md', 'lg'], tags: ['icon', 'glyph'] },
  { name: 'MovingFrame', category: 'Layout', description: 'UBS brand moving frame element.', variants: ['transparent', 'opaque'], tags: ['frame', 'brand', 'decoration'] },
  { name: 'Pattern', category: 'Layout', description: 'UBS brand pattern background.', variants: ['default'], tags: ['pattern', 'background', 'brand'] },
];
