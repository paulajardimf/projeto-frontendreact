import styled from "styled-components";

export const CartPageStyled = styled.main`
display: flex;
flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 120px);
  align-items: center;
  padding: 100px 200px;

  h2 {
    padding: 20px;
  }
  .container-card {
    display: flex;
    flex-wrap: wrap;
  }
  h3 {
    display: flex;
    justify-content: flex-end;
  }

  .container-total{
    margin: 20px 0;
    width: 690px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .total-compra{
    font-size: 2rem;
  }
`;
