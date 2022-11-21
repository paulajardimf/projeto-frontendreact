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
      <div className="container-info">
        <h3>{produto.nome}</h3>
        <h3>R$ {produto.preco.toFixed(2).replace(".", ",")}</h3>
      </div>
      <div className="buttons">
        {estaNaTelaCarrinho && produto.quantidade > 1 && (
          <button
            className="button-quant"
            onClick={() => diminuiQuantidadeNoCarrinho(produto)}
          >
            -
          </button>
        )}
        {estaNaTelaCarrinho && (
          <button
            className="button-quant"
            onClick={() => adicionaQuantidadeNoCarrinho(produto)}
          >
            +
          </button>
        )}
        {estaNaTelaHome && (
          <button
            className="button-add"
            onClick={() => adicionaAoCarrinho(produto)}
          >
            Comprar
          </button>
        )}
        {estaNaTelaCarrinho && <span>Quant: {produto.quantidade}</span>}
        {estaNaTelaCarrinho && (
          <button className="button-delete" onClick={() => deletaDoCarrinho(produto)}>
            Excluir
          </button>
        )}
      </div>
    </CardProdutoStyled>
  );
}
