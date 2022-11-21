import styled from "styled-components";

export const CardProdutoStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin: 15px;
  justify-content: center;

  img {
    width: 400px;
    border-radius: 10px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  button {
    height: 30px;
    background-color: #4848cf;
    color: white;
    border: none;
    :hover {
      background-color: #262668;
      color: white;
    }
  }

  .container-info {
    margin: 10px 0;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button-add {
    height: 35px;
    width: 150px;
    font-size: 1.5rem;
    background-color: #4848cf;
    color: white;
    border: none;
    :hover {
      background-color: #262668;
      color: white;
    }
  }

  .button-quant {
    width: 50px;
  }
  .button-delete {
    width: 80px;
  }
`;
