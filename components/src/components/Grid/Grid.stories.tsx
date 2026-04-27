import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid } from './Grid';
import { Card } from '../Card/Card';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'object',
      description: 'Number of columns (number or responsive object)',
    },
    gap: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      description: 'Gap between grid items',
    },
  },
  args: {
    gap: 'medium',
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const DemoCard = ({ label }: { label: string }) => (
  <Card variant="pastel1" padding="small">
    <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 14 }}>{label}</span>
  </Card>
);

const items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);

// ─── Column Counts ─────────────────────────────────────────

export const TwoColumns: Story = {
  render: (args) => (
    <Grid {...args} columns={2}>
      {items.slice(0, 6).map((item) => <DemoCard key={item} label={item} />)}
    </Grid>
  ),
};

export const ThreeColumns: Story = {
  render: (args) => (
    <Grid {...args} columns={3}>
      {items.slice(0, 9).map((item) => <DemoCard key={item} label={item} />)}
    </Grid>
  ),
};

export const FourColumns: Story = {
  render: (args) => (
    <Grid {...args} columns={4}>
      {items.map((item) => <DemoCard key={item} label={item} />)}
    </Grid>
  ),
};

// ─── Responsive ────────────────────────────────────────────

export const Responsive: Story = {
  args: {
    columns: { mobile: 1, tablet: 2, desktop: 3, wide: 4 },
  },
  render: (args) => (
    <Grid {...args}>
      {items.map((item) => <DemoCard key={item} label={item} />)}
    </Grid>
  ),
};

export const ResponsiveTwoToFour: Story = {
  name: 'Responsive 2→4',
  args: {
    columns: { mobile: 1, tablet: 2, desktop: 3, wide: 4 },
  },
  render: (args) => (
    <Grid {...args}>
      {items.slice(0, 8).map((item) => <DemoCard key={item} label={item} />)}
    </Grid>
  ),
};

// ─── Gap Sizes ─────────────────────────────────────────────

export const GapNone: Story = {
  render: () => (
    <Grid columns={3} gap="none">
      {items.slice(0, 6).map((item) => <DemoCard key={item} label={item} />)}
    </Grid>
  ),
};

export const GapSmall: Story = {
  render: () => (
    <Grid columns={3} gap="small">
      {items.slice(0, 6).map((item) => <DemoCard key={item} label={item} />)}
    </Grid>
  ),
};

export const GapMedium: Story = {
  render: () => (
    <Grid columns={3} gap="medium">
      {items.slice(0, 6).map((item) => <DemoCard key={item} label={item} />)}
    </Grid>
  ),
};

export const GapLarge: Story = {
  render: () => (
    <Grid columns={3} gap="large">
      {items.slice(0, 6).map((item) => <DemoCard key={item} label={item} />)}
    </Grid>
  ),
};

// ─── Dashboard Example ─────────────────────────────────────

export const DashboardLayout: Story = {
  render: () => (
    <Grid columns={{ mobile: 1, tablet: 2, desktop: 3 }} gap="medium">
      <Card variant="default" header={<strong>Total Assets</strong>}>CHF 2,450,000</Card>
      <Card variant="pastel1" header={<strong>YTD Return</strong>}>+12.4%</Card>
      <Card variant="pastel2" header={<strong>Risk Rating</strong>}>Moderate</Card>
      <Card variant="default" header={<strong>Cash Position</strong>}>CHF 350,000</Card>
      <Card variant="gray" header={<strong>Next Review</strong>}>15 April 2025</Card>
      <Card variant="default" header={<strong>Open Orders</strong>}>3 pending</Card>
    </Grid>
  ),
};
