import { CamelCaseBeersStructure } from "../../../data/types";
import { loadBeersActionCreator } from "./beersActionCreators";

import { BeersAction, BeersActionType } from "./types";

describe("Given the beerCardListActionCreator function", () => {
  describe("When it receives a list of two beers", () => {
    test("Then it should return an action with type loadBeerList and the two beers as payload", () => {
      const beers: CamelCaseBeersStructure = [
        {
          id: 1,
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
          id: 2,
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
      const expectedLoadBeersAction: BeersAction = {
        type: BeersActionType.loadBeers,
        payload: beers,
      };

      const loadBeersAction = loadBeersActionCreator(beers);

      expect(loadBeersAction).toStrictEqual(expectedLoadBeersAction);
    });
  });
});
