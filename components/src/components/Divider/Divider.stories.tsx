import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Divider direction',
    },
    colour: {
      control: 'color',
      description: 'Line colour (defaults to Gray I #CCCABC)',
    },
    thickness: {
      control: { type: 'number', min: 1, max: 8 },
      description: 'Line thickness in pixels',
    },
    spacing: {
      control: { type: 'number', min: 0, max: 64 },
      description: 'Margin on both sides in pixels',
    },
  },
  args: {
    orientation: 'horizontal',
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

// ─── Orientation ───────────────────────────────────────────

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  decorators: [
    (Story) => (
      <div>
        <p style={{ fontFamily: 'Arial', fontSize: 14, color: '#000' }}>Content above the divider</p>
        <Story />
        <p style={{ fontFamily: 'Arial', fontSize: 14, color: '#000' }}>Content below the divider</p>
      </div>
    ),
  ],
};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', height: 80 }}>
        <span style={{ fontFamily: 'Arial', fontSize: 14 }}>Left</span>
        <Story />
        <span style={{ fontFamily: 'Arial', fontSize: 14 }}>Right</span>
      </div>
    ),
  ],
};

// ─── Colours ───────────────────────────────────────────────

export const DefaultColour: Story = {
  name: 'Default (Gray I)',
  args: { orientation: 'horizontal' },
};

export const DarkGray: Story = {
  args: { orientation: 'horizontal', colour: '#5A5D5C' },
};

export const UBSRed: Story = {
  args: { orientation: 'horizontal', colour: '#E60000' },
};

export const Black: Story = {
  args: { orientation: 'horizontal', colour: '#000000' },
};

// ─── Thickness ─────────────────────────────────────────────

export const Thin: Story = {
  args: { thickness: 1 },
};

export const Medium: Story = {
  args: { thickness: 2 },
};

export const Thick: Story = {
  args: { thickness: 4 },
};

// ─── Spacing ───────────────────────────────────────────────

export const NoSpacing: Story = {
  args: { spacing: 0 },
  decorators: [
    (Story) => (
      <div>
        <p style={{ fontFamily: 'Arial', fontSize: 14, background: '#ECEBE4', padding: 8 }}>Above</p>
        <Story />
        <p style={{ fontFamily: 'Arial', fontSize: 14, background: '#ECEBE4', padding: 8 }}>Below</p>
      </div>
    ),
  ],
};

export const LargeSpacing: Story = {
  args: { spacing: 32 },
  decorators: [
    (Story) => (
      <div>
        <p style={{ fontFamily: 'Arial', fontSize: 14, background: '#ECEBE4', padding: 8 }}>Above</p>
        <Story />
        <p style={{ fontFamily: 'Arial', fontSize: 14, background: '#ECEBE4', padding: 8 }}>Below</p>
      </div>
    ),
  ],
};

// ─── Gallery ───────────────────────────────────────────────

export const ThicknessGallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {[1, 2, 3, 4].map((t) => (
        <div key={t}>
          <span style={{ fontFamily: 'Arial', fontSize: 12, color: '#7A7870' }}>{t}px</span>
          <Divider thickness={t} spacing={4} />
        </div>
      ))}
    </div>
  ),
};
