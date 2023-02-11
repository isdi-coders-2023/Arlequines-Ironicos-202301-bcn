import { CamelCaseBeersStructure } from "../../../data/types";
import {
  BeersAction,
  BeersActionType,
  LoadBeersAction,
} from "../../actions/beers/types";

import beersReducer from "./beersReducer";

describe("Given the beerListReducer function", () => {
  const initialBeers: CamelCaseBeersStructure = [];

  describe("When it receives an empty list and an action with a type that doesn't exist and a list of two beers", () => {
    test("Then it should return an empty list", () => {
      const twoBeersPayload: CamelCaseBeersStructure = [
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
      const expectedNewBeers: CamelCaseBeersStructure = [];
      const nonExistentAction: LoadBeersAction = {
        type: "" as unknown as BeersActionType,
        payload: twoBeersPayload,
      };

      const newBeers = beersReducer(initialBeers, nonExistentAction);

      expect(newBeers).toStrictEqual(expectedNewBeers);
    });
  });

  describe("When it receives an empty list, and a load action with a two beers list payload", () => {
    test("Then it should return a list of two beers", () => {
      const expectedNewBeers: CamelCaseBeersStructure = [
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
      const loadBeersAction: BeersAction = {
        type: BeersActionType.loadBeers,
        payload: expectedNewBeers,
      };

      const newBeers = beersReducer(initialBeers, loadBeersAction);

      expect(newBeers).toStrictEqual(expectedNewBeers);
    });
  });
});
