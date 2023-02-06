interface VolumeStructure {
  value: number;
  unit: string;
}

interface Mash_temp_TempStructure {
  value: number;
  unit: string;
}

interface Mash_tempStructure {
  temp: Mash_temp_TempStructure;
  duration: number;
}

interface Fermentation_temp {
  value: number;
  unit: string;
}

interface FermentationStructure {
  temp: Fermentation_temp;
}

interface MethodStructure {
  mash_temp: Mash_tempStructure;
  fermentation: FermentationStructure;
  twist: string;
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

export interface BeersStructure {
  id: string;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  ph: number;
  volume: VolumeStructure;
  method: MethodStructure;
  ingredients: IngredientsStructure;
  food_pairing: string[];
  brewers_tips: string;
}
