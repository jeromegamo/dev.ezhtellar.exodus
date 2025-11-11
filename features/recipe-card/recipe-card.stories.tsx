import RecipeCard from '@/features/recipe-card/recipe-card';
import { RECIPE_LIST_ITEMS } from '@/features/recipe-list/recipe-list.viewModel';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: RecipeCard,
} satisfies Meta<typeof RecipeCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    recipeItem: RECIPE_LIST_ITEMS[0]
  }
};
