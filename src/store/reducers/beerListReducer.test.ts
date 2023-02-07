import { BeerStructure } from "../../data/types";
import { beerListAction, beerListActionType } from "../actions/beerList/types";
import beerListReducer from "./beerListReducer";

describe("Given the beerListReducer function", () => {
  describe("When it receives an empty list, and a load action with a two beers list payload", () => {
    test("Then it should return a list of two beers", () => {
      const initialBeerList: BeerStructure[] = [];
      const expectedNewBeerList: BeerStructure[] = [
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
      const loadBeerListAction: beerListAction = {
        type: beerListActionType.loadBeerList,
        payload: expectedNewBeerList,
      };

      const newBeerList = beerListReducer(initialBeerList, loadBeerListAction);

      expect(newBeerList).toStrictEqual(expectedNewBeerList);
    });
  });
});
