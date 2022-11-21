import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Carrinho from "./screens/Carrinho";
import Home from "./screens/Home";

function App() {
  const [telaAtiva, setTelaAtiva] = useState("Home");
  const [carrinho, setCarrinho] = useState([]);
  const [filtroTexto, setFiltroTexto] = useState("");
  const [filtroOrdem, setFiltroOrdem] = useState("");

  const irParaTelaHome = () => {
    setTelaAtiva("Home");
  };
  const irParaTelaCarrinho = () => {
    setTelaAtiva("Carrinho");
  };

  const adicionaAoCarrinho = (produtoAADicionar) => {
    const novoCarrinho = [...carrinho];

    const produtoAchado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoAADicionar.id
    );

    if (!produtoAchado) {
      const novoProduto = {
        ...produtoAADicionar,
        quantidade: 1,
      }
      novoCarrinho.push(novoProduto)
    } else {
      produtoAchado.quantidade++;
    }

    setCarrinho(novoCarrinho);
  };

  const adicionaQuantidadeNoCarrinho = (produtoASomar) => {
    const novoCarrinho = [...carrinho];
    const produtoAchado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoASomar.id
    );

    produtoAchado.quantidade++;

    setCarrinho(novoCarrinho);
  };

  const diminuiQuantidadeNoCarrinho = (produtoADiminuir) => {
    const novoCarrinho = [...carrinho];

    const produtoAchado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoADiminuir.id
    );

    produtoAchado.quantidade--;

    setCarrinho(novoCarrinho);
  };

  const deletaDoCarrinho = (produtoADeletar) => {
    const novoCarrinho = [...carrinho];

    const indexAchado = novoCarrinho.findIndex(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoADeletar.id
    );

    novoCarrinho.splice(indexAchado, 1);
    setCarrinho(novoCarrinho);
  };

  const atualizaFiltroTexto = (e) => {
    setFiltroTexto(e.target.value);
  };

  const atualizaFiltroOrdem = (e) => {
    setFiltroOrdem(e.target.value);
  };

  const limpaPesquisa = () => {
    setFiltroTexto("");
    setFiltroOrdem("");
  };


  const renderizaTela = () => {
    switch (telaAtiva) {
      case "Home":
        return (
          <Home
            adicionaAoCarrinho={adicionaAoCarrinho}
            filtroTexto={filtroTexto}
            filtroOrdem={filtroOrdem}
          />
        );
      case "Carrinho":
        return (
          <Carrinho
            carrinho={carrinho}
            adicionaQuantidadeNoCarrinho={adicionaQuantidadeNoCarrinho}
            diminuiQuantidadeNoCarrinho={diminuiQuantidadeNoCarrinho}
            deletaDoCarrinho={deletaDoCarrinho}
          />
        )
      default:
        return <div>Tela não existe</div>
    }
  };

  return (
    <div>
      <Header
        irParaTelaHome={irParaTelaHome}
        irParaTelaCarrinho={irParaTelaCarrinho}
        itensNoCarrinho={carrinho.length}
        filtroTexto={filtroTexto}
        filtroOrdem={filtroOrdem}
        limpaPesquisa={limpaPesquisa}
        atualizaFiltroTexto={atualizaFiltroTexto}
        atualizaFiltroOrdem={atualizaFiltroOrdem}
      />
      {renderizaTela()}
    </div>
  );
}

export default App;
