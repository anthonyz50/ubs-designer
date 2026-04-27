import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Visual variant following UBS brand guidelines',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full-width button',
    },
    children: {
      control: 'text',
      description: 'Button label',
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ─── Core Variants ─────────────────────────────────────────

export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary Action' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary Action' },
};

export const Outline: Story = {
  args: { variant: 'outline', children: 'Outline Action' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Ghost Action' },
};

// ─── Sizes ─────────────────────────────────────────────────

export const Small: Story = {
  args: { size: 'small', children: 'Small' },
};

export const Medium: Story = {
  args: { size: 'medium', children: 'Medium' },
};

export const Large: Story = {
  args: { size: 'large', children: 'Large' },
};

// ─── States ────────────────────────────────────────────────

export const Loading: Story = {
  args: { loading: true, children: 'Processing...' },
};

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
};

export const FullWidth: Story = {
  args: { fullWidth: true, children: 'Full Width Button' },
};

// ─── With Icon ─────────────────────────────────────────────

export const WithIcon: Story = {
  args: {
    children: 'Download',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 12L3 7h3V2h4v5h3L8 12zM3 14h10v1H3v-1z" />
      </svg>
    ),
  },
};

// ─── All Variants Gallery ──────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button>Default</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};
