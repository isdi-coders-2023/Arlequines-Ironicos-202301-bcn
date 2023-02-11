export interface MaltStructure {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}

export interface HopStructure {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
  add: string;
  attribute: string;
}

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
    malt: MaltStructure[];

    hops: HopStructure[];

    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
}
export type BeersStructure = BeerStructure[];

export interface CamelCaseBeerStructure {
  id: number;
  name: string;
  tagline: string;
  firstBrewed: string;
  description: string;
  imageUrl: string;
  abv: number;
  ibu: number;
  volume: {
    value: number;
    unit: string;
  };
  ingredients: {
    malt: MaltStructure[];

    hops: HopStructure[];

    yeast: string;
  };
  foodPairing: string[];
  brewersTips: string;
}

export type CamelCaseBeersStructure = CamelCaseBeerStructure[];
