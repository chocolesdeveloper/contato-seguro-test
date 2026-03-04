import { nanoid } from "nanoid";

export function createEntity<T>(data: T) {
  return {
    ...data,
    id: nanoid(),
    created_at: new Date().toISOString(),
  };
}
