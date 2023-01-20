import { FormEvent, useState } from "react";
import { StyledForm, StyledLoginForm, StyledRole } from "./styles";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Loading } from "../loading";
import { api } from "../../../services/api";

export function CadastroForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [activeCandidato, setActiveCandidato] = useState<boolean>(true);
  const [activeEmpresa, setActiveEmpresa] = useState<boolean>(false);

  function activeRoleCandidato() {
    if (activeCandidato) {
    } else {
      document.getElementById("empresa")?.classList.remove("active");
      document.getElementById("candidato")?.classList.add("active");
      setActiveEmpresa(false);
      setActiveCandidato(true);
    }
  }
  function activeRoleEmpresa() {
    if (activeEmpresa) {
    } else {
      document.getElementById("candidato")?.classList.remove("active");
      document.getElementById("empresa")?.classList.add("active");
      setActiveCandidato(false);
      setActiveEmpresa(true);
    }
  }

  const navigate = useNavigate();

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const loginPayload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
      role: activeCandidato ? "candidato" : "empresa",
    };
    
    const userData = await api.cadastrar(loginPayload);
    setLoading(false);
    if (!userData) {
      setError(true);
      return;
    }
    navigate("/home");
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <StyledRole>
            <h2
              id={"candidato"}
              className="active"
              onClick={() => activeRoleCandidato()}
            >
              Candidato
            </h2>
            <h2 id={"empresa"} onClick={() => activeRoleEmpresa()}>
              Empresa
            </h2>
          </StyledRole>
          <StyledLoginForm>
          <h2>Crie sua conta</h2>
            <StyledForm onSubmit={handleSubmit} error={error}>
              <input
                id={"inputEmail"}
                placeholder="Seu email"
                name="email"
                required
              />
              <div>
                <input
                  placeholder="Sua senha"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                />
                <button type="button" onClick={handleShowPassword}>
                  {showPassword ? (
                    <BsEyeSlashFill size={25} />
                  ) : (
                    <BsEyeFill size={25} />
                  )}
                </button>
              </div>

              <div>
                <input
                  placeholder="Confirme sua senha"
                  type={showPassword ? "text" : "password"}
                  required
                />
                <button type="button" onClick={handleShowPassword}>
                  {showPassword ? (
                    <BsEyeSlashFill size={25} />
                  ) : (
                    <BsEyeFill size={25} />
                  )}
                </button>
              </div>
              <button id={"login"} type="submit">
                Cadastrar
              </button>
            </StyledForm>
          </StyledLoginForm>
        </>
      )}
    </>
  );
}
