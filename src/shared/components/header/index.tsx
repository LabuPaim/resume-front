import { useNavigate } from "react-router-dom";
import { StyledHeader } from "./styles";

export function Header() {
  const navigate = useNavigate();

  function navGo(event: string): void {
    navigate(event);
  }
  
  return (
    <StyledHeader>
      teste
      <button onClick={() => navGo("/")}>Inicio</button>
      <button onClick={() => navGo("/login")}>Entrar</button>
      {/* <button>Perfil</button> */}
    </StyledHeader>
  );
}
