import { BeersStructure } from "../../../data/types";
import {
  BeersAction,
  BeersActionType,
  LoadBeersAction,
} from "../../actions/beers/types";

import beersReducer from "./beersReducer";

describe("Given the beerListReducer function", () => {
  const initialBeers: BeersStructure = [];

  describe("When it receives an empty list and an action with a type that doesn't exist and a list of two beers", () => {
    test("Then it should return an empty list", () => {
      const twoBeersPayload: BeersStructure = [
        {
          id: 2,
          name: "Storm",
          tagline: "",
          first_brewed: "",
          description: "",
          image_url: "",
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
          food_pairing: [""],
          brewers_tips: "",
        },
        {
          id: 4,
          name: "Pilsen",
          tagline: "",
          first_brewed: "",
          description: "",
          image_url: "",
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
          food_pairing: [""],
          brewers_tips: "",
        },
      ];
      const expectedNewBeers: BeersStructure = [];
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
      const expectedNewBeers: BeersStructure = [
        {
          id: 2,
          name: "Storm",
          tagline: "",
          first_brewed: "",
          description: "",
          image_url: "",
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
          food_pairing: [""],
          brewers_tips: "",
        },
        {
          id: 4,
          name: "Pilsen",
          tagline: "",
          first_brewed: "",
          description: "",
          image_url: "",
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
          food_pairing: [""],
          brewers_tips: "",
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
