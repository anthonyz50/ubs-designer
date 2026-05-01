/**
 * @module Article
 * @description Content article card/block following UBS brand guidelines.
 *
 * Displays article content with image, title, excerpt, and metadata.
 * Supports card, horizontal, and featured layout variants.
 *
 * @example
 * ```tsx
 * <Article
 *   title="Market outlook Q4 2024"
 *   excerpt="Our global investment team shares their perspectives on key trends."
 *   image="/images/market.jpg"
 *   author="UBS Research"
 *   date="2024-10-15"
 *   category="Insights"
 *   href="/articles/market-outlook"
 *   variant="card"
 * />
 * ```
 */
import React, { forwardRef } from 'react';
import styles from './Article.module.css';

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
const Article = forwardRef<HTMLElement, ArticleProps>(
  (
    {
      title,
      excerpt,
      image,
      author,
      date,
      category,
      href,
      variant = 'card',
      className,
      ...rest
    },
    ref,
  ) => {
    const rootClass = [
      styles.root,
      styles[variant],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const hasMeta = author || date || category;

    const content = (
      <>
        {image && (
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={image}
              alt=""
              loading="lazy"
            />
          </div>
        )}
        <div className={styles.body}>
          {category && (
            <span className={styles.category}>{category}</span>
          )}
          <h3 className={styles.title}>{title}</h3>
          {excerpt && (
            <p className={styles.excerpt}>{excerpt}</p>
          )}
          {hasMeta && (
            <div className={styles.meta}>
              {author && <span className={styles.author}>{author}</span>}
              {author && date && (
                <span className={styles.separator} aria-hidden="true">
                  ·
                </span>
              )}
              {date && <time className={styles.date}>{date}</time>}
            </div>
          )}
        </div>
      </>
    );

    if (href) {
      return (
        <article ref={ref} className={rootClass} {...rest}>
          <a className={styles.link} href={href}>
            {content}
          </a>
        </article>
      );
    }

    return (
      <article ref={ref} className={rootClass} {...rest}>
        {content}
      </article>
    );
  },
);

Article.displayName = 'Article';

export { Article };
