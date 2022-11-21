import React from "react";
import produtos from "../../assets/produtos.json";
import CardProduto from "../../components/CardProduto/CardProduto";
import { HomeStyled } from "./styled";

export default function Home(props) {
  const { adicionaAoCarrinho, filtroTexto, filtroOrdem } = props;

  return (
    <HomeStyled>
      <section className="card-container">
        {produtos
          .filter((item) =>
            item.nome.toLowerCase().includes(filtroTexto.toLowerCase())
          )
          .sort((a, b) => {
            if (filtroOrdem === "menor-valor") {
              if (a.preco < b.preco) {
                return -1;
              } else {
                return 1;
              }
            } else if (filtroOrdem === "maior-valor") {
              if (a.preco < b.preco) {
                return 1;
              } else {
                return -1;
              }
            }
          })
          .map((produto) => (
            <CardProduto
              produto={produto}
              adicionaAoCarrinho={adicionaAoCarrinho}
              key={produto.id}
              estaNaTelaHome={true}
            />
          ))}
      </section>
    </HomeStyled>
  );
}
