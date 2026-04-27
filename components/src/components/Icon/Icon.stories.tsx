import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';

/** Reusable sample SVG icons */
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87a.48.48 0 00.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1115.6 12 3.6 3.6 0 0112 15.6z" />
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
  </svg>
);

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Icon name for registry lookup',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Display size: sm (12px), md (16px), lg (24px)',
    },
    variant: {
      control: 'select',
      options: ['webApp', 'illustrative'],
      description: 'webApp: black only. illustrative: allows custom colour.',
    },
    colour: {
      control: 'color',
      description: 'Colour override (only for illustrative variant)',
    },
  },
  args: {
    size: 'md',
    variant: 'webApp',
    name: 'search',
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// ─── Sizes ─────────────────────────────────────────────────

export const SmallIcon: Story = {
  name: 'Small (12px)',
  args: { size: 'sm', name: 'search', children: <SearchIcon /> },
};

export const MediumIcon: Story = {
  name: 'Medium (16px)',
  args: { size: 'md', name: 'search', children: <SearchIcon /> },
};

export const LargeIcon: Story = {
  name: 'Large (24px)',
  args: { size: 'lg', name: 'search', children: <SearchIcon /> },
};

// ─── Web App (black only) ──────────────────────────────────

export const WebApp: Story = {
  args: {
    variant: 'webApp',
    name: 'settings',
    size: 'lg',
    children: <SettingsIcon />,
  },
};

export const WebAppAllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <div key={s} style={{ textAlign: 'center' }}>
          <Icon size={s} variant="webApp" name="search">
            <SearchIcon />
          </Icon>
          <p style={{ fontFamily: 'Arial', fontSize: 11, color: '#7A7870', marginTop: 4 }}>{s}</p>
        </div>
      ))}
    </div>
  ),
};

// ─── Illustrative (allows red accent) ──────────────────────

export const Illustrative: Story = {
  args: {
    variant: 'illustrative',
    colour: '#E60000',
    name: 'chart',
    size: 'lg',
    children: <ChartIcon />,
  },
};

export const IllustrativeColours: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      {[
        { colour: '#E60000', label: 'UBS Red' },
        { colour: '#BD000C', label: 'Bordeaux I' },
        { colour: '#B98E2C', label: 'Bronze I' },
        { colour: '#2E476B', label: 'Plum 90' },
      ].map(({ colour, label }) => (
        <div key={label} style={{ textAlign: 'center' }}>
          <Icon size="lg" variant="illustrative" colour={colour} name="chart">
            <ChartIcon />
          </Icon>
          <p style={{ fontFamily: 'Arial', fontSize: 11, color: '#7A7870', marginTop: 4 }}>{label}</p>
        </div>
      ))}
    </div>
  ),
};

// ─── Comparison ────────────────────────────────────────────

export const WebAppVsIllustrative: Story = {
  name: 'Web App vs Illustrative',
  render: () => (
    <div style={{ display: 'flex', gap: 32 }}>
      <div>
        <p style={{ fontFamily: 'Arial', fontSize: 12, color: '#7A7870', marginBottom: 8 }}>
          Web App (black only)
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          <Icon size="lg" variant="webApp" name="search"><SearchIcon /></Icon>
          <Icon size="lg" variant="webApp" name="settings"><SettingsIcon /></Icon>
          <Icon size="lg" variant="webApp" name="chart"><ChartIcon /></Icon>
        </div>
      </div>
      <div>
        <p style={{ fontFamily: 'Arial', fontSize: 12, color: '#7A7870', marginBottom: 8 }}>
          Illustrative (red accent)
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          <Icon size="lg" variant="illustrative" colour="#E60000" name="search"><SearchIcon /></Icon>
          <Icon size="lg" variant="illustrative" colour="#BD000C" name="settings"><SettingsIcon /></Icon>
          <Icon size="lg" variant="illustrative" colour="#B98E2C" name="chart"><ChartIcon /></Icon>
        </div>
      </div>
    </div>
  ),
};
