import { create } from "zustand";
import type { Author } from "@/types";

interface AuthorModalStore {
  createOpen: boolean;
  viewOpen: boolean;
  selectedAuthor: Author | null;

  openCreate: () => void;
  closeCreate: () => void;

  openView: (author: Author) => void;
  closeView: () => void;
}

export const useAuthorModalStore = create<AuthorModalStore>((set) => ({
  createOpen: false,
  viewOpen: false,
  selectedAuthor: null,

  openCreate: () => set({ createOpen: true }),
  closeCreate: () => set({ createOpen: false }),

  openView: (author) =>
    set({
      selectedAuthor: author,
      viewOpen: true,
    }),

  closeView: () =>
    set({
      viewOpen: false,
      selectedAuthor: null,
    }),
}));
