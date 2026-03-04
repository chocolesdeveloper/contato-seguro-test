import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BooksTable from "@/components/BooksTable";
import type { Book } from "@/types";

const mockAuthors = [
  { id: "1", name: "George Orwell" },
  { id: "2", name: "J.R.R. Tolkien" },
];

const mockBooks: Book[] = [
  {
    id: "1",
    name: "1984",
    author_id: "1",
    pages: 328,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    name: "O Senhor dos Anéis",
    author_id: "2",
    pages: 1178,
    created_at: new Date().toISOString(),
  },
];

const meta: Meta<typeof BooksTable> = {
  title: "Components/BooksTable",
  component: BooksTable,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            staleTime: Infinity,
          },
        },
      });

      queryClient.setQueryData(["authors"], mockAuthors);

      return (
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof BooksTable>;

export const Default: Story = {
  args: {
    books: mockBooks,
    loading: false,
    onDelete: async () => {},
    onView: () => {},
  },
};

export const Loading: Story = {
  args: {
    books: [],
    loading: true,
    onDelete: async () => {},
    onView: () => {},
  },
};

export const Empty: Story = {
  args: {
    books: [],
    loading: false,
    onDelete: async () => {},
    onView: () => {},
  },
};
