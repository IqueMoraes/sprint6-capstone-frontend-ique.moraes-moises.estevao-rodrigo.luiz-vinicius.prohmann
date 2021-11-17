import styled from "styled-components";

export const FullScreen = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: beige;
  background-image: linear-gradient(#5f4d93, #db7483);
  padding-top: 50px;

  figcaption {
    display: none;
  }

  nav {
    display: none;
  }

  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  .top_section {
    display: flex;
    flex-direction: column;
    align-items: center;

    img,
    figure {
      min-width: 80px;
      min-height: 40px;
    }

    figure {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      justify-content: center;
    }

    .text_open {
      width: 80%;
      text-align: center;
    }
  }

  @media (min-width: 800px) {
    nav {
      display: flex;
    }
  }
`;

export const BoxBody = styled.article`
  width: 80%;
  padding: 10px;

  background-color: #ffffff;
  border-radius: 20px;
  text-align: justify;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .section_about {
    width: 50%;
    margin: 20px 0;
  }

  .section_min_cards {
    width: 70%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .section_min_cards_box {
      min-width: 200px;
      width: 200px;
      margin: 30px;
    }
  }

  .section_tean {
    width: 70%;
    background-color: aliceblue;

    display: flex;
    flex-direction: column;
    align-items: center;

    .section_tean_devs {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
  }

  .section_start {
    width: 90%;
    margin: 20px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

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