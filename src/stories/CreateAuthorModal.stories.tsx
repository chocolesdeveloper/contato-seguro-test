import type { Meta, StoryObj } from "@storybook/react";
import CreateAuthorModal from "@/components/CreateAuthorModal";

const meta: Meta<typeof CreateAuthorModal> = {
  title: "Components/CreateAuthorModal",
  component: CreateAuthorModal,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CreateAuthorModal>;

export const Default: Story = {
  args: {
    open: true,
    loading: false,
    onClose: () => {},
    onSubmit: async (data) => {
      console.log("Submitted:", data);
    },
  },
};

export const Loading: Story = {
  args: {
    open: true,
    loading: true,
    onClose: () => {},
    onSubmit: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    },
  },
};

export const Closed: Story = {
  args: {
    open: false,
    loading: false,
    onClose: () => {},
    onSubmit: async () => {},
  },
};
