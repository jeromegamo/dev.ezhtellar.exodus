import type { Meta, StoryObj } from '@storybook/react-vite';
import { Option } from 'effect';

import RECIPES_MOCK from '@/domain/RecipeRepo/Recipe.mock';
import RecipeSingle from '@/features/recipe-single/recipe-single';

const meta = {
  component: RecipeSingle,
} satisfies Meta<typeof RecipeSingle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    recipe: Option.some(RECIPES_MOCK[0])
  }
};
