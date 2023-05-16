import { Head, LogoDiv, Logo, Search, Input, Button } from "./styles";
import logo from "../../assets/logo.png";

const Header = ({ filteredProducts, setFilteredProducts }) => {
  return (
    <Head>
      <LogoDiv>
        <Logo src={logo} alt="" />
      </LogoDiv>
      <Search>
        <Input
          type="text"
          placeholder="Digite sua pesquisa"
          value={filteredProducts}
          onChange={(event) => setFilteredProducts(event.target.value)}
        />
        <Button>Pesquisar</Button>
      </Search>
    </Head>
  );
};

export default Header;
