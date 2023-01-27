import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonContext,
  ButtonMiddle,
  StyledHeader,
  StyleLogo,
} from "./styles";

export function Header() {
  const navigate = useNavigate();

  function navGo(event: string): void {
    navigate(event);
  }

  return (
    <StyledHeader>
      <StyleLogo>Logo</StyleLogo>
      <ButtonMiddle>
        <Button onClick={() => navGo("/")}>Inicio</Button>
        <Button onClick={() => navGo("/vagas")}>Vagas</Button>
        <Button onClick={() => navGo("/criarvagas")}>Criar Vagas</Button>
      </ButtonMiddle>
      <ButtonContext>
        <Button id={"entrar"} onClick={() => navGo("/login")}>
          Entrar
        </Button>
        <Button id={"cadastro"} onClick={() => navGo("/cadastro")}>
          Criar conta
        </Button>
      </ButtonContext>
    </StyledHeader>
  );
}
