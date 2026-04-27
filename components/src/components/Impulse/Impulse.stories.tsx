import type { Meta, StoryObj } from '@storybook/react-vite';
import { Impulse, type ImpulseFormat } from './Impulse';
import { Typography } from '../Typography/Typography';

const meta: Meta<typeof Impulse> = {
  title: 'Layout/Impulse',
  component: Impulse,
  tags: ['autodocs'],
  argTypes: {
    format: {
      control: 'select',
      options: ['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'],
      description: 'ISO format determines line width and spacing',
    },
  },
  args: {
    format: 'A4',
  },
};

export default meta;
type Story = StoryObj<typeof Impulse>;

// ─── Default ───────────────────────────────────────────────

export const Default: Story = {
  args: {
    children: (
      <Typography variant="leadText1">
        Breaking through complexity to deliver clarity.
      </Typography>
    ),
  },
};

// ─── ISO Formats ───────────────────────────────────────────

export const FormatA0: Story = {
  args: {
    format: 'A0',
    children: <Typography variant="keyline">A0 — largest impulse line</Typography>,
  },
};

export const FormatA4: Story = {
  args: {
    format: 'A4',
    children: <Typography variant="leadText1">A4 — standard document format</Typography>,
  },
};

export const FormatA8: Story = {
  args: {
    format: 'A8',
    children: <Typography variant="copyText">A8 — smallest impulse line</Typography>,
  },
};

// ─── All Formats Gallery ───────────────────────────────────

export const AllFormats: Story = {
  render: () => {
    const formats: ImpulseFormat[] = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {formats.map((f) => (
          <div key={f}>
            <Typography variant="captions" colour="#7A7870" style={{ marginBottom: 4 }}>
              Format {f}
            </Typography>
            <Impulse format={f}>
              <Typography variant="leadText2">
                The UBS impulse line scales with the ISO format.
              </Typography>
            </Impulse>
          </div>
        ))}
      </div>
    );
  },
};

// ─── With Different Content ────────────────────────────────

export const WithKeyline: Story = {
  args: {
    format: 'A3',
    children: (
      <div>
        <Typography variant="keyline">Global Outlook</Typography>
        <Typography variant="infoline">Wealth Management Insights, Q1 2025</Typography>
      </div>
    ),
  },
};

export const WithQuote: Story = {
  args: {
    format: 'A4',
    children: (
      <Typography variant="quotes">
        "In a world of uncertainty, the value of trusted advice has never been greater."
      </Typography>
    ),
  },
};
