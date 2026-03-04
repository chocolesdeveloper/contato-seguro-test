export interface Book {
  id: string;
  name: string;
  author_id: string;
  created_at: string;
  pages?: number;
}

export interface Author {
  id: string;
  name: string;
  email?: string;
  created_at: string;
}
