import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLoginForm = styled(Div)`
  flex-direction: column;
  background: #202024;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
  padding: 1.5em;
  height: 100%;

  h1 {
    font-size: 30px;
    padding: 0.5em;
  }
`;

export const Radio = styled(Div)`
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  height: 50px;
  border-radius: 5px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 4px;

    input {
      cursor: pointer;
    }
    label {
      cursor: pointer;
    }
  }
`;
export const Contrato = styled(Radio)`
  justify-content: center;
  gap: 3em;
`;

export const Caixa = styled(Div)`
  flex-direction: column;
  width: 100%;

  h2 {
    margin-top: 1em;
    font-size: 25px;
    padding: 0.2em;
  }
`;



export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  gap: 12px;

  textarea {
    width: 100%;
    padding: 3px 5px;
    border-radius: 5px;
    height: 50px;
    background: ${(props) => props.theme.darkTheme.bg};
    color: #ffff;
    font-size: 1.2rem;

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
