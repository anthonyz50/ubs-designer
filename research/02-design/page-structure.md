# UBS Page Structure and Setup

> Source: UBS Frontify Portal, Standard Basics > Page Layout > Structure and Setup

## Core Principle

The use of similar structures makes applications more uniform and predictable (easier to use) for users.

## Common Elements

1. **Masthead** (compulsory on all pages) — allows users access to the product content
2. **Tree navigation** (optional) — allows changing the subsection of a page
3. **Breadcrumbs** — helps navigate and provides links to previous pages
4. **Tabs** — allow changing a specific area of a page
5. **Footer** — mostly links to legal pages, external pages, contact and help
6. **Main content** — the primary content area

## Structure Layers

Because of the high density of information in applications, we use a light grey background. This creates clear structure and focal points.

| Layer | Colour | Variable |
|-------|--------|----------|
| Divider (1px) | Silver | `@ubs-silver` (#CCCCCC) |
| Secondary row | Gallery | `@ubs-gallery` (#EEEEEE) |
| Container panels | White | `@ubs-white` (#FFFFFF) |
| Stroke (1px, if required) | Alto | `@ubs-alto` (#D7D7D7) |
| Background | Alabaster | `@ubs-alabaster` (#FAFAFA) |

For publishing content (primarily images and text, not data, e.g. articles, product descriptions), use white as the background, like on ubs.com.

## Elements Order

1. **Start from the light grey background.** Place compulsory elements like Masthead. Plan your content with container panels.
2. **Organise functionalities** within your container panels. Place secondary elements.
3. **Consider using elevation panels** when you want users to focus on a specific task or piece of information.
4. **Organise functionalities** within your elevation panels.

Uses three levels of shadows for elevation panels (see Shadows).

## Page Alignment

- All application pages are **aligned left**
- The masthead stretches right to fill the browser window
- If a maximum page width is set, space to the right is left blank in the background colour
- This effect only visible when screen is wider than the maximum content width

## Do's and Don'ts

**Do:**
- Use container panels selectively, organising functionalities in bigger groups

**Don't:**
- Make too many small groups of elements in container panels (looks boxy)
- Use elevation panels for decoration (use them to gain users' focus on specific tasks)
