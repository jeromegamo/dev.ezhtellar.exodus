import type { Meta, StoryObj } from '@storybook/react-vite';
import { Option } from "effect";

import RECIPES_MOCK from '@/domain/RecipeRepo/Recipe.mock';
import EditRecipeForm from '@/features/edit-recipe-form/edit-recipe-form';

const meta = {
  component: EditRecipeForm,
} satisfies Meta<typeof EditRecipeForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    recipe: Option.some(RECIPES_MOCK[0])
  }
};
