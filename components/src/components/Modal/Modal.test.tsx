import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';

describe('Modal', () => {
  // ── Renders when open, hidden when closed ────────────────────────
  it('renders content when isOpen=true', async () => {
    render(
      <Modal isOpen onClose={() => {}} title="Test Modal">
        <p>Modal content</p>
      </Modal>,
    );
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when isOpen=false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}} title="Hidden">
        <p>Hidden content</p>
      </Modal>,
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  // ── ARIA attributes ──────────────────────────────────────────────
  it('has role="dialog" and aria-modal="true"', async () => {
    render(
      <Modal isOpen onClose={() => {}} title="ARIA Test">
        Content
      </Modal>,
    );
    await waitFor(() => {
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-modal', 'true');
    });
  });

  it('links title via aria-labelledby', async () => {
    render(
      <Modal isOpen onClose={() => {}} title="My Title">
        Content
      </Modal>,
    );
    await waitFor(() => {
      const dialog = screen.getByRole('dialog');
      const labelledBy = dialog.getAttribute('aria-labelledby');
      expect(labelledBy).toBeTruthy();
      const titleEl = document.getElementById(labelledBy!);
      expect(titleEl).toBeInTheDocument();
      expect(titleEl?.textContent).toBe('My Title');
    });
  });

  // ── Closes on backdrop click ─────────────────────────────────────
  it('calls onClose when backdrop is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal isOpen onClose={onClose} title="Backdrop Test">
        Content
      </Modal>,
    );
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    // Click the backdrop (parent of the dialog)
    const dialog = screen.getByRole('dialog');
    const backdrop = dialog.parentElement!;
    await user.click(backdrop);
    expect(onClose).toHaveBeenCalled();
  });

  // ── Closes on Escape ─────────────────────────────────────────────
  it('calls onClose when Escape is pressed', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal isOpen onClose={onClose} title="Escape Test">
        Content
      </Modal>,
    );
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalled();
  });

  it('does not close on Escape when closeOnEscape=false', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal isOpen onClose={onClose} closeOnEscape={false} title="No Escape">
        Content
      </Modal>,
    );
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    await user.keyboard('{Escape}');
    expect(onClose).not.toHaveBeenCalled();
  });

  // ── Close button ─────────────────────────────────────────────────
  it('has a close button that calls onClose', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal isOpen onClose={onClose} title="Close Btn">
        Content
      </Modal>,
    );
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: 'Close dialog' }),
      ).toBeInTheDocument();
    });
    await user.click(screen.getByRole('button', { name: 'Close dialog' }));
    expect(onClose).toHaveBeenCalled();
  });
});
