import styled from "styled-components";

export const FullScreen = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: beige;
  background-image: linear-gradient(#5f4d93, #db7483);

  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxBody = styled.article`
  width: 80%;

  background-color: #ffffff;
  border-radius: 20px;
  text-align: justify;

  @media (min-width: 800px) {
    width: 90%;
    padding: 50px 30px;
  }
`;

export const BarNavigation = styled.nav`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    min-width: 100%;
    min-height: 80px;
    background-color: aliceblue;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }
`;
