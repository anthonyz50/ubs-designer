import { default as React } from 'react';

/** A single settings section. */
export interface SettingsSection {
    /** Section title (also used as tab label). */
    title: string;
    /** Optional section description. */
    description?: string;
    /** Section content. */
    content: React.ReactNode;
}
export interface SettingsTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Settings sections with tab navigation. */
    sections: SettingsSection[];
    /** Callback when save is clicked. */
    onSave: () => void;
    /** Callback when cancel is clicked. */
    onCancel?: () => void;
    /** Whether there are unsaved changes (shows the sticky action bar). */
    unsavedChanges?: boolean;
    /** Page title. @default 'Settings' */
    title?: string;
}
/**
 * SettingsTemplate — tabbed settings page with sidebar navigation and save/cancel bar.
 */
export declare const SettingsTemplate: React.ForwardRefExoticComponent<SettingsTemplateProps & React.RefAttributes<HTMLDivElement>>;
