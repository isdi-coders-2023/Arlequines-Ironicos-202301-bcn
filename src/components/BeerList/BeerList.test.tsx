import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CamelCaseBeersStructure } from "../../data/types";
import BeerList from "./BeerList";

describe("Given the BeerList component", () => {
  describe("When rendered receiving a list of 2 beers with name 'Storm' and 'Pilsen'", () => {
    test("Then it should show a list of two beer cards, one with name 'Storm'", () => {
      const beersList: CamelCaseBeersStructure = [
        {
          id: 2,
          name: "Storm",
          tagline: "",
          firstBrewed: "",
          description: "",
          imageUrl: "",
          abv: 1,
          ibu: 1,
          volume: { value: 1, unit: "" },
          ingredients: {
            hops: [
              {
                add: "",
                amount: { unit: "", value: 1 },
                attribute: "",
                name: "",
              },
            ],
            malt: [{ amount: { unit: "", value: 1 }, name: "" }],
            yeast: "",
          },
          foodPairing: [""],
          brewersTips: "",
        },
        {
          id: 4,
          name: "Pilsen",
          tagline: "",
          firstBrewed: "",
          description: "",
          imageUrl: "",
          abv: 1,
          ibu: 1,
          volume: { value: 1, unit: "" },
          ingredients: {
            hops: [
              {
                add: "",
                amount: { unit: "", value: 1 },
                attribute: "",
                name: "",
              },
            ],
            malt: [{ amount: { unit: "", value: 1 }, name: "" }],
            yeast: "",
          },
          foodPairing: [""],
          brewersTips: "",
        },
      ];

      render(<BeerList beers={beersList}></BeerList>, {
        wrapper: BrowserRouter,
      });

      const beerName = screen.getByRole("heading", { name: "Storm" });

      expect(beerName).toBeInTheDocument();
    });
  });
});
