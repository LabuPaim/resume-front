import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled(Div)`
  flex-direction: column;
  gap: 2em;
`;

export const MapCard = styled.button`
  display: flex;
  flex-direction: column;
  background: none;
  border: none;
  align-items: flex-start;
  gap: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  color: #fff;
`;

export const Principal = styled(Div)`
  gap: 50px;
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
