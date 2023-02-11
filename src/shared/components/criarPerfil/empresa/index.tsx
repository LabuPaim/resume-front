import { FormEvent, useContext, useEffect, useState } from "react";
import { Caixa, StyledForm, StyledLoginForm } from "./styles";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { AuthContext } from "../../../contexts/AuthContext";
import { Empresa } from "../../../services/types/requests";

export function CriarPerfilEmpresa() {
  const { userRequest } = useContext(AuthContext);
  const userPerfil = userRequest.user.empresa[0];

  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const loginPayload: Empresa = {
      nome: e.currentTarget.nome.value,
      cnpj: e.currentTarget.cnpj.value,
      telefone: e.currentTarget.telefone.value,
      cidade: e.currentTarget.cidade.value,
      estado: e.currentTarget.estado.value,
      descricao: e.currentTarget.descricao.value,
    };

    if (userPerfil) {
      const userData = await api.UpDatePerfilEmpresa(loginPayload);
      navigate("/vagas");
      return userData;
    } else {
      const userData = await api.criarPerfilEmpresa(loginPayload);
      navigate("/vagas");
      return userData;
    }
  }

  useEffect(() => {}, []);

  return (
    <StyledLoginForm>
      <h1>Perfil</h1>
      <StyledForm onSubmit={handleSubmit}>
        <input placeholder="Nome" name="nome" defaultValue={userPerfil?.nome} />
        <input placeholder="CNPJ" name="cnpj" defaultValue={userPerfil?.cnpj} />
        <input
          placeholder="telefone"
          name="telefone"
          defaultValue={userPerfil?.telefone}
        />
        <input
          placeholder="cidade"
          name="cidade"
          defaultValue={userPerfil?.cidade}
        />
        <input
          placeholder="estado"
          name="estado"
          defaultValue={userPerfil?.estado}
        />
        <Caixa>
          <textarea
            placeholder="Descrição..."
            name="descricao"
            defaultValue={userPerfil?.descricao}
          />
        </Caixa>

        <button id={"login"} type="submit">
          Salvar
        </button>
      </StyledForm>
    </StyledLoginForm>
  );
}
