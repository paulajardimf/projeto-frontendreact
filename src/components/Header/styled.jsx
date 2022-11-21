import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: #4848cf;
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-around;

  button {
    font-size: 1.5rem;
    font-weight: 200;
    height: 30px;
  }

  .button-homepage {
    border: none;
    background-color: transparent;
    color: white;
    :hover {
      color: #262668;
    }
  }

  .filter {
    display: flex;
    height: 100px;
    align-items: center;
    input {
      height: 30px;
      width: 500px;
      padding: 3px;
    }
    select {
      height: 30px;
    }
    button {
      font-size: 1rem;
      background-color: white;
      width: 80px;
      border: none;
    }
  }

  .button-cart {
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    color: white;
    span{
      margin: 0 10px;
    }

    img {
      height: 50px;
    }
  }
`;
