import React, {useState} from "react";
import { Header, Main, Footer } from "./styled";
import Produtos from "./Produtos/Produtos";
import Carrinho from "./Carrinho/Carrinho";
import Filtro from "./Filtro/Filtro";
import produtos from "./Produtos/produtos.json";

export default function Home() {
  const [pesquisa, setPesquisa] = useState("");
  const [ordem, setOrdem] = useState("");
  const [carrinho, setCarrinho] = useState([]);

  const limpaPesquisa = () => {
    setPesquisa("")
    setOrdem("")
  }

  const adicionaItemNoCarrinho = (id) => {
    const copiaCarrinho= [...carrinho];
    const itemCarrinho = produtos.filter((item) => id === item.id)

    const item = copiaCarrinho.find((item) => item.id === id);

    if(!item){
      copiaCarrinho.push(itemCarrinho)
    } else {
      item.quantidade += 1
    }

    setCarrinho(copiaCarrinho)

    // const itemCarrinho = produtos.filter((item) => produto === item)
    // setCarrinho([...carrinho, itemCarrinho])
  }

  return (
    <div>
      <Header>Header</Header>
      <Main>
        <Filtro produtos={produtos} pesquisa={pesquisa} setPesquisa={setPesquisa} ordem={ordem} setOrdem={setOrdem} limpaPesquisa={limpaPesquisa}/>
        <Produtos produtos={produtos} pesquisa={pesquisa} setPesquisa={setPesquisa} ordem={ordem} setOrdem={setOrdem} carrinho={carrinho} setCarrinho={setCarrinho} adicionaItemNoCarrinho={adicionaItemNoCarrinho} />
        <Carrinho produtos={produtos} carrinho={carrinho} setCarrinho={setCarrinho} />
      </Main>
      
      <Footer>Footer 2022</Footer>
    </div>
  );
}
