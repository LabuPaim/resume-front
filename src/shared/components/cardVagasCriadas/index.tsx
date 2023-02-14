import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { BsTrash } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
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
  Opcoes,
} from "./styles";
import { DeleteVagasModal } from "../modal/deleteVagas";

export function VagasCriadasList() {
  const { userRequest } = useContext(AuthContext);
  const [onDeleteId, setOnDeleteId] = useState("");
  const [onDelete, setOnDelete] = useState(false);

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

  const navigate = useNavigate();

  return (
    <Card>
      {userRequest?.user?.vaga?.map((vaga) => {
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
            {onDeleteId === vaga.id && (
              <Opcoes deleted={onDelete}>
                <LixoBoolean onClick={() => setOpen(true)}>
                  <BsTrash></BsTrash>
                </LixoBoolean>
                <LixoBoolean
                  id={"edit"}
                  onClick={() => navigate("/criarvagas/" + vaga.id)}
                >
                  <AiFillEdit></AiFillEdit>
                </LixoBoolean>
              </Opcoes>
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
