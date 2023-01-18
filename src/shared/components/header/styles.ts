import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border: 1px solid #633bbc;
  color: #fff;
  border-radius: 8px;
  padding: 0.5em 1em;
  font-size: 17px;
  transition: 1s;

  :hover {
    background: #633bbc;
  }
`;

export const StyledHeader = styled(Div)`
  justify-content: space-between;
  background: #121214;
  width: 100%;
  height: 80px;
  padding: 0px 10%;
  gap: 1em;
  border-bottom: 1px solid #a3a3a3;
`;

export const ButtonMiddle = styled(Div)`
  background: #121214;
  width: 100%;
  height: 100%;
  gap: 0.8em;

  button {
    border: 1px solid transparent;
    color: #a3a3a3;
    border-radius: 0px;
    height: 100%;
    transition: 0.2s;
    

    :hover {
      background: #121214;
      color: #ffffff;
      border-bottom: 4px solid #8257E5;
    }
  }
`;
export const ButtonContext = styled(Div)`
  background: #121214;
  width: 20em;
  gap: 2em;

  #entrar {
    border: 1px solid transparent;
  }
`;
