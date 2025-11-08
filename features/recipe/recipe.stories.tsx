import Recipe from '@/features/recipe/recipe';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: Recipe,
} satisfies Meta<typeof Recipe>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { };
