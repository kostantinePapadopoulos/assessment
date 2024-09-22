import { ProductsContext } from "../../utils/contexts/products/ProductsContext";
import { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { Book } from "../../interfaces/interfaces";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./ProductsContainer.module.css";

const ProductsContainer = () => {
  const context = useContext(ProductsContext);
  const [searchWord, setSearchWord] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Book[]>([]);

  const { products } = context;

  useEffect(() => {
    if (products.length === 0) return;
    if (searchWord === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product: Book) => {
          const values = Object.values(product).join(" ").toLowerCase();
          return values.includes(searchWord.toLowerCase());
        })
      );
    }
  }, [searchWord, products]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.searchInputContainer}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchWord}
          onChange={(e: any) => setSearchWord(e.target.value)}
          placeholder="Type anything here to search"
        />
        <SearchIcon className={styles.searchInputIcon} />
      </div>
      <div className={styles.container}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: Book) => (
            <Product key={product.isbn} product={product} />
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default ProductsContainer;
