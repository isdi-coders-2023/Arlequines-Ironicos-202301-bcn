import { beerListActionType, LoadBeerListAction } from "./types";

export const LoadBeerListActionCreator = (
  beerList: unknown[]
): LoadBeerListAction => ({
  type: beerListActionType.loadBeerList,
  payload: beerList,
});
