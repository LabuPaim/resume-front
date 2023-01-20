import axios from "axios";
import { CadastroRequest, LoginRequest } from "../types/requests";

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
      alert(err);
    }
  },

  cadastrar: async ({ email, password, role }: CadastroRequest) => {
    try {
      const response = await axios.post("/users", {
        email,
        password,
        role
      });
      return response.data;
    } catch (err) {
      alert(err);
    }
  },
};
