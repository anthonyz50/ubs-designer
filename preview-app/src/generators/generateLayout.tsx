/**
 * generateLayout — Takes the builder configuration and returns a React element tree
 * using real UBS Design System components.
 */
import React from 'react';
import {
  UBSThemeProvider,
  UBSGlobalStyles,
  Navbar,
  Footer,
  PageHeader,
  SectionWrapper,
  Grid,
  Stat,
  DataViz,
  Card,
  Button,
  Typography,
  Input,
  Select,
  Textarea,
  Checkbox,
  Toggle,
  Table,
  CTA,
  Impulse,
  MovingFrame,
  Logo,
  Radio,
  RadioGroup,
  DatePicker,
  MastheadNavigation,
  Tabs,
} from '@ubs/design-system';

import {
  Search,
  Bell,
  User,
  Chart,
  Globe,
  Shield,
  Wallet,
  Briefcase,
  Growth,
} from '@ubs/design-system';

import {
  WelcomeScene,
  InvestmentGrowth,
} from '@ubs/design-system';

import type {
  LayoutConfig,
  SectionConfig,
  StatsRowOptions,
  ChartGridOptions,
  FeatureGridOptions,
  FormFieldsOptions,
  TableOptions,
  ContentBlockOptions,
  CardGridOptions,
  CTABlockOptions,
  MastheadNavigationOptions,
} from '../types';

import {
  sampleStats,
  assetAllocationData,
  monthlyPerformanceData,
  regionalBreakdownData,
  sectorData,
  clientPortfolioColumns,
  clientPortfolioData,
  transactionColumns,
  transactionData,
  sampleFeatures,
  formFieldDefs,
  sampleCards,
  navItems,
  footerLinks,
  singleLevelTabs,
  doubleLevelPrimaryTabs,
  doubleLevelSecondaryTabs,
  multiLevelNavItems,
  megaNavItems,
} from '../data/sampleData';

// ─── Icon Map for Features ──────────────────────────────────────────

const featureIcons = [
  <Wallet key="wallet" size={48} />,
  <Briefcase key="briefcase" size={48} />,
  <Chart key="chart" size={48} />,
  <Shield key="shield" size={48} />,
  <Growth key="growth" size={48} />,
  <Globe key="globe" size={24} />,
];

// ─── Section Renderers ──────────────────────────────────────────────

function renderStatsRow(options: StatsRowOptions): React.ReactElement {
  const count = Math.min(options.count, sampleStats.length);
  const stats = sampleStats.slice(0, count);

  return (
    <Grid columns={{ mobile: 1, tablet: 2, desktop: Math.min(count, 3), wide: count }} gap="medium">
      {stats.map((stat, i) => (
        <Stat
          key={i}
          label={stat.label}
          value={stat.value}
          change={options.sampleData ? stat.change : undefined}
          size="lg"
        />
      ))}
    </Grid>
  );
}

function renderChartGrid(options: ChartGridOptions): React.ReactElement {
  const chartDataSets = [assetAllocationData, monthlyPerformanceData, regionalBreakdownData, sectorData];
  const chartInsights = [
    'Equities remain the dominant allocation at 42%.',
    'Positive performance in 10 of 12 months.',
    'Switzerland accounts for the largest regional share.',
    'Technology leads sector allocation at 24%.',
  ];
  const count = Math.min(options.count, 4);

  return (
    <Grid columns={{ mobile: 1, tablet: 2, desktop: Math.min(count, 2), wide: count }} gap="large">
      {Array.from({ length: count }).map((_, i) => (
        <DataViz
          key={i}
          type={options.chartType}
          data={chartDataSets[i % chartDataSets.length]}
          colourSequence="multichrome"
          insight={chartInsights[i % chartInsights.length]}
          width={280}
          height={280}
        />
      ))}
    </Grid>
  );
}

function renderFeatureGrid(options: FeatureGridOptions): React.ReactElement {
  const count = Math.min(options.count, sampleFeatures.length);
  const features = sampleFeatures.slice(0, count);

  return (
    <Grid columns={{ mobile: 1, tablet: 2, desktop: Math.min(count, 3), wide: Math.min(count, 3) }} gap="medium">
      {features.map((feature, i) => (
        <Card key={i} variant="default" padding="medium" hoverable>
          {options.withIcons && (
            <div style={{ marginBottom: 12 }}>
              {featureIcons[i % featureIcons.length]}
            </div>
          )}
          <Typography variant="subheadline2" style={{ marginBottom: 8 }}>
            {feature.title}
          </Typography>
          <Typography variant="copyText" style={{ color: 'var(--ubs-color-text-secondary)' }}>
            {feature.description}
          </Typography>
        </Card>
      ))}
    </Grid>
  );
}

function renderFormFields(options: FormFieldsOptions): React.ReactElement {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 600 }}>
      {options.fieldTypes.map((fieldType) => {
        switch (fieldType) {
          case 'text':
            return <Input key="text" label={formFieldDefs.text.label} placeholder={formFieldDefs.text.placeholder} fullWidth />;
          case 'email':
            return <Input key="email" label={formFieldDefs.email.label} placeholder={formFieldDefs.email.placeholder} type="email" fullWidth />;
          case 'select':
            return <Select key="select" label={formFieldDefs.select.label} placeholder={formFieldDefs.select.placeholder} options={formFieldDefs.select.options} fullWidth />;
          case 'textarea':
            return <Textarea key="textarea" label={formFieldDefs.textarea.label} placeholder={formFieldDefs.textarea.placeholder} rows={4} fullWidth />;
          case 'checkbox':
            return <Checkbox key="checkbox" label={formFieldDefs.checkbox.label} />;
          case 'radio':
            return (
              <RadioGroup key="radio" name="commPref" label={formFieldDefs.radio.label}>
                {formFieldDefs.radio.options.map((opt) => (
                  <Radio key={opt} label={opt} value={opt.toLowerCase()} />
                ))}
              </RadioGroup>
            );
          case 'toggle':
            return <Toggle key="toggle" label={formFieldDefs.toggle.label} />;
          case 'date':
            return <DatePicker key="date" label={formFieldDefs.date.label} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

function renderTable(options: TableOptions): React.ReactElement {
  const useTransactions = options.columns >= 6;
  const columns = useTransactions
    ? transactionColumns.slice(0, options.columns)
    : clientPortfolioColumns.slice(0, options.columns);
  const data: Record<string, unknown>[] = useTransactions
    ? transactionData.slice(0, options.rows)
    : clientPortfolioData.slice(0, options.rows);

  return (
    <Table
      columns={columns}
      data={data}
      selectable={options.selectable}
      sortBy={options.sortable ? columns[0]?.key : undefined}
      sortDirection={options.sortable ? 'asc' : undefined}
      striped
      hoverable
      stickyHeader
    />
  );
}

function renderContentBlock(options: ContentBlockOptions): React.ReactElement {
  return (
    <div style={{ display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap' }}>
      {options.withIllustration && (
        <div style={{ flex: '0 0 auto' }}>
          <InvestmentGrowth width={240} height={180} />
        </div>
      )}
      <div style={{ flex: 1, minWidth: 280, textAlign: options.textAlignment }}>
        <Typography variant="subheadline1" style={{ marginBottom: 16 }}>
          Building the future of wealth management
        </Typography>
        <Typography variant="leadText1" style={{ marginBottom: 16, color: 'var(--ubs-color-text-secondary)' }}>
          At UBS, we combine the strength of a global financial institution with the personal touch
          of a trusted advisor. Our integrated approach to wealth management draws on over 160 years
          of experience serving the world's most discerning clients.
        </Typography>
        <Typography variant="copyText" style={{ color: 'var(--ubs-color-text-secondary)' }}>
          Whether you are looking to preserve your legacy, grow your assets, or make a positive impact
          through sustainable investing, our dedicated team of experts is here to help you achieve your
          financial goals.
        </Typography>
      </div>
    </div>
  );
}

function renderCardGrid(options: CardGridOptions): React.ReactElement {
  const count = Math.min(options.count, sampleCards.length);
  const cards = sampleCards.slice(0, count);

  return (
    <Grid columns={{ mobile: 1, tablet: 2, desktop: Math.min(count, 3), wide: Math.min(count, 3) }} gap="medium">
      {cards.map((card, i) => (
        <Card key={i} variant={options.variant} padding="medium" hoverable>
          <Typography variant="subheadline2" style={{ marginBottom: 8 }}>
            {card.title}
          </Typography>
          <Typography variant="copyText" style={{ marginBottom: 16, color: 'var(--ubs-color-text-secondary)' }}>
            {card.description}
          </Typography>
          <CTA variant="text" label={card.cta} href="#" size="sm" />
        </Card>
      ))}
    </Grid>
  );
}

function renderCTABlock(options: CTABlockOptions): React.ReactElement {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 0' }}>
      <CTA variant={options.variant} label={options.label} href="#" size="lg" animated />
    </div>
  );
}

// ─── Masthead Navigation Renderers ─────────────────────────────────

function MastheadSingleLevel(): React.ReactElement {
  const [activeTab, setActiveTab] = React.useState('overview');

  return (
    <div>
      <Typography variant="subheadline2" style={{ marginBottom: 12 }}>
        Single-level Navigation
      </Typography>
      <Typography variant="copyText" style={{ color: 'var(--ubs-color-text-secondary)', marginBottom: 16 }}>
        The simplest navigation, allowing the user to quickly switch between pages.
      </Typography>
      <Tabs tabs={singleLevelTabs} activeTab={activeTab} onChange={setActiveTab} variant="underline" />
    </div>
  );
}

function MastheadDoubleLevel(): React.ReactElement {
  const [primaryTab, setPrimaryTab] = React.useState('wealth');
  const [secondaryTab, setSecondaryTab] = React.useState('overview');

  const handlePrimaryChange = (value: string) => {
    setPrimaryTab(value);
    setSecondaryTab('overview');
  };

  const secondaryTabs = doubleLevelSecondaryTabs[primaryTab] || doubleLevelSecondaryTabs.wealth;

  return (
    <div>
      <Typography variant="subheadline2" style={{ marginBottom: 12 }}>
        Double-level Navigation
      </Typography>
      <Typography variant="copyText" style={{ color: 'var(--ubs-color-text-secondary)', marginBottom: 16 }}>
        Two levels of navigation. The second row uses bold text instead of a red bottom border.
      </Typography>
      <Tabs tabs={doubleLevelPrimaryTabs} activeTab={primaryTab} onChange={handlePrimaryChange} variant="underline" />
      <Tabs tabs={secondaryTabs} activeTab={secondaryTab} onChange={setSecondaryTab} variant="contained" />
    </div>
  );
}

function MastheadMultiLevel(): React.ReactElement {
  return (
    <div>
      <Typography variant="subheadline2" style={{ marginBottom: 12 }}>
        Multi-level Navigation
      </Typography>
      <Typography variant="copyText" style={{ color: 'var(--ubs-color-text-secondary)', marginBottom: 16 }}>
        Two or three levels using dropdowns. Dropdowns always open to the right.
      </Typography>
      <MastheadNavigation items={multiLevelNavItems} variant="primary" />
    </div>
  );
}

function MastheadMegaDropdown(): React.ReactElement {
  return (
    <div>
      <Typography variant="subheadline2" style={{ marginBottom: 12 }}>
        Mega Drop-down Navigation
      </Typography>
      <Typography variant="copyText" style={{ color: 'var(--ubs-color-text-secondary)', marginBottom: 16 }}>
        A special menu containing quick links and message boxes with status information.
      </Typography>
      <MastheadNavigation items={megaNavItems} variant="primary" />
    </div>
  );
}

function renderMastheadNavigation(options: MastheadNavigationOptions): React.ReactElement {
  switch (options.navType) {
    case 'single': return <MastheadSingleLevel />;
    case 'double': return <MastheadDoubleLevel />;
    case 'multi': return <MastheadMultiLevel />;
    case 'mega': return <MastheadMegaDropdown />;
    default: return <MastheadSingleLevel />;
  }
}

// ─── Section Renderer Dispatch ──────────────────────────────────────

function renderSection(section: SectionConfig): React.ReactElement {
  const bg = section.type === 'stats-row' ? 'pastel1' : 'white';

  let content: React.ReactElement | null;
  switch (section.type) {
    case 'stats-row':
      content = renderStatsRow(section.options as StatsRowOptions);
      break;
    case 'chart-grid':
      content = renderChartGrid(section.options as ChartGridOptions);
      break;
    case 'feature-grid':
      content = renderFeatureGrid(section.options as FeatureGridOptions);
      break;
    case 'form-fields':
      content = renderFormFields(section.options as FormFieldsOptions);
      break;
    case 'table':
      content = renderTable(section.options as TableOptions);
      break;
    case 'content-block':
      content = renderContentBlock(section.options as ContentBlockOptions);
      break;
    case 'card-grid':
      content = renderCardGrid(section.options as CardGridOptions);
      break;
    case 'cta-block':
      content = renderCTABlock(section.options as CTABlockOptions);
      break;
    case 'masthead-navigation':
      content = renderMastheadNavigation(section.options as MastheadNavigationOptions);
      break;
    default:
      content = null;
  }

  return (
    <SectionWrapper
      key={section.id}
      title={section.title}
      padding="lg"
      background={bg}
    >
      {content}
    </SectionWrapper>
  );
}

// ─── Main Generator ─────────────────────────────────────────────────

export function generateLayout(config: LayoutConfig): React.ReactElement {
  const colourMode = config.darkMode ? 'dark' : 'light';

  return (
    <UBSThemeProvider defaultColourMode={colourMode}>
      <UBSGlobalStyles />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Navbar */}
        {config.includeNavbar && (
          <Navbar
            logo={<Logo variant="full" colour={config.darkMode ? 'white' : 'black'} size={80} />}
            items={navItems}
            actions={
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Search size={20} />
                <Bell size={20} />
                <User size={20} />
              </div>
            }
            sticky
            variant={config.darkMode ? 'dark' : 'light'}
          />
        )}

        {/* Hero / Moving Frame */}
        {config.includeMovingFrame && (config.pageType === 'landing' || config.pageType === 'content') && (
          <MovingFrame
            variant="transparent"
            backgroundSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1440&q=80"
            backgroundAlt="Modern financial district skyline"
            animated
          >
            <Typography variant="keyline" style={{ marginBottom: 12 }}>
              {config.title || 'Welcome to UBS'}
            </Typography>
            {config.subtitle && (
              <Typography variant="leadText1" style={{ marginBottom: 20 }}>
                {config.subtitle}
              </Typography>
            )}
            <CTA variant="button" label="Get Started" href="#" />
          </MovingFrame>
        )}

        {/* Hero Image fallback */}
        {config.heroImage && !config.includeMovingFrame && (config.pageType === 'landing' || config.pageType === 'content') && (
          <div
            style={{
              height: 400,
              background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 40px',
            }}
          >
            <div style={{ maxWidth: 700, textAlign: 'center' }}>
              <Typography variant="keyline" style={{ color: '#ffffff', marginBottom: 12 }}>
                {config.title || 'Welcome to UBS'}
              </Typography>
              {config.subtitle && (
                <Typography variant="leadText1" style={{ color: '#ffffffcc', marginBottom: 24 }}>
                  {config.subtitle}
                </Typography>
              )}
              <CTA variant="button" label="Explore" href="#" />
            </div>
          </div>
        )}

        {/* Page Header */}
        {!(config.includeMovingFrame && (config.pageType === 'landing' || config.pageType === 'content')) &&
         !(config.heroImage && (config.pageType === 'landing' || config.pageType === 'content')) && (
          <PageHeader
            title={config.title || 'Untitled Page'}
            subtitle={config.subtitle || undefined}
            variant={config.includeImpulse ? 'impulse' : 'default'}
            breadcrumbs={[
              { label: 'Home', href: '/' },
              { label: config.title || 'Page' },
            ]}
            actions={
              config.pageType === 'dashboard' ? (
                <Button variant="primary">New Transaction</Button>
              ) : undefined
            }
          />
        )}

        {/* Impulse standalone (when not in page header) */}
        {config.includeImpulse && (config.pageType === 'landing' || config.pageType === 'content') && (
          <div style={{ padding: '32px 40px 0' }}>
            <Impulse format="A3">
              <Typography variant="subheadline1">
                {config.subtitle || 'Empowering your financial future'}
              </Typography>
            </Impulse>
          </div>
        )}

        {/* Main Content */}
        <main style={{ flex: 1 }}>
          {config.sections.map((section) => renderSection(section))}

          {/* If no sections, show a welcome/empty state */}
          {config.sections.length === 0 && (
            <SectionWrapper padding="lg" background="white">
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <WelcomeScene width={300} height={220} />
                <Typography variant="subheadline2" style={{ marginTop: 24, marginBottom: 8 }}>
                  Add sections to build your layout
                </Typography>
                <Typography variant="leadText1" style={{ color: 'var(--ubs-color-text-secondary)' }}>
                  Use the builder panel to configure sections and generate a preview.
                </Typography>
              </div>
            </SectionWrapper>
          )}
        </main>

        {/* Footer */}
        {config.includeFooter && (
          <Footer
            links={footerLinks}
            copyright="© 2026 UBS Group AG. All rights reserved."
            showLogo
          />
        )}
      </div>
    </UBSThemeProvider>
  );
}
