/**
 * @module SettingsTemplate
 * @description Settings page layout with vertical sidebar navigation (tabs),
 * sectioned content area, and sticky save/cancel action bar.
 *
 * @example
 * ```tsx
 * <SettingsTemplate
 *   sections={[
 *     {
 *       title: 'Profile',
 *       description: 'Manage your personal information',
 *       content: <ProfileForm />,
 *     },
 *     {
 *       title: 'Notifications',
 *       description: 'Configure alert preferences',
 *       content: <NotificationSettings />,
 *     },
 *   ]}
 *   onSave={() => saveSettings()}
 *   unsavedChanges={hasChanges}
 * />
 * ```
 */
import React, { forwardRef, useState, useCallback, useMemo } from 'react';
import {
  Tabs,
  SectionWrapper,
  ActionBar,
  Typography,
  type TabItem,
} from '../../components';
import styles from './SettingsTemplate.module.css';

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
export const SettingsTemplate = forwardRef<HTMLDivElement, SettingsTemplateProps>(
  (
    {
      sections,
      onSave,
      onCancel,
      unsavedChanges = false,
      title = 'Settings',
      className,
      ...rest
    },
    ref,
  ) => {
    const [activeSection, setActiveSection] = useState(
      sections.length > 0 ? sections[0].title : '',
    );

    const tabs: TabItem[] = useMemo(
      () =>
        sections.map((section) => ({
          label: section.title,
          value: section.title,
        })),
      [sections],
    );

    const currentSection = useMemo(
      () => sections.find((s) => s.title === activeSection) ?? sections[0],
      [sections, activeSection],
    );

    const handleCancel = useCallback(() => {
      if (onCancel) {
        onCancel();
      }
    }, [onCancel]);

    const classes = [styles.settingsPage, className ?? ''].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} {...rest}>
        {/* ─── Page Title ─── */}
        <div className={styles.header}>
          <Typography variant="keyline">{title}</Typography>
        </div>

        {/* ─── Body: Sidebar Tabs + Content ─── */}
        <div className={styles.body}>
          {/* Sidebar with vertical tabs */}
          <div className={styles.sidebarNav}>
            <Tabs
              tabs={tabs}
              activeTab={activeSection}
              onChange={setActiveSection}
              variant="contained"
            />
          </div>

          {/* Content Area */}
          <main className={styles.content}>
            {currentSection && (
              <SectionWrapper
                title={currentSection.title}
                subtitle={currentSection.description}
                padding="lg"
              >
                {currentSection.content}
              </SectionWrapper>
            )}
          </main>
        </div>

        {/* ─── Sticky Action Bar (when unsaved changes) ─── */}
        {unsavedChanges && (
          <ActionBar
            primaryAction={{ label: 'Save Changes', onClick: onSave }}
            secondaryAction={
              onCancel
                ? { label: 'Cancel', onClick: handleCancel }
                : undefined
            }
            sticky
          />
        )}
      </div>
    );
  },
);

SettingsTemplate.displayName = 'SettingsTemplate';
