# UBS Patterns & Layouts

> Source: UBS Frontify Portal, Patterns & Layouts (Document 592)

---

## Patterns

### Journey Notifications

Notifications to help users understand the current state and progress within an application.

#### 1. Empty States

Content not available for known reasons (e.g. user doesn't have credit cards yet).

**Characteristics:**
- Light, natural colours and icons
- Can include illustrations from official UBS libraries
- Communicate the reason for existence with concise messaging
- Include suggested actions to guide users forward

**Guidelines:**
- Explain **why** the state is empty (e.g. "You don't have any credit cards yet")
- Provide actionable next steps: "Create new", "Order debit card", "Get started"
- Pick a suitable icon or illustration from the official UBS libraries
- Tone should be helpful and encouraging, not alarming

#### 2. Service/Offering Interruption

Full-page empty states for loading failures, errors, or scheduled downtime.

**Examples:** Error 501, Error 404, scheduled maintenance

**Guidelines:**
- Inform about scheduled maintenance, downtime, or apologise for unexpected issues
- Enable recovery with alternative routes or redirects
  - "Refresh page"
  - "Call me back"
  - "Send message to support"
- **Ensure navigation always remains visible** so users can navigate away
- Can combine explanatory messaging with recovery actions
- Tone should be apologetic and solution-oriented

#### 3. Notifications Panel

All system-generated messages in one place, in chronological order.

**Anatomy:**
- Icon in header/navigation bar (typically a bell icon)
- Dropdown reveals the notification list
- Can include a Small Alert badge for unread count
- Each entry contains: icon on grey background + message text + available actions
- Clicking an entry opens the specific page or triggers the relevant action

**Guidelines:**
- Keep notifications chronologically ordered (newest first)
- Provide clear actions for each notification
- Use the Small Alert badge to indicate unread count
- Allow users to mark notifications as read or dismiss them

### System Notifications
*(Separate page in Frontify, not yet crawled in detail)*

### Widget
*(Separate page in Frontify, not yet crawled in detail)*

---

## Layouts

### Dashboard Layout

Interactive, information-rich UI for data display (charts, graphs, tables).

#### Anatomy

| # | Element | Required |
|---|---------|----------|
| 1 | Masthead | Yes (logo and navigation) |
| 2 | Page title | Yes (short, clear headline) |
| 3 | Widget | Yes (topic-focused data visualisation tile) |
| 4 | To-do list | Optional (dynamic links to urgent tasks) |
| 5 | Shortcut widget | Optional (editable links to relevant sections, max 8) |
| 6 | Suggestion teaser | Optional (ads/feedback widget, max 2) |
| 7 | Footer | Yes |

#### Grid

**12-column layout** with an **8:4 ratio**:
- 8 columns for main content
- 4 columns for sidebar

#### Widget Types

| Type | Description |
|------|-------------|
| **Total widget** | Compact, unique layout. Maximum 1 per dashboard |
| **List widget** | Customisable and expandable list of items |
| **Double widget** | Full content width, for extensive information |
| **Single widget** | Compact, showing only the most relevant information |

#### To-do List Guidelines
- Include only relevant and important tasks
- One "To do" list per application (centralised)
- Avoid duplicate tasks
- Task disappears when completed
- Keep the list focused on actionable items

#### Shortcut Widget Guidelines
- Contextual navigation, **NOT** 1st/2nd level main navigation
- Avoid duplicating the Mega drop-down navigation (unless genuinely helpful for the user journey)
- Maximum 8 links
- User can edit/customise their shortcuts

---

### Basic Page Layout

Content-rich, last-instance page for detailed information. The **majority of web app pages** use this layout.

#### Anatomy

| # | Element | Required |
|---|---------|----------|
| 1 | Masthead | Yes (logo and navigation) |
| 2 | Page title | Yes (short and precise) |
| 3 | Main content | Yes |
| 4 | Quick links | Optional (not customisable, personalised per customer segment, max 8) |
| 5 | Suggestion teaser | Optional (max 2, only after primary content) |
| 6 | Footer | Yes |

#### Grid

**12-column layout** with a **9:3 ratio**:
- 9 columns for main content
- 3 columns for sidebar

#### Main Content Types

| Type | Description |
|------|-------------|
| Single content block | One continuous content area |
| Multiple sections of panel lists | Segmented content in collapsible panels |
| Single infinite list of panels | Scrollable list of panel items |

#### Quick Links
- Contextual navigation, **NOT** main navigation
- Use the `LinkList` component
- Maximum 8 links
- Not customisable by the user (personalised by customer segment)

#### Suggestion Teaser
- Only placed **after** primary content, never in the main content area
- Maximum 2 teasers per page
- Should not distract from the primary content

---

## Layout Comparison

| Feature | Dashboard | Basic Page |
|---------|-----------|------------|
| Grid ratio | 8:4 | 9:3 |
| Primary use | Data visualisation | Detailed content |
| Widgets | Yes (multiple types) | No |
| To-do list | Optional | No |
| Quick links | No (uses shortcuts) | Optional |
| Suggestion teasers | Max 2 | Max 2 |
| Customisable sidebar | Yes (shortcuts) | No (personalised) |

---

## Implementation Notes

- Both layouts use a 12-column grid system
- Masthead and Footer are consistent across all layout types
- Dashboard widgets should be implemented as reusable, configurable components
- Empty states should always provide a path forward for the user
- Notification panels should support real-time updates where possible
- Ensure all layouts are responsive and adapt gracefully to different screen sizes
