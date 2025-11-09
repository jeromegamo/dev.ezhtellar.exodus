import EditRecipeForm from '@/features/edit-recipe-form/edit-recipe-form';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: EditRecipeForm,
} satisfies Meta<typeof EditRecipeForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { };
