import { ContainerCarrinho } from "./styled";
import CardProduto from "../../components/CardProduto/CardProduto";
import React from "react";

export default function Carrinho(props) {
  const {
    carrinho,
    adicionaQuantidadeNoCarrinho,
    diminuiQuantidadeNoCarrinho,
    deletaDoCarrinho,
  } = props;

  const total = carrinho.reduce(
    (acc, produto) => produto.preco * produto.quantidade + acc,
    0
  );


  return (
    <ContainerCarrinho>
      <section>
        <h1>Carrinho</h1>
        <h3>Total = {total.toFixed(2).replace(".", ",")}</h3>
        {/* <hr /> */}
        {carrinho.map((produto) => (
          <CardProduto
            produto={produto}
            key={produto.id}
            estaNaTelaCarrinho={true}
            adicionaQuantidadeNoCarrinho={adicionaQuantidadeNoCarrinho}
            diminuiQuantidadeNoCarrinho={diminuiQuantidadeNoCarrinho}
            deletaDoCarrinho={deletaDoCarrinho}
          />
        ))}
      </section>
    </ContainerCarrinho>
  );
}
