interface ProductContainerProps {
  isbn: number;
}

const ProductContainer = ({ isbn }: ProductContainerProps) => {
  return <>productContainer {isbn} </>;
};
export default ProductContainer;
