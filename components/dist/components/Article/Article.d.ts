import { default as React } from 'react';

/** Visual layout variant of the article. */
export type ArticleVariant = 'card' | 'horizontal' | 'featured';
/**
 * Props for the {@link Article} component.
 */
export interface ArticleProps extends React.HTMLAttributes<HTMLElement> {
    /** Article headline. */
    title: string;
    /** Short excerpt or summary text. */
    excerpt?: string;
    /** Image URL for the article thumbnail/hero. */
    image?: string;
    /** Author name. */
    author?: string;
    /** Publication date string (displayed as-is). */
    date?: string;
    /** Category label. */
    category?: string;
    /** Link URL. When provided, the article becomes a clickable link. */
    href?: string;
    /** Layout variant. @default 'card' */
    variant?: ArticleVariant;
}
/**
 * Article card component for displaying content previews.
 *
 * Renders as an `<article>` element with proper semantic structure.
 * When `href` is provided, the entire card is wrapped in a link.
 *
 * @example
 * ```tsx
 * <Article
 *   title="Sustainable investing"
 *   excerpt="How ESG factors drive long-term value."
 *   category="ESG"
 *   variant="horizontal"
 * />
 * ```
 */
declare const Article: React.ForwardRefExoticComponent<ArticleProps & React.RefAttributes<HTMLElement>>;
export { Article };
