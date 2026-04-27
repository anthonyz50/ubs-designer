import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, type TabItem } from './Tabs';

const tabs: TabItem[] = [
  { label: 'Overview', value: 'overview' },
  { label: 'Details', value: 'details' },
  { label: 'Settings', value: 'settings', disabled: true },
];

describe('Tabs', () => {
  // ── Correct roles ────────────────────────────────────────────────
  it('renders a tablist role container', () => {
    render(<Tabs tabs={tabs} activeTab="overview" onChange={() => {}} />);
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('renders each tab with role="tab"', () => {
    render(<Tabs tabs={tabs} activeTab="overview" onChange={() => {}} />);
    const tabElements = screen.getAllByRole('tab');
    expect(tabElements).toHaveLength(3);
  });

  // ── Active tab has aria-selected ─────────────────────────────────
  it('active tab has aria-selected="true"', () => {
    render(<Tabs tabs={tabs} activeTab="overview" onChange={() => {}} />);
    const overviewTab = screen.getByRole('tab', { name: 'Overview' });
    expect(overviewTab).toHaveAttribute('aria-selected', 'true');
  });

  it('inactive tabs have aria-selected="false"', () => {
    render(<Tabs tabs={tabs} activeTab="overview" onChange={() => {}} />);
    const detailsTab = screen.getByRole('tab', { name: 'Details' });
    expect(detailsTab).toHaveAttribute('aria-selected', 'false');
  });

  // ── Calls onChange ───────────────────────────────────────────────
  it('calls onChange with the tab value when clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Tabs tabs={tabs} activeTab="overview" onChange={onChange} />);
    await user.click(screen.getByRole('tab', { name: 'Details' }));
    expect(onChange).toHaveBeenCalledWith('details');
  });

  // ── Disabled tab not clickable ───────────────────────────────────
  it('disabled tab does not fire onChange', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Tabs tabs={tabs} activeTab="overview" onChange={onChange} />);
    const settingsTab = screen.getByRole('tab', { name: 'Settings' });
    expect(settingsTab).toBeDisabled();
    await user.click(settingsTab);
    expect(onChange).not.toHaveBeenCalled();
  });

  // ── Active tab has tabIndex 0, others have -1 ───────────────────
  it('active tab has tabIndex 0, inactive have -1', () => {
    render(<Tabs tabs={tabs} activeTab="overview" onChange={() => {}} />);
    expect(screen.getByRole('tab', { name: 'Overview' })).toHaveAttribute(
      'tabindex',
      '0',
    );
    expect(screen.getByRole('tab', { name: 'Details' })).toHaveAttribute(
      'tabindex',
      '-1',
    );
  });

  // ── aria-controls ────────────────────────────────────────────────
  it('each tab has aria-controls linking to its panel', () => {
    render(<Tabs tabs={tabs} activeTab="overview" onChange={() => {}} />);
    const overviewTab = screen.getByRole('tab', { name: 'Overview' });
    expect(overviewTab).toHaveAttribute('aria-controls', 'tabpanel-overview');
  });
});
