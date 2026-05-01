// ============================================================
// UBS AI UX Designer — Page Templates
// ============================================================
// Reusable page template functions that generate fully populated
// PageModel instances with realistic UBS enterprise content.

import type { PageModel, SectionModel, ComponentModel } from '../types';

// ----- Helper: unique ID generation -----

let idCounter = 0;

function uid(prefix: string): string {
  idCounter++;
  return `${prefix}-${idCounter}`;
}

export function resetIdCounter(): void {
  idCounter = 0;
}

// ----- Helper: capitalise -----

function cap(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ----- Dashboard page -----

export function createDashboardPage(
  subject: string,
  metrics: string[],
): PageModel {
  const pageId = uid('page-dashboard');

  const metricComponents: ComponentModel[] = metrics.map((metric) => ({
    id: uid('metric'),
    type: 'metric-card',
    props: {
      label: metric,
      value: generateMetricValue(metric),
      trend: Math.random() > 0.5 ? 'up' : 'down',
      trendValue: `${(Math.random() * 15 + 1).toFixed(1)}%`,
    },
    accessibility: { label: `${metric} metric` },
  }));

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      title: `${cap(subject)} overview`,
      layout: 'grid-auto',
      spacing: 'md',
      components: metricComponents,
    },
    {
      id: uid('section'),
      title: 'Recent activity',
      layout: 'stack',
      spacing: 'md',
      components: [
        {
          id: uid('table'),
          type: 'table',
          props: {
            columns: ['Time', 'Event', 'Status', 'Owner'],
            rows: [
              ['09:45', `${cap(subject)} update completed`, 'Success', 'Sarah Chen'],
              ['09:32', `New ${subject} record created`, 'Active', 'James Miller'],
              ['09:15', `${cap(subject)} review requested`, 'Pending', 'Priya Sharma'],
              ['08:58', `${cap(subject)} threshold alert`, 'Warning', 'System'],
              ['08:42', `${cap(subject)} report generated`, 'Complete', 'David Okonkwo'],
            ],
          },
          accessibility: { label: `Recent ${subject} activity` },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: `${cap(subject)} dashboard`,
    description: `Real-time overview of ${subject} metrics and recent activity`,
    pageType: 'dashboard',
    sections,
    primaryAction: { label: 'View full report' },
    secondaryAction: { label: 'Export data' },
  };
}

// ----- List page -----

export function createListPage(
  subject: string,
  columns: string[],
): PageModel {
  const pageId = uid('page-list');
  const detailPageId = uid('page-detail-ref');

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'flex-between',
      spacing: 'md',
      components: [
        {
          id: uid('search'),
          type: 'search',
          props: {
            placeholder: `Search ${subject}...`,
          },
          accessibility: { label: `Search ${subject}` },
        },
        {
          id: uid('filter'),
          type: 'filter',
          props: {
            filters: ['Status', 'Date range', 'Category', 'Owner'],
          },
        },
        {
          id: uid('action-bar'),
          type: 'action-bar',
          props: {
            actions: [
              { label: `Create new ${subject}`, variant: 'primary' },
              { label: 'Export', variant: 'secondary' },
            ],
          },
        },
      ],
    },
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'sm',
      components: [
        {
          id: uid('table'),
          type: 'table',
          props: {
            columns,
            rows: generateTableRows(subject, columns),
            sortable: true,
            selectable: true,
          },
          accessibility: { label: `${cap(subject)} list` },
        },
        {
          id: uid('pagination'),
          type: 'pagination',
          props: {
            currentPage: 1,
            totalPages: 12,
            totalItems: 234,
            pageSize: 20,
          },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: `${cap(subject)} list`,
    description: `Browse, search, and manage all ${subject} records`,
    pageType: 'list',
    sections,
    primaryAction: { label: `Create new ${subject}` },
    secondaryAction: { label: 'Export all' },
  };
}

// ----- Detail page -----

export function createDetailPage(
  subject: string,
  fields: string[],
): PageModel {
  const pageId = uid('page-detail');

  const fieldComponents: ComponentModel[] = fields.map((field) => ({
    id: uid('field'),
    type: 'key-value',
    props: {
      label: field,
      value: generateFieldValue(field, subject),
    },
  }));

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'flex-between',
      spacing: 'sm',
      components: [
        {
          id: uid('breadcrumb'),
          type: 'breadcrumb',
          props: {
            items: [
              { label: `${cap(subject)} list`, navigateTo: 'back' },
              { label: `${cap(subject)} detail` },
            ],
          },
        },
        {
          id: uid('status'),
          type: 'status-label',
          props: { status: 'Active', variant: 'success' },
        },
      ],
    },
    {
      id: uid('section'),
      title: `${cap(subject)} information`,
      layout: 'grid',
      spacing: 'md',
      components: fieldComponents,
    },
    {
      id: uid('section'),
      title: 'Activity history',
      layout: 'stack',
      spacing: 'sm',
      components: [
        {
          id: uid('timeline'),
          type: 'timeline',
          props: {
            items: [
              { time: '2 hours ago', event: `${cap(subject)} updated by Sarah Chen`, icon: 'edit' },
              { time: '1 day ago', event: `${cap(subject)} reviewed by James Miller`, icon: 'check' },
              { time: '3 days ago', event: `${cap(subject)} created by Priya Sharma`, icon: 'add' },
            ],
          },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: `${cap(subject)} detail`,
    description: `Detailed view of the selected ${subject} record`,
    pageType: 'detail',
    sections,
    primaryAction: { label: `Edit ${subject}` },
    secondaryAction: { label: 'Back to list' },
  };
}

// ----- Form page -----

export function createFormPage(
  subject: string,
  fields: string[],
): PageModel {
  const pageId = uid('page-form');

  const formFields: ComponentModel[] = fields.map((field) => ({
    id: uid('input'),
    type: 'form-field',
    props: {
      label: field,
      type: inferFieldType(field),
      required: isLikelyRequired(field),
      placeholder: `Enter ${field.toLowerCase()}`,
    },
    accessibility: { label: field },
  }));

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'md',
      components: [
        {
          id: uid('heading'),
          type: 'heading',
          props: { text: `Create new ${subject}`, level: 2 },
        },
        {
          id: uid('desc'),
          type: 'paragraph',
          props: {
            text: `Fill in the details below to create a new ${subject} record. Required fields are marked with an asterisk.`,
            variant: 'body-1',
          },
        },
      ],
    },
    {
      id: uid('section'),
      title: `${cap(subject)} details`,
      layout: 'grid',
      spacing: 'md',
      components: formFields,
    },
  ];

  return {
    id: pageId,
    title: `Create ${subject}`,
    description: `Form for creating a new ${subject}`,
    pageType: 'form',
    sections,
    primaryAction: { label: 'Submit' },
    secondaryAction: { label: 'Cancel' },
  };
}

// ----- Confirmation page -----

export function createConfirmationPage(action: string): PageModel {
  const pageId = uid('page-confirm');

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'md',
      components: [
        {
          id: uid('heading'),
          type: 'heading',
          props: { text: `Confirm: ${action}`, level: 2 },
        },
        {
          id: uid('alert'),
          type: 'alert',
          props: {
            variant: 'info',
            title: 'Please confirm',
            message: `You are about to ${action.toLowerCase()}. Please review the details below before proceeding.`,
          },
          accessibility: { role: 'alert', label: 'Confirmation required' },
        },
        {
          id: uid('desc'),
          type: 'paragraph',
          props: {
            text: 'This action may take a few moments to complete. You will be notified once it is finished.',
            variant: 'body-1',
          },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: `Confirm ${action.toLowerCase()}`,
    description: 'Review and confirm the action before proceeding',
    pageType: 'confirmation',
    sections,
    primaryAction: { label: 'Confirm and proceed' },
    secondaryAction: { label: 'Cancel' },
  };
}

// ----- Progress page -----

export function createProgressPage(
  action: string,
  steps: string[],
): PageModel {
  const pageId = uid('page-progress');

  const stepProps = steps.map((step, i) => ({
    label: step,
    status: i === 0 ? 'complete' : i === 1 ? 'active' : 'pending',
  }));

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'lg',
      components: [
        {
          id: uid('heading'),
          type: 'heading',
          props: { text: action, level: 2 },
        },
        {
          id: uid('stepper'),
          type: 'progress-stepper',
          props: { steps: stepProps },
          accessibility: { role: 'progressbar', label: `${action} progress` },
        },
        {
          id: uid('desc'),
          type: 'paragraph',
          props: {
            text: 'This process is running. Please do not close this window.',
            variant: 'body-1',
          },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: action,
    description: `Progress of the ${action.toLowerCase()} operation`,
    pageType: 'progress',
    sections,
    primaryAction: { label: 'View results' },
  };
}

// ----- Success page -----

export function createSuccessPage(
  action: string,
  nextAction?: string,
): PageModel {
  const pageId = uid('page-success');

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'md',
      components: [
        {
          id: uid('alert'),
          type: 'alert',
          props: {
            variant: 'success',
            title: `${cap(action)} completed successfully`,
            message: `The operation has been completed. All changes have been saved.`,
          },
          accessibility: { role: 'status', label: 'Success notification' },
        },
        {
          id: uid('desc'),
          type: 'paragraph',
          props: {
            text: nextAction
              ? `You can now proceed to ${nextAction.toLowerCase()}, or return to the main view.`
              : 'You can close this page or return to the main view.',
            variant: 'body-1',
          },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: `${cap(action)} complete`,
    description: 'Operation completed successfully',
    pageType: 'success',
    sections,
    primaryAction: nextAction
      ? { label: nextAction }
      : { label: 'Return to start' },
    secondaryAction: { label: 'Close' },
  };
}

// ----- Error page -----

export function createErrorPage(issue: string): PageModel {
  const pageId = uid('page-error');

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'md',
      components: [
        {
          id: uid('alert'),
          type: 'alert',
          props: {
            variant: 'error',
            title: 'Something went wrong',
            message: issue,
          },
          accessibility: { role: 'alert', label: 'Error notification' },
        },
        {
          id: uid('heading'),
          type: 'heading',
          props: { text: 'What you can do', level: 3 },
        },
        {
          id: uid('list'),
          type: 'list',
          props: {
            ordered: false,
            items: [
              'Try the operation again',
              'Check your network connection',
              'Contact the support team if the issue persists',
            ],
          },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: 'Error',
    description: 'An error occurred during the operation',
    pageType: 'error',
    sections,
    primaryAction: { label: 'Try again' },
    secondaryAction: { label: 'Contact support' },
  };
}

// ----- Settings page -----

export function createSettingsPage(categories: string[]): PageModel {
  const pageId = uid('page-settings');

  const categoryComponents: ComponentModel[] = categories.map((category) => ({
    id: uid('card'),
    type: 'card',
    props: {
      title: category,
      description: `Configure your ${category.toLowerCase()} preferences`,
      icon: 'settings',
      clickable: true,
    },
  }));

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'md',
      components: [
        {
          id: uid('heading'),
          type: 'heading',
          props: { text: 'Settings', level: 2 },
        },
        {
          id: uid('desc'),
          type: 'paragraph',
          props: {
            text: 'Manage your preferences and configuration options.',
            variant: 'body-1',
          },
        },
      ],
    },
    {
      id: uid('section'),
      layout: 'grid-auto',
      spacing: 'md',
      components: categoryComponents,
    },
  ];

  return {
    id: pageId,
    title: 'Settings',
    description: 'Configure your preferences and options',
    pageType: 'settings',
    sections,
    secondaryAction: { label: 'Back' },
  };
}

// ----- Wizard step page -----

export function createWizardStepPage(
  stepNumber: number,
  totalSteps: number,
  title: string,
  fields: string[],
): PageModel {
  const pageId = uid('page-wizard');

  const stepIndicator: ComponentModel = {
    id: uid('step-indicator'),
    type: 'step-indicator',
    props: {
      currentStep: stepNumber,
      totalSteps,
      labels: Array.from({ length: totalSteps }, (_, i) => `Step ${i + 1}`),
    },
    accessibility: { label: `Step ${stepNumber} of ${totalSteps}` },
  };

  const formFields: ComponentModel[] = fields.map((field) => ({
    id: uid('input'),
    type: 'form-field',
    props: {
      label: field,
      type: inferFieldType(field),
      required: true,
      placeholder: `Enter ${field.toLowerCase()}`,
    },
    accessibility: { label: field },
  }));

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'sm',
      components: [stepIndicator],
    },
    {
      id: uid('section'),
      title,
      layout: 'stack',
      spacing: 'md',
      components: formFields,
    },
  ];

  const isLastStep = stepNumber === totalSteps;

  return {
    id: pageId,
    title: `Step ${stepNumber}: ${title}`,
    description: `Step ${stepNumber} of ${totalSteps}`,
    pageType: 'wizard-step',
    sections,
    primaryAction: {
      label: isLastStep ? 'Complete' : 'Next',
    },
    secondaryAction:
      stepNumber > 1 ? { label: 'Previous' } : undefined,
  };
}

// ----- Search results page -----

export function createSearchResultsPage(subject: string): PageModel {
  const pageId = uid('page-search');

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'md',
      components: [
        {
          id: uid('search'),
          type: 'search',
          props: {
            placeholder: `Search ${subject}...`,
            showFilters: true,
          },
          accessibility: { label: `Search ${subject}` },
        },
        {
          id: uid('filter'),
          type: 'chip-group',
          props: {
            chips: ['All', 'Recent', 'Popular', 'Category A', 'Category B'],
            selected: 'All',
          },
        },
      ],
    },
    {
      id: uid('section'),
      title: 'Results',
      layout: 'stack',
      spacing: 'sm',
      components: [
        {
          id: uid('result-1'),
          type: 'card',
          props: {
            title: `${cap(subject)} getting started guide`,
            description: `A comprehensive guide covering the basics of ${subject}. Last updated 3 days ago.`,
            tags: ['Guide', 'Popular'],
            clickable: true,
          },
        },
        {
          id: uid('result-2'),
          type: 'card',
          props: {
            title: `${cap(subject)} troubleshooting FAQ`,
            description: `Common questions and solutions for ${subject}-related issues. 24 articles.`,
            tags: ['FAQ', 'Support'],
            clickable: true,
          },
        },
        {
          id: uid('result-3'),
          type: 'card',
          props: {
            title: `${cap(subject)} best practices`,
            description: `Recommended approaches and patterns for working with ${subject}. Updated weekly.`,
            tags: ['Best practice'],
            clickable: true,
          },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: `Search ${subject}`,
    description: `Find ${subject} articles, guides, and resources`,
    pageType: 'list',
    sections,
  };
}

// ----- Inbox page -----

export function createInboxPage(subject: string): PageModel {
  const pageId = uid('page-inbox');

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'flex-between',
      spacing: 'sm',
      components: [
        {
          id: uid('heading'),
          type: 'heading',
          props: { text: `${cap(subject)} inbox`, level: 2 },
        },
        {
          id: uid('action-bar'),
          type: 'action-bar',
          props: {
            actions: [
              { label: 'Mark all as read', variant: 'secondary' },
              { label: 'Compose', variant: 'primary' },
            ],
          },
        },
      ],
    },
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'sm',
      components: [
        {
          id: uid('nav-tabs'),
          type: 'nav-tabs',
          props: {
            tabs: [
              { label: 'All', count: 12 },
              { label: 'Unread', count: 4 },
              { label: 'Flagged', count: 2 },
              { label: 'Archive', count: 45 },
            ],
            active: 'All',
          },
        },
        {
          id: uid('msg-1'),
          type: 'card',
          props: {
            title: 'Access request approved',
            description: 'Your request for Bloomberg Terminal access has been approved by IT Security.',
            timestamp: '10 minutes ago',
            unread: true,
            icon: 'check-circle',
          },
        },
        {
          id: uid('msg-2'),
          type: 'card',
          props: {
            title: 'System maintenance scheduled',
            description: 'The trading platform will undergo maintenance this Saturday from 02:00 to 06:00 GMT.',
            timestamp: '1 hour ago',
            unread: true,
            icon: 'info',
          },
        },
        {
          id: uid('msg-3'),
          type: 'card',
          props: {
            title: 'Quarterly review reminder',
            description: 'Please complete your quarterly performance review by end of this week.',
            timestamp: '3 hours ago',
            unread: false,
            icon: 'calendar',
          },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: `${cap(subject)} inbox`,
    description: `View and manage your ${subject} messages and notifications`,
    pageType: 'list',
    sections,
  };
}

// ----- Approval queue page -----

export function createApprovalQueuePage(subject: string): PageModel {
  const pageId = uid('page-approval-queue');

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'flex-between',
      spacing: 'sm',
      components: [
        {
          id: uid('heading'),
          type: 'heading',
          props: { text: `${cap(subject)} approval queue`, level: 2 },
        },
        {
          id: uid('stat-group'),
          type: 'stat-group',
          props: {
            stats: [
              { label: 'Pending', value: '7', variant: 'warning' },
              { label: 'Approved today', value: '12', variant: 'success' },
              { label: 'Rejected', value: '2', variant: 'error' },
            ],
          },
        },
      ],
    },
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'sm',
      components: [
        {
          id: uid('table'),
          type: 'table',
          props: {
            columns: ['Request', 'Requester', 'Date', 'Priority', 'Status'],
            rows: [
              [`${cap(subject)} access`, 'Sarah Chen', '28 Apr 2026', 'High', 'Pending'],
              [`${cap(subject)} modification`, 'James Miller', '27 Apr 2026', 'Medium', 'Pending'],
              [`New ${subject} setup`, 'Priya Sharma', '27 Apr 2026', 'Low', 'Pending'],
              [`${cap(subject)} removal`, 'David Okonkwo', '26 Apr 2026', 'Medium', 'Pending'],
            ],
            sortable: true,
            selectable: true,
          },
          accessibility: { label: `${cap(subject)} approval queue` },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: `${cap(subject)} approvals`,
    description: `Review and action pending ${subject} approval requests`,
    pageType: 'list',
    sections,
    primaryAction: { label: 'Approve selected' },
    secondaryAction: { label: 'Reject selected' },
  };
}

// ----- Approval detail page -----

export function createApprovalDetailPage(subject: string): PageModel {
  const pageId = uid('page-approval-detail');

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'flex-between',
      spacing: 'sm',
      components: [
        {
          id: uid('breadcrumb'),
          type: 'breadcrumb',
          props: {
            items: [
              { label: 'Approval queue', navigateTo: 'back' },
              { label: 'Request detail' },
            ],
          },
        },
        {
          id: uid('status'),
          type: 'status-label',
          props: { status: 'Pending approval', variant: 'warning' },
        },
      ],
    },
    {
      id: uid('section'),
      title: 'Request details',
      layout: 'grid',
      spacing: 'md',
      components: [
        { id: uid('kv'), type: 'key-value', props: { label: 'Request type', value: `${cap(subject)} access` } },
        { id: uid('kv'), type: 'key-value', props: { label: 'Requester', value: 'Sarah Chen' } },
        { id: uid('kv'), type: 'key-value', props: { label: 'Department', value: 'Wealth Management' } },
        { id: uid('kv'), type: 'key-value', props: { label: 'Submitted', value: '28 April 2026' } },
        { id: uid('kv'), type: 'key-value', props: { label: 'Priority', value: 'High' } },
        { id: uid('kv'), type: 'key-value', props: { label: 'Reference', value: 'REQ-2026-04-0392' } },
      ],
    },
    {
      id: uid('section'),
      title: 'Justification',
      layout: 'stack',
      spacing: 'sm',
      components: [
        {
          id: uid('desc'),
          type: 'paragraph',
          props: {
            text: `Access to ${subject} is required for the upcoming quarterly audit. The team needs to review historical records and generate compliance reports before the 15 May deadline.`,
            variant: 'body-1',
          },
        },
      ],
    },
    {
      id: uid('section'),
      title: 'Decision',
      layout: 'stack',
      spacing: 'md',
      components: [
        {
          id: uid('comments'),
          type: 'form-field',
          props: {
            label: 'Comments (optional)',
            type: 'textarea',
            placeholder: 'Add any comments for the requester...',
          },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: `${cap(subject)} request detail`,
    description: `Review details and take action on this ${subject} request`,
    pageType: 'detail',
    sections,
    primaryAction: { label: 'Approve' },
    secondaryAction: { label: 'Reject' },
  };
}

// ----- Onboarding welcome page -----

export function createOnboardingWelcomePage(subject: string): PageModel {
  const pageId = uid('page-welcome');

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'lg',
      components: [
        {
          id: uid('heading'),
          type: 'heading',
          props: { text: `Welcome to ${cap(subject)}`, level: 1 },
        },
        {
          id: uid('desc'),
          type: 'paragraph',
          props: {
            text: `We are pleased to have you on board. This guided setup will help you get started with ${subject}. It should take about 5 minutes to complete.`,
            variant: 'body-1',
          },
        },
      ],
    },
    {
      id: uid('section'),
      title: 'What to expect',
      layout: 'grid-auto',
      spacing: 'md',
      components: [
        {
          id: uid('card'),
          type: 'card',
          props: {
            title: 'Personal details',
            description: 'Confirm your name, department, and contact information',
            icon: 'user',
          },
        },
        {
          id: uid('card'),
          type: 'card',
          props: {
            title: 'Team setup',
            description: 'Join your team and meet your colleagues',
            icon: 'people',
          },
        },
        {
          id: uid('card'),
          type: 'card',
          props: {
            title: 'Tools and access',
            description: 'Get access to the systems and tools you need',
            icon: 'key',
          },
        },
        {
          id: uid('card'),
          type: 'card',
          props: {
            title: 'Preferences',
            description: 'Set up your workspace preferences and notifications',
            icon: 'settings',
          },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: `Welcome to ${cap(subject)}`,
    description: `Getting started with ${subject} at UBS`,
    pageType: 'hero',
    sections,
    primaryAction: { label: 'Get started' },
    secondaryAction: { label: 'Skip for now' },
  };
}

// ----- Timeline page -----

export function createTimelinePage(subject: string): PageModel {
  const pageId = uid('page-timeline');

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'md',
      components: [
        {
          id: uid('heading'),
          type: 'heading',
          props: { text: `${cap(subject)} timeline`, level: 2 },
        },
        {
          id: uid('timeline'),
          type: 'timeline',
          props: {
            items: [
              { time: '10 minutes ago', event: `${cap(subject)} status updated`, icon: 'edit', user: 'Sarah Chen' },
              { time: '1 hour ago', event: `${cap(subject)} review completed`, icon: 'check', user: 'James Miller' },
              { time: '3 hours ago', event: `${cap(subject)} assigned to team`, icon: 'people', user: 'System' },
              { time: '1 day ago', event: `${cap(subject)} created`, icon: 'add', user: 'Priya Sharma' },
              { time: '2 days ago', event: `${cap(subject)} request submitted`, icon: 'send', user: 'David Okonkwo' },
            ],
          },
          accessibility: { label: `${cap(subject)} activity timeline` },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: `${cap(subject)} timeline`,
    description: `Chronological history of ${subject} events`,
    pageType: 'detail',
    sections,
    secondaryAction: { label: 'Back' },
  };
}

// ----- Comparison page -----

export function createComparisonPage(
  subject: string,
  items: string[],
): PageModel {
  const pageId = uid('page-comparison');

  const headerRow = ['Feature', ...items];
  const features = ['Price', 'Availability', 'Rating', 'Support level', 'Integration'];
  const rows = features.map((feature) => [
    feature,
    ...items.map(() => generateComparisonValue(feature)),
  ]);

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'md',
      components: [
        {
          id: uid('heading'),
          type: 'heading',
          props: { text: `Compare ${subject}`, level: 2 },
        },
        {
          id: uid('table'),
          type: 'table',
          props: {
            columns: headerRow,
            rows,
            highlightBest: true,
          },
          accessibility: { label: `${cap(subject)} comparison` },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: `${cap(subject)} comparison`,
    description: `Side-by-side comparison of ${subject} options`,
    pageType: 'standard',
    sections,
    primaryAction: { label: 'Select preferred option' },
    secondaryAction: { label: 'Back' },
  };
}

// ----- File management page -----

export function createFileManagementPage(subject: string): PageModel {
  const pageId = uid('page-files');

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'flex-between',
      spacing: 'sm',
      components: [
        {
          id: uid('breadcrumb'),
          type: 'breadcrumb',
          props: {
            items: [
              { label: 'Home' },
              { label: cap(subject) },
              { label: 'Documents' },
            ],
          },
        },
        {
          id: uid('action-bar'),
          type: 'action-bar',
          props: {
            actions: [
              { label: 'Upload file', variant: 'primary', icon: 'upload' },
              { label: 'New folder', variant: 'secondary', icon: 'folder' },
            ],
          },
        },
      ],
    },
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'sm',
      components: [
        {
          id: uid('table'),
          type: 'table',
          props: {
            columns: ['Name', 'Type', 'Size', 'Modified', 'Owner'],
            rows: [
              ['Q1 Report.pdf', 'PDF', '2.4 MB', '25 Apr 2026', 'Sarah Chen'],
              ['Budget Overview.xlsx', 'Spreadsheet', '1.1 MB', '24 Apr 2026', 'James Miller'],
              ['Meeting Notes', 'Folder', '—', '23 Apr 2026', 'Priya Sharma'],
              ['Compliance Checklist.docx', 'Document', '340 KB', '22 Apr 2026', 'David Okonkwo'],
              ['Architecture Diagram.png', 'Image', '5.2 MB', '20 Apr 2026', 'Elena Rossi'],
            ],
            sortable: true,
            selectable: true,
          },
          accessibility: { label: `${cap(subject)} files` },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: `${cap(subject)} files`,
    description: `Browse and manage ${subject} documents and files`,
    pageType: 'list',
    sections,
    primaryAction: { label: 'Upload file' },
  };
}

// ----- Activity feed page -----

export function createActivityFeedPage(subject: string): PageModel {
  const pageId = uid('page-activity');

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'flex-between',
      spacing: 'sm',
      components: [
        {
          id: uid('heading'),
          type: 'heading',
          props: { text: `${cap(subject)} activity`, level: 2 },
        },
        {
          id: uid('filter'),
          type: 'chip-group',
          props: {
            chips: ['All activity', 'My actions', 'System events', 'Comments'],
            selected: 'All activity',
          },
        },
      ],
    },
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'sm',
      components: [
        {
          id: uid('activity-1'),
          type: 'activity-item',
          props: {
            user: 'Sarah Chen',
            action: `updated ${subject} record`,
            target: 'REQ-2026-0392',
            timestamp: '10 minutes ago',
            icon: 'edit',
          },
        },
        {
          id: uid('activity-2'),
          type: 'activity-item',
          props: {
            user: 'James Miller',
            action: `approved ${subject} request`,
            target: 'REQ-2026-0391',
            timestamp: '45 minutes ago',
            icon: 'check',
          },
        },
        {
          id: uid('activity-3'),
          type: 'activity-item',
          props: {
            user: 'System',
            action: `auto-closed ${subject} ticket`,
            target: 'INC-2026-1204',
            timestamp: '2 hours ago',
            icon: 'auto',
          },
        },
        {
          id: uid('activity-4'),
          type: 'activity-item',
          props: {
            user: 'Priya Sharma',
            action: `commented on ${subject}`,
            target: 'REQ-2026-0389',
            timestamp: '3 hours ago',
            icon: 'comment',
          },
        },
        {
          id: uid('activity-5'),
          type: 'activity-item',
          props: {
            user: 'David Okonkwo',
            action: `created new ${subject}`,
            target: 'REQ-2026-0393',
            timestamp: '5 hours ago',
            icon: 'add',
          },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: `${cap(subject)} activity feed`,
    description: `Recent activity and events related to ${subject}`,
    pageType: 'list',
    sections,
  };
}

// ----- Split view page -----

export function createSplitViewPage(
  listSubject: string,
  detailSubject: string,
): PageModel {
  const pageId = uid('page-split');

  const sections: SectionModel[] = [
    {
      id: uid('section'),
      layout: 'split-equal',
      spacing: 'md',
      components: [
        {
          id: uid('list-panel'),
          type: 'split-view',
          props: {
            leftPanel: {
              title: `${cap(listSubject)} list`,
              items: [
                { label: 'Sarah Chen', subtitle: 'Wealth Management', selected: true },
                { label: 'James Miller', subtitle: 'Investment Banking' },
                { label: 'Priya Sharma', subtitle: 'Technology' },
                { label: 'David Okonkwo', subtitle: 'Risk Management' },
              ],
            },
            rightPanel: {
              title: `${cap(detailSubject)} detail`,
              fields: [
                { label: 'Name', value: 'Sarah Chen' },
                { label: 'Department', value: 'Wealth Management' },
                { label: 'Location', value: 'London' },
                { label: 'Status', value: 'Active' },
              ],
            },
          },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: `${cap(listSubject)} overview`,
    description: `Browse ${listSubject} with inline ${detailSubject} details`,
    pageType: 'split',
    sections,
    primaryAction: { label: `Edit ${detailSubject}` },
    secondaryAction: { label: 'Back' },
  };
}

// ----- Helper: generate realistic metric values -----

function generateMetricValue(metric: string): string {
  const lower = metric.toLowerCase();
  if (lower.includes('uptime') || lower.includes('availability'))
    return '99.7%';
  if (lower.includes('response') || lower.includes('latency'))
    return '142ms';
  if (lower.includes('count') || lower.includes('total'))
    return '1,247';
  if (lower.includes('active') || lower.includes('online'))
    return '342';
  if (lower.includes('error') || lower.includes('failure'))
    return '3';
  if (lower.includes('score') || lower.includes('satisfaction'))
    return '8.4/10';
  if (lower.includes('time') || lower.includes('duration'))
    return '4m 32s';
  if (lower.includes('rate') || lower.includes('percentage'))
    return '94.2%';
  return '527';
}

// ----- Helper: generate table rows -----

function generateTableRows(subject: string, columns: string[]): string[][] {
  const names = ['Sarah Chen', 'James Miller', 'Priya Sharma', 'David Okonkwo', 'Elena Rossi'];
  const statuses = ['Active', 'Pending', 'Complete', 'In review', 'Draft'];
  const dates = ['29 Apr 2026', '28 Apr 2026', '27 Apr 2026', '26 Apr 2026', '25 Apr 2026'];

  return names.map((name, i) => {
    return columns.map((col) => {
      const lower = col.toLowerCase();
      if (lower.includes('name') || lower.includes('owner') || lower.includes('user') || lower.includes('assigned'))
        return name;
      if (lower.includes('status'))
        return statuses[i];
      if (lower.includes('date') || lower.includes('created') || lower.includes('updated'))
        return dates[i];
      if (lower.includes('id') || lower.includes('reference'))
        return `${subject.toUpperCase().slice(0, 3)}-${2026}-${String(i + 1).padStart(4, '0')}`;
      if (lower.includes('priority'))
        return ['High', 'Medium', 'Low', 'Medium', 'High'][i];
      if (lower.includes('type') || lower.includes('category'))
        return `${cap(subject)} type ${String.fromCharCode(65 + i)}`;
      if (lower.includes('department'))
        return ['Wealth Management', 'Investment Banking', 'Technology', 'Risk', 'Operations'][i];
      return `${cap(subject)} ${i + 1}`;
    });
  });
}

// ----- Helper: generate field values -----

function generateFieldValue(field: string, subject: string): string {
  const lower = field.toLowerCase();
  if (lower.includes('name')) return 'Sarah Chen';
  if (lower.includes('email')) return 'sarah.chen@ubs.com';
  if (lower.includes('department') || lower.includes('team')) return 'Wealth Management';
  if (lower.includes('status')) return 'Active';
  if (lower.includes('date') || lower.includes('created')) return '28 April 2026';
  if (lower.includes('id') || lower.includes('reference'))
    return `${subject.toUpperCase().slice(0, 3)}-2026-0001`;
  if (lower.includes('location') || lower.includes('office')) return 'London, 5 Broadgate';
  if (lower.includes('phone') || lower.includes('tel')) return '+44 20 7568 1234';
  if (lower.includes('role') || lower.includes('title')) return 'Senior Analyst';
  if (lower.includes('description')) return `Details for this ${subject} record`;
  if (lower.includes('priority')) return 'Medium';
  return `Sample ${field.toLowerCase()} value`;
}

// ----- Helper: infer form field type -----

function inferFieldType(field: string): string {
  const lower = field.toLowerCase();
  if (lower.includes('email')) return 'email';
  if (lower.includes('password')) return 'password';
  if (lower.includes('phone') || lower.includes('tel')) return 'tel';
  if (lower.includes('date')) return 'date';
  if (lower.includes('description') || lower.includes('comment') || lower.includes('note'))
    return 'textarea';
  if (lower.includes('number') || lower.includes('amount') || lower.includes('quantity'))
    return 'number';
  if (lower.includes('file') || lower.includes('attachment') || lower.includes('upload'))
    return 'file';
  if (lower.includes('select') || lower.includes('type') || lower.includes('category'))
    return 'select';
  if (lower.includes('toggle') || lower.includes('enable') || lower.includes('active'))
    return 'toggle';
  return 'text';
}

// ----- Helper: likely required field -----

function isLikelyRequired(field: string): boolean {
  const lower = field.toLowerCase();
  const requiredIndicators = ['name', 'email', 'title', 'type', 'category', 'date'];
  return requiredIndicators.some((indicator) => lower.includes(indicator));
}

// ----- Helper: comparison value -----

function generateComparisonValue(feature: string): string {
  const lower = feature.toLowerCase();
  if (lower.includes('price')) return ['£500/mo', '£750/mo', '£1,200/mo'][Math.floor(Math.random() * 3)];
  if (lower.includes('availability')) return ['99.9%', '99.5%', '99.95%'][Math.floor(Math.random() * 3)];
  if (lower.includes('rating')) return ['4.5/5', '4.2/5', '4.8/5'][Math.floor(Math.random() * 3)];
  if (lower.includes('support')) return ['24/7', 'Business hours', 'Premium'][Math.floor(Math.random() * 3)];
  if (lower.includes('integration')) return ['Full', 'Partial', 'API only'][Math.floor(Math.random() * 3)];
  return 'Yes';
}

// =====================================================
// Landing page with header, hero, about section, footer
// =====================================================

export function createLandingPage(subject: string): PageModel {
  const pageId = uid('page-landing');

  const sections: SectionModel[] = [
    // Header
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'sm',
      components: [
        {
          id: uid('header'),
          type: 'header',
          props: {
            title: cap(subject),
            navItems: [
              { label: 'Home', href: '#', active: true },
              { label: 'Services', href: '#services' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ],
            sticky: true,
          },
        },
      ],
    },
    // Hero
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'lg',
      components: [
        {
          id: uid('hero'),
          type: 'hero',
          props: {
            title: `Welcome to ${cap(subject)}`,
            subtitle: `Discover how ${subject} can transform your experience with world-class financial services and innovative solutions.`,
            ctaLabel: 'Get started',
            secondaryCtaLabel: 'Learn more',
          },
        },
      ],
    },
    // About section
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'md',
      components: [
        {
          id: uid('about'),
          type: 'about-section',
          props: {
            title: `About ${cap(subject)}`,
            description: `We bring together expertise, innovation, and a client-first approach to deliver exceptional ${subject} solutions.`,
            blocks: [
              {
                title: 'Expertise',
                description: `Our team of specialists brings decades of ${subject} experience to every engagement.`,
                ctaLabel: 'Meet the team',
              },
              {
                title: 'Innovation',
                description: `Cutting-edge technology and research drive our ${subject} capabilities forward.`,
                ctaLabel: 'Our approach',
              },
              {
                title: 'Client focus',
                description: 'Every solution is tailored to your unique needs and objectives.',
                ctaLabel: 'Case studies',
              },
            ],
          },
        },
      ],
    },
    // Footer
    {
      id: uid('section'),
      layout: 'stack',
      spacing: 'sm',
      components: [
        {
          id: uid('footer'),
          type: 'footer',
          props: {
            columns: [
              {
                title: 'Services',
                links: [
                  { label: 'Wealth Management', href: '/wealth' },
                  { label: 'Investment Banking', href: '/ib' },
                  { label: 'Asset Management', href: '/am' },
                ],
              },
              {
                title: 'Company',
                links: [
                  { label: 'About us', href: '/about' },
                  { label: 'Careers', href: '/careers' },
                  { label: 'Press', href: '/press' },
                ],
              },
              {
                title: 'Support',
                links: [
                  { label: 'Contact us', href: '/contact' },
                  { label: 'FAQ', href: '/faq' },
                  { label: 'Legal', href: '/legal' },
                ],
              },
            ],
            copyright: `© ${new Date().getFullYear()} UBS. All rights reserved.`,
            legal: 'This content is provided for informational purposes only.',
          },
        },
      ],
    },
  ];

  return {
    id: pageId,
    title: `${cap(subject)} — landing page`,
    description: `Landing page for ${subject} with header, hero, about section, and footer`,
    pageType: 'hero',
    sections,
  };
}
