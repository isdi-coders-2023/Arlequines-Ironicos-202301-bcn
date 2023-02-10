const handlerBody = [
  {
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
        {
          name: "Caramalt",
          amount: {
            value: 0.2,
            unit: "kilograms",
          },
        },
        {
          name: "Munich",
          amount: {
            value: 0.4,
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
        {
          name: "First Gold",
          amount: {
            value: 25,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Fuggles",
          amount: {
            value: 37.5,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "First Gold",
          amount: {
            value: 37.5,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Cascade",
          amount: {
            value: 37.5,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
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
  },
];

export default handlerBody;
