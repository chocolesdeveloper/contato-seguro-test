import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CreateBookModal from "@/components/CreateBookModal";

const mockAuthors = [
  { id: "1", name: "George Orwell" },
  { id: "2", name: "J.R.R. Tolkien" },
];

const meta: Meta<typeof CreateBookModal> = {
  title: "Components/CreateBookModal",
  component: CreateBookModal,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            staleTime: Infinity, // 🔥 impede refetch
          },
        },
      });

      // 🔥 injeta authors no cache
      queryClient.setQueryData(["authors"], mockAuthors);

      return (
        <QueryClientProvider client={queryClient}>
          <div style={{ height: "100vh" }}>
            <Story />
          </div>
        </QueryClientProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof CreateBookModal>;

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
