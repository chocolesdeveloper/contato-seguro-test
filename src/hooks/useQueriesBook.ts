import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Book } from "@/types";
import * as storageService from "@/services/book.service";

/**
 */
export function useBooks() {
  return useQuery({
    queryKey: ["books"],
    queryFn: storageService.getBooks,
  });
}

/**
 * Hook para buscar um único livro por id.
 */
export function useBook(id: string) {
  return useQuery({
    queryKey: ["books", id],
    queryFn: async () => {
      const books = await storageService.getBooks();
      return books.find((b) => b.id === id);
    },
    enabled: !!id,
  });
}

/**
 * Criar livro.
 */
export function useCreateBook() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: storageService.createBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
}

/**
 * Atualizar livro.
 */
export function useUpdateBook() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Omit<Book, "id" | "created_at">> }) =>
      storageService.updateBook(id, data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      queryClient.invalidateQueries({ queryKey: ["books", variables.id] });
    },
  });
}

/**
 * Deletar livro.
 */
export function useDeleteBook() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: storageService.deleteBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });
}
