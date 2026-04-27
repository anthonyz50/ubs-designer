/**
 * @module templates
 * @description UBS Design System — Page template barrel exports.
 *
 * Pre-built full-page layouts composing existing components for one-shot UI generation.
 */
export { Sidebar } from './components/Sidebar';
export type { SidebarProps, SidebarItem } from './components/Sidebar';
export { Footer } from './components/Footer';
export type { FooterProps, FooterLinkGroup, FooterLink } from './components/Footer';
export { DashboardTemplate } from './DashboardTemplate';
export type { DashboardTemplateProps, DashboardUser, DashboardActivity, DashboardNotifications, } from './DashboardTemplate';
export { FormPageTemplate } from './FormPageTemplate';
export type { FormPageTemplateProps, FormPageSection, FormPageField, FormFieldType, } from './FormPageTemplate';
export { ContentPageTemplate } from './ContentPageTemplate';
export type { ContentPageTemplateProps, ContentRelatedItem, } from './ContentPageTemplate';
export { LandingPageTemplate } from './LandingPageTemplate';
export type { LandingPageTemplateProps, LandingHero, LandingFeature, LandingTestimonial, LandingFooterConfig, } from './LandingPageTemplate';
export { TablePageTemplate } from './TablePageTemplate';
export type { TablePageTemplateProps, TablePageFilter, TablePageBulkAction, } from './TablePageTemplate';
export { LoginTemplate } from './LoginTemplate';
export type { LoginTemplateProps } from './LoginTemplate';
export { ErrorPageTemplate } from './ErrorPageTemplate';
export type { ErrorPageTemplateProps, ErrorCode } from './ErrorPageTemplate';
export { SettingsTemplate } from './SettingsTemplate';
export type { SettingsTemplateProps, SettingsSection } from './SettingsTemplate';
