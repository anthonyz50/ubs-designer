/**
 * @module ErrorPageTemplate
 * @description Centred error page with large error code, EmptyState pattern,
 * UBS illustration placeholder, and action button.
 *
 * @example
 * ```tsx
 * <ErrorPageTemplate
 *   code={404}
 *   title="Page not found"
 *   message="The page you're looking for doesn't exist or has been moved."
 *   actionLabel="Go Home"
 *   onAction={() => navigate('/')}
 * />
 * ```
 */
import React, { forwardRef } from 'react';
import {
  Logo,
  EmptyState,
  Button,
} from '../../components';
import styles from './ErrorPageTemplate.module.css';

/** Supported error codes. */
export type ErrorCode = 404 | 500 | 403;

/** Default messages per error code. */
const DEFAULT_TITLES: Record<ErrorCode, string> = {
  404: 'Page not found',
  500: 'Something went wrong',
  403: 'Access denied',
};

const DEFAULT_MESSAGES: Record<ErrorCode, string> = {
  404: 'The page you are looking for does not exist or has been moved.',
  500: 'We encountered an unexpected error. Please try again later.',
  403: 'You do not have permission to access this page.',
};

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
export const ErrorPageTemplate = forwardRef<HTMLDivElement, ErrorPageTemplateProps>(
  (
    {
      code,
      title,
      message,
      actionLabel = 'Go Home',
      onAction,
      className,
      ...rest
    },
    ref,
  ) => {
    const resolvedTitle = title ?? DEFAULT_TITLES[code];
    const resolvedMessage = message ?? DEFAULT_MESSAGES[code];

    const classes = [styles.errorPage, className ?? ''].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} {...rest}>
        <div className={styles.content}>
          {/* Logo at top */}
          <div className={styles.logoWrapper}>
            <Logo variant="full" colour="black" size={80} />
          </div>

          {/* Large error code */}
          <div className={styles.errorCode} aria-hidden="true">
            {code}
          </div>

          {/* Empty state content */}
          <EmptyState
            title={resolvedTitle}
            description={resolvedMessage}
            action={
              onAction
                ? { label: actionLabel, onClick: onAction }
                : undefined
            }
          />
        </div>
      </div>
    );
  },
);

ErrorPageTemplate.displayName = 'ErrorPageTemplate';
