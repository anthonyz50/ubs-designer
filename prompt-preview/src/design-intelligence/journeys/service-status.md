# Journey: Service Status

## Overview

The "Service Status" journey allows a user to check the health and availability of IT services, investigate current or past incidents, and subscribe to updates. It provides transparency into service reliability and helps users understand impact before raising a request.

## Entry Conditions

- User wants to know whether a service is operational
- User is investigating a potential issue before raising a request
- User may enter from: navigation menu, dashboard service widget, alert notification, or incident email link

## Steps

### Step 1: Service overview

**Page name:** Service status
**User intent:** Get a quick view of all services and their current health
**Primary action:** Select a service for detail
**Secondary action:** Filter or search services

**Content:**
- Summary banner: count of services in each state (e.g., "42 operational, 2 degraded, 1 outage")
- Service list grouped by category (Infrastructure, Applications, Network, Security)
- Each row shows: service name, current status badge, last incident date, uptime percentage (trailing 30 days)
- Search input for filtering by service name
- Category filter tabs or dropdown

**States:**
- Default: All services listed with current status
- Filtered: Results filtered by category or search term
- All healthy: Summary banner shows "All services operational" in a success state
- Active incidents: Affected services pinned to the top with an incident banner
- Loading: Skeleton rows for the service list
- Error: "We couldn't load service status. [Try again]"

**Transitions:**
- On service selection → Step 2: Service detail
- On incident banner click → Step 3: Incident detail

### Step 2: Service detail

**Page name:** [Service name] status
**User intent:** Understand the current state, recent history, and reliability of a specific service
**Primary action:** Subscribe to updates
**Secondary action:** Return to service overview

**Content:**
- Service name and current status badge (Operational, Degraded, Partial outage, Major outage, Maintenance)
- Status description: brief human-readable explanation of current state
- **Current incidents**: Active incidents listed with severity, start time, and a brief summary
- **SLA summary**: Target uptime, actual uptime (trailing 30 days), and a visual bar
- **Recent incidents**: Last 5 incidents with date, severity, duration, and resolution status
- **Scheduled maintenance**: Upcoming planned maintenance windows with dates and expected impact
- **Subscribe**: Button to subscribe to email or in-app notifications for this service

**States:**
- Operational: Green status, no active incidents, SLA in target
- Degraded: Warning status, active incident(s) listed
- Outage: Error status, active incident highlighted, impact summary shown
- Maintenance: Info status, maintenance window details shown
- Loading: Skeleton layout matching the content structure
- Error: "We couldn't load details for this service. [Try again]"

**Transitions:**
- On incident selection → Step 3: Incident detail
- On "Subscribe" → Subscription confirmation (inline or toast)
- On "View full history" → Step 5: Historical view
- On "Back" → Step 1: Service overview

### Step 3: Incident detail

**Page name:** Incident [INC-number]
**User intent:** Understand what happened, what is being done, and when resolution is expected
**Primary action:** Subscribe to incident updates
**Secondary action:** Return to service detail

**Content:**
- Incident title, severity badge, and current status (Investigating, Identified, Monitoring, Resolved)
- **Impact summary**: Which services are affected and how
- **Timeline**: Chronological log of updates, each with timestamp, author, and description
- **Affected users**: Estimated user impact (e.g., "Approximately 2,500 users in EMEA")
- **Expected resolution**: Estimated time to resolution (when available)
- **Workaround**: Temporary solution if available
- **Related incidents**: Links to previous similar incidents
- **Subscribe**: Button to receive updates on this specific incident

**States:**
- Active (Investigating): Timeline updating, severity and impact shown, expected resolution pending
- Active (Identified): Root cause identified, fix in progress, estimated resolution shown
- Monitoring: Fix applied, service under observation, "Monitoring for 30 minutes" notice
- Resolved: Full timeline shown, resolution summary, post-incident review linked (when available)
- Loading: Skeleton timeline and details
- Error: "We couldn't load this incident. [Try again]"

**Transitions:**
- On "Subscribe" → Subscription confirmation
- On "View post-incident review" → Post-incident review page (external or inline)
- On "Back" → Step 2: Service detail

### Step 4: Subscribe to updates

**Page name:** Notification preferences (inline panel or modal)
**User intent:** Receive updates about a service or incident without checking manually
**Primary action:** Save preferences
**Secondary action:** Cancel

**Content:**
- Notification channel options: Email, in-app notification, or both
- Scope: "All incidents for this service" or "This incident only"
- Severity filter: Option to receive updates only for major incidents
- Frequency: Real-time updates or daily digest

**States:**
- Default: Subscription form with recommended defaults (email, real-time, all severities)
- Already subscribed: Shows current preferences with option to edit or unsubscribe
- Success: "You're subscribed. We'll notify you at [address] when the status changes."
- Error: "We couldn't save your preferences. [Try again]"

**Transitions:**
- On "Save" → Toast confirmation, returns to previous page
- On "Cancel" → Returns to previous page

### Step 5: Historical view

**Page name:** [Service name] incident history
**User intent:** Review past incidents, identify patterns, and assess service reliability
**Primary action:** Filter by date range or severity
**Secondary action:** Return to service detail

**Content:**
- Date range selector (defaults to last 90 days)
- Incident list: date, title, severity, duration, root cause category
- Uptime chart: visual representation of uptime over the selected period
- Summary statistics: total incidents, average resolution time, most common root cause

**States:**
- Default: Last 90 days of incidents with uptime chart
- Filtered: Results narrowed by date range or severity
- No incidents: "No incidents recorded in this period. [Service name] has been fully operational."
- Loading: Skeleton chart and list
- Error: "We couldn't load the incident history. [Try again]"

**Transitions:**
- On incident selection → Step 3: Incident detail
- On "Back" → Step 2: Service detail

## Error Handling

| Error scenario | Response |
|---------------|----------|
| Service list fails to load | "We couldn't load service status. [Try again] or check back shortly." |
| Service detail unavailable | "We couldn't load details for this service. [Try again]" |
| Incident not found | "This incident is no longer available. It may have been merged or removed. [Return to service status]" |
| Subscription save fails | Toast: "We couldn't save your notification preferences. [Try again]" |
| Timeline fails to update | "New updates may be delayed. [Refresh] to check for the latest." |
| Historical data unavailable | "Incident history is temporarily unavailable. [Try again later]" |

## Escalation Paths

- **From service detail**: "Report an issue" links to the Raise a Request journey with the service pre-selected
- **From incident detail**: "This is affecting my work" logs user impact and may trigger priority escalation
- **Unresolved incidents past SLA**: System auto-escalates and shows a banner to affected users

## Success Criteria

- The user can quickly determine whether a service is operational
- Active incidents are clearly visible with real-time updates
- Users can subscribe to updates and receive timely notifications
- Historical data helps users identify patterns and plan around known issues

## Analytics Events

| Event | Trigger | Properties |
|-------|---------|-----------|
| `service_status.overview_viewed` | User opens the service status page | `source`, `activeIncidentCount` |
| `service_status.service_selected` | User views a specific service | `serviceId`, `currentStatus` |
| `service_status.incident_viewed` | User views an incident detail | `incidentId`, `severity`, `status` |
| `service_status.subscribed` | User subscribes to updates | `serviceId`, `scope`, `channel` |
| `service_status.unsubscribed` | User unsubscribes | `serviceId` |
| `service_status.history_viewed` | User views incident history | `serviceId`, `dateRange` |
| `service_status.issue_reported` | User reports impact from the incident page | `incidentId`, `serviceId` |
| `service_status.search_used` | User searches for a service | `query`, `resultCount` |
