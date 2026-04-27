/**
 * @module Icon
 * @description Icon wrapper component following UBS brand guidelines.
 *
 * **UBS Rules:**
 * - Web app icons: black (#000000) only, pixel-perfect sizes (12/16/24px)
 * - Illustrative icons: allows red (#E60000) accent colour
 * - Icons must be clear and legible at all sizes
 *
 * Accepts SVG children directly or renders a named icon from the registry.
 *
 * @example
 * ```tsx
 * <Icon name="search" size="md" variant="webApp" />
 * <Icon name="wallet" size="lg" variant="illustrative" />
 * <Icon variant="illustrative" size="lg">
 *   <svg viewBox="0 0 24 24">...</svg>
 * </Icon>
 * ```
 */
import { forwardRef, createElement, type ReactNode, type HTMLAttributes, type CSSProperties, type ForwardRefExoticComponent, type SVGAttributes, type RefAttributes } from 'react';
import styles from './Icon.module.css';

// ─── Icon Registry Imports ───────────────────────────────────────────

import {
  // Web App — Navigation
  ChevronDown, ChevronUp, ChevronLeft, ChevronRight,
  ArrowLeft, ArrowRight, ArrowUp, ArrowDown,
  Menu, Close, MoreHorizontal, MoreVertical,
  // Web App — Actions
  Search, Filter, Sort, Download, Upload, Share, Copy, Edit, Trash, Plus, Minus,
  Check, CheckCircle, XCircle,
  // Web App — Content
  Home, User, Users, Settings, Bell, Mail, Calendar, Clock,
  Document, Folder, ImageIcon, Chart, DonutChart, Globe,
  // Web App — Feedback
  Info, Warning, ErrorIcon, Success, Help,
  // Illustrative — Finance
  Wallet, CreditCard, BankNote, Coins, PiggyBank, SafeBox, Growth, Portfolio,
  // Illustrative — Business
  Briefcase, Handshake, Target, Award, Lightbulb, Presentation, Contract, Building,
  // Illustrative — Digital
  Shield, Lock, Key, Fingerprint,
} from '../../icons';

import type { IconSVGProps } from '../../icons/types';

// ─── Icon Registry ───────────────────────────────────────────────────

type IconComponent = ForwardRefExoticComponent<IconSVGProps & RefAttributes<SVGSVGElement>>;

/**
 * Registry mapping icon names to their components.
 * Use lowercase kebab-case names for lookup.
 */
export const icons: Record<string, IconComponent> = {
  // Navigation
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'arrow-up': ArrowUp,
  'arrow-down': ArrowDown,
  menu: Menu,
  close: Close,
  'more-horizontal': MoreHorizontal,
  'more-vertical': MoreVertical,
  // Actions
  search: Search,
  filter: Filter,
  sort: Sort,
  download: Download,
  upload: Upload,
  share: Share,
  copy: Copy,
  edit: Edit,
  trash: Trash,
  plus: Plus,
  minus: Minus,
  check: Check,
  'check-circle': CheckCircle,
  'x-circle': XCircle,
  // Content
  home: Home,
  user: User,
  users: Users,
  settings: Settings,
  bell: Bell,
  mail: Mail,
  calendar: Calendar,
  clock: Clock,
  document: Document,
  folder: Folder,
  image: ImageIcon,
  chart: Chart,
  'donut-chart': DonutChart,
  globe: Globe,
  // Feedback
  info: Info,
  warning: Warning,
  error: ErrorIcon,
  success: Success,
  help: Help,
  // Illustrative — Finance
  wallet: Wallet,
  'credit-card': CreditCard,
  'bank-note': BankNote,
  coins: Coins,
  'piggy-bank': PiggyBank,
  'safe-box': SafeBox,
  growth: Growth,
  portfolio: Portfolio,
  // Illustrative — Business
  briefcase: Briefcase,
  handshake: Handshake,
  target: Target,
  award: Award,
  lightbulb: Lightbulb,
  presentation: Presentation,
  contract: Contract,
  building: Building,
  // Illustrative — Digital
  shield: Shield,
  lock: Lock,
  key: Key,
  fingerprint: Fingerprint,
};

// ─── Types ───────────────────────────────────────────────────────────

/** Icon sizes mapped to pixel values. */
export type IconSize = 'sm' | 'md' | 'lg';

/** Icon variant determines colour rules. */
export type IconVariant = 'illustrative' | 'webApp';

/** Available icon names from the registry. */
export type IconName = keyof typeof icons;

/** Size-to-pixel mapping. */
export const ICON_SIZE_MAP: Record<IconSize, number> = {
  sm: 12,
  md: 16,
  lg: 24,
} as const;

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /** Icon name from the registry (kebab-case). */
  name?: string;
  /** Display size. Defaults to `'md'` (16px). */
  size?: IconSize;
  /**
   * Colour override. For `webApp` variant this is forced to black.
   * For `illustrative` variant, allows custom colour including UBS Red.
   */
  colour?: string;
  /** Accent colour for illustrative icons. Defaults to UBS Red (#E60000). */
  accentColour?: string;
  /** Icon variant. Defaults to `'webApp'`. */
  variant?: IconVariant;
  /** SVG element to render directly (overrides name). */
  children?: ReactNode;
}

/**
 * Icon — wrapper for SVG icons.
 *
 * Enforces UBS brand rules:
 * - Web app icons are always black, pixel-perfect sizes
 * - Illustrative icons may use red accent
 *
 * Renders from registry when `name` is provided, or wraps `children` SVG directly.
 */
export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  (
    {
      name,
      size = 'md',
      colour,
      accentColour,
      variant = 'webApp',
      children,
      className,
      style,
      'aria-label': ariaLabel,
      ...rest
    },
    ref,
  ) => {
    // Enforce black-only for web app icons
    const resolvedColour = variant === 'webApp' ? '#000000' : (colour ?? '#000000');
    const resolvedAccent = variant === 'illustrative' ? (accentColour ?? '#E60000') : undefined;

    const classes = [
      styles.icon,
      styles[size],
      styles[variant],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const customStyle: CSSProperties = {
      ...(resolvedColour && variant === 'illustrative'
        ? { color: resolvedColour }
        : {}),
      ...style,
    };

    const pixelSize = ICON_SIZE_MAP[size];
    const label = ariaLabel || name;

    // Resolve icon from registry
    const RegistryIcon = name ? icons[name] : undefined;
    const iconContent = RegistryIcon
      ? createElement(RegistryIcon, {
          size: pixelSize,
          colour: resolvedColour,
          ...(resolvedAccent ? { accentColour: resolvedAccent } : {}),
        })
      : children;

    return (
      <span
        ref={ref}
        className={classes}
        style={customStyle}
        role={label ? 'img' : 'presentation'}
        aria-label={label}
        aria-hidden={!label}
        data-icon-name={name}
        data-icon-size={pixelSize}
        {...rest}
      >
        {iconContent}
      </span>
    );
  },
);

Icon.displayName = 'Icon';

export default Icon;
