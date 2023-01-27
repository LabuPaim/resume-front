import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { LoginRequest } from "../services/types/requests";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as LoginRequest);

export const AuthProvider = (props: LoginRequest) => {
  const [login, setLogins] = useState<LoginRequest>();

  async function AuthProvider() {
    const userData = await api.login({
      email: props.email,
      password: props.password,
    });
    setLogins(userData);
    return userData;
  }

  useEffect(() => {
    AuthProvider();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        setLogins,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
