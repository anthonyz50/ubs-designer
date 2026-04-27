/**
 * @module icons
 * @description UBS Design System — Icon library barrel exports.
 *
 * 40 web app icons (24x24, black only)
 * 20 illustrative icons (48x48, dual weight with red accent)
 * 10 UBS-style SVG illustrations
 */
export type { IconSVGProps } from './types';
export { SIZE_MAP, UBS_ICON_COLOURS } from './types';
export { createIcon } from './createIcon';
export type { CreateIconOptions } from './createIcon';
export { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Menu, Close, MoreHorizontal, MoreVertical, Search, Filter, Sort, Download, Upload, Share, Copy, Edit, Trash, Plus, Minus, Check, CheckCircle, XCircle, Home, User, Users, Settings, Bell, Mail, Calendar, Clock, Document, Folder, ImageIcon, Chart, DonutChart, Globe, Info, Warning, ErrorIcon, Success, Help, } from './webapp';
export { Wallet, CreditCard, BankNote, Coins, PiggyBank, SafeBox, Growth, Portfolio, Briefcase, Handshake, Target, Award, Lightbulb, Presentation, Contract, Building, Shield, Lock, Key, Fingerprint, } from './illustrative';
export { WelcomeScene, InvestmentGrowth, TeamCollaboration, SecurityShield, GlobalNetwork, FinancialPlanning, SuccessCelebration, DigitalBanking, SustainableGrowth, CustomerSupport, } from './illustrations';
