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

export const ButtonContext = styled(Div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #121214;
  width: 17em;
  height: 100%;
  gap: 1em;
  border: 2px solid red;

  #entrar {
    width: 8em;
    height: 65%;
    border: 1px solid transparent;
  }

  #cadastro {
    width: 8em;
    height: 65%;
  }
  .perfil {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85%;
    border: 1px solid transparent;
    font-size: 2.5em;
    :hover {
      color: #121214;
    }
  }

  :hover ul {
    display: block;
  }

  :hover .icons {
    display: none;
  }

  .icons {
    font-size: 2.5em;
  }

  ul {
    /* width: 100%;
    height: 100%; */
    /* z-index: 1000; */
    /* cursor: pointer; */
    list-style: none;
    border: 1px solid #8257e5;
    float: left;

    /* position: absolute; */
    display: none;

    li {
      position: relative;
      /* float: left; */
      /* border-right: 1px solid #c0c0c0; */
      a {
        color: #333;
        text-decoration: none;
        padding: 5px 10px;
        display: block;
        :hover {
          background: #333;
          color: #fff;
          -moz-box-shadow: 0 3px 10px 0 #ccc;
          -webkit-box-shadow: 0 3px 10px 0 #ccc;
          text-shadow: 0px 0px 5px #fff;
        }
      }
    }
  }
`;
