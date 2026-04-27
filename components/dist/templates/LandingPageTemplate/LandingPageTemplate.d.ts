import { default as React } from 'react';
import { StatProps } from '../../components';
import { FooterLinkGroup } from '../components/Footer';

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
export declare const LandingPageTemplate: React.ForwardRefExoticComponent<LandingPageTemplateProps & React.RefAttributes<HTMLDivElement>>;
