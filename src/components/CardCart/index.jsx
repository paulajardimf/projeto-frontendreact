import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CardCartStyled } from "./styled";
import lixeira from "../../assets/icon-lixeira.png";

export default function CardCart({ product }) {
  const context = useContext(GlobalContext);
  const {
    adicionaQuantidadeNoCarrinho,
    diminuiQuantidadeNoCarrinho,
    deletaDoCarrinho,
  } = context;

  const valorTotal = product.quantidade * product.value;

  return (
    <>
      <CardCartStyled>
        <section className="item-carrinho">
          <img
            className="imagem-produto"
            src={product.image}
            alt={product.imageAlt}
          />
          <div className="nome-quantidade">
            <h3>{product.name}</h3>
            <div className="buttons">
              {
                <button
                  className="button-quant"
                  onClick={() => adicionaQuantidadeNoCarrinho(product)}
                >
                  +
                </button>
              }
              {<span>Quant: {product.quantidade}</span>}
              {product.quantidade > 1 && (
                <button
                  className="button-quant"
                  onClick={() => diminuiQuantidadeNoCarrinho(product)}
                >
                  -
                </button>
              )}
            </div>
          </div>
          <div className="delete-total">
            {
              <img
                src={lixeira}
                alt="deleta item"
                className="button-delete"
                onClick={() => deletaDoCarrinho(product)}
              />

            }
            <h3>R$ {product.value.toFixed(2).replace(".", ",")}</h3>
          </div>
        </section>
        <section className="total-item">
          <h3>Subtotal item R$ {valorTotal.toFixed(2).replace(".", ",")}</h3>
        </section>
      </CardCartStyled>
    </>
  );
}
