import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Vagas } from "../../services/types/requests";
import {
  Card,
  Habilidades,
  Input,
  MapCard,
  Principal,
  Secundario,
  Skills,
  Stackoffice,
} from "./styles";

export function CardVagas() {
  const [getVagas, setVagas] = useState<Vagas[]>([]);
  const [busca, setBusca] = useState("");

  const vagasFilter = getVagas?.filter(
    (doc) =>
      doc.stack.toLowerCase().includes(busca.toLowerCase()) ||
      doc.office.includes(busca) ||
      doc.nivel.toLowerCase().includes(busca.toLowerCase()) ||
      doc.contratos.toLowerCase().includes(busca.toLowerCase()) ||
      doc.descricao.toLowerCase().includes(busca.toLowerCase())
  );

  async function findVagas() {
    const data = await api.getVagas();
    setVagas(data);
  }

  useEffect(() => {
    findVagas();
  }, []);
  return (
    <Card>
      <Input
        type="text"
        placeholder="Buscar vaga"
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
      />
      {vagasFilter?.map((vaga) => {
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
                    vaga.descricao.charAt(0) +
                    vaga.descricao.slice(1).toLowerCase()
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
