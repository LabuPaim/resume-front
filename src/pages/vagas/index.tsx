import { api } from "../../shared/services/api";
import { useEffect, useState } from "react";
import { Vagas } from "../../shared/services/types/requests";

export function Vagas() {
  const [getVagas, setVagas] = useState<Vagas[]>([]);

  async function findVagas() {
    const data = await api.getVagas();
    setVagas(data);
  }

  useEffect(() => {
    findVagas();
  }, []);
  return (
    <div>
      {getVagas?.map((vaga) => {
        return <h2>{vaga.nivel}</h2>;
      })}
    </div>
  );
}
