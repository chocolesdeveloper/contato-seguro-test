import type { Meta, StoryObj } from "@storybook/react";
import ViewAuthorModal from "@/components/ViewAuthorModal";

const meta: Meta<typeof ViewAuthorModal> = {
  title: "Components/ViewAuthorModal",
  component: ViewAuthorModal,
};

export default meta;

type Story = StoryObj<typeof ViewAuthorModal>;

export const Default: Story = {
  args: {
    open: true,
    onClose: () => {},
  },
};

export const Closed: Story = {
  args: {
    open: false,
    onClose: () => {},
  },
};
