/**
 * @module LoginTemplate
 * @description Centred login page with UBS branding. Card layout on pastel background
 * with logo, email/password inputs, submit button, and error alert.
 *
 * @example
 * ```tsx
 * <LoginTemplate
 *   onLogin={(email, password) => auth.signIn(email, password)}
 *   onForgotPassword={() => navigate('/forgot')}
 *   title="Welcome back"
 *   subtitle="Sign in to your account"
 *   error={loginError}
 * />
 * ```
 */
import React, { forwardRef, useState, useCallback, type FormEvent } from 'react';
import {
  Logo,
  Card,
  Input,
  Button,
  Alert,
  Typography,
} from '../../components';
import styles from './LoginTemplate.module.css';

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
export const LoginTemplate = forwardRef<HTMLDivElement, LoginTemplateProps>(
  (
    {
      onLogin,
      onForgotPassword,
      logo,
      title = 'Sign In',
      subtitle,
      error,
      loading = false,
      className,
      ...rest
    },
    ref,
  ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [localErrors, setLocalErrors] = useState<{ email?: string; password?: string }>({});

    const validate = useCallback((): boolean => {
      const errors: { email?: string; password?: string } = {};
      if (!email.trim()) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = 'Please enter a valid email address';
      }
      if (!password) {
        errors.password = 'Password is required';
      }
      setLocalErrors(errors);
      return Object.keys(errors).length === 0;
    }, [email, password]);

    const handleSubmit = useCallback(
      (e: FormEvent) => {
        e.preventDefault();
        if (validate()) {
          onLogin(email, password);
        }
      },
      [validate, onLogin, email, password],
    );

    const classes = [styles.loginPage, className ?? ''].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} {...rest}>
        <div className={styles.loginCard}>
          <Card padding="large">
            {/* Logo */}
            <div className={styles.logoWrapper}>
              {logo ?? <Logo variant="full" colour="black" size={100} />}
            </div>

            {/* Title */}
            <div className={styles.titleBlock}>
              <Typography variant="keyline">{title}</Typography>
              {subtitle && (
                <Typography variant="smallCopyText">{subtitle}</Typography>
              )}
            </div>

            {/* Error alert */}
            {error && (
              <div className={styles.errorAlert}>
                <Alert variant="error">{error}</Alert>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className={styles.form}>
              <Input
                type="email"
                label="Email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (localErrors.email) {
                    setLocalErrors((prev) => ({ ...prev, email: undefined }));
                  }
                }}
                error={localErrors.email}
                required
              />
              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (localErrors.password) {
                    setLocalErrors((prev) => ({ ...prev, password: undefined }));
                  }
                }}
                error={localErrors.password}
                required
              />
              <Button
                variant="primary"
                size="large"
                type="submit"
                disabled={loading}
                className={styles.submitButton}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            {/* Forgot password link */}
            {onForgotPassword && (
              <div className={styles.forgotLink}>
                <button
                  type="button"
                  className={styles.forgotButton}
                  onClick={onForgotPassword}
                >
                  Forgot password?
                </button>
              </div>
            )}
          </Card>
        </div>
      </div>
    );
  },
);

LoginTemplate.displayName = 'LoginTemplate';
