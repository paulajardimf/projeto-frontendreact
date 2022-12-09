import { useContext } from "react";
import { HomePageStyled } from "./style";
import { GlobalContext } from "../../contexts/GlobalContext";
import CardProduct from "../../components/CardProduct";
import gifBackground from "../../assets/background.gif";
import astrodev from "../../assets/astro01.png";

export default function HomePage() {
  const context = useContext(GlobalContext);
  const {
    products,
    limpaPesquisa,
    filtroTexto,
    filtroOrdem,
    atualizaFiltroOrdem,
    atualizaFiltroTexto,
    valorMin,
    valorMax,
    atualizaValorMax,
    atualizaValorMin,
  } = context;

  return (
    <>
      <HomePageStyled>
        <div className="container-banner">
          <img src={gifBackground} alt="" className="gif-background" />
          <div className="banner-info">
            <div className="banner-text">
              <h2>O Astrodev voltou,</h2>
              <h3>direto do espaço para a sua casa!</h3>
            </div>
          </div>
        </div>
        <section className="container-main">
          <aside className="container-filtro">
            <section className="filtros">
              <h3>Filtros</h3>
              <hr />
              <section className="inputs">
                <input
                  type="text"
                  placeholder="Buscar produto"
                  onChange={atualizaFiltroTexto}
                  value={filtroTexto}
                />
                <div className="filtro-valor">
                  <p>Valor minimo:</p>
                  <input
                    type="text"
                    className="filtrar-Dados"
                    placeholder="R$ "
                    value={valorMin}
                    onChange={atualizaValorMin}
                  />
                </div>
                <div className="filtro-valor">
                  <p>Valor maximo:</p>
                  <input
                    type="text"
                    className="filtrar-Dados"
                    placeholder="R$ "
                    value={valorMax}
                    onChange={atualizaValorMax}
                  />
                </div>
                <select onChange={atualizaFiltroOrdem} value={filtroOrdem}>
                  <option value="">Ordenar</option>
                  <option value="menor-valor">Menor valor</option>
                  <option value="maior-valor">Maior valor</option>
                </select>
              </section>
                <button onClick={limpaPesquisa}>Limpar</button>
            </section>
          </aside>
          <section>
            <div className="titulo-produtos">
              <h3>Produtos</h3>
              <hr />
            </div>
            <section className="container-products">
              {products
                .filter((item) =>
                  item.name.toLowerCase().includes(filtroTexto.toLowerCase())
                )
                .sort((a, b) => {
                  if (filtroOrdem === "menor-valor") {
                    if (a.value < b.value) {
                      return -1;
                    } else {
                      return 1;
                    }
                  } else if (filtroOrdem === "maior-valor") {
                    if (a.value < b.value) {
                      return 1;
                    } else {
                      return -1;
                    }
                  }
                })
                .filter((produto) => {
                  return produto.value >= valorMin;
                })
                .filter((produto) => {
                  return valorMax ? produto.value <= valorMax : produto;
                })
                .map((product) => (
                  <CardProduct product={product} key={product.id} />
                ))}
            </section>
          </section>
        </section>
      </HomePageStyled>
    </>
  );
}
