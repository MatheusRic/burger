import Product from "../Product/Product";
import { CardList } from "./styles";

const ProductList = ({ filter, handleClick }) => {
  return (
    <CardList>
      {filter?.map((product, id) => (
        <Product key={id} product={product} handleClick={handleClick} />
      ))}
    </CardList>
  );
};

export default ProductList;
