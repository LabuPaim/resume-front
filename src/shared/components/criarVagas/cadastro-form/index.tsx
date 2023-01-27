import { FormEvent, useState } from "react";
import { Radio, StyledForm, StyledLoginForm } from "./styles";
import { useNavigate } from "react-router-dom";
import { Loading } from "../loading";
import { api } from "../../../services/api";

export function CriarVagasForm() {
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const loginPayload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    const userData = await api.cadastrar(loginPayload);
    if (!userData) {
      setError(true);
      return;
    }
    navigate("/home");
  }

  return (
    <StyledLoginForm>
      <h2>Abrir Vaga</h2>
      <StyledForm onSubmit={handleSubmit} error={error}>
        <textarea placeholder="Descrição..." name="descricao" />
        <textarea placeholder="Formação..." name="formacao" />
        <textarea placeholder="Experiência..." name="experiencia" />
        <Radio>
          <div>
            <input
              name="stack"
              id={"frontend"}
              value="FRONTEND"
              type={"radio"}
            />
            <label for="frontend">Front-End</label>
          </div>
          <div>
            <input name="stack" id={"backend"} value="BACKEND" type={"radio"} />
            <label for="backend">Back-End</label>
          </div>
          <div>
            <input
              name="stack"
              id={"fullstack"}
              value="FULLSTACK"
              type={"radio"}
              checked
            />
            <label for="fullstack">Full Stack</label>
          </div>
        </Radio>

        <button id={"login"} type="submit">
          Cadastrar
        </button>
      </StyledForm>
    </StyledLoginForm>
  );
}
