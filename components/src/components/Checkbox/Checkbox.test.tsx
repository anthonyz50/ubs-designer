import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  // ── Toggles checked on click ─────────────────────────────────────
  it('calls onChange when clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox label="Accept" onChange={onChange} />);
    await user.click(screen.getByLabelText('Accept'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('renders checked state', () => {
    render(<Checkbox label="Accept" checked onChange={() => {}} />);
    expect(screen.getByLabelText('Accept')).toBeChecked();
  });

  it('renders unchecked state', () => {
    render(<Checkbox label="Accept" checked={false} onChange={() => {}} />);
    expect(screen.getByLabelText('Accept')).not.toBeChecked();
  });

  // ── Indeterminate state ──────────────────────────────────────────
  it('sets indeterminate property on the input', () => {
    render(
      <Checkbox label="Select all" indeterminate onChange={() => {}} />,
    );
    const input = screen.getByLabelText('Select all') as HTMLInputElement;
    expect(input.indeterminate).toBe(true);
  });

  // ── Disabled ─────────────────────────────────────────────────────
  it('is disabled when disabled=true', () => {
    render(<Checkbox label="Disabled" disabled />);
    expect(screen.getByLabelText('Disabled')).toBeDisabled();
  });

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox label="Disabled" disabled onChange={onChange} />);
    await user.click(screen.getByLabelText('Disabled'));
    expect(onChange).not.toHaveBeenCalled();
  });

  // ── Label is clickable ───────────────────────────────────────────
  it('toggles via the label text', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox label="Terms" onChange={onChange} />);
    await user.click(screen.getByText('Terms'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  // ── Error ────────────────────────────────────────────────────────
  it('shows error message', () => {
    render(
      <Checkbox label="Accept" error="You must accept" onChange={() => {}} />,
    );
    expect(screen.getByText('You must accept')).toBeInTheDocument();
  });
});
