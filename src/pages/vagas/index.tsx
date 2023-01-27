import { CardVagas } from "../../shared/components/cardVagas";
import { useEffect, useState } from "react";
// import { Search } from "../../shared/components/search";
import { Cards, Input } from "./styles";
import { Vagas } from "../../shared/services/types/requests";
import { api } from "../../shared/services/api";

export function Vagas() {
  const [getVagas, setVagas] = useState<Vagas[]>([]);
  const [busca, setBusca] = useState("");

  async function findVagas() {
    const data = await api.getVagas();
    setVagas(data);
  }

  useEffect(() => {
    findVagas();
  }, []);

  const vagasFilter = getVagas?.filter(
    (doc) =>
      doc.stack.toLowerCase().includes(busca.toLowerCase()) ||
      doc.office.includes(busca) ||
      doc.nivel.toLowerCase().includes(busca.toLowerCase()) ||
      doc.contratos.toLowerCase().includes(busca.toLowerCase()) ||
      doc.descricao.toLowerCase().includes(busca.toLowerCase())
  );
  return (
    <Cards>
      <Input
        type="text"
        placeholder="Buscar na plataforma"
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
      />
      {/* <Search /> */}
      <CardVagas />
    </Cards>
  );
}
