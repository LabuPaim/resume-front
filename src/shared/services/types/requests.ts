export type LoginRequest = {
  email: string;
  password: string;
};

export type ContextLogin = {
  user: LoginRequest
  login(credencial: LoginRequest): Promise<void>;
};

export type CadastroRequest = {
  email: string;
  password: string;
  role: string;
};
export type UserRequest = {
  email: string;
  role: string;
  token: string;
};

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
