import { useState } from "react";
import { Vagas } from "../../services/types/requests";

export function Search() {
  const [busca, setBusca] = useState<Vagas>();
  // const filter = okBusca?.filter(
  //   (doc) =>
  //     doc.stack.toLowerCase().includes(busca.toLowerCase()) ||
  //     doc.office.includes(busca) ||
  //     doc.nivel.toLowerCase().includes(busca.toLowerCase()) ||
  //     doc.habilidades.toLowerCase().includes(busca.toLowerCase()) ||
  //     doc.contratos.toLowerCase().includes(busca.toLowerCase()) ||
  // );
  return <></>;
}
