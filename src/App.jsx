import Router from "./routes/Router";
import { useEffect, useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { GlobalContext } from "./contexts/GlobalContext";
import products from "./assets/products.json";

export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [filtroTexto, setFiltroTexto] = useState("");
  const [filtroOrdem, setFiltroOrdem] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [valorMin, setValorMin] = useState("");
  const [valorMax, setValorMax] = useState("");

  const adicionaAoCarrinho = (produtoAAdicionar) => {
    const novoCarrinho = [...carrinho];

    const produtoAchado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoAAdicionar.id
    );

    if (!produtoAchado) {
      const novoProduto = {
        ...produtoAAdicionar,
        quantidade: 1,
      };
      setQuantidade(quantidade + 1);
      novoCarrinho.push(novoProduto);
    } else {
      setQuantidade(quantidade + 1);
      produtoAchado.quantidade++;
    }

    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    localStorage.setItem("quantidade", JSON.stringify(quantidade));
  };

  const adicionaQuantidadeNoCarrinho = (produtoASomar) => {
    const novoCarrinho = [...carrinho];
    const produtoAchado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoASomar.id
    );

    produtoAchado.quantidade++;

    setQuantidade(quantidade + 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    localStorage.setItem("quantidade", JSON.stringify(quantidade));
  };

  const diminuiQuantidadeNoCarrinho = (produtoADiminuir) => {
    const novoCarrinho = [...carrinho];
    const produtoAchado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoADiminuir.id
    );

    produtoAchado.quantidade--;

    setQuantidade(quantidade - 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    localStorage.setItem("quantidade", JSON.stringify(quantidade));
  };

  const deletaDoCarrinho = (produtoADeletar) => {
    const novoCarrinho = [...carrinho];

    const indexAchado = novoCarrinho.findIndex(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoADeletar.id
    );
    setQuantidade(quantidade - carrinho[indexAchado].quantidade);
    novoCarrinho.splice(indexAchado, 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    localStorage.setItem("quantidade", JSON.stringify(quantidade - 1));
  };

  const atualizaFiltroTexto = (e) => {
    setFiltroTexto(e.target.value);
  };

  const atualizaFiltroOrdem = (e) => {
    setFiltroOrdem(e.target.value);
  };

  const atualizaValorMin = (e) => {
    setValorMin(e.target.value);
  };

  const atualizaValorMax = (e) => {
    setValorMax(e.target.value);
  };

  const limpaPesquisa = () => {
    setFiltroTexto("");
    setFiltroOrdem("");
    setValorMin("");
    setValorMax("");
  };

  useEffect(() => {
    if (carrinho.length > 0) {
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
  }, [carrinho]);

  useEffect(() => {
    const listaJson = JSON.parse(localStorage.getItem("carrinho"));
    if (listaJson) {
      setCarrinho(listaJson);
    }
  }, []);

  useEffect(() => {
    if (quantidade > 0) {
      localStorage.setItem("quantidade", JSON.stringify(quantidade));
    }
  }, [quantidade]);

  useEffect(() => {
    const listaJson = JSON.parse(localStorage.getItem("quantidade"));
    if (listaJson) {
      setQuantidade(listaJson);
    }
  }, []);

  // organização do contexto
  const context = {
    carrinho,
    setCarrinho,
    adicionaAoCarrinho,
    adicionaQuantidadeNoCarrinho,
    diminuiQuantidadeNoCarrinho,
    deletaDoCarrinho,
    filtroTexto,
    filtroOrdem,
    atualizaFiltroTexto,
    atualizaFiltroOrdem,
    limpaPesquisa,
    products,
    quantidade,
    valorMin,
    valorMax,
    atualizaValorMin,
    atualizaValorMax,
  };

  return (
    <>
      <GlobalContext.Provider value={context}>
        <GlobalStyle />
        <Router />
      </GlobalContext.Provider>
    </>
  );
}
