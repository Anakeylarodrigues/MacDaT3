import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

`;

export const Header = styled.header`
    border: solid black 2px;
    display: flex;
    justify-content: space-between;
    padding: 5px 30px;
    font-family: sans-serif;

    section {
        display: flex;
        /* border: solid pink 2px; */
        font-size: 13px;
    }

    div {
        display: flex;
        align-items: center;
        margin: 10px;
    }

    .oi {
        background-color: #FFC72C;
        /* border: solid black 2px; */
        border-radius: 5px;
        padding: 5px;
    }
`;
