import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { Button } from './Button';

describe('Button', () => {
  // ── Variant classes ──────────────────────────────────────────────
  it.each(['primary', 'secondary', 'outline', 'ghost'] as const)(
    'renders with the "%s" variant class',
    (variant) => {
      render(<Button variant={variant}>Click</Button>);
      const btn = screen.getByRole('button', { name: 'Click' });
      expect(btn.className).toContain(variant);
    },
  );

  // ── Sizes ────────────────────────────────────────────────────────
  it.each(['small', 'medium', 'large'] as const)(
    'renders with the "%s" size class',
    (size) => {
      render(<Button size={size}>Click</Button>);
      const btn = screen.getByRole('button', { name: 'Click' });
      expect(btn.className).toContain(size);
    },
  );

  // ── Loading ──────────────────────────────────────────────────────
  it('shows a loading spinner when loading=true', () => {
    render(<Button loading>Loading</Button>);
    const btn = screen.getByRole('button', { name: 'Loading' });
    expect(btn).toHaveAttribute('aria-busy', 'true');
    // Spinner SVG is rendered
    expect(btn.querySelector('svg')).toBeInTheDocument();
  });

  it('is disabled when loading=true', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole('button', { name: 'Loading' })).toBeDisabled();
  });

  // ── Disabled ─────────────────────────────────────────────────────
  it('is disabled when disabled=true', () => {
    render(<Button disabled>Nope</Button>);
    expect(screen.getByRole('button', { name: 'Nope' })).toBeDisabled();
  });

  it('sets aria-disabled when disabled', () => {
    render(<Button disabled>Nope</Button>);
    expect(screen.getByRole('button', { name: 'Nope' })).toHaveAttribute(
      'aria-disabled',
      'true',
    );
  });

  // ── Click handler ────────────────────────────────────────────────
  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Go</Button>);
    await user.click(screen.getByRole('button', { name: 'Go' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Go
      </Button>,
    );
    await user.click(screen.getByRole('button', { name: 'Go' }));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('does not call onClick when loading', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button loading onClick={onClick}>
        Go
      </Button>,
    );
    await user.click(screen.getByRole('button', { name: 'Go' }));
    expect(onClick).not.toHaveBeenCalled();
  });

  // ── Icon ─────────────────────────────────────────────────────────
  it('renders an icon element', () => {
    render(<Button icon={<span data-testid="icon">★</span>}>Star</Button>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('does not render the icon when loading', () => {
    render(
      <Button loading icon={<span data-testid="icon">★</span>}>
        Star
      </Button>,
    );
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });

  // ── Full width ───────────────────────────────────────────────────
  it('renders with fullWidth class', () => {
    render(<Button fullWidth>Wide</Button>);
    expect(screen.getByRole('button', { name: 'Wide' }).className).toContain(
      'fullWidth',
    );
  });

  // ── Ref forwarding ──────────────────────────────────────────────
  it('forwards ref to the button element', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.textContent).toContain('Ref');
  });

  // ── Default type ─────────────────────────────────────────────────
  it('has type="button" by default', () => {
    render(<Button>Submit</Button>);
    expect(screen.getByRole('button', { name: 'Submit' })).toHaveAttribute(
      'type',
      'button',
    );
  });
});
