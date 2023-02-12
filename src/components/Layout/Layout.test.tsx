import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given the Layout component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the Header component withthe Coder's Brew logo", () => {
      render(<Layout />);

      const layoutHeader = screen.getByRole("heading", {
        level: 2,
      });

      expect(layoutHeader).toBeInTheDocument();
    });
  });
});
