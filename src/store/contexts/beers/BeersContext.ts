import { createContext } from "react";
import { CamelCaseBeersStructure } from "../../../data/types";
import { BeersAction } from "../../actions/beers/types";

interface BeersContextStructure {
  beers: CamelCaseBeersStructure;
  dispatch: React.Dispatch<BeersAction>;
}

const BeersContext = createContext({} as BeersContextStructure);

export default BeersContext;
