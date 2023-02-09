import { render, screen } from "@testing-library/react";
import { BeerStructure } from "../../data/types";
import BeerCard from "./BeerCard";

describe("Given the BeerCard component", () => {
  const beerInfo: BeerStructure = {
    id: 1,
    name: "Buzz",
    tagline: "A Real Bitter Experience.",
    first_brewed: "09/2007",
    description:
      "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 4.5,
    ibu: 60,

    volume: {
      value: 20,
      unit: "litres",
    },
    ingredients: {
      malt: [
        {
          name: "Maris Otter Extra Pale",
          amount: {
            value: 3.3,
            unit: "kilograms",
          },
        },
      ],
      hops: [
        {
          name: "Fuggles",
          amount: {
            value: 25,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
      ],
      yeast: "Wyeast 1056 - American Ale™",
    },
    food_pairing: [
      "Spicy chicken tikka masala",
      "Grilled chicken quesadilla",
      "Caramel toffee cake",
    ],
    brewers_tips:
      "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
  };

  describe("When is rendered", () => {
    test("Then it should show the name of a beer", () => {
      const expectedName = "Buzz";

      render(<BeerCard beer={beerInfo} />);
      const text = screen.getByRole("heading", { name: expectedName });

      expect(text).toBeVisible();
    });

    test("Then it should show a beer image", () => {
      const expectedAlternativeText = `${beerInfo.name} beer`;

      render(<BeerCard beer={beerInfo} />);
      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });
  });
});
