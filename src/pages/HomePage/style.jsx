import styled from "styled-components";

export const HomePageStyled = styled.main`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 120px);
  width: 100%;
  
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
        color: #ffffff;
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
      .filtros {
        margin: 10px 20px 10px 60px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        h3 {
          font-size: 1.5rem;
        }
        .inputs {
          margin: 20px 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        input {
          border-radius: 30px;
          border: 1px solid #3e3e3e;
          padding: 0 10px;
          height: 30px;
          width: 100%;
        }
        .filtro-valor {
          font-size: 1rem;
        }
        select {
          border-radius: 30px;
          border: 1px solid #3e3e3e;
          padding: 0 10px;
          height: 30px;
          width: 100%;
        }
        button {
          background-color: #131313;
          color: white;
          border-radius: 30px;
          border: none;
          height: 40px;
          font-weight: 600;
          font-size: 1rem;
        }
        button:hover {
          -webkit-transform: scale(1.02);
          transform: scale(1.02);
          -webkit-transition-timing-function: cubic-bezier(
            0.47,
            2.02,
            0.31,
            -0.36
          );
          transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
        }
      }
    }

    .titulo-produtos {
      display: flex;
      flex-direction: column;
      padding: 0 65px;
      gap: 10px;
      font-size: 1.3rem;
      margin: 10px 0;
    }

    .container-products {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 80px;
      padding: 25px 50px;
      align-items: center;
    }
  }
`;
