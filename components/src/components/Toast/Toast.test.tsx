import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToastProvider, useToast } from './Toast';

// Helper component that triggers toasts via the hook
function ToastTrigger({
  message = 'Hello toast',
  variant,
  duration,
}: {
  message?: string;
  variant?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}) {
  const toast = useToast();
  return (
    <button
      onClick={() => toast.show({ message, variant, duration })}
    >
      Show Toast
    </button>
  );
}

describe('Toast', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  // ── Provider renders children ────────────────────────────────────
  it('ToastProvider renders its children', () => {
    render(
      <ToastProvider>
        <div data-testid="child">App content</div>
      </ToastProvider>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  // ── show() creates a toast ───────────────────────────────────────
  it('creates a toast when show() is called', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(
      <ToastProvider>
        <ToastTrigger message="Test notification" duration={0} />
      </ToastProvider>,
    );
    await user.click(screen.getByText('Show Toast'));
    expect(screen.getByText('Test notification')).toBeInTheDocument();
  });

  // ── Toast has role="alert" ───────────────────────────────────────
  it('toast has role="alert"', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(
      <ToastProvider>
        <ToastTrigger duration={0} />
      </ToastProvider>,
    );
    await user.click(screen.getByText('Show Toast'));
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  // ── Auto-dismisses ──────────────────────────────────────────────
  it('auto-dismisses after the specified duration', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(
      <ToastProvider>
        <ToastTrigger message="Disappearing" duration={1000} />
      </ToastProvider>,
    );
    await user.click(screen.getByText('Show Toast'));
    expect(screen.getByText('Disappearing')).toBeInTheDocument();

    // Advance past duration + exit animation (200ms)
    act(() => {
      vi.advanceTimersByTime(1500);
    });

    await waitFor(() => {
      expect(screen.queryByText('Disappearing')).not.toBeInTheDocument();
    });
  });

  // ── Dismiss button ──────────────────────────────────────────────
  it('dismiss button removes the toast', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(
      <ToastProvider>
        <ToastTrigger message="Closable" duration={0} />
      </ToastProvider>,
    );
    await user.click(screen.getByText('Show Toast'));
    expect(screen.getByText('Closable')).toBeInTheDocument();

    await user.click(
      screen.getByRole('button', { name: 'Dismiss notification' }),
    );

    // Wait for exit animation
    act(() => {
      vi.advanceTimersByTime(300);
    });

    await waitFor(() => {
      expect(screen.queryByText('Closable')).not.toBeInTheDocument();
    });
  });

  // ── Throws without provider ──────────────────────────────────────
  it('useToast throws when used outside ToastProvider', () => {
    const ErrorComponent = () => {
      useToast();
      return null;
    };
    expect(() => render(<ErrorComponent />)).toThrow(
      'useToast must be used within a <ToastProvider>',
    );
  });
});
