import { ContainerCarrinho } from "./styled";

export default function Carrinho(props) {

  return (
    
    <ContainerCarrinho>
      <div>
        {props.carrinho.map((item, index) => {
          console.log(item);
          console.log(props.carrinho);
          return (
            <div key={index}>
              <p>Foto: {item[index].imagem}</p>
              <p>Nome: {item[index].nome}</p>
              <p>Preço: {item[index].preco}</p>
            </div>
          )
        })
        }
      </div>
    </ContainerCarrinho>
  )
}
