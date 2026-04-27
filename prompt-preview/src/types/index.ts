export type OutputType = 'react' | 'angular' | 'html-css';
export type PageType = 'dashboard' | 'form' | 'card' | 'landing-page' | 'support-journey' | 'data-table' | 'notification';
export type ViewportSize = 'desktop' | 'mobile';

export type ServiceStatus = 'operational' | 'degraded' | 'outage' | 'maintenance';

export interface UiCard {
  title: string;
  status?: ServiceStatus;
  message?: string;
  primaryAction?: string;
  secondaryAction?: string;
  metric?: string;
  metricLabel?: string;
  icon?: string;
}

export interface UiFormField {
  label: string;
  type: 'text' | 'email' | 'select' | 'textarea' | 'checkbox' | 'date';
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

export interface UiTableColumn {
  key: string;
  label: string;
  align?: 'left' | 'centre' | 'right';
}

export interface UiTableRow {
  [key: string]: string | number | boolean;
}

export interface UiNotification {
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  action?: string;
}

export interface UiRecommendation {
  title: string;
  description: string;
  action?: string;
}

export interface UiModel {
  pageType: PageType;
  title: string;
  intro?: string;
  cards?: UiCard[];
  form?: {
    title?: string;
    description?: string;
    fields: UiFormField[];
    submitLabel?: string;
  };
  table?: {
    columns: UiTableColumn[];
    rows: UiTableRow[];
  };
  notifications?: UiNotification[];
  recommendations?: UiRecommendation[];
  supportMessage?: string;
  footerText?: string;
}

export interface GenerationRequest {
  prompt: string;
  outputType: OutputType;
  pageType?: PageType;
}

export interface GenerationResult {
  model: UiModel;
  outputType: OutputType;
  generatedAt: string;
}
