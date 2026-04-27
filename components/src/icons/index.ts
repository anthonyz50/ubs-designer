/**
 * @module icons
 * @description UBS Design System — Icon library barrel exports.
 *
 * 40 web app icons (24x24, black only)
 * 20 illustrative icons (48x48, dual weight with red accent)
 * 10 UBS-style SVG illustrations
 */

// ─── Types & Factory ─────────────────────────────────────────────────

export type { IconSVGProps } from './types';
export { SIZE_MAP, UBS_ICON_COLOURS } from './types';
export { createIcon } from './createIcon';
export type { CreateIconOptions } from './createIcon';

// ─── Web App Icons (40) ──────────────────────────────────────────────

export {
  // Navigation
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Menu,
  Close,
  MoreHorizontal,
  MoreVertical,
  // Actions
  Search,
  Filter,
  Sort,
  Download,
  Upload,
  Share,
  Copy,
  Edit,
  Trash,
  Plus,
  Minus,
  Check,
  CheckCircle,
  XCircle,
  // Content
  Home,
  User,
  Users,
  Settings,
  Bell,
  Mail,
  Calendar,
  Clock,
  Document,
  Folder,
  ImageIcon,
  Chart,
  DonutChart,
  Globe,
  // Feedback
  Info,
  Warning,
  ErrorIcon,
  Success,
  Help,
} from './webapp';

// ─── Illustrative Icons (20) ─────────────────────────────────────────

export {
  // Finance
  Wallet,
  CreditCard,
  BankNote,
  Coins,
  PiggyBank,
  SafeBox,
  Growth,
  Portfolio,
  // Business
  Briefcase,
  Handshake,
  Target,
  Award,
  Lightbulb,
  Presentation,
  Contract,
  Building,
  // Digital
  Shield,
  Lock,
  Key,
  Fingerprint,
} from './illustrative';

// ─── Illustrations (10) ──────────────────────────────────────────────

export {
  WelcomeScene,
  InvestmentGrowth,
  TeamCollaboration,
  SecurityShield,
  GlobalNetwork,
  FinancialPlanning,
  SuccessCelebration,
  DigitalBanking,
  SustainableGrowth,
  CustomerSupport,
} from './illustrations';
