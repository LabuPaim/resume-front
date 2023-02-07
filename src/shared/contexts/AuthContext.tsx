import React, { useState, ReactNode } from "react";
import { api } from "../services/api";
import { ContextLogin, LoginRequest } from "../services/types/requests";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = React.createContext({} as ContextLogin);
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<LoginRequest>();

  async function login(credencial: LoginRequest) {
    setUser(credencial)
    if (user) {
      await api.login(user);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login } as ContextLogin}>
      {children}
    </AuthContext.Provider>
  );
};
