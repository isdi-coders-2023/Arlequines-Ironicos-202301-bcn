import { BeerStructure } from "../../data/types";
import {
  BeerListAction,
  BeerListActionType,
  LoadBeerListAction,
} from "../actions/beerList/types";

const beerListReducer = (
  currentBeerList: BeerStructure[],
  action: BeerListAction
) => {
  let newBeerList: BeerStructure[];

  if (action.type === BeerListActionType.loadBeerList) {
    newBeerList = [...(action as LoadBeerListAction).payload];
  }
  newBeerList = currentBeerList;

  return newBeerList;
};

export default beerListReducer;
