import { create } from "zustand";
import type { Book } from "@/types";

interface BookModalStore {
  createOpen: boolean;
  viewOpen: boolean;
  selectedBook: Book | null;

  openCreate: () => void;
  closeCreate: () => void;

  openView: (book: Book) => void;
  closeView: () => void;
}

export const useBookModalStore = create<BookModalStore>((set) => ({
  createOpen: false,
  viewOpen: false,
  selectedBook: null,

  openCreate: () => set({ createOpen: true }),
  closeCreate: () => set({ createOpen: false }),

  openView: (book) =>
    set({
      selectedBook: book,
      viewOpen: true,
    }),

  closeView: () =>
    set({
      viewOpen: false,
      selectedBook: null,
    }),
}));
