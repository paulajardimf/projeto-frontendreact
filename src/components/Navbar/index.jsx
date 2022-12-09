import { useNavigate } from "react-router-dom";
import { goToHomePage, goToCartPage } from "../../routes/coordinator";
import { NavbarStyled } from "./styled";
import logo from "../../assets/logo.svg";
import cart from "../../assets/icon-cart.svg";
import home from "../../assets/icon-home.svg";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function Navbar() {
  const navigate = useNavigate();

  const context = useContext(GlobalContext);
  const { atualizaFiltroTexto, filtroTexto, quantidade } = context;

  return (
    <>
      <NavbarStyled>
        <a onClick={() => goToHomePage(navigate)}>
          <img className="logo" src={logo} alt="logo Astro Dev" />
        </a>
        <div className="input">
          <input
            type="text"
            placeholder="Buscar produto"
            onChange={atualizaFiltroTexto}
            value={filtroTexto}
          />
        </div>
        <div className="container-buttons">
          <button onClick={() => goToHomePage(navigate)}>
            <img className="icon-home" src={home} alt="home page" />
          </button>
          <button onClick={() => goToCartPage(navigate)}>
            {quantidade > 0 && <span>{quantidade}</span>}{" "}
            <img src={cart} alt="carrinho" />{" "}
          </button>
        </div>
      </NavbarStyled>
    </>
  );
}
