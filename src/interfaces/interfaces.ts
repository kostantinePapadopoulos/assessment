export interface Book {
  isbn: string;
  title: string;
  subtitle: string;
  author: string;
  published: string; // ISO date string format
  publisher: string;
  pages: number;
  description: string;
  website: string;
}

export interface ProductContextType {
  products: Book[] | [];
  addProduct?: (newProduct: Book) => void;
}
