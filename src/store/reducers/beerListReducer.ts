import { BeerStructure } from "../../data/types";
import {
  beerListAction,
  beerListActionType,
  LoadBeerListAction,
} from "../actions/beerList/types";

const beerListReducer = (
  currentBeerList: BeerStructure[],
  action: beerListAction
) => {
  let newBeerList: BeerStructure[];

  switch (action.type) {
    case beerListActionType.loadBeerList:
      newBeerList = [...(action as LoadBeerListAction).payload];
      break;

    default:
      newBeerList = currentBeerList;
  }

  return newBeerList;
};

export default beerListReducer;
