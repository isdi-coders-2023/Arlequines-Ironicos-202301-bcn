import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When rendered", () => {
    test("Then it should render the Coders' Brew brand logo image", () => {
      render(<Header />);

      const brandLogoImg = screen.getByRole("img", {
        name: "Coders' Brew logo image",
      });

      expect(brandLogoImg).toBeInTheDocument();
    });

    test("Then it should render the Coders' Brew brand logo text", () => {
      render(<Header />);

      const brandLogoText = screen.getByRole("img", {
        name: "Coders' Brew logo text",
      });

      expect(brandLogoText).toBeInTheDocument();
    });
  });
});
