import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pastel1', 'pastel2', 'gray'],
      description: 'Background variant from UBS colour palette',
    },
    padding: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      description: 'Internal padding',
    },
    hoverable: {
      control: 'boolean',
      description: 'Interactive hover effect',
    },
  },
  args: {
    variant: 'default',
    padding: 'medium',
    children: 'Card content goes here.',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// ─── Background Variants ───────────────────────────────────

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default card on white (#FFFFFF) background.',
  },
};

export const Pastel1: Story = {
  args: {
    variant: 'pastel1',
    children: 'Pastel I card on #ECEBE4 background.',
  },
};

export const Pastel2: Story = {
  args: {
    variant: 'pastel2',
    children: 'Pastel II card on #F5F0E1 background.',
  },
};

export const GrayVariant: Story = {
  name: 'Gray',
  args: {
    variant: 'gray',
    children: 'Gray card on Gray I (#CCCABC) background.',
  },
};

// ─── Header & Footer Slots ─────────────────────────────────

export const WithHeader: Story = {
  args: {
    header: <Typography variant="subheadline3">Portfolio Overview</Typography>,
    children: 'Your portfolio has grown 12.4% this quarter, outperforming the benchmark by 2.1 percentage points.',
  },
};

export const WithHeaderAndFooter: Story = {
  args: {
    header: <Typography variant="subheadline3">Action Required</Typography>,
    footer: (
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="primary" size="small">Approve</Button>
        <Button variant="outline" size="small">Decline</Button>
      </div>
    ),
    children: 'Your annual review documents are ready for signature. Please review and approve by 31 March 2025.',
  },
};

// ─── Hoverable ─────────────────────────────────────────────

export const Hoverable: Story = {
  args: {
    hoverable: true,
    header: <Typography variant="subheadline3">Interactive Card</Typography>,
    children: 'Hover over this card to see the effect. Suitable for clickable cards in dashboards.',
  },
};

// ─── Padding Sizes ─────────────────────────────────────────

export const PaddingNone: Story = {
  args: { padding: 'none', variant: 'pastel1', children: 'No padding' },
};

export const PaddingSmall: Story = {
  args: { padding: 'small', variant: 'pastel1', children: 'Small padding' },
};

export const PaddingMedium: Story = {
  args: { padding: 'medium', variant: 'pastel1', children: 'Medium padding' },
};

export const PaddingLarge: Story = {
  args: { padding: 'large', variant: 'pastel1', children: 'Large padding' },
};

// ─── All Variants Gallery ──────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
      {(['default', 'pastel1', 'pastel2', 'gray'] as const).map((v) => (
        <Card key={v} variant={v} header={<Typography variant="subheadline3">{v}</Typography>}>
          Card with {v} background variant.
        </Card>
      ))}
    </div>
  ),
};
