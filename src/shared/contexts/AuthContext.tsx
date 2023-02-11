import React, { useState, ReactNode, useEffect } from "react";
import { api } from "../services/api";
import {
  ContextLogin,
  LoginRequest,
  UserRequest,
} from "../services/types/requests";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = React.createContext({} as ContextLogin);
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userRequest, setUserRequest] = useState<UserRequest>();

  async function login(credencial: LoginRequest) {
    const userData: UserRequest = await api.login(credencial);

    setUserRequest(userData);
    return userData;
  }

  useEffect(() => {

    console.log(localStorage.getItem("user"));
    const user = JSON.parse(localStorage.getItem("user") ?? "");
    console.log("to aqui pai",user);
    const token = localStorage.getItem("token")
    if (user && token) setUserRequest({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ userRequest, login } as ContextLogin}>
      {children}
    </AuthContext.Provider>
  );
};
