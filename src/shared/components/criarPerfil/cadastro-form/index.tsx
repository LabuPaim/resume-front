import { StyledLoginForm } from "./styles";
import { CriarPerfilEmpresa } from "../empresa";
import { CriarPerfilCandidato } from "../candidato";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export function CriarPerfilForm() {
  const { userRequest, login } = useContext(AuthContext);

  return (
    <StyledLoginForm>
      {userRequest?.user.role === "empresa" ? (
        <CriarPerfilEmpresa />
      ) : (
        <CriarPerfilCandidato />
      )}
    </StyledLoginForm>
  );
}
