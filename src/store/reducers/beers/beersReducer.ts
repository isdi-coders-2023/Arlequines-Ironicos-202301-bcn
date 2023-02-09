import { BeersStructure } from "../../../data/types";
import {
  BeersAction,
  BeersActionType,
  LoadBeersAction,
} from "../../actions/beers/types";

const beersReducer = (currentBeers: BeersStructure, action: BeersAction) => {
  let newBeers: BeersStructure;

  if (action.type !== BeersActionType.loadBeers) {
    newBeers = currentBeers;
    return newBeers;
  }
  newBeers = [...(action as LoadBeersAction).payload];
  return newBeers;
};

export default beersReducer;
