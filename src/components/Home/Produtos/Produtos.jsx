import { CardProduto, ContainerCards } from "./styled";

export default function Produtos(props) {
  


  return (
    <ContainerCards>
      {props.produtos
        .filter((produto) => {
          return produto.nome
            .toLowerCase()
            .includes(props.pesquisa.toLowerCase())
        })
        .sort((a,b) => {
          if (props.ordem === "menor-valor") {
            if(a.preco < b.preco){
              return -1
            } else {
              return 1
            }
          } else if (props.ordem === "maior-valor") {
            if (a.preco < b.preco) {
              return 1
            } else {
              return -1
            }
          }
        })
        .map((produto) => {
          return (
            <CardProduto key={produto.id}>
              <img src="{produto.imagem}" alt="camiseta" />
              <h3>{produto.nome}</h3>
              <h3>R$ {produto.preco.toFixed(2).replace(".", ",")}</h3>
              <select>
                <option value="">Tamanho</option>
                {produto.tamanho.map((tam) => {
                  return(
                    <option key={tam} value={tam}>{tam}</option>
                  )
                })}
              </select>
              <button /*</CardProduto>onClick={() => props.adicionaItemNoCarrinho(produto.id)}*/>Adicionar ao Carrinho</button>
            </CardProduto>
          );
        })
      }
    </ContainerCards>
  );
}
