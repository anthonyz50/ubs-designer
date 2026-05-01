# Support Journey Patterns

## When to Use

Support journeys guide users through finding help, resolving issues, or escalating problems. Use this pattern for help centres, FAQ sections, troubleshooting flows, and contact/escalation paths.

## Layout Structure

### Tiered support model
Support follows a progressive escalation model. Users start with self-service and escalate only when needed.

```
┌─────────────────────────────────────────┐
│ Tier 1: Search + Knowledge base         │
│ (Self-service: articles, FAQs)          │
├─────────────────────────────────────────┤
│ Tier 2: Guided troubleshooting          │
│ (Decision trees, diagnostic steps)      │
├─────────────────────────────────────────┤
│ Tier 3: Contact support                 │
│ (Chat, ticket, phone)                   │
└─────────────────────────────────────────┘
```

### Support landing page
```
┌─────────────────────────────────────────┐
│ Search bar (prominent, centred)         │
│ "How can we help you?"                  │
├──────────┬──────────┬───────────────────┤
│ Category │ Category │ Category          │
│ card     │ card     │ card              │
├──────────┴──────────┴───────────────────┤
│ Popular articles                        │
│ • Article link                          │
│ • Article link                          │
│ • Article link                          │
├─────────────────────────────────────────┤
│ Still need help? [Contact support]      │
└─────────────────────────────────────────┘
```

## Key Components

### Search
- Full-width search bar with prominent placement
- Auto-suggest as the user types (debounced at 300ms)
- Search results show article title, snippet, and category
- "No results" state suggests alternative queries and offers escalation

### Category cards
- Icon + title + brief description
- 3-6 categories maximum on the landing page
- Click leads to a filtered article list

### Article view
- Title, last updated date, reading time
- Breadcrumb navigation back to category and support home
- Table of contents for long articles
- "Was this helpful?" feedback widget at the bottom
- Related articles section
- "Still need help?" CTA linking to contact options

### Troubleshooting wizard
- Step-by-step decision tree
- Progress indicator showing current step
- Each step: question + 2-4 answer options
- Reaching a resolution shows the solution with confirmation
- Reaching a dead end offers escalation to human support

### Contact options
- Available channels (chat, email, phone) with current availability status
- Expected response time for each channel
- Pre-filled context from the user's journey (what they searched, what articles they viewed)
- Business hours displayed clearly

## Interaction Flow

1. User arrives at support page with a problem
2. Search is the first interaction point; user types their issue
3. Results surface relevant articles and troubleshooting guides
4. User reads an article or follows a troubleshooting wizard
5. If resolved: user confirms via "Was this helpful?" feedback
6. If unresolved: user escalates via "Contact support" with context preserved
7. Support ticket or chat pre-populates with the user's journey context

## States

### Loading
- Search results show skeleton list items
- Article content shows skeleton text blocks
- Category cards show skeleton card placeholders

### Empty
- No search results: "We couldn't find articles matching '[query]'. Try different keywords or [contact support]."
- No articles in category: "We're adding content to this section. [Contact support] for help now."

### Error
- Search failure: "Search is temporarily unavailable. Browse categories below or [contact support]."
- Article load failure: "We couldn't load this article. [Try again] or [contact support]."

### Success
- Troubleshooting resolution: "This should resolve your issue. [Mark as resolved] or [I still need help]."
- Ticket submitted: "Your request has been submitted. Reference: #12345. We'll respond within 4 hours."

## Responsive Behaviour

| Breakpoint | Behaviour |
|-----------|-----------|
| Desktop (1024px+) | 3-column category grid, sidebar for related content |
| Tablet (768-1023px) | 2-column category grid, related content below |
| Mobile (below 768px) | Single column, categories as list, sticky "Contact support" button |

- Search bar remains full-width and prominent at all breakpoints
- Contact options use a bottom sheet on mobile
- Troubleshooting wizard is full-width at all sizes

## Accessibility

- Search input has a clear label ("Search for help")
- Search results are announced via `aria-live="polite"` as they update
- Troubleshooting wizard steps use `aria-current="step"` for the active step
- Contact channel availability uses text, not colour alone
- Articles have proper heading hierarchy for screen reader navigation
- "Was this helpful?" uses radio buttons or clearly labelled buttons, not thumbs icons alone

## Example Structure

```
<main aria-label="Support centre">
  <header>
    <h1>How can we help you?</h1>
    <SearchInput
      label="Search for help"
      placeholder="Describe your issue..."
      onSearch={handleSearch}
    />
  </header>

  <section aria-label="Browse by category">
    <h2>Browse topics</h2>
    <CategoryGrid>
      <CategoryCard icon="settings" title="Account & access" count={24} />
      <CategoryCard icon="shield" title="Security" count={18} />
      <CategoryCard icon="file" title="Requests & approvals" count={31} />
      <CategoryCard icon="chart" title="Reports & data" count={15} />
      <CategoryCard icon="tool" title="Technical issues" count={22} />
      <CategoryCard icon="bell" title="Notifications" count={9} />
    </CategoryGrid>
  </section>

  <section aria-label="Popular articles">
    <h2>Popular articles</h2>
    <ArticleList items={popularArticles} limit={5} />
  </section>

  <section aria-label="Contact support">
    <h2>Still need help?</h2>
    <p>Our support team is available Monday to Friday, 08:00 to 18:00 CET.</p>
    <ContactOptions>
      <ContactOption channel="chat" status="online" responseTime="< 5 min" />
      <ContactOption channel="email" status="available" responseTime="< 4 hours" />
      <ContactOption channel="phone" status="available" number="+41 44 234 56 78" />
    </ContactOptions>
  </section>
</main>
```

## Do

- Make search the most prominent element on the support page
- Preserve the user's journey context when escalating to human support
- Show expected response times for each contact channel
- Offer self-service resolution before escalation
- Include "Was this helpful?" feedback on every article

## Don't

- Hide the contact option behind multiple clicks
- Require users to repeat information they already provided
- Show only a phone number without hours of operation
- Leave troubleshooting dead ends without an escalation path
- Auto-close or redirect support tickets without user confirmation
