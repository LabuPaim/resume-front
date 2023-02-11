export type LoginRequest = {
  email: string;
  password: string;
};

export type ContextLogin = {
  userRequest: UserRequest;
  login(credencial: LoginRequest): Promise<UserRequest>;
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

export type User = {
  id: string;
  email: string;
  role: string;
  empresa: string[];
  candidato: string[];
  vaga: string[];
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
};

export type Empresa = {
  nome: string;
  cnpj: string;
  telefone: string;
  cidade: string;
  estado: string;
  descricao: string;
};
