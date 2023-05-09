import { Head, LogoDiv, Logo, Search, Input, Button } from "./styles";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Head>
      <LogoDiv>
        <Logo src={logo} alt="" />
      </LogoDiv>
      <Search>
        <Input type="text" placeholder="Digite sua pesquisa" />
        <Button>Pesquisar</Button>
      </Search>
    </Head>
  );
};

export default Header;
