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
    width: 350px;
    height: 38px;
    border-radius: 40px;
    box-shadow: 6px 6px 50px 0px #37373740;

    input {
      width: 310px;
      height: 38px;
      border: none;
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
    margin-right: 40px;

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

      span{
        color: white;
      }
    }
  }
`;
