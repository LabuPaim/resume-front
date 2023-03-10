import styled, { css } from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled(Div)`
  flex-direction: column;
  gap: 2em;
`;

export const Input = styled.input`
  padding: 8px;
  width: 60%;
  border-radius: 10px;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  ::placeholder {
    color: #121214;
    opacity: 1;
  }

  :focus {
    ::placeholder {
      color: #8257e5;
      opacity: 1;
    }
    background: #21143d;
    border: 2px solid #8257e5;
  }
`;

export const MapCard = styled.button`
  display: flex;

  flex-direction: column;
  background: none;
  border: none;
  align-items: flex-start;
  gap: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  width: 90%;
  color: #fff;
  cursor: pointer;

  :hover {
    border: 2px solid #8257e5;
  }
`;

export const Principal = styled(Div)`
  gap: 50px;
`;

export const OverCard = styled(Div)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 40em;
  gap: 10px;
`;

export type lixoBoolean = {
  deleted: boolean;
};

export const Opcoes = styled.div<lixoBoolean>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 8%;

  #edit {
    :hover {
      background: #8257e5;
      color: #fff;
    }
  }

  ${(props) =>
    props.deleted &&
    css`
      display: none;
    `}
`;
export const LixoBoolean = styled.button`
  display: flex;
  justify-content: center;
  background: none;
  border: none;
  color: #a3a3a3;
  font-size: 20px;
  left: 87.5em;

  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  :hover {
    background: #c92c2c;
    color: #fff;
  }
`;

export const Secundario = styled(Div)`
  gap: 20px;
  h3 {
    color: #ccc;
    padding: 5px;
    border-radius: 8px;
    background: #221a38;
  }
`;

export const Habilidades = styled(Div)`
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  h2 {
    color: #ccc;
  }
`;
export const Skills = styled(Div)`
  gap: 15px;
  h3 {
    color: #221a38;
    padding: 2px;
    border-radius: 8px;
    background: #ccc;
  }
`;
export const Stackoffice = styled(Div)`
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  h1 {
  }
`;
