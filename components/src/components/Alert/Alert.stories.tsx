import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['error', 'warning', 'success', 'info'],
      description: 'RAG status variant',
    },
    title: {
      control: 'text',
      description: 'Optional alert title',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
    },
  },
  args: {
    variant: 'info',
    children: 'This is an informational message.',
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

// ─── RAG Variants ──────────────────────────────────────────

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Transaction Failed',
    children: 'Please check your account details and try again. If the problem persists, contact your relationship manager.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Approaching Limit',
    children: 'You have used 85% of your daily transfer limit. Remaining: CHF 15,000.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Transfer Complete',
    children: 'Your transfer of CHF 50,000 to IBAN CH93 0076 2011 6238 5295 7 has been completed successfully.',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'System Maintenance',
    children: 'Scheduled maintenance will take place on Saturday, 5 April 2025, from 02:00 to 06:00 CET.',
  },
};

// ─── Dismissible ───────────────────────────────────────────

export const Dismissible: Story = {
  args: {
    variant: 'success',
    dismissible: true,
    children: 'This alert can be dismissed by clicking the close button.',
  },
};

export const DismissibleWithTitle: Story = {
  args: {
    variant: 'warning',
    title: 'Action Required',
    dismissible: true,
    children: 'Please update your contact details before the end of the month.',
  },
};

// ─── Without Title ─────────────────────────────────────────

export const InfoWithoutTitle: Story = {
  args: {
    variant: 'info',
    children: 'A simple informational message without a title.',
  },
};

// ─── All Variants Gallery ──────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Alert variant="error" title="Error (RAG Red)">
        Critical issue requiring immediate attention. RAG Red: #BD000C.
      </Alert>
      <Alert variant="warning" title="Warning (RAG Amber)">
        Situation needs attention. RAG Amber: #E4A911.
      </Alert>
      <Alert variant="success" title="Success (RAG Green)">
        Operation completed successfully. RAG Green: #6F7A1A.
      </Alert>
      <Alert variant="info" title="Info (Gray IV)">
        Neutral informational message. Gray IV: #7A7870.
      </Alert>
    </div>
  ),
};
