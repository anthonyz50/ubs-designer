import { default as React } from 'react';

export interface LoginTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Callback with email and password on form submit. */
    onLogin: (email: string, password: string) => void;
    /** Callback for "Forgot password?" link. */
    onForgotPassword?: () => void;
    /** Custom logo element. Defaults to UBS Logo. */
    logo?: React.ReactNode;
    /** Login card title. @default 'Sign In' */
    title?: string;
    /** Login card subtitle. */
    subtitle?: string;
    /** Error message displayed as an alert above the form. */
    error?: string;
    /** Whether the form is in a loading/submitting state. */
    loading?: boolean;
}
/**
 * LoginTemplate — centred login card on pastel background with UBS branding.
 */
export declare const LoginTemplate: React.ForwardRefExoticComponent<LoginTemplateProps & React.RefAttributes<HTMLDivElement>>;
