import CardCart from "../../components/CardCart";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CartPageStyled } from "./styled";

export default function CartPage() {
  const context = useContext(GlobalContext);
  const { carrinho } = context;

  const total = carrinho.reduce(
    (acc, produto) => produto.value * produto.quantidade + acc,
    0
  );

  return (
    <>
      <CartPageStyled>
        <section className="container-card">
          {carrinho.map((product) => (
            <CardCart product={product} key={product.id} />
          ))}
          <hr />
        </section>
        {carrinho.length >= 1 && (
          <section className="container-total">
            <h3>Frete grátis</h3>
            <section className="total-compra">
              <h3>Total = R$ {total.toFixed(2).replace(".", ",")}</h3>
              <p> ou até 4x sem juros de R$ {(total / 4).toFixed(2).replace(".",",")}</p>
            </section>
            <button>Fechar pedido</button>
          </section>
        )}
        {carrinho.length === 0 && <h2>Carrinho vazio</h2>}
      </CartPageStyled>
    </>
  );
}
