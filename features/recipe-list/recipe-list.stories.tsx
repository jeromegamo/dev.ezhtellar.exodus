import type { Meta, StoryObj } from '@storybook/react-vite';

import RECIPES_MOCK from '@/domain/RecipeRepo/Recipe.mock';
import RecipeList from '@/features/recipe-list/recipe-list';

const meta = {
  component: RecipeList,
} satisfies Meta<typeof RecipeList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    recipeListItems: RECIPES_MOCK
  } 
};
