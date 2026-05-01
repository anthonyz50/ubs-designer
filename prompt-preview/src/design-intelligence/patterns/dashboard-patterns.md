# Dashboard Patterns

## When to Use

Dashboards provide an at-a-glance overview of key metrics, status, and recent activity. Use a dashboard as the landing page when users need to monitor multiple data points and make quick decisions about where to focus their attention.

## Layout Structure

### Anatomy
```
┌─────────────────────────────────────────────┐
│ Page header: Title + Date range / Filters   │
├──────────┬──────────┬──────────┬────────────┤
│ KPI Card │ KPI Card │ KPI Card │ KPI Card   │
├──────────┴──────────┼──────────┴────────────┤
│ Primary chart/table │ Secondary widget      │
│                     │                       │
├─────────────────────┼───────────────────────┤
│ Activity feed       │ Quick actions         │
│                     │                       │
└─────────────────────┴───────────────────────┘
```

### Grid
- Desktop: 12-column grid, max width 1200px
- KPI cards: 3 or 4 across (equal width)
- Primary content area: 8 columns
- Secondary sidebar: 4 columns
- Mobile: Single column, KPI cards stack 2-up then 1-up

### Spacing
- 24px gap between cards
- 32px vertical spacing between dashboard sections
- 20px internal card padding

## Key Components

### KPI cards
- Metric value (large, prominent)
- Metric label (smaller, above or below)
- Trend indicator (up/down arrow with percentage, using success/error colour)
- Sparkline or mini-chart (optional)
- Comparison period text (e.g., "vs last month")

### Charts
- Clear title and subtitle explaining what the chart shows
- Axis labels with units
- Tooltip on hover showing exact values
- Legend positioned below or to the right
- Accessible colour palette with pattern differentiation

### Activity feed
- Chronological list, most recent first
- Each entry: timestamp, actor, action, target
- "View all" link to full activity log
- Maximum 5-10 items visible

### Quick actions
- 3-5 most common actions for the user's role
- Button or card format with icon + label
- Ordered by frequency of use

## Interaction Flow

1. User lands on dashboard, sees skeleton screen while data loads
2. KPI cards populate first (smallest data request)
3. Charts and tables load progressively
4. User can adjust date range or filters; dashboard updates in place
5. Clicking a KPI card navigates to the detailed view for that metric
6. Clicking chart data points opens the relevant detail page

## States

### Loading
- Skeleton screens matching the card and chart layout
- KPI cards show pulsing placeholder blocks for value and label
- Charts show skeleton chart area with grey placeholder

### Empty
- New user with no data: show onboarding guidance with steps to generate data
- No data for selected period: "No data for this period. Try a different date range."

### Error
- Per-widget error handling: if one widget fails, others still load
- Failed widget shows: "Couldn't load [widget name]. [Retry]"
- Full page error: "We're having trouble loading your dashboard. [Retry]"

### Success
- Data loads without fanfare; the populated dashboard is the success state
- Real-time updates via polling or websocket; no page refresh needed

## Responsive Behaviour

| Breakpoint | Layout |
|-----------|--------|
| Desktop (1024px+) | 12-column grid, sidebar visible |
| Tablet (768-1023px) | 8-column grid, sidebar collapses below main content |
| Mobile (below 768px) | Single column, KPI cards 2-up, charts full width |

- Charts resize responsively; simplify axis labels on smaller screens
- Activity feed collapses to 3 items on mobile with "View all" link
- Quick actions move to a horizontal scroll row on mobile

## Accessibility

- KPI values are announced by screen readers with their labels (e.g., "Open requests: 42")
- Charts have a text summary alternative (e.g., "Requests increased 12% over the past 7 days")
- Dashboard sections use landmark regions with descriptive labels
- Auto-refreshing data announces updates via `aria-live="polite"` regions
- Date range and filter controls are keyboard accessible

## Example Structure

```
<main aria-label="Dashboard">
  <header>
    <h1>Operations dashboard</h1>
    <DateRangePicker />
    <FilterBar />
  </header>

  <section aria-label="Key metrics">
    <KPICard label="Open requests" value="42" trend="+5%" />
    <KPICard label="Avg resolution time" value="2.4h" trend="-12%" />
    <KPICard label="SLA compliance" value="98.1%" trend="+0.3%" />
    <KPICard label="Pending approvals" value="7" trend="0%" />
  </section>

  <section aria-label="Request volume">
    <BarChart title="Requests by category" data={chartData} />
  </section>

  <aside aria-label="Recent activity">
    <ActivityFeed items={recentActivity} limit={5} />
    <Link to="/activity">View all activity</Link>
  </aside>

  <section aria-label="Quick actions">
    <ActionCard icon="plus" label="Create request" to="/requests/new" />
    <ActionCard icon="search" label="Search requests" to="/requests" />
    <ActionCard icon="chart" label="View reports" to="/reports" />
  </section>
</main>
```

## Do

- Load KPI cards first for fast perceived performance
- Use skeleton screens that match the actual content layout
- Handle per-widget errors independently
- Provide text alternatives for all data visualisations
- Show trend direction with both icon and colour

## Don't

- Overload the dashboard with more than 8-10 widgets
- Auto-refresh the entire page; update individual components
- Use pie charts for more than 5 categories
- Show raw data without context (always include comparison or trend)
- Force users to scroll horizontally on any viewport
