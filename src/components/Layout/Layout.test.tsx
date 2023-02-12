import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { mockStore, mockUiStoreTrue } from "../../mocks/store";
import { Wrapper } from "../../mocks/Wrapper";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  const store = mockStore;
  const uiStore = mockUiStoreTrue;

  render(
    <Wrapper beersStore={store} uiStore={uiStore}>
      <Layout />
    </Wrapper>,
    { wrapper: BrowserRouter }
  );

  describe("When it's rendered", () => {
    test("Then it should show the Header component withthe Coder's Brew logo", () => {
      const layoutHeader = screen.getByRole("heading", {
        level: 2,
      });

      expect(layoutHeader).toBeInTheDocument();
    });
    describe("When rendered and the aplication is loading data", () => {
      test("Then it should render a loader", () => {});

      const areaLabelText = screen.getByRole("dialog", {
        name: "page is loading...",
      });

      expect(areaLabelText).toBeInTheDocument();
    });
  });
});
