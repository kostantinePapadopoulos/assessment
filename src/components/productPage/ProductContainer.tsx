import { useParams } from "react-router-dom";
import { ProductsContext } from "../../utils/contexts/products/ProductsContext";
import { useContext } from "react";
import { Book } from "../../interfaces/interfaces";
import styles from "./ProductContainer.module.css";
import dayjs from "dayjs";
const ProductContainer = () => {
  const { isbn } = useParams();
  const context = useContext(ProductsContext);
  const { products } = context;
  const product = products.find((product: Book) => product.isbn === isbn);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.grandValuesContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.label}>Title</div>
          <div className={styles.value}>{product?.title}</div>
          <div className={styles.value2}>{product?.subtitle}</div>
        </div>
        <div className={styles.valueContainer}>
          <div className={styles.label}>Description</div>
          <div className={styles.value}>{product?.description}</div>
        </div>
        <div className={styles.valueContainer}>
          <div className={styles.label}>Category</div>
          <div className={styles.value}>
            {product?.category && Array.isArray(product?.author)
              ? product.author.join(", ")
              : "-"}
          </div>
        </div>
        <div className={styles.valueContainer}>
          <div className={styles.label}>Author</div>
          <div className={styles.value}>
            {product && Array.isArray(product?.author)
              ? product.author.join(", ")
              : product?.author}
          </div>
        </div>
      </div>
      <div className={styles.valuesContainer}>
        <div className={styles.valueContainer}>
          <div className={styles.label}>ISBN</div>
          <div className={styles.value}>{product?.isbn}</div>
        </div>
        <div className={styles.valueContainer}>
          <div className={styles.label}>Pages</div>
          <div className={styles.value}>{product?.pages}</div>
        </div>
        <div className={styles.valueContainer}>
          <div className={styles.label}>Publised</div>
          <div className={styles.value}>
            {dayjs(product?.published).format("DD/MM/YYYY")}
          </div>
        </div>
        {product?.year && (
          <div className={styles.valueContainer}>
            <div className={styles.label}>Year</div>
            <div className={styles.value}>{product?.year}</div>
          </div>
        )}
        {product?.website && (
          <div className={styles.valueContainer}>
            <div className={styles.label}>Website</div>
            <div className={styles.value}>
              <a href={product?.website}>{product?.website}</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductContainer;
