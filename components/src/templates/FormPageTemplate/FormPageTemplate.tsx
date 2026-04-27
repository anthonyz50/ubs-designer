/**
 * @module FormPageTemplate
 * @description Full-page form layout with PageHeader, breadcrumbs, sectioned form fields,
 * built-in validation display, and a sticky ActionBar.
 *
 * @example
 * ```tsx
 * <FormPageTemplate
 *   title="Create Account"
 *   subtitle="Fill in the details below"
 *   breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Create Account' }]}
 *   sections={[
 *     {
 *       title: 'Personal Details',
 *       fields: [
 *         { type: 'text', name: 'firstName', label: 'First Name', required: true },
 *         { type: 'email', name: 'email', label: 'Email', required: true },
 *       ],
 *     },
 *   ]}
 *   onSubmit={(data) => console.log(data)}
 *   onCancel={() => {}}
 * />
 * ```
 */
import React, { forwardRef, useState, useCallback, type FormEvent } from 'react';
import {
  PageHeader,
  SectionWrapper,
  ActionBar,
  Input,
  Select,
  Textarea,
  Checkbox,
  Alert,
  type PageHeaderBreadcrumb,
  type SelectOption,
} from '../../components';
import styles from './FormPageTemplate.module.css';

/** Supported field types for auto-rendering. */
export type FormFieldType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'select' | 'textarea' | 'checkbox';

/** A single form field configuration. */
export interface FormPageField {
  /** Field type. */
  type: FormFieldType;
  /** Unique field name (used as key and form data key). */
  name: string;
  /** Label text. */
  label: string;
  /** Placeholder text. */
  placeholder?: string;
  /** Whether the field is required. */
  required?: boolean;
  /** Helper text. */
  helperText?: string;
  /** Options for select fields. */
  options?: SelectOption[];
  /** Default value. */
  defaultValue?: string | boolean;
}

/** A section of form fields. */
export interface FormPageSection {
  /** Section title. */
  title: string;
  /** Optional section description. */
  description?: string;
  /** Fields within this section. */
  fields: FormPageField[];
}

export interface FormPageTemplateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  /** Page title. */
  title: string;
  /** Page subtitle. */
  subtitle?: string;
  /** Breadcrumb trail. */
  breadcrumbs?: PageHeaderBreadcrumb[];
  /** Form sections with auto-rendered fields. */
  sections: FormPageSection[];
  /** Callback with form data on submit. */
  onSubmit: (data: Record<string, string | boolean>) => void;
  /** Callback on cancel. */
  onCancel?: () => void;
  /** Whether the form is in a loading/submitting state. */
  loading?: boolean;
  /** Submit button label. @default 'Submit' */
  submitLabel?: string;
  /** Cancel button label. @default 'Cancel' */
  cancelLabel?: string;
}

/**
 * FormPageTemplate — full-page form layout with sections, validation, and sticky actions.
 */
export const FormPageTemplate = forwardRef<HTMLDivElement, FormPageTemplateProps>(
  (
    {
      title,
      subtitle,
      breadcrumbs,
      sections,
      onSubmit,
      onCancel,
      loading = false,
      submitLabel = 'Submit',
      cancelLabel = 'Cancel',
      className,
      ...rest
    },
    ref,
  ) => {
    const [formData, setFormData] = useState<Record<string, string | boolean>>(() => {
      const defaults: Record<string, string | boolean> = {};
      sections.forEach((section) => {
        section.fields.forEach((field) => {
          if (field.defaultValue !== undefined) {
            defaults[field.name] = field.defaultValue;
          } else {
            defaults[field.name] = field.type === 'checkbox' ? false : '';
          }
        });
      });
      return defaults;
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleChange = useCallback((name: string, value: string | boolean) => {
      setFormData((prev) => ({ ...prev, [name]: value }));
      // Clear field error on change
      setErrors((prev) => {
        if (prev[name]) {
          const next = { ...prev };
          delete next[name];
          return next;
        }
        return prev;
      });
    }, []);

    const validate = useCallback((): boolean => {
      const newErrors: Record<string, string> = {};
      sections.forEach((section) => {
        section.fields.forEach((field) => {
          if (field.required) {
            const value = formData[field.name];
            if (value === '' || value === undefined || value === false) {
              newErrors[field.name] = `${field.label} is required`;
            }
          }
          if (field.type === 'email' && formData[field.name]) {
            const emailValue = String(formData[field.name]);
            if (emailValue && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
              newErrors[field.name] = 'Please enter a valid email address';
            }
          }
        });
      });
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }, [sections, formData]);

    const handleSubmit = useCallback(
      (e: FormEvent) => {
        e.preventDefault();
        setSubmitError(null);
        if (validate()) {
          try {
            onSubmit(formData);
          } catch (err) {
            setSubmitError(err instanceof Error ? err.message : 'An error occurred');
          }
        }
      },
      [validate, onSubmit, formData],
    );

    const renderField = (field: FormPageField) => {
      const error = errors[field.name];

      switch (field.type) {
        case 'select':
          return (
            <Select
              key={field.name}
              label={field.label}
              options={field.options ?? []}
              value={String(formData[field.name] ?? '')}
              onChange={(e) => handleChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              error={error}
              helperText={field.helperText}
            />
          );

        case 'textarea':
          return (
            <Textarea
              key={field.name}
              label={field.label}
              value={String(formData[field.name] ?? '')}
              onChange={(e) => handleChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              error={error}
              helperText={field.helperText}
            />
          );

        case 'checkbox':
          return (
            <Checkbox
              key={field.name}
              label={field.label}
              checked={Boolean(formData[field.name])}
              onChange={(e) => handleChange(field.name, e.target.checked)}
            />
          );

        default:
          return (
            <Input
              key={field.name}
              type={field.type}
              label={field.label}
              value={String(formData[field.name] ?? '')}
              onChange={(e) => handleChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              error={error}
              helperText={field.helperText}
            />
          );
      }
    };

    const classes = [styles.formPage, className ?? ''].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} {...rest}>
        <PageHeader
          title={title}
          subtitle={subtitle}
          breadcrumbs={breadcrumbs}
          variant="impulse"
        />

        {submitError && (
          <div className={styles.alertWrapper}>
            <Alert variant="error">{submitError}</Alert>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          {sections.map((section, index) => (
            <SectionWrapper
              key={index}
              title={section.title}
              subtitle={section.description}
              padding="lg"
            >
              <div className={styles.fieldGrid}>
                {section.fields.map(renderField)}
              </div>
            </SectionWrapper>
          ))}

          <ActionBar
            primaryAction={{
              label: loading ? 'Submitting...' : submitLabel,
              onClick: () => {
                const form = document.querySelector(`.${styles.form}`) as HTMLFormElement | null;
                form?.requestSubmit();
              },
            }}
            secondaryAction={
              onCancel
                ? { label: cancelLabel, onClick: onCancel }
                : undefined
            }
            sticky
          />
        </form>
      </div>
    );
  },
);

FormPageTemplate.displayName = 'FormPageTemplate';
