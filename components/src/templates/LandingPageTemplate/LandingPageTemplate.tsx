/**
 * @module LandingPageTemplate
 * @description Full-page landing page layout with hero section, features grid,
 * statistics, testimonials, and UBS branded footer.
 *
 * @example
 * ```tsx
 * <LandingPageTemplate
 *   hero={{
 *     title: 'Your Wealth, Your Way',
 *     subtitle: 'Personalised investment solutions built on 160 years of expertise.',
 *     cta: { label: 'Get Started', onClick: () => {} },
 *   }}
 *   features={[
 *     { icon: <ShieldIcon />, title: 'Security', description: 'Bank-grade security.' },
 *   ]}
 *   stats={[
 *     { label: 'Assets Under Management', value: '$4.2T', size: 'lg' },
 *   ]}
 * />
 * ```
 */
import React, { forwardRef } from 'react';
import {
  Logo,
  Button,
  Typography,
  Grid,
  Stat,
  type StatProps,
} from '../../components';
import { Footer, type FooterLinkGroup } from '../components/Footer';
import styles from './LandingPageTemplate.module.css';

/** Hero section configuration. */
export interface LandingHero {
  /** Hero headline (rendered at keyline size). */
  title: string;
  /** Hero subtitle (rendered at infoline size). */
  subtitle?: string;
  /** CTA button configuration. */
  cta: {
    label: string;
    onClick: () => void;
  };
  /** Optional background image URL. */
  backgroundImage?: string;
}

/** A single feature card. */
export interface LandingFeature {
  /** Icon element. */
  icon: React.ReactNode;
  /** Feature title. */
  title: string;
  /** Feature description. */
  description: string;
}

/** A testimonial quote. */
export interface LandingTestimonial {
  /** Quote text. */
  quote: string;
  /** Author name. */
  author: string;
  /** Author role or company. */
  role?: string;
}

/** Footer configuration. */
export interface LandingFooterConfig {
  /** Link groups for the footer. */
  links?: FooterLinkGroup[];
  /** Copyright text. */
  copyright?: string;
}

export interface LandingPageTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Hero section configuration. */
  hero: LandingHero;
  /** Feature cards displayed in a grid. */
  features?: LandingFeature[];
  /** Testimonial quotes. */
  testimonials?: LandingTestimonial[];
  /** Statistics section using Stat components. */
  stats?: StatProps[];
  /** Footer configuration. */
  footer?: LandingFooterConfig;
}

/**
 * LandingPageTemplate — full-page landing with hero, features, stats, and footer.
 */
export const LandingPageTemplate = forwardRef<HTMLDivElement, LandingPageTemplateProps>(
  (
    {
      hero,
      features = [],
      testimonials = [],
      stats = [],
      footer,
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = [styles.landingPage, className ?? ''].filter(Boolean).join(' ');

    const heroStyle: React.CSSProperties = hero.backgroundImage
      ? {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${hero.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }
      : {};

    const heroTextColour = hero.backgroundImage ? 'white' : 'black';

    return (
      <div ref={ref} className={classes} {...rest}>
        {/* ─── Hero Section ─── */}
        <section
          className={`${styles.hero} ${hero.backgroundImage ? styles.heroWithImage : ''}`}
          style={heroStyle}
        >
          <div className={styles.heroInner}>
            <Logo
              variant="full"
              colour={heroTextColour === 'white' ? 'white' : 'black'}
              size={100}
            />
            <h1 className={`${styles.heroTitle} ${hero.backgroundImage ? styles.heroTitleLight : ''}`}>
              {hero.title}
            </h1>
            {hero.subtitle && (
              <p className={`${styles.heroSubtitle} ${hero.backgroundImage ? styles.heroSubtitleLight : ''}`}>
                {hero.subtitle}
              </p>
            )}
            <Button
              variant="primary"
              size="large"
              onClick={hero.cta.onClick}
            >
              {hero.cta.label}
            </Button>
          </div>
        </section>

        {/* ─── Features Section ─── */}
        {features.length > 0 && (
          <section className={styles.featuresSection} aria-label="Features">
            <div className={styles.sectionInner}>
              <Grid columns={{ mobile: 1, tablet: 2, desktop: 3 }} gap="large">
                {features.map((feature, index) => (
                  <div key={index} className={styles.featureCard}>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <Typography variant="subheadline2">{feature.title}</Typography>
                    <Typography variant="smallCopyText">{feature.description}</Typography>
                  </div>
                ))}
              </Grid>
            </div>
          </section>
        )}

        {/* ─── Stats Section ─── */}
        {stats.length > 0 && (
          <section className={styles.statsSection} aria-label="Key statistics">
            <div className={styles.sectionInner}>
              <Grid columns={{ mobile: 1, tablet: 2, desktop: 4 }} gap="medium">
                {stats.map((stat, index) => (
                  <div key={index} className={styles.statCard}>
                    <Stat {...stat} />
                  </div>
                ))}
              </Grid>
            </div>
          </section>
        )}

        {/* ─── Testimonials Section ─── */}
        {testimonials.length > 0 && (
          <section className={styles.testimonialsSection} aria-label="Testimonials">
            <div className={styles.sectionInner}>
              <Grid columns={{ mobile: 1, tablet: 2 }} gap="large">
                {testimonials.map((testimonial, index) => (
                  <blockquote key={index} className={styles.testimonialCard}>
                    <p className={styles.testimonialQuote}>
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <footer className={styles.testimonialAuthor}>
                      <Typography variant="copyText" weight="bold">
                        {testimonial.author}
                      </Typography>
                      {testimonial.role && (
                        <Typography variant="smallCopyText">{testimonial.role}</Typography>
                      )}
                    </footer>
                  </blockquote>
                ))}
              </Grid>
            </div>
          </section>
        )}

        {/* ─── Footer ─── */}
        <Footer
          links={footer?.links}
          copyright={footer?.copyright ?? `© ${new Date().getFullYear()} UBS Group AG. All rights reserved.`}
          showLogo
        />
      </div>
    );
  },
);

LandingPageTemplate.displayName = 'LandingPageTemplate';
