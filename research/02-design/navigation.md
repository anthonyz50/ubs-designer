# UBS Navigation — Full Specification

> Source: UBS Frontify Portal, Standard Basics > Page Layout > Navigation

## Core Principle

Navigation is the act of users moving between sections of an application to complete a specific task. Affordance can be achieved through dedicated navigation components or by embedding navigation behaviour into content.

## Flow Types

### 1. Parallel Navigation
Moving between sections at the **same context level**. Each section is independent.

- Usually the primary navigation of the application
- Provides access to all positions in the same hierarchy level

**Components used:**
- Masthead — primary navigation
- Tabs — switching context in containers
- Segmented Controls — navigation in forms and containers

### 2. Hierarchical Navigation
Drilling **down or up** between contexts using parent-child relations.

- Moving downward limits context based on user choices
- Moving upward reverts contexts (more navigation routes)
- Can be embedded into standard components (Buttons, Links)

**Components used:**
- Tree navigation — left-hand navigation and menu lists
- Breadcrumbs — positioning users in hierarchy levels
- Links — quick access to specific subpages

### 3. Directional Navigation
Switching between same-level sections in a **structured sequence**.

- Used for linear processes where steps depend on each other
- Usually forward direction to complete a task; backwards possible for corrections

**Components used:**
- Process navigation — linear and sequential processes
- Buttons — moving between steps
- Carousels (WIP) — pagination and onboarding

## Navigation Levels

### Global Level
- Reserved for main product features
- Always accessible and consistent in the application
- **Mandatory** for all UBS applications
- Typically contains only one (top) level of navigation
- Uses the **Masthead** component

### Local Level
- Relates to a chosen context of the application
- Can change depending on user's current position
- **Optional**

Both levels can coexist within one screen. Positioning must be persistent across the whole application.

## Guidelines

### Accessibility
- Users must always have the possibility to move between screens from any place
- Position navigation items by level (global or local) according to purpose
- Allow navigation through different input methods, including keyboard
- Combine navigation items with proper headings structure
- Match source code to design hierarchy

### Sense of Place
- Reflect current position using appropriate interface states (selected, disabled)
- Implement breadcrumbs for complex structures
- Give instant and appropriate feedback (screen transitions, loading states, progress bars)
- Allow users to go back if they get lost

### Structure
- Limit navigation items per level to minimum (if more than 10, add another hierarchy level)
- Sort by relevance to current context or by most common user behaviour
- Sort alphabetically only when users know what they're looking for
- For complex apps, consider letting users customise navigation
- Place common items in dedicated navigation components; keep consistency across the whole application
