import { createGlobalStyle } from "styled-components";
import "@fontsource/quicksand";
import "@fontsource/rosarivo";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: "Quicksand", sans-serif;
  }
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  button {
    font-family: inherit;
  }
  h1,
  h2 {
    margin: 0;
    font-family: "Rosarivo", serif;
  }

`;
export default GlobalStyle;
