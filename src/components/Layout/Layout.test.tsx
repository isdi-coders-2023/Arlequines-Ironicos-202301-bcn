import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the Header component with the Coder's Brew logo", () => {
      render(<Layout />, { wrapper: BrowserRouter });

      const brandLogoText = screen.getByRole("img", {
        name: "Coders' Brew logo",
      });

      expect(brandLogoText).toBeInTheDocument();
    });
  });
});
