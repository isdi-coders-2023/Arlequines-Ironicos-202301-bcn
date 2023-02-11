import { render, screen } from "@testing-library/react";
import GlobalStyles from "../../GlobalStyles";
import BeersContextWrapper from "../../store/contexts/beers/BeersContextWrapper";
import HomePage from "./HomePage";

describe("Given the HomePage Component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list of cards", () => {
      render(
        <BeersContextWrapper>
          <GlobalStyles />
          <HomePage />
        </BeersContextWrapper>
      );

      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });
  });
});
