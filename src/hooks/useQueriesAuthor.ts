import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Author } from "@/types";

import * as storageService from "@/services/author.service";

/**
 * Hook para listar todos os autores.
 */
export function useAuthors() {
  return useQuery({
    queryKey: ["authors"],
    queryFn: storageService.getAuthors,
  });
}

/**
 * Hook para buscar autor por id.
 */
export function useAuthor(id?: string) {
  return useQuery({
    queryKey: ["authors", id],
    queryFn: async () => {
      const authors = await storageService.getAuthors();
      return authors.find((a) => a.id === id);
    },
    enabled: !!id,
  });
}

/**
 * Criar autor.
 */
export function useCreateAuthor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: storageService.createAuthor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authors"] });
    },
  });
}

/**
 * Atualizar autor.
 */
export function useUpdateAuthor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Omit<Author, "id" | "created_at">> }) =>
      storageService.updateAuthor(id, data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["authors"] });
      queryClient.invalidateQueries({ queryKey: ["authors", variables.id] });
    },
  });
}

/**
 * Deletar autor.
 * Observação: isso também remove livros relacionados no storage.
 */
export function useDeleteAuthor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: storageService.deleteAuthor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authors"] });
      queryClient.invalidateQueries({ queryKey: ["books"] }); // importante!
    },
  });
}
