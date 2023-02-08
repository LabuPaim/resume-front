export type LoginRequest = {
  email: string;
  password: string;
};

export type ContextLogin = {
  userRequest: UserRequest
  login(credencial: LoginRequest): Promise<void>;
};

export type CadastroRequest = {
  email: string;
  password: string;
  role: string;
};

export type UserRequest = {
  token: string;
  user: User;
};

export type User ={
  id: string;
  email: string;
  role: string;
  empresa: string[];
  candidato: string[];
  vaga: string[];
}

export type Vagas = {
  stack: string;
  nivel: string;
  descricao: string;
  formacao: string[];
  habilidades: string[];
  experiencia: string[];
  contratos: string;
  office: string;
  deficiencia: string;
  // user: string;
  // empresa: string;
};
