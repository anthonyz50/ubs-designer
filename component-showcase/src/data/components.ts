export interface ComponentInfo {
  name: string;
  description: string;
  category: string;
  props: { name: string; type: string }[];
  variants?: string[];
}

export interface CategoryInfo {
  id: string;
  name: string;
  icon: string;
  description: string;
  path: string;
}

export const categories: CategoryInfo[] = [
  { id: 'navigation', name: 'Navigation', icon: '🧭', description: 'Components for navigating between pages and sections', path: '/navigation' },
  { id: 'input', name: 'Input', icon: '✏️', description: 'Interactive form controls and buttons', path: '/input' },
  { id: 'content-display', name: 'Content Display', icon: '📄', description: 'Components for presenting content and data', path: '/content-display' },
  { id: 'feedback', name: 'Feedback', icon: '💬', description: 'User feedback, notifications, and status indicators', path: '/feedback' },
  { id: 'charts', name: 'Charts', icon: '📊', description: 'Data visualisation and chart components', path: '/charts' },
  { id: 'layout', name: 'Layout & Patterns', icon: '🏗️', description: 'Structural layout, branding, and decorative patterns', path: '/layout' },
];

export const components: ComponentInfo[] = [
  // ─── Navigation ─────────────────────────────
  { name: 'FilterGroup', category: 'navigation', description: 'A group of selectable filter items for narrowing down content.', props: [{ name: 'filters', type: 'FilterItem[]' }, { name: 'variant', type: 'FilterVariant' }, { name: 'onFilterChange', type: '(key, value) => void' }], variants: ['standalone', 'withSearch'] },
  { name: 'PageFooter', category: 'navigation', description: 'Page footer with navigation columns, copyright, and branding.', props: [{ name: 'columns', type: 'FooterColumn[]' }, { name: 'variant', type: 'FooterVariant' }, { name: 'copyright', type: 'string' }], variants: ['standard', 'minimal'] },
  { name: 'Header', category: 'navigation', description: 'Application header with logo, navigation, and user menu.', props: [{ name: 'variant', type: 'HeaderVariant' }, { name: 'navItems', type: 'HeaderNavItem[]' }, { name: 'userMenu', type: 'HeaderUserMenu' }], variants: ['standard', 'compact'] },
  { name: 'MastheadNavigation', category: 'navigation', description: 'Top-level masthead navigation bar. Supports single-level tabs, double-level with secondary row, multi-level dropdowns opening to the right, and mega drop-down menus with quick links and status boxes.', props: [{ name: 'items', type: 'MastheadNavItem[]' }, { name: 'variant', type: 'MastheadVariant' }], variants: ['single-level', 'double-level', 'multi-level', 'mega-dropdown'] },
  { name: 'Links', category: 'navigation', description: 'Styled link component with variants for inline and standalone usage.', props: [{ name: 'href', type: 'string' }, { name: 'variant', type: 'LinkVariant' }, { name: 'children', type: 'ReactNode' }], variants: ['inline', 'standalone', 'external'] },
  { name: 'ProcessNavigation', category: 'navigation', description: 'Multi-step process indicator showing progress through steps.', props: [{ name: 'steps', type: 'ProcessStep[]' }, { name: 'currentStep', type: 'number' }, { name: 'orientation', type: 'ProcessOrientation' }], variants: ['horizontal', 'vertical'] },
  { name: 'TreeNavigation', category: 'navigation', description: 'Hierarchical tree navigation with expandable nodes.', props: [{ name: 'items', type: 'TreeNodeItem[]' }, { name: 'onSelect', type: '(id) => void' }] },
  { name: 'MenuListItem', category: 'navigation', description: 'Individual menu list item for use in navigation menus.', props: [{ name: 'label', type: 'string' }, { name: 'icon', type: 'ReactNode' }, { name: 'active', type: 'boolean' }] },

  // ─── Input ──────────────────────────────────
  { name: 'Button', category: 'input', description: 'Primary action button with multiple variants and sizes.', props: [{ name: 'variant', type: 'ButtonVariant' }, { name: 'size', type: 'ButtonSize' }, { name: 'disabled', type: 'boolean' }], variants: ['primary', 'secondary', 'outline', 'ghost'] },
  { name: 'MenuButton', category: 'input', description: 'Button with a dropdown menu of actions.', props: [{ name: 'items', type: 'MenuItem[]' }, { name: 'variant', type: 'MenuButtonVariant' }, { name: 'size', type: 'MenuButtonSize' }], variants: ['primary', 'secondary', 'outline'] },
  { name: 'SplitButton', category: 'input', description: 'Button split into primary action and dropdown menu.', props: [{ name: 'items', type: 'SplitButtonItem[]' }, { name: 'variant', type: 'SplitButtonVariant' }], variants: ['primary', 'secondary', 'outline'] },
  { name: 'ButtonGroup', category: 'input', description: 'Group of buttons displayed together with consistent spacing.', props: [{ name: 'variant', type: 'ButtonGroupVariant' }, { name: 'size', type: 'ButtonGroupSize' }, { name: 'orientation', type: 'ButtonGroupOrientation' }] },
  { name: 'ButtonSelect', category: 'input', description: 'Toggle-style selection buttons where one option is selected.', props: [{ name: 'options', type: 'ButtonSelectOption[]' }, { name: 'value', type: 'string' }, { name: 'onChange', type: '(value) => void' }] },
  { name: 'DropdownButton', category: 'input', description: 'Button that opens a dropdown menu on click.', props: [{ name: 'items', type: 'DropdownButtonItem[]' }, { name: 'variant', type: 'DropdownButtonVariant' }, { name: 'placement', type: 'DropdownButtonPlacement' }] },
  { name: 'ComboBox', category: 'input', description: 'Searchable dropdown with type-ahead filtering.', props: [{ name: 'options', type: 'ComboBoxOption[]' }, { name: 'value', type: 'string' }, { name: 'placeholder', type: 'string' }] },
  { name: 'ContextSelector', category: 'input', description: 'Context selector for switching between accounts or workspaces.', props: [{ name: 'options', type: 'ContextSelectorOption[]' }, { name: 'value', type: 'string' }] },
  { name: 'Dropdown', category: 'input', description: 'Standard dropdown select with option groups.', props: [{ name: 'options', type: 'DropdownOption[]' }, { name: 'size', type: 'DropdownSize' }, { name: 'placeholder', type: 'string' }] },
  { name: 'Slider', category: 'input', description: 'Range slider for selecting numeric values.', props: [{ name: 'min', type: 'number' }, { name: 'max', type: 'number' }, { name: 'value', type: 'number' }] },
  { name: 'Switch', category: 'input', description: 'Toggle switch for binary on/off settings.', props: [{ name: 'checked', type: 'boolean' }, { name: 'size', type: 'SwitchSize' }, { name: 'label', type: 'string' }], variants: ['small', 'medium', 'large'] },
  { name: 'FileUpload', category: 'input', description: 'Drag-and-drop file upload area with progress tracking.', props: [{ name: 'accept', type: 'string' }, { name: 'maxSize', type: 'number' }, { name: 'variant', type: 'FileUploadVariant' }], variants: ['dropzone', 'button', 'compact'] },
  { name: 'TimePicker', category: 'input', description: 'Time selection input with hour, minute, and second pickers.', props: [{ name: 'value', type: 'TimeValue' }, { name: 'format', type: 'TimeFormat' }] },
  { name: 'Checkbox', category: 'input', description: 'Checkbox input with label and indeterminate support.', props: [{ name: 'checked', type: 'boolean' }, { name: 'indeterminate', type: 'boolean' }, { name: 'size', type: 'CheckboxSize' }] },
  { name: 'Radio', category: 'input', description: 'Radio button for selecting one option from a group.', props: [{ name: 'value', type: 'string' }, { name: 'name', type: 'string' }, { name: 'size', type: 'RadioSize' }] },
  { name: 'Toggle', category: 'input', description: 'Toggle switch with label positioning options.', props: [{ name: 'checked', type: 'boolean' }, { name: 'size', type: 'ToggleSize' }, { name: 'labelPosition', type: 'ToggleLabelPosition' }] },
  { name: 'Input', category: 'input', description: 'Text input field with validation and icon support.', props: [{ name: 'type', type: 'InputType' }, { name: 'size', type: 'InputSize' }, { name: 'error', type: 'string' }], variants: ['sm', 'md', 'lg'] },
  { name: 'Select', category: 'input', description: 'Native select dropdown with UBS styling.', props: [{ name: 'options', type: 'SelectOption[]' }, { name: 'size', type: 'SelectSize' }, { name: 'placeholder', type: 'string' }] },
  { name: 'Textarea', category: 'input', description: 'Multi-line text input area.', props: [{ name: 'rows', type: 'number' }, { name: 'resize', type: 'TextareaResize' }, { name: 'maxLength', type: 'number' }] },
  { name: 'DatePicker', category: 'input', description: 'Calendar-based date selection input.', props: [{ name: 'value', type: 'Date' }, { name: 'format', type: 'DateFormat' }, { name: 'minDate', type: 'Date' }] },

  // ─── Content Display ────────────────────────
  { name: 'Accordion', category: 'content-display', description: 'Expandable content sections with smooth animation.', props: [{ name: 'items', type: 'AccordionItem[]' }, { name: 'variant', type: 'AccordionVariant' }, { name: 'allowMultiple', type: 'boolean' }], variants: ['default', 'bordered'] },
  { name: 'AgendaSteps', category: 'content-display', description: 'Timeline-style agenda with step status indicators.', props: [{ name: 'steps', type: 'AgendaStep[]' }, { name: 'variant', type: 'AgendaStepsVariant' }], variants: ['timeline', 'compact'] },
  { name: 'Amount', category: 'content-display', description: 'Formatted monetary amount display with currency and trends.', props: [{ name: 'value', type: 'number' }, { name: 'currency', type: 'string' }, { name: 'trend', type: 'AmountTrend' }], variants: ['small', 'medium', 'large'] },
  { name: 'Article', category: 'content-display', description: 'Article card with image, title, and description.', props: [{ name: 'title', type: 'string' }, { name: 'variant', type: 'ArticleVariant' }, { name: 'description', type: 'string' }], variants: ['card', 'horizontal', 'featured'] },
  { name: 'Avatar', category: 'content-display', description: 'User avatar with image, initials, or icon fallback.', props: [{ name: 'name', type: 'string' }, { name: 'size', type: 'AvatarSize' }, { name: 'status', type: 'AvatarStatus' }], variants: ['circle', 'square'] },
  { name: 'BannerBox', category: 'content-display', description: 'Promotional banner box with call-to-action.', props: [{ name: 'title', type: 'string' }, { name: 'variant', type: 'BannerBoxVariant' }, { name: 'description', type: 'string' }], variants: ['info', 'promotional', 'warning'] },
  { name: 'Card', category: 'content-display', description: 'Flexible card container with multiple variants.', props: [{ name: 'variant', type: 'CardVariant' }, { name: 'padding', type: 'CardPadding' }, { name: 'hoverable', type: 'boolean' }], variants: ['default', 'pastel1', 'pastel2', 'gray'] },
  { name: 'ContentBlock', category: 'content-display', description: 'Rich content block with heading, text, and actions.', props: [{ name: 'title', type: 'string' }, { name: 'variant', type: 'ContentBlockVariant' }, { name: 'description', type: 'string' }], variants: ['default', 'highlight', 'bordered'] },
  { name: 'CountryFlag', category: 'content-display', description: 'Country flag icon with different size options.', props: [{ name: 'country', type: 'string' }, { name: 'size', type: 'CountryFlagSize' }], variants: ['small', 'medium', 'large'] },
  { name: 'CreditCardDisplay', category: 'content-display', description: 'Visual credit card representation with masked number.', props: [{ name: 'number', type: 'string' }, { name: 'name', type: 'string' }, { name: 'type', type: 'CreditCardType' }], variants: ['standard', 'premium', 'black'] },
  { name: 'DataViz', category: 'content-display', description: 'Configurable data visualisation component.', props: [{ name: 'type', type: 'ChartType' }, { name: 'data', type: 'ChartDataPoint[]' }, { name: 'colour', type: 'ColourSequence' }] },
  { name: 'Divider', category: 'content-display', description: 'Visual separator between content sections.', props: [{ name: 'orientation', type: 'DividerOrientation' }], variants: ['horizontal', 'vertical'] },
  { name: 'List', category: 'content-display', description: 'Structured list with icons, actions, and dividers.', props: [{ name: 'items', type: 'ListItem[]' }, { name: 'variant', type: 'ListVariant' }, { name: 'hoverable', type: 'boolean' }], variants: ['default', 'divided'] },
  { name: 'Overlay', category: 'content-display', description: 'Full-screen overlay container for modals and panels.', props: [{ name: 'open', type: 'boolean' }, { name: 'size', type: 'OverlaySize' }, { name: 'onClose', type: '() => void' }] },
  { name: 'Panel', category: 'content-display', description: 'Collapsible panel with header and content body.', props: [{ name: 'title', type: 'string' }, { name: 'variant', type: 'PanelVariant' }, { name: 'collapsible', type: 'boolean' }], variants: ['default', 'bordered', 'elevated'] },
  { name: 'SidebarNav', category: 'content-display', description: 'Vertical sidebar navigation with collapsible sections.', props: [{ name: 'items', type: 'SidebarItem[]' }, { name: 'variant', type: 'SidebarVariant' }, { name: 'activeId', type: 'string' }], variants: ['light', 'dark'] },
  { name: 'Stat', category: 'content-display', description: 'Statistic display with value, label, and change indicator.', props: [{ name: 'value', type: 'string | number' }, { name: 'label', type: 'string' }, { name: 'change', type: 'StatChange' }], variants: ['sm', 'md', 'lg'] },
  { name: 'Table', category: 'content-display', description: 'Data table with sorting, pagination, and selection.', props: [{ name: 'columns', type: 'TableColumn[]' }, { name: 'data', type: 'T[]' }, { name: 'sortable', type: 'boolean' }] },
  { name: 'Tabs', category: 'content-display', description: 'Tabbed content navigation with panel support.', props: [{ name: 'tabs', type: 'TabItem[]' }, { name: 'variant', type: 'TabsVariant' }, { name: 'activeTab', type: 'string' }], variants: ['underline', 'contained'] },
  { name: 'Tag', category: 'content-display', description: 'Small label for categorisation and metadata.', props: [{ name: 'label', type: 'string' }, { name: 'variant', type: 'TagVariant' }, { name: 'removable', type: 'boolean' }], variants: ['default', 'red', 'success', 'warning', 'outline'] },
  { name: 'Chip', category: 'content-display', description: 'Compact interactive chip for filtering and selection.', props: [{ name: 'label', type: 'string' }, { name: 'variant', type: 'ChipVariant' }, { name: 'selected', type: 'boolean' }], variants: ['filter', 'choice', 'input'] },
  { name: 'Tile', category: 'content-display', description: 'Grid tile for content presentation with hover effects.', props: [{ name: 'variant', type: 'TileVariant' }, { name: 'size', type: 'TileSize' }, { name: 'children', type: 'ReactNode' }], variants: ['default', 'selectable', 'action'] },
  { name: 'Typography', category: 'content-display', description: 'Typography component implementing the UBS type scale.', props: [{ name: 'variant', type: 'TypographyVariant' }, { name: 'weight', type: 'TypographyWeight' }, { name: 'as', type: 'ElementType' }], variants: ['keyline', 'subheadline1', 'subheadline2', 'subheadline3', 'copyText', 'captions'] },

  // ─── Feedback ───────────────────────────────
  { name: 'Alert', category: 'feedback', description: 'Contextual alert message for user notifications.', props: [{ name: 'variant', type: 'AlertVariant' }, { name: 'title', type: 'string' }, { name: 'dismissible', type: 'boolean' }], variants: ['info', 'success', 'warning', 'error'] },
  { name: 'Badge', category: 'feedback', description: 'Small status badge for counts and indicators.', props: [{ name: 'variant', type: 'BadgeVariant' }, { name: 'size', type: 'BadgeSize' }, { name: 'dot', type: 'boolean' }], variants: ['default', 'red', 'success', 'warning'] },
  { name: 'EmptyState', category: 'feedback', description: 'Placeholder for empty content areas with action prompts.', props: [{ name: 'title', type: 'string' }, { name: 'description', type: 'string' }, { name: 'action', type: 'EmptyStateAction' }] },
  { name: 'FormValidation', category: 'feedback', description: 'Form-level validation summary with error messages.', props: [{ name: 'errors', type: 'FormValidationError[]' }, { name: 'variant', type: 'FormValidationVariant' }], variants: ['summary', 'inline'] },
  { name: 'MessageBox', category: 'feedback', description: 'Prominent message box for important communications.', props: [{ name: 'variant', type: 'MessageBoxVariant' }, { name: 'title', type: 'string' }, { name: 'children', type: 'ReactNode' }], variants: ['info', 'success', 'warning', 'error'] },
  { name: 'Modal', category: 'feedback', description: 'Dialog modal overlay with header, body, and footer.', props: [{ name: 'open', type: 'boolean' }, { name: 'size', type: 'ModalSize' }, { name: 'onClose', type: '() => void' }] },
  { name: 'OverlayMessage', category: 'feedback', description: 'Full-overlay message for critical alerts and confirmations.', props: [{ name: 'variant', type: 'OverlayMessageVariant' }, { name: 'title', type: 'string' }, { name: 'description', type: 'string' }], variants: ['info', 'success', 'warning', 'error'] },
  { name: 'Popover', category: 'feedback', description: 'Floating popover content triggered by interaction.', props: [{ name: 'position', type: 'PopoverPosition' }, { name: 'trigger', type: 'ReactNode' }, { name: 'content', type: 'ReactNode' }] },
  { name: 'Progress', category: 'feedback', description: 'Progress bar or circle showing completion percentage.', props: [{ name: 'value', type: 'number' }, { name: 'variant', type: 'ProgressVariant' }, { name: 'size', type: 'ProgressSize' }], variants: ['bar', 'circle'] },
  { name: 'Skeleton', category: 'feedback', description: 'Loading placeholder with animated shimmer effect.', props: [{ name: 'variant', type: 'SkeletonVariant' }, { name: 'width', type: 'string' }, { name: 'height', type: 'string' }], variants: ['text', 'rect', 'circle'] },
  { name: 'Snackbar', category: 'feedback', description: 'Brief notification snackbar at the bottom of the screen.', props: [{ name: 'message', type: 'string' }, { name: 'variant', type: 'SnackbarVariant' }, { name: 'position', type: 'SnackbarPosition' }], variants: ['info', 'success', 'error', 'warning'] },
  { name: 'Toast', category: 'feedback', description: 'Toast notifications via ToastProvider and useToast hook.', props: [{ name: 'variant', type: 'ToastVariant' }, { name: 'title', type: 'string' }, { name: 'action', type: 'ToastAction' }], variants: ['info', 'success', 'warning', 'error'] },
  { name: 'Tooltip', category: 'feedback', description: 'Small tooltip popup on hover or focus.', props: [{ name: 'content', type: 'ReactNode' }, { name: 'position', type: 'TooltipPosition' }] },
  { name: 'Timer', category: 'feedback', description: 'Countdown or count-up timer with formatting options.', props: [{ name: 'direction', type: 'TimerDirection' }, { name: 'format', type: 'TimerFormat' }, { name: 'variant', type: 'TimerVariant' }], variants: ['default', 'compact'] },

  // ─── Charts ─────────────────────────────────
  { name: 'BarChart', category: 'charts', description: 'Bar chart for comparing values across categories.', props: [{ name: 'data', type: 'BarChartDataItem[]' }, { name: 'orientation', type: 'BarChartOrientation' }], variants: ['vertical', 'horizontal'] },
  { name: 'DonutChartWidget', category: 'charts', description: 'Donut chart for showing proportional data.', props: [{ name: 'data', type: 'DonutChartDataItem[]' }, { name: 'size', type: 'number' }] },
  { name: 'LineChart', category: 'charts', description: 'Line chart for trend data over time.', props: [{ name: 'data', type: 'LineChartDataPoint[]' }, { name: 'showPoints', type: 'boolean' }] },
  { name: 'PieChart', category: 'charts', description: 'Pie chart for proportional data display.', props: [{ name: 'data', type: 'PieChartDataItem[]' }, { name: 'size', type: 'number' }] },

  // ─── Layout & Patterns ──────────────────────
  { name: 'Grid', category: 'layout', description: 'Responsive grid system based on UBS spacing tokens.', props: [{ name: 'columns', type: 'number | GridColumns' }, { name: 'gap', type: 'GridGap' }] },
  { name: 'Layout', category: 'layout', description: 'Page layout container with header, sidebar, and content areas.', props: [{ name: 'format', type: 'LayoutFormat' }] },
  { name: 'PageHeader', category: 'layout', description: 'Page header with breadcrumbs, title, and actions.', props: [{ name: 'title', type: 'string' }, { name: 'variant', type: 'PageHeaderVariant' }, { name: 'breadcrumbs', type: 'PageHeaderBreadcrumb[]' }], variants: ['default', 'impulse'] },
  { name: 'SectionWrapper', category: 'layout', description: 'Section container with consistent padding and backgrounds.', props: [{ name: 'padding', type: 'SectionPadding' }, { name: 'background', type: 'SectionBackground' }] },
  { name: 'ActionBar', category: 'layout', description: 'Sticky action bar for form workflows.', props: [{ name: 'primaryAction', type: 'ActionBarAction' }, { name: 'secondaryAction', type: 'ActionBarAction' }, { name: 'align', type: 'ActionBarAlign' }] },
  { name: 'CTA', category: 'layout', description: 'Call-to-action component with variant options.', props: [{ name: 'variant', type: 'CTAVariant' }, { name: 'size', type: 'CTASize' }, { name: 'href', type: 'string' }], variants: ['button', 'text', 'url'] },
  { name: 'Impulse', category: 'layout', description: 'Impulse/teaser component for promotional content.', props: [{ name: 'format', type: 'ImpulseFormat' }] },
  { name: 'Logo', category: 'layout', description: 'UBS logo with variant and colour options.', props: [{ name: 'variant', type: 'LogoVariant' }, { name: 'colour', type: 'LogoColour' }, { name: 'size', type: 'number' }], variants: ['full', 'symbol', 'wordmark'] },
  { name: 'LogoTab', category: 'layout', description: 'Floating logo tab positioned at the edge of the screen.', props: [{ name: 'position', type: 'LogoTabPosition' }, { name: 'variant', type: 'LogoTabVariant' }] },
  { name: 'Icon', category: 'layout', description: 'Icon component from the UBS icon set with sizing.', props: [{ name: 'name', type: 'string' }, { name: 'size', type: 'IconSize' }, { name: 'variant', type: 'IconVariant' }], variants: ['sm', 'md', 'lg'] },
  { name: 'MovingFrame', category: 'layout', description: 'Animated decorative frame with UBS branding motion.', props: [{ name: 'variant', type: 'MovingFrameVariant' }], variants: ['transparent', 'opaque'] },
  { name: 'Pattern', category: 'layout', description: 'Decorative pattern background with UBS brand colours.', props: [{ name: 'variant', type: 'PatternComponentVariant' }, { name: 'colourDirection', type: 'PatternColourDirection' }], variants: ['solid', 'outline'] },
];

export function getComponentsByCategory(categoryId: string): ComponentInfo[] {
  return components.filter((c) => c.category === categoryId);
}

export function searchComponents(query: string): ComponentInfo[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return components.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
  );
}
