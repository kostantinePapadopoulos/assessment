import { useParams } from "react-router-dom";
import { ProductsContext } from "../../utils/contexts/products/ProductsContext";
import { useContext } from "react";
import { Book } from "../../interfaces/interfaces";

const ProductContainer = () => {
  const { isbn } = useParams();
  const context = useContext(ProductsContext);

  if (!context) {
    return <div>Error: useContext must be used within a ProductsProvider</div>;
  }
  const { products } = context;
  const product = products.find((product: Book) => product.isbn == isbn);
  if (!product) return <>Error on loading product</>;

  return <> {product.title} </>;
};
export default ProductContainer;
