import { default as React } from 'react';
import { PageHeaderBreadcrumb, SelectOption } from '../../components';

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
export declare const FormPageTemplate: React.ForwardRefExoticComponent<FormPageTemplateProps & React.RefAttributes<HTMLDivElement>>;
