import { Link } from "react-router-dom";
import { Book } from "../../interfaces/interfaces";
import styles from "./Product.module.css";
interface ProductProps {
  product: Book;
}

const Product = ({ product }: ProductProps) => {
  return (
    <Link className={styles.productCard} to={`/product/${product.isbn}`}>
      <div className={styles.productInfo}>
        <div className={styles.productDetails}>
          <div className={styles.productTitle}> {product.title}</div>
          <div className={styles.productSubtitle}>{product.subtitle}</div>
        </div>

        <div className={styles.productDetails}>
          <div className={styles.productMeta}>
            <div style={{ fontWeight: 700 }}>Authors:</div>
            <div>{product.author}</div>
          </div>
          <div className={styles.productMeta}>
            <div style={{ fontWeight: 700 }}>Publisher:</div>
            <div>{product.publisher}</div>
          </div>
        </div>
      </div>

      <div className={styles.productImageContainer}>
        <div style={{ gridColumn: "span 3" }}></div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <img
            className={styles.productImage}
            src="images/icons/magnifier.svg"
            alt="View Product"
          />
        </div>
      </div>
    </Link>
  );
};
export default Product;
