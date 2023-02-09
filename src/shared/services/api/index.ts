import axios from "axios";
import { CadastroRequest, LoginRequest, Vagas } from "../types/requests";

axios.defaults.baseURL = "https://the-new-resume-production.up.railway.app";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        Authorization: "Bearer " + token,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    if (error.response.status === 401) {
      if (localStorage.getItem("token")) localStorage.removeItem("token");
    }
  }
);

export const api = {
  login: async ({ email, password }: LoginRequest) => {
    try {
      const response = await axios.post("/Authorization/login", {
        email,
        password,
      });
      
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (err) {
      alert("E-mail ou senha inválida");
    }
  },

  cadastrar: async ({ email, password, role }: CadastroRequest) => {
    try {
      const response = await axios.post("/users", {
        email,
        password,
        role,
      });
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  cadastrarVaga: async ({
    stack,
    nivel,
    descricao,
    formacao,
    habilidades,
    experiencia,
    contratos,
    office,
    deficiencia,
  }: Vagas) => {
    try {
      const response = await axios.post("/vagas", {
        stack,
        nivel,
        descricao,
        formacao,
        habilidades,
        experiencia,
        contratos,
        office,
        deficiencia,
      });
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  getUser: async () => {
    try {
      const response = await axios.get("/users");
      return response.data;
    } catch (err) {
      console.log(err);
      alert(err);
    }
  },

  getVagas: async () => {
    try {
      const response = await axios.get("/vagas");
      return response.data;
    } catch (err) {
      console.log(err);
      alert(err);
    }
  },
};
