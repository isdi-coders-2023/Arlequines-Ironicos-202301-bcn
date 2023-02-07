interface VolumeStructure {
  value: number;
  unit: string;
}
interface MaltAmountStructure {
  value: number;
  unit: string;
}

interface MaltStructure {
  name: string;
  amount: MaltAmountStructure;
}

interface HopsAmountStructure {
  value: number;
  unit: string;
}

interface HopsStructure {
  name: string;
  amount: HopsAmountStructure;
  add: string;
  attribute: string;
}

interface IngredientsStructure {
  malt: MaltStructure[];
  hops: HopsStructure[];
  yeast: string;
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
  volume: VolumeStructure;
  ingredients: IngredientsStructure;
  food_pairing: string[];
  brewers_tips: string;
}
export interface BeerListStructure {
  BeerList: BeerStructure[];
}
