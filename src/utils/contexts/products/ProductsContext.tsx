"use client";
import { Book, ProductContextType } from "../../../interfaces/interfaces";
import { initialProducts } from "../../initialDataProducts";
import { createContext, useState, ReactNode } from "react";

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductsContext = createContext<ProductContextType>({
  products: [],
  addProduct: undefined,
});

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Book[]>(initialProducts);

  const addProduct = (newProduct: Book) => {
    setProducts((prev) => {
      return [...prev, newProduct];
    });
  };
  return (
    <ProductsContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
