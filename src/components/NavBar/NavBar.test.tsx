import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("Given a NavBar component", () => {
  describe("When rendered", () => {
    render(<NavBar />);

    test("Then it should render an anchor that leads to Home Page", () => {
      const homePageAnchor = screen.getByRole("link", { name: "to Home Page" });

      expect(homePageAnchor).toBeInTheDocument();
    });

    test("Then it should render an anchor that leads to Brew Beer Page", () => {
      render(<NavBar />);

      const brewBeerAnchor = screen.getByRole("link", {
        name: "to Brew Beer Page",
      });

      expect(brewBeerAnchor).toBeInTheDocument();
    });

    test("Then it should render an anchor that leads to My Beers Page", () => {
      render(<NavBar />);

      const myBeersAnchor = screen.getByRole("link", {
        name: "to My Beers Page",
      });

      expect(myBeersAnchor).toBeInTheDocument();
    });
  });
});
