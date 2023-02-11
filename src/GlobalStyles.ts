import { createGlobalStyle } from "styled-components";
import "@fontsource/quicksand";
import "@fontsource/rosarivo";

const GlobalStyles = createGlobalStyle`

  :root {

    --font-primary: "Quicksand", sans-serif;
    --font-secondary: "Rosarivo", serif;

    --font-size-paragraph: 1.3rem;
    --font-size-title: 2rem;
    --font-size-card-title: 1.8rem;
    --font-size-tag-line: 1rem;
    --font-size-subtitle: 2.2rem;
    --font-size-ingredints: 1.5rem;
    --font-size-button: 1.6rem;
    --font-size-logo-sans-serif: 40px;
    --font-size-logo-serif: 64px;

    --color-primary-ocher: rgba(239, 228, 200, 1);
    --color-primary-dark-grey: rgba(44, 35, 42, 1);
    --color-primary-white: rgba(255, 255, 255, 1);
    --color-secondary-light-grey: rgba(212, 211, 211, 1);
    --color-secondary-grey: rgba(84, 84, 84, 0.81);
    --color-secondary-light-ocher: rgba(205, 193, 162, 1);

    --color-icon-cream: rgba(239, 228, 200, 1);
    --color-icon-red: rgba(201, 76, 76, 1);
    --color-icon-white: rgba(255, 255, 255, 1);

    --color-button-brown: rgba(74, 43, 41, 1);
    --color-button-green: rgba(97, 113, 72, 1);
    --color-button-light-grey: rgba(212, 211, 211, 1);

    --color-feeback-red: rgba(201, 76, 76, 1);
    --color-feedback-green: rgba(97, 113, 72, 1);

    --border-radius-standard: 20px;
    --border-radius-minimum: 2px;
    --box-shadow-default:  rgba(50, 50, 93, 0.2) 0px 20px 30px -6px,
    rgba(0, 0, 0, 0.2) 0px 8px 18px -9px;

  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: var(--font-primary);
    font-size: var(--font-size-paragraph);
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
    font-family: var(--font-secondary)
  }

  a,
a:visited,
a:active {
  text-decoration: none;
}

.beer-card {
  &-odd {
    background-color: var(--color-secondary-light-grey);
  }
  &-pair {
    background-color: var(--color-secondary-light-ocher);
  }
}

`;
export default GlobalStyles;
