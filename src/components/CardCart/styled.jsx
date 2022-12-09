import styled from "styled-components";

export const CardCartStyled = styled.main`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  border-bottom: solid #bebebe 1px;
  align-items: center;
  justify-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 200px;

  .item-carrinho {
    display: flex;
    flex-direction: row;
    .imagem-produto {
      height: 160px;
      margin: 0 20px;
    }
  }

  .nome-quantidade {
    display: flex;
    flex-direction: column;
    height: 170px;
    width: 450px;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;

    .buttons {
      display: flex;
      align-items: center;
      gap: 5px;
      color: black;
      button {
        border: none;
        border-radius: 7px;
        font-size: 2rem;
        width: 80px;
        height: 30px;
        cursor: pointer;
        align-items: center;
      }
      button:hover {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
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

  .button-quant {
    border: none;
    background-color: #131313;
    color: white;
    border-radius: 10px;
    width: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .delete-total {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 80px;
    gap: 30px;
    .button-delete {
      width: 30px;
    }
    .button-delete:hover{
      -webkit-transform: scale(1.05);
        transform: scale(1.05);
        -webkit-transition-timing-function: cubic-bezier(
          0.47,
          2.02,
          0.31,
          -0.36
        );
        transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    }
  }

  .total-item {
    width: 690px;
    display: flex;
    justify-content: end;
  }
`;
