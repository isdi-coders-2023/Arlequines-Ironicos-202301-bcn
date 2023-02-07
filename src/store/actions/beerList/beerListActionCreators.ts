import { BeerStructure } from "../../../data/types";
import { beerListActionType, LoadBeerListAction } from "./types";

export const LoadBeerListActionCreator = (
  beerList: BeerStructure[]
): LoadBeerListAction => ({
  type: beerListActionType.loadBeerList,
  payload: beerList,
});
