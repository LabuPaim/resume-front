import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HomePage = styled(Div)`
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const Banner = styled.img`
  width: 100%;
  height: 70vh;
  background-size: cover;
  display: flex;
  background-attachment: fixed;
  filter: brightness(30%)
`;
