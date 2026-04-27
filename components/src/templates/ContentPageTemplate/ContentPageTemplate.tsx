/**
 * @module ContentPageTemplate
 * @description Full-page content layout with optional hero image, impulse PageHeader,
 * two-column layout (content + sidebar), and typography presets.
 *
 * @example
 * ```tsx
 * <ContentPageTemplate
 *   title="Wealth Management Insights"
 *   subtitle="Q4 2025 Market Commentary"
 *   heroImage="/images/hero.jpg"
 *   breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Insights' }]}
 *   content={<article><p>Market commentary content...</p></article>}
 *   sidebar={<div>Related links sidebar</div>}
 *   relatedItems={[
 *     { title: 'Q3 Commentary', href: '/q3', description: 'Previous quarter analysis' },
 *   ]}
 * />
 * ```
 */
import React, { forwardRef } from 'react';
import {
  PageHeader,
  MovingFrame,
  Card,
  Typography,
  type PageHeaderBreadcrumb,
} from '../../components';
import styles from './ContentPageTemplate.module.css';

/** Related content item. */
export interface ContentRelatedItem {
  /** Item title. */
  title: string;
  /** Link URL. */
  href: string;
  /** Short description. */
  description?: string;
}

export interface ContentPageTemplateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  /** Page title. */
  title: string;
  /** Page subtitle. */
  subtitle?: string;
  /** Optional hero image URL for the full-width hero section. */
  heroImage?: string;
  /** Breadcrumb trail. */
  breadcrumbs?: PageHeaderBreadcrumb[];
  /** Main content area (ReactNode). */
  content: React.ReactNode;
  /** Optional sidebar content. */
  sidebar?: React.ReactNode;
  /** Related items displayed below the main content. */
  relatedItems?: ContentRelatedItem[];
}

/**
 * ContentPageTemplate — content-focused layout with hero, sidebar, and related items.
 */
export const ContentPageTemplate = forwardRef<HTMLDivElement, ContentPageTemplateProps>(
  (
    {
      title,
      subtitle,
      heroImage,
      breadcrumbs,
      content,
      sidebar,
      relatedItems,
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = [styles.contentPage, className ?? ''].filter(Boolean).join(' ');
    const hasHero = Boolean(heroImage);
    const hasSidebar = Boolean(sidebar);

    return (
      <div ref={ref} className={classes} {...rest}>
        {/* ─── Hero Section ─── */}
        {hasHero && (
          <div className={styles.heroSection}>
            <MovingFrame variant="transparent">
              <img
                src={heroImage}
                alt=""
                className={styles.heroImage}
                role="presentation"
              />
            </MovingFrame>
          </div>
        )}

        {/* ─── Page Header ─── */}
        <div className={styles.headerWrapper}>
          <PageHeader
            title={title}
            subtitle={subtitle}
            breadcrumbs={breadcrumbs}
            variant="impulse"
          />
        </div>

        {/* ─── Body: Content + Sidebar ─── */}
        <div className={`${styles.body} ${hasSidebar ? styles.bodyWithSidebar : ''}`}>
          <main className={styles.mainContent}>
            <div className={styles.typographyContent}>
              {content}
            </div>
          </main>

          {hasSidebar && (
            <aside className={styles.sidebar} aria-label="Sidebar">
              {sidebar}
            </aside>
          )}
        </div>

        {/* ─── Related Items ─── */}
        {relatedItems && relatedItems.length > 0 && (
          <section className={styles.relatedSection} aria-label="Related content">
            <div className={styles.relatedInner}>
              <Typography variant="subheadline1">Related</Typography>
              <div className={styles.relatedGrid}>
                {relatedItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={styles.relatedLink}
                  >
                    <Card padding="medium">
                      <Typography variant="subheadline2">{item.title}</Typography>
                      {item.description && (
                        <Typography variant="smallCopyText">{item.description}</Typography>
                      )}
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    );
  },
);

ContentPageTemplate.displayName = 'ContentPageTemplate';
