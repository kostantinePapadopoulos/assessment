export interface Book {
  isbn: string;
  title: string;
  subtitle: string;
  author: string | string[];
  published: string;
  publisher: string;
  pages: number;
  description: string;
  website: string;
  category?: string[];
  year?: number;
}

export interface ProductContextType {
  products: Book[] | [];
  addProduct?: (newProduct: Book) => void;
}
