import type { Meta, StoryObj } from '@storybook/react-vite';
import { TradingIndicator } from './TradingIndicator';

const meta: Meta<typeof TradingIndicator> = {
  title: 'Data Display/TradingIndicator',
  component: TradingIndicator,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', step: 0.01 },
      description: 'Numeric value. Sign determines colour direction.',
    },
    region: {
      control: 'select',
      options: ['emea', 'us', 'apac'],
      description: 'Region determines colour mapping. APAC reverses green/red.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Display size',
    },
    decimals: {
      control: { type: 'number', min: 0, max: 6 },
      description: 'Number of decimal places',
    },
    showArrow: {
      control: 'boolean',
      description: 'Show directional arrow',
    },
    showSign: {
      control: 'boolean',
      description: 'Show + prefix for positive values',
    },
    asPercentage: {
      control: 'boolean',
      description: 'Show as percentage',
    },
  },
  args: {
    value: 1.25,
    region: 'emea',
    size: 'md',
    decimals: 2,
    showArrow: true,
    showSign: true,
    asPercentage: false,
  },
};

export default meta;
type Story = StoryObj<typeof TradingIndicator>;

// ─── Positive / Negative ───────────────────────────────────

export const Positive: Story = {
  args: { value: 2.34 },
};

export const Negative: Story = {
  args: { value: -1.56 },
};

export const Neutral: Story = {
  args: { value: 0 },
};

// ─── As Percentage ─────────────────────────────────────────

export const PositivePercentage: Story = {
  args: { value: 3.72, asPercentage: true },
};

export const NegativePercentage: Story = {
  args: { value: -0.45, asPercentage: true },
};

// ─── Sizes ─────────────────────────────────────────────────

export const Small: Story = {
  args: { value: 1.25, size: 'sm' },
};

export const MediumSize: Story = {
  name: 'Medium',
  args: { value: 1.25, size: 'md' },
};

export const Large: Story = {
  args: { value: 1.25, size: 'lg' },
};

// ─── EMEA vs APAC Reversal ─────────────────────────────────

export const EMEAvsAPAC: Story = {
  name: 'EMEA vs APAC Regional Reversal',
  render: () => (
    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 14 }}>
      <p style={{ marginBottom: 16, color: '#404040' }}>
        <strong>UBS mandatory rule:</strong> In APAC markets, red = positive and green = negative (the opposite of EMEA/US).
      </p>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #CCCABC' }}>
            <th style={{ textAlign: 'left', padding: '8px 16px' }}>Value</th>
            <th style={{ textAlign: 'left', padding: '8px 16px' }}>EMEA</th>
            <th style={{ textAlign: 'left', padding: '8px 16px' }}>APAC</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ECEBE4' }}>
            <td style={{ padding: '8px 16px' }}>+2.34%</td>
            <td style={{ padding: '8px 16px' }}>
              <TradingIndicator value={2.34} region="emea" asPercentage />
            </td>
            <td style={{ padding: '8px 16px' }}>
              <TradingIndicator value={2.34} region="apac" asPercentage />
            </td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ECEBE4' }}>
            <td style={{ padding: '8px 16px' }}>-1.56%</td>
            <td style={{ padding: '8px 16px' }}>
              <TradingIndicator value={-1.56} region="emea" asPercentage />
            </td>
            <td style={{ padding: '8px 16px' }}>
              <TradingIndicator value={-1.56} region="apac" asPercentage />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '8px 16px' }}>0.00%</td>
            <td style={{ padding: '8px 16px' }}>
              <TradingIndicator value={0} region="emea" asPercentage />
            </td>
            <td style={{ padding: '8px 16px' }}>
              <TradingIndicator value={0} region="apac" asPercentage />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

// ─── Without Arrow / Sign ──────────────────────────────────

export const NoArrow: Story = {
  args: { value: 1.25, showArrow: false },
};

export const NoSign: Story = {
  args: { value: 1.25, showSign: false },
};

// ─── All Sizes Gallery ─────────────────────────────────────

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <TradingIndicator value={1.25} size="sm" asPercentage />
        <p style={{ fontFamily: 'Arial', fontSize: 11, color: '#7A7870', marginTop: 4 }}>sm</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <TradingIndicator value={1.25} size="md" asPercentage />
        <p style={{ fontFamily: 'Arial', fontSize: 11, color: '#7A7870', marginTop: 4 }}>md</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <TradingIndicator value={1.25} size="lg" asPercentage />
        <p style={{ fontFamily: 'Arial', fontSize: 11, color: '#7A7870', marginTop: 4 }}>lg</p>
      </div>
    </div>
  ),
};
