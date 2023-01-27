import { FormEvent, useState } from "react";
import { Caixa, Contrato, Radio, StyledForm, StyledLoginForm } from "./styles";
import { useNavigate } from "react-router-dom";
import { Loading } from "../loading";
import { api } from "../../../services/api";

export function CriarVagasForm() {
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const loginPayload = {
      stack: e.currentTarget.stack.value,
      nivel: e.currentTarget.nivel.value,
      descricao: e.currentTarget.descricao.value,
      formacao: e.currentTarget.formacao.value,
      habilidades: e.currentTarget.habilidades.value,
      experiencia: e.currentTarget.experiencia.value,
      contratos: e.currentTarget.contratos.value,
      office: e.currentTarget.office.value,
      deficiencia: e.currentTarget.deficiencia.value,
    };
    console.log(loginPayload);

    const userData = await api.cadastrarVaga(loginPayload);
    if (!userData) {
      setError(true);
      return;
    }
    navigate("/vagas");
  }

  return (
    <StyledLoginForm>
      <h1>Abrir Vaga</h1>
      <StyledForm onSubmit={handleSubmit} error={error}>
        <textarea placeholder="Descrição..." name="descricao" />
        <textarea placeholder="Formação..." name="formacao" />
        <textarea placeholder="Experiência..." name="experiencia" />
        <Caixa>
          <h2>Stack</h2>

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
              <input
                name="stack"
                id={"backend"}
                value="BACKEND"
                type={"radio"}
              />
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

          <h2>Nivel</h2>

          <Radio>
            <div>
              <input
                name="nivel"
                id={"junior"}
                value="JUNIOR"
                type={"radio"}
                checked
              />
              <label for="junior">Júnior</label>
            </div>
            <div>
              <input name="nivel" id={"pleno"} value="PLENO" type={"radio"} />
              <label for="pleno">Pleno</label>
            </div>
            <div>
              <input name="nivel" id={"senhor"} value="SENHOR" type={"radio"} />
              <label for="senhor">Senhor</label>
            </div>
          </Radio>

          <h2>Tipo de Contrato</h2>

          <Contrato>
            <div>
              <input
                name="contrato"
                id={"clt"}
                value="CLT"
                type={"radio"}
                checked
              />
              <label for="clt">CLT</label>
            </div>
            <div>
              <input name="contrato" id={"pj"} value="PJ" type={"radio"} />
              <label for="pj">PJ</label>
            </div>
          </Contrato>

          <h2>Formato</h2>

          <Radio>
            <div>
              <input
                name="office"
                id={"homeoffice"}
                value="HOMEOFFICE"
                type={"radio"}
                checked
              />
              <label for="homeoffice">Home Office</label>
            </div>
            <div>
              <input
                name="office"
                id={"presencial"}
                value="PRESENCIAL"
                type={"radio"}
              />
              <label for="presencial">Presencial</label>
            </div>
            <div>
              <input
                name="office"
                id={"hibrido"}
                value="HIBRIDO"
                type={"radio"}
              />
              <label for="hibrido">Híbrido</label>
            </div>
          </Radio>

          <h2>Deficiência</h2>

          <Contrato>
            <div>
              <input name="deficiencia" id={"sim"} value="SIM" type={"radio"} />
              <label for="sim">Sim</label>
            </div>
            <div>
              <input
                name="deficiencia"
                id={"nao"}
                value="NAO"
                type={"radio"}
                checked
              />
              <label for="nao">Não</label>
            </div>
          </Contrato>

          <h2>Habilidades</h2>

          <Radio>
            <div>
              <input
                name="habilidades"
                id={"api"}
                value="API"
                type={"checkbox"}
              />
              <label for="api">API</label>
            </div>
            <div>
              <input
                name="habilidades"
                id={"css"}
                value="CSS"
                type={"checkbox"}
              />
              <label for="css">CSS</label>
            </div>
            <div>
              <input
                name="habilidades"
                id={"typescript"}
                value="TYPESCRIPT"
                type={"checkbox"}
              />
              <label for="typescript">TypeScript</label>
            </div>
          </Radio>
        </Caixa>

        <button id={"login"} type="submit">
          Cadastrar
        </button>
      </StyledForm>
    </StyledLoginForm>
  );
}
