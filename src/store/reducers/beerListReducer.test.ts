import { BeerListStructure } from "../../data/types";
import {
  BeerListAction,
  BeerListActionType,
  LoadBeerListAction,
} from "../actions/beerList/types";
import beerListReducer from "./beerListReducer";

describe("Given the beerListReducer function", () => {
  const initialBeerList: BeerListStructure = [];

  describe("When it receives an empty list and an action with a type that doesn't exist and a list of two beers", () => {
    test("Then it should return an empty list", () => {
      const twoBeerListPayload: BeerListStructure = [
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
      const expectedNewBeerList: BeerListStructure = [];
      const nonExistentAction: LoadBeerListAction = {
        type: BeerListActionType.defaultActionType,
        payload: twoBeerListPayload,
      };

      const newBeerList = beerListReducer(initialBeerList, nonExistentAction);

      expect(newBeerList).toStrictEqual(expectedNewBeerList);
    });
  });

  describe("When it receives an empty list, and a load action with a two beers list payload", () => {
    test("Then it should return a list of two beers", () => {
      const expectedNewBeerList: BeerListStructure = [
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
      const loadBeerListAction: BeerListAction = {
        type: BeerListActionType.loadBeerList,
        payload: expectedNewBeerList,
      };

      const newBeerList = beerListReducer(initialBeerList, loadBeerListAction);

      expect(newBeerList).toStrictEqual(expectedNewBeerList);
    });
  });
});
