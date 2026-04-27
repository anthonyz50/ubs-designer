import { Meta, StoryObj } from '@storybook/react-vite';
import { TradingIndicator } from './TradingIndicator';

declare const meta: Meta<typeof TradingIndicator>;
export default meta;
type Story = StoryObj<typeof TradingIndicator>;
export declare const Positive: Story;
export declare const Negative: Story;
export declare const Neutral: Story;
export declare const PositivePercentage: Story;
export declare const NegativePercentage: Story;
export declare const Small: Story;
export declare const MediumSize: Story;
export declare const Large: Story;
export declare const EMEAvsAPAC: Story;
export declare const NoArrow: Story;
export declare const NoSign: Story;
export declare const AllSizes: Story;
