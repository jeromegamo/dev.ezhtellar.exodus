import RecipeSingle from '@/features/recipe-single/recipe-single';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: RecipeSingle,
} satisfies Meta<typeof RecipeSingle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { };
