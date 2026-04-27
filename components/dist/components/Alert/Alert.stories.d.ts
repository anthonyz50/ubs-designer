import { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

declare const meta: Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof Alert>;
export declare const Error: Story;
export declare const Warning: Story;
export declare const Success: Story;
export declare const Info: Story;
export declare const Dismissible: Story;
export declare const DismissibleWithTitle: Story;
export declare const InfoWithoutTitle: Story;
export declare const AllVariants: Story;
