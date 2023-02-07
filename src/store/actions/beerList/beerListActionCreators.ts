import { BeerStructure } from "../../../data/types";
import { beerListActionType, LoadBeerListAction } from "./types";

export const loadBeerListActionCreator = (
  beerList: BeerStructure[]
): LoadBeerListAction => ({
  type: beerListActionType.loadBeerList,
  payload: beerList,
});
