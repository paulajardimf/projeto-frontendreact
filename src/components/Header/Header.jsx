import { ContainerFiltro, HeaderStyled } from "./styled";

export default function Header(props) {
  const {
    irParaTelaHome,
    irParaTelaCarrinho,
    itensNoCarrinho,
    filtroTexto,
    filtroOrdem,
    atualizaFiltroTexto,
    atualizaFiltroOrdem,
    limpaPesquisa
  } = props;

  return (
    <HeaderStyled>
      <ContainerFiltro>
        <input
          type="text"
          placeholder="Buscar"
          onChange={atualizaFiltroTexto}
          value={filtroTexto}
        />
        <select onChange={atualizaFiltroOrdem} value={filtroOrdem}>
          <option value="">Ordenar</option>
          <option value="menor-valor">Menor valor</option>
          <option value="maior-valor">Maior valor</option>
        </select>
        <button onClick={limpaPesquisa}>Limpar Pesquisa</button>
      </ContainerFiltro>
      <button onClick={irParaTelaHome}>Home</button>
      <button onClick={irParaTelaCarrinho}>
        {
          itensNoCarrinho > 0 && <span>{itensNoCarrinho}</span>
        }
        Carrinho</button>
    </HeaderStyled>
  );
}
