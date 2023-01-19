import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Cadastro } from "../pages/cadastro";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: "home",
        path: "/",
        label: "Página Inicial",
      },
      {
        icon: "perm_contact_calendar",
        path: "/login",
        label: "Login",
      },
      {
        icon: "perm_contact_calendar",
        path: "/cadastro",
        label: "Cadastro",
      },
    ]);
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
