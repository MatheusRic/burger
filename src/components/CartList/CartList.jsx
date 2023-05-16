import {
  TagLi,
  CartImage,
  CartDesc,
  CartName,
  CartQuantity,
  CartCategory,
  ButtonRemove,
  ImageDiv,
} from "./styles";

const CartList = ({ currentSale, setCurrentSale }) => {
  const removeItem = (indexAtual) => {
    setCurrentSale(currentSale.filter((elem, index) => index !== indexAtual));
  };
  const removeQuantity = (currentId) => {
    currentSale.forEach((elem, index) => {
      if (elem.id === currentId) {
        elem.quantity -= 1;
        setCurrentSale([...currentSale]);
      }
      if (elem.quantity === 0) {
        const updateCurrentSale = currentSale.filter(
          (elem) => elem.id !== currentId
        );
        setCurrentSale(updateCurrentSale);
      }
    });
  };
  const addQuantity = (currentId) => {
    currentSale.forEach((elem) => {
      if (elem.id === currentId) {
        elem.quantity += 1;
        setCurrentSale([...currentSale]);
      }
    });
  };

  return currentSale.map((elem, index) => (
    <TagLi key={index}>
      <ImageDiv>
        <CartImage src={elem.img} alt="" />
      </ImageDiv>
      <CartDesc>
        <CartName>{elem.name}</CartName>
        <CartQuantity>
          <button onClick={() => removeQuantity(elem.id)}>-</button>
          <p>{elem.quantity}</p>
          <button onClick={() => addQuantity(elem.id)}>+</button>
        </CartQuantity>
        <CartCategory>{elem.category}</CartCategory>
      </CartDesc>
      <ButtonRemove onClick={() => removeItem(index)} className="remove">
        Remover
      </ButtonRemove>
    </TagLi>
  ));
};

export default CartList;
