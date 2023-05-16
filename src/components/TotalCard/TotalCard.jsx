import { DivTotal, DivInfo, TotalText, TotalValue, RemoveAll } from "./styles";

const TotalCard = ({ cartTotal, setCurrentSale }) => {
  return (
    <DivTotal>
      <DivInfo>
        <TotalText>Total</TotalText>
        <TotalValue>R${cartTotal.toFixed(2)}</TotalValue>
      </DivInfo>
      <RemoveAll onClick={() => setCurrentSale([])}>Remover Todos</RemoveAll>
    </DivTotal>
  );
};

export default TotalCard;
