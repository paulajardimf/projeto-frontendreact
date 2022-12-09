import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CardProductStyled } from "./styled";
import iconCart from "../../assets/icon-cart.svg";

export default function CardProduct({ product }) {
  const context = useContext(GlobalContext);
  const { adicionaAoCarrinho } = context;

  return (
    <CardProductStyled>
      <img
        className="product-image"
        src={product.image}
        alt={product.imageAlt}
      />
        <div className="container-info">
          <h3>{product.name}</h3>
          <h4>R$ {product.value.toFixed(2).replace(".", ",")}</h4>
        </div>
        <button onClick={() => adicionaAoCarrinho(product)}>
          <img src={iconCart} alt="" />
          Comprar
        </button>
    </CardProductStyled>
  );
}
