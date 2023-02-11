import { FormEvent, useState } from "react";
import { Caixa, Contrato, Radio, StyledForm, StyledLoginForm } from "./styles";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";

export function CriarPerfilEmpresa() {
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const loginPayload = {
      nome: e.currentTarget.nome.value,
      cnpj: e.currentTarget.cnpj.value,
      telefone: e.currentTarget.telefone.value,
      cidade: e.currentTarget.cidade.value,
      estado: e.currentTarget.estado.value,
      descricao: e.currentTarget.descricao.value
    };

    const userData = await api.criarPerfilEmpresa(loginPayload);

    if (!userData) {
      setError(true);
      return;
    }
    navigate("/vagas");
  }

  return (
    <StyledLoginForm>
      <h1>Perfil</h1>
      <StyledForm onSubmit={handleSubmit} error={error}>
        <input placeholder="Nome" name="nome" />
        <input placeholder="CNPJ" name="cnpj" />
        <input placeholder="telefone" name="telefone" />
        <input placeholder="cidade" name="cidade" />
        <input placeholder="estado" name="estado" />
        <Caixa>

        <textarea placeholder="Descrição..." name="descricao" />
          

        </Caixa>

        <button id={"login"} type="submit">
          Salvar
        </button>
      </StyledForm>
    </StyledLoginForm>
  );
}
