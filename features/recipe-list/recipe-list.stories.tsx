import RecipeList from '@/features/recipe-list/recipe-list';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: RecipeList,
} satisfies Meta<typeof RecipeList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { };
