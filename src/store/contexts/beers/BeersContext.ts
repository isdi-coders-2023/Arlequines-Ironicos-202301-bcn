import { createContext } from "react";
import { BeersStructure } from "../../../data/types";
import { BeersAction } from "../../actions/beers/types";

interface BeersContextStructure {
  beers: BeersStructure;
  dispatch: React.Dispatch<BeersAction>;
}

const BeerListContext = createContext({} as BeersContextStructure);

export default BeerListContext;
