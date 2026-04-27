import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  // ── Role switch ──────────────────────────────────────────────────
  it('has role="switch"', () => {
    render(<Toggle label="Dark mode" onChange={() => {}} />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  // ── aria-checked updates ─────────────────────────────────────────
  it('has aria-checked="false" when unchecked', () => {
    render(
      <Toggle label="Notifications" checked={false} onChange={() => {}} />,
    );
    expect(screen.getByRole('switch')).toHaveAttribute(
      'aria-checked',
      'false',
    );
  });

  it('has aria-checked="true" when checked', () => {
    render(
      <Toggle label="Notifications" checked={true} onChange={() => {}} />,
    );
    expect(screen.getByRole('switch')).toHaveAttribute(
      'aria-checked',
      'true',
    );
  });

  // ── Toggles on click ────────────────────────────────────────────
  it('calls onChange when clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Toggle label="Feature" onChange={onChange} />);
    await user.click(screen.getByRole('switch'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  // ── Disabled ─────────────────────────────────────────────────────
  it('is disabled when disabled=true', () => {
    render(<Toggle label="Locked" disabled onChange={() => {}} />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Toggle label="Locked" disabled onChange={onChange} />);
    await user.click(screen.getByRole('switch'));
    expect(onChange).not.toHaveBeenCalled();
  });

  // ── Label ────────────────────────────────────────────────────────
  it('renders the label text', () => {
    render(<Toggle label="Enable emails" onChange={() => {}} />);
    expect(screen.getByText('Enable emails')).toBeInTheDocument();
  });
});
