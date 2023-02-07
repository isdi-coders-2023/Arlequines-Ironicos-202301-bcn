export interface BeerStructure {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  volume: {
    value: number;
    unit: string;
  };
  ingredients: {
    malt: [
      {
        name: string;
        amount: {
          value: number;
          unit: string;
        };
      }
    ];
    hops: [
      {
        name: string;
        amount: {
          value: number;
          unit: string;
        };
        add: string;
        attribute: string;
      }
    ];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
}
export type BeerListStructure = BeerStructure[];
