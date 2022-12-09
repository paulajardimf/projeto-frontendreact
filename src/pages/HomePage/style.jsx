import styled from "styled-components";
import gifBackground from "../../assets/background.gif";

export const HomePageStyled = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 120px);

  .container-banner {
    display: flex;
    align-items: center;
    .gif-background {
      width: 100%;
      height: 600px;
      z-index: -1;
      position: relative;
    }
    .banner-info {
      z-index: 1;
      position: absolute;
      display: flex;
      flex-direction: row;
      align-content: space-between;
      width: 100%;
      margin: 0 60px;
      .banner-text {
        z-index: 1;
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 100%;
        h2 {
          font-size: 3.375rem;
          font-weight: 900;
        }
        h3 {
          font-size: 2.375rem;
          font-weight: 800;
        }
      }
      img {
        width: 100px;
        z-index: 1;
        position: absolute;
      }
    }
  }

  .container-main {
    display: flex;
    flex-direction: row;
    width: 100%;
    background-image: linear-gradient(to bottom, #ffffff, #b8c4ff, #131313);
    .container-filtro {
      display: flex;
      flex-direction: column;
      width: 500px;
    }

    .container-products {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 80px;
      padding: 50px 50px;
      align-items: center;
  
    }
  }
`;
