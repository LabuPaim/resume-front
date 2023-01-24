import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Vagas } from "../../services/types/requests";
import { Card, Habilidades, MapCard } from "./styles";

export function CardVagas() {
  const [getVagas, setVagas] = useState<Vagas[]>([]);

  async function findVagas() {
    const data = await api.getVagas();
    setVagas(data);
  }

  useEffect(() => {
    findVagas();
  }, []);
  return (
    <Card>
      {getVagas?.map((vaga) => {
        return (
          <MapCard>
            <h1>{`Vaga ${
              vaga.stack.charAt(0) + vaga.stack.slice(1).toLowerCase()
            } ${vaga.nivel.charAt(0) + vaga.nivel.slice(1).toLowerCase()}`}</h1>
            <Habilidades>
              {vaga.habilidades.map((habilidade) => {
                return <h2>{`#${habilidade.charAt(0) + habilidade.slice(1).toLowerCase()}`}</h2>;
              })}
            </Habilidades>
          </MapCard>
        );
      })}
    </Card>
  );
}
