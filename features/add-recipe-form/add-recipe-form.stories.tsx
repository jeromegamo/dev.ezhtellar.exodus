import AddRecipeForm from '@/features/add-recipe-form/add-recipe-form';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: AddRecipeForm,
} satisfies Meta<typeof AddRecipeForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { };
