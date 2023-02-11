import convertKebabCaseToCamelCase from "./convertKebabCaseToCamelCase";

describe("Given the convertKebabCaseToCamelCase function", () => {
  describe("When it receives a list with a beer object with properties on kebab-case", () => {
    test("Then it should return the same list with the beer object with its properties on camelCase", () => {
      const kebabCaseBeerList = [
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
      ];
      const expectedCamelCaseBeerList = [
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
      ];

      const camelCaseBeer = convertKebabCaseToCamelCase(kebabCaseBeerList);

      expect(camelCaseBeer).toStrictEqual(expectedCamelCaseBeerList);
    });
  });
});
