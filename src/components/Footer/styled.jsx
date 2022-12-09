import styled from "styled-components";

export const FooterStyled = styled.footer`
  bottom: 0;
  height: 120px;
  width: 100%;
  background-color: #131313;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  left: 0;

  .container-redes {
    width: 100px;
    display: flex;
    justify-content: space-between;
    a {
      img {
        height: 30px;
      }
    }
    a:hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
      transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    }
  }
`;
