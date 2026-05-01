import { useState, type ReactNode } from 'react';
import {
  // Navigation
  FilterGroup,
  PageFooter,
  Header,
  MastheadNavigation,
  Links,
  ProcessNavigation,
  TreeNavigation,
  MenuListItem,

  // Input
  Button,
  MenuButton,
  SplitButton,
  ButtonGroup,
  ButtonSelect,
  DropdownButton,
  ComboBox,
  ContextSelector,
  Dropdown,
  Slider,
  Switch,
  FileUpload,
  TimePicker,
  Checkbox,
  Radio,
  Toggle,
  Input,
  Select,
  Textarea,
  DatePicker,

  // Content Display
  Accordion,
  AgendaSteps,
  Amount,
  Article,
  Avatar,
  BannerBox,
  Card,
  ContentBlock,
  CountryFlag,
  CreditCardDisplay,
  DataViz,
  Divider,
  List,
  Panel,
  SidebarNav,
  Stat,
  Table,
  Tabs,
  Tag,
  Chip,
  Tile,
  Typography,

  // Feedback
  Alert,
  Badge,
  EmptyState,
  FormValidation,
  MessageBox,
  Modal,
  OverlayMessage,
  Popover,
  Progress,
  Skeleton,
  Snackbar,
  Tooltip,
  Timer,

  // Charts
  BarChart,
  DonutChartWidget,
  LineChart,
  PieChart,

  // Layout & Patterns
  Grid,
  PageHeader,
  SectionWrapper,
  ActionBar,
  CTA,
  Logo,
  LogoTab,
  Icon,
  MovingFrame,
  Pattern,
} from '@ubs/design-system';

// ─── Masthead Navigation Demos ────────────────────────────────

function MastheadSingleLevelDemo() {
  const [activeTab, setActiveTab] = useState('overview');
  return (
    <div style={{ width: '100%' }}>
      <Tabs
        tabs={[
          { label: 'Overview', value: 'overview' },
          { label: 'Portfolio', value: 'portfolio' },
          { label: 'Transactions', value: 'transactions' },
          { label: 'Documents', value: 'documents' },
          { label: 'Settings', value: 'settings' },
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
        variant="underline"
      />
    </div>
  );
}

function MastheadDoubleLevelDemo() {
  const [primaryTab, setPrimaryTab] = useState('wealth');
  const [secondaryTab, setSecondaryTab] = useState('overview');

  const secondaryTabsMap: Record<string, { label: string; value: string }[]> = {
    wealth: [
      { label: 'Overview', value: 'overview' },
      { label: 'Accounts', value: 'accounts' },
      { label: 'Performance', value: 'performance' },
      { label: 'Advisory', value: 'advisory' },
      { label: 'Reports', value: 'reports' },
    ],
    ib: [
      { label: 'Overview', value: 'overview' },
      { label: 'Markets', value: 'markets' },
      { label: 'Research', value: 'research' },
      { label: 'Execution', value: 'execution' },
    ],
    am: [
      { label: 'Overview', value: 'overview' },
      { label: 'Funds', value: 'funds' },
      { label: 'Mandates', value: 'mandates' },
      { label: 'Sustainability', value: 'sustainability' },
    ],
    personal: [
      { label: 'Overview', value: 'overview' },
      { label: 'Accounts', value: 'accounts' },
      { label: 'Cards', value: 'cards' },
      { label: 'Loans', value: 'loans' },
    ],
  };

  const handlePrimaryChange = (value: string) => {
    setPrimaryTab(value);
    setSecondaryTab('overview');
  };

  return (
    <div style={{ width: '100%' }}>
      <Tabs
        tabs={[
          { label: 'Wealth Management', value: 'wealth' },
          { label: 'Investment Bank', value: 'ib' },
          { label: 'Asset Management', value: 'am' },
          { label: 'Personal Banking', value: 'personal' },
        ]}
        activeTab={primaryTab}
        onChange={handlePrimaryChange}
        variant="underline"
      />
      <Tabs
        tabs={secondaryTabsMap[primaryTab] || secondaryTabsMap.wealth}
        activeTab={secondaryTab}
        onChange={setSecondaryTab}
        variant="contained"
      />
    </div>
  );
}

type RendererFn = (variant: string) => ReactNode;

export const componentRenderers: Record<string, RendererFn> = {
  // ─── Navigation ─────────────────────────────

  FilterGroup: () => (
    <FilterGroup
      filters={[
        { key: 'region', label: 'Region', options: [{ value: 'emea', label: 'EMEA' }, { value: 'apac', label: 'APAC' }, { value: 'americas', label: 'Americas' }] },
        { key: 'status', label: 'Status', options: [{ value: 'active', label: 'Active' }, { value: 'pending', label: 'Pending' }] },
      ]}
    />
  ),

  PageFooter: (variant) => (
    <div style={{ width: '100%' }}>
      <PageFooter
        variant={variant === 'minimal' ? 'minimal' : 'standard'}
        columns={[
          { title: 'Products', links: [{ label: 'Investments', href: '#' }, { label: 'Lending', href: '#' }] },
          { title: 'Services', links: [{ label: 'Wealth Management', href: '#' }, { label: 'Advisory', href: '#' }] },
        ]}
        copyright="© 2024 UBS Group AG"
      />
    </div>
  ),

  Header: (variant) => (
    <div style={{ width: '100%' }}>
      <Header
        variant={variant === 'compact' ? 'compact' : 'standard'}
        logo={<Logo variant="full" size={80} />}
        navItems={[
          { label: 'Home', href: '#', active: true },
          { label: 'Services', href: '#' },
          { label: 'About', href: '#' },
        ]}
      />
    </div>
  ),

  MastheadNavigation: (variant) => {
    if (variant === 'single-level') {
      return <MastheadSingleLevelDemo />;
    }
    if (variant === 'double-level') {
      return <MastheadDoubleLevelDemo />;
    }
    if (variant === 'mega-dropdown') {
      return (
        <div style={{ width: '100%' }}>
          <MastheadNavigation
            variant="primary"
            items={[
              { label: 'Dashboard', href: '#', active: true },
              {
                label: 'Services',
                children: [
                  { label: 'Accounts & Cards', href: '#', description: 'Manage your accounts' },
                  { label: 'Payments & Transfers', href: '#', description: 'Send and receive money' },
                  { label: 'Mortgages', href: '#', description: 'Home financing solutions' },
                  { label: 'Portfolio Management', href: '#', description: 'Investment solutions' },
                  { label: 'Trading Platform', href: '#', description: 'Execute trades' },
                  { label: 'Retirement Planning', href: '#', description: 'Plan your future' },
                  { label: 'Sustainable Investing', href: '#', description: 'ESG-integrated portfolios' },
                  { label: 'Wealth Planning', href: '#', description: 'Comprehensive advisory' },
                ],
              },
              { label: 'Markets', href: '#' },
              { label: 'Reports', href: '#' },
              { label: 'Help', href: '#' },
            ]}
          />
        </div>
      );
    }
    // multi-level (default)
    return (
      <div style={{ width: '100%' }}>
        <MastheadNavigation
          variant="primary"
          items={[
            { label: 'Home', href: '#', active: true },
            {
              label: 'Products',
              children: [
                { label: 'Equities', href: '#', description: 'Global equity markets' },
                { label: 'Fixed Income', href: '#', description: 'Bonds and credit' },
                { label: 'Derivatives', href: '#', description: 'Options, futures, swaps' },
                { label: 'Commodities', href: '#', description: 'Precious metals and energy' },
                { label: 'Foreign Exchange', href: '#', description: 'Currency trading' },
              ],
            },
            {
              label: 'Research',
              children: [
                { label: 'Market Outlook', href: '#', description: 'Global macro perspectives' },
                { label: 'Sector Analysis', href: '#', description: 'Industry deep dives' },
                { label: 'Regional Focus', href: '#', description: 'Americas, EMEA, APAC' },
                { label: 'Sustainability', href: '#', description: 'ESG research and ratings' },
              ],
            },
            { label: 'Insights', href: '#' },
            { label: 'Contact', href: '#' },
          ]}
        />
      </div>
    );
  },

  Links: (variant) => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
      <Links href="#" variant={variant === 'standalone' ? 'standalone' : variant === 'external' ? 'external' : 'inline'}>
        {variant === 'external' ? 'External resource' : variant === 'standalone' ? 'View all services' : 'Learn more about UBS'}
      </Links>
    </div>
  ),

  ProcessNavigation: (variant) => (
    <ProcessNavigation
      orientation={variant === 'vertical' ? 'vertical' : 'horizontal'}
      steps={[
        { label: 'Personal Details', status: 'completed' },
        { label: 'Account Type', status: 'active', description: 'Choose your account' },
        { label: 'Review & Submit', status: 'upcoming' },
      ]}
      currentStep={1}
    />
  ),

  TreeNavigation: () => (
    <TreeNavigation
      items={[
        {
          id: '1', label: 'Portfolios', children: [
            { id: '1-1', label: 'Conservative' },
            { id: '1-2', label: 'Growth' },
          ]
        },
        {
          id: '2', label: 'Reports', children: [
            { id: '2-1', label: 'Monthly' },
            { id: '2-2', label: 'Annual' },
          ]
        },
      ]}
    />
  ),

  MenuListItem: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', maxWidth: 240 }}>
      <MenuListItem label="Dashboard" active />
      <MenuListItem label="Portfolio" />
      <MenuListItem label="Transactions" />
      <MenuListItem label="Settings" />
    </div>
  ),

  // ─── Input ──────────────────────────────────

  Button: (variant) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant={(variant as any) || 'primary'} size="small">Small</Button>
      <Button variant={(variant as any) || 'primary'} size="medium">Medium</Button>
      <Button variant={(variant as any) || 'primary'} size="large">Large</Button>
    </div>
  ),

  MenuButton: (variant) => (
    <MenuButton
      label="Actions"
      variant={variant === 'secondary' ? 'secondary' : variant === 'outline' ? 'outline' : 'primary'}
      items={[
        { label: 'Edit', onClick: () => {} },
        { label: 'Duplicate', onClick: () => {} },
        { label: 'Delete', onClick: () => {} },
      ]}
    />
  ),

  SplitButton: (variant) => (
    <SplitButton
      label="Save"
      variant={variant === 'secondary' ? 'secondary' : 'primary'}
      items={[
        { label: 'Save as draft', onClick: () => {} },
        { label: 'Save and publish', onClick: () => {} },
      ]}
    />
  ),

  ButtonGroup: () => (
    <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Centre</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),

  ButtonSelect: () => (
    <ButtonSelect
      options={[
        { label: 'Day', value: 'day' },
        { label: 'Week', value: 'week' },
        { label: 'Month', value: 'month' },
        { label: 'Year', value: 'year' },
      ]}
      value="week"
    />
  ),

  DropdownButton: () => (
    <DropdownButton
      label="Export"
      items={[
        { label: 'Export as CSV', onClick: () => {} },
        { label: 'Export as PDF', onClick: () => {} },
        { label: 'Export as Excel', onClick: () => {} },
      ]}
    />
  ),

  ComboBox: () => (
    <ComboBox
      options={[
        { value: 'chf', label: 'Swiss Franc (CHF)' },
        { value: 'usd', label: 'US Dollar (USD)' },
        { value: 'eur', label: 'Euro (EUR)' },
        { value: 'gbp', label: 'British Pound (GBP)' },
      ]}
      placeholder="Search currencies..."
    />
  ),

  ContextSelector: () => (
    <ContextSelector
      options={[
        { value: 'personal', label: 'Personal Account' },
        { value: 'business', label: 'Business Account' },
        { value: 'trust', label: 'Trust Account' },
      ]}
      value="personal"
    />
  ),

  Dropdown: () => (
    <Dropdown
      options={[
        { value: 'emea', label: 'EMEA' },
        { value: 'apac', label: 'Asia Pacific' },
        { value: 'americas', label: 'Americas' },
      ]}
      placeholder="Select region"
    />
  ),

  Slider: () => (
    <div style={{ width: '100%', maxWidth: 300, padding: '0 8px' }}>
      <Slider min={0} max={100} value={65} />
    </div>
  ),

  Switch: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Switch label="Notifications" checked={true} size="medium" />
      <Switch label="Dark mode" checked={false} size="medium" />
    </div>
  ),

  FileUpload: (variant) => (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <FileUpload
        variant={variant === 'compact' ? 'compact' : 'dropzone'}
      />
    </div>
  ),

  TimePicker: () => (
    <TimePicker value={{ hours: 14, minutes: 30, seconds: 0 }} />
  ),

  Checkbox: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Checkbox label="Accept terms and conditions" checked={true} />
      <Checkbox label="Subscribe to newsletter" />
      <Checkbox label="Enable two-factor authentication" indeterminate />
    </div>
  ),

  Radio: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Radio name="plan" value="basic" label="Basic" />
      <Radio name="plan" value="premium" label="Premium" checked />
      <Radio name="plan" value="enterprise" label="Enterprise" />
    </div>
  ),

  Toggle: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Toggle label="Auto-save" checked={true} />
      <Toggle label="Email alerts" checked={false} />
    </div>
  ),

  Input: (variant) => (
    <div style={{ width: '100%', maxWidth: 300, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Input
        label="Email address"
        placeholder="Enter your email"
        size={variant === 'sm' ? 'sm' : variant === 'lg' ? 'lg' : 'md'}
        type="email"
      />
      <Input
        label="Amount"
        placeholder="0.00"
        size={variant === 'sm' ? 'sm' : variant === 'lg' ? 'lg' : 'md'}
        error="Please enter a valid amount"
      />
    </div>
  ),

  Select: () => (
    <div style={{ width: '100%', maxWidth: 300 }}>
      <Select
        label="Currency"
        options={[
          { value: 'chf', label: 'CHF' },
          { value: 'usd', label: 'USD' },
          { value: 'eur', label: 'EUR' },
        ]}
        placeholder="Select currency"
      />
    </div>
  ),

  Textarea: () => (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <Textarea
        label="Notes"
        placeholder="Add your notes here..."
        rows={3}
      />
    </div>
  ),

  DatePicker: () => (
    <DatePicker label="Start date" />
  ),

  // ─── Content Display ────────────────────────

  Accordion: (variant) => (
    <div style={{ width: '100%' }}>
      <Accordion
        variant={variant === 'bordered' ? 'bordered' : 'default'}
        items={[
          { title: 'Portfolio Overview', content: 'Your diversified portfolio across equities, bonds, and alternatives.' },
          { title: 'Risk Analysis', content: 'Current risk metrics and exposure analysis for your holdings.' },
          { title: 'Performance', content: 'Year-to-date and historical performance benchmarks.' },
        ]}
      />
    </div>
  ),

  AgendaSteps: (variant) => (
    <AgendaSteps
      variant={variant === 'compact' ? 'compact' : 'timeline'}
      steps={[
        { title: 'Account Opening', status: 'completed', description: 'Personal details verified' },
        { title: 'Document Upload', status: 'active', description: 'Upload identity documents' },
        { title: 'Verification', status: 'upcoming', description: 'Pending review' },
      ]}
    />
  ),

  Amount: (variant) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
      <Amount value={1234567.89} currency="CHF" showCurrency size={variant === 'sm' ? 'small' : variant === 'lg' ? 'large' : 'medium'} trend="up" />
      <Amount value={-523.40} currency="GBP" showCurrency showSign size={variant === 'sm' ? 'small' : variant === 'lg' ? 'large' : 'medium'} trend="down" />
    </div>
  ),

  Article: (variant) => (
    <Article
      title="Market Outlook Q4 2024"
      variant={variant === 'featured' ? 'featured' : variant === 'horizontal' ? 'horizontal' : 'card'}
      excerpt="Our latest analysis on global market trends and investment opportunities."
      date="15 Oct 2024"
      category="Research"
    />
  ),

  Avatar: (variant) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar name="John Smith" size="sm" variant={variant === 'square' ? 'square' : 'circle'} />
      <Avatar name="Jane Doe" size="md" variant={variant === 'square' ? 'square' : 'circle'} status="online" />
      <Avatar name="UBS" size="lg" variant={variant === 'square' ? 'square' : 'circle'} />
    </div>
  ),

  BannerBox: (variant) => (
    <div style={{ width: '100%' }}>
      <BannerBox
        title="Welcome to UBS"
        variant={variant === 'promotional' ? 'promotional' : variant === 'warning' ? 'warning' : 'info'}
        description="Explore our comprehensive wealth management solutions."
      />
    </div>
  ),

  Card: (variant) => (
    <Card
      variant={variant === 'pastel1' ? 'pastel1' : variant === 'pastel2' ? 'pastel2' : variant === 'gray' ? 'gray' : 'default'}
      padding="medium"
      hoverable
    >
      <Typography variant="subheadline3">Investment Summary</Typography>
      <Typography variant="copyText">Total portfolio value: CHF 1,234,567</Typography>
    </Card>
  ),

  ContentBlock: (variant) => (
    <ContentBlock
      title="Wealth Management"
      variant={variant === 'highlight' ? 'highlight' : variant === 'bordered' ? 'bordered' : 'default'}
    >
      Our experienced advisors provide personalised financial planning to help you achieve your goals.
    </ContentBlock>
  ),

  CountryFlag: (variant) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <CountryFlag country="CH" size={variant === 'sm' ? 'small' : variant === 'lg' ? 'large' : 'medium'} />
      <CountryFlag country="GB" size={variant === 'sm' ? 'small' : variant === 'lg' ? 'large' : 'medium'} />
      <CountryFlag country="US" size={variant === 'sm' ? 'small' : variant === 'lg' ? 'large' : 'medium'} />
      <CountryFlag country="DE" size={variant === 'sm' ? 'small' : variant === 'lg' ? 'large' : 'medium'} />
    </div>
  ),

  CreditCardDisplay: () => (
    <CreditCardDisplay
      number="4242424242424242"
      name="John Smith"
      expiry="12/28"
      type="visa"
      variant="premium"
    />
  ),

  DataViz: () => (
    <DataViz
      type="bar"
      data={[
        { label: 'Q1', value: 45 },
        { label: 'Q2', value: 62 },
        { label: 'Q3', value: 38 },
        { label: 'Q4', value: 71 },
      ]}
    />
  ),

  Divider: (variant) => (
    <div style={{ width: '100%', height: variant === 'vertical' ? 60 : 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Divider orientation={variant === 'vertical' ? 'vertical' : 'horizontal'} />
    </div>
  ),

  List: (variant) => (
    <List
      variant={variant === 'divided' ? 'divided' : 'default'}
      items={[
        { primary: 'UBSG.VX', secondary: 'UBS Group AG' },
        { primary: 'NESN.VX', secondary: 'Nestlé SA' },
        { primary: 'ROG.VX', secondary: 'Roche Holding AG' },
      ]}
      hoverable
    />
  ),

  Overlay: () => (
    <div style={{ position: 'relative', width: '100%', height: 100, background: '#eee', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#666' }}>
      Overlay opens as a full-screen modal (click trigger to demo)
    </div>
  ),

  Panel: () => (
    <div style={{ width: '100%' }}>
      <Panel title="Panel Content" variant="bordered" collapsible>
        <Typography variant="copyText">Side panel with additional context and details.</Typography>
      </Panel>
    </div>
  ),

  SidebarNav: (variant) => (
    <div style={{ width: 220 }}>
      <SidebarNav
        variant={variant === 'dark' ? 'dark' : 'light'}
        activeId="dash"
        items={[
          { id: 'dash', label: 'Dashboard' },
          { id: 'port', label: 'Portfolio' },
          { id: 'trans', label: 'Transactions' },
          { id: 'set', label: 'Settings' },
        ]}
      />
    </div>
  ),

  Stat: (variant) => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <Stat
        label="Portfolio Value"
        value="1,234,567"
        prefix="CHF "
        change={{ value: 2.34, direction: 'up' }}
        size={variant === 'sm' ? 'sm' : variant === 'lg' ? 'lg' : 'md'}
      />
      <Stat
        label="Daily P&L"
        value="-12,450"
        prefix="CHF "
        change={{ value: -0.8, direction: 'down' }}
        size={variant === 'sm' ? 'sm' : variant === 'lg' ? 'lg' : 'md'}
      />
    </div>
  ),

  Table: () => (
    <div style={{ width: '100%', overflow: 'auto' }}>
      <Table
        columns={[
          { key: 'ticker', header: 'Ticker', sortable: true },
          { key: 'name', header: 'Company' },
          { key: 'price', header: 'Price', align: 'right' },
          { key: 'change', header: 'Change', align: 'right' },
        ]}
        data={[
          { ticker: 'UBSG', name: 'UBS Group AG', price: 'CHF 28.43', change: '+1.2%' },
          { ticker: 'NESN', name: 'Nestlé SA', price: 'CHF 107.82', change: '-0.5%' },
          { ticker: 'ROG', name: 'Roche Holding', price: 'CHF 243.15', change: '+0.8%' },
        ]}
        striped
        hoverable
      />
    </div>
  ),

  Tabs: (variant) => (
    <Tabs
      variant={variant === 'contained' ? 'contained' : 'underline'}
      tabs={[
        { label: 'Overview', value: 'overview' },
        { label: 'Holdings', value: 'holdings' },
        { label: 'Performance', value: 'performance' },
        { label: 'Documents', value: 'documents' },
      ]}
      activeTab="overview"
      onChange={() => {}}
    />
  ),

  Tag: (variant) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Tag label="Active" variant={variant === 'red' ? 'red' : variant === 'success' ? 'success' : variant === 'warning' ? 'warning' : variant === 'outline' ? 'outline' : 'default'} />
      <Tag label="Equity" variant="default" />
      <Tag label="High Risk" variant="red" />
      <Tag label="Completed" variant="success" />
      <Tag label="Removable" variant="outline" removable />
    </div>
  ),

  Chip: (variant) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Chip variant={variant === 'choice' ? 'choice' : variant === 'input' ? 'input' : 'filter'} label="Equities" />
      <Chip variant={variant === 'choice' ? 'choice' : variant === 'input' ? 'input' : 'filter'} label="Bonds" selected />
      <Chip variant={variant === 'choice' ? 'choice' : variant === 'input' ? 'input' : 'filter'} label="Alternatives" />
    </div>
  ),

  Tile: (variant) => (
    <Tile
      title="Investment Insight"
      description="Explore opportunities in sustainable investing."
      variant={variant === 'selectable' ? 'selectable' : variant === 'action' ? 'action' : 'default'}
    />
  ),

  Typography: (variant) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Typography variant={variant === 'h1' ? 'keyline' : variant === 'h2' ? 'subheadline1' : variant === 'h3' ? 'subheadline2' : variant === 'h4' ? 'subheadline3' : variant === 'body' ? 'copyText' : variant === 'caption' ? 'captions' : variant === 'overline' ? 'environmentalInfo' : 'copyText'}>
        {variant === 'h1' ? 'Keyline Heading' : variant === 'h2' ? 'Subheadline 1' : variant === 'h3' ? 'Subheadline 2' : variant === 'h4' ? 'Subheadline 3' : variant === 'caption' ? 'Caption text style' : variant === 'overline' ? 'OVERLINE TEXT' : 'Body copy text implementing the UBS type scale.'}
      </Typography>
    </div>
  ),

  // ─── Feedback ───────────────────────────────

  Alert: (variant) => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Alert variant={(variant as any) || 'info'} title={`${(variant || 'info').charAt(0).toUpperCase()}${(variant || 'info').slice(1)} Alert`}>
        This is a {variant || 'info'} alert message with important information.
      </Alert>
    </div>
  ),

  Badge: (variant) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Badge variant={variant === 'red' ? 'red' : variant === 'success' ? 'success' : variant === 'warning' ? 'warning' : 'default'}>
        {variant === 'red' ? 'Urgent' : variant === 'success' ? 'Active' : variant === 'warning' ? 'Pending' : 'Default'}
      </Badge>
      <Badge variant="red" dot />
      <Badge variant="success">12</Badge>
    </div>
  ),

  EmptyState: () => (
    <EmptyState
      title="No transactions found"
      description="There are no transactions matching your current filters."
      action={{ label: 'Clear filters', onClick: () => {} }}
    />
  ),

  FormValidation: (variant) => (
    <div style={{ width: '100%' }}>
      <FormValidation
        variant={variant === 'inline' ? 'inline' : 'summary'}
        errors={[
          { field: 'email', message: 'Please enter a valid email address' },
          { field: 'amount', message: 'Amount must be greater than zero' },
        ]}
      />
    </div>
  ),

  MessageBox: (variant) => (
    <div style={{ width: '100%' }}>
      <MessageBox
        variant={(variant as any) || 'info'}
        title="Important Notice"
      >
        Your session will expire in 5 minutes. Please save your work.
      </MessageBox>
    </div>
  ),

  Modal: () => (
    <div style={{ position: 'relative', width: '100%', height: 100, background: '#eee', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#666' }}>
      Modal opens as an overlay dialog (click trigger to demo)
    </div>
  ),

  OverlayMessage: (variant) => (
    <div style={{ position: 'relative', width: '100%', minHeight: 100 }}>
      <OverlayMessage
        variant={variant === 'success' ? 'success' : variant === 'error' ? 'error' : variant === 'warning' ? 'warning' : 'info'}
        title="Operation Complete"
        message="Your transfer has been processed successfully."
        open
      />
    </div>
  ),

  Popover: () => (
    <Popover
      trigger={<Button variant="outline" size="small">Hover me</Button>}
      content={<div style={{ padding: 12 }}>Popover content with additional context</div>}
    />
  ),

  Progress: (variant) => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
      <Progress value={72} variant={variant === 'circle' ? 'circle' : 'bar'} size="md" colour="red" showLabel />
      <Progress value={45} variant={variant === 'circle' ? 'circle' : 'bar'} size="md" colour="green" showLabel />
    </div>
  ),

  Skeleton: (variant) => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
      {variant === 'circle' ? (
        <Skeleton variant="circle" width={48} height={48} />
      ) : variant === 'text' ? (
        <Skeleton variant="text" lines={3} width="100%" />
      ) : (
        <Skeleton variant="rect" width="100%" height={80} />
      )}
    </div>
  ),

  Snackbar: (variant) => (
    <div style={{ position: 'relative', width: '100%', minHeight: 60 }}>
      <Snackbar
        message="Changes saved successfully"
        variant={variant === 'success' ? 'success' : variant === 'error' ? 'error' : 'info'}
        open={true}
      />
    </div>
  ),

  Toast: () => (
    <div style={{ position: 'relative', width: '100%', height: 80, background: '#f5f5f5', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#666' }}>
      Toast uses ToastProvider + useToast() hook for programmatic display
    </div>
  ),

  Tooltip: () => (
    <Tooltip content="This is a helpful tooltip" position="top">
      <Button variant="outline" size="small">Hover for tooltip</Button>
    </Tooltip>
  ),

  Timer: (variant) => (
    <Timer
      direction="down"
      initialSeconds={3661}
      variant={variant === 'compact' ? 'compact' : 'default'}
      autoStart={false}
    />
  ),

  // ─── Charts ─────────────────────────────────

  BarChart: (variant) => (
    <div style={{ width: '100%', minHeight: 200 }}>
      <BarChart
        orientation={variant === 'horizontal' ? 'horizontal' : 'vertical'}
        data={[
          { label: 'Q1', values: [42] },
          { label: 'Q2', values: [58] },
          { label: 'Q3', values: [35] },
          { label: 'Q4', values: [71] },
        ]}
        showValues
        xLabel="Quarter"
        yLabel="Revenue (M)"
      />
    </div>
  ),

  DonutChartWidget: () => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <DonutChartWidget
        data={[
          { label: 'Equities', value: 45 },
          { label: 'Bonds', value: 30 },
          { label: 'Alternatives', value: 15 },
          { label: 'Cash', value: 10 },
        ]}
        size={180}
        centerLabel="Portfolio"
        showPercentages
      />
    </div>
  ),

  LineChart: () => (
    <div style={{ width: '100%', minHeight: 200 }}>
      <LineChart
        data={[
          { label: 'Jan', series: [{ name: 'Portfolio', values: [100] }, { name: 'Benchmark', values: [100] }] },
          { label: 'Feb', series: [{ name: 'Portfolio', values: [105] }, { name: 'Benchmark', values: [102] }] },
          { label: 'Mar', series: [{ name: 'Portfolio', values: [98] }, { name: 'Benchmark', values: [99] }] },
          { label: 'Apr', series: [{ name: 'Portfolio', values: [112] }, { name: 'Benchmark', values: [104] }] },
          { label: 'May', series: [{ name: 'Portfolio', values: [118] }, { name: 'Benchmark', values: [107] }] },
          { label: 'Jun', series: [{ name: 'Portfolio', values: [115] }, { name: 'Benchmark', values: [109] }] },
        ]}
        showPoints
        showGrid
        xLabel="Month"
        yLabel="Value"
      />
    </div>
  ),

  PieChart: () => (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <PieChart
        data={[
          { label: 'EMEA', value: 40 },
          { label: 'Americas', value: 35 },
          { label: 'APAC', value: 20 },
          { label: 'Other', value: 5 },
        ]}
        size={180}
        showLabels
        showLegend
      />
    </div>
  ),

  // ─── Layout & Patterns ──────────────────────

  Grid: () => (
    <Grid columns={3} gap="medium">
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div key={n} style={{ background: '#f0f0f0', padding: 16, borderRadius: 4, textAlign: 'center', fontSize: 13 }}>
          Cell {n}
        </div>
      ))}
    </Grid>
  ),

  Layout: () => (
    <div style={{ width: '100%', height: 120, border: '1px dashed #ccc', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#666' }}>
      Layout provides page-level structure (header, sidebar, content)
    </div>
  ),

  PageHeader: (variant) => (
    <div style={{ width: '100%' }}>
      <PageHeader
        title="Portfolio Overview"
        variant={variant === 'impulse' ? 'impulse' : 'default'}
        subtitle="View and manage your investment portfolio"
        breadcrumbs={[
          { label: 'Home', href: '#' },
          { label: 'Investments', href: '#' },
          { label: 'Portfolio', href: '#' },
        ]}
      />
    </div>
  ),

  SectionWrapper: () => (
    <SectionWrapper padding="md" background="white">
      <Typography variant="subheadline3">Section Content</Typography>
      <Typography variant="copyText">Wrapped content with consistent spacing.</Typography>
    </SectionWrapper>
  ),

  ActionBar: () => (
    <div style={{ width: '100%' }}>
      <ActionBar
        primaryAction={{ label: 'Submit', onClick: () => {} }}
        secondaryAction={{ label: 'Cancel', onClick: () => {} }}
      />
    </div>
  ),

  CTA: (variant) => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <CTA variant={variant === 'text' ? 'text' : variant === 'url' ? 'url' : 'button'} href="#" label="Get started" />
    </div>
  ),

  Impulse: () => (
    <div style={{ width: '100%', minHeight: 100 }}>
      <div style={{ position: 'relative', width: '100%', height: 120, border: '1px dashed #ccc', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#666' }}>
        Impulse formats content into UBS print layout sizes (A0-A8)
      </div>
    </div>
  ),

  Logo: (variant) => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
      <Logo variant={variant === 'symbol' ? 'symbol' : variant === 'wordmark' ? 'wordmark' : 'full'} colour="black" size={variant === 'symbol' ? 40 : 100} />
    </div>
  ),

  LogoTab: () => (
    <div style={{ position: 'relative', width: '100%', height: 80 }}>
      <LogoTab position="top-left" />
    </div>
  ),

  Icon: (variant) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Icon name="search" size={variant === 'sm' ? 'sm' : variant === 'lg' ? 'lg' : 'md'} />
      <Icon name="settings" size={variant === 'sm' ? 'sm' : variant === 'lg' ? 'lg' : 'md'} />
      <Icon name="notification" size={variant === 'sm' ? 'sm' : variant === 'lg' ? 'lg' : 'md'} />
      <Icon name="download" size={variant === 'sm' ? 'sm' : variant === 'lg' ? 'lg' : 'md'} />
    </div>
  ),

  MovingFrame: (variant) => (
    <div style={{ width: '100%', minHeight: 100 }}>
      <MovingFrame variant={variant === 'opaque' ? 'opaque' : 'transparent'} />
    </div>
  ),

  Pattern: () => (
    <div style={{ width: '100%', minHeight: 100, overflow: 'hidden', borderRadius: 4 }}>
      <Pattern variant="solid" />
    </div>
  ),
};
