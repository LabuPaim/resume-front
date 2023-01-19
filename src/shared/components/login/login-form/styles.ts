import styled from "styled-components";

export const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #202024;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
  height: 600px;
`;

export type StyledFormProps = {
  error: boolean;
};

export const StyledForm = styled.form<StyledFormProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  gap: 8px;

  #inputEmail {
    width: 100%;
    padding: 3px 5px;
    border-radius: 5px;
    border: ${(props) => (props.error ? "solid 2px red" : "none")};
    height: 50px;
    background: ${(props) => props.theme.darkTheme.bg};
    color: #ffff;
    font-size: 1.2rem;

    :focus {
      border: 2px solid #8257e5;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background: ${(props) => props.theme.darkTheme.bg};

    input {
      display: block;
      position: absolute;
      height: 50px;
      width: 319px;
      padding: 3px 5px;
      border-radius: 5px;
      font-size: 1.2rem;
      border: none;
      border: ${(props) => (props.error ? "solid 2px red" : "none")};
      background: ${(props) => props.theme.darkTheme.bg};
      color: #ffff;
      :focus {
        border: 2px solid #8257e5;
      }
    }

    button {
      display: flex;
      align-items: center;
      height: 90%;
      border: none;
      padding: 0 15px;
      margin: 0 4px 0 0;
      cursor: pointer;
      border-radius: 0 5px 5px 0;
      background: ${(props) => props.theme.darkTheme.bg};
      color: #8257e5;
      z-index: 1;
    }
    :focus {
      border: 2px solid #8257e5;
    }
  }

  h3 {
    display: flex;
    cursor: pointer;
    padding: 8px 5px;
    font-size: 14px;
    color: #633bbc;
    transition: 0.5s;

    :hover {
      color: #8257e5;
    }
  }

  #login {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    margin: 22px 0 0 0;
    font-size: 18px;
    font-weight: bold;
    border: none;
    background: #633bbc;
    color: #ffff;
    cursor: pointer;
    transition: 0.5s;

    :hover {
      background: #8257e5;
    }
  }
`;
