import styled from "styled-components";

export type StyledModal = {
  open: boolean;
  requestClose: () => void;
};

export const Modal = styled.div<StyledModal>`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  height: 10em;
  width: 20em;
  border-radius: 8px;
  background: #29194d;
  gap: 20px;
  color: #d9d9d9;
`;
export const Botoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;

  button {
    background: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 5em;
    height: 2em;
    font-size: 20px;
    font-weight: bold;
  }
  #excluir {
    :hover {
      background: #c92c2c;
      color: #fff;
    }
  }
  #sair {
    background: #633bbc;
    :hover {
      background: #8257e5;
    }
  }
`;
