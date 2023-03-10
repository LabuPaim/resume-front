import styled, { css } from "styled-components";

export type StyledUserRequest = {
  userRequest: boolean;
};

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
  justify-content: space-evenly;
  background: #121214;
  width: 100%;
  height: 80px;
  min-height: 80px;
  border-bottom: 1px solid #a3a3a3;
`;

export const StyleLogo = styled(Div)`
  display: flex;
  justify-content: center;
  width: 17em;
  height: 100%;
`;

export const ButtonMiddle = styled(Div)`
  background: #121214;
  width: 25em;
  height: 100%;
  gap: 0.8em;

  button {
    border: 1px solid transparent;
    color: #a3a3a3;
    width: 10em;
    border-radius: 0px;
    height: 100%;
    transition: 0.2s;

    :hover {
      background: #121214;
      color: #ffffff;
      border-bottom: 4px solid #8257e5;
    }
  }
`;

export const ButtonContext = styled(Div)<StyledUserRequest>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #121214;
  width: 17em;
  height: 100%;
  gap: 1em;

  #entrar {
    width: 8em;
    height: 65%;
    border: 1px solid transparent;
  }

  #cadastro {
    width: 8em;
    height: 65%;
  }

  ${(props) =>
    props.userRequest &&
    css`
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3em;
        height: 3em;
        gap: 0em;

        .icons {
          display: block;
          position: absolute;
          font-size: 3em;
          cursor: pointer;
          color: #a3a3a3;
          z-index: 1000;
          :hover {
            color: #ffffff;
          }
        }

        :hover {
          width: 8em;
          height: 8em;
          ul {
            display: flex;
            position: relative;
          }
        }
      }
    `}
`;

export type Empresa = {
  empresa: string;
};

export const Ull = styled.ul<Empresa>`
  display: none;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  background: #141318;
  height: 100%;
  padding: 1em;
  font-size: 1.5em;
  gap: 0.5em;
  list-style: none;
  margin: 1.5em 0em 0em 6em;
  z-index: 100;
  border-radius: 4px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3em;

    cursor: pointer;
    color: #a3a3a3;
    border-radius: 3px;
    :hover {
      color: #ffffff;
      background: #8257e5;
    }
  }

  ${(props) =>
    props.empresa === "empresa" &&
    css`
      margin: 4.5em 0em 0em 6em;
    `}
`;
