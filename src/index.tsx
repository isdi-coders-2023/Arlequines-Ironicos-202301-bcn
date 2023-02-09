import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import BeerListContextWrapper from "./store/context/BeerListContextWrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BeerListContextWrapper>
      <GlobalStyles />
      <App />
    </BeerListContextWrapper>
  </React.StrictMode>
);
