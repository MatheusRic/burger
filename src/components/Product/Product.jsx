import {
  Image,
  Title,
  Category,
  Price,
  AddButton,
  Card,
  DivImage,
  DivDescription,
} from "./styles";

const Product = ({ product, handleClick }) => {
  return (
    <Card>
      <DivImage>
        <Image src={product.img} alt="" />
      </DivImage>
      <DivDescription>
        <Title>{product.name}</Title>
        <Category>{product.category}</Category>
        <Price>R${product.price.toFixed(2)}</Price>
        <AddButton onClick={() => handleClick(product.id)}>Adicionar</AddButton>
      </DivDescription>
    </Card>
  );
};

export default Product;
