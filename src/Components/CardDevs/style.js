import styled from "styled-components";

export const BoxDevs = styled.div`
  width: 250px;
  height: 350px;
  margin: 10px 5px;
  background-image: linear-gradient(#5f4d93, #db7483);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .BoxImage {
    height: 180px;
    width: 180px;
    margin: 10px;
    border-radius: 50%;
    background-color: aliceblue;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .SocialBox {
    height: 50px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;
