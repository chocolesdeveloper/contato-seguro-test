import { Author, Book } from "@/types";
import localforage from "localforage";

export interface StoreData {
  books: Book[];
  authors: Author[];
}

const store = localforage.createInstance({ name: "contato-seguro" });
const DATA_KEY = "data";

export async function clearStore(): Promise<void> {
  await store.clear();
}

export async function getStore(): Promise<StoreData> {
  return (
    (await store.getItem<StoreData>(DATA_KEY)) ?? {
      books: [],
      authors: [],
    }
  );
}

export async function saveStore(data: StoreData): Promise<void> {
  await store.setItem(DATA_KEY, data);
}

export async function initStore(): Promise<void> {
  const existing = await store.getItem<StoreData>(DATA_KEY);
  if (!existing) {
    await saveStore({ books: [], authors: [] });
  }
}
