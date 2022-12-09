import styled from "styled-components";

export const CardProductStyled = styled.section`
  background-image: url(https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020);
  object-fit: cover;
  object-position: 20px 10px;
  background-color: #579aff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  width: 300px;
  height: 479px;
  border-radius: 30px;

  .product-image {
    height: 299px;
    border-radius: 20px;
  }

  .container-info {
    color: #ffffff;
    width: 240px;
    h3 {
      font-weight: 500;
      font-size: 1.5rem;
    }
    h4 {
      font-weight: 400;
      font-size: 1.5rem;
      margin-top: 5px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 42px;
    background-color: #131313;
    width: 210px;
    font-size: 1.5rem;
    color: white;
    img {
      width: 30px;
    }
  }
  button:hover,
  button:active {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  }
`;
