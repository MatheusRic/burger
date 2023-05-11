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

const Product = (products) => {
  return (
    <Card>
      <DivImage>
        <Image src={products.img} alt="" />
      </DivImage>
      <DivDescription>
        <Title>{products.name}</Title>
        <Category>{products.category}</Category>
        <Price>R${products.price.toFixed(2)}</Price>
        <AddButton>Adicionar</AddButton>
      </DivDescription>
    </Card>
  );
};

export default Product;
