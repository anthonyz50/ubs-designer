import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'red', 'success', 'warning'],
      description: 'Colour variant mapped to UBS colour tokens',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Badge size',
    },
    dot: {
      control: 'boolean',
      description: 'Dot-only indicator with no text',
    },
  },
  args: {
    variant: 'default',
    size: 'md',
    children: 'Badge',
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// ─── Variants ──────────────────────────────────────────────

export const Default: Story = {
  args: { variant: 'default', children: 'Default' },
};

export const Red: Story = {
  args: { variant: 'red', children: 'Urgent' },
};

export const Success: Story = {
  args: { variant: 'success', children: 'Active' },
};

export const Warning: Story = {
  args: { variant: 'warning', children: 'Pending' },
};

// ─── Sizes ─────────────────────────────────────────────────

export const Small: Story = {
  args: { size: 'sm', children: 'Small' },
};

export const MediumSize: Story = {
  name: 'Medium',
  args: { size: 'md', children: 'Medium' },
};

// ─── Dot Mode ──────────────────────────────────────────────

export const DotDefault: Story = {
  args: { dot: true, variant: 'default' },
};

export const DotRed: Story = {
  args: { dot: true, variant: 'red' },
};

export const DotSuccess: Story = {
  args: { dot: true, variant: 'success' },
};

export const DotWarning: Story = {
  args: { dot: true, variant: 'warning' },
};

// ─── Gallery ───────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="red">Urgent</Badge>
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Pending</Badge>
    </div>
  ),
};

export const AllDots: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      {(['default', 'red', 'success', 'warning'] as const).map((v) => (
        <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Badge variant={v} dot />
          <span style={{ fontFamily: 'Arial', fontSize: 14, color: '#404040' }}>{v}</span>
        </div>
      ))}
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontFamily: 'Arial', fontSize: 14 }}>Portfolio Status</span>
        <Badge variant="success">Active</Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontFamily: 'Arial', fontSize: 14 }}>Notifications</span>
        <Badge variant="red">3</Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontFamily: 'Arial', fontSize: 14 }}>KYC Review</span>
        <Badge variant="warning">Due</Badge>
      </div>
    </div>
  ),
};
