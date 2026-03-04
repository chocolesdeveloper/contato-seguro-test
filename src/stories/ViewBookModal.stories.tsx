import type { StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ViewBookModal from "@/components/ViewBookModal";
import type { Book } from "@/types";
import React from "react";

// Mock do book
const mockBook: Book = {
  id: "book-1",
  name: "Dom Casmurro",
  author_id: "author-1",
  pages: 256,
  created_at: new Date().toISOString(),
};

// Mock do QueryClient com dados do autor
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, staleTime: Infinity },
  },
});
queryClient.setQueryData(["authors", "author-1"], { id: "author-1", name: "Machado de Assis" });

const meta = {
  title: "Components/ViewBookModal",
  component: ViewBookModal,
  decorators: [
    (Story: React.FC) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ViewBookModal>;

export const Default: Story = {
  args: {
    open: true,
    book: mockBook,
    onClose: () => {},
  },
};

export const WithoutPages: Story = {
  args: {
    open: true,
    book: { ...mockBook, pages: undefined },
    onClose: () => {},
  },
};

export const Closed: Story = {
  args: {
    open: false,
    book: mockBook,
    onClose: () => {},
  },
};
