import {
  CartDiv,
  TitleDiv,
  TitleCart,
  CartSpan,
  CartUl,
  SpanDiv,
} from "./styles";

import TotalCard from "../TotalCard/TotalCard";

import CartList from "../CartList/CartList";

const Cart = ({ currentSale, setCurrentSale, cartTotal, setCartTotal }) => {
  return (
    <CartDiv>
      <TitleDiv>
        <TitleCart>Carrinho de compras</TitleCart>
      </TitleDiv>
      <CartUl>
        {currentSale.length === 0 ? (
          <SpanDiv>
            <CartSpan>Sua sacola esta vazia </CartSpan>
          </SpanDiv>
        ) : (
          <CartList
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
          />
        )}
      </CartUl>
      {currentSale.length > 0 ? (
        <TotalCard cartTotal={cartTotal} setCurrentSale={setCurrentSale} />
      ) : (
        <></>
      )}
    </CartDiv>
  );
};

export default Cart;
