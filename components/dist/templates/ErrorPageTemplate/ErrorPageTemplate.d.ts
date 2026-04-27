import { default as React } from 'react';

/** Supported error codes. */
export type ErrorCode = 404 | 500 | 403;
export interface ErrorPageTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
    /** HTTP error code. */
    code: ErrorCode;
    /** Custom title. Falls back to a default per code. */
    title?: string;
    /** Custom message. Falls back to a default per code. */
    message?: string;
    /** Label for the action button. @default 'Go Home' */
    actionLabel?: string;
    /** Action button click handler. */
    onAction?: () => void;
}
/**
 * ErrorPageTemplate — centred error page with large code, message, and action.
 */
export declare const ErrorPageTemplate: React.ForwardRefExoticComponent<ErrorPageTemplateProps & React.RefAttributes<HTMLDivElement>>;
