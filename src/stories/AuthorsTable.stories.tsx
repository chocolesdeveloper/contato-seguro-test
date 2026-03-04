import type { Meta, StoryObj } from "@storybook/react";
import AuthorsTable from "@/components/AuthorsTable";
import type { Author } from "@/types";

const mockAuthors: Author[] = [
  {
    id: "1",
    name: "George Orwell",
    email: "george@example.com",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    name: "J.R.R. Tolkien",
    email: "tolkien@example.com",
    created_at: new Date().toISOString(),
  },
];

const meta: Meta<typeof AuthorsTable> = {
  title: "Components/AuthorsTable",
  component: AuthorsTable,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AuthorsTable>;

export const Default: Story = {
  args: {
    authors: mockAuthors,
    loading: false,
    onDelete: async () => {},
    onView: () => {},
  },
};

export const Loading: Story = {
  args: {
    authors: [],
    loading: true,
    onDelete: async () => {},
    onView: () => {},
  },
};

export const Empty: Story = {
  args: {
    authors: [],
    loading: false,
    onDelete: async () => {},
    onView: () => {},
  },
};
