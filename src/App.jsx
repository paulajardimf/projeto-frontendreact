import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Carrinho from "./screens/Carrinho";
import Home from "./screens/Home";

function App() {
  const [telaAtiva, setTelaAtiva] = useState("home");
  const [pesquisa, setPesquisa] = useState("");
  const [ordem, setOrdem] = useState("");
  const [carrinho, setCarrinho] = useState([]);

  const telaHome = () => {
    setTelaAtiva("Home");
  };
  const telaCarrinho = () => {
    setTelaAtiva("Carrinho");
  };

  const renderizaTela = () => {
    switch (telaAtiva) {
      case "home":
        return <Home pesquisa={pesquisa} setPesquisa={setPesquisa} ordem={ordem} setOrdem={setOrdem} addCarrinho={addCarrinho} />;
      case "carrinho":
        return <Carrinho carrinho={carrinho} />;
      default:
        return <div>Tela não existe</div>;
    }
  };

  const addCarrinho = (novoProduto) => {
    const novoCarrinho = [...carrinho, novoProduto]
    setCarrinho(novoCarrinho)
  }

  return (
    <div>
      <GlobalStyle />
      <Header telaHome={telaHome} telaCarrinho={telaCarrinho} pesquisa={pesquisa} setPesquisa={setPesquisa} ordem={ordem} setOrdem={setOrdem} carrinho={carrinho}/>
      {renderizaTela() }
    </div>
  );
}

export default App;
