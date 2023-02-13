import { StyledModal } from "../../services/types/requests";
import { Botoes, Layout, Modal } from "./styles";

export const DeleteVagasModal = ({
  open,
  requestClose,
  isId,
  deleteItem,
}: StyledModal) => {
  return (
    <Modal open={open} requestClose={requestClose} onClick={requestClose}>
      <Layout>
        <h2>Deseja mesmo excluir?</h2>
        <Botoes>
          <button id={"excluir"}>Excluir</button>
          <button id={"sair"} onClick={requestClose}>
            Sair
          </button>
        </Botoes>
      </Layout>
    </Modal>
  );
};
