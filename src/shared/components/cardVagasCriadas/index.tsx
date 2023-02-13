import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { BsTrash } from "react-icons/bs";
import {
  Card,
  Habilidades,
  MapCard,
  Principal,
  Secundario,
  Skills,
  Stackoffice,
  OverCard,
  LixoBoolean,
} from "./styles";
import { DeleteVagasModal } from "../modal/deleteVagas";

export function VagasCriadasList() {
  const [onDeleteId, setOnDeleteId] = useState("");
  const [onDelete, setOnDelete] = useState(false);
  const { userRequest } = useContext(AuthContext);

  const [isdelete, setIsdelete] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(!isOpen);

  const deleteItem = () => {
    setIsdelete(!isdelete);
  };

  function onLixoDeleted(id: string) {
    setOnDeleteId(id);

    setOnDelete(!onDelete);
  }

  return (
    <Card>
      {userRequest.user.vaga?.map((vaga) => {
        return (
          <OverCard>
            <MapCard onClick={() => onLixoDeleted(vaga.id)}>
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
                          habilidade.charAt(0) +
                          habilidade.slice(1).toLowerCase()
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
            {onDeleteId === vaga.id ? (
              <LixoBoolean deleted={onDelete} onClick={() => setOpen(true)}>
                <BsTrash></BsTrash>
              </LixoBoolean>
            ) : (
              <LixoBoolean deleted={onDelete}></LixoBoolean>
            )}
            {isOpen && (
              <DeleteVagasModal
                open={isOpen}
                requestClose={handleOpen}
                isId={onDeleteId}
                deleteItem={deleteItem}
              />
            )}
          </OverCard>
        );
      })}
    </Card>
  );
}
