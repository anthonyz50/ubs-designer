/**
 * Realistic financial sample data for the UBS Layout Preview App.
 */

import type { ChartDataPoint } from '@ubs/design-system';

// ─── KPI Stats ────────────────────────────────────────────────────────

export const sampleStats = [
  { label: 'Total AUM', value: '$2.4B', prefix: '$', change: { value: 12.3, direction: 'up' as const } },
  { label: 'Active Clients', value: '1,847', change: { value: 5.2, direction: 'up' as const } },
  { label: 'Net New Money', value: '$186M', prefix: '$', change: { value: 8.7, direction: 'up' as const } },
  { label: 'Revenue', value: '$42.8M', prefix: '$', change: { value: 3.1, direction: 'up' as const } },
  { label: 'Cost/Income', value: '68.4', suffix: '%', change: { value: 1.2, direction: 'down' as const } },
  { label: 'Return on Equity', value: '14.7', suffix: '%', change: { value: 0.8, direction: 'up' as const } },
];

// ─── Chart Data ───────────────────────────────────────────────────────

export const assetAllocationData: ChartDataPoint[] = [
  { label: 'Equities', value: 42 },
  { label: 'Fixed Income', value: 28 },
  { label: 'Real Estate', value: 12 },
  { label: 'Alternatives', value: 10 },
  { label: 'Cash', value: 8 },
];

export const monthlyPerformanceData: ChartDataPoint[] = [
  { label: 'Jan', value: 2.1 },
  { label: 'Feb', value: 1.8 },
  { label: 'Mar', value: -0.4 },
  { label: 'Apr', value: 3.2 },
  { label: 'May', value: 1.5 },
  { label: 'Jun', value: 2.8 },
  { label: 'Jul', value: -0.7 },
  { label: 'Aug', value: 1.9 },
  { label: 'Sep', value: 3.4 },
  { label: 'Oct', value: 2.2 },
  { label: 'Nov', value: 1.6 },
  { label: 'Dec', value: 2.9 },
];

export const regionalBreakdownData: ChartDataPoint[] = [
  { label: 'Switzerland', value: 35 },
  { label: 'EMEA', value: 28 },
  { label: 'Americas', value: 22 },
  { label: 'APAC', value: 15 },
];

export const sectorData: ChartDataPoint[] = [
  { label: 'Technology', value: 24 },
  { label: 'Healthcare', value: 18 },
  { label: 'Financials', value: 16 },
  { label: 'Industrials', value: 14 },
  { label: 'Consumer', value: 12 },
  { label: 'Energy', value: 9 },
  { label: 'Utilities', value: 7 },
];

// ─── Table Data ───────────────────────────────────────────────────────

export const clientPortfolioColumns = [
  { key: 'name', header: 'Client', sortable: true },
  { key: 'portfolio', header: 'Portfolio Value', align: 'right' as const, sortable: true },
  { key: 'allocation', header: 'Primary Allocation', sortable: true },
  { key: 'ytdReturn', header: 'YTD Return', align: 'right' as const, sortable: true },
  { key: 'riskLevel', header: 'Risk Profile' },
  { key: 'lastReview', header: 'Last Review', sortable: true },
];

export const clientPortfolioData = [
  { name: 'Heinrich Müller', portfolio: 'CHF 12,450,000', allocation: 'Growth', ytdReturn: '+8.4%', riskLevel: 'Moderate', lastReview: '12 Mar 2026' },
  { name: 'Sarah Chen', portfolio: 'USD 8,720,000', allocation: 'Balanced', ytdReturn: '+6.2%', riskLevel: 'Conservative', lastReview: '28 Feb 2026' },
  { name: 'James Worthington', portfolio: 'GBP 15,890,000', allocation: 'Income', ytdReturn: '+4.1%', riskLevel: 'Low', lastReview: '05 Mar 2026' },
  { name: 'Yuki Tanaka', portfolio: 'JPY 980,000,000', allocation: 'Aggressive Growth', ytdReturn: '+12.7%', riskLevel: 'High', lastReview: '18 Mar 2026' },
  { name: 'Maria Santos', portfolio: 'EUR 6,340,000', allocation: 'Balanced', ytdReturn: '+5.8%', riskLevel: 'Moderate', lastReview: '22 Feb 2026' },
  { name: 'Alexander Petrov', portfolio: 'CHF 22,100,000', allocation: 'Growth', ytdReturn: '+9.1%', riskLevel: 'Moderate-High', lastReview: '01 Mar 2026' },
  { name: 'Elisabeth König', portfolio: 'EUR 4,560,000', allocation: 'Conservative', ytdReturn: '+3.2%', riskLevel: 'Low', lastReview: '15 Mar 2026' },
  { name: 'Robert Liu', portfolio: 'USD 19,780,000', allocation: 'Multi-Asset', ytdReturn: '+7.6%', riskLevel: 'Moderate', lastReview: '10 Mar 2026' },
];

export const transactionColumns = [
  { key: 'date', header: 'Date', sortable: true },
  { key: 'type', header: 'Type' },
  { key: 'instrument', header: 'Instrument', sortable: true },
  { key: 'quantity', header: 'Quantity', align: 'right' as const },
  { key: 'price', header: 'Price', align: 'right' as const },
  { key: 'value', header: 'Total Value', align: 'right' as const, sortable: true },
  { key: 'status', header: 'Status' },
];

export const transactionData = [
  { date: '28 Mar 2026', type: 'Buy', instrument: 'UBSG.VX', quantity: '5,000', price: 'CHF 28.43', value: 'CHF 142,150', status: 'Settled' },
  { date: '27 Mar 2026', type: 'Sell', instrument: 'NESN.VX', quantity: '2,000', price: 'CHF 98.76', value: 'CHF 197,520', status: 'Settled' },
  { date: '26 Mar 2026', type: 'Buy', instrument: 'ROG.VX', quantity: '800', price: 'CHF 245.30', value: 'CHF 196,240', status: 'Settled' },
  { date: '25 Mar 2026', type: 'Buy', instrument: 'NOVN.VX', quantity: '3,000', price: 'CHF 82.15', value: 'CHF 246,450', status: 'Pending' },
  { date: '24 Mar 2026', type: 'Sell', instrument: 'ABB.VX', quantity: '4,500', price: 'CHF 34.90', value: 'CHF 157,050', status: 'Settled' },
  { date: '23 Mar 2026', type: 'Buy', instrument: 'ZURN.VX', quantity: '1,200', price: 'CHF 485.60', value: 'CHF 582,720', status: 'Settled' },
];

// ─── Feature Descriptions ─────────────────────────────────────────────

export const sampleFeatures = [
  { title: 'Wealth Management', description: 'Personalised strategies for preserving and growing your wealth across generations.' },
  { title: 'Investment Banking', description: 'Expert advisory, capital markets access, and institutional-grade execution.' },
  { title: 'Asset Management', description: 'Diversified investment solutions across traditional and alternative asset classes.' },
  { title: 'Digital Banking', description: 'Secure, seamless digital experience with 24/7 access to your accounts.' },
  { title: 'Sustainable Investing', description: 'ESG-integrated portfolios aligned with your values and long-term goals.' },
  { title: 'Global Research', description: 'Market-leading analysis from 900+ analysts across 30 countries.' },
];

// ─── Form Field Definitions ───────────────────────────────────────────

export const formFieldDefs = {
  text: { label: 'Full Name', placeholder: 'Enter your full name' },
  email: { label: 'Email Address', placeholder: 'name@example.com' },
  select: { label: 'Account Type', placeholder: 'Select account type', options: [
    { value: 'personal', label: 'Personal Account' },
    { value: 'joint', label: 'Joint Account' },
    { value: 'corporate', label: 'Corporate Account' },
    { value: 'trust', label: 'Trust Account' },
  ]},
  textarea: { label: 'Additional Notes', placeholder: 'Any additional information or special requirements...' },
  checkbox: { label: 'I agree to the terms and conditions' },
  radio: { label: 'Communication Preference', options: ['Email', 'Phone', 'Post'] },
  toggle: { label: 'Enable two-factor authentication' },
  date: { label: 'Date of Birth', placeholder: 'DD/MM/YYYY' },
};

// ─── Card Content ─────────────────────────────────────────────────────

export const sampleCards = [
  { title: 'Global Equity Fund', description: 'Diversified exposure to leading companies worldwide. YTD return: +8.3%', cta: 'View Fund' },
  { title: 'Swiss Bond Strategy', description: 'Capital preservation with steady income from high-quality Swiss bonds.', cta: 'View Strategy' },
  { title: 'Real Estate Portfolio', description: 'Premium commercial and residential properties across European markets.', cta: 'Explore' },
  { title: 'Private Equity Access', description: 'Exclusive access to top-tier PE funds with institutional-level terms.', cta: 'Learn More' },
  { title: 'Sustainable World Fund', description: 'ESG-focused investments driving positive environmental impact.', cta: 'Invest Now' },
  { title: 'Multi-Asset Income', description: 'Balanced allocation targeting consistent income across market cycles.', cta: 'View Details' },
];

// ─── Navbar Items ─────────────────────────────────────────────────────

export const navItems = [
  { label: 'Home', href: '/', active: true },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Markets', href: '/markets' },
  { label: 'Research', href: '/research' },
  { label: 'Services', href: '/services' },
];

// ─── Footer Links ─────────────────────────────────────────────────────

export const footerLinks = [
  {
    group: 'Wealth Management',
    items: [
      { label: 'Investment Advisory', href: '/advisory' },
      { label: 'Portfolio Management', href: '/portfolio' },
      { label: 'Financial Planning', href: '/planning' },
      { label: 'Estate Planning', href: '/estate' },
    ],
  },
  {
    group: 'Services',
    items: [
      { label: 'Online Banking', href: '/banking' },
      { label: 'Mobile App', href: '/app' },
      { label: 'Research Portal', href: '/research' },
      { label: 'Client Events', href: '/events' },
    ],
  },
  {
    group: 'About UBS',
    items: [
      { label: 'Our Firm', href: '/about' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];
