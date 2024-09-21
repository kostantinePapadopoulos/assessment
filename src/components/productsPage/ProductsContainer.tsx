import { ProductsContext } from "../../utils/contexts/products/ProductsContext";
import { useContext } from "react";
import Product from "./Product";
import { Book } from "../../interfaces/interfaces";
import styles from "./ProductsContainer.module.css";
const ProductsContainer = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    return <div>Error: useContext must be used within a ProductsProvider</div>;
  }

  const { products } = context;

  return (
    <div className={styles.container}>
      {products.length > 0 ? (
        products.map((product: Book) => (
          <Product key={product.isbn} product={product} />
        ))
      ) : (
        <div>No products available</div> /* Graceful fallback */
      )}
    </div>
  );
};

export default ProductsContainer;
