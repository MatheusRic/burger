import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import { useState, useEffect } from "react";
import api from "./services/api";
import "./app.css";

function App() {
  const [currentSale, setCurrentSale] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [cartTotal, setCartTotal] = useState(0);

  const filter = products.filter((product) =>
    product.name.toLowerCase().includes(filteredProducts.toLocaleLowerCase())
  );

  const handleClick = (productId) => {
    const food = products.filter((elem) => elem.id === productId);

    if (currentSale.some((elem) => elem.name === food[0].name) === false) {
      return setCurrentSale([
        ...currentSale,
        {
          id: food[0].id,
          name: food[0].name,
          category: food[0].category,
          price: food[0].price,
          img: food[0].img,
          quantity: 1,
        },
      ]);
    } else {
      currentSale.forEach((elem) => {
        if (elem.id === productId) {
          elem.quantity += 1;
          setCartTotal(cartTotal + elem.price);
        }
      });
    }
  };

  useEffect(() => {
    setCartTotal(
      currentSale.reduce(function (soma, atual) {
        return (soma += atual.price * atual.quantity);
      }, 0)
    );
  }, [currentSale]);

  useEffect(() => {
    api
      .get("")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.error("Ops ocorreu um erro " + err);
      });
  }, []);

  console.log(currentSale);

  return (
    <div className="App">
      <Header
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <div className="Main">
        <ProductList filter={filter} handleClick={handleClick} />
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      </div>
    </div>
  );
}

export default App;
