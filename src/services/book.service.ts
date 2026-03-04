import type { Book } from "../types";
import { getStore, saveStore } from "./storage.service";
import { createEntity } from "../helpers/entity.helper";

export async function getBooks(): Promise<Book[]> {
  const { books } = await getStore();
  return books;
}

export async function createBook(bookData: Omit<Book, "id" | "created_at">): Promise<Book> {
  const data = await getStore();

  const newBook = createEntity(bookData);

  data.books.push(newBook);
  await saveStore(data);

  return newBook;
}

export async function updateBook(
  id: string,
  data: Partial<Omit<Book, "id" | "created_at">>,
): Promise<Book | undefined> {
  const storeData = await getStore();
  const idx = storeData.books.findIndex((b) => b.id === id);
  if (idx === -1) return undefined;

  const updated = { ...storeData.books[idx], ...data };
  storeData.books[idx] = updated;

  await saveStore(storeData);
  return updated;
}

export async function deleteBook(id: string): Promise<boolean> {
  const storeData = await getStore();
  const original = storeData.books.length;

  storeData.books = storeData.books.filter((b) => b.id !== id);

  await saveStore(storeData);
  return storeData.books.length !== original;
}
