import { BeersStructure } from "../../../data/types";
import { BeersActionType, LoadBeersAction } from "./types";

export const loadBeersActionCreator = (
  beers: BeersStructure
): LoadBeersAction => ({
  type: BeersActionType.loadBeers,
  payload: beers,
});
