import styled from "styled-components";

export const NavbarStyled = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #131313;
  z-index: 2;

  .logo {
    margin-left: 40px;
    height: 80px;
  }

  .input {
    display: flex;
    justify-content: center;
    background-color: white;
    width: 550px;
    height: 38px;
    border-radius: 40px;
    box-shadow: 6px 6px 50px 0px #37373740;
    img{
      width: 25px;
    }
    input {
      width: 500px;
      height: 38px;
      border: none;
      padding: 0 5px;
    }
    input:focus {
      outline: none;
    }
  }

  .container-buttons {
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 55px;

    button {
      height: 55px;
      width: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: transparent;

      .icon-home {
        height: 55px;
        padding-top: 5px;
      }

      span {
        color: white;
        font-size: 1.5rem;
      }
    }
    button:hover {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
      transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    }
  }
`;
