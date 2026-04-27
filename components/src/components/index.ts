/**
 * @module components
 * @description UBS Design System — Component barrel exports.
 */

// ─── Core Components (built by other agents) ─────────────

export { Alert } from './Alert';
export type { AlertProps, AlertVariant } from './Alert';

export { Button } from './Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button';

export { Card } from './Card';
export type { CardProps, CardVariant, CardPadding } from './Card';

export { Grid } from './Grid';
export type { GridProps, GridColumns, GridGap } from './Grid';

export { Impulse } from './Impulse';
export type { ImpulseProps, ImpulseFormat } from './Impulse';

export { Layout } from './Layout';
export type { LayoutProps, LayoutFormat } from './Layout';

export { Logo } from './Logo';
export type { LogoProps, LogoVariant, LogoColour } from './Logo';

export { Typography } from './Typography';
export type { TypographyProps, TypographyVariant, TypographyWeight } from './Typography';

// ─── Advanced / Specialised Components ────────────────────

// Badge
export { Badge } from './Badge/Badge';
export type { BadgeProps, BadgeVariant, BadgeSize } from './Badge/Badge';

// Divider
export { Divider } from './Divider/Divider';
export type { DividerProps, DividerOrientation } from './Divider/Divider';

// TradingIndicator
export { TradingIndicator } from './TradingIndicator/TradingIndicator';
export type {
  TradingIndicatorProps,
  TradingIndicatorSize,
  TradingRegion,
} from './TradingIndicator/TradingIndicator';

// Icon
export { Icon, ICON_SIZE_MAP } from './Icon/Icon';
export type { IconProps, IconSize, IconVariant } from './Icon/Icon';

// MovingFrame
export { MovingFrame } from './MovingFrame/MovingFrame';
export type { MovingFrameProps, MovingFrameVariant } from './MovingFrame/MovingFrame';

// Pattern
export { Pattern } from './Pattern/Pattern';
export type {
  PatternProps,
  PatternComponentVariant,
  PatternColourDirection,
} from './Pattern/Pattern';

// SocialMediaTemplate
export { SocialMediaTemplate } from './SocialMediaTemplate/SocialMediaTemplate';
export type {
  SocialMediaTemplateProps,
  SocialPlatform,
  SocialFormat,
  SocialVariant,
} from './SocialMediaTemplate/SocialMediaTemplate';

// DataViz
export { DataViz } from './DataViz/DataViz';
export type {
  DataVizProps,
  ChartType,
  ColourSequence,
  DataVizRegion,
  ChartDataPoint,
} from './DataViz/DataViz';

// ─── Data Display Components ──────────────────────────────

// Table
export { Table } from './Table';
export type { TableProps, TableColumn, SortDirection, ColumnAlign } from './Table';

// Accordion
export { Accordion } from './Accordion';
export type { AccordionProps, AccordionItem, AccordionVariant } from './Accordion';

// Tag
export { Tag } from './Tag';
export type { TagProps, TagVariant, TagSize } from './Tag';

// Avatar
export { Avatar, AvatarGroup } from './Avatar';
export type { AvatarProps, AvatarGroupProps, AvatarSize, AvatarVariant, AvatarStatus } from './Avatar';

// List
export { List } from './List';
export type { ListProps, ListItem, ListVariant } from './List';

// Chip
export { Chip, ChipGroup } from './Chip';
export type { ChipProps, ChipGroupProps, ChipVariant, ChipSize } from './Chip';

// EmptyState
export { EmptyState } from './EmptyState';
export type { EmptyStateProps, EmptyStateAction } from './EmptyState';

// Stat
export { Stat } from './Stat';
export type { StatProps, StatChange, StatSize, ChangeDirection } from './Stat';

// ─── Form Components ─────────────────────────────────────

// FormField
export { FormField } from './FormField';
export type { FormFieldProps } from './FormField';

// Input
export { Input } from './Input';
export type { InputProps, InputSize, InputType } from './Input';

// Select
export { Select } from './Select';
export type { SelectProps, SelectOption, SelectSize } from './Select';

// Textarea
export { Textarea } from './Textarea';
export type { TextareaProps, TextareaResize } from './Textarea';

// Checkbox
export { Checkbox } from './Checkbox';
export type { CheckboxProps, CheckboxSize } from './Checkbox';

// Radio
export { Radio, RadioGroup } from './Radio';
export type { RadioProps, RadioGroupProps, RadioSize } from './Radio';

// Toggle
export { Toggle } from './Toggle';
export type { ToggleProps, ToggleSize, ToggleLabelPosition } from './Toggle';

// DatePicker
export { DatePicker } from './DatePicker';
export type { DatePickerProps, DateFormat } from './DatePicker';

// ─── Navigation Components ───────────────────────────────

// Navbar
export { Navbar } from './Navbar';
export type { NavbarProps, NavbarItem, NavbarVariant } from './Navbar';

// Tabs
export { Tabs } from './Tabs';
export type { TabsProps, TabItem, TabsVariant } from './Tabs';

// Breadcrumbs
export { Breadcrumbs } from './Breadcrumbs';
export type { BreadcrumbsProps, BreadcrumbItem } from './Breadcrumbs';

// Pagination
export { Pagination } from './Pagination';
export type { PaginationProps, PaginationSize } from './Pagination';

// ─── Feedback Components ──────────────────────────────────

// Toast
export { ToastProvider, useToast } from './Toast';
export type { ToastProps, ToastVariant, ToastAction, ToastProviderProps } from './Toast';

// Modal
export { Modal } from './Modal';
export type { ModalProps, ModalSize } from './Modal';

// Tooltip
export { Tooltip } from './Tooltip';
export type { TooltipProps, TooltipPosition } from './Tooltip';

// Popover
export { Popover } from './Popover';
export type { PopoverProps, PopoverPosition } from './Popover';

// Progress
export { Progress } from './Progress';
export type { ProgressProps, ProgressSize, ProgressColour, ProgressVariant } from './Progress';

// Skeleton
export { Skeleton } from './Skeleton';
export type { SkeletonProps, SkeletonVariant } from './Skeleton';

// ─── Composite Pattern Components ─────────────────────────

// PageHeader
export { PageHeader } from './PageHeader';
export type { PageHeaderProps, PageHeaderVariant, PageHeaderBreadcrumb } from './PageHeader';

// SectionWrapper
export { SectionWrapper } from './SectionWrapper';
export type { SectionWrapperProps, SectionPadding, SectionBackground } from './SectionWrapper';

// ActionBar
export { ActionBar } from './ActionBar';
export type { ActionBarProps, ActionBarAction, ActionBarAlign } from './ActionBar';

// ─── CTA Components ──────────────────────────────────────

// CTA
export { CTA, CTAArrow } from './CTA';
export type { CTAProps, CTAVariant, CTASize, CTAArrowProps } from './CTA';

// LogoTab
export { LogoTab } from './LogoTab';
export type { LogoTabProps, LogoTabPosition, LogoTabVariant } from './LogoTab';
