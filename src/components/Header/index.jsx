import { HeaderStyled } from "./styled";

export default function Header(props) {
  const { telaCarrinho, telaHome } = props;

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
        <button onClick={props.limpaPesquisa}>Limpar Pesquisa</button>
      </ContainerFiltro>
    );
  };

  return (
    <HeaderStyled>
      {() => filtro()}
      <button onClick={telaHome}>Home</button>
      <button onClick={telaCarrinho}>Carrinho</button>
    </HeaderStyled>
  );
}