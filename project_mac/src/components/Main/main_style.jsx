import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

`;

export const Main = styled.main`

    /* height: 40vw; */
    border: solid red 2px;

    section {
        background-color: #FFC72C;
        /* padding: 27.5px; */
        /* display: flex;
        justify-content: space-around; */
    }

    .imagem {
        border: solid green 2px;
        display: flex;
        justify-content: space-around;
        padding: 27.5px;
    }

    .imagem h1 {
        width: 35vw;
        font-size: 50px;
        text-transform: uppercase;
        color: white;
        padding: 90px 0px;
    }

    /* .frase {
        border: solid blue 2px;
        width: 35vw;
        font-size: 30px;
        text-transform: uppercase;
        color: white;
        padding: 90px 0px;
    } */

    span {
        color: red;
    }

    .imagens {
        border: solid purple 2px;
        /* width: 35vw; */
        display: flex;
        justify-content: center;
    }

    .imagens img {
        margin: 0px 50px;
        cursor: pointer;
    }

    .parte2 {
        background-color: #FFBC0D;
        padding: 27.5px;
    }

    h2 {
        color: white;
        text-align: center;
    }

`;

export const Card = styled.main`

    border: solid purple 2px;
    width: 20vw;
    display: flex;
    justify-content: space-between;
    

    .card {
        background-color: white;
        border: solid black 2px;
        border-radius: 10px 10px 15px 15px;
        width: 15vw;
        height: 35vh;
        text-align: center;
    }

    img {
        width: 100%;
    }

    p {
        font-weight: bold;
        text-align: center;
        margin: 10px;
    }

    button {
        background-color: #FFBC0D;
        border-radius: 5px;
        padding: 5px;
    }

    .teste {
        border: solid blue 2px;
    }

    /* .principal {
        background-color: #FFBC0D;
        border: solid magenta 2px;
        display: flex;
        justify-content: space-around;
    } */

    /* .imagens {
        width: 100%;
        display: flex;
        justify-content: center;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;  
        background-color: #feb706;
        padding: 5vw 5vw;
    } */
    
`