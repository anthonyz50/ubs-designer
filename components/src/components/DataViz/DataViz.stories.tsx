import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataViz, type ChartDataPoint } from './DataViz';

const portfolioData: ChartDataPoint[] = [
  { label: 'Equities', value: 45 },
  { label: 'Fixed Income', value: 25 },
  { label: 'Alternatives', value: 15 },
  { label: 'Cash', value: 10 },
  { label: 'Real Estate', value: 5 },
];

const quarterlyData: ChartDataPoint[] = [
  { label: 'Q1', value: 82 },
  { label: 'Q2', value: 96 },
  { label: 'Q3', value: 110 },
  { label: 'Q4', value: 105 },
];

const monthlyData: ChartDataPoint[] = [
  { label: 'Jan', value: 100 },
  { label: 'Feb', value: 105 },
  { label: 'Mar', value: 98 },
  { label: 'Apr', value: 112 },
  { label: 'May', value: 108 },
  { label: 'Jun', value: 120 },
];

const meta: Meta<typeof DataViz> = {
  title: 'Data Display/DataViz',
  component: DataViz,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['donut', 'bar', 'line'],
      description: 'Chart type. No pie chart (UBS prefers donut).',
    },
    colourSequence: {
      control: 'select',
      options: ['monochrome', 'polychrome', 'multichrome', 'complex'],
      description: 'Colour sequence mode',
    },
    region: {
      control: 'select',
      options: ['emea', 'apac', 'us'],
      description: 'Trading region for colour direction',
    },
    highlightIndex: {
      control: { type: 'number', min: -1, max: 10 },
      description: 'Index of data point to highlight',
    },
    showLegend: {
      control: 'boolean',
      description: 'Show legend',
    },
    insight: {
      control: 'text',
      description: 'Insight text shown with red arrow',
    },
    width: {
      control: { type: 'number', min: 100, max: 800 },
      description: 'Chart width in pixels',
    },
    height: {
      control: { type: 'number', min: 100, max: 600 },
      description: 'Chart height in pixels',
    },
  },
  args: {
    type: 'donut',
    colourSequence: 'multichrome',
    showLegend: true,
    data: portfolioData,
  },
};

export default meta;
type Story = StoryObj<typeof DataViz>;

// ─── Donut Charts ──────────────────────────────────────────

export const Donut: Story = {
  args: {
    type: 'donut',
    data: portfolioData,
    width: 300,
    height: 300,
  },
};

export const DonutWithHighlight: Story = {
  args: {
    type: 'donut',
    data: portfolioData,
    highlightIndex: 0,
    width: 300,
    height: 300,
  },
};

export const DonutWithCenterContent: Story = {
  args: {
    type: 'donut',
    data: portfolioData,
    width: 300,
    height: 300,
    centerContent: (
      <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ fontSize: 24, fontWeight: 700 }}>100%</div>
        <div style={{ fontSize: 12, color: '#7A7870' }}>Allocated</div>
      </div>
    ),
  },
};

// ─── Bar Charts ────────────────────────────────────────────

export const Bar: Story = {
  args: {
    type: 'bar',
    data: quarterlyData,
    width: 400,
    height: 200,
  },
};

export const BarWithHighlight: Story = {
  args: {
    type: 'bar',
    data: quarterlyData,
    highlightIndex: 2,
    width: 400,
    height: 200,
  },
};

export const BarWithInsight: Story = {
  args: {
    type: 'bar',
    data: quarterlyData,
    highlightIndex: 2,
    insight: 'Q3 showed 15% growth, outpacing the sector average.',
    width: 400,
    height: 200,
  },
};

// ─── Line Charts ───────────────────────────────────────────

export const Line: Story = {
  args: {
    type: 'line',
    data: monthlyData,
    width: 500,
    height: 200,
  },
};

export const LineWithHighlight: Story = {
  args: {
    type: 'line',
    data: monthlyData,
    highlightIndex: 5,
    insight: 'June reached a 6-month high of 120 basis points.',
    width: 500,
    height: 200,
  },
};

// ─── Colour Sequences ──────────────────────────────────────

export const Monochrome: Story = {
  args: {
    type: 'donut',
    data: portfolioData,
    colourSequence: 'monochrome',
    width: 300,
    height: 300,
  },
};

export const Polychrome: Story = {
  args: {
    type: 'donut',
    data: portfolioData,
    colourSequence: 'polychrome',
    width: 300,
    height: 300,
  },
};

export const Multichrome: Story = {
  args: {
    type: 'donut',
    data: portfolioData,
    colourSequence: 'multichrome',
    width: 300,
    height: 300,
  },
};

export const Complex: Story = {
  args: {
    type: 'bar',
    data: [
      { label: 'A', value: 45 },
      { label: 'B', value: 30 },
      { label: 'C', value: 25 },
      { label: 'D', value: 55 },
      { label: 'E', value: 40 },
      { label: 'F', value: 35 },
      { label: 'G', value: 50 },
      { label: 'H', value: 20 },
    ],
    colourSequence: 'complex',
    width: 500,
    height: 200,
  },
};

// ─── Insight Flag ──────────────────────────────────────────

export const WithInsight: Story = {
  args: {
    type: 'donut',
    data: portfolioData,
    highlightIndex: 0,
    insight: 'Equities allocation increased by 5% following the Q4 rebalancing.',
    width: 300,
    height: 300,
  },
};

// ─── All Chart Types Gallery ───────────────────────────────

export const AllChartTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <div>
        <h3 style={{ fontFamily: 'Arial', fontSize: 16, marginBottom: 16 }}>Donut Chart</h3>
        <DataViz type="donut" data={portfolioData} colourSequence="multichrome" width={280} height={280} />
      </div>
      <div>
        <h3 style={{ fontFamily: 'Arial', fontSize: 16, marginBottom: 16 }}>Bar Chart</h3>
        <DataViz type="bar" data={quarterlyData} colourSequence="multichrome" width={400} height={200} />
      </div>
      <div>
        <h3 style={{ fontFamily: 'Arial', fontSize: 16, marginBottom: 16 }}>Line Chart</h3>
        <DataViz type="line" data={monthlyData} colourSequence="multichrome" width={500} height={200} />
      </div>
    </div>
  ),
};

// ─── Colour Sequence Comparison ────────────────────────────

export const ColourSequenceComparison: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
      {(['monochrome', 'polychrome', 'multichrome', 'complex'] as const).map((seq) => (
        <div key={seq}>
          <h4 style={{ fontFamily: 'Arial', fontSize: 14, marginBottom: 8, textTransform: 'capitalize' }}>
            {seq}
          </h4>
          <DataViz type="donut" data={portfolioData} colourSequence={seq} width={200} height={200} />
        </div>
      ))}
    </div>
  ),
};
