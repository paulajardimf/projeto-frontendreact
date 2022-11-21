import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle` 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Inter', sans-serif;
    }

    body{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }


`