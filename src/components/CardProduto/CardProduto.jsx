import { CardProdutoStyled } from "./styled";

export default function CardProduto(props) {
  const {
    produto,
    adicionaAoCarrinho,
    estaNaTelaHome,
    estaNaTelaCarrinho,
    adicionaQuantidadeNoCarrinho,
    diminuiQuantidadeNoCarrinho,
    deletaDoCarrinho,
  } = props;
  

  return (
    <CardProdutoStyled>
      <img src={produto.imagem} alt={produto.imagemAlt} />
      <h3>{produto.nome}</h3>
      <h3>
        R$ {produto.preco.toFixed(2).replace(".", ",")}
      </h3>
      {
        estaNaTelaCarrinho && produto.quantidade > 1 && 
        <button 
          onClick={() => diminuiQuantidadeNoCarrinho(produto)}>
          -
        </button>
      }{
        estaNaTelaCarrinho && 
        <button
          onClick={() => adicionaQuantidadeNoCarrinho(produto)}
        >
          +
        </button>
      }{
        estaNaTelaHome && 
        <button
          onClick={() => adicionaAoCarrinho(produto)}>
            Adiciona no carrinho
          </button>
      }{
        estaNaTelaCarrinho && <span>Quant: {produto.quantidade}</span>
      }{
        estaNaTelaCarrinho && 
        <button onClick={() => deletaDoCarrinho(produto)}>
          Deleta do Carrinho
        </button>
      }
    </CardProdutoStyled>
  )
}
