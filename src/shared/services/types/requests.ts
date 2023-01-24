export type LoginRequest = {
  email: string;
  password: string;
};

export type CadastroRequest = {
  email: string;
  password: string;
  role: string;
};

export type Vagas = {
  id: string;
  userId: string;
  stack: string;
  nivel: string;
  descricao: string;
  formacao: string;
  habilidades: string;
  experiencia: string;
  contratos: string;
  office: string;
  deficiencia: string;
  // user: string;
  // empresa: string;
};
