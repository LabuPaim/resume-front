import styled from "styled-components";

export const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #202024;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
  height: 600px;

  h2 {
    display: flex;
    align-items: center;
    height: 20%;
    width: 100%;
    padding: 0 0 0 40px;
  }
`;
export const StyledRole = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  height: 80px;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    height: 50%;
    width: 6em;
    color: #595959;
    border-bottom: 3px solid transparent;
  }

  .active {
    color: #ffff;
    border-bottom: 3px solid #8257e5;
  }
`;
export const Radio = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background: ${(props) => props.theme.darkTheme.bg};

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

export type StyledFormProps = {
  error: boolean;
};

export const StyledForm = styled.form<StyledFormProps>`
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
