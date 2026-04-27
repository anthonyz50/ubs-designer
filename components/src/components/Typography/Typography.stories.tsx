import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography, type TypographyVariant } from './Typography';

const ALL_VARIANTS: TypographyVariant[] = [
  'keyline', 'infoline', 'subheadline1', 'subheadline2',
  'subheadline3', 'subheadline4', 'leadText1', 'leadText2',
  'quotes', 'subtitles', 'copyText', 'pageNumbers',
  'senderInfo', 'smallCopyText', 'environmentalInfo', 'captions', 'footnote',
];

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ALL_VARIANTS,
      description: 'UBS type hierarchy variant (16 levels)',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'blockquote'],
      description: 'Polymorphic element override',
    },
    weight: {
      control: 'select',
      options: [300, 400, 700, 'light', 'roman', 'bold'],
      description: 'Font weight override',
    },
    colour: {
      control: 'color',
      description: 'Text colour (UBS Red must NOT be used for numbers)',
    },
  },
  args: {
    variant: 'copyText',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// ─── Default ───────────────────────────────────────────────

export const Default: Story = {
  args: { variant: 'copyText', children: 'Body copy in Frutiger Light at 9.5pt.' },
};

// ─── All 16 Hierarchy Levels ───────────────────────────────

export const Keyline: Story = {
  args: { variant: 'keyline', children: 'Keyline — free selectable' },
};

export const Infoline: Story = {
  args: { variant: 'infoline', children: 'Infoline — max half the keyline size' },
};

export const Subheadline1: Story = {
  args: { variant: 'subheadline1', children: 'Subheadline 1 — 20pt Light' },
};

export const Subheadline2: Story = {
  args: { variant: 'subheadline2', children: 'Subheadline 2 — 13.5pt Light' },
};

export const Subheadline3: Story = {
  args: { variant: 'subheadline3', children: 'Subheadline 3 — 9.5pt Bold' },
};

export const Subheadline4: Story = {
  args: { variant: 'subheadline4', children: 'Subheadline 4 — 9.5pt Bold Red' },
};

export const LeadText1: Story = {
  args: { variant: 'leadText1', children: 'Lead Text 1 — 20pt Light' },
};

export const LeadText2: Story = {
  args: { variant: 'leadText2', children: 'Lead Text 2 — 13.5pt Light' },
};

export const Quotes: Story = {
  args: { variant: 'quotes', children: '"Excellence in everything we do."' },
};

export const Subtitles: Story = {
  args: { variant: 'subtitles', children: 'Subtitles — 9.5pt Bold' },
};

export const CopyText: Story = {
  args: { variant: 'copyText', children: 'Copy text is the standard body copy style at 9.5pt Light.' },
};

export const PageNumbers: Story = {
  args: { variant: 'pageNumbers', children: '42' },
};

export const SenderInfo: Story = {
  args: { variant: 'senderInfo', children: 'John Smith, UBS Zurich' },
};

export const SmallCopyText: Story = {
  args: { variant: 'smallCopyText', children: 'Small copy text at 8pt Light for secondary content.' },
};

export const EnvironmentalInfo: Story = {
  args: { variant: 'environmentalInfo', children: 'Printed on 100% recycled paper.' },
};

export const Captions: Story = {
  args: { variant: 'captions', children: 'Fig. 1: Asset allocation breakdown, Q4 2024' },
};

export const Footnote: Story = {
  args: { variant: 'footnote', children: '¹ Past performance is not indicative of future results.' },
};

// ─── Weight Overrides ──────────────────────────────────────

export const WeightLight: Story = {
  args: { variant: 'copyText', weight: 'light', children: 'Light weight (300)' },
};

export const WeightRoman: Story = {
  args: { variant: 'copyText', weight: 'roman', children: 'Roman weight (400)' },
};

export const WeightBold: Story = {
  args: { variant: 'copyText', weight: 'bold', children: 'Bold weight (700)' },
};

// ─── Colour Prop ───────────────────────────────────────────

export const CustomColour: Story = {
  args: {
    variant: 'subheadline1',
    colour: '#5A5D5C',
    children: 'Gray V coloured heading',
  },
};

// ─── Polymorphic As Prop ───────────────────────────────────

export const AsSpan: Story = {
  args: {
    variant: 'copyText',
    as: 'span',
    children: 'Rendered as a <span> element',
  },
};

export const AsH3: Story = {
  args: {
    variant: 'subheadline2',
    as: 'h3',
    children: 'Rendered as an <h3> element',
  },
};

// ─── Full Hierarchy ────────────────────────────────────────

export const FullHierarchy: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {ALL_VARIANTS.map((v) => (
        <Typography key={v} variant={v}>
          {v} — The quick brown fox jumps over the lazy dog.
        </Typography>
      ))}
    </div>
  ),
};
