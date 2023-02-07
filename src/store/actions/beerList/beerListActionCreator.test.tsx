import { BeerStructure } from "../../../data/types";
import { loadBeerListActionCreator } from "./beerListActionCreators";
import { BeerListAction, BeerListActionType } from "./types";

describe("Given the beerCardListActionCreator function", () => {
  describe("When it receives a list of two beers", () => {
    test("Then it should return an action with type loadBeerList and the two beers as payload", () => {
      const beerList: BeerStructure[] = [
        {
          id: 1,
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
          id: 2,
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
      const expectedLoadBeerListAction: BeerListAction = {
        type: BeerListActionType.loadBeerList,
        payload: beerList,
      };

      const loadBeerListAction = loadBeerListActionCreator(beerList);

      expect(loadBeerListAction).toStrictEqual(expectedLoadBeerListAction);
    });
  });
});
