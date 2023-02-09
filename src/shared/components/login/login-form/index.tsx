import { FormEvent, useState, useContext, useEffect } from "react";
import { StyledForm, StyledLoginForm } from "./styles";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Loading } from "../loading";
import { AuthContext } from "../../../contexts/AuthContext";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const teste = await login({
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    });
    setLoading(false);

    if (!teste) {
      setError(true);
    } else {
      navigate("/vagas");
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <StyledLoginForm>
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
            <h3>Esqueci minha senha</h3>
            <button id={"login"} type="submit">
              Login
            </button>
          </StyledForm>
        </StyledLoginForm>
      )}
    </>
  );
}
