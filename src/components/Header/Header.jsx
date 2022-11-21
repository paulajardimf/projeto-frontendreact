import { HeaderStyled } from "./styled";
import bag from "../../assets/bag.svg"

export default function Header(props) {
  const {
    irParaTelaHome,
    irParaTelaCarrinho,
    itensNoCarrinho,
    filtroTexto,
    filtroOrdem,
    atualizaFiltroTexto,
    atualizaFiltroOrdem,
    limpaPesquisa,
  } = props;

  return (
    <HeaderStyled>
      <button className="button-homepage" onClick={irParaTelaHome}>Home</button>
      <section className="filter">
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
        <button onClick={limpaPesquisa}>Limpar</button>
      </section>
      <button className="button-cart" onClick={irParaTelaCarrinho}>
        {itensNoCarrinho > 0 && <span>{itensNoCarrinho}</span>}
        <img src={bag} alt="ícone carrinho" />
      </button>
    </HeaderStyled>
  );
}
