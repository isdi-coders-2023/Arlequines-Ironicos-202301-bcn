import { createContext } from "vm";
import { BeerListStructure } from "../../data/types";
import { BeerListAction } from "../actions/beerList/types";

interface BeerListContextStructure {
  beerList: BeerListStructure;
  dispatch: React.Dispatch<BeerListAction>;
}

const BeerListContext = createContext({} as BeerListContextStructure);

export default BeerListContext;
