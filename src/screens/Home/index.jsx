import React, { useState } from "react";
import { HomeStyled } from "./styled";
import Carrinho from "../Carrinho/";
import produtos from "../../assets/produtos.json";

export default function Home(props) {
  // const [carrinho, setCarrinho] = useState([]);

  const limpaPesquisa = () => {
    props.setPesquisa("");
    props.setOrdem("");
  };

  const filtro = () => {
    const atualizaPesquisa = (e) => {
      props.setPesquisa(e.target.value);
    };

    const atualizaFiltro = (e) => {
      props.setOrdem(e.target.value);
    };

    return (
      <ContainerFiltro>
        <input
          type="text"
          placeholder="Buscar"
          onChange={atualizaPesquisa}
          value={props.pesquisa}
        />
        <select onChange={atualizaFiltro} value={props.ordem}>
          <option value="">Ordenar</option>
          <option value="menor-valor">Menor valor</option>
          <option value="maior-valor">Maior valor</option>
        </select>
        <button onClick={limpaPesquisa}>Limpar Pesquisa</button>
      </ContainerFiltro>
    );
  };

  return (
    <HomeStyled>
      {() => filtro()}
      <section className="card-container">
        {produtos
          .filter((produto) => {
            return produto.nome
              .toLowerCase()
              .includes(props.pesquisa.toLowerCase());
          })
          .sort((a, b) => {
            if (props.ordem === "menor-valor") {
              if (a.preco < b.preco) {
                return -1;
              } else {
                return 1;
              }
            } else if (props.ordem === "maior-valor") {
              if (a.preco < b.preco) {
                return 1;
              } else {
                return -1;
              }
            }
          })
          .map((produto) => {
            return (
              <div className="card-produto" key={produto.id}>
                <img src={produto.imagem} alt={produto.imagemAlt} />
                <h3>{produto.nome}</h3>
                <h3>R$ {produto.preco.toFixed(2).replace(".", ",")}</h3>
                <select>
                  <option value="">Tamanho</option>
                  {produto.tamanho.map((tam) => {
                    return (
                      <option key={tam} value={tam}>
                        {tam}
                      </option>
                    );
                  })}
                </select>
                <button>Adicionar ao Carrinho</button>
              </div>
            );
          })}
      </section>
      <Carrinho />
    </HomeStyled>
  );
}
