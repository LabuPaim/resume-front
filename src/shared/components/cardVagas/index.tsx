import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Vagas } from "../../services/types/requests";
import {
  Card,
  Habilidades,
  MapCard,
  Principal,
  Secundario,
  Skills,
  Stackoffice,
} from "./styles";

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
            <Principal>
              <Stackoffice>
                <h1>
                  {`${
                    vaga.stack.charAt(0) + vaga.stack.slice(1).toLowerCase()
                  } ${
                    vaga.nivel.charAt(0) + vaga.nivel.slice(1).toLowerCase()
                  }`}
                </h1>
                <h3>
                  {`${
                    vaga.descricao.charAt(0) + vaga.descricao.slice(1).toLowerCase()
                  }`}
                </h3>
              </Stackoffice>

              <Habilidades>
                <h2>Skills</h2>
                <Skills>
                  {vaga.habilidades.map((habilidade) => {
                    return (
                      <h3>{`#${
                        habilidade.charAt(0) + habilidade.slice(1).toLowerCase()
                      }`}</h3>
                    );
                  })}
                </Skills>
              </Habilidades>
            </Principal>
            <Secundario>
              <h3>{vaga.contratos}</h3>
              <h3>
                {vaga.office.charAt(0) + vaga.office.slice(1).toLowerCase()}
              </h3>
              <h3>
                {vaga.nivel.charAt(0) + vaga.nivel.slice(1).toLowerCase()}
              </h3>
            </Secundario>
          </MapCard>
        );
      })}
    </Card>
  );
}