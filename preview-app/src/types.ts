/** Layout builder configuration types */

export type PageType =
  | 'dashboard'
  | 'landing'
  | 'content'
  | 'form'
  | 'table'
  | 'login'
  | 'error'
  | 'settings';

export type ColourDirection = 'gray' | 'bordeaux' | 'bronze';

export type SectionType =
  | 'stats-row'
  | 'chart-grid'
  | 'feature-grid'
  | 'form-fields'
  | 'table'
  | 'content-block'
  | 'card-grid'
  | 'cta-block'
  | 'masthead-navigation';

export type ChartTypeOption = 'donut' | 'bar' | 'line';

export type FormFieldType =
  | 'text'
  | 'email'
  | 'select'
  | 'textarea'
  | 'checkbox'
  | 'radio'
  | 'toggle'
  | 'date';

export type MastheadNavType = 'single' | 'double' | 'multi' | 'mega';

export type TextAlignment = 'left' | 'center' | 'right';
export type CardVariantOption = 'default' | 'pastel1' | 'pastel2';
export type CTAVariantOption = 'button' | 'text';

export interface StatsRowOptions {
  count: number;
  sampleData: boolean;
}

export interface ChartGridOptions {
  chartType: ChartTypeOption;
  count: number;
}

export interface FeatureGridOptions {
  count: number;
  withIcons: boolean;
}

export interface FormFieldsOptions {
  fieldTypes: FormFieldType[];
}

export interface TableOptions {
  columns: number;
  rows: number;
  sortable: boolean;
  selectable: boolean;
}

export interface ContentBlockOptions {
  withIllustration: boolean;
  textAlignment: TextAlignment;
}

export interface CardGridOptions {
  count: number;
  variant: CardVariantOption;
}

export interface CTABlockOptions {
  variant: CTAVariantOption;
  label: string;
}

export interface MastheadNavigationOptions {
  navType: MastheadNavType;
}

export type SectionOptions =
  | StatsRowOptions
  | ChartGridOptions
  | FeatureGridOptions
  | FormFieldsOptions
  | TableOptions
  | ContentBlockOptions
  | CardGridOptions
  | CTABlockOptions
  | MastheadNavigationOptions;

export interface SectionConfig {
  id: string;
  title: string;
  type: SectionType;
  options: SectionOptions;
}

export interface LayoutConfig {
  pageType: PageType;
  title: string;
  subtitle: string;
  colourDirection: ColourDirection;
  darkMode: boolean;
  includeNavbar: boolean;
  includeFooter: boolean;
  includeImpulse: boolean;
  includeMovingFrame: boolean;
  heroImage: boolean;
  sections: SectionConfig[];
}

export type ViewportSize = 320 | 768 | 1024 | 1440;
export type ZoomLevel = 50 | 75 | 100;
