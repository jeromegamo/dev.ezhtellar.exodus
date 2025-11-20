import RECIPES_MOCK from '@/domain/RecipeRepo/Recipe.mock';
import RecipeCard from '@/features/recipe-card/recipe-card';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: RecipeCard,
} satisfies Meta<typeof RecipeCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    recipeItem: RECIPES_MOCK[0]
  }
};
