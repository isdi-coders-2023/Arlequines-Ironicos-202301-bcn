import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import BeersContextWrapper from "./store/contexts/beers/BeersContextWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: "" }],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BeersContextWrapper>
      <GlobalStyles />
      <RouterProvider router={router} />
    </BeersContextWrapper>
  </React.StrictMode>
);
