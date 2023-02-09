import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BeersContextWrapper from "./store/contexts/beers/BeersContextWrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BeersContextWrapper>
      <App />
    </BeersContextWrapper>
  </React.StrictMode>
);
