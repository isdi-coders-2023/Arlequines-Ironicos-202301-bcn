import { BeerStructure } from "../../../data/types";
import { BeerListActionType, LoadBeerListAction } from "./types";

export const loadBeerListActionCreator = (
  beerList: BeerStructure[]
): LoadBeerListAction => ({
  type: BeerListActionType.loadBeerList,
  payload: beerList,
});
