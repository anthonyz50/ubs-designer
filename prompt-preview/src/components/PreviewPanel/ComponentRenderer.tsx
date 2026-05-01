import { useCallback, useRef } from 'react';
import type { ComponentModel } from '../../types';
import { UbsIcon } from '../common/UbsIcon';
import type { IconName } from '../common/UbsIcon';
import wrapperStyles from './ComponentRenderer.module.css';
import { resolveIconPath } from '../../services/assetManifest';

/** UBS logo image element for headers and footers. */
const UbsLogoImg = () => (
  <img
    src="/ubs-logo.svg"
    alt="UBS"
    style={{ height: '22px', width: 'auto' }}
  />
);

// ─── Design System Imports ─────────────────────────────────────────
import {
  Typography,
  Button,
  Card,
  Alert,
  Input,
  Textarea,
  Table,
  Badge,
  ProcessNavigation,
  List,
  Stat,
  Divider,
  ActionBar,
  SidebarNav,
  Breadcrumbs,
  Accordion,
  AgendaSteps,
  Avatar,
  FileUpload,
  DatePicker,
  Toggle,
  Pagination,
  Tabs,
  Chip,
  ChipGroup,
  Skeleton,
  TreeNavigation,
  Progress,
  PageHeader,
  MessageBox,
  Header,
  PageFooter,
  CTA,
  ContentBlock,
  SectionWrapper,
} from '@ubs/design-system';

import type {
  TableColumn,
  ProcessStep,
  StepStatus,
  ListItem,
  AccordionItem,
  TabItem,
  BreadcrumbItem,
  AgendaStep,
  AgendaStepStatus,
  TreeNodeItem,
  SidebarNavItem,
  ActionBarAction,
} from '@ubs/design-system';

// ─── Constants ─────────────────────────────────────────────────────

const VALID_ICONS: Set<string> = new Set([
  'refresh', 'edit', 'code', 'search', 'close', 'bot', 'magic',
  'desktop', 'mobile', 'undo', 'lightning', 'eye', 'check',
  'warning', 'lightbulb', 'download', 'arrow-right', 'arrow-left',
  'play', 'chevron-down', 'chevron-right', 'info', 'success-circle',
  'error-circle', 'stepper-dot', 'layout', 'document',
  'chart', 'gear', 'tool', 'columns', 'grid', 'shield-check',
]);

function safeIcon(name: unknown): IconName | null {
  if (typeof name === 'string' && VALID_ICONS.has(name)) {
    return name as IconName;
  }
  return null;
}

// ─── Variant Mapping Helpers ───────────────────────────────────────

/** Map heading levels to Typography variants */
function headingVariant(level: number): 'keyline' | 'subheadline1' | 'subheadline2' | 'subheadline3' | 'subheadline4' | 'subtitles' {
  const map: Record<number, 'keyline' | 'subheadline1' | 'subheadline2' | 'subheadline3' | 'subheadline4' | 'subtitles'> = {
    1: 'keyline',
    2: 'subheadline1',
    3: 'subheadline2',
    4: 'subheadline3',
    5: 'subheadline4',
    6: 'subtitles',
  };
  return map[Math.min(Math.max(level, 1), 6)] ?? 'subheadline1';
}

/** Map heading levels to HTML elements */
function headingElement(level: number): 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' {
  const clamped = Math.min(Math.max(level, 1), 6);
  return `h${clamped}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

/** Map process stepper status strings to the design system StepStatus */
function mapStepStatus(status: string): StepStatus {
  if (status === 'complete' || status === 'completed') return 'completed';
  if (status === 'active' || status === 'current') return 'active';
  if (status === 'error') return 'error';
  return 'upcoming';
}

/** Map agenda step status strings */
function mapAgendaStatus(status?: string): AgendaStepStatus {
  if (status === 'complete' || status === 'completed') return 'completed';
  if (status === 'active' || status === 'current') return 'active';
  return 'upcoming';
}

/** Map alert/badge variant to design system variant */
function mapAlertVariant(v: string): 'error' | 'warning' | 'success' | 'info' {
  if (v === 'error' || v === 'danger') return 'error';
  if (v === 'warning') return 'warning';
  if (v === 'success') return 'success';
  return 'info';
}

// ─── Component Props ───────────────────────────────────────────────

interface ComponentRendererProps {
  component: ComponentModel;
  onNavigate?: (pageId: string) => void;
  editMode?: boolean;
  selectedComponentId?: string | null;
  onSelectComponent?: (component: ComponentModel, rect: DOMRect) => void;
}

// ─── Main Exported Component ───────────────────────────────────────

export function ComponentRenderer({
  component,
  onNavigate,
  editMode,
  selectedComponentId,
  onSelectComponent,
}: ComponentRendererProps) {
  const { type, props } = component;
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (!editMode || !onSelectComponent) return;
      e.stopPropagation();
      const rect = wrapperRef.current?.getBoundingClientRect();
      if (rect) {
        onSelectComponent(component, rect);
      }
    },
    [editMode, onSelectComponent, component],
  );

  const isSelected = selectedComponentId === component.id;

  // In edit mode, suppress navigation so clicks select instead
  const effectiveOnNavigate = editMode ? undefined : onNavigate;

  const rendered = renderContent(
    type,
    props,
    component,
    effectiveOnNavigate,
    editMode,
    selectedComponentId,
    onSelectComponent,
  );

  if (!editMode) {
    return rendered;
  }

  const wrapperClass = [
    wrapperStyles.componentWrapper,
    isSelected ? wrapperStyles.componentWrapperSelected : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={wrapperRef}
      className={wrapperClass}
      data-component-id={component.id}
      onClick={handleClick}
    >
      {rendered}
    </div>
  );
}

// ============================================================
// Render the inner content for each component type
// ============================================================

function renderContent(
  type: ComponentModel['type'],
  props: Record<string, unknown>,
  component: ComponentModel,
  onNavigate: ((pageId: string) => void) | undefined,
  editMode: boolean | undefined,
  selectedComponentId: string | null | undefined,
  onSelectComponent: ((component: ComponentModel, rect: DOMRect) => void) | undefined,
): JSX.Element {
  switch (type) {
    // ─── Typography: Heading ─────────────────────────────────
    case 'heading': {
      const level = (props.level as number) ?? 2;
      const text = (props.text as string) ?? '';
      const illustration = props.illustration as string | undefined;
      return (
        <div style={illustration ? { display: 'flex', alignItems: 'center', gap: '24px' } : undefined}>
          <Typography variant={headingVariant(level)} as={headingElement(level)}>
            {text}
          </Typography>
          {illustration && (
            <img
              src={illustration}
              alt=""
              style={{ width: '120px', height: '120px', objectFit: 'contain', flexShrink: 0 }}
            />
          )}
        </div>
      );
    }

    // ─── Typography: Paragraph ───────────────────────────────
    case 'paragraph': {
      const text = (props.text as string) ?? '';
      const variant = (props.variant as string) ?? 'body-1';
      // Map old CSS variants to design system Typography variants
      const typoVariant = variant === 'body-1' ? 'copyText'
        : variant === 'body-2' ? 'smallCopyText'
        : variant === 'body-3' ? 'captions'
        : 'copyText';
      return (
        <Typography variant={typoVariant} as="p">
          {text}
        </Typography>
      );
    }

    // ─── Button ──────────────────────────────────────────────
    case 'button': {
      const label = (props.label as string) ?? 'Button';
      const variant = (props.variant as string) ?? 'primary';
      const navigateTo = props.navigateTo as string | undefined;
      const btnSize = (props.size as string) ?? 'medium';
      const btnFullWidth = (props.fullWidth as boolean) ?? false;
      const mappedVariant = (variant === 'primary' || variant === 'secondary' || variant === 'outline' || variant === 'ghost' || variant === 'destructive')
        ? variant
        : 'primary';
      return (
        <Button
          variant={mappedVariant as any}
          size={btnSize as any}
          fullWidth={btnFullWidth}
          onClick={() => navigateTo && onNavigate?.(navigateTo)}
        >
          {label}
        </Button>
      );
    }

    // ─── Card ────────────────────────────────────────────────
    case 'card': {
      const title = (props.title as string) ?? '';
      const description = (props.description as string) ?? '';
      const icon = safeIcon(props.icon);
      const severity = props.severity as string | undefined;
      const children = props.children as Array<{ label: string; value: string }> | undefined;
      const cardIllustration = props.illustration as string | undefined;
      const cardVariant = (props.cardVariant as string) ?? 'default';
      const cardPadding = (props.padding as string) ?? 'medium';
      const cardHoverable = (props.hoverable as boolean) ?? true;

      return (
        <Card
          variant={cardVariant as any}
          padding={cardPadding as any}
          hoverable={cardHoverable}
          header={
            title ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="subheadline3" as="h5">
                  {icon && (
                    <span style={{ marginRight: '8px', display: 'inline-flex', verticalAlign: 'middle' }}>
                      <UbsIcon name={icon} size={16} />
                    </span>
                  )}
                  {!icon && props.icon && resolveIconPath(props.icon as string) && (
                    <span style={{ marginRight: '8px', display: 'inline-flex', verticalAlign: 'middle' }}>
                      <img src={resolveIconPath(props.icon as string)} alt="" style={{ width: '16px', height: '16px' }} />
                    </span>
                  )}
                  {title}
                </Typography>
                {severity && (
                  <Badge variant={severity === 'error' ? 'red' : 'warning'}>
                    {severity}
                  </Badge>
                )}
              </div>
            ) : undefined
          }
        >
          {cardIllustration && (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0' }}>
              <img
                src={cardIllustration}
                alt={title ? `${title} illustration` : 'Illustration'}
                style={{ width: '100%', maxWidth: '180px', height: 'auto', objectFit: 'contain' }}
              />
            </div>
          )}
          {description && (
            <Typography variant="smallCopyText" as="p">
              {description}
            </Typography>
          )}
          {children && Array.isArray(children) && (
            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {children.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="captions" as="span" colour="var(--ubs-text-secondary)">
                    {item.label}
                  </Typography>
                  <Typography variant="captions" as="span" weight="bold">
                    {item.value}
                  </Typography>
                </div>
              ))}
            </div>
          )}
        </Card>
      );
    }

    // ─── Alert ───────────────────────────────────────────────
    case 'alert': {
      const variant = (props.variant as string) ?? 'info';
      const title = (props.title as string) ?? '';
      const message = (props.message as string) ?? '';
      return (
        <Alert variant={mapAlertVariant(variant)} title={title}>
          {message}
        </Alert>
      );
    }

    // ─── Form Field ──────────────────────────────────────────
    case 'form-field': {
      const label = (props.label as string) ?? '';
      const inputType = (props.inputType as string) ?? (props.type as string) ?? 'text';
      const placeholder = (props.placeholder as string) ?? '';
      const inputSize = (props.size as string) ?? 'md';
      const inputError = (props.error as string) ?? '';

      if (inputType === 'textarea') {
        return (
          <Textarea
            label={label}
            placeholder={placeholder}
            readOnly
          />
        );
      }

      return (
        <Input
          label={label}
          type={inputType as 'text' | 'email' | 'password' | 'number' | 'tel'}
          placeholder={placeholder}
          size={inputSize as any}
          error={inputError || undefined}
          readOnly
        />
      );
    }

    // ─── Table ───────────────────────────────────────────────
    case 'table': {
      const headers = (props.headers as string[]) ?? (props.columns as string[]) ?? [];
      const rows = (props.rows as string[][]) ?? [];

      // Convert to design system Table format: columns array + data array
      const columns: TableColumn<Record<string, unknown>>[] = headers.map((h, i) => ({
        key: `col${i}`,
        header: h,
      }));

      const data = rows.map((row) => {
        const obj: Record<string, unknown> = {};
        headers.forEach((_, i) => {
          obj[`col${i}`] = row[i] ?? '';
        });
        return obj;
      });

      const tableStriped = (props.striped as boolean) ?? true;
      const tableHoverable = (props.hoverable as boolean) ?? true;
      return (
        <Table
          columns={columns}
          data={data}
          striped={tableStriped}
          hoverable={tableHoverable}
        />
      );
    }

    // ─── Badge ───────────────────────────────────────────────
    case 'badge': {
      const label = (props.label as string) ?? '';
      const variant = (props.variant as string) ?? 'info';
      const mappedBadgeVariant = variant === 'error' ? 'red' as const
        : variant === 'success' ? 'success' as const
        : variant === 'warning' ? 'warning' as const
        : 'default' as const;
      return (
        <Badge variant={mappedBadgeVariant}>
          {label}
        </Badge>
      );
    }

    // ─── Status Label (uses Badge) ───────────────────────────
    case 'status-label': {
      const label = (props.label as string) ?? (props.status as string) ?? '';
      const variant = (props.variant as string) ?? 'info';
      const mappedBadgeVariant = variant === 'error' ? 'red' as const
        : variant === 'success' ? 'success' as const
        : variant === 'warning' ? 'warning' as const
        : 'default' as const;
      return (
        <Badge variant={mappedBadgeVariant}>
          {label}
        </Badge>
      );
    }

    // ─── Progress Stepper (ProcessNavigation) ────────────────
    case 'progress-stepper': {
      const steps = (props.steps as Array<{ label: string; status: string }>) ?? [];
      const mappedSteps: ProcessStep[] = steps.map((step) => ({
        label: step.label,
        status: mapStepStatus(step.status),
      }));
      const currentIdx = steps.findIndex(s => s.status === 'active' || s.status === 'current');
      return (
        <ProcessNavigation
          steps={mappedSteps}
          currentStep={currentIdx >= 0 ? currentIdx : 0}
        />
      );
    }

    // ─── Recommendation (MessageBox) ─────────────────────────
    case 'recommendation': {
      const title = (props.title as string) ?? '';
      const description = (props.description as string) ?? '';
      return (
        <MessageBox variant="info" title={title}>
          {description}
        </MessageBox>
      );
    }

    // ─── List ────────────────────────────────────────────────
    case 'list': {
      const items = (props.items as string[]) ?? [];
      const listItems: ListItem[] = items.map((item, idx) => ({
        id: `list-item-${idx}`,
        primary: item,
      }));
      return (
        <List items={listItems} />
      );
    }

    // ─── Metric Card (Stat inside Card) ──────────────────────
    case 'metric-card': {
      const value = (props.value as string) ?? '';
      const label = (props.label as string) ?? '';
      return (
        <Card>
          <Stat label={label} value={value} />
        </Card>
      );
    }

    // ─── Divider ─────────────────────────────────────────────
    case 'divider': {
      return <Divider />;
    }

    // ─── Action Bar ──────────────────────────────────────────
    case 'action-bar': {
      const actions = (props.actions as Array<{
        label: string;
        variant?: string;
        navigateTo?: string;
      }>) ?? [];

      if (actions.length === 0) {
        return <div />;
      }

      const primaryAction: ActionBarAction = {
        label: actions[0].label,
        onClick: () => actions[0].navigateTo && onNavigate?.(actions[0].navigateTo),
        variant: (actions[0].variant as 'primary' | 'secondary' | 'outline' | 'ghost') ?? 'primary',
      };

      const secondaryAction: ActionBarAction | undefined = actions[1]
        ? {
            label: actions[1].label,
            onClick: () => actions[1].navigateTo && onNavigate?.(actions[1].navigateTo),
            variant: (actions[1].variant as 'primary' | 'secondary' | 'outline' | 'ghost') ?? 'secondary',
          }
        : undefined;

      const tertiaryActions: ActionBarAction[] = actions.slice(2).map((a) => ({
        label: a.label,
        onClick: () => a.navigateTo && onNavigate?.(a.navigateTo),
        variant: 'ghost' as const,
      }));

      return (
        <ActionBar
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
          tertiaryActions={tertiaryActions.length > 0 ? tertiaryActions : undefined}
        />
      );
    }

    // ─── Sidebar Nav ─────────────────────────────────────────
    case 'sidebar-nav': {
      const items = (props.items as Array<{ label: string; icon?: string; id?: string }>) ?? [];
      const activeItem = (props.activeItem as string) ?? '';
      const sidebarVariant = (props.variant as string) ?? 'light';
      const sidebarItems: SidebarNavItem[] = items.map((item, idx) => ({
        id: item.id ?? `nav-${idx}`,
        label: item.label,
      }));
      return (
        <SidebarNav
          variant={sidebarVariant as any}
          items={sidebarItems}
          activeId={activeItem}
        />
      );
    }

    // ─── Breadcrumb ──────────────────────────────────────────
    case 'breadcrumb':
    case 'breadcrumb-nav': {
      const items = (props.items as Array<string | { label: string; navigateTo?: string }>) ?? [];
      const crumbs: BreadcrumbItem[] = items.map((item) => {
        if (typeof item === 'string') {
          return { label: item };
        }
        return {
          label: item.label,
          href: item.navigateTo ? '#' : undefined,
        };
      });
      return (
        <Breadcrumbs items={crumbs} />
      );
    }

    // ─── Drawer (Overlay) ────────────────────────────────────
    case 'drawer': {
      const title = (props.title as string) ?? 'Drawer';
      const body = (props.body as string) ?? '';
      // Render as an inline preview (not a real overlay modal)
      return (
        <div style={{ border: '1px solid var(--ubs-gray-2, #ccc)', borderRadius: '4px', padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <Typography variant="subheadline2" as="h3">{title}</Typography>
            <Button variant="ghost" aria-label="Close">
              <UbsIcon name="close" size={16} />
            </Button>
          </div>
          <div>
            {body && <Typography variant="smallCopyText" as="p">{body}</Typography>}
            {component.children?.map((child) => (
              <ComponentRenderer
                key={child.id}
                component={child}
                onNavigate={onNavigate}
                editMode={editMode}
                selectedComponentId={selectedComponentId}
                onSelectComponent={onSelectComponent}
              />
            ))}
          </div>
        </div>
      );
    }

    // ─── Accordion ───────────────────────────────────────────
    case 'accordion': {
      const items = (props.items as Array<{ title: string; content: string }>) ?? [];
      const accordionVariant = (props.variant as string) ?? 'default';
      const accordionItems: AccordionItem[] = items.map((item) => ({
        title: item.title,
        content: item.content,
      }));
      return (
        <Accordion
          items={accordionItems}
          variant={accordionVariant as any}
        />
      );
    }

    // ─── Timeline (AgendaSteps) ──────────────────────────────
    case 'timeline': {
      const items = (props.items as Array<{
        date?: string;
        time?: string;
        title: string;
        event?: string;
        description?: string;
        active?: boolean;
        status?: string;
      }>) ?? [];

      const steps: AgendaStep[] = items.map((item) => ({
        title: item.title ?? item.event ?? '',
        description: item.description,
        status: item.active ? 'active' as AgendaStepStatus : mapAgendaStatus(item.status),
        timestamp: item.date ?? item.time,
      }));

      const timelineVariant = (props.variant as string) ?? 'timeline';
      return (
        <AgendaSteps steps={steps} variant={timelineVariant as any} />
      );
    }

    // ─── Avatar ──────────────────────────────────────────────
    case 'avatar': {
      const initials = (props.initials as string) ?? '?';
      const size = (props.size as string) ?? 'md';
      const mappedSize = (size === 'xs' || size === 'sm' || size === 'md' || size === 'lg' || size === 'xl') ? size : 'md';
      return (
        <Avatar name={initials} size={mappedSize} />
      );
    }

    // ─── User Info (Avatar + Typography) ─────────────────────
    case 'user-info': {
      const name = (props.name as string) ?? '';
      const role = (props.role as string) ?? '';
      const size = (props.avatarSize as string) ?? 'md';
      const mappedSize = (size === 'xs' || size === 'sm' || size === 'md' || size === 'lg' || size === 'xl') ? size : 'md';
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Avatar name={name} size={mappedSize} />
          <div>
            <Typography variant="subheadline3" as="span">{name}</Typography>
            {role && (
              <>
                <br />
                <Typography variant="captions" as="span" colour="var(--ubs-text-secondary)">
                  {role}
                </Typography>
              </>
            )}
          </div>
        </div>
      );
    }

    // ─── File Upload ─────────────────────────────────────────
    case 'file-upload': {
      const label = (props.text as string) ?? (props.label as string) ?? 'Upload files';
      const uploadVariant = (props.variant as string) ?? 'dropzone';
      return (
        <FileUpload
          variant={uploadVariant as any}
          label={label}
        />
      );
    }

    // ─── Date Picker ─────────────────────────────────────────
    case 'date-picker': {
      const label = (props.label as string) ?? 'Date';
      return (
        <DatePicker
          label={label}
          disabled
        />
      );
    }

    // ─── Toggle ──────────────────────────────────────────────
    case 'toggle': {
      const label = (props.label as string) ?? '';
      const checked = (props.checked as boolean) ?? false;
      return (
        <Toggle
          label={label || 'Toggle'}
          checked={checked}
          onChange={() => {/* read-only preview */}}
        />
      );
    }

    // ─── Pagination ──────────────────────────────────────────
    case 'pagination': {
      const totalPages = (props.totalPages as number) ?? 5;
      const currentPage = (props.currentPage as number) ?? 1;
      return (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onChange={() => {/* preview only */}}
        />
      );
    }

    // ─── Nav Tabs (Tabs) ─────────────────────────────────────
    case 'nav-tabs': {
      const tabs = (props.tabs as Array<{ label: string; id?: string; count?: number }>) ?? [];
      const activeTab = (props.activeTab as string) ?? (props.active as string) ?? '';
      const tabsVariant = (props.variant as string) ?? 'underline';
      const tabItems: TabItem[] = tabs.map((tab) => ({
        label: tab.count !== undefined ? `${tab.label} (${tab.count})` : tab.label,
        value: tab.id ?? tab.label,
      }));
      return (
        <Tabs
          variant={tabsVariant as any}
          tabs={tabItems}
          activeTab={activeTab || tabItems[0]?.value || ''}
          onChange={() => {/* preview only */}}
        />
      );
    }

    // ─── Toolbar (ActionBar) ─────────────────────────────────
    case 'toolbar': {
      const actions = (props.actions as Array<{
        label: string;
        variant?: string;
        icon?: string;
      }>) ?? [];

      if (actions.length === 0) {
        return <div />;
      }

      const primaryAction: ActionBarAction = {
        label: actions[0].label,
        onClick: () => {},
        variant: (actions[0].variant as 'primary' | 'secondary' | 'outline' | 'ghost') ?? 'ghost',
      };

      const secondaryAction: ActionBarAction | undefined = actions[1]
        ? {
            label: actions[1].label,
            onClick: () => {},
            variant: (actions[1].variant as 'primary' | 'secondary' | 'outline' | 'ghost') ?? 'ghost',
          }
        : undefined;

      return (
        <ActionBar
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
      );
    }

    // ─── Chip Group ──────────────────────────────────────────
    case 'chip-group': {
      const chips = (props.chips as Array<string | { label: string; removable?: boolean }>) ?? [];
      return (
        <ChipGroup>
          {chips.map((chip, idx) => {
            const chipLabel = typeof chip === 'string' ? chip : chip.label;
            return (
              <Chip key={idx} variant="filter" label={chipLabel} />
            );
          })}
        </ChipGroup>
      );
    }

    // ─── Comment (custom with Avatar) ────────────────────────
    case 'comment': {
      const author = (props.author as string) ?? '';
      const time = (props.time as string) ?? '';
      const text = (props.text as string) ?? '';
      return (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <Avatar name={author} size="sm" />
          <div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Typography variant="subheadline3" as="span">{author}</Typography>
              {time && (
                <Typography variant="captions" as="span" colour="var(--ubs-text-secondary)">
                  {time}
                </Typography>
              )}
            </div>
            <Typography variant="copyText" as="p">{text}</Typography>
          </div>
        </div>
      );
    }

    // ─── Activity Item (custom with icons) ───────────────────
    case 'activity-item': {
      const description = (props.description as string) ?? (props.action as string) ?? '';
      const time = (props.time as string) ?? (props.timestamp as string) ?? '';
      const icon = safeIcon(props.icon);
      return (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <div style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'var(--ubs-pastel-1, #ECEBE4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            {icon ? <UbsIcon name={icon} size={16} /> : <UbsIcon name="info" size={16} />}
          </div>
          <div>
            <Typography variant="copyText" as="div">{description}</Typography>
            {time && (
              <Typography variant="captions" as="div" colour="var(--ubs-text-secondary)">
                {time}
              </Typography>
            )}
          </div>
        </div>
      );
    }

    // ─── Skeleton ────────────────────────────────────────────
    case 'skeleton': {
      const lines = (props.lines as number) ?? 3;
      const showBlock = (props.showBlock as boolean) ?? false;
      return (
        <div aria-busy="true" aria-label="Loading">
          {showBlock && <Skeleton variant="rect" width="100%" height={120} />}
          <Skeleton variant="text" lines={lines} />
        </div>
      );
    }

    // ─── Stat Group ──────────────────────────────────────────
    case 'stat-group': {
      const stats = (props.stats as Array<{ value: string; label: string; subtitle?: string }>) ?? [];
      return (
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {stats.map((stat, idx) => (
            <Stat key={idx} label={stat.label} value={stat.value} />
          ))}
        </div>
      );
    }

    // ─── Tree View (TreeNavigation) ──────────────────────────
    case 'tree-view': {
      const items = (props.items as Array<{
        label: string;
        children?: Array<{ label: string; children?: Array<{ label: string }> }>;
      }>) ?? [];

      function convertToTreeNodes(
        nodes: Array<{ label: string; children?: Array<{ label: string; children?: unknown }> }>,
        prefix: string = 'tree',
      ): TreeNodeItem[] {
        return nodes.map((node, idx) => ({
          id: `${prefix}-${idx}`,
          label: node.label,
          children: node.children
            ? convertToTreeNodes(
                node.children as Array<{ label: string; children?: Array<{ label: string; children?: unknown }> }>,
                `${prefix}-${idx}`,
              )
            : undefined,
        }));
      }

      return (
        <TreeNavigation items={convertToTreeNodes(items)} />
      );
    }

    // ─── Split View (custom, no direct equivalent) ───────────
    case 'split-view': {
      const listItems = (props.items as Array<{ label: string; id?: string }>) ?? [];
      const activeItem = (props.activeItem as string) ?? '';
      const detailTitle = (props.detailTitle as string) ?? '';
      const detailContent = (props.detailContent as string) ?? '';
      return (
        <div style={{ display: 'flex', border: '1px solid var(--ubs-gray-2, #ccc)', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ width: '280px', borderRight: '1px solid var(--ubs-gray-2, #ccc)', background: 'var(--ubs-pastel-1, #ECEBE4)' }}>
            {listItems.map((item, idx) => (
              <div
                key={item.id ?? idx}
                style={{
                  padding: '12px 16px',
                  cursor: 'pointer',
                  background: (item.id ?? item.label) === activeItem ? 'var(--ubs-white, #fff)' : 'transparent',
                  fontWeight: (item.id ?? item.label) === activeItem ? 600 : 400,
                }}
              >
                <Typography variant="copyText" as="span">{item.label}</Typography>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, padding: '16px' }}>
            {detailTitle && <Typography variant="subheadline2" as="h3">{detailTitle}</Typography>}
            {detailContent && (
              <Typography variant="smallCopyText" as="p" colour="var(--ubs-text-secondary)">
                {detailContent}
              </Typography>
            )}
            {component.children?.map((child) => (
              <ComponentRenderer
                key={child.id}
                component={child}
                onNavigate={onNavigate}
                editMode={editMode}
                selectedComponentId={selectedComponentId}
                onSelectComponent={onSelectComponent}
              />
            ))}
          </div>
        </div>
      );
    }

    // ─── Step Indicator (Progress) ───────────────────────────
    case 'step-indicator': {
      const totalSteps = (props.totalSteps as number) ?? 4;
      const currentStep = (props.currentStep as number) ?? 1;
      const value = Math.round((currentStep / totalSteps) * 100);
      return (
        <Progress
          value={value}
          label={`Step ${currentStep} of ${totalSteps}`}
          showLabel
        />
      );
    }

    // ─── Key-Value (custom) ──────────────────────────────────
    case 'key-value': {
      const items = (props.items as Array<{ label: string; value: string }>) ?? [];
      // Also handle single key-value (from detail pages)
      const label = props.label as string | undefined;
      const value = props.value as string | undefined;
      const allItems = items.length > 0 ? items : (label && value ? [{ label, value }] : []);

      return (
        <div>
          {allItems.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--ubs-gray-2, #eee)' }}>
              <Typography variant="captions" as="span" colour="var(--ubs-text-secondary)">
                {item.label}
              </Typography>
              <Typography variant="captions" as="span" weight="bold">
                {item.value}
              </Typography>
            </div>
          ))}
        </div>
      );
    }

    // ─── Section Header (PageHeader) ─────────────────────────
    case 'section-header': {
      const title = (props.title as string) ?? '';
      const actionLabel = (props.actionLabel as string) ?? '';
      const navigateTo = props.navigateTo as string | undefined;
      return (
        <PageHeader
          title={title}
          actions={
            actionLabel ? (
              <Button
                variant="ghost"
                onClick={() => navigateTo && onNavigate?.(navigateTo)}
              >
                {actionLabel}
              </Button>
            ) : undefined
          }
        />
      );
    }

    // ─── Header (design system Header) ──────────────────────
    case 'header': {
      const navItems = (props.navItems as Array<{ label: string; href?: string; active?: boolean }>) ?? [];
      const sticky = (props.sticky as boolean) ?? false;
      const headerVariant = (props.variant as string) ?? 'standard';

      return (
        <Header
          variant={headerVariant as any}
          logo={<UbsLogoImg />}
          navItems={navItems.map((item) => ({
            label: item.label,
            href: item.href ?? '#',
            active: item.active,
          }))}
          sticky={sticky}
        />
      );
    }

    // ─── Footer (design system PageFooter) ───────────────────
    case 'footer': {
      const columns = (props.columns as Array<{
        title: string;
        links: Array<{ label: string; href?: string }>;
      }>) ?? [];
      const copyright = (props.copyright as string) ?? `\u00A9 ${new Date().getFullYear()} UBS. All rights reserved.`;
      const legal = (props.legal as string) ?? '';
      const citySkyline = props.citySkyline as string | undefined;

      return (
        <div>
          {citySkyline && (
            <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, background: 'var(--ubs-bg-tertiary)' }}>
              <img
                src={citySkyline}
                alt="City skyline"
                style={{ width: '100%', height: 'auto', maxHeight: '120px', objectFit: 'cover', opacity: 0.6 }}
              />
            </div>
          )}
          <PageFooter
            logo={<UbsLogoImg />}
            columns={columns.map((col) => ({
              title: col.title,
              links: col.links.map((link) => ({
                label: link.label,
                href: link.href ?? '#',
              })),
            }))}
            copyright={copyright}
            legal={legal || undefined}
          />
        </div>
      );
    }

    // ─── Hero Section ────────────────────────────────────────
    case 'hero': {
      const title = (props.title as string) ?? '';
      const subtitle = (props.subtitle as string) ?? '';
      const ctaLabel = (props.ctaLabel as string) ?? '';
      const ctaNavigateTo = props.ctaNavigateTo as string | undefined;
      const secondaryCtaLabel = (props.secondaryCtaLabel as string) ?? '';
      const heroIllustration = props.illustration as string | undefined;

      return (
        <SectionWrapper background="pastel1" padding="lg">
          <div style={{ display: 'flex', alignItems: 'center', gap: '48px', maxWidth: '960px', margin: '0 auto', padding: '48px 0' }}>
            <div style={{ flex: 1 }}>
              <Typography variant="keyline" as="h1">{title}</Typography>
              {subtitle && (
                <Typography variant="leadText1" as="p" colour="var(--ubs-text-secondary)">
                  {subtitle}
                </Typography>
              )}
              {(ctaLabel || secondaryCtaLabel) && (
                <div style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
                  {ctaLabel && (
                    <CTA
                      label={ctaLabel}
                      variant="button"
                      onClick={() => ctaNavigateTo && onNavigate?.(ctaNavigateTo)}
                    />
                  )}
                  {secondaryCtaLabel && (
                    <Button variant="outline">{secondaryCtaLabel}</Button>
                  )}
                </div>
              )}
            </div>
            {heroIllustration && (
              <div style={{ flex: '0 0 280px' }}>
                <img
                  src={heroIllustration}
                  alt="Hero illustration"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </div>
            )}
          </div>
        </SectionWrapper>
      );
    }

    // ─── About Section ───────────────────────────────────────
    case 'about-section': {
      const title = (props.title as string) ?? '';
      const description = (props.description as string) ?? '';
      const blocks = (props.blocks as Array<{
        title: string;
        description: string;
        ctaLabel?: string;
        illustration?: string;
      }>) ?? [];

      return (
        <SectionWrapper padding="lg">
          {title && <Typography variant="subheadline1" as="h2">{title}</Typography>}
          {description && (
            <Typography variant="leadText2" as="p" colour="var(--ubs-text-secondary)">
              {description}
            </Typography>
          )}
          {blocks.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '32px' }}>
              {blocks.map((block, idx) => (
                <ContentBlock
                  key={idx}
                  title={block.title}
                  media={block.illustration ? (
                    <img
                      src={block.illustration}
                      alt={`${block.title} illustration`}
                      style={{ width: '100%', maxWidth: '200px', height: 'auto', objectFit: 'contain', margin: '0 auto', display: 'block' }}
                    />
                  ) : undefined}
                  action={block.ctaLabel ? { label: block.ctaLabel, onClick: () => {} } : undefined}
                >
                  <Typography variant="copyText" as="p">{block.description}</Typography>
                </ContentBlock>
              ))}
            </div>
          )}
        </SectionWrapper>
      );
    }

    // ─── Fallback ────────────────────────────────────────────
    default: {
      return (
        <Typography variant="captions" as="div" colour="var(--ubs-text-secondary)">
          [{type}: {component.id}]
        </Typography>
      );
    }
  }
}
