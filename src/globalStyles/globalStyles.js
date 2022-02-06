import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    background-color: #f88340;
}

* {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}

button {
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
}
ul {
    list-style: none;
}

a {
    text-decoration: none;
}
`;
