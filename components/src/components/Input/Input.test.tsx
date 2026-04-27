import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
  // ── Label + input linked ─────────────────────────────────────────
  it('renders a label linked to the input by htmlFor/id', () => {
    render(<Input label="Email" />);
    const input = screen.getByLabelText('Email');
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('INPUT');
  });

  // ── Error message with aria-describedby ──────────────────────────
  it('shows error message with aria-describedby', () => {
    render(<Input label="Name" error="Required" />);
    const input = screen.getByLabelText('Name');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    const errorEl = screen.getByText('Required');
    expect(errorEl).toHaveAttribute('role', 'alert');
    // aria-describedby links to the error element
    const describedBy = input.getAttribute('aria-describedby');
    expect(describedBy).toBeTruthy();
    expect(errorEl.id).toBeTruthy();
    expect(describedBy).toContain(errorEl.id);
  });

  // ── Helper text ──────────────────────────────────────────────────
  it('shows helper text when no error', () => {
    render(<Input label="Username" helperText="Pick a unique name" />);
    expect(screen.getByText('Pick a unique name')).toBeInTheDocument();
  });

  it('error takes precedence over helper text', () => {
    render(
      <Input label="Username" helperText="Pick a name" error="Already taken" />,
    );
    expect(screen.getByText('Already taken')).toBeInTheDocument();
    expect(screen.queryByText('Pick a name')).not.toBeInTheDocument();
  });

  // ── Disabled ─────────────────────────────────────────────────────
  it('renders as disabled', () => {
    render(<Input label="Disabled" disabled />);
    expect(screen.getByLabelText('Disabled')).toBeDisabled();
  });

  // ── onChange ─────────────────────────────────────────────────────
  it('calls onChange when typing', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Input label="Search" onChange={onChange} />);
    await user.type(screen.getByLabelText('Search'), 'hello');
    expect(onChange).toHaveBeenCalledTimes(5); // one per character
  });

  // ── Clearable ────────────────────────────────────────────────────
  it('shows a clear button when clearable and has value', () => {
    render(
      <Input label="Query" clearable value="test" onChange={() => {}} />,
    );
    expect(
      screen.getByRole('button', { name: 'Clear input' }),
    ).toBeInTheDocument();
  });

  it('calls onClear when clear button is clicked', async () => {
    const user = userEvent.setup();
    const onClear = vi.fn();
    render(
      <Input
        label="Query"
        clearable
        value="test"
        onChange={() => {}}
        onClear={onClear}
      />,
    );
    await user.click(screen.getByRole('button', { name: 'Clear input' }));
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it('does not show clear button when value is empty', () => {
    render(<Input label="Query" clearable value="" onChange={() => {}} />);
    expect(
      screen.queryByRole('button', { name: 'Clear input' }),
    ).not.toBeInTheDocument();
  });

  // ── Sizes ────────────────────────────────────────────────────────
  it.each(['sm', 'md', 'lg'] as const)('renders size "%s"', (size) => {
    render(<Input label="Field" size={size} />);
    const input = screen.getByLabelText('Field');
    expect(input.className).toContain(size);
  });

  // ── Required ─────────────────────────────────────────────────────
  it('marks the input as required', () => {
    render(<Input label="Email" required />);
    expect(screen.getByLabelText(/Email/)).toBeRequired();
  });
});
