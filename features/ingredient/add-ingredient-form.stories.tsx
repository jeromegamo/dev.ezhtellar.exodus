import AddIngredientFrom from '@/features/ingredient/add-ingredient-form';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: AddIngredientFrom,
} satisfies Meta<typeof AddIngredientFrom>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { };
