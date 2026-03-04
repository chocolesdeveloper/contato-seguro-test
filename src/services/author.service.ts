import type { Author } from "../types";
import { getStore, saveStore } from "./storage.service";
import { createEntity } from "../helpers/entity.helper";

export async function getAuthors(): Promise<Author[]> {
  const { authors } = await getStore();
  return authors;
}

export async function createAuthor(authorData: Omit<Author, "id" | "created_at">): Promise<Author> {
  const data = await getStore();

  const newAuthor = createEntity(authorData);

  data.authors.push(newAuthor);

  await saveStore(data);
  return newAuthor;
}

export async function updateAuthor(
  id: string,
  data: Partial<Omit<Author, "id" | "created_at">>,
): Promise<Author | undefined> {
  const storeData = await getStore();
  const idx = storeData.authors.findIndex((a) => a.id === id);
  if (idx === -1) return undefined;

  const updated = { ...storeData.authors[idx], ...data };
  storeData.authors[idx] = updated;

  await saveStore(storeData);
  return updated;
}

export async function deleteAuthor(id: string): Promise<boolean> {
  const storeData = await getStore();
  const original = storeData.authors.length;

  storeData.authors = storeData.authors.filter((a) => a.id !== id);
  storeData.books = storeData.books.filter((b) => b.author_id !== id);

  await saveStore(storeData);
  return storeData.authors.length !== original;
}
