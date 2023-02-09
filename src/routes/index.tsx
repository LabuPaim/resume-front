
import { Routes, Route } from "react-router-dom";
import { Cadastro } from "../pages/cadastro";
import { CriarVagas } from "../pages/criarVagas";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Vagas } from "../pages/vagas";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/vagas" element={<Vagas />} />
      <Route path="/criarvagas" element={<CriarVagas />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
