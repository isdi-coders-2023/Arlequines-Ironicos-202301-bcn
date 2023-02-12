import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  describe("When it's rendered", () => {
    test("Then it should show text '' in the header", () => {
      const expectedText = "home";

      render(<Layout />, { wrapper: BrowserRouter });

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
