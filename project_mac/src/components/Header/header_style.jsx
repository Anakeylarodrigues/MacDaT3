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

    section {
        display: flex;
        border: solid pink 2px;
    }

    div {
        display: flex;
        align-items: center;
    }
`;
