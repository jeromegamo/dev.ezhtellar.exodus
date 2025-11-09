import EditIngredientFrom from '@/features/ingredient/edit-ingredient-form';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: EditIngredientFrom,
} satisfies Meta<typeof EditIngredientFrom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { };
