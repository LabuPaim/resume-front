import { FormEvent, useState, useContext } from "react";
import { StyledForm, StyledLoginForm } from "./styles";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Loading } from "../loading";
import { AuthContext } from "../../../contexts/AuthContext";
import { LoginRequest } from "../../../services/types/requests";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const { user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    setUser({
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    });
    // const userData = await api.login(loginPayload);
    setLoading(false);

    if (!user) {
      setError(true);
      return;
    }
    navigate("/vagas");
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
