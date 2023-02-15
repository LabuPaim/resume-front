import { FormEvent, useState, useContext } from "react";
import { Caixa, Contrato, Radio, StyledForm, StyledLoginForm } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";
import { AuthContext } from "../../../contexts/AuthContext";
import { IVagasEntity, Vagas } from "../../../services/types/requests";

export function CriarVagasForm() {
  const [error, setError] = useState<boolean>(false);
  const { userRequest } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  let unquiVaga = {} as IVagasEntity;

  if (id) {
    if (userRequest) {
      for (const item of userRequest?.user?.vaga) {
        if (item.id === id) {
          unquiVaga = item;
          break;
        }
      }
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const ability = e.currentTarget.habilidades;
    const arrayAbility = [];

    for (let i = 0; i < 3; i++) {
      if (ability[i].checked === true) {
        arrayAbility.push(ability[i].value);
      }
    }

    const loginPayload: IVagasEntity = {
      id: "",
      userId: userRequest?.user?.id,
      stack: e.currentTarget.stack.value,
      nivel: e.currentTarget.nivel.value,
      descricao: e.currentTarget.descricao.value,
      formacao: [e.currentTarget.formacao.value],
      experiencia: [e.currentTarget.experiencia.value],
      office: e.currentTarget.office.value,
      deficiencia: e.currentTarget.deficiencia.value,
      contratos: e.currentTarget.contrato.value,
      habilidades: arrayAbility,
    };
    userRequest?.user?.vaga.push(loginPayload);
    localStorage.setItem("user", JSON.stringify(userRequest.user));

    const userData = await api.cadastrarVaga(loginPayload);
    if (!userData) {
      setError(true);
      return;
    }
    navigate("/vagascriadas");
  }

  // if (!userRequest) {
  //   return <h2>Loading...</h2>;
  // }
  return (
    <>
      {!userRequest ? (
        <h2>Loading...</h2>
      ) : (
        <StyledLoginForm>
          <h1>Abrir Vaga</h1>
          <StyledForm onSubmit={handleSubmit} error={error}>
            <textarea
              placeholder="Descrição..."
              name="descricao"
              defaultValue={unquiVaga?.descricao}
            />
            <textarea
              placeholder="Formação..."
              name="formacao"
              defaultValue={unquiVaga?.formacao}
            />
            <textarea
              placeholder="Experiência..."
              name="experiencia"
              defaultValue={unquiVaga?.experiencia}
            />
            <Caixa>
              <h2>Stack</h2>

              <Radio>
                <div>
                  <input
                    name="stack"
                    id={"frontend"}
                    value="FRONTEND"
                    type={"radio"}
                    defaultChecked={unquiVaga?.stack === "FRONTEND"}
                  />
                  <label>Front-End</label>
                </div>
                <div>
                  <input
                    name="stack"
                    id={"backend"}
                    value="BACKEND"
                    type={"radio"}
                    defaultChecked={unquiVaga?.stack === "BACKEND"}
                  />
                  <label>Back-End</label>
                </div>
                <div>
                  <input
                    name="stack"
                    id={"fullstack"}
                    value="FULLSTACK"
                    type={"radio"}
                    defaultChecked={unquiVaga?.stack === "FULLSTACK"}
                  />
                  <label>Full Stack</label>
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
                    defaultChecked={unquiVaga?.nivel === "JUNIOR"}
                  />
                  <label>Júnior</label>
                </div>
                <div>
                  <input
                    name="nivel"
                    id={"pleno"}
                    value="PLENO"
                    type={"radio"}
                    defaultChecked={unquiVaga?.nivel === "PLENO"}
                  />
                  <label>Pleno</label>
                </div>
                <div>
                  <input
                    name="nivel"
                    id={"senhor"}
                    value="SENHOR"
                    type={"radio"}
                    defaultChecked={unquiVaga?.nivel === "SENHOR"}
                  />
                  <label>Senhor</label>
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
                    defaultChecked={unquiVaga?.nivel === "CLT"}
                  />
                  <label>CLT</label>
                </div>
                <div>
                  <input
                    name="contrato"
                    id={"pj"}
                    value="PJ"
                    type={"radio"}
                    defaultChecked={unquiVaga?.nivel === "PJ"}
                  />
                  <label>PJ</label>
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
                    defaultChecked={unquiVaga?.office === "HOMEOFFICE"}
                  />
                  <label>Home Office</label>
                </div>
                <div>
                  <input
                    name="office"
                    id={"presencial"}
                    value="PRESENCIAL"
                    type={"radio"}
                    defaultChecked={unquiVaga?.office === "PRESENCIAL"}
                  />
                  <label>Presencial</label>
                </div>
                <div>
                  <input
                    name="office"
                    id={"hibrido"}
                    value="HIBRIDO"
                    type={"radio"}
                    defaultChecked={unquiVaga?.office === "HIBRIDO"}
                  />
                  <label>Híbrido</label>
                </div>
              </Radio>

              <h2>Deficiência</h2>

              <Contrato>
                <div>
                  <input
                    name="deficiencia"
                    id={"sim"}
                    value="SIM"
                    type={"radio"}
                    defaultChecked={unquiVaga?.deficiencia === "SIM"}
                  />
                  <label>Sim</label>
                </div>
                <div>
                  <input
                    name="deficiencia"
                    id={"nao"}
                    value="NAO"
                    type={"radio"}
                    defaultChecked={unquiVaga?.deficiencia === "NAO"}
                  />
                  <label>Não</label>
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
                    defaultChecked={unquiVaga?.habilidades?.includes("API")}
                  />
                  <label>API</label>
                </div>
                <div>
                  <input
                    name="habilidades"
                    id={"css"}
                    value="CSS"
                    type={"checkbox"}
                    defaultChecked={unquiVaga?.habilidades?.includes("CSS")}
                  />
                  <label>CSS</label>
                </div>
                <div>
                  <input
                    name="habilidades"
                    id={"typescript"}
                    value="TYPESCRIPT"
                    type={"checkbox"}
                    defaultChecked={unquiVaga?.habilidades?.includes(
                      "TYPESCRIPT"
                    )}
                  />
                  <label>TypeScript</label>
                </div>
              </Radio>
            </Caixa>

            <button id={"login"} type="submit">
              Cadastrar
            </button>
          </StyledForm>
        </StyledLoginForm>
      )}
    </>
  );
}
