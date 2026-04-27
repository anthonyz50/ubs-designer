import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Brand/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['full', 'symbol', 'wordmark'],
      description: 'Logo variant: full (keys + wordmark), symbol (keys only), wordmark (text only)',
    },
    colour: {
      control: 'select',
      options: ['black', 'white', 'gray'],
      description: 'Logo colour scheme',
    },
    size: {
      control: 'text',
      description: 'Width in pixels or ISO format string (A0–A8)',
    },
    tab: {
      control: 'boolean',
      description: 'Tab variant: adds semi-transparent background for use over images',
    },
  },
  args: {
    variant: 'full',
    colour: 'black',
    size: 120,
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

// ─── Variants ──────────────────────────────────────────────

export const Full: Story = {
  args: { variant: 'full', size: 160 },
};

export const Symbol: Story = {
  args: { variant: 'symbol', size: 80 },
};

export const Wordmark: Story = {
  args: { variant: 'wordmark', size: 120 },
};

// ─── Colours ───────────────────────────────────────────────

export const Black: Story = {
  args: { colour: 'black', size: 160 },
};

export const White: Story = {
  args: { colour: 'white', size: 160 },
  parameters: {
    backgrounds: { default: 'Black' },
  },
};

export const Gray: Story = {
  args: { colour: 'gray', size: 160 },
};

// ─── ISO Sizing ────────────────────────────────────────────

export const ISOSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
      {['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'].map((format) => (
        <div key={format} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ width: 32, fontFamily: 'Arial, sans-serif', fontSize: 14, color: '#7A7870' }}>
            {format}
          </span>
          <Logo variant="full" colour="black" size={format} />
        </div>
      ))}
    </div>
  ),
};

// ─── Tab Variant ───────────────────────────────────────────

export const TabBlack: Story = {
  args: { variant: 'full', colour: 'black', tab: true, size: 160 },
};

export const TabWhite: Story = {
  args: { variant: 'full', colour: 'white', tab: true, size: 160 },
  parameters: {
    backgrounds: { default: 'Black' },
  },
};

export const TabOverImage: Story = {
  render: () => (
    <div
      style={{
        width: 400,
        height: 250,
        background: 'linear-gradient(135deg, #2E476B 0%, #469A6C 100%)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 16,
        borderRadius: 4,
      }}
    >
      <Logo variant="full" colour="white" tab size={140} />
    </div>
  ),
};

// ─── All Variants Gallery ──────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="full" colour="black" size={140} />
        <p style={{ fontFamily: 'Arial', fontSize: 12, color: '#7A7870', marginTop: 8 }}>Full</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="symbol" colour="black" size={60} />
        <p style={{ fontFamily: 'Arial', fontSize: 12, color: '#7A7870', marginTop: 8 }}>Symbol</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="wordmark" colour="black" size={100} />
        <p style={{ fontFamily: 'Arial', fontSize: 12, color: '#7A7870', marginTop: 8 }}>Wordmark</p>
      </div>
    </div>
  ),
};
