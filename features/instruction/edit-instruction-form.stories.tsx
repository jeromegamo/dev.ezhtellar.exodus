import type { Meta, StoryObj } from '@storybook/react-vite';

import EditInstructionForm from '@/features/instruction/edit-instruction-form';

const meta = {
  component: EditInstructionForm,
} satisfies Meta<typeof EditInstructionForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { };
