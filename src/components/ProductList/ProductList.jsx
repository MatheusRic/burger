import Product from "../Product/Product";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { CardList } from "./styles";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.error("Ops ocorreu um erro " + err);
      });
  }, []);

  console.log(products);

  return (
    <CardList>
      {products.map((product) => (
        <Product {...product} />
      ))}
    </CardList>
  );
};

export default ProductList;
