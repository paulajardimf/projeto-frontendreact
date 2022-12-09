import {FooterStyled} from "./styled"
import linkedin from "../../assets/icon-linkedin.svg"
import github from "../../assets/icon-github.svg"

export default function Footer() {
  return(
    <>
      <FooterStyled>
        Desenvolvido por Paula Jardim - 2022
        <div className="container-redes">
          <a href="https://www.linkedin.com/in/paulajardimf/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/paulajardimf" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" />
          </a>
        </div>
      </FooterStyled>
    </>
  )
};
