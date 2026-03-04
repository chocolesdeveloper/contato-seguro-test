import { describe, it, expect, beforeEach } from "vitest";
import * as storageService from "@/services/storage.service";
import * as authorStorageService from "@/services/author.service";
import * as bookStorageService from "@/services/book.service";

describe("Storage Service", () => {
  beforeEach(async () => {
    await storageService.clearStore();
    await storageService.initStore();
  });

  describe("initStore", () => {
    it("deve inicializar o armazenamento com dados vazios", async () => {
      await storageService.initStore();
      const books = await bookStorageService.getBooks();
      expect(books).toEqual([]);
    });
  });

  describe("createBook", () => {
    it("deve criar um livro novo com id e created_at gerados", async () => {
      const bookData = { name: "1984", author_id: "author-1", pages: 328 };
      const newBook = await bookStorageService.createBook(bookData);

      expect(newBook).toMatchObject(bookData);
      expect(newBook.id).toBeDefined();
      expect(newBook.created_at).toBeDefined();
    });

    it("deve adicionar o livro à lista", async () => {
      const bookData = { name: "O Senhor dos Anéis", author_id: "author-1" };
      await bookStorageService.createBook(bookData);

      const books = await bookStorageService.getBooks();
      expect(books).toHaveLength(1);
      expect(books[0].name).toBe("O Senhor dos Anéis");
    });
  });

  describe("getBooks", () => {
    it("deve devolver um array de livros", async () => {
      await bookStorageService.createBook({
        name: "Livro 1",
        author_id: "author-1",
      });
      await bookStorageService.createBook({
        name: "Livro 2",
        author_id: "author-2",
      });

      const books = await bookStorageService.getBooks();
      expect(books).toHaveLength(2);
    });
  });

  describe("createAuthor", () => {
    it("deve criar um autor novo", async () => {
      const authorData = { name: "George Orwell", email: "george@example.com" };
      const newAuthor = await authorStorageService.createAuthor(authorData);

      expect(newAuthor).toMatchObject(authorData);
      expect(newAuthor.id).toBeDefined();
      expect(newAuthor.created_at).toBeDefined();
    });
  });

  describe("updateBook", () => {
    it("deve atualizar um livro existente", async () => {
      const book = await bookStorageService.createBook({
        name: "Livro Original",
        author_id: "author-1",
      });

      const updated = await bookStorageService.updateBook(book.id, {
        name: "Livro Atualizado",
      });

      expect(updated?.name).toBe("Livro Atualizado");
      expect(updated?.id).toBe(book.id);
    });

    it("deve devolver undefined se o livro não existir", async () => {
      const result = await bookStorageService.updateBook("id-inexistente", {
        name: "Novo Nome",
      });

      expect(result).toBeUndefined();
    });
  });

  describe("deleteBook", () => {
    it("deve deletar um livro", async () => {
      const book = await bookStorageService.createBook({
        name: "Livro a Deletar",
        author_id: "author-1",
      });

      const success = await bookStorageService.deleteBook(book.id);
      expect(success).toBe(true);

      const books = await bookStorageService.getBooks();
      expect(books).toHaveLength(0);
    });

    it("deve devolver false se o livro não existir", async () => {
      const success = await bookStorageService.deleteBook("id-inexistente");
      expect(success).toBe(false);
    });
  });

  describe("deleteAuthor", () => {
    it("deve deletar um autor", async () => {
      const author = await authorStorageService.createAuthor({
        name: "Autor a Deletar",
      });

      const success = await authorStorageService.deleteAuthor(author.id);
      expect(success).toBe(true);

      const authors = await authorStorageService.getAuthors();
      expect(authors).toHaveLength(0);
    });
  });
});
