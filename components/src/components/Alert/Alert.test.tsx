import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Alert, type AlertVariant } from './Alert';

describe('Alert', () => {
  // ── All variants render with correct ARIA ────────────────────────
  const variants: AlertVariant[] = ['error', 'warning', 'success', 'info'];

  it.each(variants)('renders "%s" variant with role="alert"', (variant) => {
    render(<Alert variant={variant}>Message</Alert>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('error variant has aria-live="assertive"', () => {
    render(<Alert variant="error">Error!</Alert>);
    expect(screen.getByRole('alert')).toHaveAttribute(
      'aria-live',
      'assertive',
    );
  });

  it.each(['warning', 'success', 'info'] as const)(
    '"%s" variant has aria-live="polite"',
    (variant) => {
      render(<Alert variant={variant}>Message</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute(
        'aria-live',
        'polite',
      );
    },
  );

  it.each(variants)(
    '"%s" variant applies its CSS class',
    (variant) => {
      render(<Alert variant={variant}>Message</Alert>);
      expect(screen.getByRole('alert').className).toContain(variant);
    },
  );

  // ── Title ────────────────────────────────────────────────────────
  it('renders a title when provided', () => {
    render(<Alert title="Heads up">Details here</Alert>);
    expect(screen.getByText('Heads up')).toBeInTheDocument();
    expect(screen.getByText('Details here')).toBeInTheDocument();
  });

  // ── Dismissible ──────────────────────────────────────────────────
  it('shows a close button when dismissible=true', () => {
    render(<Alert dismissible>Dismissible</Alert>);
    expect(
      screen.getByRole('button', { name: 'Dismiss alert' }),
    ).toBeInTheDocument();
  });

  it('does not show a close button when dismissible=false', () => {
    render(<Alert>Not dismissible</Alert>);
    expect(
      screen.queryByRole('button', { name: 'Dismiss alert' }),
    ).not.toBeInTheDocument();
  });

  it('calls onDismiss and removes the alert when close is clicked', async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(
      <Alert dismissible onDismiss={onDismiss}>
        Bye
      </Alert>,
    );
    await user.click(screen.getByRole('button', { name: 'Dismiss alert' }));
    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
