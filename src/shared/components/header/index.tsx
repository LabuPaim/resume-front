import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonContext,
  ButtonMiddle,
  StyledHeader,
  StyleLogo,
} from "./styles";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { CgProfile } from "react-icons/cg";

export function Header() {
  const navigate = useNavigate();
  const { userRequest, login } = useContext(AuthContext);

  function navGo(event: string): void {
    navigate(event);
  }

  function clearLocal(event: string): void {
    localStorage.clear();
    navigate(event);
    window.location.reload();
  }

  useEffect(() => {}, [login]);

  return (
    <StyledHeader>
      <StyleLogo>Logo</StyleLogo>
      <ButtonMiddle>
        <Button onClick={() => navGo("/")}>Inicio</Button>
        <Button onClick={() => navGo("/vagas")}>Vagas</Button>
        {userRequest?.user.role !== "empresa" ? null : (
          <Button onClick={() => navGo("/criarvagas")}>Criar Vagas</Button>
        )}
      </ButtonMiddle>
      {userRequest ? (
        <ButtonContext userRequest={true}>
          <div>
            <CgProfile className={"icons"} />
            <ul>
              <li onClick={() => navGo("/criarperfil")}>Pefil</li>
              <li onClick={() => clearLocal("/")}>Sair</li>
            </ul>
          </div>

          {/* <Button className={"perfil"} onClick={() => navGo("/criarperfil")}>
            <CgProfile id={"icon"} />
          </Button> */}
        </ButtonContext>
      ) : (
        <ButtonContext userRequest={false}>
          <Button id={"entrar"} onClick={() => navGo("/login")}>
            Entrar
          </Button>
          <Button id={"cadastro"} onClick={() => navGo("/cadastro")}>
            Criar conta
          </Button>
        </ButtonContext>
      )}
    </StyledHeader>
  );
}
