import React, { useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";
import { LoginRequest } from "../services/types/requests";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<LoginRequest>();

  useEffect(() => {
    async () => {
      if (user) {
        await api.login(user);
      }
    };
  }, [setUser]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
