import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BeerListContextElement from "./store/context/BeerListContextElement";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BeerListContextElement>
      <App />
    </BeerListContextElement>
  </React.StrictMode>
);
