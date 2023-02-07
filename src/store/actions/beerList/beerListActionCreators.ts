import { BeerListStructure } from "../../../data/types";
import { BeerListActionType, LoadBeerListAction } from "./types";

export const loadBeerListActionCreator = (
  beerList: BeerListStructure
): LoadBeerListAction => ({
  type: BeerListActionType.loadBeerList,
  payload: beerList,
});
