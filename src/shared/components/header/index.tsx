import { useNavigate } from "react-router-dom";
import { Button, ButtonContext, ButtonMiddle, StyledHeader } from "./styles";

export function Header() {
  const navigate = useNavigate();

  function navGo(event: string): void {
    navigate(event);
  }

  return (
    <StyledHeader>
      Logo
      <ButtonMiddle>
        <Button onClick={() => navGo("/")}>Inicio</Button>
        <Button onClick={() => navGo("/")}>Vagas</Button>
        <Button onClick={() => navGo("/")}>Empresa</Button>
      </ButtonMiddle>
      <ButtonContext>
        <Button id={"entrar"}onClick={() => navGo("/login")}>Entrar</Button>
        <Button onClick={() => navGo("/create")}>Criar conta</Button>
      </ButtonContext>
    </StyledHeader>
  );
}
